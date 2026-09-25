import * as path from "node:path";
import type { Element, Root as HastRoot } from "hast";
import type { Root as MdastRoot } from "mdast";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import { visit } from "unist-util-visit";
import { repoFileExists, repoUrl, siteUrlForRepoPath, withBase } from "./content";

/**
 * Upstream changelogs mention JSX like `<ScaffolderPage />` outside of code
 * spans. Rendering that as HTML would swallow the following content, so raw
 * HTML is shown as literal text instead.
 */
function remarkRawHtmlAsText() {
  return (tree: MdastRoot) => {
    visit(tree, "html", (node, index, parent) => {
      if (parent && index !== undefined) {
        parent.children[index] = { type: "text", value: node.value };
      }
    });
  };
}

function safeDecodeURI(uri: string): string {
  try {
    return decodeURI(uri);
  } catch {
    return uri;
  }
}

/**
 * Rewrites relative links between the generated files (e.g.
 * `../../changelogs/@backstage/ui.md#0180`) to the matching site pages, links
 * to other repository files to GitHub, and wraps tables for horizontal scrolling.
 */
function rehypeRepoLinks(options: { file: string }) {
  const dir = path.posix.dirname(options.file);
  return (tree: HastRoot) => {
    visit(tree, "element", (node, index, parent) => {
      if (node.tagName === "table" && parent && index !== undefined) {
        const wrapper: Element = {
          type: "element",
          tagName: "div",
          properties: { className: ["table-wrapper"] },
          children: [node],
        };
        parent.children[index] = wrapper;
        return "skip";
      }
      if (node.tagName !== "a") return;
      const href = node.properties.href;
      if (typeof href !== "string" || /^([a-z][a-z0-9+.-]*:|#|\/)/i.test(href)) return;

      // Upstream changelogs contain links relative to their original location
      // in backstage/backstage; those do not exist here and stay untouched.
      const [target, hash] = href.split("#", 2);
      const rel = path.posix.normalize(path.posix.join(dir, safeDecodeURI(target)));
      if (rel.startsWith("..") || !repoFileExists(rel)) return;
      const suffix = hash !== undefined ? `#${hash}` : "";
      const url = siteUrlForRepoPath(rel);
      node.properties.href = url ? withBase(url) + suffix : `${repoUrl}/blob/main/${rel}${suffix}`;
    });
  };
}

/** Renders a repository markdown file (path relative to the repository root) to HTML. */
export function renderMarkdown(markdown: string, file: string): string {
  return String(
    unified()
      .use(remarkParse)
      .use(remarkGfm)
      .use(remarkRawHtmlAsText)
      .use(remarkRehype)
      .use(rehypeSlug)
      .use(rehypeRepoLinks, { file })
      .use(rehypeStringify)
      .processSync(markdown),
  );
}
