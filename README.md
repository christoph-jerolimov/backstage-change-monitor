# Backstage Change Monitor 🎧

Automatically maintained mirror and analysis of the official Backstage package changelogs and metadata from [backstage/backstage](https://github.com/backstage/backstage) and [backstage/community-plugins](https://github.com/backstage/community-plugins), and of the release manifests from [backstage/versions](https://github.com/backstage/versions).

A [GitHub workflow](.github/workflows/update.yml) runs daily at 06:17 UTC (and on demand via *Run workflow*), clones both upstream repositories, regenerates everything below, and commits changes to `main` in a single commit.

## Website

Everything below is also published as a browsable website at <https://christoph-jerolimov.github.io/backstage-change-monitor/>. The [Astro](https://astro.build) site in [`site/`](site) renders the generated Markdown files and is deployed to GitHub Pages by the [Deploy website workflow](.github/workflows/pages.yml) on every push to `main` and after every run of the update workflow. Build it locally with `cd site && npm ci && npm run build` (or `npm run dev`).

## Package versions

One column per release with the version of every package, ordered `next` (if a next release exists), then newest to oldest release. Minor releases are represented by the latest patch of their minor line. Note: the *all releases* files are large and GitHub may not render the Markdown version — use the last-10 files for browsing.

| Package versions | Markdown | CSV |
| --- | --- | --- |
| Last 10 releases | [package-versions-last-10-releases.md](tables/package-versions-last-10-releases.md) | [package-versions-last-10-releases.csv](tables/package-versions-last-10-releases.csv) |
| Last 10 minor releases | [package-versions-last-10-minor-releases.md](tables/package-versions-last-10-minor-releases.md) | [package-versions-last-10-minor-releases.csv](tables/package-versions-last-10-minor-releases.csv) |
| All minor releases | [package-versions-all-minor-releases.md](tables/package-versions-all-minor-releases.md) | [package-versions-all-minor-releases.csv](tables/package-versions-all-minor-releases.csv) |
| All releases | [package-versions-all-releases.md](tables/package-versions-all-releases.md) | [package-versions-all-releases.csv](tables/package-versions-all-releases.csv) |

## Number of changed packages

One row per release (newest to oldest, incl. `next` if it exists), comparing each release with the direct previous one: counts of added, removed, upgraded, and unchanged packages, plus the bumps that need extra attention (major, `0.x` minor, `0.0.x` patch).

| Number of changed packages | Markdown | CSV |
| --- | --- | --- |
| All releases | [number-of-changed-packages-all-releases.md](tables/number-of-changed-packages-all-releases.md) | [number-of-changed-packages-all-releases.csv](tables/number-of-changed-packages-all-releases.csv) |
| All minor releases | [number-of-changed-packages-all-minor-releases.md](tables/number-of-changed-packages-all-minor-releases.md) | [number-of-changed-packages-all-minor-releases.csv](tables/number-of-changed-packages-all-minor-releases.csv) |

## Per-release folders

Each `releases/<version>/` folder contains:

- `manifest.json` — copied verbatim from `backstage/versions` (`v1/releases/<version>/`)
- `README.md` — generated diff against the previous patch release (if any) and the previous minor release (highest patch of the previous minor line), highlighting ⚠️ major version bumps, 🆕 added and ❌ removed packages
- `resolutions.json` — the manifest transformed into a package.json-style `{ "resolutions": { "<package>": "<version>" } }` map
- `CHANGELOG.md` — the changelog sections of all packages changed or added since the direct previous release, sliced from [`changelogs/`](changelogs) to the versions after the previous release (exclusive) up to this release (inclusive). `@backstage/*` dependency-update entries are excluded by default (packages that only had such updates are listed at the end); can be built for any release pair with `npm run changelog -- <from> <to> [--dep-updates include|exclude-backstage|exclude-all]`

`0.x` and prerelease versions are ignored. `releases/next/` exists only while `backstage/versions` has a `-next` release that is newer than the latest stable release; it is removed otherwise.

## Changelogs

The [`changelogs/`](changelogs) folder holds a `CHANGELOG.md` copy for **every package that ever appeared in a release manifest**, stored as `changelogs/<scope>/<name>.md` (e.g. `changelogs/@backstage/plugin-scaffolder.md`). They are refreshed on every workflow run:

- Packages still present on `backstage/backstage` `main` (in `packages/*` and `plugins/*`) are copied from there on every run.
- `@backstage-community/*` packages are copied from all workspaces of `backstage/community-plugins` (in `workspaces/*/plugins/*` and `workspaces/*/packages/*`) on every run.
- Packages that were removed from `main` (e.g. plugins moved to community repos) are fetched once from the release tag of the newest release that still listed them; existing files are never re-fetched.
- The job fails if any package listed in any release manifest ends up without a changelog.

## Package descriptions

The same workflow also reads each package's `package.json` and generates tables of every package that ever appeared in a release manifest with its Backstage role, description, and — for deprecated packages (no longer on `main`) — the last release that included it.

| Package descriptions | Markdown | CSV |
| --- | --- | --- |
| Active packages | [package-descriptions.md](tables/package-descriptions.md) | [package-descriptions.csv](tables/package-descriptions.csv) |
| Deprecated packages | [package-descriptions-deprecated.md](tables/package-descriptions-deprecated.md) | [package-descriptions-deprecated.csv](tables/package-descriptions-deprecated.csv) |
| All packages | [package-descriptions-all.md](tables/package-descriptions-all.md) | [package-descriptions-all.csv](tables/package-descriptions-all.csv) |
