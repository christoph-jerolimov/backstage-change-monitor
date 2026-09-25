# Backstage Release 1.55.0 changelog

Changes between 1.54.9 and 1.55.0 — 2 added, 0 removed, 191 upgraded, 19 unchanged packages.

## Summary

- [Newly added packages](#newly-added-packages): 2 packages
- [Breaking changes](#breaking-changes): 10 packages
- [0.x minor version bumps](#0x-minor-version-bumps): 4 packages
- [0.x patch version bumps](#0x-patch-version-bumps): 65 packages
- [Other minor version bumps](#other-minor-version-bumps): 7 packages
- [Other patch version bumps](#other-patch-version-bumps): 16 packages
- [Excluded dependency updates](#excluded-dependency-updates): 89 packages

## Table of contents

- [Newly added packages](#newly-added-packages)
  - [`@backstage/cli-module-package-manager-yarn` (new, 0.1.1)](#backstagecli-module-package-manager-yarn-new-011)
  - [`@backstage/plugin-scaffolder-backend-module-workspace-database` (new, 0.1.0)](#backstageplugin-scaffolder-backend-module-workspace-database-new-010)
- [Breaking changes](#breaking-changes)
  - [`@backstage/connections` (0.3.0 → 0.4.0)](#backstageconnections-030--040)
  - [`@backstage/plugin-auth-backend-module-cloudflare-access-provider` (0.4.18 → 0.5.0)](#backstageplugin-auth-backend-module-cloudflare-access-provider-0418--050)
  - [`@backstage/plugin-catalog-backend` (3.9.1 → 4.0.0)](#backstageplugin-catalog-backend-391--400)
  - [`@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.7.15 → 0.8.0)](#backstageplugin-catalog-backend-module-incremental-ingestion-0715--080)
  - [`@backstage/plugin-kubernetes-react` (0.5.23 → 0.6.0)](#backstageplugin-kubernetes-react-0523--060)
  - [`@backstage/plugin-scaffolder-backend-module-github` (0.9.13 → 0.10.0)](#backstageplugin-scaffolder-backend-module-github-0913--0100)
  - [`@backstage/plugin-scaffolder-backend-module-sentry` (0.3.8 → 0.4.0)](#backstageplugin-scaffolder-backend-module-sentry-038--040)
  - [`@backstage/plugin-search-backend-module-elasticsearch` (1.8.7 → 2.0.0)](#backstageplugin-search-backend-module-elasticsearch-187--200)
  - [`@backstage/plugin-techdocs-node` (1.15.6 → 2.0.0)](#backstageplugin-techdocs-node-1156--200)
  - [`@backstage/ui` (0.17.1 → 0.18.0)](#backstageui-0171--0180)
- [0.x minor version bumps](#0x-minor-version-bumps)
  - [`@backstage/backend-defaults` (0.17.8 → 0.18.0)](#backstagebackend-defaults-0178--0180)
  - [`@backstage/plugin-catalog-backend-module-github` (0.13.5 → 0.14.0)](#backstageplugin-catalog-backend-module-github-0135--0140)
  - [`@backstage/plugin-notifications` (0.5.20 → 0.6.0)](#backstageplugin-notifications-0520--060)
  - [`@backstage/plugin-scaffolder-backend-module-gitlab` (0.11.10 → 0.12.0)](#backstageplugin-scaffolder-backend-module-gitlab-01110--0120)
- [0.x patch version bumps](#0x-patch-version-bumps)
  - [`@backstage/backend-dynamic-feature-service` (0.8.6 → 0.8.7)](#backstagebackend-dynamic-feature-service-086--087)
  - [`@backstage/backend-openapi-utils` (0.7.1 → 0.7.2)](#backstagebackend-openapi-utils-071--072)
  - [`@backstage/cli` (0.36.5 → 0.36.6)](#backstagecli-0365--0366)
  - [`@backstage/cli-common` (0.3.0 → 0.3.1)](#backstagecli-common-030--031)
  - [`@backstage/cli-defaults` (0.1.5 → 0.1.6)](#backstagecli-defaults-015--016)
  - [`@backstage/cli-module-build` (0.1.7 → 0.1.8)](#backstagecli-module-build-017--018)
  - [`@backstage/cli-module-maintenance` (0.1.4 → 0.1.5)](#backstagecli-module-maintenance-014--015)
  - [`@backstage/cli-module-new` (0.1.6 → 0.1.7)](#backstagecli-module-new-016--017)
  - [`@backstage/cli-module-test-jest` (0.1.5 → 0.1.6)](#backstagecli-module-test-jest-015--016)
  - [`@backstage/core-components` (0.18.13 → 0.18.14)](#backstagecore-components-01813--01814)
  - [`@backstage/create-app` (0.9.1 → 0.9.2)](#backstagecreate-app-091--092)
  - [`@backstage/filter-predicates` (0.1.4 → 0.1.5)](#backstagefilter-predicates-014--015)
  - [`@backstage/frontend-app-api` (0.16.7 → 0.16.8)](#backstagefrontend-app-api-0167--0168)
  - [`@backstage/frontend-dynamic-feature-loader` (0.1.15 → 0.1.16)](#backstagefrontend-dynamic-feature-loader-0115--0116)
  - [`@backstage/frontend-plugin-api` (0.18.0 → 0.18.1)](#backstagefrontend-plugin-api-0180--0181)
  - [`@backstage/frontend-test-utils` (0.6.3 → 0.6.4)](#backstagefrontend-test-utils-063--064)
  - [`@backstage/module-federation-common` (0.1.4 → 0.1.5)](#backstagemodule-federation-common-014--015)
  - [`@backstage/plugin-api-docs` (0.14.4 → 0.14.5)](#backstageplugin-api-docs-0144--0145)
  - [`@backstage/plugin-app` (0.5.2 → 0.5.3)](#backstageplugin-app-052--053)
  - [`@backstage/plugin-app-module-user-settings` (0.1.1 → 0.1.2)](#backstageplugin-app-module-user-settings-011--012)
  - [`@backstage/plugin-app-react` (0.2.6 → 0.2.7)](#backstageplugin-app-react-026--027)
  - [`@backstage/plugin-auth-backend` (0.30.0 → 0.30.1)](#backstageplugin-auth-backend-0300--0301)
  - [`@backstage/plugin-auth-backend-module-azure-easyauth-provider` (0.2.23 → 0.2.24)](#backstageplugin-auth-backend-module-azure-easyauth-provider-0223--0224)
  - [`@backstage/plugin-auth-backend-module-github-provider` (0.5.6 → 0.5.7)](#backstageplugin-auth-backend-module-github-provider-056--057)
  - [`@backstage/plugin-auth-backend-module-microsoft-provider` (0.3.18 → 0.3.19)](#backstageplugin-auth-backend-module-microsoft-provider-0318--0319)
  - [`@backstage/plugin-auth-backend-module-oauth2-proxy-provider` (0.3.2 → 0.3.3)](#backstageplugin-auth-backend-module-oauth2-proxy-provider-032--033)
  - [`@backstage/plugin-auth-backend-module-oidc-provider` (0.4.20 → 0.4.21)](#backstageplugin-auth-backend-module-oidc-provider-0420--0421)
  - [`@backstage/plugin-auth-backend-module-pinniped-provider` (0.3.17 → 0.3.18)](#backstageplugin-auth-backend-module-pinniped-provider-0317--0318)
  - [`@backstage/plugin-auth-node` (0.7.5 → 0.7.6)](#backstageplugin-auth-node-075--076)
  - [`@backstage/plugin-bitbucket-cloud-common` (0.3.12 → 0.3.13)](#backstageplugin-bitbucket-cloud-common-0312--0313)
  - [`@backstage/plugin-catalog-backend-module-aws` (0.4.27 → 0.4.28)](#backstageplugin-catalog-backend-module-aws-0427--0428)
  - [`@backstage/plugin-catalog-backend-module-azure` (0.3.21 → 0.3.22)](#backstageplugin-catalog-backend-module-azure-0321--0322)
  - [`@backstage/plugin-catalog-backend-module-bitbucket-server` (0.5.14 → 0.5.15)](#backstageplugin-catalog-backend-module-bitbucket-server-0514--0515)
  - [`@backstage/plugin-catalog-backend-module-gitlab` (0.8.7 → 0.8.8)](#backstageplugin-catalog-backend-module-gitlab-087--088)
  - [`@backstage/plugin-catalog-backend-module-ldap` (0.12.8 → 0.12.9)](#backstageplugin-catalog-backend-module-ldap-0128--0129)
  - [`@backstage/plugin-catalog-backend-module-msgraph` (0.10.5 → 0.10.6)](#backstageplugin-catalog-backend-module-msgraph-0105--0106)
  - [`@backstage/plugin-catalog-backend-module-puppetdb` (0.2.25 → 0.2.26)](#backstageplugin-catalog-backend-module-puppetdb-0225--0226)
  - [`@backstage/plugin-catalog-graph` (0.6.7 → 0.6.8)](#backstageplugin-catalog-graph-067--068)
  - [`@backstage/plugin-catalog-import` (0.13.17 → 0.13.18)](#backstageplugin-catalog-import-01317--01318)
  - [`@backstage/plugin-catalog-unprocessed-entities` (0.2.34 → 0.2.35)](#backstageplugin-catalog-unprocessed-entities-0234--0235)
  - [`@backstage/plugin-devtools` (0.1.42 → 0.1.43)](#backstageplugin-devtools-0142--0143)
  - [`@backstage/plugin-home` (0.9.9 → 0.9.10)](#backstageplugin-home-099--0910)
  - [`@backstage/plugin-home-react` (0.1.41 → 0.1.42)](#backstageplugin-home-react-0141--0142)
  - [`@backstage/plugin-kubernetes` (0.12.22 → 0.12.23)](#backstageplugin-kubernetes-01222--01223)
  - [`@backstage/plugin-kubernetes-backend` (0.21.10 → 0.21.11)](#backstageplugin-kubernetes-backend-02110--02111)
  - [`@backstage/plugin-kubernetes-common` (0.9.12 → 0.9.13)](#backstageplugin-kubernetes-common-0912--0913)
  - [`@backstage/plugin-kubernetes-node` (0.4.7 → 0.4.8)](#backstageplugin-kubernetes-node-047--048)
  - [`@backstage/plugin-mcp-actions-backend` (0.2.1 → 0.2.2)](#backstageplugin-mcp-actions-backend-021--022)
  - [`@backstage/plugin-notifications-backend` (0.6.8 → 0.6.9)](#backstageplugin-notifications-backend-068--069)
  - [`@backstage/plugin-notifications-backend-module-email` (0.3.24 → 0.3.25)](#backstageplugin-notifications-backend-module-email-0324--0325)
  - [`@backstage/plugin-notifications-backend-module-slack` (0.4.5 → 0.4.6)](#backstageplugin-notifications-backend-module-slack-045--046)
  - [`@backstage/plugin-notifications-node` (0.2.29 → 0.2.30)](#backstageplugin-notifications-node-0229--0230)
  - [`@backstage/plugin-org` (0.7.8 → 0.7.9)](#backstageplugin-org-078--079)
  - [`@backstage/plugin-proxy-backend` (0.6.17 → 0.6.18)](#backstageplugin-proxy-backend-0617--0618)
  - [`@backstage/plugin-scaffolder-backend-module-azure` (0.2.25 → 0.2.26)](#backstageplugin-scaffolder-backend-module-azure-0225--0226)
  - [`@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` (0.3.10 → 0.3.11)](#backstageplugin-scaffolder-backend-module-bitbucket-cloud-0310--0311)
  - [`@backstage/plugin-scaffolder-backend-module-bitbucket-server` (0.2.25 → 0.2.26)](#backstageplugin-scaffolder-backend-module-bitbucket-server-0225--0226)
  - [`@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.3.25 → 0.3.26)](#backstageplugin-scaffolder-backend-module-confluence-to-markdown-0325--0326)
  - [`@backstage/plugin-scaffolder-backend-module-gcp` (0.2.24 → 0.2.25)](#backstageplugin-scaffolder-backend-module-gcp-0224--0225)
  - [`@backstage/plugin-scaffolder-node` (0.13.6 → 0.13.7)](#backstageplugin-scaffolder-node-0136--0137)
  - [`@backstage/plugin-search-backend-module-catalog` (0.3.18 → 0.3.19)](#backstageplugin-search-backend-module-catalog-0318--0319)
  - [`@backstage/plugin-search-backend-module-techdocs` (0.4.17 → 0.4.18)](#backstageplugin-search-backend-module-techdocs-0417--0418)
  - [`@backstage/plugin-signals-backend` (0.3.18 → 0.3.19)](#backstageplugin-signals-backend-0318--0319)
  - [`@backstage/plugin-user-settings` (0.9.6 → 0.9.7)](#backstageplugin-user-settings-096--097)
  - [`@backstage/repo-tools` (0.19.0 → 0.19.1)](#backstagerepo-tools-0190--0191)
- [Other minor version bumps](#other-minor-version-bumps)
  - [`@backstage/plugin-catalog-common` (1.1.10 → 1.2.0)](#backstageplugin-catalog-common-1110--120)
  - [`@backstage/plugin-scaffolder` (1.38.2 → 1.39.0)](#backstageplugin-scaffolder-1382--1390)
  - [`@backstage/plugin-scaffolder-backend` (4.1.0 → 4.2.0)](#backstageplugin-scaffolder-backend-410--420)
  - [`@backstage/plugin-scaffolder-common` (2.2.3 → 2.3.0)](#backstageplugin-scaffolder-common-223--230)
  - [`@backstage/plugin-scaffolder-react` (2.0.3 → 2.1.0)](#backstageplugin-scaffolder-react-203--210)
  - [`@backstage/plugin-techdocs-backend` (2.2.5 → 2.3.0)](#backstageplugin-techdocs-backend-225--230)
  - [`@techdocs/cli` (1.11.4 → 1.12.0)](#techdocscli-1114--1120)
- [Other patch version bumps](#other-patch-version-bumps)
  - [`@backstage/backend-test-utils` (1.11.6 → 1.11.7)](#backstagebackend-test-utils-1116--1117)
  - [`@backstage/catalog-client` (1.16.1 → 1.16.2)](#backstagecatalog-client-1161--1162)
  - [`@backstage/catalog-model` (1.10.0 → 1.10.1)](#backstagecatalog-model-1100--1101)
  - [`@backstage/config` (1.3.8 → 1.3.9)](#backstageconfig-138--139)
  - [`@backstage/core-app-api` (1.20.4 → 1.20.5)](#backstagecore-app-api-1204--1205)
  - [`@backstage/integration` (2.1.1 → 2.1.2)](#backstageintegration-211--212)
  - [`@backstage/plugin-catalog` (2.0.8 → 2.0.9)](#backstageplugin-catalog-208--209)
  - [`@backstage/plugin-catalog-react` (3.2.2 → 3.2.3)](#backstageplugin-catalog-react-322--323)
  - [`@backstage/plugin-search` (1.7.7 → 1.7.8)](#backstageplugin-search-177--178)
  - [`@backstage/plugin-search-backend` (2.1.6 → 2.1.7)](#backstageplugin-search-backend-216--217)
  - [`@backstage/plugin-search-backend-node` (1.4.7 → 1.4.8)](#backstageplugin-search-backend-node-147--148)
  - [`@backstage/plugin-techdocs` (1.18.0 → 1.18.1)](#backstageplugin-techdocs-1180--1181)
  - [`@backstage/plugin-techdocs-addons-test-utils` (2.0.8 → 2.0.9)](#backstageplugin-techdocs-addons-test-utils-208--209)
  - [`@backstage/plugin-techdocs-module-addons-contrib` (1.1.39 → 1.1.40)](#backstageplugin-techdocs-module-addons-contrib-1139--1140)
  - [`@backstage/plugin-techdocs-react` (1.3.14 → 1.3.15)](#backstageplugin-techdocs-react-1314--1315)
  - [`@backstage/test-utils` (1.7.21 → 1.7.22)](#backstagetest-utils-1721--1722)
- [Excluded dependency updates](#excluded-dependency-updates)

## Newly added packages

### `@backstage/cli-module-package-manager-yarn` (new, [0.1.1](../../changelogs/@backstage/cli-module-package-manager-yarn.md#011))

#### 0.1.1

##### Patch Changes

- [`de957f6`](https://github.com/backstage/backstage/commit/de957f6): Added `@backstage/cli-module-package-manager-yarn` with `backstage-cli pm
verify-patches` to validate Yarn patch references, local patch files,
  lockfile consistency, and patched Backstage package versions against the
  selected Backstage release. The command is included in
  `@backstage/cli-defaults`.
- [`ce2a9c2`](https://github.com/backstage/backstage/commit/ce2a9c2): The `pm verify-patches` command now reports root-level Yarn resolutions that no longer match any dependency request in the lockfile.
- [`064c2de`](https://github.com/backstage/backstage/commit/064c2de): Updated the Yarn tooling dependencies to versions that avoid known security vulnerabilities.

### `@backstage/plugin-scaffolder-backend-module-workspace-database` (new, [0.1.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-workspace-database.md#010))

#### 0.1.0

##### Minor Changes

- [`e95b649`](https://github.com/backstage/backstage/commit/e95b649): Added task recovery feature with new `scaffolder.taskRecovery` config section. When enabled, tasks that crash or timeout are automatically recovered and resume from the last completed step, task secrets are retained until the task reaches a terminal state so recovery can continue, and completed step outputs are persisted. Enabling recovery applies to all scaffolder tasks, so actions used by those tasks should be idempotent or use checkpoints. When recovery is disabled (the default), the previous behavior is unchanged: secrets are cleared as soon as a task is claimed and retries re-run every step. The new config consolidates previous experimental flags (`EXPERIMENTAL_recoverTasks`, `EXPERIMENTAL_workspaceSerialization`, `EXPERIMENTAL_recoverTasksTimeout`) which remain supported as fallbacks. The legacy workspace provider setting continues to select a provider only when `EXPERIMENTAL_workspaceSerialization` is `true`.

  Workspace serialization for task recovery now requires installing a separate workspace provider module, including when you use the legacy configuration. For development, use `@backstage/plugin-scaffolder-backend-module-workspace-database` (50 MB limit, not recommended for production). On first startup, that module migrates existing database workspace snapshots from the legacy task storage. For production, use `@backstage/plugin-scaffolder-backend-module-gcp` or a similar external storage provider. The scaffolder rejects a configured provider that has not been installed and registered.

  Enabling crash recovery does not keep completed task event streams open; normal task completion remains terminal for event-stream clients.

## Breaking changes

### `@backstage/connections` (0.3.0 → [0.4.0](../../changelogs/@backstage/connections.md#040))

#### 0.4.0

##### Minor Changes

- [`d86c47f`](https://github.com/backstage/backstage/commit/d86c47f): **BREAKING**: Cleaned up the public API surface with the following changes:

  - Renamed `ConnectionAuthValue` to `ConnectionAuth`
  - Renamed `LookupStrategy` to `ConnectionLookupStrategy`
  - Removed `ConnectionAuthMatch` (inlined as `{ plugins: string[] }`)
  - Removed `ConnectionAuthMethodKey` (inlined where used)
  - Broadened the `buildConnectionsFromConfig` logger option to accept any logger with `error`, `warn`, `info`, and `debug` methods
  - Moved `buildConnectionsFromConfig`, `ConfiguredConnection`, and `ConfiguredConnectionAuth` to a new `@backstage/connections/config` sub-path export
  - Removed `matchAuth` and `validate` from the public `ConnectionType` shape
  - Renamed `ConnectionType` to `ConnectionTypeDefinition` (the definition object describing a connection type's schemas and behavior)
  - Renamed `ConnectionTypeKey` to `ConnectionType` (the string union of registered connection type names)
  - Renamed `isConnectionTypeKey` to `isConnectionType`
  - Repurposed `ConnectionAuth` as a consumer-facing lookup type: `ConnectionAuth<'aws'>` resolves to the union of auth entry shapes, `ConnectionAuth<'github', 'token'>` narrows to a single method

- [`06cd10c`](https://github.com/backstage/backstage/commit/06cd10c): Removed the nonexistent `query` and `auth` properties from connection type descriptors, along with the unused `AuthValue` type. Query and returned authentication types remain inferred through `ConnectionsService.find`.

##### Patch Changes

- [`736d84e`](https://github.com/backstage/backstage/commit/736d84e): Use locale-insensitive Unicode casing for consistent string handling across environments.
- [`9cf2287`](https://github.com/backstage/backstage/commit/9cf2287): Added support for calling `find` without `authMethods`, which returns connection info (type, title, and config fields) without any auth data. This is useful for consumers that only need connection metadata like API base URLs and don't handle authentication themselves.

### `@backstage/plugin-auth-backend-module-cloudflare-access-provider` (0.4.18 → [0.5.0](../../changelogs/@backstage/plugin-auth-backend-module-cloudflare-access-provider.md#050))

#### 0.5.0

##### Minor Changes

- [`ed9034c`](https://github.com/backstage/backstage/commit/ed9034c): **BREAKING**: The Cloudflare Access provider now requires the application audience in its configuration. Before upgrading, set `auth.providers.cfaccess.audience` to the Audience (AUD) tag shown for your Backstage application in Cloudflare Zero Trust.

  ```yaml
  auth:
    providers:
      cfaccess:
        teamName: example
        audience: ${AUTH_CFACCESS_AUDIENCE}
  ```

### `@backstage/plugin-catalog-backend` (3.9.1 → [4.0.0](../../changelogs/@backstage/plugin-catalog-backend.md#400))

#### 4.0.0

##### Major Changes

- [`b0d8a53`](https://github.com/backstage/backstage/commit/b0d8a53): **BREAKING**: Removed the deprecated `CodeOwnersProcessor` and `AnnotateScmSlugEntityProcessor` exports. To retain their behavior, install and register the corresponding community backend module:

  - `CodeOwnersProcessor`: [`@backstage-community/plugin-catalog-backend-module-codeowners`](https://github.com/backstage/community-plugins/tree/main/workspaces/catalog/plugins/catalog-backend-module-codeowners)
  - `AnnotateScmSlugEntityProcessor`: [`@backstage-community/plugin-catalog-backend-module-annotate-scm-slug`](https://github.com/backstage/community-plugins/tree/main/workspaces/catalog/plugins/catalog-backend-module-annotate-scm-slug)

  Add the module to your backend with `backend.add(import('<module-package>'))` and remove the custom registration of the old processor. For explicit processor configuration, follow the replacement module's documentation.

- [`b0d8a53`](https://github.com/backstage/backstage/commit/b0d8a53): **BREAKING**: Removed the deprecated `catalog.stitchingStrategy.mode` configuration setting and its startup warnings. Remove this key from your configuration, whether it is set to `immediate` or `deferred`. Stitching continues to run asynchronously via the worker queue. The `catalog.stitchingStrategy.pollingInterval` and `catalog.stitchingStrategy.stitchTimeout` settings remain supported and should be kept if you use them.
- [`d2cf99f`](https://github.com/backstage/backstage/commit/d2cf99f): **BREAKING**: Removed the deprecated `catalog.enableRelationsCompatibility` config option and its associated compatibility layer. Entity relations are now always returned in the standard format with only `targetRef`. If you were relying on the `target` field in relations, update your code to use `targetRef` instead.

##### Patch Changes

- [`736d84e`](https://github.com/backstage/backstage/commit/736d84e): Use locale-insensitive Unicode casing for consistent string handling across environments.
- [`f5119cc`](https://github.com/backstage/backstage/commit/f5119cc): Improved PostgreSQL catalog query planning by correcting entity cardinality statistics for the search table.
- [`72c16f5`](https://github.com/backstage/backstage/commit/72c16f5): Use stable PostgreSQL array parameters for `$in` filter predicates.
- [`78656f8`](https://github.com/backstage/backstage/commit/78656f8): Fixed catalog model relations to inherit the source entity namespace when no default namespace is configured, as documented. Explicit namespaces in entity references and explicitly configured default namespaces continue to take precedence.
- [`7761a50`](https://github.com/backstage/backstage/commit/7761a50): Improved path validation for catalog entity placeholders.
- [`49b41f6`](https://github.com/backstage/backstage/commit/49b41f6): Fixed a bug where catalog entities could fail to process when catalog model sources are enabled and the catalog mixes `backstage.io/v1alpha1` and `backstage.io/v1beta1` for the same kind.
- [`4b922b3`](https://github.com/backstage/backstage/commit/4b922b3): The `catalog:query-catalog-entities` action now accepts `limit` and `offset` when they are passed as strings, coercing them to numbers before validation. Previously the action failed with a validation error when a client sent these pagination arguments as strings, which is common for MCP/LLM clients.
- [`fda0ef1`](https://github.com/backstage/backstage/commit/fda0ef1): Correct catalog property permission matching.
- [`ff327e0`](https://github.com/backstage/backstage/commit/ff327e0): Apply catalog location analysis permissions consistently when using a custom location analyzer.
- [`05e2005`](https://github.com/backstage/backstage/commit/05e2005): Fixed PostgreSQL catalog migrations sometimes failing during search index deduplication when using a database connection pool.
- [`7629e5e`](https://github.com/backstage/backstage/commit/7629e5e): Use stable PostgreSQL array parameters for batched refresh state lookups and updates.
- [`c26a19b`](https://github.com/backstage/backstage/commit/c26a19b): Improved catalog database performance stability for large PostgreSQL installations with frequent entity updates.
- [`e363ae2`](https://github.com/backstage/backstage/commit/e363ae2): Allowed location type restrictions are now applied consistently during catalog processing.

### `@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.7.15 → [0.8.0](../../changelogs/@backstage/plugin-catalog-backend-module-incremental-ingestion.md#080))

#### 0.8.0

##### Minor Changes

- [`305e2f7`](https://github.com/backstage/backstage/commit/305e2f7): **BREAKING**: The incremental ingestion administrative routes now enforce separate read and manage permissions. Installations with custom permission policies must add decisions for the new permissions.

### `@backstage/plugin-kubernetes-react` (0.5.23 → [0.6.0](../../changelogs/@backstage/plugin-kubernetes-react.md#060))

#### 0.6.0

##### Minor Changes

- [`cfba1bc`](https://github.com/backstage/backstage/commit/cfba1bc): **BREAKING PRODUCERS:** The `FixDialog`, `ContainerCard`, and `PodLogs` components no longer accept an implicit `children` prop. This aligns them with ADR006. If you were passing children to these components, remove them as they were never rendered.

##### Patch Changes

- [`736d84e`](https://github.com/backstage/backstage/commit/736d84e): Use locale-insensitive Unicode casing for consistent string handling across environments.
- [`c0ebaa7`](https://github.com/backstage/backstage/commit/c0ebaa7): chore(deps): bump `js-yaml` from 4.3.1 to 4.3.2
- [`83f34f2`](https://github.com/backstage/backstage/commit/83f34f2): The pod exec terminal now loads `@xterm/xterm` and its stylesheet when a terminal is opened, instead of including them in the initial bundle.

### `@backstage/plugin-scaffolder-backend-module-github` (0.9.13 → [0.10.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-github.md#0100))

#### 0.10.0

##### Minor Changes

- [`aced3e4`](https://github.com/backstage/backstage/commit/aced3e4): **BREAKING**: Removed unused inputs from the `github:repo:create` action schema. The following inputs were previously accepted but silently ignored, and have now been removed: `blockCreations`, `branch`, `bypassPullRequestAllowances`, `defaultBranch`, `dismissStaleReviews`, `gitAuthorEmail`, `gitAuthorName`, `gitCommitMessage`, `protectDefaultBranch`, `protectEnforceAdmins`, `requireBranchesToBeUpToDate`, `requireCodeOwnerReviews`, `requiredApprovingReviewCount`, `requiredCommitSigning`, `requiredConversationResolution`, `requiredLinearHistory`, `requiredStatusCheckContexts`, `requireLastPushApproval`, `restrictions`, and `sourcePath`. If your templates pass any of these to `github:repo:create`, remove them. Most of these inputs are supported by the `github:repo:push` action for branch protection, git authoring, and content publishing.

##### Patch Changes

- [`bbba6b5`](https://github.com/backstage/backstage/commit/bbba6b5): Added support for requiring user-provided credentials for GitHub mutation actions when `scaffolder.requireScmUserCredentials` is enabled.
- [`736d84e`](https://github.com/backstage/backstage/commit/736d84e): Use locale-insensitive Unicode casing for consistent string handling across environments.

### `@backstage/plugin-scaffolder-backend-module-sentry` (0.3.8 → [0.4.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-sentry.md#040))

#### 0.4.0

##### Minor Changes

- [`52b5c79`](https://github.com/backstage/backstage/commit/52b5c79): **BREAKING**: Restrict Sentry API requests to the configured API base URL. Move custom action-level `apiBaseUrl` values to `scaffolder.sentry.apiBaseUrl` before upgrading.

### `@backstage/plugin-search-backend-module-elasticsearch` (1.8.7 → [2.0.0](../../changelogs/@backstage/plugin-search-backend-module-elasticsearch.md#200))

#### 2.0.0

##### Major Changes

- [`3753c36`](https://github.com/backstage/backstage/commit/3753c36): **BREAKING**: Upgraded the Elasticsearch client to version 8, requiring at least version 8.19 - the only 8.x release line still under support, [following the end of life of Elasticsearch 7.x and earlier 8.x lines](https://endoflife.date/elasticsearch). Elasticsearch 7.x clusters are no longer supported.

  If you use the `elastic` provider or connect to a plain Elasticsearch node, make sure your cluster is running Elasticsearch 8.19 or later before upgrading. The `aws` and `opensearch` providers keep using the OpenSearch client and are unaffected. Existing TLS settings continue to work without any configuration changes.

  The methods of the `ElasticSearchClientWrapper` now return a normalized response that exposes `body`, `statusCode`, `headers` and `warnings` for both providers, instead of the client specific response types. Code that relies on the raw client types or reads the `meta` property of a response needs to be adjusted.

##### Patch Changes

- [`fe6ace6`](https://github.com/backstage/backstage/commit/fe6ace6): Added optional `accountId` config to `search.elasticsearch` for resolving account-specific AWS credentials, enabling support for `webIdentityTokenFile` and `accountDefaults` when using AWS OpenSearch.
- [`b11c9b4`](https://github.com/backstage/backstage/commit/b11c9b4): Fixed a bug where an empty document type list could result in querying all indices instead of returning empty results.

### `@backstage/plugin-techdocs-node` (1.15.6 → [2.0.0](../../changelogs/@backstage/plugin-techdocs-node.md#200))

#### 2.0.0

##### Major Changes

- [`62d1a6f`](https://github.com/backstage/backstage/commit/62d1a6f): **BREAKING**: TechDocs generation now removes MkDocs plugins outside the built-in allowlist and logs a warning before continuing the build. To retain additional plugins, review and add them to `techdocs.generator.mkdocs.dangerouslyAllowAdditionalPlugins`, or supply them through `dangerouslyAllowAdditionalPlugins` when creating the generator directly. Plugins configured through `defaultPlugins` are also permitted. Generation stops if the MkDocs configuration cannot be read, parsed, or updated.

##### Minor Changes

- [`ee97130`](https://github.com/backstage/backstage/commit/ee97130): Added support for `techdocs.generator.pullOptions` when pulling the TechDocs generator Docker image from private registries that require authentication.

##### Patch Changes

- [`1711594`](https://github.com/backstage/backstage/commit/1711594): Fixed local TechDocs generation when temporary source paths resolve through filesystem aliases.
- [`c0ebaa7`](https://github.com/backstage/backstage/commit/c0ebaa7): chore(deps): bump `js-yaml` from 4.3.1 to 4.3.2
- [`e58d265`](https://github.com/backstage/backstage/commit/e58d265): Updated TechDocs generation to reject source trees containing symlinks that resolve outside the source directory.
- [`d13ad29`](https://github.com/backstage/backstage/commit/d13ad29): Improved MkDocs configuration handling for additional templates.
- [`e582b56`](https://github.com/backstage/backstage/commit/e582b56): Fixed AWS S3 publishing to paginate existing objects in order to properly remove all stale TechDocs files.
- [`2233af2`](https://github.com/backstage/backstage/commit/2233af2): Improved MkDocs configuration sanitization to cover additional nested configuration keys and theme options.
- [`4441911`](https://github.com/backstage/backstage/commit/4441911): Improved MkDocs configuration file handling.
- [`45cbd0a`](https://github.com/backstage/backstage/commit/45cbd0a): Improved validation of MkDocs configuration values during TechDocs generation.
- [`030331b`](https://github.com/backstage/backstage/commit/030331b): Improved file validation in the local TechDocs publisher during the publish step.

### `@backstage/ui` (0.17.1 → [0.18.0](../../changelogs/@backstage/ui.md#0180))

#### 0.18.0

##### Minor Changes

- [`d07e99e`](https://github.com/backstage/backstage/commit/d07e99e): Updated BUI links to use the hosting application's client-side router, including relative destinations and the application's configured router base path, while preserving native browser navigation where required.

  **BREAKING**: Anchor-based components no longer accept the React Aria `render` prop. BUI now owns the underlying anchor so routing behavior remains consistent across application and plugin package versions.

  ListRow, Tag, and table Row now retain client-side navigation when application and plugin packages load separate React Aria copies. Their existing modifier-key, target, download, and link-metadata behavior is unchanged.

  **Migration:**

  Remove `render` props from ButtonLink, ComboboxItem, Link, MenuItem, MenuListBoxItem, SearchAutocompleteItem, SelectItem, and Tab. BUI now selects and renders the appropriate anchor or router link automatically.

  **Affected components:** ButtonLink, Card, ComboboxItem, Header, Link, ListRow, MenuItem, MenuListBoxItem, Row, SearchAutocompleteItem, SelectItem, Tab, Tag

##### Patch Changes

- [`736d84e`](https://github.com/backstage/backstage/commit/736d84e): Use locale-insensitive Unicode casing for consistent string handling across environments.

  **Affected components:** Avatar

- [`f914343`](https://github.com/backstage/backstage/commit/f914343): Prevent BUI styles from overriding document and native control line heights while preserving BUI component typography.
- [`947c612`](https://github.com/backstage/backstage/commit/947c612): Fixed `TablePagination` page-size controls to stay synchronized with controlled values and handle empty option lists without crashing.

  **Affected components:** `TablePagination`

- [`c435198`](https://github.com/backstage/backstage/commit/c435198): Fixed an issue where using `PluginHeader` with `FullPage` caused the page to be unexpectedly scrollable. The `--bui-header-height` CSS variable now correctly accounts for the header's `margin-bottom`, preventing the layout from overflowing the viewport.
- [`c0b26db`](https://github.com/backstage/backstage/commit/c0b26db): Open `Combobox` suggestions when the input receives focus by default.

  **Affected components:** Combobox

- [`0dd80f7`](https://github.com/backstage/backstage/commit/0dd80f7): Fixed pagination state handling in `useTable`, including initial offsets, shrinking complete datasets, controlled loading transitions, valid zero and empty cursors, cached error recovery, immediately resolving reloads, and unnecessary reloads when controlled callback identities change.

  **Affected components:** `useTable`

## 0.x minor version bumps

### `@backstage/backend-defaults` (0.17.8 → [0.18.0](../../changelogs/@backstage/backend-defaults.md#0180))

#### 0.18.0

##### Minor Changes

- [`2e07985`](https://github.com/backstage/backstage/commit/2e07985): Add schemaPrefix configuration for pluginDivisionMode: schema. Allows prefixing PostgreSQL schema names to avoid conflicts with existing schemas.

##### Patch Changes

- [`fe6ace6`](https://github.com/backstage/backstage/commit/fe6ace6): Fixed `AwsS3UrlReader` and `AwsCodeCommitUrlReader` to resolve account-specific AWS credentials when an assume role ARN is configured, enabling support for `webIdentityTokenFile` and `accountDefaults` in environments without default AWS credentials.
- [`45d760b`](https://github.com/backstage/backstage/commit/45d760b): Improve action handling consistency.
- [`8d71644`](https://github.com/backstage/backstage/commit/8d71644): Reduced PostgreSQL connection churn during backend startup when many plugins initialize databases or schemas.
- [`416be1b`](https://github.com/backstage/backstage/commit/416be1b): Updated Harness URL reading to validate cross-origin redirect destinations
  against `backend.reading.allow`.
- [`c59472e`](https://github.com/backstage/backstage/commit/c59472e): Plugin route registration now rejects paths that differ only by letter casing,
  and HTTP credentials are resolved independently for each plugin service instance.
- [`5aac521`](https://github.com/backstage/backstage/commit/5aac521): Improved service credential handling during plugin-to-plugin delegation.
- [`61449ae`](https://github.com/backstage/backstage/commit/61449ae): Reduced PostgreSQL startup connections when multiple plugins share a database by reusing the database existence check.
- [`55f30b8`](https://github.com/backstage/backstage/commit/55f30b8): Reduced scheduler database polling overhead by batching readiness checks for global tasks registered by each plugin into one query per poll cycle on each backend instance.
- [`8b3c83e`](https://github.com/backstage/backstage/commit/8b3c83e): Improved input validation and path handling for cloud storage URL readers.
- [`61d97c0`](https://github.com/backstage/backstage/commit/61d97c0): Improved input validation for cloud storage URL readers.
- [`e895def`](https://github.com/backstage/backstage/commit/e895def): Fixed handling of GitLab URLs for instances configured with a relative base path.
- [`f6f339e`](https://github.com/backstage/backstage/commit/f6f339e): Fixed redundant signing-key requests when concurrently authenticating the first incoming requests from a plugin. Concurrent requests now share the same key cache, including when retrying after an initial fetch failure.
- [`e13e278`](https://github.com/backstage/backstage/commit/e13e278): Updated URL reader allow list matching so configured paths match either the exact path or paths below it at a segment boundary.
- [`e3b587c`](https://github.com/backstage/backstage/commit/e3b587c): Improve authentication reliability during signing key rotation by performing budgeted JWKS reloads when a newly published key is requested during the remote key set cooldown.

### `@backstage/plugin-catalog-backend-module-github` (0.13.5 → [0.14.0](../../changelogs/@backstage/plugin-catalog-backend-module-github.md#0140))

#### 0.14.0

##### Minor Changes

- [`6ecff59`](https://github.com/backstage/backstage/commit/6ecff59): The GitHub multi-org entity provider now logs a clear warning and aborts ingestion when no GitHub App installation is found for an org, instead of failing with a confusing rate-limit or authentication error. This prevents silent deletion of existing catalog entities.

##### Patch Changes

- [`736d84e`](https://github.com/backstage/backstage/commit/736d84e): Use locale-insensitive Unicode casing for consistent string handling across environments.

### `@backstage/plugin-notifications` (0.5.20 → [0.6.0](../../changelogs/@backstage/plugin-notifications.md#060))

#### 0.6.0

##### Minor Changes

- [`cd4a9c7`](https://github.com/backstage/backstage/commit/cd4a9c7): Added an unread notifications home page card and NFS home widget.

##### Patch Changes

- [`736d84e`](https://github.com/backstage/backstage/commit/736d84e): Use locale-insensitive Unicode casing for consistent string handling across environments.
- [`b31afcf`](https://github.com/backstage/backstage/commit/b31afcf): Fixed circular dependency warnings when building the notification settings UI.

### `@backstage/plugin-scaffolder-backend-module-gitlab` (0.11.10 → [0.12.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-gitlab.md#0120))

#### 0.12.0

##### Minor Changes

- [`5c14f42`](https://github.com/backstage/backstage/commit/5c14f42): The `gitlab:issues:create` action now accepts a full project path (e.g. `group/sub-group/project`) for `projectId`, and `projectId` is optional — when omitted the project is derived from `repoUrl` (matching the behaviour of `gitlab:merge-request`).

##### Patch Changes

- [`736d84e`](https://github.com/backstage/backstage/commit/736d84e): Use locale-insensitive Unicode casing for consistent string handling across environments.
- [`bbba6b5`](https://github.com/backstage/backstage/commit/bbba6b5): Added support for requiring user-provided credentials for GitLab mutation actions when `scaffolder.requireScmUserCredentials` is enabled.
- [`20595f0`](https://github.com/backstage/backstage/commit/20595f0): The `gitlab:projectVariable:create` action no longer includes the variable value in its checkpoint key, preventing secret values from being persisted in scaffolder task state. The `gitlab:pipeline:trigger` action has been refactored so that the temporary pipeline trigger token is never serialized into checkpoint state.
- [`4740660`](https://github.com/backstage/backstage/commit/4740660): Sped up `publish:gitlab:merge-request` and `gitlab:repo:push` by drastically reducing the number
  of GitLab API requests they make.

  Under the default `commitAction: 'auto'`, both actions previously downloaded the contents of every
  file already present on the target branch in order to work out which ones had actually changed.
  That information is available from the repository listing they already fetch, so the comparison is
  now done locally and those per-file requests are gone. The listing itself is also fetched in larger
  pages.

  For a merge request against a repository of a few hundred files this cuts the number of requests
  from roughly 300 to under ten, taking a step that took 5-15 seconds against a self-hosted GitLab
  down to about 3 seconds. Which files are created, updated or skipped is unchanged, including for
  repositories using git sha256 object format.

- [`3c7c082`](https://github.com/backstage/backstage/commit/3c7c082): Fixed `gitlab:repo:push` failing with `400 Bad request - Provide at least one action` when the workspace has no file changes to commit (e.g. re-running a template against an already up-to-date branch). The action now detects an empty action list, skips the commit API call, and logs a warning whenever `allowEmpty` is not true (covering both the default of unset and an explicit `false`). The `commitHash` output is omitted in this no-op case and is now declared optional. Pass `allowEmpty: true` to retain the previous behavior of forwarding an empty commit to GitLab.
- [`cd77db3`](https://github.com/backstage/backstage/commit/cd77db3): Added an `autoMerge` boolean input to the `publish:gitlab:merge-request` scaffolder action. When set to `true`, the merge request is automatically merged once all merge checks succeed, using GitLab's auto-merge feature.

## 0.x patch version bumps

### `@backstage/backend-dynamic-feature-service` (0.8.6 → [0.8.7](../../changelogs/@backstage/backend-dynamic-feature-service.md#087))

#### 0.8.7

##### Patch Changes

- [`064c2de`](https://github.com/backstage/backstage/commit/064c2de): Updated the Module Federation dependencies to versions that avoid known security vulnerabilities.

### `@backstage/backend-openapi-utils` (0.7.1 → [0.7.2](../../changelogs/@backstage/backend-openapi-utils.md#072))

#### 0.7.2

##### Patch Changes

- [`736d84e`](https://github.com/backstage/backstage/commit/736d84e): Use locale-insensitive Unicode casing for consistent string handling across environments.
- [`bf1f82d`](https://github.com/backstage/backstage/commit/bf1f82d): Added the required OpenAPI types dependency for Swagger Parser.

### `@backstage/cli` (0.36.5 → [0.36.6](../../changelogs/@backstage/cli.md#0366))

#### 0.36.6

##### Patch Changes

- [`89743dc`](https://github.com/backstage/backstage/commit/89743dc): Replaced the deprecated dependency used by `repo list-deprecations` with the equivalent TypeScript ESLint rule.

### `@backstage/cli-common` (0.3.0 → [0.3.1](../../changelogs/@backstage/cli-common.md#031))

#### 0.3.1

##### Patch Changes

- [`736d84e`](https://github.com/backstage/backstage/commit/736d84e): Use locale-insensitive Unicode casing for consistent string handling across environments.

### `@backstage/cli-defaults` (0.1.5 → [0.1.6](../../changelogs/@backstage/cli-defaults.md#016))

#### 0.1.6

##### Patch Changes

- [`de957f6`](https://github.com/backstage/backstage/commit/de957f6): Added `@backstage/cli-module-package-manager-yarn` with `backstage-cli pm
verify-patches` to validate Yarn patch references, local patch files,
  lockfile consistency, and patched Backstage package versions against the
  selected Backstage release. The command is included in
  `@backstage/cli-defaults`.

### `@backstage/cli-module-build` (0.1.7 → [0.1.8](../../changelogs/@backstage/cli-module-build.md#018))

#### 0.1.8

##### Patch Changes

- [`064c2de`](https://github.com/backstage/backstage/commit/064c2de): Updated the Module Federation dependencies to versions that avoid known security vulnerabilities.
- [`96badbc`](https://github.com/backstage/backstage/commit/96badbc): Fixed a bug where plugin packages installed through feature discovery were loaded before the app's own code ran. This could cause bootstrap-order-sensitive setup code in the app, such as configuring MUI 5's class name prefix, to be skipped if a discovered plugin's dependencies loaded MUI 5 components first. Discovered plugin packages are now loaded after the app's own code instead.
- [`b2b7568`](https://github.com/backstage/backstage/commit/b2b7568): Significantly improve the performance of `build-workspace` when packaging many Backstage packages.
- [`277a125`](https://github.com/backstage/backstage/commit/277a125): Fixed declaration bundling of imports that use the `node:` built-in module prefix.

### `@backstage/cli-module-maintenance` (0.1.4 → [0.1.5](../../changelogs/@backstage/cli-module-maintenance.md#015))

#### 0.1.5

##### Patch Changes

- [`89743dc`](https://github.com/backstage/backstage/commit/89743dc): Replaced the deprecated dependency used by `repo list-deprecations` with the equivalent TypeScript ESLint rule.

### `@backstage/cli-module-new` (0.1.6 → [0.1.7](../../changelogs/@backstage/cli-module-new.md#017))

#### 0.1.7

##### Patch Changes

- [`33c8190`](https://github.com/backstage/backstage/commit/33c8190): Updated the frontend plugin templates to use MSW 2 for generated tests.
- [`4cba335`](https://github.com/backstage/backstage/commit/4cba335): Fixes published entry point configurations so it can be imported reliably in Jest/Node resolution.

### `@backstage/cli-module-test-jest` (0.1.5 → [0.1.6](../../changelogs/@backstage/cli-module-test-jest.md#016))

#### 0.1.6

##### Patch Changes

- [`33c8190`](https://github.com/backstage/backstage/commit/33c8190): Made the test network request guard compatible with MSW 2 request handlers.

### `@backstage/core-components` (0.18.13 → [0.18.14](../../changelogs/@backstage/core-components.md#01814))

#### 0.18.14

##### Patch Changes

- [`b80a9f3`](https://github.com/backstage/backstage/commit/b80a9f3): Added an `onCopyLog` prop to the `LogViewer` component that renders a copy button in the toolbar, allowing users to copy all log content to the clipboard.
- [`736d84e`](https://github.com/backstage/backstage/commit/736d84e): Use locale-insensitive Unicode casing for consistent string handling across environments.
- [`a15bac8`](https://github.com/backstage/backstage/commit/a15bac8): Added an optional `variant` prop to `CopyTextButton` to allow configuring its visual style (`primary`, `secondary`, or `tertiary`).
- [`c0ebaa7`](https://github.com/backstage/backstage/commit/c0ebaa7): chore(deps): bump `js-yaml` from 4.3.1 to 4.3.2
- [`bfb6497`](https://github.com/backstage/backstage/commit/bfb6497): Fixed `CopyTextButton` showing its tooltip on hover/focus instead of only after the user clicks to copy the text.
- [`279fdf6`](https://github.com/backstage/backstage/commit/279fdf6): Declared the DOM Testing Library dependency required by React Testing Library.
- [`f2b5407`](https://github.com/backstage/backstage/commit/f2b5407): Updated dependency `react-idle-timer` to `5.7.3`.
- [`d9a949e`](https://github.com/backstage/backstage/commit/d9a949e): Added support for rendering custom link elements inside `HeaderIconLinkRow`.

### `@backstage/create-app` (0.9.1 → [0.9.2](../../changelogs/@backstage/create-app.md#092))

#### 0.9.2

##### Patch Changes

- [`736d84e`](https://github.com/backstage/backstage/commit/736d84e): Use locale-insensitive Unicode casing for consistent string handling across environments.
- [`1a8a90c`](https://github.com/backstage/backstage/commit/1a8a90c): Bumped create-app version.
- [`6eec9b5`](https://github.com/backstage/backstage/commit/6eec9b5): Bumped create-app version.
- [`c3150c3`](https://github.com/backstage/backstage/commit/c3150c3): Bumped create-app version.

### `@backstage/filter-predicates` (0.1.4 → [0.1.5](../../changelogs/@backstage/filter-predicates.md#015))

#### 0.1.5

##### Patch Changes

- [`736d84e`](https://github.com/backstage/backstage/commit/736d84e): Use locale-insensitive Unicode casing for consistent string handling across environments.
- [`603e704`](https://github.com/backstage/backstage/commit/603e704): The JSON Schema exported for filter predicates can now be compiled by validators built on RE2 (for example Go's `regexp`, used by Amazon Bedrock AgentCore Gateway), which previously rejected the predicate key pattern and failed every call to tools such as `query-catalog-entities`. Accepted keys are unchanged, except that a key whose first character is U+2028 or U+2029 is no longer rejected.
- [`6dcb08a`](https://github.com/backstage/backstage/commit/6dcb08a): Reduced the frontend bundle size by letting bundlers tree-shake zod, which previously pulled every zod locale into the bundle. Takes effect on zod 4.5.0 and newer.

### `@backstage/frontend-app-api` (0.16.7 → [0.16.8](../../changelogs/@backstage/frontend-app-api.md#0168))

#### 0.16.8

##### Patch Changes

- [`52022b9`](https://github.com/backstage/backstage/commit/52022b9): Fixed `app.extensions` shorthand and `disabled` field to accept boolean-ish strings (`'true'`/`'false'`), so environment variable substitution can be used to toggle extensions, e.g. `${CATALOG_OVERVIEW_ENABLED}`.

### `@backstage/frontend-dynamic-feature-loader` (0.1.15 → [0.1.16](../../changelogs/@backstage/frontend-dynamic-feature-loader.md#0116))

#### 0.1.16

##### Patch Changes

- [`064c2de`](https://github.com/backstage/backstage/commit/064c2de): Updated the Module Federation dependencies to versions that avoid known security vulnerabilities.

### `@backstage/frontend-plugin-api` (0.18.0 → [0.18.1](../../changelogs/@backstage/frontend-plugin-api.md#0181))

#### 0.18.1

##### Patch Changes

- [`024c0ef`](https://github.com/backstage/backstage/commit/024c0ef): Updated internal type imports to avoid circular declaration chunks in package builds.
- [`bd6cf43`](https://github.com/backstage/backstage/commit/bd6cf43): Fixed a bug where overriding a plugin extension with `withOverrides` moved the overridden extension to the end of the plugin's extension list. This caused overridden extensions to lose their original position, for example making an overridden sub page tab move to the end of the tabs on its page. Overridden extensions now keep their original order, while extensions that don't override an existing one are appended at the end.

### `@backstage/frontend-test-utils` (0.6.3 → [0.6.4](../../changelogs/@backstage/frontend-test-utils.md#064))

#### 0.6.4

##### Patch Changes

- [`279fdf6`](https://github.com/backstage/backstage/commit/279fdf6): Declared the DOM Testing Library dependency required by React Testing Library.

### `@backstage/module-federation-common` (0.1.4 → [0.1.5](../../changelogs/@backstage/module-federation-common.md#015))

#### 0.1.5

##### Patch Changes

- [`064c2de`](https://github.com/backstage/backstage/commit/064c2de): Updated the Module Federation dependencies to versions that avoid known security vulnerabilities.

### `@backstage/plugin-api-docs` (0.14.4 → [0.14.5](../../changelogs/@backstage/plugin-api-docs.md#0145))

#### 0.14.5

##### Patch Changes

- [`736d84e`](https://github.com/backstage/backstage/commit/736d84e): Use locale-insensitive Unicode casing for consistent string handling across environments.
- [`4b643e3`](https://github.com/backstage/backstage/commit/4b643e3): Migrate plugin-api-docs to the configSchema API to remove the deprecated config.schema usage.

### `@backstage/plugin-app` (0.5.2 → [0.5.3](../../changelogs/@backstage/plugin-app.md#053))

#### 0.5.3

##### Patch Changes

- [`d421187`](https://github.com/backstage/backstage/commit/d421187): Reduced the initial app bundle size by loading page and optional UI implementations only when their extensions render.
- [`f914343`](https://github.com/backstage/backstage/commit/f914343): Fixed toast text layout when the application does not define a global line height.

### `@backstage/plugin-app-module-user-settings` (0.1.1 → [0.1.2](../../changelogs/@backstage/plugin-app-module-user-settings.md#012))

#### 0.1.2

##### Patch Changes

- [`4cba335`](https://github.com/backstage/backstage/commit/4cba335): Fixes published entry point configurations so it can be imported reliably in Jest/Node resolution.

### `@backstage/plugin-app-react` (0.2.6 → [0.2.7](../../changelogs/@backstage/plugin-app-react.md#027))

#### 0.2.7

##### Patch Changes

- [`40838dc`](https://github.com/backstage/backstage/commit/40838dc): Added an extension boundary around custom navigation content.

### `@backstage/plugin-auth-backend` (0.30.0 → [0.30.1](../../changelogs/@backstage/plugin-auth-backend.md#0301))

#### 0.30.1

##### Patch Changes

- [`736d84e`](https://github.com/backstage/backstage/commit/736d84e): Use locale-insensitive Unicode casing for consistent string handling across environments.
- [`08c5d9b`](https://github.com/backstage/backstage/commit/08c5d9b): Fixed inconsistent URL pattern matching in token revocation.

### `@backstage/plugin-auth-backend-module-azure-easyauth-provider` (0.2.23 → [0.2.24](../../changelogs/@backstage/plugin-auth-backend-module-azure-easyauth-provider.md#0224))

#### 0.2.24

##### Patch Changes

- [`736d84e`](https://github.com/backstage/backstage/commit/736d84e): Use locale-insensitive Unicode casing for consistent string handling across environments.

### `@backstage/plugin-auth-backend-module-github-provider` (0.5.6 → [0.5.7](../../changelogs/@backstage/plugin-auth-backend-module-github-provider.md#057))

#### 0.5.7

##### Patch Changes

- [`211a61a`](https://github.com/backstage/backstage/commit/211a61a): Deprecated the GitHub username sign-in resolver in favor of the stable user ID resolver. GitHub user ID catalog lookups now require an exact match and handle candidates that differ only by letter casing.

### `@backstage/plugin-auth-backend-module-microsoft-provider` (0.3.18 → [0.3.19](../../changelogs/@backstage/plugin-auth-backend-module-microsoft-provider.md#0319))

#### 0.3.19

##### Patch Changes

- [`736d84e`](https://github.com/backstage/backstage/commit/736d84e): Use locale-insensitive Unicode casing for consistent string handling across environments.

### `@backstage/plugin-auth-backend-module-oauth2-proxy-provider` (0.3.2 → [0.3.3](../../changelogs/@backstage/plugin-auth-backend-module-oauth2-proxy-provider.md#033))

#### 0.3.3

##### Patch Changes

- [`736d84e`](https://github.com/backstage/backstage/commit/736d84e): Use locale-insensitive Unicode casing for consistent string handling across environments.

### `@backstage/plugin-auth-backend-module-oidc-provider` (0.4.20 → [0.4.21](../../changelogs/@backstage/plugin-auth-backend-module-oidc-provider.md#0421))

#### 0.4.21

##### Patch Changes

- [`a818233`](https://github.com/backstage/backstage/commit/a818233): Omit email addresses from the default OIDC profile unless the identity provider marks them as verified.

### `@backstage/plugin-auth-backend-module-pinniped-provider` (0.3.17 → [0.3.18](../../changelogs/@backstage/plugin-auth-backend-module-pinniped-provider.md#0318))

#### 0.3.18

##### Patch Changes

- [`623e9d4`](https://github.com/backstage/backstage/commit/623e9d4): Prevented an unavailable Pinniped supervisor during provider startup from causing an unhandled promise rejection before the first authentication request.

### `@backstage/plugin-auth-node` (0.7.5 → [0.7.6](../../changelogs/@backstage/plugin-auth-node.md#076))

#### 0.7.6

##### Patch Changes

- [`507e65a`](https://github.com/backstage/backstage/commit/507e65a): OAuth profile normalization now respects matching negative email verification information supplied by the provider.

### `@backstage/plugin-bitbucket-cloud-common` (0.3.12 → [0.3.13](../../changelogs/@backstage/plugin-bitbucket-cloud-common.md#0313))

#### 0.3.13

##### Patch Changes

- [`0c1b8ee`](https://github.com/backstage/backstage/commit/0c1b8ee): Updated the OpenAPI generator tooling to avoid known security vulnerabilities.

### `@backstage/plugin-catalog-backend-module-aws` (0.4.27 → [0.4.28](../../changelogs/@backstage/plugin-catalog-backend-module-aws.md#0428))

#### 0.4.28

##### Patch Changes

- [`8b3c83e`](https://github.com/backstage/backstage/commit/8b3c83e): Improved handling of AWS S3 object keys when creating catalog locations.
- [`736d84e`](https://github.com/backstage/backstage/commit/736d84e): Use locale-insensitive Unicode casing for consistent string handling across environments.

### `@backstage/plugin-catalog-backend-module-azure` (0.3.21 → [0.3.22](../../changelogs/@backstage/plugin-catalog-backend-module-azure.md#0322))

#### 0.3.22

##### Patch Changes

- [`8b3c83e`](https://github.com/backstage/backstage/commit/8b3c83e): Improved handling of Azure Blob Storage blob names when creating catalog locations.

### `@backstage/plugin-catalog-backend-module-bitbucket-server` (0.5.14 → [0.5.15](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-server.md#0515))

#### 0.5.15

##### Patch Changes

- [`989db63`](https://github.com/backstage/backstage/commit/989db63): Aligned event-driven catalog updates with the repository filters configured for the Bitbucket Server provider.

### `@backstage/plugin-catalog-backend-module-gitlab` (0.8.7 → [0.8.8](../../changelogs/@backstage/plugin-catalog-backend-module-gitlab.md#088))

#### 0.8.8

##### Patch Changes

- [`348bea1`](https://github.com/backstage/backstage/commit/348bea1): Fixed `GitlabDiscoveryEntityProvider` to only process push events targeting the configured branch.
- [`b7db066`](https://github.com/backstage/backstage/commit/b7db066): Fixed a scope validation issue in GitLab organization discovery.

### `@backstage/plugin-catalog-backend-module-ldap` (0.12.8 → [0.12.9](../../changelogs/@backstage/plugin-catalog-backend-module-ldap.md#0129))

#### 0.12.9

##### Patch Changes

- [`736d84e`](https://github.com/backstage/backstage/commit/736d84e): Use locale-insensitive Unicode casing for consistent string handling across environments.

### `@backstage/plugin-catalog-backend-module-msgraph` (0.10.5 → [0.10.6](../../changelogs/@backstage/plugin-catalog-backend-module-msgraph.md#0106))

#### 0.10.6

##### Patch Changes

- [`736d84e`](https://github.com/backstage/backstage/commit/736d84e): Use locale-insensitive Unicode casing for consistent string handling across environments.
- [`7ac10da`](https://github.com/backstage/backstage/commit/7ac10da): Fixed accumulating abort listeners on `MicrosoftGraphClient`.

### `@backstage/plugin-catalog-backend-module-puppetdb` (0.2.25 → [0.2.26](../../changelogs/@backstage/plugin-catalog-backend-module-puppetdb.md#0226))

#### 0.2.26

##### Patch Changes

- [`736d84e`](https://github.com/backstage/backstage/commit/736d84e): Use locale-insensitive Unicode casing for consistent string handling across environments.

### `@backstage/plugin-catalog-graph` (0.6.7 → [0.6.8](../../changelogs/@backstage/plugin-catalog-graph.md#068))

#### 0.6.8

##### Patch Changes

- [`736d84e`](https://github.com/backstage/backstage/commit/736d84e): Use locale-insensitive Unicode casing for consistent string handling across environments.

### `@backstage/plugin-catalog-import` (0.13.17 → [0.13.18](../../changelogs/@backstage/plugin-catalog-import.md#01318))

#### 0.13.18

##### Patch Changes

- [`736d84e`](https://github.com/backstage/backstage/commit/736d84e): Use locale-insensitive Unicode casing for consistent string handling across environments.
- [`5d6a62b`](https://github.com/backstage/backstage/commit/5d6a62b): Fixed the owner selected in the import stepper being written to the generated `catalog-info.yaml` as a display name instead of an entity reference. Groups are still suggested by their display name, but selecting one now sets a valid `spec.owner`, for example picking `My Team` results in `my-team`.
- [`d421187`](https://github.com/backstage/backstage/commit/d421187): Reduced the initial app bundle size by loading page and optional UI implementations only when their extensions render.

### `@backstage/plugin-catalog-unprocessed-entities` (0.2.34 → [0.2.35](../../changelogs/@backstage/plugin-catalog-unprocessed-entities.md#0235))

#### 0.2.35

##### Patch Changes

- [`736d84e`](https://github.com/backstage/backstage/commit/736d84e): Use locale-insensitive Unicode casing for consistent string handling across environments.
- [`d421187`](https://github.com/backstage/backstage/commit/d421187): Reduced the initial app bundle size by loading page and optional UI implementations only when their extensions render.

### `@backstage/plugin-devtools` (0.1.42 → [0.1.43](../../changelogs/@backstage/plugin-devtools.md#0143))

#### 0.1.43

##### Patch Changes

- [`d421187`](https://github.com/backstage/backstage/commit/d421187): Reduced the initial app bundle size by loading page and optional UI implementations only when their extensions render.
- [`38441ff`](https://github.com/backstage/backstage/commit/38441ff): Migrate to toastApi from deprecated alertApi

### `@backstage/plugin-home` (0.9.9 → [0.9.10](../../changelogs/@backstage/plugin-home.md#0910))

#### 0.9.10

##### Patch Changes

- [`736d84e`](https://github.com/backstage/backstage/commit/736d84e): Use locale-insensitive Unicode casing for consistent string handling across environments.
- [`d421187`](https://github.com/backstage/backstage/commit/d421187): Reduced the initial app bundle size by loading page and optional UI implementations only when their extensions render.
- [`bca8281`](https://github.com/backstage/backstage/commit/bca8281): Fix clock configuration handling and use lazy initialization for the clocks state.

### `@backstage/plugin-home-react` (0.1.41 → [0.1.42](../../changelogs/@backstage/plugin-home-react.md#0142))

#### 0.1.42

##### Patch Changes

- [`cd4a9c7`](https://github.com/backstage/backstage/commit/cd4a9c7): Fixed `CardExtension` to avoid requiring app context when a custom `Renderer` is provided.

### `@backstage/plugin-kubernetes` (0.12.22 → [0.12.23](../../changelogs/@backstage/plugin-kubernetes.md#01223))

#### 0.12.23

##### Patch Changes

- [`83f34f2`](https://github.com/backstage/backstage/commit/83f34f2): The Kubernetes entity content no longer loads its UI until the tab is opened, keeping it out of the initial bundle. Tab visibility is now an entity filter predicate that can be overridden through app config, and entities with an empty Kubernetes annotation now show the tab where previously it was hidden.

### `@backstage/plugin-kubernetes-backend` (0.21.10 → [0.21.11](../../changelogs/@backstage/plugin-kubernetes-backend.md#02111))

#### 0.21.11

##### Patch Changes

- [`736d84e`](https://github.com/backstage/backstage/commit/736d84e): Use locale-insensitive Unicode casing for consistent string handling across environments.
- [`1d7b704`](https://github.com/backstage/backstage/commit/1d7b704): Reject unsupported service account authentication in catalog-provided cluster definitions.
- [`b11c9b4`](https://github.com/backstage/backstage/commit/b11c9b4): Improved entity resolution on the deprecated services endpoint.
- [`5268d63`](https://github.com/backstage/backstage/commit/5268d63): Migrated tests from MSW v1 to MSW v2.
- [`ad8f2a8`](https://github.com/backstage/backstage/commit/ad8f2a8): Added actions to get kubernetes clusters and entity resources
- [`28bdf75`](https://github.com/backstage/backstage/commit/28bdf75): Improved handling of Kubernetes resource response data.
- [`97a7e8e`](https://github.com/backstage/backstage/commit/97a7e8e): The catalog cluster locator now validates Kubernetes API server URLs to block SSRF targets (non-public addresses, cloud metadata endpoints, and non-HTTPS URLs by default). Operators may list trusted hostnames in `dangerouslyAllowClusterUrls` on the catalog locator method to permit HTTP or non-public addresses for those hosts only (for example local minikube). Catalog entities cannot use the `serviceAccount` auth provider, cannot enable TLS verification skipping unless `dangerouslyAllowSkipTLSVerify` is set on the locator method, and only permitted annotations are passed through as auth metadata. Kubernetes API fetches no longer follow HTTP redirects automatically.
- [`d9a57de`](https://github.com/backstage/backstage/commit/d9a57de): Add `KubernetesWatcher` interface for streaming Kubernetes resource changes via an async iterator. The watcher is separated from `KubernetesFetcher` because watching is a long-lived streaming connection that only works with server-side auth providers. Watch supports all event types (ADDED, MODIFIED, DELETED, BOOKMARK, ERROR) with errors yielded as data rather than thrown.

### `@backstage/plugin-kubernetes-common` (0.9.12 → [0.9.13](../../changelogs/@backstage/plugin-kubernetes-common.md#0913))

#### 0.9.13

##### Patch Changes

- [`d9a57de`](https://github.com/backstage/backstage/commit/d9a57de): Add `KubernetesWatcher` interface for streaming Kubernetes resource changes via an async iterator. The watcher is separated from `KubernetesFetcher` because watching is a long-lived streaming connection that only works with server-side auth providers. Watch supports all event types (ADDED, MODIFIED, DELETED, BOOKMARK, ERROR) with errors yielded as data rather than thrown.

### `@backstage/plugin-kubernetes-node` (0.4.7 → [0.4.8](../../changelogs/@backstage/plugin-kubernetes-node.md#048))

#### 0.4.8

##### Patch Changes

- [`5268d63`](https://github.com/backstage/backstage/commit/5268d63): Migrated tests from MSW v1 to MSW v2.
- [`d9a57de`](https://github.com/backstage/backstage/commit/d9a57de): Add `KubernetesWatcher` interface for streaming Kubernetes resource changes via an async iterator. The watcher is separated from `KubernetesFetcher` because watching is a long-lived streaming connection that only works with server-side auth providers. Watch supports all event types (ADDED, MODIFIED, DELETED, BOOKMARK, ERROR) with errors yielded as data rather than thrown.

### `@backstage/plugin-mcp-actions-backend` (0.2.1 → [0.2.2](../../changelogs/@backstage/plugin-mcp-actions-backend.md#022))

#### 0.2.2

##### Patch Changes

- [`4a27653`](https://github.com/backstage/backstage/commit/4a27653): The default MCP server at `/api/mcp-actions/v1` is now always exposed. Previously, configuring `mcpActions.servers` replaced it, so the default endpoint was no longer served once a single named server was added. Named servers are now subsets of the default one, which continues to expose every registered action, so the same action can be exposed both there and on as many named servers as you like.

### `@backstage/plugin-notifications-backend` (0.6.8 → [0.6.9](../../changelogs/@backstage/plugin-notifications-backend.md#069))

#### 0.6.9

##### Patch Changes

- [`736d84e`](https://github.com/backstage/backstage/commit/736d84e): Use locale-insensitive Unicode casing for consistent string handling across environments.

### `@backstage/plugin-notifications-backend-module-email` (0.3.24 → [0.3.25](../../changelogs/@backstage/plugin-notifications-backend-module-email.md#0325))

#### 0.3.25

##### Patch Changes

- [`041656a`](https://github.com/backstage/backstage/commit/041656a): chore(deps): bump `nodemailer` from 9.0.4 to 9.1.1
- [`2a19159`](https://github.com/backstage/backstage/commit/2a19159): Hardened notification email delivery with format validation and optional `allowedEmailDomains`. Invalid or disallowed addresses are skipped; `allowlistEmailAddresses` and `denylistEmailAddresses` match case-insensitively, allowlist still overrides the domain list, and denied addresses win last.
- [`80a548a`](https://github.com/backstage/backstage/commit/80a548a): Added `resolveNotificationLink` utility function that resolves relative notification links to absolute URLs using a provided base URL. This can be used by notification processor modules to ensure links are absolute before forwarding them to external systems.

### `@backstage/plugin-notifications-backend-module-slack` (0.4.5 → [0.4.6](../../changelogs/@backstage/plugin-notifications-backend-module-slack.md#046))

#### 0.4.6

##### Patch Changes

- [`0325d26`](https://github.com/backstage/backstage/commit/0325d26): chore(deps-dev): bump `@faker-js/faker` from 10.4.0 to 10.5.0
- [`80a548a`](https://github.com/backstage/backstage/commit/80a548a): Added `resolveNotificationLink` utility function that resolves relative notification links to absolute URLs using a provided base URL. This can be used by notification processor modules to ensure links are absolute before forwarding them to external systems.

### `@backstage/plugin-notifications-node` (0.2.29 → [0.2.30](../../changelogs/@backstage/plugin-notifications-node.md#0230))

#### 0.2.30

##### Patch Changes

- [`80a548a`](https://github.com/backstage/backstage/commit/80a548a): Added `resolveNotificationLink` utility function that resolves relative notification links to absolute URLs using a provided base URL. This can be used by notification processor modules to ensure links are absolute before forwarding them to external systems.

### `@backstage/plugin-org` (0.7.8 → [0.7.9](../../changelogs/@backstage/plugin-org.md#079))

#### 0.7.9

##### Patch Changes

- [`736d84e`](https://github.com/backstage/backstage/commit/736d84e): Use locale-insensitive Unicode casing for consistent string handling across environments.
- [`fe0ec65`](https://github.com/backstage/backstage/commit/fe0ec65): Fixed ownership card catalog links to filter by stable entity references instead of display titles.

### `@backstage/plugin-proxy-backend` (0.6.17 → [0.6.18](../../changelogs/@backstage/plugin-proxy-backend.md#0618))

#### 0.6.18

##### Patch Changes

- [`736d84e`](https://github.com/backstage/backstage/commit/736d84e): Use locale-insensitive Unicode casing for consistent string handling across environments.
- [`42580a2`](https://github.com/backstage/backstage/commit/42580a2): Improved request path handling in the proxy-backend.
- [`9df9292`](https://github.com/backstage/backstage/commit/9df9292): Ensure HTTP proxy requests consistently apply their configured credential requirements.

### `@backstage/plugin-scaffolder-backend-module-azure` (0.2.25 → [0.2.26](../../changelogs/@backstage/plugin-scaffolder-backend-module-azure.md#0226))

#### 0.2.26

##### Patch Changes

- [`bbba6b5`](https://github.com/backstage/backstage/commit/bbba6b5): Added support for requiring user-provided credentials for Azure DevOps mutation actions when `scaffolder.requireScmUserCredentials` is enabled.

### `@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` (0.3.10 → [0.3.11](../../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket-cloud.md#0311))

#### 0.3.11

##### Patch Changes

- [`40c64a0`](https://github.com/backstage/backstage/commit/40c64a0): Fixed a security issue in pull request workspace handling.
- [`bbba6b5`](https://github.com/backstage/backstage/commit/bbba6b5): Added support for requiring user-provided credentials for Bitbucket Cloud mutation actions when `scaffolder.requireScmUserCredentials` is enabled.

### `@backstage/plugin-scaffolder-backend-module-bitbucket-server` (0.2.25 → [0.2.26](../../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket-server.md#0226))

#### 0.2.26

##### Patch Changes

- [`40c64a0`](https://github.com/backstage/backstage/commit/40c64a0): Fixed a security issue in pull request workspace handling.
- [`bbba6b5`](https://github.com/backstage/backstage/commit/bbba6b5): Added support for requiring user-provided credentials for Bitbucket Server mutation actions when `scaffolder.requireScmUserCredentials` is enabled.

### `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.3.25 → [0.3.26](../../changelogs/@backstage/plugin-scaffolder-backend-module-confluence-to-markdown.md#0326))

#### 0.3.26

##### Patch Changes

- [`6e11531`](https://github.com/backstage/backstage/commit/6e11531): Improve handling of imported Confluence attachments
- [`3026628`](https://github.com/backstage/backstage/commit/3026628): Validate repository file paths before transforming Confluence content.

### `@backstage/plugin-scaffolder-backend-module-gcp` (0.2.24 → [0.2.25](../../changelogs/@backstage/plugin-scaffolder-backend-module-gcp.md#0225))

#### 0.2.25

##### Patch Changes

- [`e95b649`](https://github.com/backstage/backstage/commit/e95b649): Added new config path `scaffolder.taskRecovery.gcsBucket.name` for GCS workspace provider. The previous `EXPERIMENTAL_workspaceSerializationGcpBucketName` config is still supported as a fallback. Workspace upload failures are now propagated so that a task does not record a completed step without its corresponding workspace.

### `@backstage/plugin-scaffolder-node` (0.13.6 → [0.13.7](../../changelogs/@backstage/plugin-scaffolder-node.md#0137))

#### 0.13.7

##### Patch Changes

- [`3bb3710`](https://github.com/backstage/backstage/commit/3bb3710): Added optional cancellation support when waiting to claim a scaffolder task.
- [`e95b649`](https://github.com/backstage/backstage/commit/e95b649): Added task recovery feature with new `scaffolder.taskRecovery` config section. When enabled, tasks that crash or timeout are automatically recovered and resume from the last completed step, task secrets are retained until the task reaches a terminal state so recovery can continue, and completed step outputs are persisted. Enabling recovery applies to all scaffolder tasks, so actions used by those tasks should be idempotent or use checkpoints. When recovery is disabled (the default), the previous behavior is unchanged: secrets are cleared as soon as a task is claimed and retries re-run every step. The new config consolidates previous experimental flags (`EXPERIMENTAL_recoverTasks`, `EXPERIMENTAL_workspaceSerialization`, `EXPERIMENTAL_recoverTasksTimeout`) which remain supported as fallbacks. The legacy workspace provider setting continues to select a provider only when `EXPERIMENTAL_workspaceSerialization` is `true`.

  Workspace serialization for task recovery now requires installing a separate workspace provider module, including when you use the legacy configuration. For development, use `@backstage/plugin-scaffolder-backend-module-workspace-database` (50 MB limit, not recommended for production). On first startup, that module migrates existing database workspace snapshots from the legacy task storage. For production, use `@backstage/plugin-scaffolder-backend-module-gcp` or a similar external storage provider. The scaffolder rejects a configured provider that has not been installed and registered.

  Enabling crash recovery does not keep completed task event streams open; normal task completion remains terminal for event-stream clients.

### `@backstage/plugin-search-backend-module-catalog` (0.3.18 → [0.3.19](../../changelogs/@backstage/plugin-search-backend-module-catalog.md#0319))

#### 0.3.19

##### Patch Changes

- [`979c255`](https://github.com/backstage/backstage/commit/979c255): Improved catalog indexing performance by using cursor pagination for TechDocs and avoiding unused total item counts in search collators.

### `@backstage/plugin-search-backend-module-techdocs` (0.4.17 → [0.4.18](../../changelogs/@backstage/plugin-search-backend-module-techdocs.md#0418))

#### 0.4.18

##### Patch Changes

- [`736d84e`](https://github.com/backstage/backstage/commit/736d84e): Use locale-insensitive Unicode casing for consistent string handling across environments.
- [`979c255`](https://github.com/backstage/backstage/commit/979c255): Improved catalog indexing performance by using cursor pagination for TechDocs and avoiding unused total item counts in search collators.

### `@backstage/plugin-signals-backend` (0.3.18 → [0.3.19](../../changelogs/@backstage/plugin-signals-backend.md#0319))

#### 0.3.19

##### Patch Changes

- [`0ae9229`](https://github.com/backstage/backstage/commit/0ae9229): Fixed WebSocket upgrade error responses to prevent load balancers from returning 502 when authentication fails. Error responses now use valid HTTP headers, ensuring the actual error status (401 or 500) is delivered to the client instead of being masked.

### `@backstage/plugin-user-settings` (0.9.6 → [0.9.7](../../changelogs/@backstage/plugin-user-settings.md#097))

#### 0.9.7

##### Patch Changes

- [`736d84e`](https://github.com/backstage/backstage/commit/736d84e): Use locale-insensitive Unicode casing for consistent string handling across environments.
- [`d421187`](https://github.com/backstage/backstage/commit/d421187): Reduced the initial app bundle size by loading page and optional UI implementations only when their extensions render.

### `@backstage/repo-tools` (0.19.0 → [0.19.1](../../changelogs/@backstage/repo-tools.md#0191))

#### 0.19.1

##### Patch Changes

- [`736d84e`](https://github.com/backstage/backstage/commit/736d84e): Use locale-insensitive Unicode casing for consistent string handling across environments.
- [`c0ebaa7`](https://github.com/backstage/backstage/commit/c0ebaa7): chore(deps): bump `js-yaml` from 4.3.1 to 4.3.2
- [`bf1f82d`](https://github.com/backstage/backstage/commit/bf1f82d): Added the required OpenAPI types dependency for Swagger Parser.
- [`0c1b8ee`](https://github.com/backstage/backstage/commit/0c1b8ee): Updated the OpenAPI generator tooling to avoid known security vulnerabilities.

## Other minor version bumps

### `@backstage/plugin-catalog-common` (1.1.10 → [1.2.0](../../changelogs/@backstage/plugin-catalog-common.md#120))

#### 1.2.0

##### Minor Changes

- [`305e2f7`](https://github.com/backstage/backstage/commit/305e2f7): Added permissions for reading and managing catalog ingestion providers.

### `@backstage/plugin-scaffolder` (1.38.2 → [1.39.0](../../changelogs/@backstage/plugin-scaffolder.md#1390))

#### 1.39.0

##### Minor Changes

- [`1b99861`](https://github.com/backstage/backstage/commit/1b99861): The `sub-page:scaffolder/templates` extension now accepts a `templateFilter` field that lets you filter which templates are shown on the template list page.
- [`e060bd4`](https://github.com/backstage/backstage/commit/e060bd4): Added new `ui:options` to `RepoUrlPicker` for per-template customization: `ownerLabel`, `ownerDescription`, `repoLabel`, `repoDescription` to override field labels, and `disableRepoAutocomplete` to render a plain text input instead of the autocomplete dropdown.
- [`5ff93bf`](https://github.com/backstage/backstage/commit/5ff93bf): Added functionality to register a Template Outputs Component in the new frontend system.

##### Patch Changes

- [`736d84e`](https://github.com/backstage/backstage/commit/736d84e): Use locale-insensitive Unicode casing for consistent string handling across environments.
- [`cfba1bc`](https://github.com/backstage/backstage/commit/cfba1bc): Updated internal type definitions. No changes to runtime behavior or public API.

### `@backstage/plugin-scaffolder-backend` (4.1.0 → [4.2.0](../../changelogs/@backstage/plugin-scaffolder-backend.md#420))

#### 4.2.0

##### Minor Changes

- [`09f42dd`](https://github.com/backstage/backstage/commit/09f42dd): export workspace:template\* actions by default
- [`1a705ca`](https://github.com/backstage/backstage/commit/1a705ca): Applied `templateDryRunPermission` to inline Software Template dry runs and the corresponding backend action. Permission policies that deny unknown permissions must explicitly allow `scaffolder.template.dry-run` to retain existing dry-run access.
- [`e95b649`](https://github.com/backstage/backstage/commit/e95b649): Added task recovery feature with new `scaffolder.taskRecovery` config section. When enabled, tasks that crash or timeout are automatically recovered and resume from the last completed step, task secrets are retained until the task reaches a terminal state so recovery can continue, and completed step outputs are persisted. Enabling recovery applies to all scaffolder tasks, so actions used by those tasks should be idempotent or use checkpoints. When recovery is disabled (the default), the previous behavior is unchanged: secrets are cleared as soon as a task is claimed and retries re-run every step. The new config consolidates previous experimental flags (`EXPERIMENTAL_recoverTasks`, `EXPERIMENTAL_workspaceSerialization`, `EXPERIMENTAL_recoverTasksTimeout`) which remain supported as fallbacks. The legacy workspace provider setting continues to select a provider only when `EXPERIMENTAL_workspaceSerialization` is `true`.

  Workspace serialization for task recovery now requires installing a separate workspace provider module, including when you use the legacy configuration. For development, use `@backstage/plugin-scaffolder-backend-module-workspace-database` (50 MB limit, not recommended for production). On first startup, that module migrates existing database workspace snapshots from the legacy task storage. For production, use `@backstage/plugin-scaffolder-backend-module-gcp` or a similar external storage provider. The scaffolder rejects a configured provider that has not been installed and registered.

  Enabling crash recovery does not keep completed task event streams open; normal task completion remains terminal for event-stream clients.

- [`bbba6b5`](https://github.com/backstage/backstage/commit/bbba6b5): Added the `scaffolder.requireScmUserCredentials` configuration option to require user-provided credentials for supported SCM mutation and fetch actions.

##### Patch Changes

- [`736d84e`](https://github.com/backstage/backstage/commit/736d84e): Use locale-insensitive Unicode casing for consistent string handling across environments.
- [`7fba55a`](https://github.com/backstage/backstage/commit/7fba55a): Removed user entity references from scaffolder task count metrics to avoid exposing user identities and creating high-cardinality metric labels.
- [`b1256aa`](https://github.com/backstage/backstage/commit/b1256aa): Respect task read permission decisions when listing scaffolder tasks.
- [`15fa029`](https://github.com/backstage/backstage/commit/15fa029): Restrict task list ordering to supported fields.
- [`be0a75a`](https://github.com/backstage/backstage/commit/be0a75a): Exclude internal task data from task responses.
- [`2bf1392`](https://github.com/backstage/backstage/commit/2bf1392): Software template inline conditionals without an `else` branch now render an empty string when their condition is false, matching Nunjucks behavior.
- [`3bb3710`](https://github.com/backstage/backstage/commit/3bb3710): Improved task worker resilience by backing off repeated database claim failures, containing unexpected task execution errors, and preventing new work from being claimed during graceful shutdown.
- [`beaa3db`](https://github.com/backstage/backstage/commit/beaa3db): Reject Scaffolder steps where `each` resolves to a primitive value instead of an array or object.
- [`f389dd2`](https://github.com/backstage/backstage/commit/f389dd2): Improve denied scaffolder action error handling.
- [`2eebeb7`](https://github.com/backstage/backstage/commit/2eebeb7): Ensure task failure details use the configured log redactions.
- [`84ebbb9`](https://github.com/backstage/backstage/commit/84ebbb9): Fixed log redaction for transformed secret values used to iterate Scaffolder steps.
- [`b4172dd`](https://github.com/backstage/backstage/commit/b4172dd): Restrict task retries to terminal states.
- [`c1a30ef`](https://github.com/backstage/backstage/commit/c1a30ef): Restored support for intrinsic string, number, array, `Map`, and `Set` methods in software templates.
- [`ee9c48d`](https://github.com/backstage/backstage/commit/ee9c48d): Fixed matching of action input values in scaffolder permission policies.
- [`79f0b91`](https://github.com/backstage/backstage/commit/79f0b91): Fixed the scaffolder task worker silently giving up after a transient failure. A single error while picking up a task, such as a dropped database connection, would stop the backend from running any further software templates for the rest of its lifetime. New tasks stayed queued indefinitely with no error shown to the user and no failing health check, and the only way to recover was to restart the backend. Picking up tasks is now retried instead.

### `@backstage/plugin-scaffolder-common` (2.2.3 → [2.3.0](../../changelogs/@backstage/plugin-scaffolder-common.md#230))

#### 2.3.0

##### Minor Changes

- [`1a705ca`](https://github.com/backstage/backstage/commit/1a705ca): Added `templateDryRunPermission`, which allows permission policies to control who can submit inline Software Template dry runs.

##### Patch Changes

- [`be0a75a`](https://github.com/backstage/backstage/commit/be0a75a): Exclude internal task data from task responses.
- [`ffaca06`](https://github.com/backstage/backstage/commit/ffaca06): Fixed a connection leak in the scaffolder event stream where unsubscribing did not abort the underlying SSE connection. Also changed unexpected server disconnects to signal an error instead of silently completing, enabling consumers to retry.

### `@backstage/plugin-scaffolder-react` (2.0.3 → [2.1.0](../../changelogs/@backstage/plugin-scaffolder-react.md#210))

#### 2.1.0

##### Minor Changes

- [`5ff93bf`](https://github.com/backstage/backstage/commit/5ff93bf): Added functionality to register a Template Outputs Component in the new frontend system.

##### Patch Changes

- [`736d84e`](https://github.com/backstage/backstage/commit/736d84e): Use locale-insensitive Unicode casing for consistent string handling across environments.
- [`ffaca06`](https://github.com/backstage/backstage/commit/ffaca06): Fixed several issues with scaffolder task event stream reconnection: retry timers are now properly cancelled on cleanup, concurrent reconnect attempts are guarded against, and tab visibility changes reconnect the stream using the last seen event cursor without re-fetching the task.
- [`7c1019c`](https://github.com/backstage/backstage/commit/7c1019c): Fixed the scaffolder wizard not scrolling to the top on step change when the app uses the new frontend system (no `<main>` element).

### `@backstage/plugin-techdocs-backend` (2.2.5 → [2.3.0](../../changelogs/@backstage/plugin-techdocs-backend.md#230))

#### 2.3.0

##### Minor Changes

- [`ee97130`](https://github.com/backstage/backstage/commit/ee97130): Added support for `techdocs.generator.pullOptions` when pulling the TechDocs generator Docker image from private registries that require authentication.
- [`62d1a6f`](https://github.com/backstage/backstage/commit/62d1a6f): Added `techdocs.generator.mkdocs.dangerouslyAllowAdditionalPlugins` configuration option, allowing operators to extend the set of permitted MkDocs plugins during TechDocs generation.

##### Patch Changes

- [`932986c`](https://github.com/backstage/backstage/commit/932986c): Improve validation of TechDocs static content paths.
- [`736d84e`](https://github.com/backstage/backstage/commit/736d84e): Use locale-insensitive Unicode casing for consistent string handling across environments.
- [`1b0e277`](https://github.com/backstage/backstage/commit/1b0e277): Improved path validation for TechDocs content serving.

### `@techdocs/cli` (1.11.4 → [1.12.0](../../changelogs/@techdocs/cli.md#1120))

#### 1.12.0

##### Minor Changes

- [`57205a0`](https://github.com/backstage/backstage/commit/57205a0): Added a `--dangerouslyAllowAdditionalKeys` option to `techdocs-cli generate`
- [`c4976e0`](https://github.com/backstage/backstage/commit/c4976e0): The `generate` command now automatically computes a sha256 content hash of the generated site output and stores it as the etag in `techdocs_metadata.json` when no `--etag` value is explicitly provided.

  Added `--skip-if-unchanged` flag to `publish` that compares the local etag against the remote etag before uploading. When they match, the publish step is skipped entirely. This avoids redundant uploads in CI pipelines when docs haven't changed between builds.

##### Patch Changes

- [`de92fae`](https://github.com/backstage/backstage/commit/de92fae): Fixed an issue where `techdocs-cli serve` would silently stop detecting documentation changes and no longer refresh the browser when the Python environment (TechDocs container image or local) contains `click` 8.3.x. The CLI now explicitly enables MkDocs live reload when serving.
- [`4441911`](https://github.com/backstage/backstage/commit/4441911): Improved MkDocs configuration file handling.

## Other patch version bumps

### `@backstage/backend-test-utils` (1.11.6 → [1.11.7](../../changelogs/@backstage/backend-test-utils.md#1117))

#### 1.11.7

##### Patch Changes

- [`05d03ee`](https://github.com/backstage/backstage/commit/05d03ee): Increased the test database cleanup timeout to 60 seconds to reduce timeout failures when using Docker.

### `@backstage/catalog-client` (1.16.1 → [1.16.2](../../changelogs/@backstage/catalog-client.md#1162))

#### 1.16.2

##### Patch Changes

- [`736d84e`](https://github.com/backstage/backstage/commit/736d84e): Use locale-insensitive Unicode casing for consistent string handling across environments.

### `@backstage/catalog-model` (1.10.0 → [1.10.1](../../changelogs/@backstage/catalog-model.md#1101))

#### 1.10.1

##### Patch Changes

- [`736d84e`](https://github.com/backstage/backstage/commit/736d84e): Use locale-insensitive Unicode casing for consistent string handling across environments.
- [`61809fe`](https://github.com/backstage/backstage/commit/61809fe): Allow independently registered catalog model sources to share identical layers, while reporting a clear error for conflicting layers with the same ID.
- [`78656f8`](https://github.com/backstage/backstage/commit/78656f8): Fixed several issues in the alpha catalog model layer system. Schema updates now preserve sibling field validation when changing a property named `type`, support deleting inherited fields and constraints, and retain literal JSON values in `const` and `default`. Kind schemas without an explicit root type retain their fields, and invalid combined schemas are rejected during model compilation. Empty kind descriptions and reverse relation titles are now applied correctly.

### `@backstage/config` (1.3.8 → [1.3.9](../../changelogs/@backstage/config.md#139))

#### 1.3.9

##### Patch Changes

- [`1134d4b`](https://github.com/backstage/backstage/commit/1134d4b): Fixed reading a duration from configuration so that an all-zero ISO 8601 duration (such as `PT0S`) now yields a consistent zero value instead of an empty result.

### `@backstage/core-app-api` (1.20.4 → [1.20.5](../../changelogs/@backstage/core-app-api.md#1205))

#### 1.20.5

##### Patch Changes

- [`736d84e`](https://github.com/backstage/backstage/commit/736d84e): Use locale-insensitive Unicode casing for consistent string handling across environments.

### `@backstage/integration` (2.1.1 → [2.1.2](../../changelogs/@backstage/integration.md#212))

#### 2.1.2

##### Patch Changes

- [`23705f3`](https://github.com/backstage/backstage/commit/23705f3): Fixed an issue where reading or downloading files from Bitbucket Server could fail when the branch name contained special characters such as an ampersand or a plus sign. The branch name is now correctly encoded in the request URL.
- [`736d84e`](https://github.com/backstage/backstage/commit/736d84e): Use locale-insensitive Unicode casing for consistent string handling across environments.
- [`7150117`](https://github.com/backstage/backstage/commit/7150117): Updated internal Azure DevOps imports to avoid a circular module dependency.
- [`e592bc5`](https://github.com/backstage/backstage/commit/e592bc5): Fixed an issue where reading files from GitLab could fail when the branch name contained special characters such as an ampersand or a plus sign. The branch name is now correctly encoded in the request URL.
- [`e895def`](https://github.com/backstage/backstage/commit/e895def): Fixed handling of GitLab URLs for instances configured with a relative base path.

### `@backstage/plugin-catalog` (2.0.8 → [2.0.9](../../changelogs/@backstage/plugin-catalog.md#209))

#### 2.0.9

##### Patch Changes

- [`8e0e3c4`](https://github.com/backstage/backstage/commit/8e0e3c4): Fixed a regression where the About card's field labels (OWNER, SYSTEM, TAGS, etc.) lost their vertical gap above the value.
- [`e3781a3`](https://github.com/backstage/backstage/commit/e3781a3): Fixed circular dependency warnings when building the catalog plugin.
- [`d9a949e`](https://github.com/backstage/backstage/commit/d9a949e): Fixed the About card to safely show and hide filtered icon links when navigating between entities, without initializing hidden links.
- [`736d84e`](https://github.com/backstage/backstage/commit/736d84e): Use locale-insensitive Unicode casing for consistent string handling across environments.
- [`4611178`](https://github.com/backstage/backstage/commit/4611178): Add support for legacy props in catalog entity card exports by widening the public TypeScript prop types. This ensures compatibility for consumers still using legacy properties such as `variant` and `columns`.
- [`d421187`](https://github.com/backstage/backstage/commit/d421187): Reduced the initial app bundle size by loading page and optional UI implementations only when their extensions render.
- [`acc6666`](https://github.com/backstage/backstage/commit/acc6666): Fixed entity context menus to report errors from contributed items without disrupting the menu.

### `@backstage/plugin-catalog-react` (3.2.2 → [3.2.3](../../changelogs/@backstage/plugin-catalog-react.md#323))

#### 3.2.3

##### Patch Changes

- [`736d84e`](https://github.com/backstage/backstage/commit/736d84e): Use locale-insensitive Unicode casing for consistent string handling across environments.
- [`a7b14b5`](https://github.com/backstage/backstage/commit/a7b14b5): Fixed `EntityOwnerPicker` crashing with `Entity reference "<name>" had missing or empty kind` when the `owners` query parameter contains humanized entity refs, as produced by the `OwnershipCard` links in `@backstage/plugin-org`.

  Query parameters were stored as-is in the initial state and only converted to full entity refs by an effect, which runs after the first render. That first render passed the raw value to the entity presentation API, whose `parseEntityRef` call rejects a ref without a kind. The same raw value was also sent to `catalogApi.getEntitiesByRefs` on mount, and made the option checkboxes render unselected until the effect ran.

  The query parameters are now normalized through `EntityOwnerFilter` when the state is initialized, matching what the existing effect already did and what the `filters` code path already produced.

- [`bf7e890`](https://github.com/backstage/backstage/commit/bf7e890): Added the missing Material UI dependency used by catalog popovers.

### `@backstage/plugin-search` (1.7.7 → [1.7.8](../../changelogs/@backstage/plugin-search.md#178))

#### 1.7.8

##### Patch Changes

- [`d421187`](https://github.com/backstage/backstage/commit/d421187): Reduced the initial app bundle size by loading page and optional UI implementations only when their extensions render.

### `@backstage/plugin-search-backend` (2.1.6 → [2.1.7](../../changelogs/@backstage/plugin-search-backend.md#217))

#### 2.1.7

##### Patch Changes

- [`b11c9b4`](https://github.com/backstage/backstage/commit/b11c9b4): Fixed a bug where the search engine could receive an unfiltered query when no document types were permitted.

### `@backstage/plugin-search-backend-node` (1.4.7 → [1.4.8](../../changelogs/@backstage/plugin-search-backend-node.md#148))

#### 1.4.8

##### Patch Changes

- [`736d84e`](https://github.com/backstage/backstage/commit/736d84e): Use locale-insensitive Unicode casing for consistent string handling across environments.

### `@backstage/plugin-techdocs` (1.18.0 → [1.18.1](../../changelogs/@backstage/plugin-techdocs.md#1181))

#### 1.18.1

##### Patch Changes

- [`736d84e`](https://github.com/backstage/backstage/commit/736d84e): Use locale-insensitive Unicode casing for consistent string handling across environments.
- [`d421187`](https://github.com/backstage/backstage/commit/d421187): Reduced the initial app bundle size by loading page and optional UI implementations only when their extensions render.
- [`9cb79f5`](https://github.com/backstage/backstage/commit/9cb79f5): Use the catalog presentation API for TechDocs document titles and owner labels so entity display names are consistent with the rest of Backstage.

### `@backstage/plugin-techdocs-addons-test-utils` (2.0.8 → [2.0.9](../../changelogs/@backstage/plugin-techdocs-addons-test-utils.md#209))

#### 2.0.9

##### Patch Changes

- [`279fdf6`](https://github.com/backstage/backstage/commit/279fdf6): Declared the DOM Testing Library dependency required by React Testing Library.

### `@backstage/plugin-techdocs-module-addons-contrib` (1.1.39 → [1.1.40](../../changelogs/@backstage/plugin-techdocs-module-addons-contrib.md#1140))

#### 1.1.40

##### Patch Changes

- [`736d84e`](https://github.com/backstage/backstage/commit/736d84e): Use locale-insensitive Unicode casing for consistent string handling across environments.
- [`10d2720`](https://github.com/backstage/backstage/commit/10d2720): Keep the TechDocs LightBox addon's image viewer out of an app's initial bundle by loading it with the first documentation page.

### `@backstage/plugin-techdocs-react` (1.3.14 → [1.3.15](../../changelogs/@backstage/plugin-techdocs-react.md#1315))

#### 1.3.15

##### Patch Changes

- [`736d84e`](https://github.com/backstage/backstage/commit/736d84e): Use locale-insensitive Unicode casing for consistent string handling across environments.

### `@backstage/test-utils` (1.7.21 → [1.7.22](../../changelogs/@backstage/test-utils.md#1722))

#### 1.7.22

##### Patch Changes

- [`279fdf6`](https://github.com/backstage/backstage/commit/279fdf6): Declared the DOM Testing Library dependency required by React Testing Library.

## Excluded dependency updates

- `@backstage/app-defaults` (1.7.11 → [1.7.12](../../changelogs/@backstage/app-defaults.md#1712))
- `@backstage/backend-app-api` (1.7.3 → [1.7.4](../../changelogs/@backstage/backend-app-api.md#174))
- `@backstage/backend-plugin-api` (1.10.0 → [1.10.1](../../changelogs/@backstage/backend-plugin-api.md#1101))
- `@backstage/cli-module-config` (0.1.6 → [0.1.7](../../changelogs/@backstage/cli-module-config.md#017))
- `@backstage/config-loader` (1.11.2 → [1.11.3](../../changelogs/@backstage/config-loader.md#1113))
- `@backstage/core-compat-api` (0.5.14 → [0.5.15](../../changelogs/@backstage/core-compat-api.md#0515))
- `@backstage/core-plugin-api` (1.12.9 → [1.12.10](../../changelogs/@backstage/core-plugin-api.md#11210))
- `@backstage/dev-utils` (1.1.26 → [1.1.27](../../changelogs/@backstage/dev-utils.md#1127))
- `@backstage/frontend-defaults` (0.5.5 → [0.5.6](../../changelogs/@backstage/frontend-defaults.md#056))
- `@backstage/frontend-dev-utils` (0.1.5 → [0.1.6](../../changelogs/@backstage/frontend-dev-utils.md#016))
- `@backstage/integration-aws-node` (0.2.1 → [0.2.2](../../changelogs/@backstage/integration-aws-node.md#022))
- `@backstage/integration-react` (1.2.21 → [1.2.22](../../changelogs/@backstage/integration-react.md#1222))
- `@backstage/plugin-app-backend` (0.5.17 → [0.5.18](../../changelogs/@backstage/plugin-app-backend.md#0518))
- `@backstage/plugin-app-node` (0.1.48 → [0.1.49](../../changelogs/@backstage/plugin-app-node.md#0149))
- `@backstage/plugin-app-visualizer` (0.2.7 → [0.2.8](../../changelogs/@backstage/plugin-app-visualizer.md#028))
- `@backstage/plugin-auth` (0.1.11 → [0.1.12](../../changelogs/@backstage/plugin-auth.md#0112))
- `@backstage/plugin-auth-backend-module-atlassian-provider` (0.4.18 → [0.4.19](../../changelogs/@backstage/plugin-auth-backend-module-atlassian-provider.md#0419))
- `@backstage/plugin-auth-backend-module-auth0-provider` (0.4.4 → [0.4.5](../../changelogs/@backstage/plugin-auth-backend-module-auth0-provider.md#045))
- `@backstage/plugin-auth-backend-module-aws-alb-provider` (0.4.19 → [0.4.20](../../changelogs/@backstage/plugin-auth-backend-module-aws-alb-provider.md#0420))
- `@backstage/plugin-auth-backend-module-bitbucket-provider` (0.3.18 → [0.3.19](../../changelogs/@backstage/plugin-auth-backend-module-bitbucket-provider.md#0319))
- `@backstage/plugin-auth-backend-module-bitbucket-server-provider` (0.2.18 → [0.2.19](../../changelogs/@backstage/plugin-auth-backend-module-bitbucket-server-provider.md#0219))
- `@backstage/plugin-auth-backend-module-gcp-iap-provider` (0.4.18 → [0.4.19](../../changelogs/@backstage/plugin-auth-backend-module-gcp-iap-provider.md#0419))
- `@backstage/plugin-auth-backend-module-gitlab-provider` (0.4.6 → [0.4.7](../../changelogs/@backstage/plugin-auth-backend-module-gitlab-provider.md#047))
- `@backstage/plugin-auth-backend-module-google-provider` (0.3.18 → [0.3.19](../../changelogs/@backstage/plugin-auth-backend-module-google-provider.md#0319))
- `@backstage/plugin-auth-backend-module-guest-provider` (0.2.22 → [0.2.23](../../changelogs/@backstage/plugin-auth-backend-module-guest-provider.md#0223))
- `@backstage/plugin-auth-backend-module-oauth2-provider` (0.4.18 → [0.4.19](../../changelogs/@backstage/plugin-auth-backend-module-oauth2-provider.md#0419))
- `@backstage/plugin-auth-backend-module-okta-provider` (0.2.18 → [0.2.19](../../changelogs/@backstage/plugin-auth-backend-module-okta-provider.md#0219))
- `@backstage/plugin-auth-backend-module-onelogin-provider` (0.3.18 → [0.3.19](../../changelogs/@backstage/plugin-auth-backend-module-onelogin-provider.md#0319))
- `@backstage/plugin-auth-backend-module-openshift-provider` (0.1.10 → [0.1.11](../../changelogs/@backstage/plugin-auth-backend-module-openshift-provider.md#0111))
- `@backstage/plugin-auth-backend-module-vmware-cloud-provider` (0.5.17 → [0.5.18](../../changelogs/@backstage/plugin-auth-backend-module-vmware-cloud-provider.md#0518))
- `@backstage/plugin-auth-react` (0.1.30 → [0.1.31](../../changelogs/@backstage/plugin-auth-react.md#0131))
- `@backstage/plugin-catalog-backend-module-ai-model` (0.1.3 → [0.1.4](../../changelogs/@backstage/plugin-catalog-backend-module-ai-model.md#014))
- `@backstage/plugin-catalog-backend-module-backstage-openapi` (0.5.17 → [0.5.18](../../changelogs/@backstage/plugin-catalog-backend-module-backstage-openapi.md#0518))
- `@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.5.14 → [0.5.15](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-cloud.md#0515))
- `@backstage/plugin-catalog-backend-module-gcp` (0.3.22 → [0.3.23](../../changelogs/@backstage/plugin-catalog-backend-module-gcp.md#0323))
- `@backstage/plugin-catalog-backend-module-gerrit` (0.3.17 → [0.3.18](../../changelogs/@backstage/plugin-catalog-backend-module-gerrit.md#0318))
- `@backstage/plugin-catalog-backend-module-gitea` (0.1.15 → [0.1.16](../../changelogs/@backstage/plugin-catalog-backend-module-gitea.md#0116))
- `@backstage/plugin-catalog-backend-module-github-org` (0.3.25 → [0.3.26](../../changelogs/@backstage/plugin-catalog-backend-module-github-org.md#0326))
- `@backstage/plugin-catalog-backend-module-gitlab-org` (0.2.24 → [0.2.25](../../changelogs/@backstage/plugin-catalog-backend-module-gitlab-org.md#0225))
- `@backstage/plugin-catalog-backend-module-logs` (0.1.25 → [0.1.26](../../changelogs/@backstage/plugin-catalog-backend-module-logs.md#0126))
- `@backstage/plugin-catalog-backend-module-msgraph-incremental` (0.1.3 → [0.1.4](../../changelogs/@backstage/plugin-catalog-backend-module-msgraph-incremental.md#014))
- `@backstage/plugin-catalog-backend-module-openapi` (0.2.25 → [0.2.26](../../changelogs/@backstage/plugin-catalog-backend-module-openapi.md#0226))
- `@backstage/plugin-catalog-backend-module-scaffolder-entity-model` (0.2.23 → [0.2.24](../../changelogs/@backstage/plugin-catalog-backend-module-scaffolder-entity-model.md#0224))
- `@backstage/plugin-catalog-backend-module-unprocessed` (0.6.15 → [0.6.16](../../changelogs/@backstage/plugin-catalog-backend-module-unprocessed.md#0616))
- `@backstage/plugin-catalog-node` (2.2.4 → [2.2.5](../../changelogs/@backstage/plugin-catalog-node.md#225))
- `@backstage/plugin-catalog-unprocessed-entities-common` (0.0.16 → [0.0.17](../../changelogs/@backstage/plugin-catalog-unprocessed-entities-common.md#0017))
- `@backstage/plugin-config-schema` (0.1.83 → [0.1.84](../../changelogs/@backstage/plugin-config-schema.md#0184))
- `@backstage/plugin-devtools-backend` (0.5.20 → [0.5.21](../../changelogs/@backstage/plugin-devtools-backend.md#0521))
- `@backstage/plugin-devtools-common` (0.1.25 → [0.1.26](../../changelogs/@backstage/plugin-devtools-common.md#0126))
- `@backstage/plugin-devtools-react` (0.2.5 → [0.2.6](../../changelogs/@backstage/plugin-devtools-react.md#026))
- `@backstage/plugin-events-backend` (0.6.5 → [0.6.6](../../changelogs/@backstage/plugin-events-backend.md#066))
- `@backstage/plugin-events-backend-module-aws-sqs` (0.4.25 → [0.4.26](../../changelogs/@backstage/plugin-events-backend-module-aws-sqs.md#0426))
- `@backstage/plugin-events-backend-module-azure` (0.2.34 → [0.2.35](../../changelogs/@backstage/plugin-events-backend-module-azure.md#0235))
- `@backstage/plugin-events-backend-module-bitbucket-cloud` (0.2.34 → [0.2.35](../../changelogs/@backstage/plugin-events-backend-module-bitbucket-cloud.md#0235))
- `@backstage/plugin-events-backend-module-bitbucket-server` (0.1.15 → [0.1.16](../../changelogs/@backstage/plugin-events-backend-module-bitbucket-server.md#0116))
- `@backstage/plugin-events-backend-module-gerrit` (0.2.34 → [0.2.35](../../changelogs/@backstage/plugin-events-backend-module-gerrit.md#0235))
- `@backstage/plugin-events-backend-module-github` (0.4.15 → [0.4.16](../../changelogs/@backstage/plugin-events-backend-module-github.md#0416))
- `@backstage/plugin-events-backend-module-gitlab` (0.3.15 → [0.3.16](../../changelogs/@backstage/plugin-events-backend-module-gitlab.md#0316))
- `@backstage/plugin-events-backend-module-google-pubsub` (0.2.6 → [0.2.7](../../changelogs/@backstage/plugin-events-backend-module-google-pubsub.md#027))
- `@backstage/plugin-events-backend-module-kafka` (0.3.7 → [0.3.8](../../changelogs/@backstage/plugin-events-backend-module-kafka.md#038))
- `@backstage/plugin-events-backend-test-utils` (0.1.58 → [0.1.59](../../changelogs/@backstage/plugin-events-backend-test-utils.md#0159))
- `@backstage/plugin-events-node` (0.4.25 → [0.4.26](../../changelogs/@backstage/plugin-events-node.md#0426))
- `@backstage/plugin-gateway-backend` (1.1.8 → [1.1.9](../../changelogs/@backstage/plugin-gateway-backend.md#119))
- `@backstage/plugin-kubernetes-cluster` (0.0.40 → [0.0.41](../../changelogs/@backstage/plugin-kubernetes-cluster.md#0041))
- `@backstage/plugin-mui-to-bui` (0.2.10 → [0.2.11](../../changelogs/@backstage/plugin-mui-to-bui.md#0211))
- `@backstage/plugin-notifications-common` (0.2.3 → [0.2.4](../../changelogs/@backstage/plugin-notifications-common.md#024))
- `@backstage/plugin-org-react` (0.1.53 → [0.1.54](../../changelogs/@backstage/plugin-org-react.md#0154))
- `@backstage/plugin-permission-backend` (0.7.15 → [0.7.16](../../changelogs/@backstage/plugin-permission-backend.md#0716))
- `@backstage/plugin-permission-backend-module-allow-all-policy` (0.2.22 → [0.2.23](../../changelogs/@backstage/plugin-permission-backend-module-allow-all-policy.md#0223))
- `@backstage/plugin-permission-common` (0.9.10 → [0.9.11](../../changelogs/@backstage/plugin-permission-common.md#0911))
- `@backstage/plugin-permission-node` (0.11.3 → [0.11.4](../../changelogs/@backstage/plugin-permission-node.md#0114))
- `@backstage/plugin-permission-react` (0.5.4 → [0.5.5](../../changelogs/@backstage/plugin-permission-react.md#055))
- `@backstage/plugin-proxy-node` (0.1.18 → [0.1.19](../../changelogs/@backstage/plugin-proxy-node.md#0119))
- `@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.3.26 → [0.3.27](../../changelogs/@backstage/plugin-scaffolder-backend-module-cookiecutter.md#0327))
- `@backstage/plugin-scaffolder-backend-module-gerrit` (0.2.24 → [0.2.25](../../changelogs/@backstage/plugin-scaffolder-backend-module-gerrit.md#0225))
- `@backstage/plugin-scaffolder-backend-module-gitea` (0.2.24 → [0.2.25](../../changelogs/@backstage/plugin-scaffolder-backend-module-gitea.md#0225))
- `@backstage/plugin-scaffolder-backend-module-notifications` (0.1.25 → [0.1.26](../../changelogs/@backstage/plugin-scaffolder-backend-module-notifications.md#0126))
- `@backstage/plugin-scaffolder-backend-module-rails` (0.5.24 → [0.5.25](../../changelogs/@backstage/plugin-scaffolder-backend-module-rails.md#0525))
- `@backstage/plugin-scaffolder-backend-module-yeoman` (0.4.25 → [0.4.26](../../changelogs/@backstage/plugin-scaffolder-backend-module-yeoman.md#0426))
- `@backstage/plugin-scaffolder-node-test-utils` (0.3.14 → [0.3.15](../../changelogs/@backstage/plugin-scaffolder-node-test-utils.md#0315))
- `@backstage/plugin-search-backend-module-explore` (0.3.17 → [0.3.18](../../changelogs/@backstage/plugin-search-backend-module-explore.md#0318))
- `@backstage/plugin-search-backend-module-pg` (0.5.58 → [0.5.59](../../changelogs/@backstage/plugin-search-backend-module-pg.md#0559))
- `@backstage/plugin-search-backend-module-stack-overflow-collator` (0.3.23 → [0.3.24](../../changelogs/@backstage/plugin-search-backend-module-stack-overflow-collator.md#0324))
- `@backstage/plugin-search-common` (1.2.24 → [1.2.25](../../changelogs/@backstage/plugin-search-common.md#1225))
- `@backstage/plugin-search-react` (1.11.7 → [1.11.8](../../changelogs/@backstage/plugin-search-react.md#1118))
- `@backstage/plugin-signals` (0.0.34 → [0.0.35](../../changelogs/@backstage/plugin-signals.md#0035))
- `@backstage/plugin-signals-node` (0.2.4 → [0.2.5](../../changelogs/@backstage/plugin-signals-node.md#025))
- `@backstage/plugin-signals-react` (0.0.25 → [0.0.26](../../changelogs/@backstage/plugin-signals-react.md#0026))
- `@backstage/plugin-user-settings-backend` (0.4.6 → [0.4.7](../../changelogs/@backstage/plugin-user-settings-backend.md#047))
