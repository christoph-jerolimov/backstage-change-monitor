// @ts-check
import { defineConfig } from "astro/config";

// GitHub Pages serves the site from https://<owner>.github.io/<repo>/. The deploy
// workflow passes the values reported by actions/configure-pages, so a custom
// domain or a renamed repository keeps working without touching this file.
export default defineConfig({
  site: process.env.SITE_URL ?? "https://christoph-jerolimov.github.io",
  base: process.env.BASE_PATH ?? "/backstage-change-monitor",
  trailingSlash: "always",
});
