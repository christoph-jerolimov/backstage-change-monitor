# Backstage Release 1.56.0 changelog

Changes between 1.55.3 and 1.56.0 — 3 added, 0 removed, 205 upgraded, 7 unchanged packages.

## Summary

- [Newly added packages](#newly-added-packages): 3 packages
- [Breaking changes](#breaking-changes): 3 packages
- [0.x minor version bumps](#0x-minor-version-bumps): 3 packages
- [0.0.x patch version bumps](#00x-patch-version-bumps): 2 packages
- [0.x patch version bumps](#0x-patch-version-bumps): 44 packages
- [Other minor version bumps](#other-minor-version-bumps): 8 packages
- [Other patch version bumps](#other-patch-version-bumps): 11 packages
- [Excluded dependency updates](#excluded-dependency-updates): 134 packages

## Table of contents

- [Newly added packages](#newly-added-packages)
  - [`@backstage/cli-module-catalog` (new, 0.2.0)](#backstagecli-module-catalog-new-020)
  - [`@backstage/cli-module-scaffolder` (new, 0.2.0)](#backstagecli-module-scaffolder-new-020)
  - [`@backstage/cli-module-search` (new, 0.2.0)](#backstagecli-module-search-new-020)
- [Breaking changes](#breaking-changes)
  - [`@backstage/backend-plugin-api` (1.10.1 → 1.11.0)](#backstagebackend-plugin-api-1101--1110)
  - [`@backstage/filter-predicates` (0.1.5 → 0.2.0)](#backstagefilter-predicates-015--020)
  - [`@backstage/plugin-auth-backend-module-atlassian-provider` (0.4.19 → 0.5.0)](#backstageplugin-auth-backend-module-atlassian-provider-0419--050)
- [0.x minor version bumps](#0x-minor-version-bumps)
  - [`@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.8.0 → 0.9.0)](#backstageplugin-catalog-backend-module-incremental-ingestion-080--090)
  - [`@backstage/plugin-org` (0.7.9 → 0.8.0)](#backstageplugin-org-079--080)
  - [`@backstage/ui` (0.18.0 → 0.19.0)](#backstageui-0180--0190)
- [0.0.x patch version bumps](#00x-patch-version-bumps)
  - [`@backstage/plugin-signals` (0.0.35 → 0.0.36)](#backstageplugin-signals-0035--0036)
  - [`@backstage/release-manifests` (0.0.14 → 0.0.15)](#backstagerelease-manifests-0014--0015)
- [0.x patch version bumps](#0x-patch-version-bumps)
  - [`@backstage/backend-defaults` (0.18.0 → 0.18.1)](#backstagebackend-defaults-0180--0181)
  - [`@backstage/backend-dynamic-feature-service` (0.8.7 → 0.8.8)](#backstagebackend-dynamic-feature-service-087--088)
  - [`@backstage/backend-openapi-utils` (0.7.2 → 0.7.3)](#backstagebackend-openapi-utils-072--073)
  - [`@backstage/cli` (0.36.6 → 0.36.7)](#backstagecli-0366--0367)
  - [`@backstage/cli-module-actions` (0.1.3 → 0.1.4)](#backstagecli-module-actions-013--014)
  - [`@backstage/cli-module-auth` (0.1.4 → 0.1.5)](#backstagecli-module-auth-014--015)
  - [`@backstage/cli-module-build` (0.1.8 → 0.1.9)](#backstagecli-module-build-018--019)
  - [`@backstage/cli-module-new` (0.1.7 → 0.1.8)](#backstagecli-module-new-017--018)
  - [`@backstage/cli-module-package-manager-yarn` (0.1.2 → 0.1.3)](#backstagecli-module-package-manager-yarn-012--013)
  - [`@backstage/cli-module-test-jest` (0.1.6 → 0.1.7)](#backstagecli-module-test-jest-016--017)
  - [`@backstage/cli-node` (0.3.4 → 0.3.5)](#backstagecli-node-034--035)
  - [`@backstage/connections` (0.4.0 → 0.4.1)](#backstageconnections-040--041)
  - [`@backstage/core-compat-api` (0.5.15 → 0.5.16)](#backstagecore-compat-api-0515--0516)
  - [`@backstage/core-components` (0.18.14 → 0.18.15)](#backstagecore-components-01814--01815)
  - [`@backstage/create-app` (0.9.2 → 0.9.3)](#backstagecreate-app-092--093)
  - [`@backstage/eslint-plugin` (0.3.2 → 0.3.3)](#backstageeslint-plugin-032--033)
  - [`@backstage/frontend-app-api` (0.16.8 → 0.16.9)](#backstagefrontend-app-api-0168--0169)
  - [`@backstage/frontend-plugin-api` (0.18.1 → 0.18.2)](#backstagefrontend-plugin-api-0181--0182)
  - [`@backstage/frontend-test-utils` (0.6.4 → 0.6.5)](#backstagefrontend-test-utils-064--065)
  - [`@backstage/plugin-app` (0.5.3 → 0.5.4)](#backstageplugin-app-053--054)
  - [`@backstage/plugin-app-backend` (0.5.18 → 0.5.19)](#backstageplugin-app-backend-0518--0519)
  - [`@backstage/plugin-app-visualizer` (0.2.8 → 0.2.9)](#backstageplugin-app-visualizer-028--029)
  - [`@backstage/plugin-auth-backend-module-gcp-iap-provider` (0.4.19 → 0.4.20)](#backstageplugin-auth-backend-module-gcp-iap-provider-0419--0420)
  - [`@backstage/plugin-auth-backend-module-guest-provider` (0.2.23 → 0.2.24)](#backstageplugin-auth-backend-module-guest-provider-0223--0224)
  - [`@backstage/plugin-auth-node` (0.7.6 → 0.7.7)](#backstageplugin-auth-node-076--077)
  - [`@backstage/plugin-bitbucket-cloud-common` (0.3.13 → 0.3.14)](#backstageplugin-bitbucket-cloud-common-0313--0314)
  - [`@backstage/plugin-catalog-backend-module-gitea` (0.1.16 → 0.1.17)](#backstageplugin-catalog-backend-module-gitea-0116--0117)
  - [`@backstage/plugin-catalog-backend-module-ldap` (0.12.9 → 0.12.10)](#backstageplugin-catalog-backend-module-ldap-0129--01210)
  - [`@backstage/plugin-catalog-graph` (0.6.8 → 0.6.9)](#backstageplugin-catalog-graph-068--069)
  - [`@backstage/plugin-catalog-import` (0.13.18 → 0.13.19)](#backstageplugin-catalog-import-01318--01319)
  - [`@backstage/plugin-devtools` (0.1.43 → 0.1.44)](#backstageplugin-devtools-0143--0144)
  - [`@backstage/plugin-events-backend` (0.6.6 → 0.6.7)](#backstageplugin-events-backend-066--067)
  - [`@backstage/plugin-kubernetes-backend` (0.21.11 → 0.21.12)](#backstageplugin-kubernetes-backend-02111--02112)
  - [`@backstage/plugin-kubernetes-react` (0.6.0 → 0.6.1)](#backstageplugin-kubernetes-react-060--061)
  - [`@backstage/plugin-mui-to-bui` (0.2.11 → 0.2.12)](#backstageplugin-mui-to-bui-0211--0212)
  - [`@backstage/plugin-notifications` (0.6.0 → 0.6.1)](#backstageplugin-notifications-060--061)
  - [`@backstage/plugin-notifications-backend` (0.6.9 → 0.6.10)](#backstageplugin-notifications-backend-069--0610)
  - [`@backstage/plugin-notifications-backend-module-email` (0.3.25 → 0.3.26)](#backstageplugin-notifications-backend-module-email-0325--0326)
  - [`@backstage/plugin-scaffolder-backend-module-gitlab` (0.12.0 → 0.12.1)](#backstageplugin-scaffolder-backend-module-gitlab-0120--0121)
  - [`@backstage/plugin-search-backend-module-explore` (0.3.18 → 0.3.19)](#backstageplugin-search-backend-module-explore-0318--0319)
  - [`@backstage/plugin-search-backend-module-pg` (0.5.59 → 0.5.60)](#backstageplugin-search-backend-module-pg-0559--0560)
  - [`@backstage/plugin-signals-backend` (0.3.19 → 0.3.20)](#backstageplugin-signals-backend-0319--0320)
  - [`@backstage/plugin-techdocs-common` (0.1.1 → 0.1.2)](#backstageplugin-techdocs-common-011--012)
  - [`@backstage/repo-tools` (0.19.1 → 0.19.2)](#backstagerepo-tools-0191--0192)
- [Other minor version bumps](#other-minor-version-bumps)
  - [`@backstage/backend-app-api` (1.7.4 → 1.8.0)](#backstagebackend-app-api-174--180)
  - [`@backstage/plugin-catalog-react` (3.2.3 → 3.3.0)](#backstageplugin-catalog-react-323--330)
  - [`@backstage/plugin-scaffolder` (1.39.0 → 1.40.0)](#backstageplugin-scaffolder-1390--1400)
  - [`@backstage/plugin-techdocs` (1.18.2 → 1.19.0)](#backstageplugin-techdocs-1182--1190)
  - [`@backstage/plugin-techdocs-backend` (2.3.0 → 2.4.0)](#backstageplugin-techdocs-backend-230--240)
  - [`@backstage/plugin-techdocs-node` (2.0.2 → 2.1.0)](#backstageplugin-techdocs-node-202--210)
  - [`@backstage/plugin-techdocs-react` (1.3.15 → 1.4.0)](#backstageplugin-techdocs-react-1315--140)
  - [`@techdocs/cli` (1.12.0 → 1.13.0)](#techdocscli-1120--1130)
- [Other patch version bumps](#other-patch-version-bumps)
  - [`@backstage/backend-test-utils` (1.11.7 → 1.11.8)](#backstagebackend-test-utils-1117--1118)
  - [`@backstage/catalog-client` (1.16.2 → 1.16.3)](#backstagecatalog-client-1162--1163)
  - [`@backstage/catalog-model` (1.10.1 → 1.10.2)](#backstagecatalog-model-1101--1102)
  - [`@backstage/config` (1.3.9 → 1.3.10)](#backstageconfig-139--1310)
  - [`@backstage/config-loader` (1.11.3 → 1.11.4)](#backstageconfig-loader-1113--1114)
  - [`@backstage/errors` (1.3.1 → 1.3.2)](#backstageerrors-131--132)
  - [`@backstage/integration` (2.1.2 → 2.1.3)](#backstageintegration-212--213)
  - [`@backstage/plugin-catalog` (2.0.9 → 2.0.10)](#backstageplugin-catalog-209--2010)
  - [`@backstage/plugin-catalog-backend` (4.0.0 → 4.0.1)](#backstageplugin-catalog-backend-400--401)
  - [`@backstage/plugin-scaffolder-backend` (4.2.0 → 4.2.1)](#backstageplugin-scaffolder-backend-420--421)
  - [`@backstage/plugin-search-backend-module-elasticsearch` (2.0.0 → 2.0.1)](#backstageplugin-search-backend-module-elasticsearch-200--201)
- [Excluded dependency updates](#excluded-dependency-updates)

## Newly added packages

### `@backstage/cli-module-catalog` (new, [0.2.0](../../changelogs/@backstage/cli-module-catalog.md#020))

#### 0.2.0

##### Minor Changes

- [`3d6721d`](https://github.com/backstage/backstage/commit/3d6721d): Add intent-based CLI modules for catalog, scaffolder, and search.

  New modules provide domain-oriented subcommands that talk directly to the corresponding plugins' REST APIs:

  - `@backstage/cli-module-catalog`: `catalog list`, `catalog get`, `catalog validate`, `catalog register`, `catalog unregister`
  - `@backstage/cli-module-scaffolder`: `template list`, `template execute`, `template dry-run`
  - `@backstage/cli-module-search`: `search`, `docs search`

  The commands take their main input as a positional argument: an entity or template reference, a file path (or `-` for standard input) for `catalog validate` and `template dry-run`, a URL for `catalog register`, and the search terms for `search` and `docs search`. Repeatable `key=value` flags are used for filters, template values, and secrets, and comma-separated lists for `--fields`. Unknown flags are rejected.

  The commands that list results, `catalog list`, `template list`, `search`, and `docs search`, support `--output human` (the default) or `--output json`, along with `--limit` and `--cursor` for paging. Each command prints a single page. Human output shows how many results were shown and, when more are available, prints the `--cursor` value to continue from. All other commands always print JSON. `catalog validate` checks every entity in a multi-document YAML file and prints a JSON array with one result per entity. `catalog validate` and `template dry-run` exit with a non-zero code when the input is invalid, while connection and authentication problems are reported as errors.

  `@backstage/cli-node` now provides shared parsers for repeatable `key=value` inputs and comma-separated lists.

### `@backstage/cli-module-scaffolder` (new, [0.2.0](../../changelogs/@backstage/cli-module-scaffolder.md#020))

#### 0.2.0

##### Minor Changes

- [`3d6721d`](https://github.com/backstage/backstage/commit/3d6721d): Add intent-based CLI modules for catalog, scaffolder, and search.

  New modules provide domain-oriented subcommands that talk directly to the corresponding plugins' REST APIs:

  - `@backstage/cli-module-catalog`: `catalog list`, `catalog get`, `catalog validate`, `catalog register`, `catalog unregister`
  - `@backstage/cli-module-scaffolder`: `template list`, `template execute`, `template dry-run`
  - `@backstage/cli-module-search`: `search`, `docs search`

  The commands take their main input as a positional argument: an entity or template reference, a file path (or `-` for standard input) for `catalog validate` and `template dry-run`, a URL for `catalog register`, and the search terms for `search` and `docs search`. Repeatable `key=value` flags are used for filters, template values, and secrets, and comma-separated lists for `--fields`. Unknown flags are rejected.

  The commands that list results, `catalog list`, `template list`, `search`, and `docs search`, support `--output human` (the default) or `--output json`, along with `--limit` and `--cursor` for paging. Each command prints a single page. Human output shows how many results were shown and, when more are available, prints the `--cursor` value to continue from. All other commands always print JSON. `catalog validate` checks every entity in a multi-document YAML file and prints a JSON array with one result per entity. `catalog validate` and `template dry-run` exit with a non-zero code when the input is invalid, while connection and authentication problems are reported as errors.

  `@backstage/cli-node` now provides shared parsers for repeatable `key=value` inputs and comma-separated lists.

### `@backstage/cli-module-search` (new, [0.2.0](../../changelogs/@backstage/cli-module-search.md#020))

#### 0.2.0

##### Minor Changes

- [`3d6721d`](https://github.com/backstage/backstage/commit/3d6721d): Add intent-based CLI modules for catalog, scaffolder, and search.

  New modules provide domain-oriented subcommands that talk directly to the corresponding plugins' REST APIs:

  - `@backstage/cli-module-catalog`: `catalog list`, `catalog get`, `catalog validate`, `catalog register`, `catalog unregister`
  - `@backstage/cli-module-scaffolder`: `template list`, `template execute`, `template dry-run`
  - `@backstage/cli-module-search`: `search`, `docs search`

  The commands take their main input as a positional argument: an entity or template reference, a file path (or `-` for standard input) for `catalog validate` and `template dry-run`, a URL for `catalog register`, and the search terms for `search` and `docs search`. Repeatable `key=value` flags are used for filters, template values, and secrets, and comma-separated lists for `--fields`. Unknown flags are rejected.

  The commands that list results, `catalog list`, `template list`, `search`, and `docs search`, support `--output human` (the default) or `--output json`, along with `--limit` and `--cursor` for paging. Each command prints a single page. Human output shows how many results were shown and, when more are available, prints the `--cursor` value to continue from. All other commands always print JSON. `catalog validate` checks every entity in a multi-document YAML file and prints a JSON array with one result per entity. `catalog validate` and `template dry-run` exit with a non-zero code when the input is invalid, while connection and authentication problems are reported as errors.

  `@backstage/cli-node` now provides shared parsers for repeatable `key=value` inputs and comma-separated lists.

## Breaking changes

### `@backstage/backend-plugin-api` (1.10.1 → [1.11.0](../../changelogs/@backstage/backend-plugin-api.md#1110))

#### 1.11.0

##### Minor Changes

- [`e956084`](https://github.com/backstage/backstage/commit/e956084): **BREAKING PRODUCERS**: Added an instance ID to the root instance metadata service. Custom implementations and mocks must now provide a globally unique ID that remains stable for the lifetime of the running backend instance.
- [`f6054ac`](https://github.com/backstage/backstage/commit/f6054ac): Added experimental `declareConnection` and `connectionsServiceRef` exports to `@backstage/backend-plugin-api/alpha`. Plugins and modules can declare connection dependencies and request the connections service without importing private packages.

### `@backstage/filter-predicates` (0.1.5 → [0.2.0](../../changelogs/@backstage/filter-predicates.md#020))

#### 0.2.0

##### Minor Changes

- [`11f608b`](https://github.com/backstage/backstage/commit/11f608b): **BREAKING**: The `FilterPredicate` type, the zod schemas and `parseFilterPredicate` now only accept objects at the root of a predicate. Primitive values such as `"component"` or `true` were previously accepted at the root, but no API that accepts filter predicates could match them in a meaningful way. Primitive values are still allowed as values to match against properties, and as the operand of `$contains` to match arrays of primitive values, for example `{ "metadata.tags": { "$contains": "java" } }`.

  A new `AnyFilterPredicate` type describes predicates that may also be primitive values at the root, which is equivalent to the previous `FilterPredicate` type. It is used for the operand of `$contains`, and is accepted by `evaluateFilterPredicate`.

### `@backstage/plugin-auth-backend-module-atlassian-provider` (0.4.19 → [0.5.0](../../changelogs/@backstage/plugin-auth-backend-module-atlassian-provider.md#050))

#### 0.5.0

##### Minor Changes

- [`d7cd08b`](https://github.com/backstage/backstage/commit/d7cd08b): **BREAKING**: Removed the `usernameMatchingUserEntityName` sign-in resolver, along with the `atlassianSignInResolvers` export that only contained it. Atlassian user profiles do not contain a username, so the resolver could never work in an Atlassian environment anyway. Use the `emailMatchingUserEntityProfileEmail` or `emailLocalPartMatchingUserEntityName` resolvers instead.

## 0.x minor version bumps

### `@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.8.0 → [0.9.0](../../changelogs/@backstage/plugin-catalog-backend-module-incremental-ingestion.md#090))

#### 0.9.0

##### Minor Changes

- [`e003123`](https://github.com/backstage/backstage/commit/e003123): Added a `source_key` column and a `UNIQUE(source_key, entity_ref)` constraint to the `ingestion_mark_entities` table, enabling a single native upsert instead of a select-then-update-or-insert sequence per ingestion mark.
  This significantly reduces the number of database round trips during ingestion.

  As part of this change, the table's `ref` column is renamed to `entity_ref` to standardize its naming with the rest of the table's columns.
  This rename means the migration cannot be applied as part of a rolling, zero-downtime upgrade, which is fine since incremental ingestion providers are designed to run sequentially on a single Backstage backend instance.

### `@backstage/plugin-org` (0.7.9 → [0.8.0](../../changelogs/@backstage/plugin-org.md#080))

#### 0.8.0

##### Minor Changes

- [`1557a8c`](https://github.com/backstage/backstage/commit/1557a8c): Added a swappable `UserAvatar` component and wired org plugin surfaces to use it for user profile pictures.

### `@backstage/ui` (0.18.0 → [0.19.0](../../changelogs/@backstage/ui.md#0190))

#### 0.19.0

##### Minor Changes

- [`4e7a710`](https://github.com/backstage/backstage/commit/4e7a710): Updated React Aria dependencies to React Aria Components 1.22.0, React Aria 3.53.0, and React Stately 3.51.0. Existing Checkbox, Radio, and Switch implementations are retained.

  **Migration:**

  `MenuSection` no longer accepts `disabledKeys`. Move `disabledKeys` to `Menu` or set `isDisabled` on the affected `MenuItem` components.

  Programmatic clicks on Checkbox and Switch labels no longer toggle their selection. Target the input when activating these controls programmatically, and use a full pointer interaction when simulating label clicks in tests.

  **Affected components:** Checkbox, Menu, Switch

##### Patch Changes

- [`46659eb`](https://github.com/backstage/backstage/commit/46659eb): The `--bui-bg-app` token now follows the page's `color-scheme` until a theme mode is set. While the app loads, the page background then matches a dark theme instead of showing as light. Browsers without `light-dark()` support keep the light value until the theme mode is set, as before.
- [`6c9ed14`](https://github.com/backstage/backstage/commit/6c9ed14): Fixed `Combobox` keyboard selection while filtering. With `search`, or with `items` and no `search`, the arrow keys now move through the matching options only, and Enter selects the highlighted one. Screen readers also announce the number of matching options. As with a `Combobox` without `search`, opening the list with the button or on focus shows every option until the user types. With `search.filter`, Escape and blur now restore the label of the selected option even when the filter excludes it. In that case, the number of options announced to screen readers still counts the hidden selected option.

  **Affected components:** Combobox

- [`b313f2d`](https://github.com/backstage/backstage/commit/b313f2d): Added a `theme` CSS cascade layer between `components` and `utilities`. BUI leaves it empty: put your app's brand overrides in `@layer theme` to win over component styles without raising specificity, while utility props still take precedence. Existing styles are unaffected.

  If your app already declares its own layer named `theme`, its rules now sit below BUI's utility classes instead of above them.

## 0.0.x patch version bumps

### `@backstage/plugin-signals` (0.0.35 → [0.0.36](../../changelogs/@backstage/plugin-signals.md#0036))

#### 0.0.36

##### Patch Changes

- [`b8e865b`](https://github.com/backstage/backstage/commit/b8e865b): The signals client now shares one WebSocket connection across simultaneous subscriptions and does not connect or retry when no identity token is available.

### `@backstage/release-manifests` (0.0.14 → [0.0.15](../../changelogs/@backstage/release-manifests.md#0015))

#### 0.0.15

##### Patch Changes

- [`5834faa`](https://github.com/backstage/backstage/commit/5834faa): Release manifests now include requirements such as supported Node.js versions when that information is available from the release.

## 0.x patch version bumps

### `@backstage/backend-defaults` (0.18.0 → [0.18.1](../../changelogs/@backstage/backend-defaults.md#0181))

#### 0.18.1

##### Patch Changes

- [`c478470`](https://github.com/backstage/backstage/commit/c478470): Added a service-authenticated action registry status endpoint that reports whether a plugin provides actions without exposing action metadata.
- [`f6054ac`](https://github.com/backstage/backstage/commit/f6054ac): Backends created with `createBackend` now provide the experimental connections service by default. Custom backends can install `connectionsServiceFactory` from `@backstage/backend-defaults/alpha`.
- [`e956084`](https://github.com/backstage/backstage/commit/e956084): Added an `instanceId` option to `createBackend`, allowing deployments to use an externally provided backend instance identifier. Each backend instance uses a random UUID by default.
- [`1939ded`](https://github.com/backstage/backstage/commit/1939ded): Added bounded retries for transient failures while initializing Cloud SQL database connections.
- [`a6bc5e4`](https://github.com/backstage/backstage/commit/a6bc5e4): Stopped issuing periodic per-plugin database keepalive queries by default and changed the default minimum PostgreSQL and MySQL connection pool size to zero. Idle connections can now be retired after the configured timeout, while explicitly configured pool minimums are preserved. Set `backend.database.keepalive: true` to continue issuing the periodic queries.
- [`bd1ff39`](https://github.com/backstage/backstage/commit/bd1ff39): Fixed AWS RDS IAM authentication tokens being reused after their signing credentials expire, which could cause database connection failures when using temporary AWS credentials.
- [`6887ecc`](https://github.com/backstage/backstage/commit/6887ecc): Updated dependency `infinispan` to `^0.16.0`.
- [`495ef24`](https://github.com/backstage/backstage/commit/495ef24): Added support for `backend.logger.redactAllowlist` configuration option, which allows specific secret values to pass through log redaction when they are known to be safe to log.

### `@backstage/backend-dynamic-feature-service` (0.8.7 → [0.8.8](../../changelogs/@backstage/backend-dynamic-feature-service.md#088))

#### 0.8.8

##### Patch Changes

- [`786a8ea`](https://github.com/backstage/backstage/commit/786a8ea): Corrected the `schemaLocator` documentation to identify `dist/.config-schema.json` as the default dynamic-plugin config-schema path.
- [`b9c9dd2`](https://github.com/backstage/backstage/commit/b9c9dd2): Internal refactor of dynamic backend plugin alpha-to-main entrypoint loading. No intended behavior change.

### `@backstage/backend-openapi-utils` (0.7.2 → [0.7.3](../../changelogs/@backstage/backend-openapi-utils.md#073))

#### 0.7.3

##### Patch Changes

- [`812225c`](https://github.com/backstage/backstage/commit/812225c): Fixed the OpenAPI validation test server wrapper to support `supertest` 7.3 by returning a standard server address for the validation proxy.

### `@backstage/cli` (0.36.6 → [0.36.7](../../changelogs/@backstage/cli.md#0367))

#### 0.36.7

##### Patch Changes

- [`933e50e`](https://github.com/backstage/backstage/commit/933e50e): The ESLint configuration for packages with the `common-library` role now reports named imports from `lodash`, such as `import { trimEnd } from 'lodash'`. Common libraries are published with an ESM build, and these imports cause that build to fail when imported from ESM projects in Node.js. Use `import lodash from 'lodash'` instead.
- [`36e3f24`](https://github.com/backstage/backstage/commit/36e3f24): Updated the test runner to use the latest Jest 30 releases.

### `@backstage/cli-module-actions` (0.1.3 → [0.1.4](../../changelogs/@backstage/cli-module-actions.md#014))

#### 0.1.4

##### Patch Changes

- [`d73df15`](https://github.com/backstage/backstage/commit/d73df15): The `actions list` command now returns partial results when some plugin sources fail, instead of failing entirely. Failed sources are reported as warnings.

### `@backstage/cli-module-auth` (0.1.4 → [0.1.5](../../changelogs/@backstage/cli-module-auth.md#015))

#### 0.1.5

##### Patch Changes

- [`2a83a41`](https://github.com/backstage/backstage/commit/2a83a41): Switched to version 4 of `zod` for internal validation.

### `@backstage/cli-module-build` (0.1.8 → [0.1.9](../../changelogs/@backstage/cli-module-build.md#019))

#### 0.1.9

##### Patch Changes

- [`cc4ef47`](https://github.com/backstage/backstage/commit/cc4ef47): Restored the default exclusion of `node_modules` from test coverage for this package.
- [`2ece167`](https://github.com/backstage/backstage/commit/2ece167): Updated dependency `webpack` to `~5.111.0`.
- [`f163298`](https://github.com/backstage/backstage/commit/f163298): Improved code splitting for frontend module federation remotes to reduce unnecessary downloads of unrelated lazy components from the same dependency scope. Shared dependencies and workspace code are extracted across lazy boundaries when the resulting shared chunk meets the size threshold. Regular application builds are unchanged.

### `@backstage/cli-module-new` (0.1.7 → [0.1.8](../../changelogs/@backstage/cli-module-new.md#018))

#### 0.1.8

##### Patch Changes

- [`e4597ce`](https://github.com/backstage/backstage/commit/e4597ce): Updated the `plugin-web-library` template to use `@backstage/ui` instead of the deprecated `@material-ui/core`.
- [`b717df2`](https://github.com/backstage/backstage/commit/b717df2): Switched to version 4 of `zod` for internal validation. Validation errors for invalid templates now use the updated, more descriptive `zod` wording.

### `@backstage/cli-module-package-manager-yarn` (0.1.2 → [0.1.3](../../changelogs/@backstage/cli-module-package-manager-yarn.md#013))

#### 0.1.3

##### Patch Changes

- [`84cfb88`](https://github.com/backstage/backstage/commit/84cfb88): Added a conservative `--fix` mode to `backstage-cli pm verify-patches` that can
  update project-owned Backstage package patches when an automated release
  upgrade leaves them pinned to older versions. The repair requires Yarn 3 or
  later.
- [`673a35d`](https://github.com/backstage/backstage/commit/673a35d): Fixed `backstage-cli pm verify-patches` failing to load unless projects installed the Yarn CLI package separately.

### `@backstage/cli-module-test-jest` (0.1.6 → [0.1.7](../../changelogs/@backstage/cli-module-test-jest.md#017))

#### 0.1.7

##### Patch Changes

- [`8747376`](https://github.com/backstage/backstage/commit/8747376): `jest-cli`, `jest-runtime` and the default Node.js test environment are now loaded through the installed `jest` package, so tests also run with strict `node_modules` layouts. An unsupported Jest version, or a missing `jest`, now fails with a clear error instead of a module resolution error.
- [`824e835`](https://github.com/backstage/backstage/commit/824e835): Fixed `setupFilesAfterEnv` from the root `package.json` Jest configuration being shared between workspace packages, which caused each package's `src/setupTests` file to also be added to every other package.
- [`36e3f24`](https://github.com/backstage/backstage/commit/36e3f24): Fixed CommonJS frontend test execution with ESM dependencies on Node.js 24.

### `@backstage/cli-node` (0.3.4 → [0.3.5](../../changelogs/@backstage/cli-node.md#035))

#### 0.3.5

##### Patch Changes

- [`3d6721d`](https://github.com/backstage/backstage/commit/3d6721d): Add intent-based CLI modules for catalog, scaffolder, and search.

  New modules provide domain-oriented subcommands that talk directly to the corresponding plugins' REST APIs:

  - `@backstage/cli-module-catalog`: `catalog list`, `catalog get`, `catalog validate`, `catalog register`, `catalog unregister`
  - `@backstage/cli-module-scaffolder`: `template list`, `template execute`, `template dry-run`
  - `@backstage/cli-module-search`: `search`, `docs search`

  The commands take their main input as a positional argument: an entity or template reference, a file path (or `-` for standard input) for `catalog validate` and `template dry-run`, a URL for `catalog register`, and the search terms for `search` and `docs search`. Repeatable `key=value` flags are used for filters, template values, and secrets, and comma-separated lists for `--fields`. Unknown flags are rejected.

  The commands that list results, `catalog list`, `template list`, `search`, and `docs search`, support `--output human` (the default) or `--output json`, along with `--limit` and `--cursor` for paging. Each command prints a single page. Human output shows how many results were shown and, when more are available, prints the `--cursor` value to continue from. All other commands always print JSON. `catalog validate` checks every entity in a multi-document YAML file and prints a JSON array with one result per entity. `catalog validate` and `template dry-run` exit with a non-zero code when the input is invalid, while connection and authentication problems are reported as errors.

  `@backstage/cli-node` now provides shared parsers for repeatable `key=value` inputs and comma-separated lists.

- [`7c6ab3d`](https://github.com/backstage/backstage/commit/7c6ab3d): Commands run through `runCli` now wait for `stdout` and `stderr` to be flushed before exiting, so large command output is no longer truncated on platforms where writes to `stdout` and `stderr` are asynchronous.
- [`6dc6bc6`](https://github.com/backstage/backstage/commit/6dc6bc6): Fixed CLIs created with `runCli` silently exiting when the root or a command group is invoked without a subcommand. They now display help for that level and complete successfully.

  Help output now lists groups and commands in separate, alphabetically sorted sections. Group previews adapt to the terminal width, using 80 columns when unavailable. Nested groups expand breadth-first when space permits; unexpanded groups retain a trailing slash and truncated previews end in an ellipsis.

### `@backstage/connections` (0.4.0 → [0.4.1](../../changelogs/@backstage/connections.md#041))

#### 0.4.1

##### Patch Changes

- [`e3b418c`](https://github.com/backstage/backstage/commit/e3b418c): Fixed the `Connection` type so that `auth` is a union of method variants instead of an array when no specific auth method is provided.

### `@backstage/core-compat-api` (0.5.15 → [0.5.16](../../changelogs/@backstage/core-compat-api.md#0516))

#### 0.5.16

##### Patch Changes

- [`8747376`](https://github.com/backstage/backstage/commit/8747376): Declared the dependencies of internally bundled code so that the package works with strict `node_modules` layouts.

### `@backstage/core-components` (0.18.14 → [0.18.15](../../changelogs/@backstage/core-components.md#01815))

#### 0.18.15

##### Patch Changes

- [`e415488`](https://github.com/backstage/backstage/commit/e415488): Stop clearing the selected provider from `localStorage` when a sign-in loader is cancelled. Only clear it when the loader actually fails. Memoize `getSignInProviders` so it does not recreate the providers object on every render.
- [`76ac6ed`](https://github.com/backstage/backstage/commit/76ac6ed): Updated dependency `js-yaml` to `^5.0.0`.
- [`e859c29`](https://github.com/backstage/backstage/commit/e859c29): Added `defaultCloseDelayMs` option to `SubmenuOptions` to configure a delay before a submenu closes.

### `@backstage/create-app` (0.9.2 → [0.9.3](../../changelogs/@backstage/create-app.md#093))

#### 0.9.3

##### Patch Changes

- [`2e0776c`](https://github.com/backstage/backstage/commit/2e0776c): Bumped create-app version.
- [`d4ef6c6`](https://github.com/backstage/backstage/commit/d4ef6c6): Bumped create-app version.
- [`fc94744`](https://github.com/backstage/backstage/commit/fc94744): Fixed default landing page configuration in the app template so the Home page path override is inside the existing `page:home` block.
- [`36e3f24`](https://github.com/backstage/backstage/commit/36e3f24): Updated generated applications to use the latest Jest 30 release.
- [`bf3db11`](https://github.com/backstage/backstage/commit/bf3db11): Pinned Yarn core in newly generated apps to avoid installation failures from a broken upstream release.

### `@backstage/eslint-plugin` (0.3.2 → [0.3.3](../../changelogs/@backstage/eslint-plugin.md#033))

#### 0.3.3

##### Patch Changes

- [`914101d`](https://github.com/backstage/backstage/commit/914101d): The `no-mixed-plugin-imports` rule now also applies when the repository is checked out below a directory whose name starts with a dot, such as `~/.worktrees/my-repo`. Before, it silently reported nothing in such locations, because `includedFiles` was matched only against the absolute file path. Patterns are now matched against the path relative to the package directory as well.

### `@backstage/frontend-app-api` (0.16.8 → [0.16.9](../../changelogs/@backstage/frontend-app-api.md#0169))

#### 0.16.9

##### Patch Changes

- [`0caa896`](https://github.com/backstage/backstage/commit/0caa896): Provided an implementation of `AppLifecycleApi` and updated the app preparation and finalization process to utilize this API.
- [`5b67e11`](https://github.com/backstage/backstage/commit/5b67e11): The permission check for extension `if` predicates during app startup now retries network failures and 5xx responses, for up to about 15 seconds, instead of failing the whole app on the first error. This helps when the frontend comes up before the permission backend, and when a request is dropped during sign-in.
- [`d810cc9`](https://github.com/backstage/backstage/commit/d810cc9): Improved link resolution performance by reusing route matches for recently visited locations.

### `@backstage/frontend-plugin-api` (0.18.1 → [0.18.2](../../changelogs/@backstage/frontend-plugin-api.md#0182))

#### 0.18.2

##### Patch Changes

- [`a650c4f`](https://github.com/backstage/backstage/commit/a650c4f): Added `AppLifecycleApi` and `appLifecycleApiRef`, which let you check whether the app has been finalized and subscribe to changes in its lifecycle.
- [`a650c4f`](https://github.com/backstage/backstage/commit/a650c4f): The `useRouteRef` hook now resolves the route again once the app has been finalized, so that elements rendered before finalization, such as `app/root.elements` extensions, can link to pages instead of getting `undefined`.

### `@backstage/frontend-test-utils` (0.6.4 → [0.6.5](../../changelogs/@backstage/frontend-test-utils.md#065))

#### 0.6.5

##### Patch Changes

- [`8747376`](https://github.com/backstage/backstage/commit/8747376): Declared the dependencies of internally bundled code so that the package works with strict `node_modules` layouts.

### `@backstage/plugin-app` (0.5.3 → [0.5.4](../../changelogs/@backstage/plugin-app.md#054))

#### 0.5.4

##### Patch Changes

- [`4e7a710`](https://github.com/backstage/backstage/commit/4e7a710): Updated React Aria dependencies to the October 2026 release.
- [`8747376`](https://github.com/backstage/backstage/commit/8747376): Declared the dependencies of internally bundled code so that the package works with strict `node_modules` layouts, and stopped loading the default API implementations just to install the default icons.
- [`1eeab07`](https://github.com/backstage/backstage/commit/1eeab07): Fixed long words in toast titles and descriptions overflowing the notification and overlapping the close button.

### `@backstage/plugin-app-backend` (0.5.18 → [0.5.19](../../changelogs/@backstage/plugin-app-backend.md#0519))

#### 0.5.19

##### Patch Changes

- [`a18df8f`](https://github.com/backstage/backstage/commit/a18df8f): Added optional `app.publicConfig` allowlists for config key paths and extension IDs exposed to unauthenticated users of protected apps. Authenticated users retain access to all frontend-visible configuration, and existing behavior is unchanged unless filtering is enabled.
- [`c55505e`](https://github.com/backstage/backstage/commit/c55505e): Fix protected app sign-in returning a 404 when an authenticated browser repeats the sign-in handoff for the same user.

### `@backstage/plugin-app-visualizer` (0.2.8 → [0.2.9](../../changelogs/@backstage/plugin-app-visualizer.md#029))

#### 0.2.9

##### Patch Changes

- [`4e7a710`](https://github.com/backstage/backstage/commit/4e7a710): Updated React Aria dependencies to the October 2026 release.
- [`13adaa1`](https://github.com/backstage/backstage/commit/13adaa1): Updated internal React component names to improve debugging and tooling compatibility.

### `@backstage/plugin-auth-backend-module-gcp-iap-provider` (0.4.19 → [0.4.20](../../changelogs/@backstage/plugin-auth-backend-module-gcp-iap-provider.md#0420))

#### 0.4.20

##### Patch Changes

- [`b96ec9e`](https://github.com/backstage/backstage/commit/b96ec9e): Cache Google IAP public verification keys according to the response cache headers to reduce repeated key requests during authentication.

### `@backstage/plugin-auth-backend-module-guest-provider` (0.2.23 → [0.2.24](../../changelogs/@backstage/plugin-auth-backend-module-guest-provider.md#0224))

#### 0.2.24

##### Patch Changes

- [`c2ea521`](https://github.com/backstage/backstage/commit/c2ea521): Change visibility to auth.providers.guest configuration key to be visible by frontend plugins to align with other authentication providers.

### `@backstage/plugin-auth-node` (0.7.6 → [0.7.7](../../changelogs/@backstage/plugin-auth-node.md#077))

#### 0.7.7

##### Patch Changes

- [`9724edd`](https://github.com/backstage/backstage/commit/9724edd): Hardened return URL validation in the OAuth redirect flow. Failed sign-in attempts now return to the configured app URL with the error message, including when the return URL is invalid.

### `@backstage/plugin-bitbucket-cloud-common` (0.3.13 → [0.3.14](../../changelogs/@backstage/plugin-bitbucket-cloud-common.md#0314))

#### 0.3.14

##### Patch Changes

- [`0c9d72c`](https://github.com/backstage/backstage/commit/0c9d72c): Update Bitbucket Cloud Authentication logic to support bearer API token

### `@backstage/plugin-catalog-backend-module-gitea` (0.1.16 → [0.1.17](../../changelogs/@backstage/plugin-catalog-backend-module-gitea.md#0117))

#### 0.1.17

##### Patch Changes

- [`f181c5f`](https://github.com/backstage/backstage/commit/f181c5f): Fixed the Gitea entity provider registering catalog-info.yaml locations against a hardcoded 'main' branch instead of each repository's actual default branch.

### `@backstage/plugin-catalog-backend-module-ldap` (0.12.9 → [0.12.10](../../changelogs/@backstage/plugin-catalog-backend-module-ldap.md#01210))

#### 0.12.10

##### Patch Changes

- [`916e5b2`](https://github.com/backstage/backstage/commit/916e5b2): Improved the performance of LDAP organization ingestion, especially for large directories, without changing the resulting catalog entities.
- [`1a20364`](https://github.com/backstage/backstage/commit/1a20364): Improved large LDAP organization refreshes by yielding to the event loop while resolving relations.

### `@backstage/plugin-catalog-graph` (0.6.8 → [0.6.9](../../changelogs/@backstage/plugin-catalog-graph.md#069))

#### 0.6.9

##### Patch Changes

- [`cc7eccf`](https://github.com/backstage/backstage/commit/cc7eccf): The catalog graph page in the new frontend system no longer renders its own legacy header, and instead uses the page header provided by the app. Apps that use the old frontend system are not affected.

### `@backstage/plugin-catalog-import` (0.13.18 → [0.13.19](../../changelogs/@backstage/plugin-catalog-import.md#01319))

#### 0.13.19

##### Patch Changes

- [`3a0ac14`](https://github.com/backstage/backstage/commit/3a0ac14): The catalog import page in the new frontend system no longer renders its own legacy header, and instead uses the page header provided by the app. Apps that use the old frontend system are not affected.

### `@backstage/plugin-devtools` (0.1.43 → [0.1.44](../../changelogs/@backstage/plugin-devtools.md#0144))

#### 0.1.44

##### Patch Changes

- [`cde2e67`](https://github.com/backstage/backstage/commit/cde2e67): Migrated `InfoContent` component from Material UI to Backstage UI (BUI).

### `@backstage/plugin-events-backend` (0.6.6 → [0.6.7](../../changelogs/@backstage/plugin-events-backend.md#067))

#### 0.6.7

##### Patch Changes

- [`02fd3bf`](https://github.com/backstage/backstage/commit/02fd3bf): Improve database event cleanup under large backlogs and speed up reading events for subscriptions with many retained events.

### `@backstage/plugin-kubernetes-backend` (0.21.11 → [0.21.12](../../changelogs/@backstage/plugin-kubernetes-backend.md#02112))

#### 0.21.12

##### Patch Changes

- [`66f8cf8`](https://github.com/backstage/backstage/commit/66f8cf8): Replace deprecated `createPermissionIntegrationRouter` API call with `permissionsRegistry`
- [`b3292fc`](https://github.com/backstage/backstage/commit/b3292fc): Declare the existing per-cluster `assumeRole` and `externalId` options in the configuration schema so schema-generated configuration forms can expose AWS IAM role authentication settings. External IDs are marked as secrets.

### `@backstage/plugin-kubernetes-react` (0.6.0 → [0.6.1](../../changelogs/@backstage/plugin-kubernetes-react.md#061))

#### 0.6.1

##### Patch Changes

- [`76ac6ed`](https://github.com/backstage/backstage/commit/76ac6ed): Updated dependency `js-yaml` to `^5.0.0`.

### `@backstage/plugin-mui-to-bui` (0.2.11 → [0.2.12](../../changelogs/@backstage/plugin-mui-to-bui.md#0212))

#### 0.2.12

##### Patch Changes

- [`701eaf4`](https://github.com/backstage/backstage/commit/701eaf4): The text now points to the main documentation instead of repeating information here.

### `@backstage/plugin-notifications` (0.6.0 → [0.6.1](../../changelogs/@backstage/plugin-notifications.md#061))

#### 0.6.1

##### Patch Changes

- [`4e7a710`](https://github.com/backstage/backstage/commit/4e7a710): Updated React Aria dependencies to the October 2026 release.
- [`298f908`](https://github.com/backstage/backstage/commit/298f908): Replaced the unmaintained `react-relative-time` dependency with an internal component based on `luxon`.

### `@backstage/plugin-notifications-backend` (0.6.9 → [0.6.10](../../changelogs/@backstage/plugin-notifications-backend.md#0610))

#### 0.6.10

##### Patch Changes

- [`8ba34e8`](https://github.com/backstage/backstage/commit/8ba34e8): Persist notification payload metadata for user notifications and broadcasts, and return it when reading notifications. Re-sending a scoped notification replaces its metadata, or clears it when the new payload omits metadata.

### `@backstage/plugin-notifications-backend-module-email` (0.3.25 → [0.3.26](../../changelogs/@backstage/plugin-notifications-backend-module-email.md#0326))

#### 0.3.26

##### Patch Changes

- [`663abaf`](https://github.com/backstage/backstage/commit/663abaf): Updated `nodemailer` to version 10 to address security vulnerabilities in older releases.

### `@backstage/plugin-scaffolder-backend-module-gitlab` (0.12.0 → [0.12.1](../../changelogs/@backstage/plugin-scaffolder-backend-module-gitlab.md#0121))

#### 0.12.1

##### Patch Changes

- [`06128be`](https://github.com/backstage/backstage/commit/06128be): Throw a `ConflictError` with a clear message when `publish:gitlab` is called and the target repository already exists, instead of letting the GitLab API return a `GitbeakerRequestError` with a raw JSON body such as `{"name":["has already been taken"]}`.
- [`fe51d40`](https://github.com/backstage/backstage/commit/fe51d40): Added a secure `variableKey` input to `gitlab:projectAccessToken:create` and `gitlab:projectDeployToken:create` actions. When provided, the generated token is stored directly as a masked GitLab CI/CD variable instead of being exposed in task outputs and checkpoint state. The raw token outputs are now deprecated when `variableKey` is not used.

### `@backstage/plugin-search-backend-module-explore` (0.3.18 → [0.3.19](../../changelogs/@backstage/plugin-search-backend-module-explore.md#0319))

#### 0.3.19

##### Patch Changes

- [`33ff9ed`](https://github.com/backstage/backstage/commit/33ff9ed): Updated dependency `@backstage-community/plugin-explore-common` to `^0.14.0`.

### `@backstage/plugin-search-backend-module-pg` (0.5.59 → [0.5.60](../../changelogs/@backstage/plugin-search-backend-module-pg.md#0560))

#### 0.5.60

##### Patch Changes

- [`7535616`](https://github.com/backstage/backstage/commit/7535616): Fixed PostgreSQL search highlighting when configured delimiters or selection tags contain punctuation that requires quoting.

### `@backstage/plugin-signals-backend` (0.3.19 → [0.3.20](../../changelogs/@backstage/plugin-signals-backend.md#0320))

#### 0.3.20

##### Patch Changes

- [`e956084`](https://github.com/backstage/backstage/commit/e956084): Use the backend instance ID to identify the event subscription, allowing deployments to control how Signals instances fan out events.
- [`3873113`](https://github.com/backstage/backstage/commit/3873113): The signals WebSocket endpoint now requires a valid user identity token. The token can appear anywhere in the requested WebSocket protocols. Connections without a token, with an invalid token, or with a non-user (service) token are rejected, and unauthenticated guest connections are no longer accepted.

### `@backstage/plugin-techdocs-common` (0.1.1 → [0.1.2](../../changelogs/@backstage/plugin-techdocs-common.md#012))

#### 0.1.2

##### Patch Changes

- [`45b0b89`](https://github.com/backstage/backstage/commit/45b0b89): Added a new `techdocs.actions.read` permission, available from the `/alpha` entry point, which controls access to the TechDocs actions registered with the Actions Registry.

### `@backstage/repo-tools` (0.19.1 → [0.19.2](../../changelogs/@backstage/repo-tools.md#0192))

#### 0.19.2

##### Patch Changes

- [`b8c8132`](https://github.com/backstage/backstage/commit/b8c8132): CLI API reports now support help output with separate groups and commands sections, including commands nested within groups.
- [`76ac6ed`](https://github.com/backstage/backstage/commit/76ac6ed): Updated dependency `js-yaml` to `^5.0.0`.
- [`466bbea`](https://github.com/backstage/backstage/commit/466bbea): Fixed CLI report generation failing when the `FORCE_COLOR` environment variable is set.
- [`dec6175`](https://github.com/backstage/backstage/commit/dec6175): When an API, CLI, SQL, or knip report is out of date in CI, the error output now shows a diff of the changes that need to be committed instead of printing the full expected report.
- [`a281164`](https://github.com/backstage/backstage/commit/a281164): Updated SQL report generation to support newer Knex releases.

## Other minor version bumps

### `@backstage/backend-app-api` (1.7.4 → [1.8.0](../../changelogs/@backstage/backend-app-api.md#180))

#### 1.8.0

##### Minor Changes

- [`e956084`](https://github.com/backstage/backstage/commit/e956084): Added an `instanceId` option to `createSpecializedBackend`. Each backend instance uses a random UUID by default.

##### Patch Changes

- [`f6054ac`](https://github.com/backstage/backstage/commit/f6054ac): Updated undeclared-connection errors to direct plugin authors to `declareConnection` from `@backstage/backend-plugin-api/alpha`.

### `@backstage/plugin-catalog-react` (3.2.3 → [3.3.0](../../changelogs/@backstage/plugin-catalog-react.md#330))

#### 3.3.0

##### Minor Changes

- [`6c74f3f`](https://github.com/backstage/backstage/commit/6c74f3f): Added `getCatalogQuery` to `EntityFilter`, which lets filters express their backend constraints as a filter predicate. This supports logical operators such as `$any` and `$not`, as well as matchers like `$hasPrefix`, that cannot be expressed with `getCatalogFilters`. All builtin filters now implement it, and `getCatalogFilters` is deprecated. If a filter implements both, only `getCatalogQuery` is used.

  The `EntityListProvider` and related components combine the predicates of all active filters into a `query`, and send it to the catalog backend alongside a `filter` built from any remaining legacy filters. When not paginating, entities are now fetched using `streamEntities` instead of `getEntities`, since the latter does not support predicate queries. Tests that mock `getEntities` to provide entities to an `EntityListProvider` need to mock `streamEntities` instead.

  This requires a catalog backend from Backstage release 1.49 or later, which added support for predicate queries.

  Since entities are now fetched using `queryEntities` also when not paginating, an `EntityOrderFilter` that orders by a field that some entities lack now excludes those entities from the result, consistent with paginated mode. Previously they were placed last.

  Some builtin filters became more precise as part of this change:

  - `EntityTagFilter` with multiple tags now requires all of them on the backend, matching its frontend behavior.
  - `EntityUserFilter.starred` matches the full starred entity refs rather than just their names, and the starred count is computed by the backend.

##### Patch Changes

- [`c162b94`](https://github.com/backstage/backstage/commit/c162b94): Fixed the catalog entity list re-writing the URL on every render, which spammed `history.replaceState` and crashed Safari with a `SecurityError`. The URL is now only updated when it actually changes.

### `@backstage/plugin-scaffolder` (1.39.0 → [1.40.0](../../changelogs/@backstage/plugin-scaffolder.md#1400))

#### 1.40.0

##### Minor Changes

- [`d0cc453`](https://github.com/backstage/backstage/commit/d0cc453): Added a `Featured Templates` homepage widget that displays templates tagged with a configurable catalog tag, defaulting to `featured`.

### `@backstage/plugin-techdocs` (1.18.2 → [1.19.0](../../changelogs/@backstage/plugin-techdocs.md#1190))

#### 1.19.0

##### Minor Changes

- [`4a5b52d`](https://github.com/backstage/backstage/commit/4a5b52d): TechDocs now uses the default `NotFoundErrorPage` when documentation is missing, instead of its own TechDocs-specific page.

  This means if you have provided an override to the `NotFoundErrorPage` component it will now be used within TechDocs when documentation is missing as well.

  One thing to note is that the default not found page shows "PAGE NOT FOUND" rather than "Documentation not found".

- [`80a0da9`](https://github.com/backstage/backstage/commit/80a0da9): Added `withoutFeedbackLink` prop to `page:techdocs/reader` and `entity-content:techdocs` extensions, which can be set to `true` to disable the feedback button in the rendered documentation.

##### Patch Changes

- [`24fd0e8`](https://github.com/backstage/backstage/commit/24fd0e8): Fixed TechDocs addons silently not rendering in apps using the new frontend system, on both the standalone documentation reader page and the entity documentation tab.
- [`6c74f3f`](https://github.com/backstage/backstage/commit/6c74f3f): Migrated the `TechDocsPicker` filter from the deprecated `getCatalogFilters` to `getCatalogQuery`.

### `@backstage/plugin-techdocs-backend` (2.3.0 → [2.4.0](../../changelogs/@backstage/plugin-techdocs-backend.md#240))

#### 2.4.0

##### Minor Changes

- [`4d4f987`](https://github.com/backstage/backstage/commit/4d4f987): Add engine abstraction layer for multi-engine TechDocs support. Introduces `--engine` flag, engine config map, generator registry with `backstage.io/techdocs-engine` annotation support, `engine` field in `techdocs_metadata.json`, `serve:raw` command, and live-reload adapter interface. MkDocs remains the default with no behavior change.

  The built-in generator is now registered under `mkdocs`; the previous `techdocs` key is kept as an alias, so existing `generators.register('techdocs', ...)` calls continue to work. The CLI's `--engine` flag takes precedence over the `backstage.io/techdocs-engine` annotation for all commands, and `serve:mkdocs` and the `--mkdocs-parameter-*` flags now print deprecation warnings.

- [`45b0b89`](https://github.com/backstage/backstage/commit/45b0b89): Added a `get-techdocs-metadata` action to the TechDocs backend plugin, registered with the Actions Registry Service (alpha).

##### Patch Changes

- [`685aee1`](https://github.com/backstage/backstage/commit/685aee1): Fixed TechDocs asset caching on reused HTTP connections to avoid listener leaks and cross-request response corruption. Existing cached assets are refreshed automatically.

### `@backstage/plugin-techdocs-node` (2.0.2 → [2.1.0](../../changelogs/@backstage/plugin-techdocs-node.md#210))

#### 2.1.0

##### Minor Changes

- [`4d4f987`](https://github.com/backstage/backstage/commit/4d4f987): Add engine abstraction layer for multi-engine TechDocs support. Introduces `--engine` flag, engine config map, generator registry with `backstage.io/techdocs-engine` annotation support, `engine` field in `techdocs_metadata.json`, `serve:raw` command, and live-reload adapter interface. MkDocs remains the default with no behavior change.

  The built-in generator is now registered under `mkdocs`; the previous `techdocs` key is kept as an alias, so existing `generators.register('techdocs', ...)` calls continue to work. The CLI's `--engine` flag takes precedence over the `backstage.io/techdocs-engine` annotation for all commands, and `serve:mkdocs` and the `--mkdocs-parameter-*` flags now print deprecation warnings.

##### Patch Changes

- [`9fc5387`](https://github.com/backstage/backstage/commit/9fc5387): Improved handling of mapping-style Markdown extension configuration.
- [`0fd5fe5`](https://github.com/backstage/backstage/commit/0fd5fe5): Fixed TechDocs allowing `custom_icons` paths in `mkdocs.yml` that resolve outside the documentation input directory. A `custom_icons` option with such a path is now removed from the configuration with a warning.
- [`8a37336`](https://github.com/backstage/backstage/commit/8a37336): Fixed TechDocs generation rejecting `mkdocs.yml` files that use the emoji indexes and generators or the `pymdownx.superfences` custom fence formats documented by mkdocs-material, pymdown-extensions and mkdocs-mermaid2.
- [`76ac6ed`](https://github.com/backstage/backstage/commit/76ac6ed): Updated dependency `js-yaml` to `^5.0.0`.

### `@backstage/plugin-techdocs-react` (1.3.15 → [1.4.0](../../changelogs/@backstage/plugin-techdocs-react.md#140))

#### 1.4.0

##### Minor Changes

- [`4d4f987`](https://github.com/backstage/backstage/commit/4d4f987): Add engine abstraction layer for multi-engine TechDocs support. Introduces `--engine` flag, engine config map, generator registry with `backstage.io/techdocs-engine` annotation support, `engine` field in `techdocs_metadata.json`, `serve:raw` command, and live-reload adapter interface. MkDocs remains the default with no behavior change.

  The built-in generator is now registered under `mkdocs`; the previous `techdocs` key is kept as an alias, so existing `generators.register('techdocs', ...)` calls continue to work. The CLI's `--engine` flag takes precedence over the `backstage.io/techdocs-engine` annotation for all commands, and `serve:mkdocs` and the `--mkdocs-parameter-*` flags now print deprecation warnings.

##### Patch Changes

- [`f624dc6`](https://github.com/backstage/backstage/commit/f624dc6): Fixed Material UI styles for TechDocs addons in module-federated applications.
- [`450dd64`](https://github.com/backstage/backstage/commit/450dd64): Isolated TechDocs addons in individual Suspense boundaries so that a lazy addon no longer hides the surrounding reader while it loads.
- [`7a4f545`](https://github.com/backstage/backstage/commit/7a4f545): Prevented TechDocs content from briefly appearing before page styles load.

### `@techdocs/cli` (1.12.0 → [1.13.0](../../changelogs/@techdocs/cli.md#1130))

#### 1.13.0

##### Minor Changes

- [`4d4f987`](https://github.com/backstage/backstage/commit/4d4f987): Add engine abstraction layer for multi-engine TechDocs support. Introduces `--engine` flag, engine config map, generator registry with `backstage.io/techdocs-engine` annotation support, `engine` field in `techdocs_metadata.json`, `serve:raw` command, and live-reload adapter interface. MkDocs remains the default with no behavior change.

  The built-in generator is now registered under `mkdocs`; the previous `techdocs` key is kept as an alias, so existing `generators.register('techdocs', ...)` calls continue to work. The CLI's `--engine` flag takes precedence over the `backstage.io/techdocs-engine` annotation for all commands, and `serve:mkdocs` and the `--mkdocs-parameter-*` flags now print deprecation warnings.

## Other patch version bumps

### `@backstage/backend-test-utils` (1.11.7 → [1.11.8](../../changelogs/@backstage/backend-test-utils.md#1118))

#### 1.11.8

##### Patch Changes

- [`f6054ac`](https://github.com/backstage/backstage/commit/f6054ac): Test backends now provide the default experimental connections service for plugins and modules that declare connection dependencies.
- [`7728fcd`](https://github.com/backstage/backstage/commit/7728fcd): Improved test database cleanup reliability by shutting down independent database engines and removing their logical databases concurrently.
- [`e956084`](https://github.com/backstage/backstage/commit/e956084): Updated the root instance metadata service mock to provide an instance ID.

### `@backstage/catalog-client` (1.16.2 → [1.16.3](../../changelogs/@backstage/catalog-client.md#1163))

#### 1.16.3

##### Patch Changes

- [`6c74f3f`](https://github.com/backstage/backstage/commit/6c74f3f): Fixed the conversion of legacy filters that happens when a request has both a `filter` and a `query`, so that it matches the semantics of the legacy filter query parameter. Empty filters no longer turn into a predicate that matches nothing, empty records no longer match everything, and string values take precedence over `CATALOG_FILTER_EXISTS` for the same key.
- [`aeb9393`](https://github.com/backstage/backstage/commit/aeb9393): The `InMemoryCatalogClient` test utility now matches entities the same way as the catalog backend. Both `filter` and `query` are evaluated against the same search rows that the backend builds for its search table, instead of `query` being evaluated against raw entity JSON. This affects `getEntities`, `getEntitiesByRefs`, `queryEntities`, `streamEntities`, and `getEntityFacets`.

  This fixes several cases where the fake returned different results than a real catalog, which may change the outcome of existing tests:

  - Relation shorthand such as `{ 'relations.hasMember': 'user:default/alice' }` now works in `query`, including with `$in`, `$hasPrefix`, `$exists`, `$contains`, and logical operators.
  - Field keys are matched case-insensitively in both `filter` and `query`. For example, `{ 'spec.dependsOn': ... }` previously never matched in `filter`, and `{ 'METADATA.NAME': ... }` never matched in `query`.
  - Entities without a `metadata.namespace` now match `{ 'metadata.namespace': 'default' }` in `query`.
  - Values longer than 200 characters can no longer be matched by value, but still satisfy `$exists: true`, as in the backend.
  - `metadata.name`, `metadata.namespace`, and `metadata.uid` always satisfy `$exists: true`, even when the entity has no value for them.
  - Predicates that the backend does not support are now rejected up front with an `InputError`, even when no entities would be evaluated. For example, an object `$contains` on any field other than `relations`, or a `relations` `$contains` without a `type`.
  - Entities that have keys differing only in casing, such as `spec.foo` and `spec.Foo`, now cause an `InputError` when matched, since the backend refuses to store such entities.

- [`e844921`](https://github.com/backstage/backstage/commit/e844921): `streamEntities` no longer asks the catalog backend to compute the total number of matching items, since that count is never part of the streamed result. This also applies to the catalog service in `@backstage/plugin-catalog-node`, which delegates to the client. The `totalItems` option of `StreamEntitiesRequest` is now deprecated and ignored.

### `@backstage/catalog-model` (1.10.1 → [1.10.2](../../changelogs/@backstage/catalog-model.md#1102))

#### 1.10.2

##### Patch Changes

- [`f487744`](https://github.com/backstage/backstage/commit/f487744): Switched to version 4 of `zod` for internal validation. Error messages for invalid catalog model layer operations now use the updated `zod` wording.

  This package no longer pulls in version 3 of `zod`. If your own packages use `zod` without declaring it as a dependency, they may now get version 4 instead, so make sure to add it to their `package.json` explicitly.

### `@backstage/config` (1.3.9 → [1.3.10](../../changelogs/@backstage/config.md#1310))

#### 1.3.10

##### Patch Changes

- [`e156078`](https://github.com/backstage/backstage/commit/e156078): Reading a number from a configuration value that is an empty or whitespace-only string now fails with a clear conversion error, instead of silently returning `0`. Numeric strings, including ones with surrounding whitespace such as `'  42  '`, continue to be parsed as expected.

### `@backstage/config-loader` (1.11.3 → [1.11.4](../../changelogs/@backstage/config-loader.md#1114))

#### 1.11.4

##### Patch Changes

- [`e5b7381`](https://github.com/backstage/backstage/commit/e5b7381): Config schemas now compile in roughly half the time, by skipping Ajv's code optimizer. The compiled validators only run a few times per process, so the optimized code never paid for itself. This speeds up backend startup, which compiles the full config schema, for example to find the secret config values to redact from logs.

### `@backstage/errors` (1.3.1 → [1.3.2](../../changelogs/@backstage/errors.md#132))

#### 1.3.2

##### Patch Changes

- [`603898f`](https://github.com/backstage/backstage/commit/603898f): Fixed `serializeError` so that stack traces are stripped from all nested error causes when stacks are not requested, not just the first-level cause.

### `@backstage/integration` (2.1.2 → [2.1.3](../../changelogs/@backstage/integration.md#213))

#### 2.1.3

##### Patch Changes

- [`1f603db`](https://github.com/backstage/backstage/commit/1f603db): Azure DevOps repository files now resolve to an edit URL when used by integrations such as TechDocs.
- [`7d17e72`](https://github.com/backstage/backstage/commit/7d17e72): Fixed Azure DevOps file and archive downloads to use the requested branch or tag, including when checking whether a repository tree has changed. Branches and tags with the same name are now distinguished.
- [`4bd3c42`](https://github.com/backstage/backstage/commit/4bd3c42): Bitbucket Cloud OAuth access tokens returned by `getBitbucketCloudOAuthToken` are now cached separately for each set of OAuth client credentials. Previously a single token was cached globally, which could cause the wrong token to be used when more than one Bitbucket Cloud integration was configured or when OAuth credentials were rotated.
- [`933e50e`](https://github.com/backstage/backstage/commit/933e50e): Fixed importing this package from ECMAScript module (ESM) projects, which failed since 2.1.0 with an error saying that `lodash` does not provide an export named `trimEnd`.
- [`0c9d72c`](https://github.com/backstage/backstage/commit/0c9d72c): Update Bitbucket Cloud Authentication logic to support bearer API token

### `@backstage/plugin-catalog` (2.0.9 → [2.0.10](../../changelogs/@backstage/plugin-catalog.md#2010))

#### 2.0.10

##### Patch Changes

- [`6c74f3f`](https://github.com/backstage/backstage/commit/6c74f3f): The catalog export button now respects filters that implement `getCatalogQuery`.
- [`13adaa1`](https://github.com/backstage/backstage/commit/13adaa1): Updated internal React component names to improve debugging and tooling compatibility.
- [`a7a1274`](https://github.com/backstage/backstage/commit/a7a1274): Use EntityDisplayName for hierarchy links in BUI entity header in order to display titles

### `@backstage/plugin-catalog-backend` (4.0.0 → [4.0.1](../../changelogs/@backstage/plugin-catalog-backend.md#401))

#### 4.0.1

##### Patch Changes

- [`589dcef`](https://github.com/backstage/backstage/commit/589dcef): Fixed an issue where successfully processed entities could remain unavailable if stitch scheduling was interrupted.
- [`a08e746`](https://github.com/backstage/backstage/commit/a08e746): Improved large entity provider mutations by yielding to the event loop while preparing database changes.
- [`aa6e7c6`](https://github.com/backstage/backstage/commit/aa6e7c6): Reduce repeated work for entities that fail stitching by gradually increasing retry delays with jitter. Failed entities remain eligible for recovery, and new stitching requests reset their failure count.
- [`d7cc6e5`](https://github.com/backstage/backstage/commit/d7cc6e5): Reject non-positive stitching polling intervals and lease durations at startup to prevent continuous polling and immediate lease expiry. Configuration errors identify the setting that needs correction.
- [`727d53f`](https://github.com/backstage/backstage/commit/727d53f): Improve responsiveness to other requests while reading large sets of entities with field selection, without reducing page sizes.

  Like full-entity responses, projected list responses may now be streamed without a `Content-Length` or automatically generated `ETag` header.

- [`11f608b`](https://github.com/backstage/backstage/commit/11f608b): Entity and location queries with a primitive value at the root of the filter predicate are now rejected with an "Invalid query" error, rather than "Query must be an object".
- [`e783f4b`](https://github.com/backstage/backstage/commit/e783f4b): Fixed catalog processing error messages to report stable processor names in minified builds.
- [`7c376ff`](https://github.com/backstage/backstage/commit/7c376ff): Improved the performance and planner stability of orphan entity cleanup on large PostgreSQL catalogs. Orphan deletion and updates to related entities are now atomic, so a failed cleanup does not leave related entities waiting indefinitely for updated relations. Cleanup also preserves entities when a new reference is committed while it waits to delete them.
- [`a69d971`](https://github.com/backstage/backstage/commit/a69d971): Improved the reliability of deferred stitching. Pending stitching work is no longer lost when entities are deleted and re-added, and updated instances prevent timed-out stitching attempts from overwriting or removing work taken over by another updated instance. During rolling upgrades from older versions, instances may still perform redundant stitching. On MySQL, protection against overlapping writes remains best-effort.
- [`476f042`](https://github.com/backstage/backstage/commit/476f042): Fixed entities disappearing from filtered and sorted catalog queries after a database error during stitching. The final entity and its search index rows are now written together, so a failure part way through is rolled back and retried in full. Previously the entity could be left with a search index that no longer matched it, and because the entity itself looked up to date, every later stitch attempt skipped it. Such an entity stayed readable by direct lookup while missing from list queries that filter or sort, until it was next edited.

  PostgreSQL and MySQL deadlocks trigger prompt, bounded retries of the entire write transaction, skipping the write if newer stitching work has superseded it. If retries are exhausted, queued work remains available for recovery after the stitching timeout.

### `@backstage/plugin-scaffolder-backend` (4.2.0 → [4.2.1](../../changelogs/@backstage/plugin-scaffolder-backend.md#421))

#### 4.2.1

##### Patch Changes

- [`6e08d65`](https://github.com/backstage/backstage/commit/6e08d65): Fixes a regression where scaffolder step values consisting of a singular template statement block (ex. `if: "{% if parameters.foo == 'bar' %}true{% else %}false{% endif %}"`), were rendered as the strings `"true"` and `"false"` instead of their boolean values. This caused steps with `if` conditions to always run.

  Step values with a single statement block that renders nothing, such as `{% if false %}x{% endif %}`, are once again left out of the action input instead of being passed as an empty string.

  Updated `nunjitsu` to `^0.6.2`.

### `@backstage/plugin-search-backend-module-elasticsearch` (2.0.0 → [2.0.1](../../changelogs/@backstage/plugin-search-backend-module-elasticsearch.md#201))

#### 2.0.1

##### Patch Changes

- [`2153e90`](https://github.com/backstage/backstage/commit/2153e90): Fixed search queries intermittently failing with a 500 error when a collator finished indexing. The index that the search alias pointed to before the rotation is no longer deleted immediately, so queries already running against it can complete. It is instead removed during the next indexing run for that document type. Note that this means the previous index is now retained between runs, so search storage usage per document type is roughly doubled.

  Also improved error reporting for failed search queries. An index that disappears while a query is running is now reported as a missing index, and other query failures now include the underlying cause in the logs instead of `undefined`.

## Excluded dependency updates

- `@backstage/app-defaults` (1.7.12 → [1.7.13](../../changelogs/@backstage/app-defaults.md#1713))
- `@backstage/cli-common` (0.3.1 → [0.3.2](../../changelogs/@backstage/cli-common.md#032))
- `@backstage/cli-defaults` (0.1.6 → [0.1.7](../../changelogs/@backstage/cli-defaults.md#017))
- `@backstage/cli-module-config` (0.1.7 → [0.1.8](../../changelogs/@backstage/cli-module-config.md#018))
- `@backstage/cli-module-github` (0.1.4 → [0.1.5](../../changelogs/@backstage/cli-module-github.md#015))
- `@backstage/cli-module-info` (0.1.4 → [0.1.5](../../changelogs/@backstage/cli-module-info.md#015))
- `@backstage/cli-module-lint` (0.1.5 → [0.1.6](../../changelogs/@backstage/cli-module-lint.md#016))
- `@backstage/cli-module-maintenance` (0.1.5 → [0.1.6](../../changelogs/@backstage/cli-module-maintenance.md#016))
- `@backstage/cli-module-migrate` (0.2.1 → [0.2.2](../../changelogs/@backstage/cli-module-migrate.md#022))
- `@backstage/cli-module-translations` (0.1.4 → [0.1.5](../../changelogs/@backstage/cli-module-translations.md#015))
- `@backstage/core-app-api` (1.20.5 → [1.20.6](../../changelogs/@backstage/core-app-api.md#1206))
- `@backstage/core-plugin-api` (1.12.10 → [1.12.11](../../changelogs/@backstage/core-plugin-api.md#11211))
- `@backstage/dev-utils` (1.1.27 → [1.1.28](../../changelogs/@backstage/dev-utils.md#1128))
- `@backstage/frontend-defaults` (0.5.6 → [0.5.7](../../changelogs/@backstage/frontend-defaults.md#057))
- `@backstage/frontend-dev-utils` (0.1.6 → [0.1.7](../../changelogs/@backstage/frontend-dev-utils.md#017))
- `@backstage/frontend-dynamic-feature-loader` (0.1.16 → [0.1.17](../../changelogs/@backstage/frontend-dynamic-feature-loader.md#0117))
- `@backstage/integration-aws-node` (0.2.2 → [0.2.3](../../changelogs/@backstage/integration-aws-node.md#023))
- `@backstage/integration-react` (1.2.22 → [1.2.23](../../changelogs/@backstage/integration-react.md#1223))
- `@backstage/module-federation-common` (0.1.5 → [0.1.6](../../changelogs/@backstage/module-federation-common.md#016))
- `@backstage/plugin-api-docs` (0.14.5 → [0.14.6](../../changelogs/@backstage/plugin-api-docs.md#0146))
- `@backstage/plugin-app-module-user-settings` (0.1.2 → [0.1.3](../../changelogs/@backstage/plugin-app-module-user-settings.md#013))
- `@backstage/plugin-app-node` (0.1.49 → [0.1.50](../../changelogs/@backstage/plugin-app-node.md#0150))
- `@backstage/plugin-app-react` (0.2.7 → [0.2.8](../../changelogs/@backstage/plugin-app-react.md#028))
- `@backstage/plugin-auth` (0.1.12 → [0.1.13](../../changelogs/@backstage/plugin-auth.md#0113))
- `@backstage/plugin-auth-backend` (0.30.1 → [0.30.2](../../changelogs/@backstage/plugin-auth-backend.md#0302))
- `@backstage/plugin-auth-backend-module-auth0-provider` (0.4.5 → [0.4.6](../../changelogs/@backstage/plugin-auth-backend-module-auth0-provider.md#046))
- `@backstage/plugin-auth-backend-module-aws-alb-provider` (0.4.20 → [0.4.21](../../changelogs/@backstage/plugin-auth-backend-module-aws-alb-provider.md#0421))
- `@backstage/plugin-auth-backend-module-azure-easyauth-provider` (0.2.24 → [0.2.25](../../changelogs/@backstage/plugin-auth-backend-module-azure-easyauth-provider.md#0225))
- `@backstage/plugin-auth-backend-module-bitbucket-provider` (0.3.19 → [0.3.20](../../changelogs/@backstage/plugin-auth-backend-module-bitbucket-provider.md#0320))
- `@backstage/plugin-auth-backend-module-bitbucket-server-provider` (0.2.19 → [0.2.20](../../changelogs/@backstage/plugin-auth-backend-module-bitbucket-server-provider.md#0220))
- `@backstage/plugin-auth-backend-module-cloudflare-access-provider` (0.5.0 → [0.5.1](../../changelogs/@backstage/plugin-auth-backend-module-cloudflare-access-provider.md#051))
- `@backstage/plugin-auth-backend-module-github-provider` (0.5.7 → [0.5.8](../../changelogs/@backstage/plugin-auth-backend-module-github-provider.md#058))
- `@backstage/plugin-auth-backend-module-gitlab-provider` (0.4.7 → [0.4.8](../../changelogs/@backstage/plugin-auth-backend-module-gitlab-provider.md#048))
- `@backstage/plugin-auth-backend-module-google-provider` (0.3.19 → [0.3.20](../../changelogs/@backstage/plugin-auth-backend-module-google-provider.md#0320))
- `@backstage/plugin-auth-backend-module-microsoft-provider` (0.3.19 → [0.3.20](../../changelogs/@backstage/plugin-auth-backend-module-microsoft-provider.md#0320))
- `@backstage/plugin-auth-backend-module-oauth2-provider` (0.4.19 → [0.4.20](../../changelogs/@backstage/plugin-auth-backend-module-oauth2-provider.md#0420))
- `@backstage/plugin-auth-backend-module-oauth2-proxy-provider` (0.3.3 → [0.3.4](../../changelogs/@backstage/plugin-auth-backend-module-oauth2-proxy-provider.md#034))
- `@backstage/plugin-auth-backend-module-oidc-provider` (0.4.21 → [0.4.22](../../changelogs/@backstage/plugin-auth-backend-module-oidc-provider.md#0422))
- `@backstage/plugin-auth-backend-module-okta-provider` (0.2.19 → [0.2.20](../../changelogs/@backstage/plugin-auth-backend-module-okta-provider.md#0220))
- `@backstage/plugin-auth-backend-module-onelogin-provider` (0.3.19 → [0.3.20](../../changelogs/@backstage/plugin-auth-backend-module-onelogin-provider.md#0320))
- `@backstage/plugin-auth-backend-module-openshift-provider` (0.1.11 → [0.1.12](../../changelogs/@backstage/plugin-auth-backend-module-openshift-provider.md#0112))
- `@backstage/plugin-auth-backend-module-pinniped-provider` (0.3.18 → [0.3.19](../../changelogs/@backstage/plugin-auth-backend-module-pinniped-provider.md#0319))
- `@backstage/plugin-auth-backend-module-vmware-cloud-provider` (0.5.18 → [0.5.19](../../changelogs/@backstage/plugin-auth-backend-module-vmware-cloud-provider.md#0519))
- `@backstage/plugin-auth-react` (0.1.31 → [0.1.32](../../changelogs/@backstage/plugin-auth-react.md#0132))
- `@backstage/plugin-catalog-backend-module-ai-model` (0.1.4 → [0.1.5](../../changelogs/@backstage/plugin-catalog-backend-module-ai-model.md#015))
- `@backstage/plugin-catalog-backend-module-aws` (0.4.28 → [0.4.29](../../changelogs/@backstage/plugin-catalog-backend-module-aws.md#0429))
- `@backstage/plugin-catalog-backend-module-azure` (0.3.22 → [0.3.23](../../changelogs/@backstage/plugin-catalog-backend-module-azure.md#0323))
- `@backstage/plugin-catalog-backend-module-backstage-openapi` (0.5.18 → [0.5.19](../../changelogs/@backstage/plugin-catalog-backend-module-backstage-openapi.md#0519))
- `@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.5.15 → [0.5.16](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-cloud.md#0516))
- `@backstage/plugin-catalog-backend-module-bitbucket-server` (0.5.15 → [0.5.16](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-server.md#0516))
- `@backstage/plugin-catalog-backend-module-gcp` (0.3.23 → [0.3.24](../../changelogs/@backstage/plugin-catalog-backend-module-gcp.md#0324))
- `@backstage/plugin-catalog-backend-module-gerrit` (0.3.18 → [0.3.19](../../changelogs/@backstage/plugin-catalog-backend-module-gerrit.md#0319))
- `@backstage/plugin-catalog-backend-module-github` (0.14.0 → [0.14.1](../../changelogs/@backstage/plugin-catalog-backend-module-github.md#0141))
- `@backstage/plugin-catalog-backend-module-github-org` (0.3.26 → [0.3.27](../../changelogs/@backstage/plugin-catalog-backend-module-github-org.md#0327))
- `@backstage/plugin-catalog-backend-module-gitlab` (0.8.8 → [0.8.9](../../changelogs/@backstage/plugin-catalog-backend-module-gitlab.md#089))
- `@backstage/plugin-catalog-backend-module-gitlab-org` (0.2.25 → [0.2.26](../../changelogs/@backstage/plugin-catalog-backend-module-gitlab-org.md#0226))
- `@backstage/plugin-catalog-backend-module-logs` (0.1.26 → [0.1.27](../../changelogs/@backstage/plugin-catalog-backend-module-logs.md#0127))
- `@backstage/plugin-catalog-backend-module-msgraph` (0.10.6 → [0.10.7](../../changelogs/@backstage/plugin-catalog-backend-module-msgraph.md#0107))
- `@backstage/plugin-catalog-backend-module-msgraph-incremental` (0.1.4 → [0.1.5](../../changelogs/@backstage/plugin-catalog-backend-module-msgraph-incremental.md#015))
- `@backstage/plugin-catalog-backend-module-openapi` (0.2.26 → [0.2.27](../../changelogs/@backstage/plugin-catalog-backend-module-openapi.md#0227))
- `@backstage/plugin-catalog-backend-module-puppetdb` (0.2.26 → [0.2.27](../../changelogs/@backstage/plugin-catalog-backend-module-puppetdb.md#0227))
- `@backstage/plugin-catalog-backend-module-scaffolder-entity-model` (0.2.24 → [0.2.25](../../changelogs/@backstage/plugin-catalog-backend-module-scaffolder-entity-model.md#0225))
- `@backstage/plugin-catalog-backend-module-unprocessed` (0.6.16 → [0.6.17](../../changelogs/@backstage/plugin-catalog-backend-module-unprocessed.md#0617))
- `@backstage/plugin-catalog-common` (1.2.0 → [1.2.1](../../changelogs/@backstage/plugin-catalog-common.md#121))
- `@backstage/plugin-catalog-node` (2.2.5 → [2.2.6](../../changelogs/@backstage/plugin-catalog-node.md#226))
- `@backstage/plugin-catalog-unprocessed-entities` (0.2.35 → [0.2.36](../../changelogs/@backstage/plugin-catalog-unprocessed-entities.md#0236))
- `@backstage/plugin-catalog-unprocessed-entities-common` (0.0.17 → [0.0.18](../../changelogs/@backstage/plugin-catalog-unprocessed-entities-common.md#0018))
- `@backstage/plugin-config-schema` (0.1.84 → [0.1.85](../../changelogs/@backstage/plugin-config-schema.md#0185))
- `@backstage/plugin-devtools-backend` (0.5.21 → [0.5.22](../../changelogs/@backstage/plugin-devtools-backend.md#0522))
- `@backstage/plugin-devtools-common` (0.1.26 → [0.1.27](../../changelogs/@backstage/plugin-devtools-common.md#0127))
- `@backstage/plugin-devtools-react` (0.2.6 → [0.2.7](../../changelogs/@backstage/plugin-devtools-react.md#027))
- `@backstage/plugin-events-backend-module-aws-sqs` (0.4.26 → [0.4.27](../../changelogs/@backstage/plugin-events-backend-module-aws-sqs.md#0427))
- `@backstage/plugin-events-backend-module-azure` (0.2.35 → [0.2.36](../../changelogs/@backstage/plugin-events-backend-module-azure.md#0236))
- `@backstage/plugin-events-backend-module-bitbucket-cloud` (0.2.35 → [0.2.36](../../changelogs/@backstage/plugin-events-backend-module-bitbucket-cloud.md#0236))
- `@backstage/plugin-events-backend-module-bitbucket-server` (0.1.16 → [0.1.17](../../changelogs/@backstage/plugin-events-backend-module-bitbucket-server.md#0117))
- `@backstage/plugin-events-backend-module-gerrit` (0.2.35 → [0.2.36](../../changelogs/@backstage/plugin-events-backend-module-gerrit.md#0236))
- `@backstage/plugin-events-backend-module-github` (0.4.16 → [0.4.17](../../changelogs/@backstage/plugin-events-backend-module-github.md#0417))
- `@backstage/plugin-events-backend-module-gitlab` (0.3.16 → [0.3.17](../../changelogs/@backstage/plugin-events-backend-module-gitlab.md#0317))
- `@backstage/plugin-events-backend-module-google-pubsub` (0.2.7 → [0.2.8](../../changelogs/@backstage/plugin-events-backend-module-google-pubsub.md#028))
- `@backstage/plugin-events-backend-module-kafka` (0.3.8 → [0.3.9](../../changelogs/@backstage/plugin-events-backend-module-kafka.md#039))
- `@backstage/plugin-events-backend-test-utils` (0.1.59 → [0.1.60](../../changelogs/@backstage/plugin-events-backend-test-utils.md#0160))
- `@backstage/plugin-events-node` (0.4.26 → [0.4.27](../../changelogs/@backstage/plugin-events-node.md#0427))
- `@backstage/plugin-gateway-backend` (1.1.9 → [1.1.10](../../changelogs/@backstage/plugin-gateway-backend.md#1110))
- `@backstage/plugin-home` (0.9.10 → [0.9.11](../../changelogs/@backstage/plugin-home.md#0911))
- `@backstage/plugin-home-react` (0.1.42 → [0.1.43](../../changelogs/@backstage/plugin-home-react.md#0143))
- `@backstage/plugin-kubernetes` (0.12.23 → [0.12.24](../../changelogs/@backstage/plugin-kubernetes.md#01224))
- `@backstage/plugin-kubernetes-cluster` (0.0.41 → [0.0.42](../../changelogs/@backstage/plugin-kubernetes-cluster.md#0042))
- `@backstage/plugin-kubernetes-common` (0.9.13 → [0.9.14](../../changelogs/@backstage/plugin-kubernetes-common.md#0914))
- `@backstage/plugin-kubernetes-node` (0.4.8 → [0.4.9](../../changelogs/@backstage/plugin-kubernetes-node.md#049))
- `@backstage/plugin-mcp-actions-backend` (0.2.2 → [0.2.3](../../changelogs/@backstage/plugin-mcp-actions-backend.md#023))
- `@backstage/plugin-notifications-backend-module-slack` (0.4.6 → [0.4.7](../../changelogs/@backstage/plugin-notifications-backend-module-slack.md#047))
- `@backstage/plugin-notifications-common` (0.2.4 → [0.2.5](../../changelogs/@backstage/plugin-notifications-common.md#025))
- `@backstage/plugin-notifications-node` (0.2.30 → [0.2.31](../../changelogs/@backstage/plugin-notifications-node.md#0231))
- `@backstage/plugin-org-react` (0.1.54 → [0.1.55](../../changelogs/@backstage/plugin-org-react.md#0155))
- `@backstage/plugin-permission-backend` (0.7.16 → [0.7.17](../../changelogs/@backstage/plugin-permission-backend.md#0717))
- `@backstage/plugin-permission-backend-module-allow-all-policy` (0.2.23 → [0.2.24](../../changelogs/@backstage/plugin-permission-backend-module-allow-all-policy.md#0224))
- `@backstage/plugin-permission-common` (0.9.11 → [0.9.12](../../changelogs/@backstage/plugin-permission-common.md#0912))
- `@backstage/plugin-permission-node` (0.11.4 → [0.11.5](../../changelogs/@backstage/plugin-permission-node.md#0115))
- `@backstage/plugin-permission-react` (0.5.5 → [0.5.6](../../changelogs/@backstage/plugin-permission-react.md#056))
- `@backstage/plugin-proxy-backend` (0.6.18 → [0.6.19](../../changelogs/@backstage/plugin-proxy-backend.md#0619))
- `@backstage/plugin-proxy-node` (0.1.19 → [0.1.20](../../changelogs/@backstage/plugin-proxy-node.md#0120))
- `@backstage/plugin-scaffolder-backend-module-azure` (0.2.26 → [0.2.27](../../changelogs/@backstage/plugin-scaffolder-backend-module-azure.md#0227))
- `@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` (0.3.11 → [0.3.12](../../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket-cloud.md#0312))
- `@backstage/plugin-scaffolder-backend-module-bitbucket-server` (0.2.26 → [0.2.27](../../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket-server.md#0227))
- `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.3.26 → [0.3.27](../../changelogs/@backstage/plugin-scaffolder-backend-module-confluence-to-markdown.md#0327))
- `@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.3.27 → [0.3.28](../../changelogs/@backstage/plugin-scaffolder-backend-module-cookiecutter.md#0328))
- `@backstage/plugin-scaffolder-backend-module-gcp` (0.2.25 → [0.2.26](../../changelogs/@backstage/plugin-scaffolder-backend-module-gcp.md#0226))
- `@backstage/plugin-scaffolder-backend-module-gerrit` (0.2.25 → [0.2.26](../../changelogs/@backstage/plugin-scaffolder-backend-module-gerrit.md#0226))
- `@backstage/plugin-scaffolder-backend-module-gitea` (0.2.25 → [0.2.26](../../changelogs/@backstage/plugin-scaffolder-backend-module-gitea.md#0226))
- `@backstage/plugin-scaffolder-backend-module-github` (0.10.0 → [0.10.1](../../changelogs/@backstage/plugin-scaffolder-backend-module-github.md#0101))
- `@backstage/plugin-scaffolder-backend-module-notifications` (0.1.26 → [0.1.27](../../changelogs/@backstage/plugin-scaffolder-backend-module-notifications.md#0127))
- `@backstage/plugin-scaffolder-backend-module-rails` (0.5.25 → [0.5.26](../../changelogs/@backstage/plugin-scaffolder-backend-module-rails.md#0526))
- `@backstage/plugin-scaffolder-backend-module-sentry` (0.4.0 → [0.4.1](../../changelogs/@backstage/plugin-scaffolder-backend-module-sentry.md#041))
- `@backstage/plugin-scaffolder-backend-module-workspace-database` (0.1.0 → [0.1.1](../../changelogs/@backstage/plugin-scaffolder-backend-module-workspace-database.md#011))
- `@backstage/plugin-scaffolder-backend-module-yeoman` (0.4.26 → [0.4.27](../../changelogs/@backstage/plugin-scaffolder-backend-module-yeoman.md#0427))
- `@backstage/plugin-scaffolder-common` (2.3.0 → [2.3.1](../../changelogs/@backstage/plugin-scaffolder-common.md#231))
- `@backstage/plugin-scaffolder-node` (0.13.7 → [0.13.8](../../changelogs/@backstage/plugin-scaffolder-node.md#0138))
- `@backstage/plugin-scaffolder-node-test-utils` (0.3.15 → [0.3.16](../../changelogs/@backstage/plugin-scaffolder-node-test-utils.md#0316))
- `@backstage/plugin-scaffolder-react` (2.1.0 → [2.1.1](../../changelogs/@backstage/plugin-scaffolder-react.md#211))
- `@backstage/plugin-search` (1.7.8 → [1.7.9](../../changelogs/@backstage/plugin-search.md#179))
- `@backstage/plugin-search-backend` (2.1.7 → [2.1.8](../../changelogs/@backstage/plugin-search-backend.md#218))
- `@backstage/plugin-search-backend-module-catalog` (0.3.19 → [0.3.20](../../changelogs/@backstage/plugin-search-backend-module-catalog.md#0320))
- `@backstage/plugin-search-backend-module-stack-overflow-collator` (0.3.24 → [0.3.25](../../changelogs/@backstage/plugin-search-backend-module-stack-overflow-collator.md#0325))
- `@backstage/plugin-search-backend-module-techdocs` (0.4.18 → [0.4.19](../../changelogs/@backstage/plugin-search-backend-module-techdocs.md#0419))
- `@backstage/plugin-search-backend-node` (1.4.8 → [1.4.9](../../changelogs/@backstage/plugin-search-backend-node.md#149))
- `@backstage/plugin-search-common` (1.2.25 → [1.2.26](../../changelogs/@backstage/plugin-search-common.md#1226))
- `@backstage/plugin-search-react` (1.11.8 → [1.11.9](../../changelogs/@backstage/plugin-search-react.md#1119))
- `@backstage/plugin-signals-node` (0.2.5 → [0.2.6](../../changelogs/@backstage/plugin-signals-node.md#026))
- `@backstage/plugin-signals-react` (0.0.26 → [0.0.27](../../changelogs/@backstage/plugin-signals-react.md#0027))
- `@backstage/plugin-techdocs-addons-test-utils` (2.0.9 → [2.0.10](../../changelogs/@backstage/plugin-techdocs-addons-test-utils.md#2010))
- `@backstage/plugin-techdocs-module-addons-contrib` (1.1.40 → [1.1.41](../../changelogs/@backstage/plugin-techdocs-module-addons-contrib.md#1141))
- `@backstage/plugin-user-settings` (0.9.7 → [0.9.8](../../changelogs/@backstage/plugin-user-settings.md#098))
- `@backstage/plugin-user-settings-backend` (0.4.7 → [0.4.8](../../changelogs/@backstage/plugin-user-settings-backend.md#048))
- `@backstage/test-utils` (1.7.22 → [1.7.23](../../changelogs/@backstage/test-utils.md#1723))
