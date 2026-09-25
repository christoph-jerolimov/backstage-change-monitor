# Backstage Release 1.51.0 changelog

Changes between 1.50.7 and 1.51.0 — 2 added, 0 removed, 198 upgraded, 9 unchanged packages.

## Summary

- [Newly added packages](#newly-added-packages): 2 packages
- [Breaking changes](#breaking-changes): 7 packages
- [Major version bumps](#major-version-bumps): 3 packages
- [0.x minor version bumps](#0x-minor-version-bumps): 2 packages
- [0.0.x patch version bumps](#00x-patch-version-bumps): 2 packages
- [0.x patch version bumps](#0x-patch-version-bumps): 66 packages
- [Other minor version bumps](#other-minor-version-bumps): 7 packages
- [Other patch version bumps](#other-patch-version-bumps): 14 packages
- [Excluded dependency updates](#excluded-dependency-updates): 97 packages

## Table of contents

- [Newly added packages](#newly-added-packages)
  - [`@backstage/plugin-catalog-backend-module-ai-model` (new, 0.1.0)](#backstageplugin-catalog-backend-module-ai-model-new-010)
  - [`@backstage/plugin-catalog-backend-module-msgraph-incremental` (new, 0.1.0)](#backstageplugin-catalog-backend-module-msgraph-incremental-new-010)
- [Breaking changes](#breaking-changes)
  - [`@backstage/frontend-plugin-api` (0.16.2 → 0.17.0)](#backstagefrontend-plugin-api-0162--0170)
  - [`@backstage/frontend-test-utils` (0.5.2 → 0.6.0)](#backstagefrontend-test-utils-052--060)
  - [`@backstage/plugin-auth-backend` (0.28.0 → 0.29.0)](#backstageplugin-auth-backend-0280--0290)
  - [`@backstage/plugin-catalog-backend` (3.6.2 → 3.7.0)](#backstageplugin-catalog-backend-362--370)
  - [`@backstage/plugin-catalog-backend-module-msgraph` (0.9.2 → 0.10.0)](#backstageplugin-catalog-backend-module-msgraph-092--0100)
  - [`@backstage/plugin-permission-node` (0.10.12 → 0.11.0)](#backstageplugin-permission-node-01012--0110)
  - [`@backstage/ui` (0.14.3 → 0.15.0)](#backstageui-0143--0150)
- [Major version bumps](#major-version-bumps)
  - [`@backstage/plugin-catalog-react` (2.1.4 → 3.0.0)](#backstageplugin-catalog-react-214--300)
  - [`@backstage/plugin-scaffolder-backend` (3.4.1 → 4.0.0)](#backstageplugin-scaffolder-backend-341--400)
  - [`@backstage/plugin-scaffolder-react` (1.20.1 → 2.0.0)](#backstageplugin-scaffolder-react-1201--200)
- [0.x minor version bumps](#0x-minor-version-bumps)
  - [`@backstage/eslint-plugin` (0.2.3 → 0.3.0)](#backstageeslint-plugin-023--030)
  - [`@backstage/integration-aws-node` (0.1.21 → 0.2.0)](#backstageintegration-aws-node-0121--020)
- [0.0.x patch version bumps](#00x-patch-version-bumps)
  - [`@backstage/plugin-catalog-unprocessed-entities-common` (0.0.15 → 0.0.16)](#backstageplugin-catalog-unprocessed-entities-common-0015--0016)
  - [`@backstage/plugin-signals` (0.0.30 → 0.0.31)](#backstageplugin-signals-0030--0031)
- [0.x patch version bumps](#0x-patch-version-bumps)
  - [`@backstage/backend-defaults` (0.17.0 → 0.17.1)](#backstagebackend-defaults-0170--0171)
  - [`@backstage/backend-dynamic-feature-service` (0.8.1 → 0.8.2)](#backstagebackend-dynamic-feature-service-081--082)
  - [`@backstage/cli` (0.36.1 → 0.36.2)](#backstagecli-0361--0362)
  - [`@backstage/cli-module-build` (0.1.2 → 0.1.3)](#backstagecli-module-build-012--013)
  - [`@backstage/cli-module-new` (0.1.2 → 0.1.3)](#backstagecli-module-new-012--013)
  - [`@backstage/cli-node` (0.3.1 → 0.3.2)](#backstagecli-node-031--032)
  - [`@backstage/core-compat-api` (0.5.10 → 0.5.11)](#backstagecore-compat-api-0510--0511)
  - [`@backstage/core-components` (0.18.9 → 0.18.10)](#backstagecore-components-0189--01810)
  - [`@backstage/create-app` (0.8.2 → 0.8.3)](#backstagecreate-app-082--083)
  - [`@backstage/filter-predicates` (0.1.2 → 0.1.3)](#backstagefilter-predicates-012--013)
  - [`@backstage/frontend-app-api` (0.16.2 → 0.16.3)](#backstagefrontend-app-api-0162--0163)
  - [`@backstage/frontend-defaults` (0.5.1 → 0.5.2)](#backstagefrontend-defaults-051--052)
  - [`@backstage/frontend-dynamic-feature-loader` (0.1.11 → 0.1.12)](#backstagefrontend-dynamic-feature-loader-0111--0112)
  - [`@backstage/module-federation-common` (0.1.3 → 0.1.4)](#backstagemodule-federation-common-013--014)
  - [`@backstage/plugin-api-docs` (0.14.0 → 0.14.1)](#backstageplugin-api-docs-0140--0141)
  - [`@backstage/plugin-app` (0.4.5 → 0.4.6)](#backstageplugin-app-045--046)
  - [`@backstage/plugin-app-backend` (0.5.13 → 0.5.14)](#backstageplugin-app-backend-0513--0514)
  - [`@backstage/plugin-app-visualizer` (0.2.3 → 0.2.4)](#backstageplugin-app-visualizer-023--024)
  - [`@backstage/plugin-auth` (0.1.7 → 0.1.8)](#backstageplugin-auth-017--018)
  - [`@backstage/plugin-auth-backend-module-cloudflare-access-provider` (0.4.14 → 0.4.15)](#backstageplugin-auth-backend-module-cloudflare-access-provider-0414--0415)
  - [`@backstage/plugin-auth-backend-module-oidc-provider` (0.4.15 → 0.4.16)](#backstageplugin-auth-backend-module-oidc-provider-0415--0416)
  - [`@backstage/plugin-auth-node` (0.7.0 → 0.7.1)](#backstageplugin-auth-node-070--071)
  - [`@backstage/plugin-catalog-backend-module-aws` (0.4.22 → 0.4.23)](#backstageplugin-catalog-backend-module-aws-0422--0423)
  - [`@backstage/plugin-catalog-backend-module-azure` (0.3.16 → 0.3.17)](#backstageplugin-catalog-backend-module-azure-0316--0317)
  - [`@backstage/plugin-catalog-backend-module-backstage-openapi` (0.5.13 → 0.5.14)](#backstageplugin-catalog-backend-module-backstage-openapi-0513--0514)
  - [`@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.5.10 → 0.5.11)](#backstageplugin-catalog-backend-module-bitbucket-cloud-0510--0511)
  - [`@backstage/plugin-catalog-backend-module-bitbucket-server` (0.5.10 → 0.5.11)](#backstageplugin-catalog-backend-module-bitbucket-server-0510--0511)
  - [`@backstage/plugin-catalog-backend-module-gerrit` (0.3.13 → 0.3.14)](#backstageplugin-catalog-backend-module-gerrit-0313--0314)
  - [`@backstage/plugin-catalog-backend-module-gitea` (0.1.11 → 0.1.12)](#backstageplugin-catalog-backend-module-gitea-0111--0112)
  - [`@backstage/plugin-catalog-backend-module-github` (0.13.1 → 0.13.2)](#backstageplugin-catalog-backend-module-github-0131--0132)
  - [`@backstage/plugin-catalog-backend-module-github-org` (0.3.21 → 0.3.22)](#backstageplugin-catalog-backend-module-github-org-0321--0322)
  - [`@backstage/plugin-catalog-backend-module-gitlab` (0.8.2 → 0.8.3)](#backstageplugin-catalog-backend-module-gitlab-082--083)
  - [`@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.7.11 → 0.7.12)](#backstageplugin-catalog-backend-module-incremental-ingestion-0711--0712)
  - [`@backstage/plugin-catalog-backend-module-ldap` (0.12.4 → 0.12.5)](#backstageplugin-catalog-backend-module-ldap-0124--0125)
  - [`@backstage/plugin-catalog-backend-module-puppetdb` (0.2.21 → 0.2.22)](#backstageplugin-catalog-backend-module-puppetdb-0221--0222)
  - [`@backstage/plugin-catalog-backend-module-unprocessed` (0.6.11 → 0.6.12)](#backstageplugin-catalog-backend-module-unprocessed-0611--0612)
  - [`@backstage/plugin-catalog-graph` (0.6.3 → 0.6.4)](#backstageplugin-catalog-graph-063--064)
  - [`@backstage/plugin-catalog-import` (0.13.12 → 0.13.13)](#backstageplugin-catalog-import-01312--01313)
  - [`@backstage/plugin-catalog-unprocessed-entities` (0.2.30 → 0.2.31)](#backstageplugin-catalog-unprocessed-entities-0230--0231)
  - [`@backstage/plugin-devtools` (0.1.38 → 0.1.39)](#backstageplugin-devtools-0138--0139)
  - [`@backstage/plugin-devtools-backend` (0.5.16 → 0.5.17)](#backstageplugin-devtools-backend-0516--0517)
  - [`@backstage/plugin-home` (0.9.5 → 0.9.6)](#backstageplugin-home-095--096)
  - [`@backstage/plugin-kubernetes-backend` (0.21.3 → 0.21.4)](#backstageplugin-kubernetes-backend-0213--0214)
  - [`@backstage/plugin-kubernetes-common` (0.9.11 → 0.9.12)](#backstageplugin-kubernetes-common-0911--0912)
  - [`@backstage/plugin-kubernetes-node` (0.4.3 → 0.4.4)](#backstageplugin-kubernetes-node-043--044)
  - [`@backstage/plugin-kubernetes-react` (0.5.18 → 0.5.19)](#backstageplugin-kubernetes-react-0518--0519)
  - [`@backstage/plugin-mcp-actions-backend` (0.1.12 → 0.1.13)](#backstageplugin-mcp-actions-backend-0112--0113)
  - [`@backstage/plugin-notifications` (0.5.16 → 0.5.17)](#backstageplugin-notifications-0516--0517)
  - [`@backstage/plugin-notifications-backend` (0.6.4 → 0.6.5)](#backstageplugin-notifications-backend-064--065)
  - [`@backstage/plugin-notifications-backend-module-slack` (0.4.1 → 0.4.2)](#backstageplugin-notifications-backend-module-slack-041--042)
  - [`@backstage/plugin-notifications-common` (0.2.2 → 0.2.3)](#backstageplugin-notifications-common-022--023)
  - [`@backstage/plugin-notifications-node` (0.2.25 → 0.2.26)](#backstageplugin-notifications-node-0225--0226)
  - [`@backstage/plugin-org` (0.7.3 → 0.7.4)](#backstageplugin-org-073--074)
  - [`@backstage/plugin-permission-backend` (0.7.11 → 0.7.12)](#backstageplugin-permission-backend-0711--0712)
  - [`@backstage/plugin-permission-common` (0.9.8 → 0.9.9)](#backstageplugin-permission-common-098--099)
  - [`@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.3.22 → 0.3.23)](#backstageplugin-scaffolder-backend-module-cookiecutter-0322--0323)
  - [`@backstage/plugin-scaffolder-backend-module-github` (0.9.8 → 0.9.9)](#backstageplugin-scaffolder-backend-module-github-098--099)
  - [`@backstage/plugin-scaffolder-backend-module-gitlab` (0.11.5 → 0.11.6)](#backstageplugin-scaffolder-backend-module-gitlab-0115--0116)
  - [`@backstage/plugin-scaffolder-backend-module-yeoman` (0.4.21 → 0.4.22)](#backstageplugin-scaffolder-backend-module-yeoman-0421--0422)
  - [`@backstage/plugin-scaffolder-node` (0.13.2 → 0.13.3)](#backstageplugin-scaffolder-node-0132--0133)
  - [`@backstage/plugin-search-backend-module-pg` (0.5.54 → 0.5.55)](#backstageplugin-search-backend-module-pg-0554--0555)
  - [`@backstage/plugin-signals-backend` (0.3.14 → 0.3.15)](#backstageplugin-signals-backend-0314--0315)
  - [`@backstage/plugin-signals-node` (0.2.0 → 0.2.1)](#backstageplugin-signals-node-020--021)
  - [`@backstage/plugin-user-settings` (0.9.2 → 0.9.3)](#backstageplugin-user-settings-092--093)
  - [`@backstage/plugin-user-settings-backend` (0.4.2 → 0.4.3)](#backstageplugin-user-settings-backend-042--043)
  - [`@backstage/repo-tools` (0.17.1 → 0.17.2)](#backstagerepo-tools-0171--0172)
- [Other minor version bumps](#other-minor-version-bumps)
  - [`@backstage/backend-app-api` (1.6.1 → 1.7.0)](#backstagebackend-app-api-161--170)
  - [`@backstage/catalog-model` (1.8.0 → 1.9.0)](#backstagecatalog-model-180--190)
  - [`@backstage/plugin-scaffolder` (1.36.2 → 1.37.0)](#backstageplugin-scaffolder-1362--1370)
  - [`@backstage/plugin-scaffolder-common` (2.1.1 → 2.2.0)](#backstageplugin-scaffolder-common-211--220)
  - [`@backstage/plugin-techdocs-backend` (2.1.8 → 2.2.0)](#backstageplugin-techdocs-backend-218--220)
  - [`@backstage/plugin-techdocs-node` (1.14.8 → 1.15.0)](#backstageplugin-techdocs-node-1148--1150)
  - [`@techdocs/cli` (1.10.8 → 1.11.0)](#techdocscli-1108--1110)
- [Other patch version bumps](#other-patch-version-bumps)
  - [`@backstage/backend-plugin-api` (1.9.0 → 1.9.1)](#backstagebackend-plugin-api-190--191)
  - [`@backstage/backend-test-utils` (1.11.2 → 1.11.3)](#backstagebackend-test-utils-1112--1113)
  - [`@backstage/core-plugin-api` (1.12.5 → 1.12.6)](#backstagecore-plugin-api-1125--1126)
  - [`@backstage/errors` (1.3.0 → 1.3.1)](#backstageerrors-130--131)
  - [`@backstage/integration` (2.0.1 → 2.0.2)](#backstageintegration-201--202)
  - [`@backstage/plugin-catalog` (2.0.4 → 2.0.5)](#backstageplugin-catalog-204--205)
  - [`@backstage/plugin-catalog-node` (2.2.0 → 2.2.1)](#backstageplugin-catalog-node-220--221)
  - [`@backstage/plugin-search` (1.7.3 → 1.7.4)](#backstageplugin-search-173--174)
  - [`@backstage/plugin-search-backend` (2.1.1 → 2.1.2)](#backstageplugin-search-backend-211--212)
  - [`@backstage/plugin-search-backend-module-elasticsearch` (1.8.2 → 1.8.3)](#backstageplugin-search-backend-module-elasticsearch-182--183)
  - [`@backstage/plugin-search-backend-node` (1.4.3 → 1.4.4)](#backstageplugin-search-backend-node-143--144)
  - [`@backstage/plugin-search-react` (1.11.3 → 1.11.4)](#backstageplugin-search-react-1113--1114)
  - [`@backstage/plugin-techdocs` (1.17.5 → 1.17.6)](#backstageplugin-techdocs-1175--1176)
  - [`@backstage/plugin-techdocs-react` (1.3.10 → 1.3.11)](#backstageplugin-techdocs-react-1310--1311)
- [Excluded dependency updates](#excluded-dependency-updates)

## Newly added packages

### `@backstage/plugin-catalog-backend-module-ai-model` (new, [0.1.0](../../changelogs/@backstage/plugin-catalog-backend-module-ai-model.md#010))

#### 0.1.0

##### Minor Changes

- [`3664148`](https://github.com/backstage/backstage/commit/3664148): Introduced the `AiResource` catalog entity kind. Entity types, validators, type guards, and the model layer are exported from `@backstage/catalog-model/alpha`. Install `@backstage/plugin-catalog-backend-module-ai-model` in your backend to register the kind with the catalog.

### `@backstage/plugin-catalog-backend-module-msgraph-incremental` (new, [0.1.0](../../changelogs/@backstage/plugin-catalog-backend-module-msgraph-incremental.md#010))

#### 0.1.0

##### Minor Changes

- [`2bd0450`](https://github.com/backstage/backstage/commit/2bd0450): **BREAKING**: Disabled user accounts are now filtered out by default. The provider automatically applies an `accountEnabled eq true` filter, combining it with any custom `user.filter` you provide. If you previously included `accountEnabled eq true` in your user filter, it is safe to remove it, but leaving it in will not cause any issues.
- [`f1279ea`](https://github.com/backstage/backstage/commit/f1279ea): Introduces a cursor-based incremental ingestion provider for Microsoft Graph that processes users and groups one page at a time. Unlike `MicrosoftGraphOrgEntityProvider`, this module never holds the full dataset in memory — each burst processes a single page (up to 999 users or 100 groups). The `@odata.nextLink` cursor is persisted so a pod restart resumes from the last completed page rather than starting over.

## Breaking changes

### `@backstage/frontend-plugin-api` (0.16.2 → [0.17.0](../../changelogs/@backstage/frontend-plugin-api.md#0170))

#### 0.17.0

##### Minor Changes

- [`44d77e9`](https://github.com/backstage/backstage/commit/44d77e9): **BREAKING**: Removed the deprecated `NavItemBlueprint`. Navigation items are now discovered from `PageBlueprint` extensions based on their `title` and `icon` params.

  If you were still using `NavItemBlueprint`, migrate by moving `title` and `icon` to your `PageBlueprint` instead:

  ```diff
  -const navItem = NavItemBlueprint.make({
  -  params: { title: 'Example', icon: ExampleIcon, routeRef },
  -});
   const page = PageBlueprint.make({
     params: {
  +    title: 'Example',
  +    icon: <ExampleIcon fontSize="inherit" />,
       routeRef,
       path: '/example',
       loader: () => import('./Page').then(m => <m.Page />),
     },
   });
  ```

  `PageBlueprint` expects an `IconElement` rather than a Material UI `IconComponent`, so this is also a good time to switch to [Remix Icon](https://remixicon.com/) if you were using Material UI icons only for the nav item:

  ```diff
  -import ExampleIcon from '@material-ui/icons/Extension';
  +import { RiPuzzleLine } from '@remixicon/react';
   ...
  -    icon: ExampleIcon,
  +    icon: <RiPuzzleLine />,
  ```

- [`8738203`](https://github.com/backstage/backstage/commit/8738203): **BREAKING**: Removed the deprecated property form of `PortableSchema.schema`. The `schema` member is now a plain method that must be called as `schema()` — direct property access like `schema.type` or `schema.properties` is no longer supported.

##### Patch Changes

- [`ab1cdbb`](https://github.com/backstage/backstage/commit/ab1cdbb): Removed a handful of internal imports that referenced the package by its own name. Value imports were switched to relative paths, and type-only imports to `import type`. These self-referential imports could trigger circular initialization errors in bundled ESM and when the package was loaded via `jest.requireActual` — most visibly `Cannot access '_AppRootElementBlueprintesm' before initialization` from `@backstage/frontend-plugin-api`. There are no user-facing API changes.
- [`cad156e`](https://github.com/backstage/backstage/commit/cad156e): Replaced old config schema values from existing extensions and blueprints.
- [`72a552f`](https://github.com/backstage/backstage/commit/72a552f): Updated error messages and deprecation warnings to clarify that the `zod/v4` subpath export from the Zod v3 package is not supported by `configSchema`, since it does not include JSON Schema conversion. The `zod` dependency has been bumped to `^4.0.0`.

### `@backstage/frontend-test-utils` (0.5.2 → [0.6.0](../../changelogs/@backstage/frontend-test-utils.md#060))

#### 0.6.0

##### Minor Changes

- [`44d77e9`](https://github.com/backstage/backstage/commit/44d77e9): **BREAKING**: `renderInTestApp` no longer renders a sidebar or legacy `nav-item` extensions. The app nav extension is now disabled in the minimal test app shell, along with the layout and routes extensions.

  If your tests passed `features` containing `nav-item` extensions and asserted on links or labels in that stub sidebar, switch to `renderTestApp` instead — it uses the real app shell and discovers nav items from page extensions.

  If you only use `renderInTestApp` to mount a component with APIs or route refs, there is no change.

##### Patch Changes

- [`0c298f7`](https://github.com/backstage/backstage/commit/0c298f7): Removed internal `mockWithApiFactory` helper in favor of using `attachMockApiFactory` directly.
- [`fa363f9`](https://github.com/backstage/backstage/commit/fa363f9): Added support for `ExternalRouteRef` in the `mountedRoutes` option of `renderInTestApp` and `renderTestApp`.
- [`9279ea8`](https://github.com/backstage/backstage/commit/9279ea8): Added explicit type annotations to `.map()` callback parameters in `renderInTestApp` to avoid implicit `any` errors with newer TypeScript versions.

### `@backstage/plugin-auth-backend` (0.28.0 → [0.29.0](../../changelogs/@backstage/plugin-auth-backend.md#0290))

#### 0.29.0

##### Minor Changes

- [`29d398b`](https://github.com/backstage/backstage/commit/29d398b): **BREAKING**: Hardened the default allowed patterns for CIMD and DCR to replace the previous permissive `['*']` wildcards with specific defaults for known MCP clients. If you previously relied on the default `['*']` patterns, you will need to explicitly configure the patterns you need in your `app-config.yaml`.

  **CIMD (`experimentalClientIdMetadataDocuments`):**

  - `allowedClientIdPatterns` now defaults to Claude, VS Code, and the built-in Backstage CLI instead of `['*']`
  - `allowedRedirectUriPatterns` now defaults to loopback addresses (localhost, 127.0.0.1, [::1]) instead of `['*']`

  **DCR (`experimentalDynamicClientRegistration`):**

  - `allowedRedirectUriPatterns` now defaults to Cursor and loopback addresses instead of `['*']`

  If you need to allow additional clients or redirect URIs, you can override these defaults in your `app-config.yaml`:

  ```yaml
  auth:
    experimentalClientIdMetadataDocuments:
      enabled: true
      allowedClientIdPatterns:
        - 'https://claude.ai/*'
        - 'https://vscode.dev/*'
        - 'https://my-custom-client.example.com/*'
      allowedRedirectUriPatterns:
        - 'http://localhost:*'
        - 'http://127.0.0.1:*'
        - 'https://my-app.example.com/callback'
    experimentalDynamicClientRegistration:
      enabled: true
      allowedRedirectUriPatterns:
        - 'cursor://*'
        - 'http://localhost:*'
        - 'http://127.0.0.1:*'
        - 'myapp://*'
  ```

##### Patch Changes

- [`9f269d7`](https://github.com/backstage/backstage/commit/9f269d7): Limit the size of fetched client ID metadata documents to prevent oversized responses from being accepted.
- [`3f5e7ec`](https://github.com/backstage/backstage/commit/3f5e7ec): Improved OIDC error messages to include the rejected redirect URI or client ID, making it easier to debug client registration failures.
- [`e9b78e9`](https://github.com/backstage/backstage/commit/e9b78e9): Removed the `uuid` dependency and replaced usage with the built-in `crypto.randomUUID()`.
- [`27f24a9`](https://github.com/backstage/backstage/commit/27f24a9): Refresh token usage now verifies that the user's catalog entity still exists before issuing a new access token. If the user has been removed from the catalog, the refresh is rejected and the session is revoked. Transient catalog errors reject the refresh but preserve the session for retry. This check can be disabled by setting `auth.experimentalRefreshToken.dangerouslyDisableCatalogPresenceCheck` to `true`.
- [`4f62755`](https://github.com/backstage/backstage/commit/4f62755): Improved the OAuth consent dialog for MCP authorization by showing more client details, including the client metadata host for CIMD clients, the metadata URL, callback URL, and requested scopes.

### `@backstage/plugin-catalog-backend` (3.6.2 → [3.7.0](../../changelogs/@backstage/plugin-catalog-backend.md#370))

#### 3.7.0

##### Minor Changes

- [`c2de113`](https://github.com/backstage/backstage/commit/c2de113): **BREAKING**: When paginating entities with an order field via `/entities/by-query`, entities that lack the order field are now excluded from both the result set and the `totalItems` count. Previously these entities appeared at the end of the sorted result via `NULLS LAST`, but cursor-based pagination could not actually reach them past the first page — the count over-reported the number of navigable entities. The new behavior aligns the count with what is actually returned.

  This also removes the `DISTINCT` deduplication from the sort-field CTE, which is a prerequisite for the planner to use the `(key, value, entity_id)` index in sort order and short-circuit on `LIMIT`. Installations with duplicate search rows should land the search-table deduplication migration before adopting this change.

##### Patch Changes

- [`3f5e7ec`](https://github.com/backstage/backstage/commit/3f5e7ec): Added `catalog.actions.experimentalCatalogLayersDescriptions.enabled` config option. When enabled, the `query-catalog-entities` action description references `get-catalog-model-description` for field information instead of embedding a static model description.
- [`ccbad9d`](https://github.com/backstage/backstage/commit/ccbad9d): Improved the performance of the `catalog_entities_count` metric.

  The legacy Prometheus and OpenTelemetry observable gauges previously each ran their own copy of the per-kind count query against the `search` table on every metrics scrape. On large catalogs this could pile up faster than the queries completed, contending for buffers and stalling the database.

  The two callbacks now share a single query result with a short in-process TTL cache, and the underlying query reads from `final_entities` instead of `search`, avoiding the bitmap heap scans that dominated the previous form. The emitted labels and values are unchanged.

- [`17a9550`](https://github.com/backstage/backstage/commit/17a9550): Deprecated immediate mode stitching (`catalog.stitchingStrategy.mode: 'immediate'`). A warning is now logged on startup when immediate mode is configured. Immediate mode will be removed in the next Backstage release. Migrate to deferred mode (the default) by removing the `stitchingStrategy` configuration or setting `mode: 'deferred'`.
- [`add5d1a`](https://github.com/backstage/backstage/commit/add5d1a): Restructured the entity listing endpoint so that, when a sort field is specified, the search-by-key index drives the query rather than being side-joined onto `final_entities`. This lets PostgreSQL walk the `(key, value, entity_id)` index in already-sorted order and short-circuit on `LIMIT`, reducing typical broad-filter paginated list times from seconds to milliseconds. Entities that lack the sort field still appear at the end of sorted results (NULLS LAST semantics preserved), ordered by `entity_id`.
- [`387ea7d`](https://github.com/backstage/backstage/commit/387ea7d): Simplified the entity facets aggregation from `COUNT(DISTINCT entity_id)` to `COUNT(*)`. The unique constraint on `(entity_id, key, value)` guarantees each entity appears at most once per search row group, making the `DISTINCT` unnecessary. This allows the database to use a simpler aggregation plan.
- [`3f55b73`](https://github.com/backstage/backstage/commit/3f55b73): Improved the performance of the entity facets endpoint when filters are applied. The filtered entity set is now combined with the search table through an inner join rather than a `WHERE entity_id IN (subquery)`. Results are unchanged; on large catalogs the query planner is able to choose dramatically cheaper plans, with measured improvements ranging from roughly 1.2× on already-fast cases to 7× or more on high-cardinality facets.
- [`b33f845`](https://github.com/backstage/backstage/commit/b33f845): Fixed several database migration `down` functions that were not properly reversible, causing the SQL report to show warnings:

  - `20241003170511_alter_target_in_locations.js`: both `up` and `down` now include `.notNullable()` when altering the `locations.target` column, preventing the `NOT NULL` constraint from being accidentally dropped when widening the column type from `varchar(255)` to `text`.
  - `20220116144621_remove_legacy.js`: the `down` function now properly recreates the three dropped legacy tables (`entities`, `entities_search`, `entities_relations`) with correct columns and indices.
  - `20210302150147_refresh_state.js`: the `down` function now drops dependent tables in the correct order (avoiding a FK constraint violation) and fixes a typo where the table was referred to as `references` instead of `refresh_state_references`.
  - `20201005122705_add_entity_full_name.js`: the `down` function now drops the `full_name` column from `entities` (not `entities_search`), and restores the `entities_unique_name` index with the correct column order `(kind, name, namespace)`.
  - `20200702153613_entities.js`: the `down` function now uses `table.integer('generation')` instead of `table.string('generation')`, restoring the correct column type.

- [`cde3643`](https://github.com/backstage/backstage/commit/cde3643): Added missing description to the `type` parameter on the `unregister-entity` MCP action.
- [`cf195de`](https://github.com/backstage/backstage/commit/cf195de): Fixed a performance regression in the `/entity-facets` endpoint when filters or permission conditions are applied, by routing the EXISTS-based filter through `final_entities` instead of correlating against the much larger `search` table.
- [`07ec25d`](https://github.com/backstage/backstage/commit/07ec25d): Moved `generateStableHash` out of shared utility file to avoid pulling `node:crypto` into browser bundles
- [`bc32c13`](https://github.com/backstage/backstage/commit/bc32c13): Added a missing index on `relations.target_entity_ref`. Several query paths (orphan deletion, entity ancestry, eager pruning) join or filter on this column, but no index existed — causing full sequential scans of the relations table on every invocation. On a production catalog with ~3.5M relation rows, individual lookups were taking ~122ms (full table scan) instead of <1ms (index scan).
- [`744fa1f`](https://github.com/backstage/backstage/commit/744fa1f): Removed duplicated entries that appeared in both `dependencies` and `devDependencies`.
- [`e9b78e9`](https://github.com/backstage/backstage/commit/e9b78e9): Removed the `uuid` dependency and replaced usage with the built-in `crypto.randomUUID()`.
- [`7445f0f`](https://github.com/backstage/backstage/commit/7445f0f): Added a migration that removes duplicate rows from the `search` table, creates covering indices for improved query performance, and adds a `UNIQUE` constraint on `(entity_id, key, value)`.

  This is a long-running migration on large catalogs. On PostgreSQL with millions of search rows, the index creation may take 5-15 minutes per index. During this time, other pods running the previous version will continue to serve traffic normally — the index creation does not block reads or writes. However, if a Kubernetes liveness probe kills the pod before the index build completes, the build is lost and the next startup will start over. On large tables this can repeat indefinitely.

  **For large installations**, it is recommended to run the following SQL commands against your PostgreSQL database **before deploying** this version. Each index build takes a few minutes but does not block reads or writes. If these have already completed, the migration will detect the existing indices and skip all work — startup will be instant.

  ```sql
  -- Step 1: Remove duplicate search rows
  WITH cte AS (
    SELECT ctid, row_number() OVER (PARTITION BY entity_id, key, value) AS rn
    FROM search
  )
  DELETE FROM search USING cte WHERE search.ctid = cte.ctid AND cte.rn > 1;

  -- Step 2: Create new indices (run each separately)
  CREATE UNIQUE INDEX CONCURRENTLY IF NOT EXISTS
    search_entity_key_value_idx ON search (entity_id, key, value);
  CREATE INDEX CONCURRENTLY IF NOT EXISTS
    search_key_value_entity_idx ON search (key, value, entity_id);
  CREATE INDEX CONCURRENTLY IF NOT EXISTS
    search_facets_covering_idx ON search (key, original_value, entity_id)
    WHERE original_value IS NOT NULL;

  -- Step 3: Drop old indices that are no longer needed
  DROP INDEX CONCURRENTLY IF EXISTS search_key_value_idx;
  DROP INDEX CONCURRENTLY IF EXISTS search_key_original_value_idx;
  ```

  Also fixed `buildEntitySearch` to remove duplicate output for entities with duplicate array values, and added `ON CONFLICT DO UPDATE` to `syncSearchRows` so that concurrent stitching races are handled gracefully.

### `@backstage/plugin-catalog-backend-module-msgraph` (0.9.2 → [0.10.0](../../changelogs/@backstage/plugin-catalog-backend-module-msgraph.md#0100))

#### 0.10.0

##### Minor Changes

- [`2bd0450`](https://github.com/backstage/backstage/commit/2bd0450): **BREAKING**: Disabled user accounts are now filtered out by default. The provider automatically applies an `accountEnabled eq true` filter, combining it with any custom `user.filter` you provide. If you previously included `accountEnabled eq true` in your user filter, it is safe to remove it, but leaving it in will not cause any issues.

##### Patch Changes

- [`e9b78e9`](https://github.com/backstage/backstage/commit/e9b78e9): Removed the `uuid` dependency and replaced usage with the built-in `crypto.randomUUID()`.

### `@backstage/plugin-permission-node` (0.10.12 → [0.11.0](../../changelogs/@backstage/plugin-permission-node.md#0110))

#### 0.11.0

##### Minor Changes

- [`2f0519c`](https://github.com/backstage/backstage/commit/2f0519c): **BREAKING**: Cleaned up the `PolicyQueryUser` type:

  - `token` — **Removed.** Was previously deprecated in favor of `credentials` with `coreServices.auth`.
  - `expiresInSeconds` — **Removed.** Was previously deprecated.
  - `identity` — **Removed.** Was previously deprecated in favor of `info`.
  - `info` — **Deprecated.** Still required and populated for now; will be made optional and then removed in a future release.
  - `credentials` — Unchanged.

### `@backstage/ui` (0.14.3 → [0.15.0](../../changelogs/@backstage/ui.md#0150))

#### 0.15.0

##### Minor Changes

- [`a281469`](https://github.com/backstage/backstage/commit/a281469): Add support for flex item props (`grow`, `shrink`, and `basis`) to `Box`, `Card`, `Grid`, and `Flex` itself.

  **Affected components:** Box, Card, Grid, Flex

- [`5351d8a`](https://github.com/backstage/backstage/commit/5351d8a): Added a `sticky` prop to the `Header` component. When `true`, the title-and-actions bar stays fixed to the top of its scroll container while the rest of the header (tags, description, metadata) scrolls away. The sticky bar background color automatically matches the container surface using the bg-consumer system.

  **BREAKING**: Removed the main header class from the `Header` component. Custom styles that target this class should be updated to target the component sections that remain.

  **Affected components:** Header

##### Patch Changes

- [`3846774`](https://github.com/backstage/backstage/commit/3846774): Added missing dependencies that were previously only available transitively.
- [`e8a1a35`](https://github.com/backstage/backstage/commit/e8a1a35): Added `isPending` prop to Alert, Button, ButtonIcon, Table, and TableRoot as a replacement for the `loading` prop, aligning with React Aria naming conventions. The `loading` prop is now deprecated but still supported as an alias. CSS selectors now use `data-ispending` instead of `data-loading` for styling pending states; `data-loading` is still emitted for backward compatibility but will be removed alongside the `loading` prop.

  **Affected components:** Alert, Button, ButtonIcon, Table, TableRoot

- [`37535b2`](https://github.com/backstage/backstage/commit/37535b2): Added a public `--bui-bg-inherit` CSS variable that resolves to the background
  color of the nearest enclosing bg provider (`Box`, `Flex`, `Grid`, `Card`,
  `Accordion`, or any element with a `data-bg` attribute), falling back to
  `--bui-bg-app`. Use it from CSS for sticky or fixed elements that need to match
  their surrounding surface without hardcoding a specific level.

  ```css
  .searchBarContainer {
    position: sticky;
    top: 0;
    background-color: var(--bui-bg-inherit);
  }
  ```

  As part of this change, the `data-bg` painting rules previously duplicated in
  `Box`, `Flex`, `Grid`, `Accordion`, and `Card` have been centralized into a
  single source in `core.css`. Painting and component behavior are unchanged for
  all existing usages, with one minor expansion: any element with a `data-bg`
  attribute (including provider elements and any element that sets it directly)
  is now painted, not only `Box`/`Flex`/`Grid`/`Card`/`Accordion` elements.

- [`e2d9831`](https://github.com/backstage/backstage/commit/e2d9831): Tightened React Aria dependency version ranges from `^` to `~` to prevent unintended minor version upgrades.
- [`e7fc79f`](https://github.com/backstage/backstage/commit/e7fc79f): Added support for grouping options into sections in the Select component. You can now pass section objects with a `title` and a nested `options` array alongside (or instead of) regular options to render grouped dropdowns with section headers.

  **Affected components:** Select

- [`76635ae`](https://github.com/backstage/backstage/commit/76635ae): Disabled `Card` scroll shadow in browsers that don't support `animation-timeline: scroll()`. Prevents the shadow from being always visible over the `CardBody` when there's nothing to scroll or the body is not scrolled.

  **Affected components:** Card

- [`de75f7c`](https://github.com/backstage/backstage/commit/de75f7c): Fixed `CardBody` showing an unwanted scrollbar when constrained below the scroll shadow height.

  **Affected components:** Card

- [`a42766e`](https://github.com/backstage/backstage/commit/a42766e): Fixed dark mode background for Dialog component by correcting the theme attribute selector from `data-theme` to `data-theme-mode`.

  **Affected components:** Dialog

- [`c6fc76f`](https://github.com/backstage/backstage/commit/c6fc76f): Fixed an issue where the active tab indicator would disappear shortly after page load for uncontrolled Tabs.

  **Affected components:** Tabs

- [`5520e07`](https://github.com/backstage/backstage/commit/5520e07): Updated field components to grow within flex layouts instead of forcing their width to remain fixed.
- [`11699ac`](https://github.com/backstage/backstage/commit/11699ac): Updated `PasswordField` to visually match `TextField`, including consistent focus rings, error states, disabled appearance, and background colour behaviour.

  **Affected components:** PasswordField

- [`d1be10c`](https://github.com/backstage/backstage/commit/d1be10c): Updated React Aria dependencies to v1.17.0 and migrated imports from individual `@react-aria/*` and `@react-stately/*` packages to the monopackages (`react-aria`, `react-stately`). This fixes a type resolution error for `@react-types/table` that occurred in new app installations.
- [`c96e2b3`](https://github.com/backstage/backstage/commit/c96e2b3): Added `description`, `tags`, and `metadata` props to the `Header` component. The `description` prop accepts a markdown string with support for inline links. The `tags` prop renders a row of text or link items above the title. The `metadata` prop renders key-value pairs below the description. The `breadcrumbs` prop has been deprecated and will be removed in a future release.

  **Affected components:** Header

- [`4bb649d`](https://github.com/backstage/backstage/commit/4bb649d): Fixed Table with row selection creating phantom scroll height on ancestor elements by establishing a containing block for visually-hidden checkbox inputs.

  **Affected components:** Table, TableRoot

- [`f635139`](https://github.com/backstage/backstage/commit/f635139): Limited `@remixicon/react` dependency to versions below 4.9.0 due to a license change in that release.
- [`5b85902`](https://github.com/backstage/backstage/commit/5b85902): Fix `Card href=...` not showing a focus indicator on keyboard navigation. `Link` now composes `useFocusRing`, emits `data-focus-visible`, and renders a `--bui-ring` outline when keyboard-focused. The Card's existing focus-ring CSS matches when the trigger is focused.

  _Affected components_: Card, Link

- [`23ee789`](https://github.com/backstage/backstage/commit/23ee789): Added invalid-state styling for Checkbox and corresponding Storybook variants for verification.

  **Affected components:** Checkbox, CheckboxGroup

- [`38bb056`](https://github.com/backstage/backstage/commit/38bb056): Adjusted PluginHeader spacing and borders so headers with and without tabs align more consistently with surrounding page content, including when paired with page headers.

  **Affected components:** PluginHeader, Header

- [`df705bb`](https://github.com/backstage/backstage/commit/df705bb): Fixed external URLs in BUI link components being rewritten as in-app paths when the app is served under a non-root base path. Absolute URLs (`http://`, `https://`, `//`, `mailto:`, `tel:`) are now passed through unchanged. Internal `href` values are resolved against the current `basename` exactly once, which also fixes a latent issue where internal link clicks under a non-root base path could navigate to a URL with the `basename` prefix doubled.

  **Affected components:** ButtonLink, Card, Link, Menu, Tab, Table, Tag

- [`3e0ff6c`](https://github.com/backstage/backstage/commit/3e0ff6c): Added container alignment to `Header` sections so tags, title actions, descriptions, metadata, and tabs use the same width as surrounding page content.

  **Affected components:** Header

- [`b67a862`](https://github.com/backstage/backstage/commit/b67a862): Updated Storybook development tooling for `@backstage/ui` to version 10.4.
- [`d726bcd`](https://github.com/backstage/backstage/commit/d726bcd): Added new `DatePicker` component — combines a date field and a calendar popover for selecting a date, built on React Aria with full keyboard and screen reader accessibility. Uses BUI design tokens throughout, including auto-incremented backgrounds via the bg consumer pattern.

  **Affected components:** DatePicker

- [`401916d`](https://github.com/backstage/backstage/commit/401916d): Added new `DateRangePicker` component — combines two date fields and a calendar popover for selecting a date range, built on React Aria with full keyboard and screen reader accessibility. Uses BUI design tokens throughout, including auto-incremented backgrounds via the bg consumer pattern.
- [`25909ba`](https://github.com/backstage/backstage/commit/25909ba): Added `searchDebounceMs` and `filterDebounceMs` options to `useTable` in `complete` mode. Both default to `0` (no debounce, no observable change for existing consumers); set them to defer the client-side filter/search/sort pipeline on large datasets without reimplementing input-layer debouncing. The controlled `search` / `onSearchChange` and `filter` / `onFilterChange` callbacks continue to fire on every change.

  **Affected components:** Table

- [`ddca41f`](https://github.com/backstage/backstage/commit/ddca41f): Added a new `Combobox` component. It pairs a text input with a filterable dropdown of options and supports single selection, sectioned options, icons, sizes, and custom typed values via `allowsCustomValue`.

  **Affected components:** Combobox

## Major version bumps

### `@backstage/plugin-catalog-react` (2.1.4 → [3.0.0](../../changelogs/@backstage/plugin-catalog-react.md#300))

#### 3.0.0

##### Patch Changes

- [`f635139`](https://github.com/backstage/backstage/commit/f635139): Limited `@remixicon/react` dependency to versions below 4.9.0 due to a license change in that release.
- [`744fa1f`](https://github.com/backstage/backstage/commit/744fa1f): Removed duplicated entries that appeared in both `dependencies` and `devDependencies`.
- [`cad156e`](https://github.com/backstage/backstage/commit/cad156e): Replaced old config schema values from existing extensions and blueprints.
- [`085133f`](https://github.com/backstage/backstage/commit/085133f): The `zod` dependency has been bumped from `^3.25.76 || ^4.0.0` to `^4.0.0`, since `configSchema` requires the full Zod v4 package for JSON Schema support.

### `@backstage/plugin-scaffolder-backend` (3.4.1 → [4.0.0](../../changelogs/@backstage/plugin-scaffolder-backend.md#400))

#### 4.0.0

##### Minor Changes

- [`77bee9f`](https://github.com/backstage/backstage/commit/77bee9f): Updated the `list-scaffolder-tasks` action to support the new "status" filter parameter, allowing the action to return tasks matching a specific status.
- [`07e08be`](https://github.com/backstage/backstage/commit/07e08be): Added `always()` and `failure()` status check functions for scaffolder steps. These functions can be used in the if field of a step to control execution after failures. `always()` ensures a step runs regardless of previous step outcomes, while `failure()` runs a step only when a previous step has failed.
- [`8006acf`](https://github.com/backstage/backstage/commit/8006acf): The template parameter schema response now exposes a `formDecorators` field
  instead of `EXPERIMENTAL_formDecorators`. Templates that still declare
  `spec.EXPERIMENTAL_formDecorators` are read transparently and surfaced under
  the new field.

##### Patch Changes

- [`c78b3b6`](https://github.com/backstage/backstage/commit/c78b3b6): Add explicit memory management to SecureTemplater usage
- [`1ecc3ca`](https://github.com/backstage/backstage/commit/1ecc3ca): Fixed spelling mistakes in internal code
- [`e9b78e9`](https://github.com/backstage/backstage/commit/e9b78e9): Removed the `uuid` dependency and replaced usage with the built-in `crypto.randomUUID()`.

### `@backstage/plugin-scaffolder-react` (1.20.1 → [2.0.0](../../changelogs/@backstage/plugin-scaffolder-react.md#200))

#### 2.0.0

##### Minor Changes

- [`dbeb7aa`](https://github.com/backstage/backstage/commit/dbeb7aa): Added experimental BUI (Backstage UI) form theme for scaffolder forms. All default field extensions render BUI variants when enabled.

  **Extension config:**

  ```yaml
  app:
    extensions:
      - sub-page:scaffolder/templates:
          config:
            enableBackstageUi: true
  ```

  **JSX props:**

  ```tsx
  <ScaffolderPage formProps={{ EXPERIMENTAL_theme: 'bui' }} />
  ```

- [`8006acf`](https://github.com/backstage/backstage/commit/8006acf): Promoted `FormDecoratorBlueprint` and `ScaffolderFormDecorator` from `@alpha`
  to `@public`.
- [`d09c21c`](https://github.com/backstage/backstage/commit/d09c21c): The `TemplateCard` component is now a swappable component. Apps using the new
  frontend system can replace it by registering a `SwappableComponentBlueprint`
  that targets `TemplateCard`. Components used as the swappable implementation
  receive `TemplateCardComponentProps`, where `onSelected` is a zero-argument
  callback bound to the rendered template. Existing usage continues to work
  unchanged.

## 0.x minor version bumps

### `@backstage/eslint-plugin` (0.2.3 → [0.3.0](../../changelogs/@backstage/eslint-plugin.md#030))

#### 0.3.0

##### Minor Changes

- [`ab1cdbb`](https://github.com/backstage/backstage/commit/ab1cdbb): Added a new `no-self-package-imports` lint rule, enabled as `error` in the recommended config, that reports when a package imports itself by its own name instead of using a relative path. This pattern causes circular initialization errors in bundled ESM and with `jest.requireActual`.

### `@backstage/integration-aws-node` (0.1.21 → [0.2.0](../../changelogs/@backstage/integration-aws-node.md#020))

#### 0.2.0

##### Minor Changes

- [`8df06ec`](https://github.com/backstage/backstage/commit/8df06ec): Added `webIdentityTokenFile` to `AwsIntegrationAccountConfig` and
  `AwsIntegrationDefaultAccountConfig`. When set along with a `roleName`,
  `DefaultAwsCredentialsManager` retrieves credentials by calling
  `AssumeRoleWithWebIdentity` (via `fromTokenFile`) using the file's
  contents as the web identity token. The file is re-read on each
  credential refresh.

  The validator rejects combining `webIdentityTokenFile` with
  `accessKeyId`/`secretAccessKey`, `profile`, or `externalId`, and
  rejects setting it without a `roleName`.

## 0.0.x patch version bumps

### `@backstage/plugin-catalog-unprocessed-entities-common` (0.0.15 → [0.0.16](../../changelogs/@backstage/plugin-catalog-unprocessed-entities-common.md#0016))

#### 0.0.16

##### Patch Changes

- [`fa06df6`](https://github.com/backstage/backstage/commit/fa06df6): Added `unprocessedEntitiesReadPermission` for authorizing read access to unprocessed entity endpoints.

### `@backstage/plugin-signals` (0.0.30 → [0.0.31](../../changelogs/@backstage/plugin-signals.md#0031))

#### 0.0.31

##### Patch Changes

- [`f635139`](https://github.com/backstage/backstage/commit/f635139): Limited `@remixicon/react` dependency to versions below 4.9.0 due to a license change in that release.
- [`e9b78e9`](https://github.com/backstage/backstage/commit/e9b78e9): Removed the `uuid` dependency and replaced usage with the built-in `crypto.randomUUID()`.

## 0.x patch version bumps

### `@backstage/backend-defaults` (0.17.0 → [0.17.1](../../changelogs/@backstage/backend-defaults.md#0171))

#### 0.17.1

##### Patch Changes

- [`90b572e`](https://github.com/backstage/backstage/commit/90b572e): Adds an alpha `TracingService` to provide a unified interface for emitting trace spans across Backstage plugins.
- [`97d3bd4`](https://github.com/backstage/backstage/commit/97d3bd4): Fixed a race condition in `CachedUserInfoService` where a failed request could incorrectly evict a newer cache entry for the same token. The error handler now verifies the map entry is still the same promise before deleting it.
- [`3595c97`](https://github.com/backstage/backstage/commit/3595c97): Exported `defaultServiceFactories` to allow use with `createSpecializedBackend` for advanced configuration like `extensionPointFactoryMiddleware`.
- [`89d3248`](https://github.com/backstage/backstage/commit/89d3248): Fixed scheduler `sleep` firing immediately for durations longer than ~24.8 days, caused by Node.js `setTimeout` overflowing its 32-bit millisecond limit.
- [`d00a44b`](https://github.com/backstage/backstage/commit/d00a44b): Fixed Valkey cluster mode to use `iovalkey`'s `Cluster` class instead of
  `createCluster` from `@keyv/redis`. The previous implementation passed a
  `@redis/client` `RedisCluster` instance to `@keyv/valkey`, which expects an
  `iovalkey` `Cluster` instance. This caused the cluster client to not be
  recognized correctly, as the two libraries have incompatible object models.
- [`2f0519c`](https://github.com/backstage/backstage/commit/2f0519c): Added a new `CachedUserInfoService` decorator that wraps `DefaultUserInfoService` with a 5-second TTL cache and in-flight request coalescing. The decorator is wired in via `userInfoServiceFactory` using a shared root-level cache. Repeated `getUserInfo()` calls for the same user token within the TTL window return the cached result without making an HTTP call to the auth backend. Note that custom `UserInfoService` implementations registered via their own factory will not benefit from this cache automatically.
- [`744fa1f`](https://github.com/backstage/backstage/commit/744fa1f): Removed duplicated entries that appeared in both `dependencies` and `devDependencies`.
- [`e9b78e9`](https://github.com/backstage/backstage/commit/e9b78e9): Removed the `uuid` dependency and replaced usage with the built-in `crypto.randomUUID()`.
- [`6209065`](https://github.com/backstage/backstage/commit/6209065): Added `context` and `propagation` to the alpha `TracingService`. Plugins can bridge OpenTelemetry context across async boundaries via `tracing.propagation.extract(tracing.context.active(), carrier)` followed by `tracing.context.with(ctx, fn)`, and read propagated baggage via `tracing.propagation.getActiveBaggage()` or `tracing.propagation.getBaggage(ctx)`.

### `@backstage/backend-dynamic-feature-service` (0.8.1 → [0.8.2](../../changelogs/@backstage/backend-dynamic-feature-service.md#082))

#### 0.8.2

##### Patch Changes

- [`41070b8`](https://github.com/backstage/backstage/commit/41070b8): Upgraded `@module-federation/enhanced`, `@module-federation/runtime`, and `@module-federation/sdk` from `^0.21.6` to `^2.3.3` to address known vulnerabilities.

### `@backstage/cli` (0.36.1 → [0.36.2](../../changelogs/@backstage/cli.md#0362))

#### 0.36.2

##### Patch Changes

- [`744fa1f`](https://github.com/backstage/backstage/commit/744fa1f): Removed duplicated entries that appeared in both `dependencies` and `devDependencies`.

### `@backstage/cli-module-build` (0.1.2 → [0.1.3](../../changelogs/@backstage/cli-module-build.md#013))

#### 0.1.3

##### Patch Changes

- [`ed4ee6f`](https://github.com/backstage/backstage/commit/ed4ee6f): Fixed config path resolution for the embedded-postgres database client detection to resolve paths relative to the target package directory rather than the workspace root.
- [`be7e4eb`](https://github.com/backstage/backstage/commit/be7e4eb): The embedded Postgres database used during local development now respects user-provided connection configuration. If you configure `host`, `port`, `user`, or `password` under `backend.database.connection` alongside the `embedded-postgres` database client, those values will be forwarded to the embedded Postgres instance. Only values that you have not configured will be filled in with defaults. This makes it possible to run the embedded database on a specific host and port, for example to connect to it externally with `psql`.
- [`41070b8`](https://github.com/backstage/backstage/commit/41070b8): Upgraded `@module-federation/enhanced`, `@module-federation/runtime`, and `@module-federation/sdk` from `^0.21.6` to `^2.3.3` to address known vulnerabilities.

### `@backstage/cli-module-new` (0.1.2 → [0.1.3](../../changelogs/@backstage/cli-module-new.md#013))

#### 0.1.3

##### Patch Changes

- [`e9b78e9`](https://github.com/backstage/backstage/commit/e9b78e9): Removed the `uuid` dependency and replaced usage with the built-in `crypto.randomUUID()`.

### `@backstage/cli-node` (0.3.1 → [0.3.2](../../changelogs/@backstage/cli-node.md#032))

#### 0.3.2

##### Patch Changes

- [`357d639`](https://github.com/backstage/backstage/commit/357d639): Fixed a bug in `PackageGraph.listChangedPackages` where removed dependencies were not detected during lockfile analysis. The dependency graph from the previous lockfile was not being merged, causing transitive dependency removals to be missed.

### `@backstage/core-compat-api` (0.5.10 → [0.5.11](../../changelogs/@backstage/core-compat-api.md#0511))

#### 0.5.11

##### Patch Changes

- [`744fa1f`](https://github.com/backstage/backstage/commit/744fa1f): Removed duplicated entries that appeared in both `dependencies` and `devDependencies`.

### `@backstage/core-components` (0.18.9 → [0.18.10](../../changelogs/@backstage/core-components.md#01810))

#### 0.18.10

##### Patch Changes

- [`3846774`](https://github.com/backstage/backstage/commit/3846774): Added missing dependencies that were previously only available transitively.
- [`021b368`](https://github.com/backstage/backstage/commit/021b368): Added stable DOM markers to the legacy Page and Header so adjacent layout components can coordinate spacing without relying on generated class names.
- [`0c5e41f`](https://github.com/backstage/backstage/commit/0c5e41f): Removed unused dependencies that had no imports in source code.

### `@backstage/create-app` (0.8.2 → [0.8.3](../../changelogs/@backstage/create-app.md#083))

#### 0.8.3

##### Patch Changes

- [`7295193`](https://github.com/backstage/backstage/commit/7295193): Bumped create-app version.
- [`b0bc1e5`](https://github.com/backstage/backstage/commit/b0bc1e5): Bumped create-app version.
- [`14e2056`](https://github.com/backstage/backstage/commit/14e2056): Pinned the Jest version range in app templates to `~30.2.0` to prevent automatic upgrades to Jest 30.4.x, which requires Node.js v24.9+ and breaks tests on Node 22.
- [`927c003`](https://github.com/backstage/backstage/commit/927c003): Replaced internal error utilities with shared ones from `@backstage/cli-common`.

### `@backstage/filter-predicates` (0.1.2 → [0.1.3](../../changelogs/@backstage/filter-predicates.md#013))

#### 0.1.3

##### Patch Changes

- [`691da8d`](https://github.com/backstage/backstage/commit/691da8d): Filter predicates that mix operator keys (`$all`, `$any`, `$not`) with other keys are now rejected. Previously, a predicate like `{ kind: 'API', $not: { 'spec.type': 'dataset' } }` would silently drop the `kind` check. The correct form wraps conditions in `$all`.

### `@backstage/frontend-app-api` (0.16.2 → [0.16.3](../../changelogs/@backstage/frontend-app-api.md#0163))

#### 0.16.3

##### Patch Changes

- [`f79eaf2`](https://github.com/backstage/backstage/commit/f79eaf2): Internal cleanup of routing utilities.
- [`b6ca666`](https://github.com/backstage/backstage/commit/b6ca666): Invalid feature flag declarations no longer crash the app during bootstrap. They are now reported through the error collector and skipped, letting the rest of the app load normally.

### `@backstage/frontend-defaults` (0.5.1 → [0.5.2](../../changelogs/@backstage/frontend-defaults.md#052))

#### 0.5.2

##### Patch Changes

- [`482cc59`](https://github.com/backstage/backstage/commit/482cc59): Invalid feature flag declarations are now treated as warnings rather than errors, letting the app load normally.

### `@backstage/frontend-dynamic-feature-loader` (0.1.11 → [0.1.12](../../changelogs/@backstage/frontend-dynamic-feature-loader.md#0112))

#### 0.1.12

##### Patch Changes

- [`41070b8`](https://github.com/backstage/backstage/commit/41070b8): Upgraded `@module-federation/enhanced`, `@module-federation/runtime`, and `@module-federation/sdk` from `^0.21.6` to `^2.3.3` to address known vulnerabilities.

### `@backstage/module-federation-common` (0.1.3 → [0.1.4](../../changelogs/@backstage/module-federation-common.md#014))

#### 0.1.4

##### Patch Changes

- [`41070b8`](https://github.com/backstage/backstage/commit/41070b8): Upgraded `@module-federation/enhanced`, `@module-federation/runtime`, and `@module-federation/sdk` from `^0.21.6` to `^2.3.3` to address known vulnerabilities.

### `@backstage/plugin-api-docs` (0.14.0 → [0.14.1](../../changelogs/@backstage/plugin-api-docs.md#0141))

#### 0.14.1

##### Patch Changes

- [`f635139`](https://github.com/backstage/backstage/commit/f635139): Limited `@remixicon/react` dependency to versions below 4.9.0 due to a license change in that release.
- [`44d77e9`](https://github.com/backstage/backstage/commit/44d77e9): Removed separate nav item extensions. Sidebar entries are now provided via `title` and `icon` on each plugin's page extension.

### `@backstage/plugin-app` (0.4.5 → [0.4.6](../../changelogs/@backstage/plugin-app.md#046))

#### 0.4.6

##### Patch Changes

- [`a345820`](https://github.com/backstage/backstage/commit/a345820): The `app/routes` redirect config now supports path parameter substitution in the `to` target. Named params (`:userId`) and splat params (`*`) captured by the `from` path are replaced in the `to` string before navigating, making it possible to express redirects like:

  ```yaml
  app:
    extensions:
      - app/routes:
          config:
            redirects:
              - from: /users/:userId
                to: /profile/:userId
              - from: /old-docs
                to: /docs/*
  ```

- [`d1be10c`](https://github.com/backstage/backstage/commit/d1be10c): Migrated React Aria imports from individual packages (`@react-aria/toast`, `@react-aria/button`, `@react-stately/toast`) to the monopackages (`react-aria`, `react-stately`).
- [`e2d9831`](https://github.com/backstage/backstage/commit/e2d9831): Tightened React Aria dependency version ranges from `^` to `~` to prevent unintended minor version upgrades.
- [`f635139`](https://github.com/backstage/backstage/commit/f635139): Limited `@remixicon/react` dependency to versions below 4.9.0 due to a license change in that release.
- [`2ba8c10`](https://github.com/backstage/backstage/commit/2ba8c10): Following the removal of `NavItemBlueprint` in `@backstage/frontend-plugin-api`, the built-in app nav was updated to keep accepting legacy `nav-item` extensions so older plugins continue to work until they migrate.
- [`cad156e`](https://github.com/backstage/backstage/commit/cad156e): Replaced old config schema values from existing extensions and blueprints.
- [`085133f`](https://github.com/backstage/backstage/commit/085133f): The `zod` dependency has been bumped from `^3.25.76 || ^4.0.0` to `^4.0.0`, since `configSchema` requires the full Zod v4 package for JSON Schema support.

### `@backstage/plugin-app-backend` (0.5.13 → [0.5.14](../../changelogs/@backstage/plugin-app-backend.md#0514))

#### 0.5.14

##### Patch Changes

- [`744fa1f`](https://github.com/backstage/backstage/commit/744fa1f): Removed duplicated entries that appeared in both `dependencies` and `devDependencies`.
- [`0c5e41f`](https://github.com/backstage/backstage/commit/0c5e41f): Removed unused dependencies that had no imports in source code.

### `@backstage/plugin-app-visualizer` (0.2.3 → [0.2.4](../../changelogs/@backstage/plugin-app-visualizer.md#024))

#### 0.2.4

##### Patch Changes

- [`e2d9831`](https://github.com/backstage/backstage/commit/e2d9831): Tightened React Aria dependency version ranges from `^` to `~` to prevent unintended minor version upgrades.
- [`f635139`](https://github.com/backstage/backstage/commit/f635139): Limited `@remixicon/react` dependency to versions below 4.9.0 due to a license change in that release.
- [`44d77e9`](https://github.com/backstage/backstage/commit/44d77e9): Removed separate nav item extensions. Sidebar entries are now provided via `title` and `icon` on each plugin's page extension.

### `@backstage/plugin-auth` (0.1.7 → [0.1.8](../../changelogs/@backstage/plugin-auth.md#018))

#### 0.1.8

##### Patch Changes

- [`f635139`](https://github.com/backstage/backstage/commit/f635139): Limited `@remixicon/react` dependency to versions below 4.9.0 due to a license change in that release.
- [`4f62755`](https://github.com/backstage/backstage/commit/4f62755): Improved the OAuth consent dialog for MCP authorization by showing more client details, including the client metadata host for CIMD clients, the metadata URL, callback URL, and requested scopes.

### `@backstage/plugin-auth-backend-module-cloudflare-access-provider` (0.4.14 → [0.4.15](../../changelogs/@backstage/plugin-auth-backend-module-cloudflare-access-provider.md#0415))

#### 0.4.15

##### Patch Changes

- [`e9b78e9`](https://github.com/backstage/backstage/commit/e9b78e9): Removed the `uuid` dependency and replaced usage with the built-in `crypto.randomUUID()`.

### `@backstage/plugin-auth-backend-module-oidc-provider` (0.4.15 → [0.4.16](../../changelogs/@backstage/plugin-auth-backend-module-oidc-provider.md#0416))

#### 0.4.16

##### Patch Changes

- [`744fa1f`](https://github.com/backstage/backstage/commit/744fa1f): Removed duplicated entries that appeared in both `dependencies` and `devDependencies`.

### `@backstage/plugin-auth-node` (0.7.0 → [0.7.1](../../changelogs/@backstage/plugin-auth-node.md#071))

#### 0.7.1

##### Patch Changes

- [`744fa1f`](https://github.com/backstage/backstage/commit/744fa1f): Removed duplicated entries that appeared in both `dependencies` and `devDependencies`.
- [`e9b78e9`](https://github.com/backstage/backstage/commit/e9b78e9): Removed the `uuid` dependency and replaced usage with the built-in `crypto.randomUUID()`.

### `@backstage/plugin-catalog-backend-module-aws` (0.4.22 → [0.4.23](../../changelogs/@backstage/plugin-catalog-backend-module-aws.md#0423))

#### 0.4.23

##### Patch Changes

- [`e9b78e9`](https://github.com/backstage/backstage/commit/e9b78e9): Removed the `uuid` dependency and replaced usage with the built-in `crypto.randomUUID()`.

### `@backstage/plugin-catalog-backend-module-azure` (0.3.16 → [0.3.17](../../changelogs/@backstage/plugin-catalog-backend-module-azure.md#0317))

#### 0.3.17

##### Patch Changes

- [`e9b78e9`](https://github.com/backstage/backstage/commit/e9b78e9): Removed the `uuid` dependency and replaced usage with the built-in `crypto.randomUUID()`.

### `@backstage/plugin-catalog-backend-module-backstage-openapi` (0.5.13 → [0.5.14](../../changelogs/@backstage/plugin-catalog-backend-module-backstage-openapi.md#0514))

#### 0.5.14

##### Patch Changes

- [`e9b78e9`](https://github.com/backstage/backstage/commit/e9b78e9): Removed the `uuid` dependency and replaced usage with the built-in `crypto.randomUUID()`.

### `@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.5.10 → [0.5.11](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-cloud.md#0511))

#### 0.5.11

##### Patch Changes

- [`e9b78e9`](https://github.com/backstage/backstage/commit/e9b78e9): Removed the `uuid` dependency and replaced usage with the built-in `crypto.randomUUID()`.

### `@backstage/plugin-catalog-backend-module-bitbucket-server` (0.5.10 → [0.5.11](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-server.md#0511))

#### 0.5.11

##### Patch Changes

- [`e9b78e9`](https://github.com/backstage/backstage/commit/e9b78e9): Removed the `uuid` dependency and replaced usage with the built-in `crypto.randomUUID()`.

### `@backstage/plugin-catalog-backend-module-gerrit` (0.3.13 → [0.3.14](../../changelogs/@backstage/plugin-catalog-backend-module-gerrit.md#0314))

#### 0.3.14

##### Patch Changes

- [`e9b78e9`](https://github.com/backstage/backstage/commit/e9b78e9): Removed the `uuid` dependency and replaced usage with the built-in `crypto.randomUUID()`.

### `@backstage/plugin-catalog-backend-module-gitea` (0.1.11 → [0.1.12](../../changelogs/@backstage/plugin-catalog-backend-module-gitea.md#0112))

#### 0.1.12

##### Patch Changes

- [`e9b78e9`](https://github.com/backstage/backstage/commit/e9b78e9): Removed the `uuid` dependency and replaced usage with the built-in `crypto.randomUUID()`.

### `@backstage/plugin-catalog-backend-module-github` (0.13.1 → [0.13.2](../../changelogs/@backstage/plugin-catalog-backend-module-github.md#0132))

#### 0.13.2

##### Patch Changes

- [`d745f1c`](https://github.com/backstage/backstage/commit/d745f1c): Added experimental support for checking suspended users via the GitHub REST API instead of the GraphQL `suspendedAt` field. Enable by setting both `excludeSuspendedUsers: true` and `experimental_checkForSuspendedUsersWithRest: true` in the provider config. When enabled, responses are cached using conditional HTTP requests to minimize REST API rate limit usage.
- [`e9b78e9`](https://github.com/backstage/backstage/commit/e9b78e9): Removed the `uuid` dependency and replaced usage with the built-in `crypto.randomUUID()`.
- [`aa313f0`](https://github.com/backstage/backstage/commit/aa313f0): The `GithubMultiOrgEntityProvider` now emits entities in a stable order during full mutations. Entities are sorted by entity ref, with the location annotation as a tiebreaker for entities that share the same ref. This prevents entity data from flickering between different GitHub orgs across refresh cycles when `alwaysUseDefaultNamespace` is enabled and teams with identical slugs exist in multiple orgs.

### `@backstage/plugin-catalog-backend-module-github-org` (0.3.21 → [0.3.22](../../changelogs/@backstage/plugin-catalog-backend-module-github-org.md#0322))

#### 0.3.22

##### Patch Changes

- [`d745f1c`](https://github.com/backstage/backstage/commit/d745f1c): Added experimental support for checking suspended users via the GitHub REST API instead of the GraphQL `suspendedAt` field. Enable by setting both `excludeSuspendedUsers: true` and `experimental_checkForSuspendedUsersWithRest: true` in the provider config. When enabled, responses are cached using conditional HTTP requests to minimize REST API rate limit usage.

### `@backstage/plugin-catalog-backend-module-gitlab` (0.8.2 → [0.8.3](../../changelogs/@backstage/plugin-catalog-backend-module-gitlab.md#083))

#### 0.8.3

##### Patch Changes

- [`1ecc3ca`](https://github.com/backstage/backstage/commit/1ecc3ca): Fixed spelling mistakes in internal code
- [`0c5e41f`](https://github.com/backstage/backstage/commit/0c5e41f): Removed unused dependencies that had no imports in source code.
- [`e9b78e9`](https://github.com/backstage/backstage/commit/e9b78e9): Removed the `uuid` dependency and replaced usage with the built-in `crypto.randomUUID()`.

### `@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.7.11 → [0.7.12](../../changelogs/@backstage/plugin-catalog-backend-module-incremental-ingestion.md#0712))

#### 0.7.12

##### Patch Changes

- [`32f0dfe`](https://github.com/backstage/backstage/commit/32f0dfe): On PostgreSQL, `WHERE ref IN ($1, $2, ..., $N)` queries on the `ingestion_mark_entities` table now use `= ANY($1)` with a single array parameter instead. This reduces prepared statement bloat in the query plan cache when the number of entity refs varies between calls.
- [`0c5e41f`](https://github.com/backstage/backstage/commit/0c5e41f): Removed unused dependencies that had no imports in source code.
- [`e9b78e9`](https://github.com/backstage/backstage/commit/e9b78e9): Removed the `uuid` dependency and replaced usage with the built-in `crypto.randomUUID()`.

### `@backstage/plugin-catalog-backend-module-ldap` (0.12.4 → [0.12.5](../../changelogs/@backstage/plugin-catalog-backend-module-ldap.md#0125))

#### 0.12.5

##### Patch Changes

- [`e9b78e9`](https://github.com/backstage/backstage/commit/e9b78e9): Removed the `uuid` dependency and replaced usage with the built-in `crypto.randomUUID()`.

### `@backstage/plugin-catalog-backend-module-puppetdb` (0.2.21 → [0.2.22](../../changelogs/@backstage/plugin-catalog-backend-module-puppetdb.md#0222))

#### 0.2.22

##### Patch Changes

- [`e9b78e9`](https://github.com/backstage/backstage/commit/e9b78e9): Removed the `uuid` dependency and replaced usage with the built-in `crypto.randomUUID()`.

### `@backstage/plugin-catalog-backend-module-unprocessed` (0.6.11 → [0.6.12](../../changelogs/@backstage/plugin-catalog-backend-module-unprocessed.md#0612))

#### 0.6.12

##### Patch Changes

- [`fa06df6`](https://github.com/backstage/backstage/commit/fa06df6): Added permission authorization checks to the unprocessed entities read endpoints for pending and failed entities.

### `@backstage/plugin-catalog-graph` (0.6.3 → [0.6.4](../../changelogs/@backstage/plugin-catalog-graph.md#064))

#### 0.6.4

##### Patch Changes

- [`f635139`](https://github.com/backstage/backstage/commit/f635139): Limited `@remixicon/react` dependency to versions below 4.9.0 due to a license change in that release.
- [`0c5e41f`](https://github.com/backstage/backstage/commit/0c5e41f): Removed unused dependencies that had no imports in source code.
- [`cad156e`](https://github.com/backstage/backstage/commit/cad156e): Replaced old config schema values from existing extensions and blueprints.
- [`085133f`](https://github.com/backstage/backstage/commit/085133f): The `zod` dependency has been bumped from `^3.25.76 || ^4.0.0` to `^4.0.0`, since `configSchema` requires the full Zod v4 package for JSON Schema support.

### `@backstage/plugin-catalog-import` (0.13.12 → [0.13.13](../../changelogs/@backstage/plugin-catalog-import.md#01313))

#### 0.13.13

##### Patch Changes

- [`f635139`](https://github.com/backstage/backstage/commit/f635139): Limited `@remixicon/react` dependency to versions below 4.9.0 due to a license change in that release.
- [`39eb61b`](https://github.com/backstage/backstage/commit/39eb61b): Internal refactor

### `@backstage/plugin-catalog-unprocessed-entities` (0.2.30 → [0.2.31](../../changelogs/@backstage/plugin-catalog-unprocessed-entities.md#0231))

#### 0.2.31

##### Patch Changes

- [`44d77e9`](https://github.com/backstage/backstage/commit/44d77e9): Removed separate nav item extensions. Sidebar entries are now provided via `title` and `icon` on each plugin's page extension.

### `@backstage/plugin-devtools` (0.1.38 → [0.1.39](../../changelogs/@backstage/plugin-devtools.md#0139))

#### 0.1.39

##### Patch Changes

- [`b15ef55`](https://github.com/backstage/backstage/commit/b15ef55): Scheduled Tasks page now refreshes its table automatically after a task is triggered or cancelled, so the updated status is visible without reloading the browser.
- [`08c922e`](https://github.com/backstage/backstage/commit/08c922e): Migrated `ConfigContent` component from Material UI to Backstage UI (BUI).
- [`44d77e9`](https://github.com/backstage/backstage/commit/44d77e9): Removed separate nav item extensions. Sidebar entries are now provided via `title` and `icon` on each plugin's page extension.

### `@backstage/plugin-devtools-backend` (0.5.16 → [0.5.17](../../changelogs/@backstage/plugin-devtools-backend.md#0517))

#### 0.5.17

##### Patch Changes

- [`0c5e41f`](https://github.com/backstage/backstage/commit/0c5e41f): Removed unused dependencies that had no imports in source code.

### `@backstage/plugin-home` (0.9.5 → [0.9.6](../../changelogs/@backstage/plugin-home.md#096))

#### 0.9.6

##### Patch Changes

- [`419141e`](https://github.com/backstage/backstage/commit/419141e): Fixed widgets not being movable or resizable after saved edits. Previously, entering edit mode didn't restore `isDraggable` and `isResizable`.
- [`44d77e9`](https://github.com/backstage/backstage/commit/44d77e9): Removed separate nav item extensions. Sidebar entries are now provided via `title` and `icon` on each plugin's page extension.

### `@backstage/plugin-kubernetes-backend` (0.21.3 → [0.21.4](../../changelogs/@backstage/plugin-kubernetes-backend.md#0214))

#### 0.21.4

##### Patch Changes

- [`1ecc3ca`](https://github.com/backstage/backstage/commit/1ecc3ca): Fixed spelling mistakes in internal code

### `@backstage/plugin-kubernetes-common` (0.9.11 → [0.9.12](../../changelogs/@backstage/plugin-kubernetes-common.md#0912))

#### 0.9.12

##### Patch Changes

- [`ab1cdbb`](https://github.com/backstage/backstage/commit/ab1cdbb): Removed a handful of internal imports that referenced the package by its own name. Value imports were switched to relative paths, and type-only imports to `import type`. These self-referential imports could trigger circular initialization errors in bundled ESM and when the package was loaded via `jest.requireActual` — most visibly `Cannot access '_AppRootElementBlueprintesm' before initialization` from `@backstage/frontend-plugin-api`. There are no user-facing API changes.

### `@backstage/plugin-kubernetes-node` (0.4.3 → [0.4.4](../../changelogs/@backstage/plugin-kubernetes-node.md#044))

#### 0.4.4

##### Patch Changes

- [`ab1cdbb`](https://github.com/backstage/backstage/commit/ab1cdbb): Removed a handful of internal imports that referenced the package by its own name. Value imports were switched to relative paths, and type-only imports to `import type`. These self-referential imports could trigger circular initialization errors in bundled ESM and when the package was loaded via `jest.requireActual` — most visibly `Cannot access '_AppRootElementBlueprintesm' before initialization` from `@backstage/frontend-plugin-api`. There are no user-facing API changes.
- [`0c5e41f`](https://github.com/backstage/backstage/commit/0c5e41f): Removed unused dependencies that had no imports in source code.

### `@backstage/plugin-kubernetes-react` (0.5.18 → [0.5.19](../../changelogs/@backstage/plugin-kubernetes-react.md#0519))

#### 0.5.19

##### Patch Changes

- [`e68cb8a`](https://github.com/backstage/backstage/commit/e68cb8a): Added optional clustersCacheTtlMs option to KubernetesBackendClient that caches getClusters() responses for the specified duration, avoiding repeated /clusters requests when multiple proxy calls resolve cluster auth in quick succession.

### `@backstage/plugin-mcp-actions-backend` (0.1.12 → [0.1.13](../../changelogs/@backstage/plugin-mcp-actions-backend.md#0113))

#### 0.1.13

##### Patch Changes

- [`ca8951a`](https://github.com/backstage/backstage/commit/ca8951a): Fixed an issue where actions returned Markdown-formatted JSON instead of plain JSON and a `structuredContent` field for model context protocol responses.
- [`8916f83`](https://github.com/backstage/backstage/commit/8916f83): Trace spans are now emitted for MCP `tools/call` invocations, following OpenTelemetry server-side MCP semantic conventions.

### `@backstage/plugin-notifications` (0.5.16 → [0.5.17](../../changelogs/@backstage/plugin-notifications.md#0517))

#### 0.5.17

##### Patch Changes

- [`3846774`](https://github.com/backstage/backstage/commit/3846774): Added missing dependencies that were previously only available transitively.
- [`e2d9831`](https://github.com/backstage/backstage/commit/e2d9831): Tightened React Aria dependency version ranges from `^` to `~` to prevent unintended minor version upgrades.
- [`f635139`](https://github.com/backstage/backstage/commit/f635139): Limited `@remixicon/react` dependency to versions below 4.9.0 due to a license change in that release.
- [`03311e3`](https://github.com/backstage/backstage/commit/03311e3): The notification description used in the notifications table is now a swappable component, so that apps can replace its rendering with a custom implementation.

### `@backstage/plugin-notifications-backend` (0.6.4 → [0.6.5](../../changelogs/@backstage/plugin-notifications-backend.md#065))

#### 0.6.5

##### Patch Changes

- [`e9b78e9`](https://github.com/backstage/backstage/commit/e9b78e9): Removed the `uuid` dependency and replaced usage with the built-in `crypto.randomUUID()`.

### `@backstage/plugin-notifications-backend-module-slack` (0.4.1 → [0.4.2](../../changelogs/@backstage/plugin-notifications-backend-module-slack.md#042))

#### 0.4.2

##### Patch Changes

- [`744fa1f`](https://github.com/backstage/backstage/commit/744fa1f): Removed duplicated entries that appeared in both `dependencies` and `devDependencies`.
- [`f399a7a`](https://github.com/backstage/backstage/commit/f399a7a): Added scope-based message update support. When a notification is re-sent with the same `scope` and `notification.updated` is set, the processor now calls `chat.update()` on the existing Slack message instead of sending a duplicate via `chat.postMessage()`. Message timestamps are persisted in a new `slack_message_timestamps` database table with automatic daily cleanup. The processor gracefully degrades to the previous behavior when no database is provided.

### `@backstage/plugin-notifications-common` (0.2.2 → [0.2.3](../../changelogs/@backstage/plugin-notifications-common.md#023))

#### 0.2.3

##### Patch Changes

- [`0c5e41f`](https://github.com/backstage/backstage/commit/0c5e41f): Removed unused dependencies that had no imports in source code.

### `@backstage/plugin-notifications-node` (0.2.25 → [0.2.26](../../changelogs/@backstage/plugin-notifications-node.md#0226))

#### 0.2.26

##### Patch Changes

- [`0c5e41f`](https://github.com/backstage/backstage/commit/0c5e41f): Removed unused dependencies that had no imports in source code.

### `@backstage/plugin-org` (0.7.3 → [0.7.4](../../changelogs/@backstage/plugin-org.md#074))

#### 0.7.4

##### Patch Changes

- [`f635139`](https://github.com/backstage/backstage/commit/f635139): Limited `@remixicon/react` dependency to versions below 4.9.0 due to a license change in that release.
- [`cad156e`](https://github.com/backstage/backstage/commit/cad156e): Replaced old config schema values from existing extensions and blueprints.
- [`085133f`](https://github.com/backstage/backstage/commit/085133f): The `zod` dependency has been bumped from `^3.25.76 || ^4.0.0` to `^4.0.0`, since `configSchema` requires the full Zod v4 package for JSON Schema support.

### `@backstage/plugin-permission-backend` (0.7.11 → [0.7.12](../../changelogs/@backstage/plugin-permission-backend.md#0712))

#### 0.7.12

##### Patch Changes

- [`2f0519c`](https://github.com/backstage/backstage/commit/2f0519c): The permission backend no longer populates the removed `token` and `identity` fields on `PolicyQueryUser`, and no longer calls `auth.getPluginRequestToken()` during policy evaluation. This removes one internal round-trip per authorize request.
- [`0c5e41f`](https://github.com/backstage/backstage/commit/0c5e41f): Removed unused dependencies that had no imports in source code.

### `@backstage/plugin-permission-common` (0.9.8 → [0.9.9](../../changelogs/@backstage/plugin-permission-common.md#099))

#### 0.9.9

##### Patch Changes

- [`e9b78e9`](https://github.com/backstage/backstage/commit/e9b78e9): Removed the `uuid` dependency and replaced usage with the built-in `crypto.randomUUID()`.

### `@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.3.22 → [0.3.23](../../changelogs/@backstage/plugin-scaffolder-backend-module-cookiecutter.md#0323))

#### 0.3.23

##### Patch Changes

- [`0c5e41f`](https://github.com/backstage/backstage/commit/0c5e41f): Removed unused dependencies that had no imports in source code.

### `@backstage/plugin-scaffolder-backend-module-github` (0.9.8 → [0.9.9](../../changelogs/@backstage/plugin-scaffolder-backend-module-github.md#099))

#### 0.9.9

##### Patch Changes

- [`3846774`](https://github.com/backstage/backstage/commit/3846774): Added missing dependencies that were previously only available transitively.
- [`a2ee960`](https://github.com/backstage/backstage/commit/a2ee960): Improved Octokit client creation to support retries via @octokit/plugin-retry

### `@backstage/plugin-scaffolder-backend-module-gitlab` (0.11.5 → [0.11.6](../../changelogs/@backstage/plugin-scaffolder-backend-module-gitlab.md#0116))

#### 0.11.6

##### Patch Changes

- [`8474da5`](https://github.com/backstage/backstage/commit/8474da5): Added `allowEmpty` input option to the `gitlab:repo:push` action, allowing empty commits. Required from GitLab 18.8 or later.

### `@backstage/plugin-scaffolder-backend-module-yeoman` (0.4.21 → [0.4.22](../../changelogs/@backstage/plugin-scaffolder-backend-module-yeoman.md#0422))

#### 0.4.22

##### Patch Changes

- [`0c5e41f`](https://github.com/backstage/backstage/commit/0c5e41f): Removed unused dependencies that had no imports in source code.

### `@backstage/plugin-scaffolder-node` (0.13.2 → [0.13.3](../../changelogs/@backstage/plugin-scaffolder-node.md#0133))

#### 0.13.3

##### Patch Changes

- [`77bee9f`](https://github.com/backstage/backstage/commit/77bee9f): Added optional `status` filter to `ScaffolderService.listTasks`, allowing callers to retrieve tasks matching a specific status.

### `@backstage/plugin-search-backend-module-pg` (0.5.54 → [0.5.55](../../changelogs/@backstage/plugin-search-backend-module-pg.md#0555))

#### 0.5.55

##### Patch Changes

- [`e9b78e9`](https://github.com/backstage/backstage/commit/e9b78e9): Removed the `uuid` dependency and replaced usage with the built-in `crypto.randomUUID()`.

### `@backstage/plugin-signals-backend` (0.3.14 → [0.3.15](../../changelogs/@backstage/plugin-signals-backend.md#0315))

#### 0.3.15

##### Patch Changes

- [`e9b78e9`](https://github.com/backstage/backstage/commit/e9b78e9): Removed the `uuid` dependency and replaced usage with the built-in `crypto.randomUUID()`.

### `@backstage/plugin-signals-node` (0.2.0 → [0.2.1](../../changelogs/@backstage/plugin-signals-node.md#021))

#### 0.2.1

##### Patch Changes

- [`0c5e41f`](https://github.com/backstage/backstage/commit/0c5e41f): Removed unused dependencies that had no imports in source code.

### `@backstage/plugin-user-settings` (0.9.2 → [0.9.3](../../changelogs/@backstage/plugin-user-settings.md#093))

#### 0.9.3

##### Patch Changes

- [`876c99e`](https://github.com/backstage/backstage/commit/876c99e): Prioritize i18n translation over `theme.title` for built-in light/dark theme names in `UserSettingsThemeToggle`, so that translation overrides are no longer silently ignored.
- [`44d77e9`](https://github.com/backstage/backstage/commit/44d77e9): Removed separate nav item extensions. Sidebar entries are now provided via `title` and `icon` on each plugin's page extension.

### `@backstage/plugin-user-settings-backend` (0.4.2 → [0.4.3](../../changelogs/@backstage/plugin-user-settings-backend.md#043))

#### 0.4.3

##### Patch Changes

- [`0c5e41f`](https://github.com/backstage/backstage/commit/0c5e41f): Removed unused dependencies that had no imports in source code.

### `@backstage/repo-tools` (0.17.1 → [0.17.2](../../changelogs/@backstage/repo-tools.md#0172))

#### 0.17.2

##### Patch Changes

- [`927c003`](https://github.com/backstage/backstage/commit/927c003): Replaced internal error utilities with shared ones from `@backstage/cli-common`.

## Other minor version bumps

### `@backstage/backend-app-api` (1.6.1 → [1.7.0](../../changelogs/@backstage/backend-app-api.md#170))

#### 1.7.0

##### Minor Changes

- [`3595c97`](https://github.com/backstage/backstage/commit/3595c97): Added `ExtensionPointFactoryMiddleware` type and `createExtensionPointFactoryMiddleware` helper to reimplement extension point outputs at backend creation time.

### `@backstage/catalog-model` (1.8.0 → [1.9.0](../../changelogs/@backstage/catalog-model.md#190))

#### 1.9.0

##### Minor Changes

- [`3664148`](https://github.com/backstage/backstage/commit/3664148): Introduced the `AiResource` catalog entity kind. Entity types, validators, type guards, and the model layer are exported from `@backstage/catalog-model/alpha`. Install `@backstage/plugin-catalog-backend-module-ai-model` in your backend to register the kind with the catalog.
- [`be71476`](https://github.com/backstage/backstage/commit/be71476): Added `spec.type: 'mcp-server'` as a structured subtype of the `API` kind under `v1alpha1`/`v1beta1`. MCP server entities carry a `spec.remotes` list instead of a string `definition`, for representing Model Context Protocol servers in the catalog. See RFC [#32062](https://github.com/backstage/backstage/issues/32062). New public exports: `McpServerApiEntity`, `McpServerRemote`, `mcpServerApiEntityValidator`, and `isMcpServerApiEntity`. Also adds `addKindVersion` to `CatalogModelLayerBuilder` (alpha) so layers can add new versions or spec types to existing kinds.

##### Patch Changes

- [`ab1cdbb`](https://github.com/backstage/backstage/commit/ab1cdbb): Removed a handful of internal imports that referenced the package by its own name. Value imports were switched to relative paths, and type-only imports to `import type`. These self-referential imports could trigger circular initialization errors in bundled ESM and when the package was loaded via `jest.requireActual` — most visibly `Cannot access '_AppRootElementBlueprintesm' before initialization` from `@backstage/frontend-plugin-api`. There are no user-facing API changes.

### `@backstage/plugin-scaffolder` (1.36.2 → [1.37.0](../../changelogs/@backstage/plugin-scaffolder.md#1370))

#### 1.37.0

##### Minor Changes

- [`dbeb7aa`](https://github.com/backstage/backstage/commit/dbeb7aa): Added experimental BUI (Backstage UI) form theme for scaffolder forms. All default field extensions render BUI variants when enabled.

  **Extension config:**

  ```yaml
  app:
    extensions:
      - sub-page:scaffolder/templates:
          config:
            enableBackstageUi: true
  ```

  **JSX props:**

  ```tsx
  <ScaffolderPage formProps={{ EXPERIMENTAL_theme: 'bui' }} />
  ```

- [`8006acf`](https://github.com/backstage/backstage/commit/8006acf): Promoted `formDecoratorsApiRef`, `ScaffolderFormDecoratorsApi`,
  `DefaultScaffolderFormDecoratorsApi`, and `formDecoratorsApi` from `@alpha`
  to `@public`.
- [`d09c21c`](https://github.com/backstage/backstage/commit/d09c21c): The `sub-page:scaffolder/templates` extension now accepts a `groups` config
  field that lets you define template groups on the template list page. Each group
  has a `title` and a `filter` predicate. Templates not matched by any
  configured group fall into an automatically appended "Other Templates" group.
  With no groups configured, the page renders a single "Templates" group as
  before.

  Example:

  ```yaml
  app:
    extensions:
      - sub-page:scaffolder/templates:
          config:
            groups:
              - title: Recommended Services
                filter:
                  spec.type: service
              - title: Documentation
                filter:
                  spec.type: documentation
  ```

##### Patch Changes

- [`1ecc3ca`](https://github.com/backstage/backstage/commit/1ecc3ca): Fixed spelling mistakes in internal code
- [`f635139`](https://github.com/backstage/backstage/commit/f635139): Limited `@remixicon/react` dependency to versions below 4.9.0 due to a license change in that release.
- [`415e30b`](https://github.com/backstage/backstage/commit/415e30b): Simplified the `OwnerEntityColumn` in the task list to rely on `EntityRefLink` and the entity presentation API instead of manually fetching entities from the catalog.
- [`44d77e9`](https://github.com/backstage/backstage/commit/44d77e9): Removed separate nav item extensions. Sidebar entries are now provided via `title` and `icon` on each plugin's page extension.
- [`8006acf`](https://github.com/backstage/backstage/commit/8006acf): Form decorator input is now parsed against the zod schema configured on the
  decorator before the decorator runs, so defaults declared via `.default()`
  are applied and invalid input is reported through the error API instead of
  silently passing through.
- [`8006acf`](https://github.com/backstage/backstage/commit/8006acf): The template wizard now reads form decorators from the new
  `spec.formDecorators` field on a template, falling back to the deprecated
  `spec.EXPERIMENTAL_formDecorators` for templates that have not been migrated.

### `@backstage/plugin-scaffolder-common` (2.1.1 → [2.2.0](../../changelogs/@backstage/plugin-scaffolder-common.md#220))

#### 2.2.0

##### Minor Changes

- [`8006acf`](https://github.com/backstage/backstage/commit/8006acf): Promote the `formDecorators` field on the `Template` spec out of experimental.
  The previous `EXPERIMENTAL_formDecorators` field continues to work and is
  kept as a deprecated alias.

### `@backstage/plugin-techdocs-backend` (2.1.8 → [2.2.0](../../changelogs/@backstage/plugin-techdocs-backend.md#220))

#### 2.2.0

##### Minor Changes

- [`5ef8d16`](https://github.com/backstage/backstage/commit/5ef8d16): Add support for disabling external font downloads via app-config option `techdocs.generator.mkdocs.disableExternalFonts`, useful for air-gapped Backstage instances.

### `@backstage/plugin-techdocs-node` (1.14.8 → [1.15.0](../../changelogs/@backstage/plugin-techdocs-node.md#1150))

#### 1.15.0

##### Minor Changes

- [`5ef8d16`](https://github.com/backstage/backstage/commit/5ef8d16): Add support for disabling external font downloads via app-config option `techdocs.generator.mkdocs.disableExternalFonts`, useful for air-gapped Backstage instances.

##### Patch Changes

- [`6ce8462`](https://github.com/backstage/backstage/commit/6ce8462): Fixed bug causing `--legacyCopyReadmeMdToIndexMd` option to fail if docs directory is not present

### `@techdocs/cli` (1.10.8 → [1.11.0](../../changelogs/@techdocs/cli.md#1110))

#### 1.11.0

##### Minor Changes

- [`329f592`](https://github.com/backstage/backstage/commit/329f592): Add support for disabling external font downloads via techdocs-cli `techdocs-cli generate --disableExternalFonts`, useful for air-gapped Backstage instances.

##### Patch Changes

- [`0c5e41f`](https://github.com/backstage/backstage/commit/0c5e41f): Removed unused dependencies that had no imports in source code.

## Other patch version bumps

### `@backstage/backend-plugin-api` (1.9.0 → [1.9.1](../../changelogs/@backstage/backend-plugin-api.md#191))

#### 1.9.1

##### Patch Changes

- [`90b572e`](https://github.com/backstage/backstage/commit/90b572e): Adds an alpha `TracingService` to provide a unified interface for emitting trace spans across Backstage plugins.
- [`6209065`](https://github.com/backstage/backstage/commit/6209065): Added `context` and `propagation` to the alpha `TracingService`. Plugins can bridge OpenTelemetry context across async boundaries via `tracing.propagation.extract(tracing.context.active(), carrier)` followed by `tracing.context.with(ctx, fn)`, and read propagated baggage via `tracing.propagation.getActiveBaggage()` or `tracing.propagation.getBaggage(ctx)`.

### `@backstage/backend-test-utils` (1.11.2 → [1.11.3](../../changelogs/@backstage/backend-test-utils.md#1113))

#### 1.11.3

##### Patch Changes

- [`7fb12b8`](https://github.com/backstage/backstage/commit/7fb12b8): Added a new tracing service mock to be leveraged in tests
- [`ada7df7`](https://github.com/backstage/backstage/commit/ada7df7): Fixed `mockCredentials` to include the internal `version: 'v1'` field on all credential objects (`none()`, `user()`, `limitedUser()`, `service()`), and fixed `user()` to encode the user entity ref into the token (matching `user.token(ref)` behavior). This makes mock credentials compatible with `toInternalBackstageCredentials()`, which validates the version field, and ensures that credentials for different users produce different tokens.
- [`e9b78e9`](https://github.com/backstage/backstage/commit/e9b78e9): Removed the `uuid` dependency and replaced usage with the built-in `crypto.randomUUID()`.
- [`6209065`](https://github.com/backstage/backstage/commit/6209065): Added `context` and `propagation` to the alpha `TracingService`. Plugins can bridge OpenTelemetry context across async boundaries via `tracing.propagation.extract(tracing.context.active(), carrier)` followed by `tracing.context.with(ctx, fn)`, and read propagated baggage via `tracing.propagation.getActiveBaggage()` or `tracing.propagation.getBaggage(ctx)`.

### `@backstage/core-plugin-api` (1.12.5 → [1.12.6](../../changelogs/@backstage/core-plugin-api.md#1126))

#### 1.12.6

##### Patch Changes

- [`ab1cdbb`](https://github.com/backstage/backstage/commit/ab1cdbb): Removed a handful of internal imports that referenced the package by its own name. Value imports were switched to relative paths, and type-only imports to `import type`. These self-referential imports could trigger circular initialization errors in bundled ESM and when the package was loaded via `jest.requireActual` — most visibly `Cannot access '_AppRootElementBlueprintesm' before initialization` from `@backstage/frontend-plugin-api`. There are no user-facing API changes.

### `@backstage/errors` (1.3.0 → [1.3.1](../../changelogs/@backstage/errors.md#131))

#### 1.3.1

##### Patch Changes

- [`8741e5a`](https://github.com/backstage/backstage/commit/8741e5a): Added explicit `name` property to `ServiceUnavailableError` for consistency with all other error classes, making it resilient to minification.

### `@backstage/integration` (2.0.1 → [2.0.2](../../changelogs/@backstage/integration.md#202))

#### 2.0.2

##### Patch Changes

- [`6b112d3`](https://github.com/backstage/backstage/commit/6b112d3): Fixed two issues in the GitLab integration's fetch behavior:

  - The internal fetch wrapper was passing `mode: 'same-origin'` on every request. This had no practical effect server-side, but would have caused cross-origin requests to be rejected when the integration is used from a browser. Requests now use the default fetch mode and work correctly in both browser and Node environments.
  - When retries are configured, transient network errors (such as dropped connections or DNS hiccups) are now retried using the same `maxRetries` and exponential delay as retryable HTTP status codes. Previously, a thrown fetch error would propagate immediately on the first failure regardless of the retry configuration. Caller-initiated aborts continue to surface immediately without being retried.

- [`b62781f`](https://github.com/backstage/backstage/commit/b62781f): Moved `registerMswTestHooks` to test files.

### `@backstage/plugin-catalog` (2.0.4 → [2.0.5](../../changelogs/@backstage/plugin-catalog.md#205))

#### 2.0.5

##### Patch Changes

- [`728629c`](https://github.com/backstage/backstage/commit/728629c): Fixed an issue where navigating to an unknown sub-path on an entity page (for example `/catalog/default/component/foo/blob`) would silently render the first available route. Unknown paths now show the standard not-found page instead.
- [`44d77e9`](https://github.com/backstage/backstage/commit/44d77e9): Removed separate nav item extensions. Sidebar entries are now provided via `title` and `icon` on each plugin's page extension.
- [`0c5e41f`](https://github.com/backstage/backstage/commit/0c5e41f): Removed unused dependencies that had no imports in source code.
- [`cad156e`](https://github.com/backstage/backstage/commit/cad156e): Replaced old config schema values from existing extensions and blueprints.
- [`085133f`](https://github.com/backstage/backstage/commit/085133f): The `zod` dependency has been bumped from `^3.25.76 || ^4.0.0` to `^4.0.0`, since `configSchema` requires the full Zod v4 package for JSON Schema support.

### `@backstage/plugin-catalog-node` (2.2.0 → [2.2.1](../../changelogs/@backstage/plugin-catalog-node.md#221))

#### 2.2.1

##### Patch Changes

- [`ab1cdbb`](https://github.com/backstage/backstage/commit/ab1cdbb): Removed a handful of internal imports that referenced the package by its own name. Value imports were switched to relative paths, and type-only imports to `import type`. These self-referential imports could trigger circular initialization errors in bundled ESM and when the package was loaded via `jest.requireActual` — most visibly `Cannot access '_AppRootElementBlueprintesm' before initialization` from `@backstage/frontend-plugin-api`. There are no user-facing API changes.

### `@backstage/plugin-search` (1.7.3 → [1.7.4](../../changelogs/@backstage/plugin-search.md#174))

#### 1.7.4

##### Patch Changes

- [`44d77e9`](https://github.com/backstage/backstage/commit/44d77e9): Removed separate nav item extensions. Sidebar entries are now provided via `title` and `icon` on each plugin's page extension.
- [`cad156e`](https://github.com/backstage/backstage/commit/cad156e): Replaced old config schema values from existing extensions and blueprints.
- [`085133f`](https://github.com/backstage/backstage/commit/085133f): The `zod` dependency has been bumped from `^3.25.76 || ^4.0.0` to `^4.0.0`, since `configSchema` requires the full Zod v4 package for JSON Schema support.

### `@backstage/plugin-search-backend` (2.1.1 → [2.1.2](../../changelogs/@backstage/plugin-search-backend.md#212))

#### 2.1.2

##### Patch Changes

- [`303954b`](https://github.com/backstage/backstage/commit/303954b): Added action for search backend to query search engine using the actions registry
- [`0c5e41f`](https://github.com/backstage/backstage/commit/0c5e41f): Removed unused dependencies that had no imports in source code.

### `@backstage/plugin-search-backend-module-elasticsearch` (1.8.2 → [1.8.3](../../changelogs/@backstage/plugin-search-backend-module-elasticsearch.md#183))

#### 1.8.3

##### Patch Changes

- [`e9b78e9`](https://github.com/backstage/backstage/commit/e9b78e9): Removed the `uuid` dependency and replaced usage with the built-in `crypto.randomUUID()`.

### `@backstage/plugin-search-backend-node` (1.4.3 → [1.4.4](../../changelogs/@backstage/plugin-search-backend-node.md#144))

#### 1.4.4

##### Patch Changes

- [`e9b78e9`](https://github.com/backstage/backstage/commit/e9b78e9): Removed the `uuid` dependency and replaced usage with the built-in `crypto.randomUUID()`.

### `@backstage/plugin-search-react` (1.11.3 → [1.11.4](../../changelogs/@backstage/plugin-search-react.md#1114))

#### 1.11.4

##### Patch Changes

- [`e9b78e9`](https://github.com/backstage/backstage/commit/e9b78e9): Removed the `uuid` dependency and replaced usage with the built-in `crypto.randomUUID()`.
- [`cad156e`](https://github.com/backstage/backstage/commit/cad156e): Replaced old config schema values from existing extensions and blueprints.
- [`085133f`](https://github.com/backstage/backstage/commit/085133f): The `zod` dependency has been bumped from `^3.25.76 || ^4.0.0` to `^4.0.0`, since `configSchema` requires the full Zod v4 package for JSON Schema support.

### `@backstage/plugin-techdocs` (1.17.5 → [1.17.6](../../changelogs/@backstage/plugin-techdocs.md#1176))

#### 1.17.6

##### Patch Changes

- [`8d1e093`](https://github.com/backstage/backstage/commit/8d1e093): Made the TechDocs sidebar positioning at tablet breakpoints configurable via CSS custom properties, allowing apps with custom sidebar widths to override the defaults. The available properties are `--techdocs-sidebar-closed-offset-pinned`, `--techdocs-sidebar-closed-offset-collapsed`, and `--techdocs-sidebar-open-translate`.
- [`f635139`](https://github.com/backstage/backstage/commit/f635139): Limited `@remixicon/react` dependency to versions below 4.9.0 due to a license change in that release.
- [`44d77e9`](https://github.com/backstage/backstage/commit/44d77e9): Removed separate nav item extensions. Sidebar entries are now provided via `title` and `icon` on each plugin's page extension.
- [`cad156e`](https://github.com/backstage/backstage/commit/cad156e): Replaced old config schema values from existing extensions and blueprints.
- [`085133f`](https://github.com/backstage/backstage/commit/085133f): The `zod` dependency has been bumped from `^3.25.76 || ^4.0.0` to `^4.0.0`, since `configSchema` requires the full Zod v4 package for JSON Schema support.

### `@backstage/plugin-techdocs-react` (1.3.10 → [1.3.11](../../changelogs/@backstage/plugin-techdocs-react.md#1311))

#### 1.3.11

##### Patch Changes

- [`0c5e41f`](https://github.com/backstage/backstage/commit/0c5e41f): Removed unused dependencies that had no imports in source code.

## Excluded dependency updates

- `@backstage/app-defaults` (1.7.7 → [1.7.8](../../changelogs/@backstage/app-defaults.md#178))
- `@backstage/backend-openapi-utils` (0.6.8 → [0.6.9](../../changelogs/@backstage/backend-openapi-utils.md#069))
- `@backstage/catalog-client` (1.15.0 → [1.15.1](../../changelogs/@backstage/catalog-client.md#1151))
- `@backstage/cli-common` (0.2.1 → [0.2.2](../../changelogs/@backstage/cli-common.md#022))
- `@backstage/cli-defaults` (0.1.1 → [0.1.2](../../changelogs/@backstage/cli-defaults.md#012))
- `@backstage/cli-module-actions` (0.1.0 → [0.1.1](../../changelogs/@backstage/cli-module-actions.md#011))
- `@backstage/cli-module-auth` (0.1.1 → [0.1.2](../../changelogs/@backstage/cli-module-auth.md#012))
- `@backstage/cli-module-config` (0.1.1 → [0.1.2](../../changelogs/@backstage/cli-module-config.md#012))
- `@backstage/cli-module-github` (0.1.1 → [0.1.2](../../changelogs/@backstage/cli-module-github.md#012))
- `@backstage/cli-module-info` (0.1.1 → [0.1.2](../../changelogs/@backstage/cli-module-info.md#012))
- `@backstage/cli-module-lint` (0.1.1 → [0.1.2](../../changelogs/@backstage/cli-module-lint.md#012))
- `@backstage/cli-module-maintenance` (0.1.1 → [0.1.2](../../changelogs/@backstage/cli-module-maintenance.md#012))
- `@backstage/cli-module-migrate` (0.1.1 → [0.1.2](../../changelogs/@backstage/cli-module-migrate.md#012))
- `@backstage/cli-module-test-jest` (0.1.1 → [0.1.2](../../changelogs/@backstage/cli-module-test-jest.md#012))
- `@backstage/cli-module-translations` (0.1.1 → [0.1.2](../../changelogs/@backstage/cli-module-translations.md#012))
- `@backstage/codemods` (0.1.56 → [0.1.57](../../changelogs/@backstage/codemods.md#0157))
- `@backstage/config` (1.3.7 → [1.3.8](../../changelogs/@backstage/config.md#138))
- `@backstage/config-loader` (1.10.10 → [1.10.11](../../changelogs/@backstage/config-loader.md#11011))
- `@backstage/core-app-api` (1.20.0 → [1.20.1](../../changelogs/@backstage/core-app-api.md#1201))
- `@backstage/dev-utils` (1.1.22 → [1.1.23](../../changelogs/@backstage/dev-utils.md#1123))
- `@backstage/frontend-dev-utils` (0.1.1 → [0.1.2](../../changelogs/@backstage/frontend-dev-utils.md#012))
- `@backstage/integration-react` (1.2.17 → [1.2.18](../../changelogs/@backstage/integration-react.md#1218))
- `@backstage/plugin-app-node` (0.1.44 → [0.1.45](../../changelogs/@backstage/plugin-app-node.md#0145))
- `@backstage/plugin-app-react` (0.2.2 → [0.2.3](../../changelogs/@backstage/plugin-app-react.md#023))
- `@backstage/plugin-auth-backend-module-atlassian-provider` (0.4.14 → [0.4.15](../../changelogs/@backstage/plugin-auth-backend-module-atlassian-provider.md#0415))
- `@backstage/plugin-auth-backend-module-auth0-provider` (0.4.0 → [0.4.1](../../changelogs/@backstage/plugin-auth-backend-module-auth0-provider.md#041))
- `@backstage/plugin-auth-backend-module-aws-alb-provider` (0.4.15 → [0.4.16](../../changelogs/@backstage/plugin-auth-backend-module-aws-alb-provider.md#0416))
- `@backstage/plugin-auth-backend-module-azure-easyauth-provider` (0.2.19 → [0.2.20](../../changelogs/@backstage/plugin-auth-backend-module-azure-easyauth-provider.md#0220))
- `@backstage/plugin-auth-backend-module-bitbucket-provider` (0.3.14 → [0.3.15](../../changelogs/@backstage/plugin-auth-backend-module-bitbucket-provider.md#0315))
- `@backstage/plugin-auth-backend-module-bitbucket-server-provider` (0.2.14 → [0.2.15](../../changelogs/@backstage/plugin-auth-backend-module-bitbucket-server-provider.md#0215))
- `@backstage/plugin-auth-backend-module-gcp-iap-provider` (0.4.14 → [0.4.15](../../changelogs/@backstage/plugin-auth-backend-module-gcp-iap-provider.md#0415))
- `@backstage/plugin-auth-backend-module-github-provider` (0.5.2 → [0.5.3](../../changelogs/@backstage/plugin-auth-backend-module-github-provider.md#053))
- `@backstage/plugin-auth-backend-module-gitlab-provider` (0.4.2 → [0.4.3](../../changelogs/@backstage/plugin-auth-backend-module-gitlab-provider.md#043))
- `@backstage/plugin-auth-backend-module-google-provider` (0.3.14 → [0.3.15](../../changelogs/@backstage/plugin-auth-backend-module-google-provider.md#0315))
- `@backstage/plugin-auth-backend-module-guest-provider` (0.2.18 → [0.2.19](../../changelogs/@backstage/plugin-auth-backend-module-guest-provider.md#0219))
- `@backstage/plugin-auth-backend-module-microsoft-provider` (0.3.14 → [0.3.15](../../changelogs/@backstage/plugin-auth-backend-module-microsoft-provider.md#0315))
- `@backstage/plugin-auth-backend-module-oauth2-provider` (0.4.14 → [0.4.15](../../changelogs/@backstage/plugin-auth-backend-module-oauth2-provider.md#0415))
- `@backstage/plugin-auth-backend-module-oauth2-proxy-provider` (0.2.19 → [0.2.20](../../changelogs/@backstage/plugin-auth-backend-module-oauth2-proxy-provider.md#0220))
- `@backstage/plugin-auth-backend-module-okta-provider` (0.2.14 → [0.2.15](../../changelogs/@backstage/plugin-auth-backend-module-okta-provider.md#0215))
- `@backstage/plugin-auth-backend-module-onelogin-provider` (0.3.14 → [0.3.15](../../changelogs/@backstage/plugin-auth-backend-module-onelogin-provider.md#0315))
- `@backstage/plugin-auth-backend-module-openshift-provider` (0.1.6 → [0.1.7](../../changelogs/@backstage/plugin-auth-backend-module-openshift-provider.md#017))
- `@backstage/plugin-auth-backend-module-pinniped-provider` (0.3.13 → [0.3.14](../../changelogs/@backstage/plugin-auth-backend-module-pinniped-provider.md#0314))
- `@backstage/plugin-auth-backend-module-vmware-cloud-provider` (0.5.13 → [0.5.14](../../changelogs/@backstage/plugin-auth-backend-module-vmware-cloud-provider.md#0514))
- `@backstage/plugin-auth-react` (0.1.26 → [0.1.27](../../changelogs/@backstage/plugin-auth-react.md#0127))
- `@backstage/plugin-bitbucket-cloud-common` (0.3.9 → [0.3.10](../../changelogs/@backstage/plugin-bitbucket-cloud-common.md#0310))
- `@backstage/plugin-catalog-backend-module-gcp` (0.3.18 → [0.3.19](../../changelogs/@backstage/plugin-catalog-backend-module-gcp.md#0319))
- `@backstage/plugin-catalog-backend-module-gitlab-org` (0.2.20 → [0.2.21](../../changelogs/@backstage/plugin-catalog-backend-module-gitlab-org.md#0221))
- `@backstage/plugin-catalog-backend-module-logs` (0.1.21 → [0.1.22](../../changelogs/@backstage/plugin-catalog-backend-module-logs.md#0122))
- `@backstage/plugin-catalog-backend-module-openapi` (0.2.21 → [0.2.22](../../changelogs/@backstage/plugin-catalog-backend-module-openapi.md#0222))
- `@backstage/plugin-catalog-backend-module-scaffolder-entity-model` (0.2.19 → [0.2.20](../../changelogs/@backstage/plugin-catalog-backend-module-scaffolder-entity-model.md#0220))
- `@backstage/plugin-catalog-common` (1.1.9 → [1.1.10](../../changelogs/@backstage/plugin-catalog-common.md#1110))
- `@backstage/plugin-config-schema` (0.1.79 → [0.1.80](../../changelogs/@backstage/plugin-config-schema.md#0180))
- `@backstage/plugin-devtools-common` (0.1.24 → [0.1.25](../../changelogs/@backstage/plugin-devtools-common.md#0125))
- `@backstage/plugin-devtools-react` (0.2.1 → [0.2.2](../../changelogs/@backstage/plugin-devtools-react.md#022))
- `@backstage/plugin-events-backend` (0.6.1 → [0.6.2](../../changelogs/@backstage/plugin-events-backend.md#062))
- `@backstage/plugin-events-backend-module-aws-sqs` (0.4.21 → [0.4.22](../../changelogs/@backstage/plugin-events-backend-module-aws-sqs.md#0422))
- `@backstage/plugin-events-backend-module-azure` (0.2.30 → [0.2.31](../../changelogs/@backstage/plugin-events-backend-module-azure.md#0231))
- `@backstage/plugin-events-backend-module-bitbucket-cloud` (0.2.30 → [0.2.31](../../changelogs/@backstage/plugin-events-backend-module-bitbucket-cloud.md#0231))
- `@backstage/plugin-events-backend-module-bitbucket-server` (0.1.11 → [0.1.12](../../changelogs/@backstage/plugin-events-backend-module-bitbucket-server.md#0112))
- `@backstage/plugin-events-backend-module-gerrit` (0.2.30 → [0.2.31](../../changelogs/@backstage/plugin-events-backend-module-gerrit.md#0231))
- `@backstage/plugin-events-backend-module-github` (0.4.11 → [0.4.12](../../changelogs/@backstage/plugin-events-backend-module-github.md#0412))
- `@backstage/plugin-events-backend-module-gitlab` (0.3.11 → [0.3.12](../../changelogs/@backstage/plugin-events-backend-module-gitlab.md#0312))
- `@backstage/plugin-events-backend-module-google-pubsub` (0.2.2 → [0.2.3](../../changelogs/@backstage/plugin-events-backend-module-google-pubsub.md#023))
- `@backstage/plugin-events-backend-module-kafka` (0.3.3 → [0.3.4](../../changelogs/@backstage/plugin-events-backend-module-kafka.md#034))
- `@backstage/plugin-events-backend-test-utils` (0.1.54 → [0.1.55](../../changelogs/@backstage/plugin-events-backend-test-utils.md#0155))
- `@backstage/plugin-events-node` (0.4.21 → [0.4.22](../../changelogs/@backstage/plugin-events-node.md#0422))
- `@backstage/plugin-gateway-backend` (1.1.4 → [1.1.5](../../changelogs/@backstage/plugin-gateway-backend.md#115))
- `@backstage/plugin-home-react` (0.1.37 → [0.1.38](../../changelogs/@backstage/plugin-home-react.md#0138))
- `@backstage/plugin-kubernetes` (0.12.18 → [0.12.19](../../changelogs/@backstage/plugin-kubernetes.md#01219))
- `@backstage/plugin-kubernetes-cluster` (0.0.36 → [0.0.37](../../changelogs/@backstage/plugin-kubernetes-cluster.md#0037))
- `@backstage/plugin-mui-to-bui` (0.2.6 → [0.2.7](../../changelogs/@backstage/plugin-mui-to-bui.md#027))
- `@backstage/plugin-notifications-backend-module-email` (0.3.20 → [0.3.21](../../changelogs/@backstage/plugin-notifications-backend-module-email.md#0321))
- `@backstage/plugin-org-react` (0.1.49 → [0.1.50](../../changelogs/@backstage/plugin-org-react.md#0150))
- `@backstage/plugin-permission-backend-module-allow-all-policy` (0.2.18 → [0.2.19](../../changelogs/@backstage/plugin-permission-backend-module-allow-all-policy.md#0219))
- `@backstage/plugin-permission-react` (0.5.0 → [0.5.1](../../changelogs/@backstage/plugin-permission-react.md#051))
- `@backstage/plugin-proxy-backend` (0.6.12 → [0.6.13](../../changelogs/@backstage/plugin-proxy-backend.md#0613))
- `@backstage/plugin-proxy-node` (0.1.14 → [0.1.15](../../changelogs/@backstage/plugin-proxy-node.md#0115))
- `@backstage/plugin-scaffolder-backend-module-azure` (0.2.20 → [0.2.21](../../changelogs/@backstage/plugin-scaffolder-backend-module-azure.md#0221))
- `@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` (0.3.5 → [0.3.6](../../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket-cloud.md#036))
- `@backstage/plugin-scaffolder-backend-module-bitbucket-server` (0.2.20 → [0.2.21](../../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket-server.md#0221))
- `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.3.20 → [0.3.21](../../changelogs/@backstage/plugin-scaffolder-backend-module-confluence-to-markdown.md#0321))
- `@backstage/plugin-scaffolder-backend-module-gcp` (0.2.20 → [0.2.21](../../changelogs/@backstage/plugin-scaffolder-backend-module-gcp.md#0221))
- `@backstage/plugin-scaffolder-backend-module-gerrit` (0.2.20 → [0.2.21](../../changelogs/@backstage/plugin-scaffolder-backend-module-gerrit.md#0221))
- `@backstage/plugin-scaffolder-backend-module-gitea` (0.2.20 → [0.2.21](../../changelogs/@backstage/plugin-scaffolder-backend-module-gitea.md#0221))
- `@backstage/plugin-scaffolder-backend-module-notifications` (0.1.21 → [0.1.22](../../changelogs/@backstage/plugin-scaffolder-backend-module-notifications.md#0122))
- `@backstage/plugin-scaffolder-backend-module-rails` (0.5.20 → [0.5.21](../../changelogs/@backstage/plugin-scaffolder-backend-module-rails.md#0521))
- `@backstage/plugin-scaffolder-backend-module-sentry` (0.3.3 → [0.3.4](../../changelogs/@backstage/plugin-scaffolder-backend-module-sentry.md#034))
- `@backstage/plugin-scaffolder-node-test-utils` (0.3.10 → [0.3.11](../../changelogs/@backstage/plugin-scaffolder-node-test-utils.md#0311))
- `@backstage/plugin-search-backend-module-catalog` (0.3.14 → [0.3.15](../../changelogs/@backstage/plugin-search-backend-module-catalog.md#0315))
- `@backstage/plugin-search-backend-module-explore` (0.3.13 → [0.3.14](../../changelogs/@backstage/plugin-search-backend-module-explore.md#0314))
- `@backstage/plugin-search-backend-module-stack-overflow-collator` (0.3.19 → [0.3.20](../../changelogs/@backstage/plugin-search-backend-module-stack-overflow-collator.md#0320))
- `@backstage/plugin-search-backend-module-techdocs` (0.4.13 → [0.4.14](../../changelogs/@backstage/plugin-search-backend-module-techdocs.md#0414))
- `@backstage/plugin-search-common` (1.2.23 → [1.2.24](../../changelogs/@backstage/plugin-search-common.md#1224))
- `@backstage/plugin-signals-react` (0.0.21 → [0.0.22](../../changelogs/@backstage/plugin-signals-react.md#0022))
- `@backstage/plugin-techdocs-addons-test-utils` (2.0.4 → [2.0.5](../../changelogs/@backstage/plugin-techdocs-addons-test-utils.md#205))
- `@backstage/plugin-techdocs-module-addons-contrib` (1.1.35 → [1.1.36](../../changelogs/@backstage/plugin-techdocs-module-addons-contrib.md#1136))
- `@backstage/test-utils` (1.7.17 → [1.7.18](../../changelogs/@backstage/test-utils.md#1718))
