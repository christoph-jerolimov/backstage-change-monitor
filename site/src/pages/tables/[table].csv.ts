import type { APIRoute } from "astro";
import { listTables, readRepoFile } from "../../lib/content";

export function getStaticPaths() {
  return listTables().map((table) => ({ params: { table } }));
}

export const GET: APIRoute = ({ params }) =>
  new Response(readRepoFile(`tables/${params.table}.csv`), {
    headers: { "Content-Type": "text/csv; charset=utf-8" },
  });
