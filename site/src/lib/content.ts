import * as fs from "node:fs";
import * as path from "node:path";
import semver from "semver";

/** The site lives in `site/`; all generated data is one level up. */
export const repoRoot = path.resolve(process.env.REPO_ROOT ?? path.join(process.cwd(), ".."));
export const repoUrl = "https://github.com/christoph-jerolimov/backstage-change-monitor";
export const NEXT = "next";

export function readRepoFile(rel: string): string {
  return fs.readFileSync(path.join(repoRoot, rel), "utf8");
}

export function repoFileExists(rel: string): boolean {
  return fs.existsSync(path.join(repoRoot, rel));
}

/** Prefixes a site-absolute path ("/releases/") with the configured base path. */
export function withBase(url: string): string {
  return import.meta.env.BASE_URL.replace(/\/$/, "") + url;
}

/** Deterministic codepoint sort — deliberately not localeCompare, same as the generator scripts. */
export function byCodepoint(a: string, b: string): number {
  return a < b ? -1 : a > b ? 1 : 0;
}

// ---------------------------------------------------------------------------
// Releases

export interface Release {
  /** Folder name below releases/: a stable version or "next". */
  id: string;
  /** Release version from the manifest (e.g. "1.56.0-next.0" for "next"). */
  version: string;
}

let releasesCache: Release[] | undefined;

/** All releases, `next` first (if present), then newest to oldest. */
export function listReleases(): Release[] {
  if (releasesCache) return releasesCache;
  const dir = path.join(repoRoot, "releases");
  const stable = fs
    .readdirSync(dir)
    .filter((id) => semver.valid(id) && fs.existsSync(path.join(dir, id, "manifest.json")))
    .sort(semver.rcompare)
    .map((id) => ({ id, version: id }));
  const next: Release[] = fs.existsSync(path.join(dir, NEXT, "manifest.json"))
    ? [{ id: NEXT, version: readManifest(NEXT).releaseVersion }]
    : [];
  releasesCache = [...next, ...stable];
  return releasesCache;
}

export interface Manifest {
  releaseVersion: string;
  packages: { name: string; version: string }[];
}

export function readManifest(id: string): Manifest {
  return JSON.parse(readRepoFile(`releases/${id}/manifest.json`)) as Manifest;
}

// ---------------------------------------------------------------------------
// Changelogs

let changelogsCache: string[] | undefined;

/** Package names that have a changelog, e.g. "@backstage/ui" or "example-app". */
export function listChangelogPackages(): string[] {
  if (changelogsCache) return changelogsCache;
  const base = path.join(repoRoot, "changelogs");
  const files = fs.readdirSync(base, { recursive: true, encoding: "utf8" });
  changelogsCache = files
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.split(path.sep).join("/").slice(0, -".md".length))
    .sort(byCodepoint);
  return changelogsCache;
}

// ---------------------------------------------------------------------------
// Tables

/** Table names (without extension) in the order the README lists them. */
export function listTables(): string[] {
  return fs
    .readdirSync(path.join(repoRoot, "tables"))
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.slice(0, -".md".length))
    .sort(byCodepoint);
}

/** The first `# heading` of a markdown file, used as page title. */
export function markdownTitle(markdown: string, fallback: string): string {
  return /^# (.+)$/m.exec(markdown)?.[1].trim() ?? fallback;
}

/** Minimal RFC 4180 parser — the generator only quotes cells containing `,`, `"` or newlines. */
export function parseCsv(text: string): Record<string, string>[] {
  const rows: string[][] = [];
  let row: string[] = [];
  let cell = "";
  let quoted = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (quoted) {
      if (c === '"' && text[i + 1] === '"') {
        cell += '"';
        i++;
      } else if (c === '"') {
        quoted = false;
      } else {
        cell += c;
      }
    } else if (c === '"') {
      quoted = true;
    } else if (c === ",") {
      row.push(cell);
      cell = "";
    } else if (c === "\n") {
      row.push(cell);
      rows.push(row);
      row = [];
      cell = "";
    } else if (c !== "\r") {
      cell += c;
    }
  }
  if (cell || row.length) {
    row.push(cell);
    rows.push(row);
  }
  const [header, ...body] = rows.filter((r) => r.some((value) => value !== ""));
  return body.map((r) => Object.fromEntries(header.map((key, i) => [key, r[i] ?? ""])));
}

// ---------------------------------------------------------------------------
// Repository path → site URL

/**
 * Maps a repository-relative path to the site URL (without base) that shows it,
 * or undefined if the site does not publish it.
 */
export function siteUrlForRepoPath(rel: string): string | undefined {
  rel = rel.replace(/\/$/, "");
  if (rel === "" || rel === "README.md") return "/";
  if (rel === "releases" || rel === "changelogs" || rel === "tables") return `/${rel}/`;

  let m = /^releases\/([^/]+)\/(README\.md|CHANGELOG\.md|manifest\.json|resolutions\.json)?$/.exec(rel);
  if (m) {
    if (!m[2] || m[2] === "README.md") return `/releases/${m[1]}/`;
    if (m[2] === "CHANGELOG.md") return `/releases/${m[1]}/changelog/`;
    return `/${rel}`;
  }
  m = /^changelogs\/(.+)\.md$/.exec(rel);
  if (m) return `/changelogs/${m[1]}/`;
  m = /^tables\/([^/]+)\.(md|csv)$/.exec(rel);
  if (m) return m[2] === "md" ? `/tables/${m[1]}/` : `/${rel}`;
  return undefined;
}
