import type { APIRoute } from "astro";
import { listReleases, readRepoFile } from "../../../lib/content";

export function getStaticPaths() {
  return listReleases().map((release) => ({ params: { release: release.id } }));
}

export const GET: APIRoute = ({ params }) =>
  new Response(readRepoFile(`releases/${params.release}/resolutions.json`), {
    headers: { "Content-Type": "application/json" },
  });
