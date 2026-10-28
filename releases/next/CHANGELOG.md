# Backstage Release 1.57.0-next.0 changelog

Changes between 1.56.2 and 1.57.0-next.0 — 1 added, 0 removed, 186 upgraded, 29 unchanged packages.

## Summary

- [Newly added packages](#newly-added-packages): 1 package
- [Breaking changes](#breaking-changes): 2 packages
- [Major version bumps](#major-version-bumps): 1 package
- [0.0.x patch version bumps](#00x-patch-version-bumps): 1 package
- [0.x patch version bumps](#0x-patch-version-bumps): 25 packages
- [Minor version bumps](#minor-version-bumps): 4 packages
- [Other patch version bumps](#other-patch-version-bumps): 5 packages
- [Excluded dependency updates](#excluded-dependency-updates): 148 packages

## Table of contents

- [Newly added packages](#newly-added-packages)
  - [`@backstage/plugin-techdocs-backend-module-zensical` (new, 0.1.0-next.0)](#backstageplugin-techdocs-backend-module-zensical-new-010-next0)
- [Breaking changes](#breaking-changes)
  - [`@backstage/frontend-test-utils` (0.6.5 → 0.7.0-next.0)](#backstagefrontend-test-utils-065--070-next0)
  - [`@backstage/plugin-scaffolder-backend-module-gcp` (0.2.26 → 0.3.0-next.0)](#backstageplugin-scaffolder-backend-module-gcp-0226--030-next0)
- [Major version bumps](#major-version-bumps)
  - [`@backstage/plugin-scaffolder-react` (2.1.1 → 3.0.0-next.0)](#backstageplugin-scaffolder-react-211--300-next0)
- [0.0.x patch version bumps](#00x-patch-version-bumps)
  - [`@backstage/plugin-kubernetes-cluster` (0.0.42 → 0.0.43-next.0)](#backstageplugin-kubernetes-cluster-0042--0043-next0)
- [0.x patch version bumps](#0x-patch-version-bumps)
  - [`@backstage/backend-defaults` (0.18.1 → 0.18.2-next.0)](#backstagebackend-defaults-0181--0182-next0)
  - [`@backstage/backend-dynamic-feature-service` (0.8.8 → 0.8.9-next.0)](#backstagebackend-dynamic-feature-service-088--089-next0)
  - [`@backstage/cli-module-auth` (0.1.5 → 0.1.6-next.0)](#backstagecli-module-auth-015--016-next0)
  - [`@backstage/cli-module-package-manager-yarn` (0.1.4 → 0.1.5-next.0)](#backstagecli-module-package-manager-yarn-014--015-next0)
  - [`@backstage/cli-node` (0.3.5 → 0.3.6-next.0)](#backstagecli-node-035--036-next0)
  - [`@backstage/create-app` (0.9.3 → 0.9.4-next.0)](#backstagecreate-app-093--094-next0)
  - [`@backstage/eslint-plugin` (0.3.3 → 0.3.4-next.0)](#backstageeslint-plugin-033--034-next0)
  - [`@backstage/frontend-plugin-api` (0.18.2 → 0.18.3-next.0)](#backstagefrontend-plugin-api-0182--0183-next0)
  - [`@backstage/plugin-app-backend` (0.5.19 → 0.5.20-next.0)](#backstageplugin-app-backend-0519--0520-next0)
  - [`@backstage/plugin-auth-backend` (0.30.2 → 0.30.3-next.0)](#backstageplugin-auth-backend-0302--0303-next0)
  - [`@backstage/plugin-auth-backend-module-auth0-provider` (0.4.6 → 0.4.7-next.0)](#backstageplugin-auth-backend-module-auth0-provider-046--047-next0)
  - [`@backstage/plugin-auth-backend-module-aws-alb-provider` (0.4.21 → 0.4.22-next.0)](#backstageplugin-auth-backend-module-aws-alb-provider-0421--0422-next0)
  - [`@backstage/plugin-auth-backend-module-azure-easyauth-provider` (0.2.25 → 0.2.26-next.0)](#backstageplugin-auth-backend-module-azure-easyauth-provider-0225--0226-next0)
  - [`@backstage/plugin-auth-backend-module-cloudflare-access-provider` (0.5.1 → 0.5.2-next.0)](#backstageplugin-auth-backend-module-cloudflare-access-provider-051--052-next0)
  - [`@backstage/plugin-auth-backend-module-microsoft-provider` (0.3.20 → 0.3.21-next.0)](#backstageplugin-auth-backend-module-microsoft-provider-0320--0321-next0)
  - [`@backstage/plugin-auth-backend-module-oauth2-proxy-provider` (0.3.4 → 0.3.5-next.0)](#backstageplugin-auth-backend-module-oauth2-proxy-provider-034--035-next0)
  - [`@backstage/plugin-auth-backend-module-oidc-provider` (0.4.22 → 0.4.23-next.0)](#backstageplugin-auth-backend-module-oidc-provider-0422--0423-next0)
  - [`@backstage/plugin-auth-backend-module-pinniped-provider` (0.3.19 → 0.3.20-next.0)](#backstageplugin-auth-backend-module-pinniped-provider-0319--0320-next0)
  - [`@backstage/plugin-auth-backend-module-vmware-cloud-provider` (0.5.19 → 0.5.20-next.0)](#backstageplugin-auth-backend-module-vmware-cloud-provider-0519--0520-next0)
  - [`@backstage/plugin-auth-node` (0.7.7 → 0.7.8-next.0)](#backstageplugin-auth-node-077--078-next0)
  - [`@backstage/plugin-catalog-backend-module-gitlab` (0.8.9 → 0.8.10-next.0)](#backstageplugin-catalog-backend-module-gitlab-089--0810-next0)
  - [`@backstage/plugin-catalog-backend-module-unprocessed` (0.6.17 → 0.6.18-next.0)](#backstageplugin-catalog-backend-module-unprocessed-0617--0618-next0)
  - [`@backstage/plugin-events-backend` (0.6.7 → 0.6.8-next.0)](#backstageplugin-events-backend-067--068-next0)
  - [`@backstage/plugin-kubernetes-common` (0.9.14 → 0.9.15-next.0)](#backstageplugin-kubernetes-common-0914--0915-next0)
  - [`@backstage/plugin-scaffolder-backend-module-gitlab` (0.12.1 → 0.12.2-next.0)](#backstageplugin-scaffolder-backend-module-gitlab-0121--0122-next0)
- [Minor version bumps](#minor-version-bumps)
  - [`@backstage/backend-app-api` (1.8.0 → 1.9.0-next.0)](#backstagebackend-app-api-180--190-next0)
  - [`@backstage/plugin-scaffolder` (1.40.0 → 1.41.0-next.0)](#backstageplugin-scaffolder-1400--1410-next0)
  - [`@backstage/plugin-techdocs-node` (2.1.0 → 2.2.0-next.0)](#backstageplugin-techdocs-node-210--220-next0)
  - [`@techdocs/cli` (1.13.0 → 1.14.0-next.0)](#techdocscli-1130--1140-next0)
- [Other patch version bumps](#other-patch-version-bumps)
  - [`@backstage/plugin-catalog-backend` (4.0.2 → 4.0.3-next.0)](#backstageplugin-catalog-backend-402--403-next0)
  - [`@backstage/plugin-scaffolder-backend` (4.2.1 → 4.2.2-next.0)](#backstageplugin-scaffolder-backend-421--422-next0)
  - [`@backstage/plugin-search-backend-module-elasticsearch` (2.0.1 → 2.0.2-next.0)](#backstageplugin-search-backend-module-elasticsearch-201--202-next0)
  - [`@backstage/plugin-techdocs` (1.19.0 → 1.19.1-next.0)](#backstageplugin-techdocs-1190--1191-next0)
  - [`@backstage/plugin-techdocs-backend` (2.4.0 → 2.4.1-next.0)](#backstageplugin-techdocs-backend-240--241-next0)
- [Excluded dependency updates](#excluded-dependency-updates)

## Newly added packages

### `@backstage/plugin-techdocs-backend-module-zensical` (new, [0.1.0-next.0](../../changelogs/@backstage/plugin-techdocs-backend-module-zensical.md#010-next0))

#### 0.1.0-next.0

##### Minor Changes

- [`a4604d2`](https://github.com/backstage/backstage/commit/a4604d2): New module that adds [Zensical](https://zensical.org) as an experimental TechDocs documentation engine. Opt entities in with the `backstage.io/techdocs-engine: zensical` annotation, or set `techdocs.generator.defaultEngine: zensical`. See [Zensical Engine](https://backstage.io/docs/features/techdocs/engines-zensical) for setup and configuration.

## Breaking changes

### `@backstage/frontend-test-utils` (0.6.5 → [0.7.0-next.0](../../changelogs/@backstage/frontend-test-utils.md#070-next0))

#### 0.7.0-next.0

##### Minor Changes

- [`8ca78a2`](https://github.com/backstage/backstage/commit/8ca78a2): **BREAKING** Updated `renderInTestApp` and `renderTestApp` to provide default API implementations that are more suitable for testing. This may break existing tests that rely on the previous defaults:

  - **Toasts** are collected in memory instead of being displayed. Tests that assert on visible notifications need to provide an API implementation that forwards toasts to the UI, or assert on an explicitly supplied toast fake instead.
  - **Storage** is isolated in memory for each test app instead of using browser `localStorage`. Tests that seed or inspect `localStorage`, or rely on storage persisting between test apps, need to supply an explicit storage implementation.
  - **Errors** are collected without forwarding them to alerts or installing global error handlers. Error subscriptions no longer receive events from the default implementation. Tests that rely on these behaviors need an explicit error API implementation; tests can also supply a collecting error fake to assert on reported errors.
  - **Alerts** are collected and delivered to current subscribers, but earlier alerts are no longer replayed to new subscribers. Tests that rely on replay need an explicit alert API implementation.
  - **OAuth requests** use an in-memory coordinator with the same request coordination behavior as before.

  Explicit API overrides continue to take precedence over the defaults.

  Added `mockApis` helpers for all APIs in `coreApis`, including app state, dialogs, icons, OAuth requests, plugin wrappers and header actions, route resolution, swappable components, and toast notifications. Each `.mock()` helper provides typed Jest stubs without default behavior that can be registered directly with frontend test utilities.

  Added functional in-memory fakes for language, lifecycle, themes, icons, OAuth requests, plugin header actions, and toast notifications. Except for lifecycle, these can be supplied explicitly through the test app's `apis` option to configure behavior and inspect state. Use `TestApiProvider` for the lifecycle fake, since test apps manage their own lifecycle.

  Fixed storage fake isolation for nested buckets with the same name under different parents.

### `@backstage/plugin-scaffolder-backend-module-gcp` (0.2.26 → [0.3.0-next.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-gcp.md#030-next0))

#### 0.3.0-next.0

##### Minor Changes

- [`44d5ba2`](https://github.com/backstage/backstage/commit/44d5ba2): **BREAKING**: The backend's Google Cloud credentials now require the `storage.objects.list` permission on the configured task recovery bucket, in addition to the existing object permissions. Grant this permission before upgrading.

  Fixed task recovery workspace saves failing with Google Cloud Storage rate limit errors when template steps finish in quick succession. Each snapshot is saved to a separate object, and recovery continues to support snapshots from older versions.

## Major version bumps

### `@backstage/plugin-scaffolder-react` (2.1.1 → [3.0.0-next.0](../../changelogs/@backstage/plugin-scaffolder-react.md#300-next0))

#### 3.0.0-next.0

##### Minor Changes

- [`3fe82f6`](https://github.com/backstage/backstage/commit/3fe82f6): Added a `ScaffolderTemplateFilterBlueprint` that lets apps filter the new frontend system's template list using identity, catalog, or other viewer-specific state.

##### Patch Changes

- [`1c461ca`](https://github.com/backstage/backstage/commit/1c461ca): Fixed BUI array item headings to use the item schema title and honor an explicit item `ui:title` without adding a numeric suffix. Untitled items retain the numbered fallback.

## 0.0.x patch version bumps

### `@backstage/plugin-kubernetes-cluster` (0.0.42 → [0.0.43-next.0](../../changelogs/@backstage/plugin-kubernetes-cluster.md#0043-next0))

#### 0.0.43-next.0

##### Patch Changes

- [`ca14116`](https://github.com/backstage/backstage/commit/ca14116): Moved `kubernetes-models` and `@kubernetes-models/apimachinery` to dev dependencies, since they are only used for types. Backends no longer install `kubernetes-models` through `@backstage/plugin-kubernetes-common`.

## 0.x patch version bumps

### `@backstage/backend-defaults` (0.18.1 → [0.18.2-next.0](../../changelogs/@backstage/backend-defaults.md#0182-next0))

#### 0.18.2-next.0

##### Patch Changes

- [`80cc892`](https://github.com/backstage/backstage/commit/80cc892): Removed the runtime dependency on `@backstage/cli-node`, which was only used for types. Backends no longer install the CLI tooling packages through `@backstage/backend-defaults`.
- [`918ca98`](https://github.com/backstage/backstage/commit/918ca98): Updated dependency `jose` to `^6.1.0`. Existing ES256 token issuance and verification are unchanged. ML-DSA algorithms can be used when the runtime supports them.

### `@backstage/backend-dynamic-feature-service` (0.8.8 → [0.8.9-next.0](../../changelogs/@backstage/backend-dynamic-feature-service.md#089-next0))

#### 0.8.9-next.0

##### Patch Changes

- [`c999b77`](https://github.com/backstage/backstage/commit/c999b77): Dynamic backend plugins can now require the packages they share with the backend when those packages are not in the root `node_modules`, as with the pnpm `isolated` node linker. They are found through the backend package and through this package. With the default pnpm hoisting, this includes the packages that pnpm hoists into `node_modules/.pnpm/node_modules`. With `hoist: false`, only the direct dependencies of the backend package and of this package are found. Everything that was searched before is still searched first, so a module that was found before is found in the same place. The exception is plugins inside the Backstage root on Windows, which did not search the root `node_modules` before, other than through `NODE_PATH`. It is now searched in the same order as on other platforms.

### `@backstage/cli-module-auth` (0.1.5 → [0.1.6-next.0](../../changelogs/@backstage/cli-module-auth.md#016-next0))

#### 0.1.6-next.0

##### Patch Changes

- [`4d94005`](https://github.com/backstage/backstage/commit/4d94005): Fixed `auth logout` so that it revokes the refresh token on the server. Previously the revocation request was rejected because it did not identify the CLI client, which left the session valid until it expired.

### `@backstage/cli-module-package-manager-yarn` (0.1.4 → [0.1.5-next.0](../../changelogs/@backstage/cli-module-package-manager-yarn.md#015-next0))

#### 0.1.5-next.0

##### Patch Changes

- [`1cffd6f`](https://github.com/backstage/backstage/commit/1cffd6f): Made `@yarnpkg/cli`, `@yarnpkg/core`, and `@yarnpkg/plugin-patch` optional peer dependencies. `@yarnpkg/core@4.9.2` was published with a dependency on a patch file that only exists in the Yarn repository, which made installation fail for all projects depending on this module. To use the `pm verify-patches` command until this is fixed upstream, add these packages as `devDependencies` in your root `package.json`, together with the resolution `"@yarnpkg/core/got": "npm:^11.8.6"`. They will become regular dependencies again once a fixed version of `@yarnpkg/core` is published.

### `@backstage/cli-node` (0.3.5 → [0.3.6-next.0](../../changelogs/@backstage/cli-node.md#036-next0))

#### 0.3.6-next.0

##### Patch Changes

- [`4294614`](https://github.com/backstage/backstage/commit/4294614): Commands run through `runCli` now exit with the exit code they set, instead of always exiting with `0` on completion. For example, `catalog validate` and `template dry-run` now exit with a non-zero code when the input is invalid.

### `@backstage/create-app` (0.9.3 → [0.9.4-next.0](../../changelogs/@backstage/create-app.md#094-next0))

#### 0.9.4-next.0

##### Patch Changes

- [`77f9227`](https://github.com/backstage/backstage/commit/77f9227): New apps now declare support for light and dark color schemes and apply the stored theme choice before the app loads. The browser's default page background, scrollbars and form controls then match the theme during loading, instead of always starting out light. A new `public/theme.js` applies a stored light or dark choice, and the OS preference is used otherwise.

  To add this to an existing app, copy `packages/app/public/theme.js` from a newly created app, and add `<meta name="color-scheme" content="light dark" />` and `<script src="<%= publicPath %>/theme.js"></script>` to the `<head>` of `packages/app/public/index.html`.

### `@backstage/eslint-plugin` (0.3.3 → [0.3.4-next.0](../../changelogs/@backstage/eslint-plugin.md#034-next0))

#### 0.3.4-next.0

##### Patch Changes

- [`245d9e3`](https://github.com/backstage/backstage/commit/245d9e3): Internal changes for TypeScript 7 compatibility. The rules work the same as before.

### `@backstage/frontend-plugin-api` (0.18.2 → [0.18.3-next.0](../../changelogs/@backstage/frontend-plugin-api.md#0183-next0))

#### 0.18.3-next.0

##### Patch Changes

- [`ac2de0f`](https://github.com/backstage/backstage/commit/ac2de0f): Fixed a "Type instantiation is excessively deep and possibly infinite" error from `createFrontendPlugin` in plugins with many extensions, in particular with TypeScript 5.9 and later. In rare cases, the extensions in the type of a plugin may be in a different order or include extensions that were missing before.
- [`8ca78a2`](https://github.com/backstage/backstage/commit/8ca78a2): Added `coreApis`, a namespace of core Utility API refs. The deprecated Alert API is excluded in favor of Toast. The individual refs with namespace equivalents are deprecated in favor of their `coreApis` equivalents, while remaining compatible. Provider-specific authentication refs remain separate and are not deprecated.

### `@backstage/plugin-app-backend` (0.5.19 → [0.5.20-next.0](../../changelogs/@backstage/plugin-app-backend.md#0520-next0))

#### 0.5.20-next.0

##### Patch Changes

- [`11f4455`](https://github.com/backstage/backstage/commit/11f4455): Documented that if your package manager doesn't hoist workspace packages, for example pnpm with `hoistWorkspacePackages: false`, you need to add the app package to the `dependencies` of the root `package.json`.
- [`2fea3e2`](https://github.com/backstage/backstage/commit/2fea3e2): Reduced startup database traffic and memory usage when checking for previously cached static assets.

### `@backstage/plugin-auth-backend` (0.30.2 → [0.30.3-next.0](../../changelogs/@backstage/plugin-auth-backend.md#0303-next0))

#### 0.30.3-next.0

##### Patch Changes

- [`8965c27`](https://github.com/backstage/backstage/commit/8965c27): User tokens issued by sign-in resolvers now always have the entity refs in their `sub` and `ent` claims in canonical form, for example `user:default/jane.doe` rather than `User:default/Jane.Doe`, and duplicate `ent` refs are removed. Previously, a custom sign-in resolver could issue valid but non-canonical refs, which then failed to match stored user info and offline sessions on case-sensitive databases.
- [`fa0eb7a`](https://github.com/backstage/backstage/commit/fa0eb7a): Added a `POST /v1/offline-sessions/revoke` endpoint that lets other backend services revoke all offline sessions (refresh tokens) of a user. The endpoint only accepts service credentials, records an audit event, and is only available when `auth.experimentalRefreshToken.enabled` is set.
- [`918ca98`](https://github.com/backstage/backstage/commit/918ca98): Updated dependency `jose` to `^6.1.0`. Existing ES256 token issuance and verification are unchanged. ML-DSA algorithms can be used when the runtime supports them.

### `@backstage/plugin-auth-backend-module-auth0-provider` (0.4.6 → [0.4.7-next.0](../../changelogs/@backstage/plugin-auth-backend-module-auth0-provider.md#047-next0))

#### 0.4.7-next.0

##### Patch Changes

- [`918ca98`](https://github.com/backstage/backstage/commit/918ca98): Updated dependency `jose` to `^6.1.0`. Existing ES256 token issuance and verification are unchanged. ML-DSA algorithms can be used when the runtime supports them.

### `@backstage/plugin-auth-backend-module-aws-alb-provider` (0.4.21 → [0.4.22-next.0](../../changelogs/@backstage/plugin-auth-backend-module-aws-alb-provider.md#0422-next0))

#### 0.4.22-next.0

##### Patch Changes

- [`918ca98`](https://github.com/backstage/backstage/commit/918ca98): Updated dependency `jose` to `^6.1.0`. Existing ES256 token issuance and verification are unchanged. ML-DSA algorithms can be used when the runtime supports them.

### `@backstage/plugin-auth-backend-module-azure-easyauth-provider` (0.2.25 → [0.2.26-next.0](../../changelogs/@backstage/plugin-auth-backend-module-azure-easyauth-provider.md#0226-next0))

#### 0.2.26-next.0

##### Patch Changes

- [`918ca98`](https://github.com/backstage/backstage/commit/918ca98): Updated dependency `jose` to `^6.1.0`. Existing ES256 token issuance and verification are unchanged. ML-DSA algorithms can be used when the runtime supports them.

### `@backstage/plugin-auth-backend-module-cloudflare-access-provider` (0.5.1 → [0.5.2-next.0](../../changelogs/@backstage/plugin-auth-backend-module-cloudflare-access-provider.md#052-next0))

#### 0.5.2-next.0

##### Patch Changes

- [`918ca98`](https://github.com/backstage/backstage/commit/918ca98): Updated dependency `jose` to `^6.1.0`. Existing ES256 token issuance and verification are unchanged. ML-DSA algorithms can be used when the runtime supports them.

### `@backstage/plugin-auth-backend-module-microsoft-provider` (0.3.20 → [0.3.21-next.0](../../changelogs/@backstage/plugin-auth-backend-module-microsoft-provider.md#0321-next0))

#### 0.3.21-next.0

##### Patch Changes

- [`918ca98`](https://github.com/backstage/backstage/commit/918ca98): Updated dependency `jose` to `^6.1.0`. Existing ES256 token issuance and verification are unchanged. ML-DSA algorithms can be used when the runtime supports them.

### `@backstage/plugin-auth-backend-module-oauth2-proxy-provider` (0.3.4 → [0.3.5-next.0](../../changelogs/@backstage/plugin-auth-backend-module-oauth2-proxy-provider.md#035-next0))

#### 0.3.5-next.0

##### Patch Changes

- [`918ca98`](https://github.com/backstage/backstage/commit/918ca98): Updated dependency `jose` to `^6.1.0`. Existing ES256 token issuance and verification are unchanged. ML-DSA algorithms can be used when the runtime supports them.

### `@backstage/plugin-auth-backend-module-oidc-provider` (0.4.22 → [0.4.23-next.0](../../changelogs/@backstage/plugin-auth-backend-module-oidc-provider.md#0423-next0))

#### 0.4.23-next.0

##### Patch Changes

- [`918ca98`](https://github.com/backstage/backstage/commit/918ca98): Updated dependency `jose` to `^6.1.0`. Existing ES256 token issuance and verification are unchanged. ML-DSA algorithms can be used when the runtime supports them.

### `@backstage/plugin-auth-backend-module-pinniped-provider` (0.3.19 → [0.3.20-next.0](../../changelogs/@backstage/plugin-auth-backend-module-pinniped-provider.md#0320-next0))

#### 0.3.20-next.0

##### Patch Changes

- [`918ca98`](https://github.com/backstage/backstage/commit/918ca98): Updated dependency `jose` to `^6.1.0`. Existing ES256 token issuance and verification are unchanged. ML-DSA algorithms can be used when the runtime supports them.

### `@backstage/plugin-auth-backend-module-vmware-cloud-provider` (0.5.19 → [0.5.20-next.0](../../changelogs/@backstage/plugin-auth-backend-module-vmware-cloud-provider.md#0520-next0))

#### 0.5.20-next.0

##### Patch Changes

- [`918ca98`](https://github.com/backstage/backstage/commit/918ca98): Updated dependency `jose` to `^6.1.0`. Existing ES256 token issuance and verification are unchanged. ML-DSA algorithms can be used when the runtime supports them.

### `@backstage/plugin-auth-node` (0.7.7 → [0.7.8-next.0](../../changelogs/@backstage/plugin-auth-node.md#078-next0))

#### 0.7.8-next.0

##### Patch Changes

- [`918ca98`](https://github.com/backstage/backstage/commit/918ca98): Updated dependency `jose` to `^6.1.0`. Existing ES256 token issuance and verification are unchanged. ML-DSA algorithms can be used when the runtime supports them.

### `@backstage/plugin-catalog-backend-module-gitlab` (0.8.9 → [0.8.10-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-gitlab.md#0810-next0))

#### 0.8.10-next.0

##### Patch Changes

- [`ca14116`](https://github.com/backstage/backstage/commit/ca14116): Moved `@gitbeaker/rest` to dev dependencies, since it is only used for types.

### `@backstage/plugin-catalog-backend-module-unprocessed` (0.6.17 → [0.6.18-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-unprocessed.md#0618-next0))

#### 0.6.18-next.0

##### Patch Changes

- [`af39b90`](https://github.com/backstage/backstage/commit/af39b90): Fixed pending entities being returned without their entity ID and entity ref.

### `@backstage/plugin-events-backend` (0.6.7 → [0.6.8-next.0](../../changelogs/@backstage/plugin-events-backend.md#068-next0))

#### 0.6.8-next.0

##### Patch Changes

- [`a1ca033`](https://github.com/backstage/backstage/commit/a1ca033): Fixed the database event bus listener connection inheriting the trace context of the request that first opened it. Its keepalive queries are now recorded as separate root spans instead of being attached to that request's trace for as long as the connection stays open.

### `@backstage/plugin-kubernetes-common` (0.9.14 → [0.9.15-next.0](../../changelogs/@backstage/plugin-kubernetes-common.md#0915-next0))

#### 0.9.15-next.0

##### Patch Changes

- [`ca14116`](https://github.com/backstage/backstage/commit/ca14116): Moved `kubernetes-models` and `@kubernetes-models/apimachinery` to dev dependencies, since they are only used for types. Backends no longer install `kubernetes-models` through `@backstage/plugin-kubernetes-common`.

### `@backstage/plugin-scaffolder-backend-module-gitlab` (0.12.1 → [0.12.2-next.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-gitlab.md#0122-next0))

#### 0.12.2-next.0

##### Patch Changes

- [`ae86338`](https://github.com/backstage/backstage/commit/ae86338): Added GitLab branch autocompletion to RepoBranchPicker using user SCM credentials.
- [`ed8e58f`](https://github.com/backstage/backstage/commit/ed8e58f): Fixed `publish:gitlab:merge-request` and `gitlab:repo:push` failing with "A file with this name already exists" when `commitAction` is `auto` and the repository file list cannot be fetched, for example when the request times out on a large repository. The actions now check each file individually in that case, instead of treating every file as new.

## Minor version bumps

### `@backstage/backend-app-api` (1.8.0 → [1.9.0-next.0](../../changelogs/@backstage/backend-app-api.md#190-next0))

#### 1.9.0-next.0

##### Minor Changes

- [`1c93987`](https://github.com/backstage/backstage/commit/1c93987): Add optional `beginAt` timestamps to `PluginStartupResult` and `ModuleStartupResult` in the `BackendStartupResult` returned by `backend.start()`. The new timestamp marks when a plugin's or module's init function was invoked, i.e. after its dependencies were resolved. Together with the existing `resultAt` this makes it possible to see how long each individual plugin's or module's init function took, separate from time spent waiting for other plugins to initialize. It is undefined when a plugin or module failed before reaching initialization.

### `@backstage/plugin-scaffolder` (1.40.0 → [1.41.0-next.0](../../changelogs/@backstage/plugin-scaffolder.md#1410-next0))

#### 1.41.0-next.0

##### Minor Changes

- [`3fe82f6`](https://github.com/backstage/backstage/commit/3fe82f6): Added a `ScaffolderTemplateFilterBlueprint` that lets apps filter the new frontend system's template list using identity, catalog, or other viewer-specific state.
- [`ae86338`](https://github.com/backstage/backstage/commit/ae86338): Added GitLab branch autocompletion to RepoBranchPicker using user SCM credentials.

##### Patch Changes

- [`111c6ce`](https://github.com/backstage/backstage/commit/111c6ce): Keep the task button bar at the user's chosen visibility when a task completes, so log visibility and start-over controls remain accessible. Action availability continues to depend on task state and permissions.

### `@backstage/plugin-techdocs-node` (2.1.0 → [2.2.0-next.0](../../changelogs/@backstage/plugin-techdocs-node.md#220-next0))

#### 2.2.0-next.0

##### Minor Changes

- [`a4604d2`](https://github.com/backstage/backstage/commit/a4604d2): Added a new `@backstage/plugin-techdocs-node/alpha` entry point with building blocks for implementing additional documentation engines in separate modules: `createDockerContainerRunner`, `createOrUpdateMetadata`, `storeEtagMetadata`, `runCommand`, `validateInputDirectory`, `patchIndexPreBuild`, and the `mkdocs.yml` helpers `MKDOCS_SCHEMA`, `validateMkdocsYaml` and `sanitizeMkdocsYml`. These are alpha and may change in minor releases.

##### Patch Changes

- [`686d3cb`](https://github.com/backstage/backstage/commit/686d3cb): Fixed TechDocs served from Azure Blob Storage or Google Cloud Storage keeping storage connections open when a browser navigates away before a file is fully loaded. Errors that occur while streaming a file from Azure Blob Storage are now also logged and handled, instead of being left unhandled.
- [`2e98895`](https://github.com/backstage/backstage/commit/2e98895): Fixed TechDocs served from AWS S3 leaking S3 connections when a browser navigates away before a file is fully loaded. Over time the connection pool was exhausted and all TechDocs pages failed to load with `Socket timed out without establishing a connection` errors until the backend was restarted.

### `@techdocs/cli` (1.13.0 → [1.14.0-next.0](../../changelogs/@techdocs/cli.md#1140-next0))

#### 1.14.0-next.0

##### Minor Changes

- [`a4604d2`](https://github.com/backstage/backstage/commit/a4604d2): Add Zensical support to `serve`, `serve:raw` and `generate` via `--engine zensical` (or the `backstage.io/techdocs-engine` annotation in `catalog-info.yaml`), including live reload in the preview app. The default `--docker-image` is now chosen per engine instead of always being `spotify/techdocs`, and matches the image the TechDocs backend uses for that engine, so MkDocs previews now use `spotify/techdocs:v1.2.8` instead of `latest`. Passing `--docker-image` explicitly behaves as before.

  The `serve` flags `--mkdocs-port`, `--mkdocs-config-file-name` and `--mkdocs-parameter-*` are deprecated in favor of `--engine-port`, `--config-file-name` and `--parameter-*`. If both the old and new flag are given, the new one wins and the warning says the old one is ignored.

## Other patch version bumps

### `@backstage/plugin-catalog-backend` (4.0.2 → [4.0.3-next.0](../../changelogs/@backstage/plugin-catalog-backend.md#403-next0))

#### 4.0.3-next.0

##### Patch Changes

- [`7d765b6`](https://github.com/backstage/backstage/commit/7d765b6): Improved repository validation for catalog entity placeholders. Placeholder-driven reads, including `$openapi` and `$asyncapi` document references, are now restricted to the entity's own repository on SCM hosts; cross-repository references are rejected.
- [`2a9f08b`](https://github.com/backstage/backstage/commit/2a9f08b): Match URL locations in catalog rules in canonical form.

  URL locations are now matched against catalog rules in a canonical form of the URL, so that rule decisions agree with how the location target is resolved when its content is fetched. URL patterns that relied on percent-encoded characters being matched as written, or on default ports being kept, no longer match and should be updated.

### `@backstage/plugin-scaffolder-backend` (4.2.1 → [4.2.2-next.0](../../changelogs/@backstage/plugin-scaffolder-backend.md#422-next0))

#### 4.2.2-next.0

##### Patch Changes

- [`be5074c`](https://github.com/backstage/backstage/commit/be5074c): Preserve public task log values when rendering without secrets omits an earlier object field, while continuing to redact secret-derived keys and values.
- [`62eaba9`](https://github.com/backstage/backstage/commit/62eaba9): Fixed custom task permission rules registered by backend modules being ignored when authorizing task access and filtering task lists.

### `@backstage/plugin-search-backend-module-elasticsearch` (2.0.1 → [2.0.2-next.0](../../changelogs/@backstage/plugin-search-backend-module-elasticsearch.md#202-next0))

#### 2.0.2-next.0

##### Patch Changes

- [`8da9c23`](https://github.com/backstage/backstage/commit/8da9c23): Internal changes for TypeScript 7 compatibility. There are no changes to behavior or the public API.

### `@backstage/plugin-techdocs` (1.19.0 → [1.19.1-next.0](../../changelogs/@backstage/plugin-techdocs.md#1191-next0))

#### 1.19.1-next.0

##### Patch Changes

- [`9a1d5cf`](https://github.com/backstage/backstage/commit/9a1d5cf): Fixed the TechDocs table of contents drifting to the right on wide screens. It now stays aligned with the right edge of the documentation content.

### `@backstage/plugin-techdocs-backend` (2.4.0 → [2.4.1-next.0](../../changelogs/@backstage/plugin-techdocs-backend.md#241-next0))

#### 2.4.1-next.0

##### Patch Changes

- [`4d7a3fe`](https://github.com/backstage/backstage/commit/4d7a3fe): Clarified in the config schema which `techdocs.generator.mkdocs` settings also apply to the Zensical engine: `legacyCopyReadmeMdToIndexMd`, `dangerouslyAllowAdditionalKeys` and `dangerouslyAllowAdditionalPlugins`.

## Excluded dependency updates

- `@backstage/app-defaults` (1.7.13 → [1.7.14-next.0](../../changelogs/@backstage/app-defaults.md#1714-next0))
- `@backstage/backend-openapi-utils` (0.7.3 → [0.7.4-next.0](../../changelogs/@backstage/backend-openapi-utils.md#074-next0))
- `@backstage/backend-plugin-api` (1.11.0 → [1.11.1-next.0](../../changelogs/@backstage/backend-plugin-api.md#1111-next0))
- `@backstage/backend-test-utils` (1.11.8 → [1.11.9-next.0](../../changelogs/@backstage/backend-test-utils.md#1119-next0))
- `@backstage/cli` (0.36.7 → [0.36.8-next.0](../../changelogs/@backstage/cli.md#0368-next0))
- `@backstage/cli-defaults` (0.1.7 → [0.1.8-next.0](../../changelogs/@backstage/cli-defaults.md#018-next0))
- `@backstage/cli-module-actions` (0.1.4 → [0.1.5-next.0](../../changelogs/@backstage/cli-module-actions.md#015-next0))
- `@backstage/cli-module-build` (0.1.9 → [0.1.10-next.0](../../changelogs/@backstage/cli-module-build.md#0110-next0))
- `@backstage/cli-module-catalog` (0.2.0 → [0.2.1-next.0](../../changelogs/@backstage/cli-module-catalog.md#021-next0))
- `@backstage/cli-module-config` (0.1.8 → [0.1.9-next.0](../../changelogs/@backstage/cli-module-config.md#019-next0))
- `@backstage/cli-module-github` (0.1.5 → [0.1.6-next.0](../../changelogs/@backstage/cli-module-github.md#016-next0))
- `@backstage/cli-module-info` (0.1.5 → [0.1.6-next.0](../../changelogs/@backstage/cli-module-info.md#016-next0))
- `@backstage/cli-module-lint` (0.1.6 → [0.1.7-next.0](../../changelogs/@backstage/cli-module-lint.md#017-next0))
- `@backstage/cli-module-maintenance` (0.1.6 → [0.1.7-next.0](../../changelogs/@backstage/cli-module-maintenance.md#017-next0))
- `@backstage/cli-module-migrate` (0.2.2 → [0.2.3-next.0](../../changelogs/@backstage/cli-module-migrate.md#023-next0))
- `@backstage/cli-module-new` (0.1.8 → [0.1.9-next.0](../../changelogs/@backstage/cli-module-new.md#019-next0))
- `@backstage/cli-module-scaffolder` (0.2.0 → [0.2.1-next.0](../../changelogs/@backstage/cli-module-scaffolder.md#021-next0))
- `@backstage/cli-module-search` (0.2.0 → [0.2.1-next.0](../../changelogs/@backstage/cli-module-search.md#021-next0))
- `@backstage/cli-module-test-jest` (0.1.7 → [0.1.8-next.0](../../changelogs/@backstage/cli-module-test-jest.md#018-next0))
- `@backstage/cli-module-translations` (0.1.5 → [0.1.6-next.0](../../changelogs/@backstage/cli-module-translations.md#016-next0))
- `@backstage/core-app-api` (1.20.6 → [1.20.7-next.0](../../changelogs/@backstage/core-app-api.md#1207-next0))
- `@backstage/core-compat-api` (0.5.16 → [0.5.17-next.0](../../changelogs/@backstage/core-compat-api.md#0517-next0))
- `@backstage/core-components` (0.18.15 → [0.18.16-next.0](../../changelogs/@backstage/core-components.md#01816-next0))
- `@backstage/core-plugin-api` (1.12.11 → [1.12.12-next.0](../../changelogs/@backstage/core-plugin-api.md#11212-next0))
- `@backstage/dev-utils` (1.1.28 → [1.1.29-next.0](../../changelogs/@backstage/dev-utils.md#1129-next0))
- `@backstage/frontend-app-api` (0.16.9 → [0.16.10-next.0](../../changelogs/@backstage/frontend-app-api.md#01610-next0))
- `@backstage/frontend-defaults` (0.5.7 → [0.5.8-next.0](../../changelogs/@backstage/frontend-defaults.md#058-next0))
- `@backstage/frontend-dev-utils` (0.1.7 → [0.1.8-next.0](../../changelogs/@backstage/frontend-dev-utils.md#018-next0))
- `@backstage/frontend-dynamic-feature-loader` (0.1.17 → [0.1.18-next.0](../../changelogs/@backstage/frontend-dynamic-feature-loader.md#0118-next0))
- `@backstage/integration-react` (1.2.23 → [1.2.24-next.0](../../changelogs/@backstage/integration-react.md#1224-next0))
- `@backstage/plugin-api-docs` (0.14.6 → [0.14.7-next.0](../../changelogs/@backstage/plugin-api-docs.md#0147-next0))
- `@backstage/plugin-app` (0.5.4 → [0.5.5-next.0](../../changelogs/@backstage/plugin-app.md#055-next0))
- `@backstage/plugin-app-module-user-settings` (0.1.3 → [0.1.4-next.0](../../changelogs/@backstage/plugin-app-module-user-settings.md#014-next0))
- `@backstage/plugin-app-node` (0.1.50 → [0.1.51-next.0](../../changelogs/@backstage/plugin-app-node.md#0151-next0))
- `@backstage/plugin-app-react` (0.2.8 → [0.2.9-next.0](../../changelogs/@backstage/plugin-app-react.md#029-next0))
- `@backstage/plugin-app-visualizer` (0.2.9 → [0.2.10-next.0](../../changelogs/@backstage/plugin-app-visualizer.md#0210-next0))
- `@backstage/plugin-auth` (0.1.13 → [0.1.14-next.0](../../changelogs/@backstage/plugin-auth.md#0114-next0))
- `@backstage/plugin-auth-backend-module-atlassian-provider` (0.5.0 → [0.5.1-next.0](../../changelogs/@backstage/plugin-auth-backend-module-atlassian-provider.md#051-next0))
- `@backstage/plugin-auth-backend-module-bitbucket-provider` (0.3.20 → [0.3.21-next.0](../../changelogs/@backstage/plugin-auth-backend-module-bitbucket-provider.md#0321-next0))
- `@backstage/plugin-auth-backend-module-bitbucket-server-provider` (0.2.20 → [0.2.21-next.0](../../changelogs/@backstage/plugin-auth-backend-module-bitbucket-server-provider.md#0221-next0))
- `@backstage/plugin-auth-backend-module-gcp-iap-provider` (0.4.20 → [0.4.21-next.0](../../changelogs/@backstage/plugin-auth-backend-module-gcp-iap-provider.md#0421-next0))
- `@backstage/plugin-auth-backend-module-github-provider` (0.5.8 → [0.5.9-next.0](../../changelogs/@backstage/plugin-auth-backend-module-github-provider.md#059-next0))
- `@backstage/plugin-auth-backend-module-gitlab-provider` (0.4.8 → [0.4.9-next.0](../../changelogs/@backstage/plugin-auth-backend-module-gitlab-provider.md#049-next0))
- `@backstage/plugin-auth-backend-module-google-provider` (0.3.20 → [0.3.21-next.0](../../changelogs/@backstage/plugin-auth-backend-module-google-provider.md#0321-next0))
- `@backstage/plugin-auth-backend-module-guest-provider` (0.2.24 → [0.2.25-next.0](../../changelogs/@backstage/plugin-auth-backend-module-guest-provider.md#0225-next0))
- `@backstage/plugin-auth-backend-module-oauth2-provider` (0.4.20 → [0.4.21-next.0](../../changelogs/@backstage/plugin-auth-backend-module-oauth2-provider.md#0421-next0))
- `@backstage/plugin-auth-backend-module-okta-provider` (0.2.20 → [0.2.21-next.0](../../changelogs/@backstage/plugin-auth-backend-module-okta-provider.md#0221-next0))
- `@backstage/plugin-auth-backend-module-onelogin-provider` (0.3.20 → [0.3.21-next.0](../../changelogs/@backstage/plugin-auth-backend-module-onelogin-provider.md#0321-next0))
- `@backstage/plugin-auth-backend-module-openshift-provider` (0.1.12 → [0.1.13-next.0](../../changelogs/@backstage/plugin-auth-backend-module-openshift-provider.md#0113-next0))
- `@backstage/plugin-auth-react` (0.1.32 → [0.1.33-next.0](../../changelogs/@backstage/plugin-auth-react.md#0133-next0))
- `@backstage/plugin-catalog` (2.0.10 → [2.0.11-next.0](../../changelogs/@backstage/plugin-catalog.md#2011-next0))
- `@backstage/plugin-catalog-backend-module-ai-model` (0.1.5 → [0.1.6-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-ai-model.md#016-next0))
- `@backstage/plugin-catalog-backend-module-aws` (0.4.29 → [0.4.30-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-aws.md#0430-next0))
- `@backstage/plugin-catalog-backend-module-azure` (0.3.23 → [0.3.24-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-azure.md#0324-next0))
- `@backstage/plugin-catalog-backend-module-backstage-openapi` (0.5.19 → [0.5.20-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-backstage-openapi.md#0520-next0))
- `@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.5.16 → [0.5.17-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-cloud.md#0517-next0))
- `@backstage/plugin-catalog-backend-module-bitbucket-server` (0.5.16 → [0.5.17-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-server.md#0517-next0))
- `@backstage/plugin-catalog-backend-module-gcp` (0.3.24 → [0.3.25-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-gcp.md#0325-next0))
- `@backstage/plugin-catalog-backend-module-gerrit` (0.3.19 → [0.3.20-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-gerrit.md#0320-next0))
- `@backstage/plugin-catalog-backend-module-gitea` (0.1.17 → [0.1.18-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-gitea.md#0118-next0))
- `@backstage/plugin-catalog-backend-module-github` (0.14.1 → [0.14.2-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-github.md#0142-next0))
- `@backstage/plugin-catalog-backend-module-github-org` (0.3.27 → [0.3.28-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-github-org.md#0328-next0))
- `@backstage/plugin-catalog-backend-module-gitlab-org` (0.2.26 → [0.2.27-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-gitlab-org.md#0227-next0))
- `@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.9.0 → [0.9.1-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-incremental-ingestion.md#091-next0))
- `@backstage/plugin-catalog-backend-module-ldap` (0.12.10 → [0.12.11-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-ldap.md#01211-next0))
- `@backstage/plugin-catalog-backend-module-logs` (0.1.27 → [0.1.28-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-logs.md#0128-next0))
- `@backstage/plugin-catalog-backend-module-msgraph` (0.10.7 → [0.10.8-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-msgraph.md#0108-next0))
- `@backstage/plugin-catalog-backend-module-msgraph-incremental` (0.1.5 → [0.1.6-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-msgraph-incremental.md#016-next0))
- `@backstage/plugin-catalog-backend-module-openapi` (0.2.27 → [0.2.28-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-openapi.md#0228-next0))
- `@backstage/plugin-catalog-backend-module-puppetdb` (0.2.27 → [0.2.28-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-puppetdb.md#0228-next0))
- `@backstage/plugin-catalog-backend-module-scaffolder-entity-model` (0.2.25 → [0.2.26-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-scaffolder-entity-model.md#0226-next0))
- `@backstage/plugin-catalog-graph` (0.6.9 → [0.6.10-next.0](../../changelogs/@backstage/plugin-catalog-graph.md#0610-next0))
- `@backstage/plugin-catalog-import` (0.13.19 → [0.13.20-next.0](../../changelogs/@backstage/plugin-catalog-import.md#01320-next0))
- `@backstage/plugin-catalog-node` (2.2.6 → [2.2.7-next.0](../../changelogs/@backstage/plugin-catalog-node.md#227-next0))
- `@backstage/plugin-catalog-react` (3.3.0 → [4.0.0-next.0](../../changelogs/@backstage/plugin-catalog-react.md#400-next0))
- `@backstage/plugin-catalog-unprocessed-entities` (0.2.36 → [0.2.37-next.0](../../changelogs/@backstage/plugin-catalog-unprocessed-entities.md#0237-next0))
- `@backstage/plugin-config-schema` (0.1.85 → [0.1.86-next.0](../../changelogs/@backstage/plugin-config-schema.md#0186-next0))
- `@backstage/plugin-devtools` (0.1.44 → [0.1.45-next.0](../../changelogs/@backstage/plugin-devtools.md#0145-next0))
- `@backstage/plugin-devtools-backend` (0.5.22 → [0.5.23-next.0](../../changelogs/@backstage/plugin-devtools-backend.md#0523-next0))
- `@backstage/plugin-devtools-react` (0.2.7 → [0.2.8-next.0](../../changelogs/@backstage/plugin-devtools-react.md#028-next0))
- `@backstage/plugin-events-backend-module-aws-sqs` (0.4.27 → [0.4.28-next.0](../../changelogs/@backstage/plugin-events-backend-module-aws-sqs.md#0428-next0))
- `@backstage/plugin-events-backend-module-azure` (0.2.36 → [0.2.37-next.0](../../changelogs/@backstage/plugin-events-backend-module-azure.md#0237-next0))
- `@backstage/plugin-events-backend-module-bitbucket-cloud` (0.2.36 → [0.2.37-next.0](../../changelogs/@backstage/plugin-events-backend-module-bitbucket-cloud.md#0237-next0))
- `@backstage/plugin-events-backend-module-bitbucket-server` (0.1.17 → [0.1.18-next.0](../../changelogs/@backstage/plugin-events-backend-module-bitbucket-server.md#0118-next0))
- `@backstage/plugin-events-backend-module-gerrit` (0.2.36 → [0.2.37-next.0](../../changelogs/@backstage/plugin-events-backend-module-gerrit.md#0237-next0))
- `@backstage/plugin-events-backend-module-github` (0.4.17 → [0.4.18-next.0](../../changelogs/@backstage/plugin-events-backend-module-github.md#0418-next0))
- `@backstage/plugin-events-backend-module-gitlab` (0.3.17 → [0.3.18-next.0](../../changelogs/@backstage/plugin-events-backend-module-gitlab.md#0318-next0))
- `@backstage/plugin-events-backend-module-google-pubsub` (0.2.8 → [0.2.9-next.0](../../changelogs/@backstage/plugin-events-backend-module-google-pubsub.md#029-next0))
- `@backstage/plugin-events-backend-module-kafka` (0.3.9 → [0.3.10-next.0](../../changelogs/@backstage/plugin-events-backend-module-kafka.md#0310-next0))
- `@backstage/plugin-events-backend-test-utils` (0.1.60 → [0.1.61-next.0](../../changelogs/@backstage/plugin-events-backend-test-utils.md#0161-next0))
- `@backstage/plugin-events-node` (0.4.27 → [0.4.28-next.0](../../changelogs/@backstage/plugin-events-node.md#0428-next0))
- `@backstage/plugin-gateway-backend` (1.1.10 → [1.1.11-next.0](../../changelogs/@backstage/plugin-gateway-backend.md#1111-next0))
- `@backstage/plugin-home` (0.9.11 → [0.9.12-next.0](../../changelogs/@backstage/plugin-home.md#0912-next0))
- `@backstage/plugin-home-react` (0.1.43 → [0.1.44-next.0](../../changelogs/@backstage/plugin-home-react.md#0144-next0))
- `@backstage/plugin-kubernetes` (0.12.24 → [0.12.25-next.0](../../changelogs/@backstage/plugin-kubernetes.md#01225-next0))
- `@backstage/plugin-kubernetes-backend` (0.21.12 → [0.21.13-next.0](../../changelogs/@backstage/plugin-kubernetes-backend.md#02113-next0))
- `@backstage/plugin-kubernetes-node` (0.4.9 → [0.4.10-next.0](../../changelogs/@backstage/plugin-kubernetes-node.md#0410-next0))
- `@backstage/plugin-kubernetes-react` (0.6.1 → [0.6.2-next.0](../../changelogs/@backstage/plugin-kubernetes-react.md#062-next0))
- `@backstage/plugin-mcp-actions-backend` (0.2.3 → [0.2.4-next.0](../../changelogs/@backstage/plugin-mcp-actions-backend.md#024-next0))
- `@backstage/plugin-mui-to-bui` (0.2.12 → [0.2.13-next.0](../../changelogs/@backstage/plugin-mui-to-bui.md#0213-next0))
- `@backstage/plugin-notifications` (0.6.1 → [0.6.2-next.0](../../changelogs/@backstage/plugin-notifications.md#062-next0))
- `@backstage/plugin-notifications-backend` (0.6.10 → [0.6.11-next.0](../../changelogs/@backstage/plugin-notifications-backend.md#0611-next0))
- `@backstage/plugin-notifications-backend-module-email` (0.3.26 → [0.3.27-next.0](../../changelogs/@backstage/plugin-notifications-backend-module-email.md#0327-next0))
- `@backstage/plugin-notifications-backend-module-slack` (0.4.7 → [0.4.8-next.0](../../changelogs/@backstage/plugin-notifications-backend-module-slack.md#048-next0))
- `@backstage/plugin-notifications-node` (0.2.31 → [0.2.32-next.0](../../changelogs/@backstage/plugin-notifications-node.md#0232-next0))
- `@backstage/plugin-org` (0.8.0 → [0.8.1-next.0](../../changelogs/@backstage/plugin-org.md#081-next0))
- `@backstage/plugin-org-react` (0.1.55 → [0.1.56-next.0](../../changelogs/@backstage/plugin-org-react.md#0156-next0))
- `@backstage/plugin-permission-backend` (0.7.17 → [0.7.18-next.0](../../changelogs/@backstage/plugin-permission-backend.md#0718-next0))
- `@backstage/plugin-permission-backend-module-allow-all-policy` (0.2.24 → [0.2.25-next.0](../../changelogs/@backstage/plugin-permission-backend-module-allow-all-policy.md#0225-next0))
- `@backstage/plugin-permission-node` (0.11.5 → [0.11.6-next.0](../../changelogs/@backstage/plugin-permission-node.md#0116-next0))
- `@backstage/plugin-permission-react` (0.5.6 → [0.5.7-next.0](../../changelogs/@backstage/plugin-permission-react.md#057-next0))
- `@backstage/plugin-proxy-backend` (0.6.19 → [0.6.20-next.0](../../changelogs/@backstage/plugin-proxy-backend.md#0620-next0))
- `@backstage/plugin-proxy-node` (0.1.20 → [0.1.21-next.0](../../changelogs/@backstage/plugin-proxy-node.md#0121-next0))
- `@backstage/plugin-scaffolder-backend-module-azure` (0.2.27 → [0.2.28-next.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-azure.md#0228-next0))
- `@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` (0.3.12 → [0.3.13-next.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket-cloud.md#0313-next0))
- `@backstage/plugin-scaffolder-backend-module-bitbucket-server` (0.2.27 → [0.2.28-next.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket-server.md#0228-next0))
- `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.3.27 → [0.3.28-next.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-confluence-to-markdown.md#0328-next0))
- `@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.3.28 → [0.3.29-next.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-cookiecutter.md#0329-next0))
- `@backstage/plugin-scaffolder-backend-module-gerrit` (0.2.26 → [0.2.27-next.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-gerrit.md#0227-next0))
- `@backstage/plugin-scaffolder-backend-module-gitea` (0.2.26 → [0.2.27-next.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-gitea.md#0227-next0))
- `@backstage/plugin-scaffolder-backend-module-github` (0.10.1 → [0.10.2-next.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-github.md#0102-next0))
- `@backstage/plugin-scaffolder-backend-module-notifications` (0.1.27 → [0.1.28-next.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-notifications.md#0128-next0))
- `@backstage/plugin-scaffolder-backend-module-rails` (0.5.26 → [0.5.27-next.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-rails.md#0527-next0))
- `@backstage/plugin-scaffolder-backend-module-sentry` (0.4.1 → [0.4.2-next.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-sentry.md#042-next0))
- `@backstage/plugin-scaffolder-backend-module-workspace-database` (0.1.1 → [0.1.2-next.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-workspace-database.md#012-next0))
- `@backstage/plugin-scaffolder-backend-module-yeoman` (0.4.27 → [0.4.28-next.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-yeoman.md#0428-next0))
- `@backstage/plugin-scaffolder-node` (0.13.8 → [0.13.9-next.0](../../changelogs/@backstage/plugin-scaffolder-node.md#0139-next0))
- `@backstage/plugin-scaffolder-node-test-utils` (0.3.16 → [0.3.17-next.0](../../changelogs/@backstage/plugin-scaffolder-node-test-utils.md#0317-next0))
- `@backstage/plugin-search` (1.7.9 → [1.7.10-next.0](../../changelogs/@backstage/plugin-search.md#1710-next0))
- `@backstage/plugin-search-backend` (2.1.8 → [2.1.9-next.0](../../changelogs/@backstage/plugin-search-backend.md#219-next0))
- `@backstage/plugin-search-backend-module-catalog` (0.3.20 → [0.3.21-next.0](../../changelogs/@backstage/plugin-search-backend-module-catalog.md#0321-next0))
- `@backstage/plugin-search-backend-module-explore` (0.3.19 → [0.3.20-next.0](../../changelogs/@backstage/plugin-search-backend-module-explore.md#0320-next0))
- `@backstage/plugin-search-backend-module-pg` (0.5.60 → [0.5.61-next.0](../../changelogs/@backstage/plugin-search-backend-module-pg.md#0561-next0))
- `@backstage/plugin-search-backend-module-stack-overflow-collator` (0.3.25 → [0.3.26-next.0](../../changelogs/@backstage/plugin-search-backend-module-stack-overflow-collator.md#0326-next0))
- `@backstage/plugin-search-backend-module-techdocs` (0.4.19 → [0.4.20-next.0](../../changelogs/@backstage/plugin-search-backend-module-techdocs.md#0420-next0))
- `@backstage/plugin-search-backend-node` (1.4.9 → [1.4.10-next.0](../../changelogs/@backstage/plugin-search-backend-node.md#1410-next0))
- `@backstage/plugin-search-react` (1.11.9 → [1.11.10-next.0](../../changelogs/@backstage/plugin-search-react.md#11110-next0))
- `@backstage/plugin-signals` (0.0.36 → [0.0.37-next.0](../../changelogs/@backstage/plugin-signals.md#0037-next0))
- `@backstage/plugin-signals-backend` (0.3.20 → [0.3.21-next.0](../../changelogs/@backstage/plugin-signals-backend.md#0321-next0))
- `@backstage/plugin-signals-node` (0.2.6 → [0.2.7-next.0](../../changelogs/@backstage/plugin-signals-node.md#027-next0))
- `@backstage/plugin-signals-react` (0.0.27 → [0.0.28-next.0](../../changelogs/@backstage/plugin-signals-react.md#0028-next0))
- `@backstage/plugin-techdocs-addons-test-utils` (2.0.10 → [2.0.11-next.0](../../changelogs/@backstage/plugin-techdocs-addons-test-utils.md#2011-next0))
- `@backstage/plugin-techdocs-module-addons-contrib` (1.1.41 → [1.1.42-next.0](../../changelogs/@backstage/plugin-techdocs-module-addons-contrib.md#1142-next0))
- `@backstage/plugin-techdocs-react` (1.4.0 → [1.4.1-next.0](../../changelogs/@backstage/plugin-techdocs-react.md#141-next0))
- `@backstage/plugin-user-settings` (0.9.8 → [0.9.9-next.0](../../changelogs/@backstage/plugin-user-settings.md#099-next0))
- `@backstage/plugin-user-settings-backend` (0.4.8 → [0.4.9-next.0](../../changelogs/@backstage/plugin-user-settings-backend.md#049-next0))
- `@backstage/repo-tools` (0.19.2 → [0.19.3-next.0](../../changelogs/@backstage/repo-tools.md#0193-next0))
- `@backstage/test-utils` (1.7.23 → [1.7.24-next.0](../../changelogs/@backstage/test-utils.md#1724-next0))
