# Backstage Release 1.56.0-next.0 changelog

Changes between 1.55.1 and 1.56.0-next.0 — 3 added, 0 removed, 201 upgraded, 11 unchanged packages.

## Summary

- [Newly added packages](#newly-added-packages): 3 packages
- [0.x minor version bumps](#0x-minor-version-bumps): 1 package
- [0.x patch version bumps](#0x-patch-version-bumps): 11 packages
- [Other minor version bumps](#other-minor-version-bumps): 1 package
- [Other patch version bumps](#other-patch-version-bumps): 5 packages
- [Excluded dependency updates](#excluded-dependency-updates): 183 packages

## Table of contents

- [Newly added packages](#newly-added-packages)
  - [`@backstage/cli-module-catalog` (new, 0.2.0-next.0)](#backstagecli-module-catalog-new-020-next0)
  - [`@backstage/cli-module-scaffolder` (new, 0.2.0-next.0)](#backstagecli-module-scaffolder-new-020-next0)
  - [`@backstage/cli-module-search` (new, 0.2.0-next.0)](#backstagecli-module-search-new-020-next0)
- [0.x minor version bumps](#0x-minor-version-bumps)
  - [`@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.8.0 → 0.9.0-next.0)](#backstageplugin-catalog-backend-module-incremental-ingestion-080--090-next0)
- [0.x patch version bumps](#0x-patch-version-bumps)
  - [`@backstage/cli` (0.36.6 → 0.36.7-next.0)](#backstagecli-0366--0367-next0)
  - [`@backstage/cli-module-package-manager-yarn` (0.1.2 → 0.1.3-next.0)](#backstagecli-module-package-manager-yarn-012--013-next0)
  - [`@backstage/cli-module-test-jest` (0.1.6 → 0.1.7-next.0)](#backstagecli-module-test-jest-016--017-next0)
  - [`@backstage/cli-node` (0.3.4 → 0.3.5-next.0)](#backstagecli-node-034--035-next0)
  - [`@backstage/connections` (0.4.0 → 0.4.1-next.0)](#backstageconnections-040--041-next0)
  - [`@backstage/create-app` (0.9.2 → 0.9.3-next.0)](#backstagecreate-app-092--093-next0)
  - [`@backstage/plugin-auth-backend-module-gcp-iap-provider` (0.4.19 → 0.4.20-next.0)](#backstageplugin-auth-backend-module-gcp-iap-provider-0419--0420-next0)
  - [`@backstage/plugin-auth-backend-module-guest-provider` (0.2.23 → 0.2.24-next.0)](#backstageplugin-auth-backend-module-guest-provider-0223--0224-next0)
  - [`@backstage/plugin-catalog-backend-module-ldap` (0.12.9 → 0.12.10-next.0)](#backstageplugin-catalog-backend-module-ldap-0129--01210-next0)
  - [`@backstage/plugin-search-backend-module-pg` (0.5.59 → 0.5.60-next.0)](#backstageplugin-search-backend-module-pg-0559--0560-next0)
  - [`@backstage/repo-tools` (0.19.1 → 0.19.2-next.0)](#backstagerepo-tools-0191--0192-next0)
- [Other minor version bumps](#other-minor-version-bumps)
  - [`@backstage/plugin-techdocs` (1.18.2 → 1.19.0-next.0)](#backstageplugin-techdocs-1182--1190-next0)
- [Other patch version bumps](#other-patch-version-bumps)
  - [`@backstage/backend-test-utils` (1.11.7 → 1.11.8-next.0)](#backstagebackend-test-utils-1117--1118-next0)
  - [`@backstage/config` (1.3.9 → 1.3.10-next.0)](#backstageconfig-139--1310-next0)
  - [`@backstage/errors` (1.3.1 → 1.3.2-next.0)](#backstageerrors-131--132-next0)
  - [`@backstage/integration` (2.1.2 → 2.1.3-next.0)](#backstageintegration-212--213-next0)
  - [`@backstage/plugin-catalog-backend` (4.0.0 → 4.0.1-next.0)](#backstageplugin-catalog-backend-400--401-next0)
- [Excluded dependency updates](#excluded-dependency-updates)

## Newly added packages

### `@backstage/cli-module-catalog` (new, [0.2.0-next.0](../../changelogs/@backstage/cli-module-catalog.md#020-next0))

#### 0.2.0-next.0

##### Minor Changes

- [`3d6721d`](https://github.com/backstage/backstage/commit/3d6721d): Add intent-based CLI modules for catalog, scaffolder, and search.

  New modules provide domain-oriented subcommands that talk directly to the corresponding plugins' REST APIs:

  - `@backstage/cli-module-catalog`: `catalog list`, `catalog get`, `catalog validate`, `catalog register`, `catalog unregister`
  - `@backstage/cli-module-scaffolder`: `template list`, `template execute`, `template dry-run`
  - `@backstage/cli-module-search`: `search`, `docs search`

  The commands support human-readable and JSON output, positional entity and template references, repeatable `key=value` filters and inputs, comma-separated fields and search types, and file-based catalog entity and template input.

  `@backstage/cli-node` now provides shared parsers for repeatable `key=value` inputs and comma-separated lists.

### `@backstage/cli-module-scaffolder` (new, [0.2.0-next.0](../../changelogs/@backstage/cli-module-scaffolder.md#020-next0))

#### 0.2.0-next.0

##### Minor Changes

- [`3d6721d`](https://github.com/backstage/backstage/commit/3d6721d): Add intent-based CLI modules for catalog, scaffolder, and search.

  New modules provide domain-oriented subcommands that talk directly to the corresponding plugins' REST APIs:

  - `@backstage/cli-module-catalog`: `catalog list`, `catalog get`, `catalog validate`, `catalog register`, `catalog unregister`
  - `@backstage/cli-module-scaffolder`: `template list`, `template execute`, `template dry-run`
  - `@backstage/cli-module-search`: `search`, `docs search`

  The commands support human-readable and JSON output, positional entity and template references, repeatable `key=value` filters and inputs, comma-separated fields and search types, and file-based catalog entity and template input.

  `@backstage/cli-node` now provides shared parsers for repeatable `key=value` inputs and comma-separated lists.

### `@backstage/cli-module-search` (new, [0.2.0-next.0](../../changelogs/@backstage/cli-module-search.md#020-next0))

#### 0.2.0-next.0

##### Minor Changes

- [`3d6721d`](https://github.com/backstage/backstage/commit/3d6721d): Add intent-based CLI modules for catalog, scaffolder, and search.

  New modules provide domain-oriented subcommands that talk directly to the corresponding plugins' REST APIs:

  - `@backstage/cli-module-catalog`: `catalog list`, `catalog get`, `catalog validate`, `catalog register`, `catalog unregister`
  - `@backstage/cli-module-scaffolder`: `template list`, `template execute`, `template dry-run`
  - `@backstage/cli-module-search`: `search`, `docs search`

  The commands support human-readable and JSON output, positional entity and template references, repeatable `key=value` filters and inputs, comma-separated fields and search types, and file-based catalog entity and template input.

  `@backstage/cli-node` now provides shared parsers for repeatable `key=value` inputs and comma-separated lists.

## 0.x minor version bumps

### `@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.8.0 → [0.9.0-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-incremental-ingestion.md#090-next0))

#### 0.9.0-next.0

##### Minor Changes

- [`e003123`](https://github.com/backstage/backstage/commit/e003123): Added a `source_key` column and a `UNIQUE(source_key, entity_ref)` constraint to the `ingestion_mark_entities` table, enabling a single native upsert instead of a select-then-update-or-insert sequence per ingestion mark.
  This significantly reduces the number of database round trips during ingestion.

  As part of this change, the table's `ref` column is renamed to `entity_ref` to standardize its naming with the rest of the table's columns.
  This rename means the migration cannot be applied as part of a rolling, zero-downtime upgrade, which is fine since incremental ingestion providers are designed to run sequentially on a single Backstage backend instance.

## 0.x patch version bumps

### `@backstage/cli` (0.36.6 → [0.36.7-next.0](../../changelogs/@backstage/cli.md#0367-next0))

#### 0.36.7-next.0

##### Patch Changes

- [`36e3f24`](https://github.com/backstage/backstage/commit/36e3f24): Updated the test runner to use the latest Jest 30 releases.

### `@backstage/cli-module-package-manager-yarn` (0.1.2 → [0.1.3-next.0](../../changelogs/@backstage/cli-module-package-manager-yarn.md#013-next0))

#### 0.1.3-next.0

##### Patch Changes

- [`673a35d`](https://github.com/backstage/backstage/commit/673a35d): Fixed `backstage-cli pm verify-patches` failing to load unless projects installed the Yarn CLI package separately.

### `@backstage/cli-module-test-jest` (0.1.6 → [0.1.7-next.0](../../changelogs/@backstage/cli-module-test-jest.md#017-next0))

#### 0.1.7-next.0

##### Patch Changes

- [`36e3f24`](https://github.com/backstage/backstage/commit/36e3f24): Fixed CommonJS frontend test execution with ESM dependencies on Node.js 24.

### `@backstage/cli-node` (0.3.4 → [0.3.5-next.0](../../changelogs/@backstage/cli-node.md#035-next0))

#### 0.3.5-next.0

##### Patch Changes

- [`3d6721d`](https://github.com/backstage/backstage/commit/3d6721d): Add intent-based CLI modules for catalog, scaffolder, and search.

  New modules provide domain-oriented subcommands that talk directly to the corresponding plugins' REST APIs:

  - `@backstage/cli-module-catalog`: `catalog list`, `catalog get`, `catalog validate`, `catalog register`, `catalog unregister`
  - `@backstage/cli-module-scaffolder`: `template list`, `template execute`, `template dry-run`
  - `@backstage/cli-module-search`: `search`, `docs search`

  The commands support human-readable and JSON output, positional entity and template references, repeatable `key=value` filters and inputs, comma-separated fields and search types, and file-based catalog entity and template input.

  `@backstage/cli-node` now provides shared parsers for repeatable `key=value` inputs and comma-separated lists.

### `@backstage/connections` (0.4.0 → [0.4.1-next.0](../../changelogs/@backstage/connections.md#041-next0))

#### 0.4.1-next.0

##### Patch Changes

- [`e3b418c`](https://github.com/backstage/backstage/commit/e3b418c): Fixed the `Connection` type so that `auth` is a union of method variants instead of an array when no specific auth method is provided.

### `@backstage/create-app` (0.9.2 → [0.9.3-next.0](../../changelogs/@backstage/create-app.md#093-next0))

#### 0.9.3-next.0

##### Patch Changes

- [`36e3f24`](https://github.com/backstage/backstage/commit/36e3f24): Updated generated applications to use the latest Jest 30 release.

### `@backstage/plugin-auth-backend-module-gcp-iap-provider` (0.4.19 → [0.4.20-next.0](../../changelogs/@backstage/plugin-auth-backend-module-gcp-iap-provider.md#0420-next0))

#### 0.4.20-next.0

##### Patch Changes

- [`b96ec9e`](https://github.com/backstage/backstage/commit/b96ec9e): Cache Google IAP public verification keys according to the response cache headers to reduce repeated key requests during authentication.

### `@backstage/plugin-auth-backend-module-guest-provider` (0.2.23 → [0.2.24-next.0](../../changelogs/@backstage/plugin-auth-backend-module-guest-provider.md#0224-next0))

#### 0.2.24-next.0

##### Patch Changes

- [`c2ea521`](https://github.com/backstage/backstage/commit/c2ea521): Change visibility to auth.providers.guest configuration key to be visible by frontend plugins to align with other authentication providers.

### `@backstage/plugin-catalog-backend-module-ldap` (0.12.9 → [0.12.10-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-ldap.md#01210-next0))

#### 0.12.10-next.0

##### Patch Changes

- [`916e5b2`](https://github.com/backstage/backstage/commit/916e5b2): Improved the performance of LDAP organization ingestion, especially for large directories, without changing the resulting catalog entities.
- [`1a20364`](https://github.com/backstage/backstage/commit/1a20364): Improved large LDAP organization refreshes by yielding to the event loop while resolving relations.

### `@backstage/plugin-search-backend-module-pg` (0.5.59 → [0.5.60-next.0](../../changelogs/@backstage/plugin-search-backend-module-pg.md#0560-next0))

#### 0.5.60-next.0

##### Patch Changes

- [`7535616`](https://github.com/backstage/backstage/commit/7535616): Fixed PostgreSQL search highlighting when configured delimiters or selection tags contain punctuation that requires quoting.

### `@backstage/repo-tools` (0.19.1 → [0.19.2-next.0](../../changelogs/@backstage/repo-tools.md#0192-next0))

#### 0.19.2-next.0

##### Patch Changes

- [`a281164`](https://github.com/backstage/backstage/commit/a281164): Updated SQL report generation to support newer Knex releases.

## Other minor version bumps

### `@backstage/plugin-techdocs` (1.18.2 → [1.19.0-next.0](../../changelogs/@backstage/plugin-techdocs.md#1190-next0))

#### 1.19.0-next.0

##### Minor Changes

- [`80a0da9`](https://github.com/backstage/backstage/commit/80a0da9): Added `withoutFeedbackLink` prop to `page:techdocs/reader` and `entity-content:techdocs` extensions, which can be set to `true` to disable the feedback button in the rendered documentation.

##### Patch Changes

- [`24fd0e8`](https://github.com/backstage/backstage/commit/24fd0e8): Fixed TechDocs addons silently not rendering in apps using the new frontend system, on both the standalone documentation reader page and the entity documentation tab.

## Other patch version bumps

### `@backstage/backend-test-utils` (1.11.7 → [1.11.8-next.0](../../changelogs/@backstage/backend-test-utils.md#1118-next0))

#### 1.11.8-next.0

##### Patch Changes

- [`7728fcd`](https://github.com/backstage/backstage/commit/7728fcd): Improved test database cleanup reliability by shutting down independent database engines and removing their logical databases concurrently.

### `@backstage/config` (1.3.9 → [1.3.10-next.0](../../changelogs/@backstage/config.md#1310-next0))

#### 1.3.10-next.0

##### Patch Changes

- [`e156078`](https://github.com/backstage/backstage/commit/e156078): Reading a number from a configuration value that is an empty or whitespace-only string now fails with a clear conversion error, instead of silently returning `0`. Numeric strings, including ones with surrounding whitespace such as `'  42  '`, continue to be parsed as expected.

### `@backstage/errors` (1.3.1 → [1.3.2-next.0](../../changelogs/@backstage/errors.md#132-next0))

#### 1.3.2-next.0

##### Patch Changes

- [`603898f`](https://github.com/backstage/backstage/commit/603898f): Fixed `serializeError` so that stack traces are stripped from all nested error causes when stacks are not requested, not just the first-level cause.

### `@backstage/integration` (2.1.2 → [2.1.3-next.0](../../changelogs/@backstage/integration.md#213-next0))

#### 2.1.3-next.0

##### Patch Changes

- [`1f603db`](https://github.com/backstage/backstage/commit/1f603db): Azure DevOps repository files now resolve to an edit URL when used by integrations such as TechDocs.
- [`4bd3c42`](https://github.com/backstage/backstage/commit/4bd3c42): Bitbucket Cloud OAuth access tokens returned by `getBitbucketCloudOAuthToken` are now cached separately for each set of OAuth client credentials. Previously a single token was cached globally, which could cause the wrong token to be used when more than one Bitbucket Cloud integration was configured or when OAuth credentials were rotated.

### `@backstage/plugin-catalog-backend` (4.0.0 → [4.0.1-next.0](../../changelogs/@backstage/plugin-catalog-backend.md#401-next0))

#### 4.0.1-next.0

##### Patch Changes

- [`a08e746`](https://github.com/backstage/backstage/commit/a08e746): Improved large entity provider mutations by yielding to the event loop while preparing database changes.
- [`727d53f`](https://github.com/backstage/backstage/commit/727d53f): Improve responsiveness to other requests while reading large sets of entities with field selection, without reducing page sizes.

  Like full-entity responses, projected list responses may now be streamed without a `Content-Length` or automatically generated `ETag` header.

- [`e783f4b`](https://github.com/backstage/backstage/commit/e783f4b): Fixed catalog processing error messages to report stable processor names in minified builds.

## Excluded dependency updates

- `@backstage/app-defaults` (1.7.12 → [1.7.13-next.0](../../changelogs/@backstage/app-defaults.md#1713-next0))
- `@backstage/backend-app-api` (1.7.4 → [1.7.5-next.0](../../changelogs/@backstage/backend-app-api.md#175-next0))
- `@backstage/backend-defaults` (0.18.0 → [0.18.1-next.0](../../changelogs/@backstage/backend-defaults.md#0181-next0))
- `@backstage/backend-dynamic-feature-service` (0.8.7 → [0.8.8-next.0](../../changelogs/@backstage/backend-dynamic-feature-service.md#088-next0))
- `@backstage/backend-openapi-utils` (0.7.2 → [0.7.3-next.0](../../changelogs/@backstage/backend-openapi-utils.md#073-next0))
- `@backstage/backend-plugin-api` (1.10.1 → [1.10.2-next.0](../../changelogs/@backstage/backend-plugin-api.md#1102-next0))
- `@backstage/catalog-client` (1.16.2 → [1.16.3-next.0](../../changelogs/@backstage/catalog-client.md#1163-next0))
- `@backstage/catalog-model` (1.10.1 → [1.10.2-next.0](../../changelogs/@backstage/catalog-model.md#1102-next0))
- `@backstage/cli-common` (0.3.1 → [0.3.2-next.0](../../changelogs/@backstage/cli-common.md#032-next0))
- `@backstage/cli-defaults` (0.1.6 → [0.1.7-next.0](../../changelogs/@backstage/cli-defaults.md#017-next0))
- `@backstage/cli-module-actions` (0.1.3 → [0.1.4-next.0](../../changelogs/@backstage/cli-module-actions.md#014-next0))
- `@backstage/cli-module-auth` (0.1.4 → [0.1.5-next.0](../../changelogs/@backstage/cli-module-auth.md#015-next0))
- `@backstage/cli-module-build` (0.1.8 → [0.1.9-next.0](../../changelogs/@backstage/cli-module-build.md#019-next0))
- `@backstage/cli-module-config` (0.1.7 → [0.1.8-next.0](../../changelogs/@backstage/cli-module-config.md#018-next0))
- `@backstage/cli-module-github` (0.1.4 → [0.1.5-next.0](../../changelogs/@backstage/cli-module-github.md#015-next0))
- `@backstage/cli-module-info` (0.1.4 → [0.1.5-next.0](../../changelogs/@backstage/cli-module-info.md#015-next0))
- `@backstage/cli-module-lint` (0.1.5 → [0.1.6-next.0](../../changelogs/@backstage/cli-module-lint.md#016-next0))
- `@backstage/cli-module-maintenance` (0.1.5 → [0.1.6-next.0](../../changelogs/@backstage/cli-module-maintenance.md#016-next0))
- `@backstage/cli-module-migrate` (0.2.1 → [0.2.2-next.0](../../changelogs/@backstage/cli-module-migrate.md#022-next0))
- `@backstage/cli-module-new` (0.1.7 → [0.1.8-next.0](../../changelogs/@backstage/cli-module-new.md#018-next0))
- `@backstage/cli-module-translations` (0.1.4 → [0.1.5-next.0](../../changelogs/@backstage/cli-module-translations.md#015-next0))
- `@backstage/config-loader` (1.11.3 → [1.11.4-next.0](../../changelogs/@backstage/config-loader.md#1114-next0))
- `@backstage/core-app-api` (1.20.5 → [1.20.6-next.0](../../changelogs/@backstage/core-app-api.md#1206-next0))
- `@backstage/core-compat-api` (0.5.15 → [0.5.16-next.0](../../changelogs/@backstage/core-compat-api.md#0516-next0))
- `@backstage/core-components` (0.18.14 → [0.18.15-next.0](../../changelogs/@backstage/core-components.md#01815-next0))
- `@backstage/core-plugin-api` (1.12.10 → [1.12.11-next.0](../../changelogs/@backstage/core-plugin-api.md#11211-next0))
- `@backstage/dev-utils` (1.1.27 → [1.1.28-next.0](../../changelogs/@backstage/dev-utils.md#1128-next0))
- `@backstage/filter-predicates` (0.1.5 → [0.1.6-next.0](../../changelogs/@backstage/filter-predicates.md#016-next0))
- `@backstage/frontend-app-api` (0.16.8 → [0.16.9-next.0](../../changelogs/@backstage/frontend-app-api.md#0169-next0))
- `@backstage/frontend-defaults` (0.5.6 → [0.5.7-next.0](../../changelogs/@backstage/frontend-defaults.md#057-next0))
- `@backstage/frontend-dev-utils` (0.1.6 → [0.1.7-next.0](../../changelogs/@backstage/frontend-dev-utils.md#017-next0))
- `@backstage/frontend-dynamic-feature-loader` (0.1.16 → [0.1.17-next.0](../../changelogs/@backstage/frontend-dynamic-feature-loader.md#0117-next0))
- `@backstage/frontend-plugin-api` (0.18.1 → [0.18.2-next.0](../../changelogs/@backstage/frontend-plugin-api.md#0182-next0))
- `@backstage/frontend-test-utils` (0.6.4 → [0.6.5-next.0](../../changelogs/@backstage/frontend-test-utils.md#065-next0))
- `@backstage/integration-aws-node` (0.2.2 → [0.2.3-next.0](../../changelogs/@backstage/integration-aws-node.md#023-next0))
- `@backstage/integration-react` (1.2.22 → [1.2.23-next.0](../../changelogs/@backstage/integration-react.md#1223-next0))
- `@backstage/module-federation-common` (0.1.5 → [0.1.6-next.0](../../changelogs/@backstage/module-federation-common.md#016-next0))
- `@backstage/plugin-api-docs` (0.14.5 → [0.14.6-next.0](../../changelogs/@backstage/plugin-api-docs.md#0146-next0))
- `@backstage/plugin-app` (0.5.3 → [0.5.4-next.0](../../changelogs/@backstage/plugin-app.md#054-next0))
- `@backstage/plugin-app-backend` (0.5.18 → [0.5.19-next.0](../../changelogs/@backstage/plugin-app-backend.md#0519-next0))
- `@backstage/plugin-app-module-user-settings` (0.1.2 → [0.1.3-next.0](../../changelogs/@backstage/plugin-app-module-user-settings.md#013-next0))
- `@backstage/plugin-app-node` (0.1.49 → [0.1.50-next.0](../../changelogs/@backstage/plugin-app-node.md#0150-next0))
- `@backstage/plugin-app-react` (0.2.7 → [0.2.8-next.0](../../changelogs/@backstage/plugin-app-react.md#028-next0))
- `@backstage/plugin-app-visualizer` (0.2.8 → [0.2.9-next.0](../../changelogs/@backstage/plugin-app-visualizer.md#029-next0))
- `@backstage/plugin-auth` (0.1.12 → [0.1.13-next.0](../../changelogs/@backstage/plugin-auth.md#0113-next0))
- `@backstage/plugin-auth-backend` (0.30.1 → [0.30.2-next.0](../../changelogs/@backstage/plugin-auth-backend.md#0302-next0))
- `@backstage/plugin-auth-backend-module-atlassian-provider` (0.4.19 → [0.4.20-next.0](../../changelogs/@backstage/plugin-auth-backend-module-atlassian-provider.md#0420-next0))
- `@backstage/plugin-auth-backend-module-auth0-provider` (0.4.5 → [0.4.6-next.0](../../changelogs/@backstage/plugin-auth-backend-module-auth0-provider.md#046-next0))
- `@backstage/plugin-auth-backend-module-aws-alb-provider` (0.4.20 → [0.4.21-next.0](../../changelogs/@backstage/plugin-auth-backend-module-aws-alb-provider.md#0421-next0))
- `@backstage/plugin-auth-backend-module-azure-easyauth-provider` (0.2.24 → [0.2.25-next.0](../../changelogs/@backstage/plugin-auth-backend-module-azure-easyauth-provider.md#0225-next0))
- `@backstage/plugin-auth-backend-module-bitbucket-provider` (0.3.19 → [0.3.20-next.0](../../changelogs/@backstage/plugin-auth-backend-module-bitbucket-provider.md#0320-next0))
- `@backstage/plugin-auth-backend-module-bitbucket-server-provider` (0.2.19 → [0.2.20-next.0](../../changelogs/@backstage/plugin-auth-backend-module-bitbucket-server-provider.md#0220-next0))
- `@backstage/plugin-auth-backend-module-cloudflare-access-provider` (0.5.0 → [0.5.1-next.0](../../changelogs/@backstage/plugin-auth-backend-module-cloudflare-access-provider.md#051-next0))
- `@backstage/plugin-auth-backend-module-github-provider` (0.5.7 → [0.5.8-next.0](../../changelogs/@backstage/plugin-auth-backend-module-github-provider.md#058-next0))
- `@backstage/plugin-auth-backend-module-gitlab-provider` (0.4.7 → [0.4.8-next.0](../../changelogs/@backstage/plugin-auth-backend-module-gitlab-provider.md#048-next0))
- `@backstage/plugin-auth-backend-module-google-provider` (0.3.19 → [0.3.20-next.0](../../changelogs/@backstage/plugin-auth-backend-module-google-provider.md#0320-next0))
- `@backstage/plugin-auth-backend-module-microsoft-provider` (0.3.19 → [0.3.20-next.0](../../changelogs/@backstage/plugin-auth-backend-module-microsoft-provider.md#0320-next0))
- `@backstage/plugin-auth-backend-module-oauth2-provider` (0.4.19 → [0.4.20-next.0](../../changelogs/@backstage/plugin-auth-backend-module-oauth2-provider.md#0420-next0))
- `@backstage/plugin-auth-backend-module-oauth2-proxy-provider` (0.3.3 → [0.3.4-next.0](../../changelogs/@backstage/plugin-auth-backend-module-oauth2-proxy-provider.md#034-next0))
- `@backstage/plugin-auth-backend-module-oidc-provider` (0.4.21 → [0.4.22-next.0](../../changelogs/@backstage/plugin-auth-backend-module-oidc-provider.md#0422-next0))
- `@backstage/plugin-auth-backend-module-okta-provider` (0.2.19 → [0.2.20-next.0](../../changelogs/@backstage/plugin-auth-backend-module-okta-provider.md#0220-next0))
- `@backstage/plugin-auth-backend-module-onelogin-provider` (0.3.19 → [0.3.20-next.0](../../changelogs/@backstage/plugin-auth-backend-module-onelogin-provider.md#0320-next0))
- `@backstage/plugin-auth-backend-module-openshift-provider` (0.1.11 → [0.1.12-next.0](../../changelogs/@backstage/plugin-auth-backend-module-openshift-provider.md#0112-next0))
- `@backstage/plugin-auth-backend-module-pinniped-provider` (0.3.18 → [0.3.19-next.0](../../changelogs/@backstage/plugin-auth-backend-module-pinniped-provider.md#0319-next0))
- `@backstage/plugin-auth-backend-module-vmware-cloud-provider` (0.5.18 → [0.5.19-next.0](../../changelogs/@backstage/plugin-auth-backend-module-vmware-cloud-provider.md#0519-next0))
- `@backstage/plugin-auth-node` (0.7.6 → [0.7.7-next.0](../../changelogs/@backstage/plugin-auth-node.md#077-next0))
- `@backstage/plugin-auth-react` (0.1.31 → [0.1.32-next.0](../../changelogs/@backstage/plugin-auth-react.md#0132-next0))
- `@backstage/plugin-bitbucket-cloud-common` (0.3.13 → [0.3.14-next.0](../../changelogs/@backstage/plugin-bitbucket-cloud-common.md#0314-next0))
- `@backstage/plugin-catalog` (2.0.9 → [2.0.10-next.0](../../changelogs/@backstage/plugin-catalog.md#2010-next0))
- `@backstage/plugin-catalog-backend-module-ai-model` (0.1.4 → [0.1.5-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-ai-model.md#015-next0))
- `@backstage/plugin-catalog-backend-module-aws` (0.4.28 → [0.4.29-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-aws.md#0429-next0))
- `@backstage/plugin-catalog-backend-module-azure` (0.3.22 → [0.3.23-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-azure.md#0323-next0))
- `@backstage/plugin-catalog-backend-module-backstage-openapi` (0.5.18 → [0.5.19-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-backstage-openapi.md#0519-next0))
- `@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.5.15 → [0.5.16-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-cloud.md#0516-next0))
- `@backstage/plugin-catalog-backend-module-bitbucket-server` (0.5.15 → [0.5.16-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-server.md#0516-next0))
- `@backstage/plugin-catalog-backend-module-gcp` (0.3.23 → [0.3.24-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-gcp.md#0324-next0))
- `@backstage/plugin-catalog-backend-module-gerrit` (0.3.18 → [0.3.19-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-gerrit.md#0319-next0))
- `@backstage/plugin-catalog-backend-module-gitea` (0.1.16 → [0.1.17-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-gitea.md#0117-next0))
- `@backstage/plugin-catalog-backend-module-github` (0.14.0 → [0.14.1-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-github.md#0141-next0))
- `@backstage/plugin-catalog-backend-module-github-org` (0.3.26 → [0.3.27-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-github-org.md#0327-next0))
- `@backstage/plugin-catalog-backend-module-gitlab` (0.8.8 → [0.8.9-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-gitlab.md#089-next0))
- `@backstage/plugin-catalog-backend-module-gitlab-org` (0.2.25 → [0.2.26-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-gitlab-org.md#0226-next0))
- `@backstage/plugin-catalog-backend-module-logs` (0.1.26 → [0.1.27-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-logs.md#0127-next0))
- `@backstage/plugin-catalog-backend-module-msgraph` (0.10.6 → [0.10.7-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-msgraph.md#0107-next0))
- `@backstage/plugin-catalog-backend-module-msgraph-incremental` (0.1.4 → [0.1.5-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-msgraph-incremental.md#015-next0))
- `@backstage/plugin-catalog-backend-module-openapi` (0.2.26 → [0.2.27-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-openapi.md#0227-next0))
- `@backstage/plugin-catalog-backend-module-puppetdb` (0.2.26 → [0.2.27-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-puppetdb.md#0227-next0))
- `@backstage/plugin-catalog-backend-module-scaffolder-entity-model` (0.2.24 → [0.2.25-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-scaffolder-entity-model.md#0225-next0))
- `@backstage/plugin-catalog-backend-module-unprocessed` (0.6.16 → [0.6.17-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-unprocessed.md#0617-next0))
- `@backstage/plugin-catalog-common` (1.2.0 → [1.2.1-next.0](../../changelogs/@backstage/plugin-catalog-common.md#121-next0))
- `@backstage/plugin-catalog-graph` (0.6.8 → [0.6.9-next.0](../../changelogs/@backstage/plugin-catalog-graph.md#069-next0))
- `@backstage/plugin-catalog-import` (0.13.18 → [0.13.19-next.0](../../changelogs/@backstage/plugin-catalog-import.md#01319-next0))
- `@backstage/plugin-catalog-node` (2.2.5 → [2.2.6-next.0](../../changelogs/@backstage/plugin-catalog-node.md#226-next0))
- `@backstage/plugin-catalog-react` (3.2.3 → [3.2.4-next.0](../../changelogs/@backstage/plugin-catalog-react.md#324-next0))
- `@backstage/plugin-catalog-unprocessed-entities` (0.2.35 → [0.2.36-next.0](../../changelogs/@backstage/plugin-catalog-unprocessed-entities.md#0236-next0))
- `@backstage/plugin-catalog-unprocessed-entities-common` (0.0.17 → [0.0.18-next.0](../../changelogs/@backstage/plugin-catalog-unprocessed-entities-common.md#0018-next0))
- `@backstage/plugin-config-schema` (0.1.84 → [0.1.85-next.0](../../changelogs/@backstage/plugin-config-schema.md#0185-next0))
- `@backstage/plugin-devtools` (0.1.43 → [0.1.44-next.0](../../changelogs/@backstage/plugin-devtools.md#0144-next0))
- `@backstage/plugin-devtools-backend` (0.5.21 → [0.5.22-next.0](../../changelogs/@backstage/plugin-devtools-backend.md#0522-next0))
- `@backstage/plugin-devtools-common` (0.1.26 → [0.1.27-next.0](../../changelogs/@backstage/plugin-devtools-common.md#0127-next0))
- `@backstage/plugin-devtools-react` (0.2.6 → [0.2.7-next.0](../../changelogs/@backstage/plugin-devtools-react.md#027-next0))
- `@backstage/plugin-events-backend` (0.6.6 → [0.6.7-next.0](../../changelogs/@backstage/plugin-events-backend.md#067-next0))
- `@backstage/plugin-events-backend-module-aws-sqs` (0.4.26 → [0.4.27-next.0](../../changelogs/@backstage/plugin-events-backend-module-aws-sqs.md#0427-next0))
- `@backstage/plugin-events-backend-module-azure` (0.2.35 → [0.2.36-next.0](../../changelogs/@backstage/plugin-events-backend-module-azure.md#0236-next0))
- `@backstage/plugin-events-backend-module-bitbucket-cloud` (0.2.35 → [0.2.36-next.0](../../changelogs/@backstage/plugin-events-backend-module-bitbucket-cloud.md#0236-next0))
- `@backstage/plugin-events-backend-module-bitbucket-server` (0.1.16 → [0.1.17-next.0](../../changelogs/@backstage/plugin-events-backend-module-bitbucket-server.md#0117-next0))
- `@backstage/plugin-events-backend-module-gerrit` (0.2.35 → [0.2.36-next.0](../../changelogs/@backstage/plugin-events-backend-module-gerrit.md#0236-next0))
- `@backstage/plugin-events-backend-module-github` (0.4.16 → [0.4.17-next.0](../../changelogs/@backstage/plugin-events-backend-module-github.md#0417-next0))
- `@backstage/plugin-events-backend-module-gitlab` (0.3.16 → [0.3.17-next.0](../../changelogs/@backstage/plugin-events-backend-module-gitlab.md#0317-next0))
- `@backstage/plugin-events-backend-module-google-pubsub` (0.2.7 → [0.2.8-next.0](../../changelogs/@backstage/plugin-events-backend-module-google-pubsub.md#028-next0))
- `@backstage/plugin-events-backend-module-kafka` (0.3.8 → [0.3.9-next.0](../../changelogs/@backstage/plugin-events-backend-module-kafka.md#039-next0))
- `@backstage/plugin-events-backend-test-utils` (0.1.59 → [0.1.60-next.0](../../changelogs/@backstage/plugin-events-backend-test-utils.md#0160-next0))
- `@backstage/plugin-events-node` (0.4.26 → [0.4.27-next.0](../../changelogs/@backstage/plugin-events-node.md#0427-next0))
- `@backstage/plugin-gateway-backend` (1.1.9 → [1.1.10-next.0](../../changelogs/@backstage/plugin-gateway-backend.md#1110-next0))
- `@backstage/plugin-home` (0.9.10 → [0.9.11-next.0](../../changelogs/@backstage/plugin-home.md#0911-next0))
- `@backstage/plugin-home-react` (0.1.42 → [0.1.43-next.0](../../changelogs/@backstage/plugin-home-react.md#0143-next0))
- `@backstage/plugin-kubernetes` (0.12.23 → [0.12.24-next.0](../../changelogs/@backstage/plugin-kubernetes.md#01224-next0))
- `@backstage/plugin-kubernetes-backend` (0.21.11 → [0.21.12-next.0](../../changelogs/@backstage/plugin-kubernetes-backend.md#02112-next0))
- `@backstage/plugin-kubernetes-cluster` (0.0.41 → [0.0.42-next.0](../../changelogs/@backstage/plugin-kubernetes-cluster.md#0042-next0))
- `@backstage/plugin-kubernetes-common` (0.9.13 → [0.9.14-next.0](../../changelogs/@backstage/plugin-kubernetes-common.md#0914-next0))
- `@backstage/plugin-kubernetes-node` (0.4.8 → [0.4.9-next.0](../../changelogs/@backstage/plugin-kubernetes-node.md#049-next0))
- `@backstage/plugin-kubernetes-react` (0.6.0 → [0.6.1-next.0](../../changelogs/@backstage/plugin-kubernetes-react.md#061-next0))
- `@backstage/plugin-mcp-actions-backend` (0.2.2 → [0.2.3-next.0](../../changelogs/@backstage/plugin-mcp-actions-backend.md#023-next0))
- `@backstage/plugin-mui-to-bui` (0.2.11 → [0.2.12-next.0](../../changelogs/@backstage/plugin-mui-to-bui.md#0212-next0))
- `@backstage/plugin-notifications` (0.6.0 → [0.6.1-next.0](../../changelogs/@backstage/plugin-notifications.md#061-next0))
- `@backstage/plugin-notifications-backend` (0.6.9 → [0.6.10-next.0](../../changelogs/@backstage/plugin-notifications-backend.md#0610-next0))
- `@backstage/plugin-notifications-backend-module-email` (0.3.25 → [0.3.26-next.0](../../changelogs/@backstage/plugin-notifications-backend-module-email.md#0326-next0))
- `@backstage/plugin-notifications-backend-module-slack` (0.4.6 → [0.4.7-next.0](../../changelogs/@backstage/plugin-notifications-backend-module-slack.md#047-next0))
- `@backstage/plugin-notifications-common` (0.2.4 → [0.2.5-next.0](../../changelogs/@backstage/plugin-notifications-common.md#025-next0))
- `@backstage/plugin-notifications-node` (0.2.30 → [0.2.31-next.0](../../changelogs/@backstage/plugin-notifications-node.md#0231-next0))
- `@backstage/plugin-org` (0.7.9 → [0.7.10-next.0](../../changelogs/@backstage/plugin-org.md#0710-next0))
- `@backstage/plugin-org-react` (0.1.54 → [0.1.55-next.0](../../changelogs/@backstage/plugin-org-react.md#0155-next0))
- `@backstage/plugin-permission-backend` (0.7.16 → [0.7.17-next.0](../../changelogs/@backstage/plugin-permission-backend.md#0717-next0))
- `@backstage/plugin-permission-backend-module-allow-all-policy` (0.2.23 → [0.2.24-next.0](../../changelogs/@backstage/plugin-permission-backend-module-allow-all-policy.md#0224-next0))
- `@backstage/plugin-permission-common` (0.9.11 → [0.9.12-next.0](../../changelogs/@backstage/plugin-permission-common.md#0912-next0))
- `@backstage/plugin-permission-node` (0.11.4 → [0.11.5-next.0](../../changelogs/@backstage/plugin-permission-node.md#0115-next0))
- `@backstage/plugin-permission-react` (0.5.5 → [0.5.6-next.0](../../changelogs/@backstage/plugin-permission-react.md#056-next0))
- `@backstage/plugin-proxy-backend` (0.6.18 → [0.6.19-next.0](../../changelogs/@backstage/plugin-proxy-backend.md#0619-next0))
- `@backstage/plugin-proxy-node` (0.1.19 → [0.1.20-next.0](../../changelogs/@backstage/plugin-proxy-node.md#0120-next0))
- `@backstage/plugin-scaffolder` (1.39.0 → [1.39.1-next.0](../../changelogs/@backstage/plugin-scaffolder.md#1391-next0))
- `@backstage/plugin-scaffolder-backend` (4.2.0 → [4.2.1-next.0](../../changelogs/@backstage/plugin-scaffolder-backend.md#421-next0))
- `@backstage/plugin-scaffolder-backend-module-azure` (0.2.26 → [0.2.27-next.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-azure.md#0227-next0))
- `@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` (0.3.11 → [0.3.12-next.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket-cloud.md#0312-next0))
- `@backstage/plugin-scaffolder-backend-module-bitbucket-server` (0.2.26 → [0.2.27-next.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket-server.md#0227-next0))
- `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.3.26 → [0.3.27-next.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-confluence-to-markdown.md#0327-next0))
- `@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.3.27 → [0.3.28-next.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-cookiecutter.md#0328-next0))
- `@backstage/plugin-scaffolder-backend-module-gcp` (0.2.25 → [0.2.26-next.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-gcp.md#0226-next0))
- `@backstage/plugin-scaffolder-backend-module-gerrit` (0.2.25 → [0.2.26-next.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-gerrit.md#0226-next0))
- `@backstage/plugin-scaffolder-backend-module-gitea` (0.2.25 → [0.2.26-next.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-gitea.md#0226-next0))
- `@backstage/plugin-scaffolder-backend-module-github` (0.10.0 → [0.10.1-next.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-github.md#0101-next0))
- `@backstage/plugin-scaffolder-backend-module-gitlab` (0.12.0 → [0.12.1-next.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-gitlab.md#0121-next0))
- `@backstage/plugin-scaffolder-backend-module-notifications` (0.1.26 → [0.1.27-next.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-notifications.md#0127-next0))
- `@backstage/plugin-scaffolder-backend-module-rails` (0.5.25 → [0.5.26-next.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-rails.md#0526-next0))
- `@backstage/plugin-scaffolder-backend-module-sentry` (0.4.0 → [0.4.1-next.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-sentry.md#041-next0))
- `@backstage/plugin-scaffolder-backend-module-workspace-database` (0.1.0 → [0.1.1-next.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-workspace-database.md#011-next0))
- `@backstage/plugin-scaffolder-backend-module-yeoman` (0.4.26 → [0.4.27-next.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-yeoman.md#0427-next0))
- `@backstage/plugin-scaffolder-common` (2.3.0 → [2.3.1-next.0](../../changelogs/@backstage/plugin-scaffolder-common.md#231-next0))
- `@backstage/plugin-scaffolder-node` (0.13.7 → [0.13.8-next.0](../../changelogs/@backstage/plugin-scaffolder-node.md#0138-next0))
- `@backstage/plugin-scaffolder-node-test-utils` (0.3.15 → [0.3.16-next.0](../../changelogs/@backstage/plugin-scaffolder-node-test-utils.md#0316-next0))
- `@backstage/plugin-scaffolder-react` (2.1.0 → [2.1.1-next.0](../../changelogs/@backstage/plugin-scaffolder-react.md#211-next0))
- `@backstage/plugin-search` (1.7.8 → [1.7.9-next.0](../../changelogs/@backstage/plugin-search.md#179-next0))
- `@backstage/plugin-search-backend` (2.1.7 → [2.1.8-next.0](../../changelogs/@backstage/plugin-search-backend.md#218-next0))
- `@backstage/plugin-search-backend-module-catalog` (0.3.19 → [0.3.20-next.0](../../changelogs/@backstage/plugin-search-backend-module-catalog.md#0320-next0))
- `@backstage/plugin-search-backend-module-elasticsearch` (2.0.0 → [2.0.1-next.0](../../changelogs/@backstage/plugin-search-backend-module-elasticsearch.md#201-next0))
- `@backstage/plugin-search-backend-module-explore` (0.3.18 → [0.3.19-next.0](../../changelogs/@backstage/plugin-search-backend-module-explore.md#0319-next0))
- `@backstage/plugin-search-backend-module-stack-overflow-collator` (0.3.24 → [0.3.25-next.0](../../changelogs/@backstage/plugin-search-backend-module-stack-overflow-collator.md#0325-next0))
- `@backstage/plugin-search-backend-module-techdocs` (0.4.18 → [0.4.19-next.0](../../changelogs/@backstage/plugin-search-backend-module-techdocs.md#0419-next0))
- `@backstage/plugin-search-backend-node` (1.4.8 → [1.4.9-next.0](../../changelogs/@backstage/plugin-search-backend-node.md#149-next0))
- `@backstage/plugin-search-common` (1.2.25 → [1.2.26-next.0](../../changelogs/@backstage/plugin-search-common.md#1226-next0))
- `@backstage/plugin-search-react` (1.11.8 → [1.11.9-next.0](../../changelogs/@backstage/plugin-search-react.md#1119-next0))
- `@backstage/plugin-signals` (0.0.35 → [0.0.36-next.0](../../changelogs/@backstage/plugin-signals.md#0036-next0))
- `@backstage/plugin-signals-backend` (0.3.19 → [0.3.20-next.0](../../changelogs/@backstage/plugin-signals-backend.md#0320-next0))
- `@backstage/plugin-signals-node` (0.2.5 → [0.2.6-next.0](../../changelogs/@backstage/plugin-signals-node.md#026-next0))
- `@backstage/plugin-signals-react` (0.0.26 → [0.0.27-next.0](../../changelogs/@backstage/plugin-signals-react.md#0027-next0))
- `@backstage/plugin-techdocs-addons-test-utils` (2.0.9 → [2.0.10-next.0](../../changelogs/@backstage/plugin-techdocs-addons-test-utils.md#2010-next0))
- `@backstage/plugin-techdocs-backend` (2.3.0 → [2.3.1-next.0](../../changelogs/@backstage/plugin-techdocs-backend.md#231-next0))
- `@backstage/plugin-techdocs-module-addons-contrib` (1.1.40 → [1.1.41-next.0](../../changelogs/@backstage/plugin-techdocs-module-addons-contrib.md#1141-next0))
- `@backstage/plugin-techdocs-node` (2.0.0 → [2.0.1-next.0](../../changelogs/@backstage/plugin-techdocs-node.md#201-next0))
- `@backstage/plugin-techdocs-react` (1.3.15 → [1.3.16-next.0](../../changelogs/@backstage/plugin-techdocs-react.md#1316-next0))
- `@backstage/plugin-user-settings` (0.9.7 → [0.9.8-next.0](../../changelogs/@backstage/plugin-user-settings.md#098-next0))
- `@backstage/plugin-user-settings-backend` (0.4.7 → [0.4.8-next.0](../../changelogs/@backstage/plugin-user-settings-backend.md#048-next0))
- `@backstage/test-utils` (1.7.22 → [1.7.23-next.0](../../changelogs/@backstage/test-utils.md#1723-next0))
- `@techdocs/cli` (1.12.0 → [1.12.1-next.0](../../changelogs/@techdocs/cli.md#1121-next0))
