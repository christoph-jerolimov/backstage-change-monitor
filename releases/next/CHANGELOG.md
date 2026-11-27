# Backstage Release 1.58.0-next.0 changelog

Changes between 1.57.4 and 1.58.0-next.0 — 0 added, 0 removed, 181 upgraded, 38 unchanged packages.

## Summary

- [Breaking changes](#breaking-changes): 2 packages
- [0.x minor version bumps](#0x-minor-version-bumps): 1 package
- [0.x patch version bumps](#0x-patch-version-bumps): 18 packages
- [Other minor version bumps](#other-minor-version-bumps): 1 package
- [Other patch version bumps](#other-patch-version-bumps): 8 packages
- [Excluded dependency updates](#excluded-dependency-updates): 151 packages

## Table of contents

- [Breaking changes](#breaking-changes)
  - [`@backstage/cli-module-build` (0.1.10 → 0.2.0-next.0)](#backstagecli-module-build-0110--020-next0)
  - [`@backstage/plugin-auth-backend-module-aws-alb-provider` (0.4.22 → 0.5.0-next.0)](#backstageplugin-auth-backend-module-aws-alb-provider-0422--050-next0)
- [0.x minor version bumps](#0x-minor-version-bumps)
  - [`@backstage/connections` (0.4.2 → 0.5.0-next.0)](#backstageconnections-042--050-next0)
- [0.x patch version bumps](#0x-patch-version-bumps)
  - [`@backstage/backend-defaults` (0.19.1 → 0.19.1-next.0)](#backstagebackend-defaults-0191--0191-next0)
  - [`@backstage/cli` (0.36.8 → 0.36.9-next.0)](#backstagecli-0368--0369-next0)
  - [`@backstage/cli-module-package-manager-yarn` (0.1.5 → 0.1.6-next.0)](#backstagecli-module-package-manager-yarn-015--016-next0)
  - [`@backstage/cli-node` (0.3.6 → 0.3.7-next.0)](#backstagecli-node-036--037-next0)
  - [`@backstage/core-components` (0.18.16 → 0.18.17-next.0)](#backstagecore-components-01816--01817-next0)
  - [`@backstage/create-app` (0.9.4 → 0.9.5-next.0)](#backstagecreate-app-094--095-next0)
  - [`@backstage/plugin-app` (0.6.1 → 0.6.1-next.0)](#backstageplugin-app-061--061-next0)
  - [`@backstage/plugin-auth-backend` (0.31.1 → 0.31.1-next.0)](#backstageplugin-auth-backend-0311--0311-next0)
  - [`@backstage/plugin-auth-backend-module-auth0-provider` (0.4.8 → 0.4.8-next.0)](#backstageplugin-auth-backend-module-auth0-provider-048--048-next0)
  - [`@backstage/plugin-auth-backend-module-cloudflare-access-provider` (0.5.3 → 0.5.3-next.0)](#backstageplugin-auth-backend-module-cloudflare-access-provider-053--053-next0)
  - [`@backstage/plugin-catalog-backend-module-azure` (0.3.25 → 0.3.25-next.0)](#backstageplugin-catalog-backend-module-azure-0325--0325-next0)
  - [`@backstage/plugin-catalog-backend-module-github` (0.14.3 → 0.14.3-next.0)](#backstageplugin-catalog-backend-module-github-0143--0143-next0)
  - [`@backstage/plugin-catalog-backend-module-unprocessed` (0.6.18 → 0.6.19-next.0)](#backstageplugin-catalog-backend-module-unprocessed-0618--0619-next0)
  - [`@backstage/plugin-catalog-unprocessed-entities` (0.2.37 → 0.2.38-next.0)](#backstageplugin-catalog-unprocessed-entities-0237--0238-next0)
  - [`@backstage/plugin-devtools` (0.1.45 → 0.1.46-next.0)](#backstageplugin-devtools-0145--0146-next0)
  - [`@backstage/plugin-kubernetes-backend` (0.21.15 → 0.21.16-next.0)](#backstageplugin-kubernetes-backend-02115--02116-next0)
  - [`@backstage/plugin-scaffolder-backend-module-gitlab` (0.12.4 → 0.12.5-next.0)](#backstageplugin-scaffolder-backend-module-gitlab-0124--0125-next0)
  - [`@backstage/repo-tools` (0.19.3 → 0.19.4-next.0)](#backstagerepo-tools-0193--0194-next0)
- [Other minor version bumps](#other-minor-version-bumps)
  - [`@backstage/integration` (2.3.0 → 2.2.1-next.0)](#backstageintegration-230--221-next0)
- [Other patch version bumps](#other-patch-version-bumps)
  - [`@backstage/backend-app-api` (1.9.0 → 1.9.1-next.0)](#backstagebackend-app-api-190--191-next0)
  - [`@backstage/core-app-api` (1.20.8 → 1.20.8-next.0)](#backstagecore-app-api-1208--1208-next0)
  - [`@backstage/frontend-app-api` (1.0.1 → 1.0.1-next.0)](#backstagefrontend-app-api-101--101-next0)
  - [`@backstage/frontend-test-utils` (1.0.0 → 1.0.1-next.0)](#backstagefrontend-test-utils-100--101-next0)
  - [`@backstage/plugin-catalog-backend` (4.0.6 → 4.0.6-next.0)](#backstageplugin-catalog-backend-406--406-next0)
  - [`@backstage/plugin-scaffolder-backend` (4.3.1 → 4.3.1-next.0)](#backstageplugin-scaffolder-backend-431--431-next0)
  - [`@backstage/plugin-scaffolder-node` (1.0.1 → 1.0.1-next.0)](#backstageplugin-scaffolder-node-101--101-next0)
  - [`@backstage/test-utils` (1.8.0 → 1.8.1-next.0)](#backstagetest-utils-180--181-next0)
- [Excluded dependency updates](#excluded-dependency-updates)

## Breaking changes

### `@backstage/cli-module-build` (0.1.10 → [0.2.0-next.0](../../changelogs/@backstage/cli-module-build.md#020-next0))

#### 0.2.0-next.0

##### Minor Changes

- [`a6a72ab`](https://github.com/backstage/backstage/commit/a6a72ab): **BREAKING**: Updated the frontend bundler to Rspack 2. The `LEGACY_WEBPACK_BUILD` fallback is unchanged. Production bundles are smaller, as Rspack 2 removes more unused code by default.

  Production CSS is now minified for the browsers in the app's `browserslist` configuration, rather than for all browsers that fully support ES6, which usually means fewer vendor prefixes and fallbacks. Production builds now always use the `production` environment of that configuration, or the one that `BROWSERSLIST_ENV` names, instead of picking it by `NODE_ENV`. Apps without a `browserslist` configuration are unaffected.

  The new Rspack dev server dropped the `path` and `logLevel` options of the `proxy` configuration in `package.json`. Rename `path` to `context`, and remove `logLevel`, which no longer has an effect. Both are still accepted for now and log a warning.

  The `EXPERIMENTAL_LAZY_COMPILATION` environment variable now enables lazy compilation in the frontend dev server. With Rspack it had no effect before. It still has no effect on module federation remotes.

  The error overlay of the frontend dev server is now rendered in an element with the ID `rspack-dev-server-client-overlay` instead of `webpack-dev-server-client-overlay`. Update any end-to-end tests that look for the overlay by its ID.

### `@backstage/plugin-auth-backend-module-aws-alb-provider` (0.4.22 → [0.5.0-next.0](../../changelogs/@backstage/plugin-auth-backend-module-aws-alb-provider.md#050-next0))

#### 0.5.0-next.0

##### Minor Changes

- [`9a7a088`](https://github.com/backstage/backstage/commit/9a7a088): **BREAKING**: The `awsalb` auth provider now requires the `signer` option to be set to the ARN of the ALB that signs the tokens. Configurations that use the provider without a `signer` are rejected at startup, and sign-in attempts are rejected if the token's signer does not match it.

## 0.x minor version bumps

### `@backstage/connections` (0.4.2 → [0.5.0-next.0](../../changelogs/@backstage/connections.md#050-next0))

#### 0.5.0-next.0

##### Minor Changes

- [`714153c`](https://github.com/backstage/backstage/commit/714153c): All URL-based connection types now require `baseUrl` instead of `host`. Base URLs must use HTTP(S), retain context paths, and receive a trailing slash for resolving relative paths. Lookup and duplicate validation use the host parsed from `baseUrl`, including non-default ports. Update explicit `connections` configuration to use a full base URL; legacy `integrations` configuration is converted automatically, preserving configured base URLs and endpoints.

  Returned URL-based connections expose `baseUrl` instead of `host`. The singleton `aws` connection type and its account-based lookup are unchanged. Provider-specific API URL fields remain optional and do not receive an automatic fallback.

  Replaced `lookupStrategy` and `ConnectionLookupStrategy` with `getLookupIdentity` on connection type definitions. The callback returns `{ key: 'host', value }` for host matching, or `undefined` for type-only selection. Host-based and AWS query shapes are unchanged.

##### Patch Changes

- [`7cd2942`](https://github.com/backstage/backstage/commit/7cd2942): Added Argo CD, Datadog, Jenkins, Jira, PagerDuty, Snyk and SonarQube connection types with provider-specific authentication and configuration/consumption guides.

  Connections use an explicit instance URL for lookup and preserve installation context paths when resolving relative API requests. Independent API destinations can be configured where needed, including PagerDuty regional endpoints and Jira scoped-token gateways.

- [`e843f6c`](https://github.com/backstage/backstage/commit/e843f6c): Added a Grafana connection type for authenticated instance APIs, with service-account tokens and self-hosted basic authentication. Connections support Grafana Cloud stacks and self-hosted base URLs, including subpaths.

  Connections are identified by the instance base URL and can use a separate API base URL for backend requests. Both URL roots preserve installation paths and receive a trailing slash for relative requests.

## 0.x patch version bumps

### `@backstage/backend-defaults` (0.19.1 → [0.19.1-next.0](../../changelogs/@backstage/backend-defaults.md#0191-next0))

_No changelog entries found._

### `@backstage/cli` (0.36.8 → [0.36.9-next.0](../../changelogs/@backstage/cli.md#0369-next0))

#### 0.36.9-next.0

##### Patch Changes

- [`928c181`](https://github.com/backstage/backstage/commit/928c181): Added support for CLI modules that register package commands with an `if` condition through `addPackageCommand`.

### `@backstage/cli-module-package-manager-yarn` (0.1.5 → [0.1.6-next.0](../../changelogs/@backstage/cli-module-package-manager-yarn.md#016-next0))

#### 0.1.6-next.0

##### Patch Changes

- [`2277b95`](https://github.com/backstage/backstage/commit/2277b95): Updated `@yarnpkg/core` to `^4.9.3`, which fixes the broken `got` dependency published in `@yarnpkg/core@4.9.2`. The `pm verify-patches` command now works out of the box again, without adding any Yarn packages or resolutions to your project. If you added `@yarnpkg/cli`, `@yarnpkg/core`, `@yarnpkg/plugin-patch` or the `@yarnpkg/core/got` resolution to your root `package.json` for this command, you can remove them.

### `@backstage/cli-node` (0.3.6 → [0.3.7-next.0](../../changelogs/@backstage/cli-node.md#037-next0))

#### 0.3.7-next.0

##### Patch Changes

- [`928c181`](https://github.com/backstage/backstage/commit/928c181): CLI modules can now register `package` commands with `addPackageCommand` and an optional `if` condition, so that several modules can provide the same command and the right one is chosen for each package. At most one module can provide the command without `if`, which acts as the fallback for packages where no other module is enabled.

### `@backstage/core-components` (0.18.16 → [0.18.17-next.0](../../changelogs/@backstage/core-components.md#01817-next0))

#### 0.18.17-next.0

##### Patch Changes

- [`831ae9c`](https://github.com/backstage/backstage/commit/831ae9c): Updated dependency `linkify-react` to `4.4.0`.
  Updated dependency `linkifyjs` to `4.4.0`.

### `@backstage/create-app` (0.9.4 → [0.9.5-next.0](../../changelogs/@backstage/create-app.md#095-next0))

#### 0.9.5-next.0

##### Patch Changes

- Bumped create-app version.

### `@backstage/plugin-app` (0.6.1 → [0.6.1-next.0](../../changelogs/@backstage/plugin-app.md#061-next0))

_No changelog entries found._

### `@backstage/plugin-auth-backend` (0.31.1 → [0.31.1-next.0](../../changelogs/@backstage/plugin-auth-backend.md#0311-next0))

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-auth0-provider` (0.4.8 → [0.4.8-next.0](../../changelogs/@backstage/plugin-auth-backend-module-auth0-provider.md#048-next0))

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-cloudflare-access-provider` (0.5.3 → [0.5.3-next.0](../../changelogs/@backstage/plugin-auth-backend-module-cloudflare-access-provider.md#053-next0))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-azure` (0.3.25 → [0.3.25-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-azure.md#0325-next0))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-github` (0.14.3 → [0.14.3-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-github.md#0143-next0))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-unprocessed` (0.6.18 → [0.6.19-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-unprocessed.md#0619-next0))

#### 0.6.19-next.0

##### Patch Changes

- [`a8a15b3`](https://github.com/backstage/backstage/commit/a8a15b3): Moved setup, configuration, and usage documentation to backstage.io and trimmed package README.

### `@backstage/plugin-catalog-unprocessed-entities` (0.2.37 → [0.2.38-next.0](../../changelogs/@backstage/plugin-catalog-unprocessed-entities.md#0238-next0))

#### 0.2.38-next.0

##### Patch Changes

- [`a8a15b3`](https://github.com/backstage/backstage/commit/a8a15b3): Moved setup, configuration, and usage documentation to backstage.io and trimmed package README.

### `@backstage/plugin-devtools` (0.1.45 → [0.1.46-next.0](../../changelogs/@backstage/plugin-devtools.md#0146-next0))

#### 0.1.46-next.0

##### Patch Changes

- [`4f96aa9`](https://github.com/backstage/backstage/commit/4f96aa9): Migrated the scheduled tasks page in DevTools from Material UI to Backstage UI. You can still type a plugin ID that isn't in the configured list. Permission-denied indicators are keyboard accessible, and empty plugin results are exposed as status updates.
- [`578799a`](https://github.com/backstage/backstage/commit/578799a): Migrate ExternalDependenciesContent to use the Backstage UI (BUI) Table component

### `@backstage/plugin-kubernetes-backend` (0.21.15 → [0.21.16-next.0](../../changelogs/@backstage/plugin-kubernetes-backend.md#02116-next0))

#### 0.21.16-next.0

##### Patch Changes

- [`c60748e`](https://github.com/backstage/backstage/commit/c60748e): Resource types that return a 404 from the Kubernetes API (for example, custom resource definitions not installed on a cluster) are now silently skipped instead of surfacing as errors in the UI. Other error codes (401, 403, 5xx) continue to be reported normally.

### `@backstage/plugin-scaffolder-backend-module-gitlab` (0.12.4 → [0.12.5-next.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-gitlab.md#0125-next0))

#### 0.12.5-next.0

##### Patch Changes

- [`bd97c92`](https://github.com/backstage/backstage/commit/bd97c92): Added an optional `squash` input to the `publish:gitlab:merge-request` action to control whether commits are squashed when the merge request is merged. When omitted, the GitLab project's squash setting is respected.

### `@backstage/repo-tools` (0.19.3 → [0.19.4-next.0](../../changelogs/@backstage/repo-tools.md#0194-next0))

#### 0.19.4-next.0

##### Patch Changes

- [`cc9871a`](https://github.com/backstage/backstage/commit/cc9871a): `package schema openapi generate` now writes an `.openapi-manifest.json` file into each generated directory, and `repo schema openapi validate` uses it to report generated server and client code that is out of date with its `openapi.yaml` or has been edited by hand, along with the command that fixes it. Directories without a manifest, or generated with a different generator version, only produce a warning.
- [`33532db`](https://github.com/backstage/backstage/commit/33532db): The OpenAPI `generate` commands no longer run Prettier on generated code, so the output stays as emitted by the generator. Add `**/src/schema/openapi/generated/**` to your `.prettierignore` to keep your formatter from rewriting it.

## Other minor version bumps

### `@backstage/integration` (2.3.0 → [2.2.1-next.0](../../changelogs/@backstage/integration.md#221-next0))

_No changelog entries found._

## Other patch version bumps

### `@backstage/backend-app-api` (1.9.0 → [1.9.1-next.0](../../changelogs/@backstage/backend-app-api.md#191-next0))

#### 1.9.1-next.0

##### Patch Changes

- [`057b255`](https://github.com/backstage/backstage/commit/057b255): Fixed repeated shutdown signals causing the backend to exit before cleanup finishes. Process shutdown also waits for an explicit `backend.stop()` that is already in progress.

### `@backstage/core-app-api` (1.20.8 → [1.20.8-next.0](../../changelogs/@backstage/core-app-api.md#1208-next0))

_No changelog entries found._

### `@backstage/frontend-app-api` (1.0.1 → [1.0.1-next.0](../../changelogs/@backstage/frontend-app-api.md#101-next0))

_No changelog entries found._

### `@backstage/frontend-test-utils` (1.0.0 → [1.0.1-next.0](../../changelogs/@backstage/frontend-test-utils.md#101-next0))

#### 1.0.1-next.0

##### Patch Changes

- [`e2378df`](https://github.com/backstage/backstage/commit/e2378df): Updated dependency `i18next` to `^26.0.0`.

### `@backstage/plugin-catalog-backend` (4.0.6 → [4.0.6-next.0](../../changelogs/@backstage/plugin-catalog-backend.md#406-next0))

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend` (4.3.1 → [4.3.1-next.0](../../changelogs/@backstage/plugin-scaffolder-backend.md#431-next0))

_No changelog entries found._

### `@backstage/plugin-scaffolder-node` (1.0.1 → [1.0.1-next.0](../../changelogs/@backstage/plugin-scaffolder-node.md#101-next0))

_No changelog entries found._

### `@backstage/test-utils` (1.8.0 → [1.8.1-next.0](../../changelogs/@backstage/test-utils.md#181-next0))

#### 1.8.1-next.0

##### Patch Changes

- [`e2378df`](https://github.com/backstage/backstage/commit/e2378df): Updated dependency `i18next` to `^26.0.0`.

## Excluded dependency updates

- `@backstage/app-defaults` (1.8.0 → [1.8.1-next.0](../../changelogs/@backstage/app-defaults.md#181-next0))
- `@backstage/backend-dynamic-feature-service` (0.8.9 → [0.8.10-next.0](../../changelogs/@backstage/backend-dynamic-feature-service.md#0810-next0))
- `@backstage/backend-openapi-utils` (0.7.4 → [0.7.5-next.0](../../changelogs/@backstage/backend-openapi-utils.md#075-next0))
- `@backstage/backend-plugin-api` (1.12.0 → [1.12.1-next.0](../../changelogs/@backstage/backend-plugin-api.md#1121-next0))
- `@backstage/backend-test-utils` (1.12.0 → [1.12.1-next.0](../../changelogs/@backstage/backend-test-utils.md#1121-next0))
- `@backstage/cli-defaults` (0.1.8 → [0.1.9-next.0](../../changelogs/@backstage/cli-defaults.md#019-next0))
- `@backstage/cli-module-actions` (0.1.5 → [0.1.6-next.0](../../changelogs/@backstage/cli-module-actions.md#016-next0))
- `@backstage/cli-module-auth` (0.1.6 → [0.1.7-next.0](../../changelogs/@backstage/cli-module-auth.md#017-next0))
- `@backstage/cli-module-catalog` (0.2.1 → [0.2.2-next.0](../../changelogs/@backstage/cli-module-catalog.md#022-next0))
- `@backstage/cli-module-config` (0.1.9 → [0.1.10-next.0](../../changelogs/@backstage/cli-module-config.md#0110-next0))
- `@backstage/cli-module-github` (0.1.6 → [0.1.7-next.0](../../changelogs/@backstage/cli-module-github.md#017-next0))
- `@backstage/cli-module-info` (0.1.6 → [0.1.7-next.0](../../changelogs/@backstage/cli-module-info.md#017-next0))
- `@backstage/cli-module-lint` (0.1.7 → [0.1.8-next.0](../../changelogs/@backstage/cli-module-lint.md#018-next0))
- `@backstage/cli-module-maintenance` (0.1.7 → [0.1.8-next.0](../../changelogs/@backstage/cli-module-maintenance.md#018-next0))
- `@backstage/cli-module-migrate` (0.2.3 → [0.2.4-next.0](../../changelogs/@backstage/cli-module-migrate.md#024-next0))
- `@backstage/cli-module-new` (0.1.9 → [0.1.10-next.0](../../changelogs/@backstage/cli-module-new.md#0110-next0))
- `@backstage/cli-module-scaffolder` (0.2.1 → [0.2.2-next.0](../../changelogs/@backstage/cli-module-scaffolder.md#022-next0))
- `@backstage/cli-module-search` (0.2.1 → [0.2.2-next.0](../../changelogs/@backstage/cli-module-search.md#022-next0))
- `@backstage/cli-module-test-jest` (0.1.8 → [0.1.9-next.0](../../changelogs/@backstage/cli-module-test-jest.md#019-next0))
- `@backstage/cli-module-translations` (0.1.6 → [0.1.7-next.0](../../changelogs/@backstage/cli-module-translations.md#017-next0))
- `@backstage/core-compat-api` (0.6.0 → [0.6.1-next.0](../../changelogs/@backstage/core-compat-api.md#061-next0))
- `@backstage/dev-utils` (1.2.0 → [1.2.1-next.0](../../changelogs/@backstage/dev-utils.md#121-next0))
- `@backstage/frontend-defaults` (0.5.8 → [0.5.9-next.0](../../changelogs/@backstage/frontend-defaults.md#059-next0))
- `@backstage/frontend-dev-utils` (1.0.0 → [1.0.1-next.0](../../changelogs/@backstage/frontend-dev-utils.md#101-next0))
- `@backstage/integration-aws-node` (0.2.4 → [0.2.5-next.0](../../changelogs/@backstage/integration-aws-node.md#025-next0))
- `@backstage/integration-react` (1.3.0 → [1.3.1-next.0](../../changelogs/@backstage/integration-react.md#131-next0))
- `@backstage/plugin-api-docs` (0.14.9 → [0.14.10-next.0](../../changelogs/@backstage/plugin-api-docs.md#01410-next0))
- `@backstage/plugin-app-backend` (0.5.20 → [0.5.21-next.0](../../changelogs/@backstage/plugin-app-backend.md#0521-next0))
- `@backstage/plugin-app-module-user-settings` (0.1.4 → [0.1.5-next.0](../../changelogs/@backstage/plugin-app-module-user-settings.md#015-next0))
- `@backstage/plugin-app-node` (0.1.51 → [0.1.52-next.0](../../changelogs/@backstage/plugin-app-node.md#0152-next0))
- `@backstage/plugin-app-visualizer` (0.2.10 → [0.2.11-next.0](../../changelogs/@backstage/plugin-app-visualizer.md#0211-next0))
- `@backstage/plugin-auth-backend-module-atlassian-provider` (0.5.1 → [0.5.2-next.0](../../changelogs/@backstage/plugin-auth-backend-module-atlassian-provider.md#052-next0))
- `@backstage/plugin-auth-backend-module-azure-easyauth-provider` (0.2.26 → [0.2.27-next.0](../../changelogs/@backstage/plugin-auth-backend-module-azure-easyauth-provider.md#0227-next0))
- `@backstage/plugin-auth-backend-module-bitbucket-provider` (0.3.21 → [0.3.22-next.0](../../changelogs/@backstage/plugin-auth-backend-module-bitbucket-provider.md#0322-next0))
- `@backstage/plugin-auth-backend-module-bitbucket-server-provider` (0.2.21 → [0.2.22-next.0](../../changelogs/@backstage/plugin-auth-backend-module-bitbucket-server-provider.md#0222-next0))
- `@backstage/plugin-auth-backend-module-gcp-iap-provider` (0.4.21 → [0.4.22-next.0](../../changelogs/@backstage/plugin-auth-backend-module-gcp-iap-provider.md#0422-next0))
- `@backstage/plugin-auth-backend-module-github-provider` (0.5.9 → [0.5.10-next.0](../../changelogs/@backstage/plugin-auth-backend-module-github-provider.md#0510-next0))
- `@backstage/plugin-auth-backend-module-gitlab-provider` (0.4.9 → [0.4.10-next.0](../../changelogs/@backstage/plugin-auth-backend-module-gitlab-provider.md#0410-next0))
- `@backstage/plugin-auth-backend-module-google-provider` (0.3.21 → [0.3.22-next.0](../../changelogs/@backstage/plugin-auth-backend-module-google-provider.md#0322-next0))
- `@backstage/plugin-auth-backend-module-guest-provider` (0.2.25 → [0.2.26-next.0](../../changelogs/@backstage/plugin-auth-backend-module-guest-provider.md#0226-next0))
- `@backstage/plugin-auth-backend-module-microsoft-provider` (0.3.21 → [0.3.22-next.0](../../changelogs/@backstage/plugin-auth-backend-module-microsoft-provider.md#0322-next0))
- `@backstage/plugin-auth-backend-module-oauth2-provider` (0.4.21 → [0.4.22-next.0](../../changelogs/@backstage/plugin-auth-backend-module-oauth2-provider.md#0422-next0))
- `@backstage/plugin-auth-backend-module-oauth2-proxy-provider` (0.3.5 → [0.3.6-next.0](../../changelogs/@backstage/plugin-auth-backend-module-oauth2-proxy-provider.md#036-next0))
- `@backstage/plugin-auth-backend-module-oidc-provider` (0.4.23 → [0.4.24-next.0](../../changelogs/@backstage/plugin-auth-backend-module-oidc-provider.md#0424-next0))
- `@backstage/plugin-auth-backend-module-okta-provider` (0.2.21 → [0.2.22-next.0](../../changelogs/@backstage/plugin-auth-backend-module-okta-provider.md#0222-next0))
- `@backstage/plugin-auth-backend-module-onelogin-provider` (0.3.21 → [0.3.22-next.0](../../changelogs/@backstage/plugin-auth-backend-module-onelogin-provider.md#0322-next0))
- `@backstage/plugin-auth-backend-module-openshift-provider` (0.1.13 → [0.1.14-next.0](../../changelogs/@backstage/plugin-auth-backend-module-openshift-provider.md#0114-next0))
- `@backstage/plugin-auth-backend-module-pinniped-provider` (0.3.20 → [0.3.21-next.0](../../changelogs/@backstage/plugin-auth-backend-module-pinniped-provider.md#0321-next0))
- `@backstage/plugin-auth-backend-module-vmware-cloud-provider` (0.5.20 → [0.5.21-next.0](../../changelogs/@backstage/plugin-auth-backend-module-vmware-cloud-provider.md#0521-next0))
- `@backstage/plugin-auth-node` (0.7.8 → [0.7.9-next.0](../../changelogs/@backstage/plugin-auth-node.md#079-next0))
- `@backstage/plugin-auth-react` (0.1.33 → [0.1.34-next.0](../../changelogs/@backstage/plugin-auth-react.md#0134-next0))
- `@backstage/plugin-bitbucket-cloud-common` (0.3.15 → [0.3.16-next.0](../../changelogs/@backstage/plugin-bitbucket-cloud-common.md#0316-next0))
- `@backstage/plugin-catalog` (2.1.0 → [2.1.1-next.0](../../changelogs/@backstage/plugin-catalog.md#211-next0))
- `@backstage/plugin-catalog-backend-module-ai-model` (0.1.6 → [0.1.7-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-ai-model.md#017-next0))
- `@backstage/plugin-catalog-backend-module-aws` (0.4.30 → [0.4.31-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-aws.md#0431-next0))
- `@backstage/plugin-catalog-backend-module-backstage-openapi` (0.5.20 → [0.5.21-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-backstage-openapi.md#0521-next0))
- `@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.5.17 → [0.5.18-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-cloud.md#0518-next0))
- `@backstage/plugin-catalog-backend-module-bitbucket-server` (0.5.17 → [0.5.18-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-server.md#0518-next0))
- `@backstage/plugin-catalog-backend-module-gcp` (0.3.25 → [0.3.26-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-gcp.md#0326-next0))
- `@backstage/plugin-catalog-backend-module-gerrit` (0.3.20 → [0.3.21-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-gerrit.md#0321-next0))
- `@backstage/plugin-catalog-backend-module-gitea` (0.1.18 → [0.1.19-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-gitea.md#0119-next0))
- `@backstage/plugin-catalog-backend-module-github-org` (0.3.28 → [0.3.29-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-github-org.md#0329-next0))
- `@backstage/plugin-catalog-backend-module-gitlab` (0.8.11 → [0.8.12-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-gitlab.md#0812-next0))
- `@backstage/plugin-catalog-backend-module-gitlab-org` (0.2.27 → [0.2.28-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-gitlab-org.md#0228-next0))
- `@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.9.1 → [0.9.2-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-incremental-ingestion.md#092-next0))
- `@backstage/plugin-catalog-backend-module-ldap` (0.13.0 → [0.13.1-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-ldap.md#0131-next0))
- `@backstage/plugin-catalog-backend-module-logs` (0.1.28 → [0.1.29-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-logs.md#0129-next0))
- `@backstage/plugin-catalog-backend-module-msgraph` (0.10.8 → [0.10.9-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-msgraph.md#0109-next0))
- `@backstage/plugin-catalog-backend-module-msgraph-incremental` (0.1.6 → [0.1.7-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-msgraph-incremental.md#017-next0))
- `@backstage/plugin-catalog-backend-module-openapi` (0.2.28 → [0.2.29-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-openapi.md#0229-next0))
- `@backstage/plugin-catalog-backend-module-puppetdb` (0.2.28 → [0.2.29-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-puppetdb.md#0229-next0))
- `@backstage/plugin-catalog-backend-module-scaffolder-entity-model` (0.2.26 → [0.2.27-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-scaffolder-entity-model.md#0227-next0))
- `@backstage/plugin-catalog-graph` (0.6.10 → [0.6.11-next.0](../../changelogs/@backstage/plugin-catalog-graph.md#0611-next0))
- `@backstage/plugin-catalog-import` (0.13.20 → [0.13.21-next.0](../../changelogs/@backstage/plugin-catalog-import.md#01321-next0))
- `@backstage/plugin-catalog-node` (3.0.0 → [3.0.1-next.0](../../changelogs/@backstage/plugin-catalog-node.md#301-next0))
- `@backstage/plugin-catalog-react` (4.0.0 → [4.0.1-next.0](../../changelogs/@backstage/plugin-catalog-react.md#401-next0))
- `@backstage/plugin-config-schema` (0.1.86 → [0.1.87-next.0](../../changelogs/@backstage/plugin-config-schema.md#0187-next0))
- `@backstage/plugin-devtools-backend` (0.5.23 → [0.5.24-next.0](../../changelogs/@backstage/plugin-devtools-backend.md#0524-next0))
- `@backstage/plugin-events-backend` (0.6.8 → [0.6.9-next.0](../../changelogs/@backstage/plugin-events-backend.md#069-next0))
- `@backstage/plugin-events-backend-module-aws-sqs` (0.4.28 → [0.4.29-next.0](../../changelogs/@backstage/plugin-events-backend-module-aws-sqs.md#0429-next0))
- `@backstage/plugin-events-backend-module-azure` (0.3.0 → [0.3.1-next.0](../../changelogs/@backstage/plugin-events-backend-module-azure.md#031-next0))
- `@backstage/plugin-events-backend-module-bitbucket-cloud` (0.2.37 → [0.2.38-next.0](../../changelogs/@backstage/plugin-events-backend-module-bitbucket-cloud.md#0238-next0))
- `@backstage/plugin-events-backend-module-bitbucket-server` (0.1.18 → [0.1.19-next.0](../../changelogs/@backstage/plugin-events-backend-module-bitbucket-server.md#0119-next0))
- `@backstage/plugin-events-backend-module-gerrit` (0.2.37 → [0.2.38-next.0](../../changelogs/@backstage/plugin-events-backend-module-gerrit.md#0238-next0))
- `@backstage/plugin-events-backend-module-github` (0.5.0 → [0.5.1-next.0](../../changelogs/@backstage/plugin-events-backend-module-github.md#051-next0))
- `@backstage/plugin-events-backend-module-gitlab` (0.4.0 → [0.4.1-next.0](../../changelogs/@backstage/plugin-events-backend-module-gitlab.md#041-next0))
- `@backstage/plugin-events-backend-module-google-pubsub` (0.2.9 → [0.2.10-next.0](../../changelogs/@backstage/plugin-events-backend-module-google-pubsub.md#0210-next0))
- `@backstage/plugin-events-backend-module-kafka` (0.3.10 → [0.3.11-next.0](../../changelogs/@backstage/plugin-events-backend-module-kafka.md#0311-next0))
- `@backstage/plugin-events-backend-test-utils` (0.1.61 → [0.1.62-next.0](../../changelogs/@backstage/plugin-events-backend-test-utils.md#0162-next0))
- `@backstage/plugin-events-node` (0.5.0 → [0.5.1-next.0](../../changelogs/@backstage/plugin-events-node.md#051-next0))
- `@backstage/plugin-gateway-backend` (1.1.11 → [1.1.12-next.0](../../changelogs/@backstage/plugin-gateway-backend.md#1112-next0))
- `@backstage/plugin-home` (0.9.12 → [0.9.13-next.0](../../changelogs/@backstage/plugin-home.md#0913-next0))
- `@backstage/plugin-home-react` (0.1.44 → [0.1.45-next.0](../../changelogs/@backstage/plugin-home-react.md#0145-next0))
- `@backstage/plugin-kubernetes` (0.12.25 → [0.12.26-next.0](../../changelogs/@backstage/plugin-kubernetes.md#01226-next0))
- `@backstage/plugin-kubernetes-cluster` (0.0.43 → [0.0.44-next.0](../../changelogs/@backstage/plugin-kubernetes-cluster.md#0044-next0))
- `@backstage/plugin-kubernetes-node` (0.4.10 → [0.4.11-next.0](../../changelogs/@backstage/plugin-kubernetes-node.md#0411-next0))
- `@backstage/plugin-kubernetes-react` (0.6.2 → [0.6.3-next.0](../../changelogs/@backstage/plugin-kubernetes-react.md#063-next0))
- `@backstage/plugin-mcp-actions-backend` (0.2.4 → [0.2.5-next.0](../../changelogs/@backstage/plugin-mcp-actions-backend.md#025-next0))
- `@backstage/plugin-notifications` (0.6.2 → [0.6.3-next.0](../../changelogs/@backstage/plugin-notifications.md#063-next0))
- `@backstage/plugin-notifications-backend` (0.6.11 → [0.6.12-next.0](../../changelogs/@backstage/plugin-notifications-backend.md#0612-next0))
- `@backstage/plugin-notifications-backend-module-email` (0.3.27 → [0.3.28-next.0](../../changelogs/@backstage/plugin-notifications-backend-module-email.md#0328-next0))
- `@backstage/plugin-notifications-backend-module-slack` (0.4.8 → [0.4.9-next.0](../../changelogs/@backstage/plugin-notifications-backend-module-slack.md#049-next0))
- `@backstage/plugin-notifications-node` (0.2.32 → [0.2.33-next.0](../../changelogs/@backstage/plugin-notifications-node.md#0233-next0))
- `@backstage/plugin-org` (0.8.1 → [0.8.2-next.0](../../changelogs/@backstage/plugin-org.md#082-next0))
- `@backstage/plugin-org-react` (0.1.56 → [0.1.57-next.0](../../changelogs/@backstage/plugin-org-react.md#0157-next0))
- `@backstage/plugin-permission-backend` (0.7.18 → [0.7.19-next.0](../../changelogs/@backstage/plugin-permission-backend.md#0719-next0))
- `@backstage/plugin-permission-backend-module-allow-all-policy` (0.2.25 → [0.2.26-next.0](../../changelogs/@backstage/plugin-permission-backend-module-allow-all-policy.md#0226-next0))
- `@backstage/plugin-permission-node` (0.11.6 → [0.11.7-next.0](../../changelogs/@backstage/plugin-permission-node.md#0117-next0))
- `@backstage/plugin-proxy-backend` (0.6.20 → [0.6.21-next.0](../../changelogs/@backstage/plugin-proxy-backend.md#0621-next0))
- `@backstage/plugin-proxy-node` (0.1.21 → [0.1.22-next.0](../../changelogs/@backstage/plugin-proxy-node.md#0122-next0))
- `@backstage/plugin-scaffolder` (1.41.0 → [1.41.1-next.0](../../changelogs/@backstage/plugin-scaffolder.md#1411-next0))
- `@backstage/plugin-scaffolder-backend-module-azure` (0.2.28 → [0.2.29-next.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-azure.md#0229-next0))
- `@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` (0.3.13 → [0.3.14-next.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket-cloud.md#0314-next0))
- `@backstage/plugin-scaffolder-backend-module-bitbucket-server` (0.2.28 → [0.2.29-next.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket-server.md#0229-next0))
- `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.3.28 → [0.3.29-next.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-confluence-to-markdown.md#0329-next0))
- `@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.3.29 → [0.3.30-next.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-cookiecutter.md#0330-next0))
- `@backstage/plugin-scaffolder-backend-module-gcp` (0.3.0 → [0.3.1-next.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-gcp.md#031-next0))
- `@backstage/plugin-scaffolder-backend-module-gerrit` (0.2.27 → [0.2.28-next.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-gerrit.md#0228-next0))
- `@backstage/plugin-scaffolder-backend-module-gitea` (0.2.27 → [0.2.28-next.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-gitea.md#0228-next0))
- `@backstage/plugin-scaffolder-backend-module-github` (0.10.4 → [0.10.5-next.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-github.md#0105-next0))
- `@backstage/plugin-scaffolder-backend-module-notifications` (0.1.28 → [0.1.29-next.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-notifications.md#0129-next0))
- `@backstage/plugin-scaffolder-backend-module-rails` (0.5.27 → [0.5.28-next.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-rails.md#0528-next0))
- `@backstage/plugin-scaffolder-backend-module-sentry` (0.4.2 → [0.4.3-next.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-sentry.md#043-next0))
- `@backstage/plugin-scaffolder-backend-module-workspace-database` (0.1.2 → [0.1.3-next.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-workspace-database.md#013-next0))
- `@backstage/plugin-scaffolder-backend-module-yeoman` (0.4.28 → [0.4.29-next.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-yeoman.md#0429-next0))
- `@backstage/plugin-scaffolder-common` (2.4.0 → [2.4.1-next.0](../../changelogs/@backstage/plugin-scaffolder-common.md#241-next0))
- `@backstage/plugin-scaffolder-node-test-utils` (0.3.17 → [0.3.18-next.0](../../changelogs/@backstage/plugin-scaffolder-node-test-utils.md#0318-next0))
- `@backstage/plugin-scaffolder-react` (3.0.0 → [3.0.1-next.0](../../changelogs/@backstage/plugin-scaffolder-react.md#301-next0))
- `@backstage/plugin-search` (1.8.0 → [1.8.1-next.0](../../changelogs/@backstage/plugin-search.md#181-next0))
- `@backstage/plugin-search-backend` (2.1.9 → [2.1.10-next.0](../../changelogs/@backstage/plugin-search-backend.md#2110-next0))
- `@backstage/plugin-search-backend-module-catalog` (0.3.21 → [0.3.22-next.0](../../changelogs/@backstage/plugin-search-backend-module-catalog.md#0322-next0))
- `@backstage/plugin-search-backend-module-elasticsearch` (2.0.2 → [2.0.3-next.0](../../changelogs/@backstage/plugin-search-backend-module-elasticsearch.md#203-next0))
- `@backstage/plugin-search-backend-module-explore` (0.3.20 → [0.3.21-next.0](../../changelogs/@backstage/plugin-search-backend-module-explore.md#0321-next0))
- `@backstage/plugin-search-backend-module-pg` (0.5.61 → [0.5.62-next.0](../../changelogs/@backstage/plugin-search-backend-module-pg.md#0562-next0))
- `@backstage/plugin-search-backend-module-stack-overflow-collator` (0.3.26 → [0.3.27-next.0](../../changelogs/@backstage/plugin-search-backend-module-stack-overflow-collator.md#0327-next0))
- `@backstage/plugin-search-backend-module-techdocs` (0.4.20 → [0.4.21-next.0](../../changelogs/@backstage/plugin-search-backend-module-techdocs.md#0421-next0))
- `@backstage/plugin-search-backend-node` (1.4.10 → [1.4.11-next.0](../../changelogs/@backstage/plugin-search-backend-node.md#1411-next0))
- `@backstage/plugin-search-react` (1.12.0 → [1.12.1-next.0](../../changelogs/@backstage/plugin-search-react.md#1121-next0))
- `@backstage/plugin-signals` (0.0.37 → [0.0.38-next.0](../../changelogs/@backstage/plugin-signals.md#0038-next0))
- `@backstage/plugin-signals-backend` (0.3.21 → [0.3.22-next.0](../../changelogs/@backstage/plugin-signals-backend.md#0322-next0))
- `@backstage/plugin-signals-node` (0.2.7 → [0.2.8-next.0](../../changelogs/@backstage/plugin-signals-node.md#028-next0))
- `@backstage/plugin-techdocs` (1.20.0 → [1.20.1-next.0](../../changelogs/@backstage/plugin-techdocs.md#1201-next0))
- `@backstage/plugin-techdocs-addons-test-utils` (2.1.0 → [2.1.1-next.0](../../changelogs/@backstage/plugin-techdocs-addons-test-utils.md#211-next0))
- `@backstage/plugin-techdocs-backend` (2.4.3 → [2.4.4-next.0](../../changelogs/@backstage/plugin-techdocs-backend.md#244-next0))
- `@backstage/plugin-techdocs-backend-module-zensical` (0.1.2 → [0.1.3-next.0](../../changelogs/@backstage/plugin-techdocs-backend-module-zensical.md#013-next0))
- `@backstage/plugin-techdocs-module-addons-contrib` (1.2.0 → [1.2.1-next.0](../../changelogs/@backstage/plugin-techdocs-module-addons-contrib.md#121-next0))
- `@backstage/plugin-techdocs-node` (2.3.0 → [2.3.1-next.0](../../changelogs/@backstage/plugin-techdocs-node.md#231-next0))
- `@backstage/plugin-techdocs-react` (1.5.0 → [1.5.1-next.0](../../changelogs/@backstage/plugin-techdocs-react.md#151-next0))
- `@backstage/plugin-user-settings` (0.9.9 → [0.9.10-next.0](../../changelogs/@backstage/plugin-user-settings.md#0910-next0))
- `@backstage/plugin-user-settings-backend` (0.4.9 → [0.4.10-next.0](../../changelogs/@backstage/plugin-user-settings-backend.md#0410-next0))
- `@techdocs/cli` (1.15.0 → [1.15.1-next.0](../../changelogs/@techdocs/cli.md#1151-next0))
