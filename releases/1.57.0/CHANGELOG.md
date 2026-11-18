# Backstage Release 1.57.0 changelog

Changes between 1.56.6 and 1.57.0 — 3 added, 0 removed, 212 upgraded, 4 unchanged packages.

## Summary

- [Newly added packages](#newly-added-packages): 3 packages
- [Breaking changes](#breaking-changes): 16 packages
- [Major version bumps](#major-version-bumps): 3 packages
- [0.x minor version bumps](#0x-minor-version-bumps): 1 package
- [0.0.x patch version bumps](#00x-patch-version-bumps): 4 packages
- [0.x patch version bumps](#0x-patch-version-bumps): 76 packages
- [Other minor version bumps](#other-minor-version-bumps): 21 packages
- [Other patch version bumps](#other-patch-version-bumps): 5 packages
- [Excluded dependency updates](#excluded-dependency-updates): 86 packages

## Table of contents

- [Newly added packages](#newly-added-packages)
  - [`@backstage/frontend-adapter-react-router-v6` (new, 0.2.0)](#backstagefrontend-adapter-react-router-v6-new-020)
  - [`@backstage/frontend-adapter-react-router-v7` (new, 0.2.0)](#backstagefrontend-adapter-react-router-v7-new-020)
  - [`@backstage/frontend-adapter-tanstack-router` (new, 0.2.0)](#backstagefrontend-adapter-tanstack-router-new-020)
- [Breaking changes](#breaking-changes)
  - [`@backstage/backend-defaults` (0.18.1 → 0.19.0)](#backstagebackend-defaults-0181--0190)
  - [`@backstage/backend-plugin-api` (1.11.0 → 1.12.0)](#backstagebackend-plugin-api-1110--1120)
  - [`@backstage/core-compat-api` (0.5.16 → 0.6.0)](#backstagecore-compat-api-0516--060)
  - [`@backstage/core-plugin-api` (1.12.11 → 1.13.0)](#backstagecore-plugin-api-11211--1130)
  - [`@backstage/frontend-app-api` (0.16.9 → 1.0.0)](#backstagefrontend-app-api-0169--100)
  - [`@backstage/frontend-plugin-api` (0.18.2 → 1.0.0)](#backstagefrontend-plugin-api-0182--100)
  - [`@backstage/frontend-test-utils` (0.6.5 → 1.0.0)](#backstagefrontend-test-utils-065--100)
  - [`@backstage/plugin-app` (0.5.4 → 0.6.0)](#backstageplugin-app-054--060)
  - [`@backstage/plugin-app-react` (0.2.8 → 0.3.0)](#backstageplugin-app-react-028--030)
  - [`@backstage/plugin-auth-backend` (0.30.2 → 0.31.0)](#backstageplugin-auth-backend-0302--0310)
  - [`@backstage/plugin-catalog-backend-module-ldap` (0.12.10 → 0.13.0)](#backstageplugin-catalog-backend-module-ldap-01210--0130)
  - [`@backstage/plugin-events-backend-module-azure` (0.2.36 → 0.3.0)](#backstageplugin-events-backend-module-azure-0236--030)
  - [`@backstage/plugin-events-backend-module-github` (0.4.17 → 0.5.0)](#backstageplugin-events-backend-module-github-0417--050)
  - [`@backstage/plugin-events-backend-module-gitlab` (0.3.17 → 0.4.0)](#backstageplugin-events-backend-module-gitlab-0317--040)
  - [`@backstage/plugin-scaffolder-backend-module-gcp` (0.2.26 → 0.3.0)](#backstageplugin-scaffolder-backend-module-gcp-0226--030)
  - [`@backstage/ui` (0.19.0 → 0.20.0)](#backstageui-0190--0200)
- [Major version bumps](#major-version-bumps)
  - [`@backstage/frontend-dev-utils` (0.1.7 → 1.0.0)](#backstagefrontend-dev-utils-017--100)
  - [`@backstage/plugin-catalog-react` (3.3.0 → 4.0.0)](#backstageplugin-catalog-react-330--400)
  - [`@backstage/plugin-scaffolder-react` (2.1.1 → 3.0.0)](#backstageplugin-scaffolder-react-211--300)
- [0.x minor version bumps](#0x-minor-version-bumps)
  - [`@backstage/plugin-events-node` (0.4.27 → 0.5.0)](#backstageplugin-events-node-0427--050)
- [0.0.x patch version bumps](#00x-patch-version-bumps)
  - [`@backstage/plugin-kubernetes-cluster` (0.0.42 → 0.0.43)](#backstageplugin-kubernetes-cluster-0042--0043)
  - [`@backstage/plugin-signals` (0.0.36 → 0.0.37)](#backstageplugin-signals-0036--0037)
  - [`@backstage/plugin-signals-react` (0.0.27 → 0.0.28)](#backstageplugin-signals-react-0027--0028)
  - [`@backstage/release-manifests` (0.0.15 → 0.0.16)](#backstagerelease-manifests-0015--0016)
- [0.x patch version bumps](#0x-patch-version-bumps)
  - [`@backstage/backend-dynamic-feature-service` (0.8.8 → 0.8.9)](#backstagebackend-dynamic-feature-service-088--089)
  - [`@backstage/backend-openapi-utils` (0.7.3 → 0.7.4)](#backstagebackend-openapi-utils-073--074)
  - [`@backstage/cli` (0.36.7 → 0.36.8)](#backstagecli-0367--0368)
  - [`@backstage/cli-module-auth` (0.1.5 → 0.1.6)](#backstagecli-module-auth-015--016)
  - [`@backstage/cli-module-build` (0.1.9 → 0.1.10)](#backstagecli-module-build-019--0110)
  - [`@backstage/cli-module-info` (0.1.5 → 0.1.6)](#backstagecli-module-info-015--016)
  - [`@backstage/cli-module-migrate` (0.2.2 → 0.2.3)](#backstagecli-module-migrate-022--023)
  - [`@backstage/cli-module-new` (0.1.8 → 0.1.9)](#backstagecli-module-new-018--019)
  - [`@backstage/cli-module-package-manager-yarn` (0.1.4 → 0.1.5)](#backstagecli-module-package-manager-yarn-014--015)
  - [`@backstage/cli-module-test-jest` (0.1.7 → 0.1.8)](#backstagecli-module-test-jest-017--018)
  - [`@backstage/cli-node` (0.3.5 → 0.3.6)](#backstagecli-node-035--036)
  - [`@backstage/core-components` (0.18.15 → 0.18.16)](#backstagecore-components-01815--01816)
  - [`@backstage/create-app` (0.9.3 → 0.9.4)](#backstagecreate-app-093--094)
  - [`@backstage/eslint-plugin` (0.3.3 → 0.3.4)](#backstageeslint-plugin-033--034)
  - [`@backstage/frontend-defaults` (0.5.7 → 0.5.8)](#backstagefrontend-defaults-057--058)
  - [`@backstage/frontend-dynamic-feature-loader` (0.1.17 → 0.1.18)](#backstagefrontend-dynamic-feature-loader-0117--0118)
  - [`@backstage/integration-aws-node` (0.2.3 → 0.2.4)](#backstageintegration-aws-node-023--024)
  - [`@backstage/module-federation-common` (0.1.6 → 0.1.7)](#backstagemodule-federation-common-016--017)
  - [`@backstage/plugin-api-docs` (0.14.8 → 0.14.7)](#backstageplugin-api-docs-0148--0147)
  - [`@backstage/plugin-api-docs-module-protoc-gen-doc` (0.1.11 → 0.1.12)](#backstageplugin-api-docs-module-protoc-gen-doc-0111--0112)
  - [`@backstage/plugin-app-backend` (0.5.19 → 0.5.20)](#backstageplugin-app-backend-0519--0520)
  - [`@backstage/plugin-app-visualizer` (0.2.9 → 0.2.10)](#backstageplugin-app-visualizer-029--0210)
  - [`@backstage/plugin-auth` (0.1.13 → 0.1.14)](#backstageplugin-auth-0113--0114)
  - [`@backstage/plugin-auth-backend-module-auth0-provider` (0.4.6 → 0.4.7)](#backstageplugin-auth-backend-module-auth0-provider-046--047)
  - [`@backstage/plugin-auth-backend-module-aws-alb-provider` (0.4.21 → 0.4.22)](#backstageplugin-auth-backend-module-aws-alb-provider-0421--0422)
  - [`@backstage/plugin-auth-backend-module-azure-easyauth-provider` (0.2.25 → 0.2.26)](#backstageplugin-auth-backend-module-azure-easyauth-provider-0225--0226)
  - [`@backstage/plugin-auth-backend-module-cloudflare-access-provider` (0.5.1 → 0.5.2)](#backstageplugin-auth-backend-module-cloudflare-access-provider-051--052)
  - [`@backstage/plugin-auth-backend-module-microsoft-provider` (0.3.20 → 0.3.21)](#backstageplugin-auth-backend-module-microsoft-provider-0320--0321)
  - [`@backstage/plugin-auth-backend-module-oauth2-proxy-provider` (0.3.4 → 0.3.5)](#backstageplugin-auth-backend-module-oauth2-proxy-provider-034--035)
  - [`@backstage/plugin-auth-backend-module-oidc-provider` (0.4.22 → 0.4.23)](#backstageplugin-auth-backend-module-oidc-provider-0422--0423)
  - [`@backstage/plugin-auth-backend-module-pinniped-provider` (0.3.19 → 0.3.20)](#backstageplugin-auth-backend-module-pinniped-provider-0319--0320)
  - [`@backstage/plugin-auth-backend-module-vmware-cloud-provider` (0.5.19 → 0.5.20)](#backstageplugin-auth-backend-module-vmware-cloud-provider-0519--0520)
  - [`@backstage/plugin-auth-node` (0.7.7 → 0.7.8)](#backstageplugin-auth-node-077--078)
  - [`@backstage/plugin-auth-react` (0.1.32 → 0.1.33)](#backstageplugin-auth-react-0132--0133)
  - [`@backstage/plugin-bitbucket-cloud-common` (0.3.14 → 0.3.15)](#backstageplugin-bitbucket-cloud-common-0314--0315)
  - [`@backstage/plugin-catalog-backend-module-ai-model` (0.1.5 → 0.1.6)](#backstageplugin-catalog-backend-module-ai-model-015--016)
  - [`@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.5.16 → 0.5.17)](#backstageplugin-catalog-backend-module-bitbucket-cloud-0516--0517)
  - [`@backstage/plugin-catalog-backend-module-github` (0.14.1 → 0.14.2)](#backstageplugin-catalog-backend-module-github-0141--0142)
  - [`@backstage/plugin-catalog-backend-module-github-org` (0.3.27 → 0.3.28)](#backstageplugin-catalog-backend-module-github-org-0327--0328)
  - [`@backstage/plugin-catalog-backend-module-gitlab` (0.8.10 → 0.8.11)](#backstageplugin-catalog-backend-module-gitlab-0810--0811)
  - [`@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.9.0 → 0.9.1)](#backstageplugin-catalog-backend-module-incremental-ingestion-090--091)
  - [`@backstage/plugin-catalog-backend-module-unprocessed` (0.6.17 → 0.6.18)](#backstageplugin-catalog-backend-module-unprocessed-0617--0618)
  - [`@backstage/plugin-catalog-graph` (0.6.9 → 0.6.10)](#backstageplugin-catalog-graph-069--0610)
  - [`@backstage/plugin-catalog-import` (0.13.19 → 0.13.20)](#backstageplugin-catalog-import-01319--01320)
  - [`@backstage/plugin-catalog-unprocessed-entities` (0.2.36 → 0.2.37)](#backstageplugin-catalog-unprocessed-entities-0236--0237)
  - [`@backstage/plugin-config-schema` (0.1.85 → 0.1.86)](#backstageplugin-config-schema-0185--0186)
  - [`@backstage/plugin-devtools` (0.1.44 → 0.1.45)](#backstageplugin-devtools-0144--0145)
  - [`@backstage/plugin-devtools-react` (0.2.7 → 0.2.8)](#backstageplugin-devtools-react-027--028)
  - [`@backstage/plugin-events-backend` (0.6.7 → 0.6.8)](#backstageplugin-events-backend-067--068)
  - [`@backstage/plugin-events-backend-module-google-pubsub` (0.2.8 → 0.2.9)](#backstageplugin-events-backend-module-google-pubsub-028--029)
  - [`@backstage/plugin-home` (0.9.11 → 0.9.12)](#backstageplugin-home-0911--0912)
  - [`@backstage/plugin-home-react` (0.1.43 → 0.1.44)](#backstageplugin-home-react-0143--0144)
  - [`@backstage/plugin-kubernetes` (0.12.24 → 0.12.25)](#backstageplugin-kubernetes-01224--01225)
  - [`@backstage/plugin-kubernetes-backend` (0.21.14 → 0.21.13)](#backstageplugin-kubernetes-backend-02114--02113)
  - [`@backstage/plugin-kubernetes-common` (0.9.14 → 0.9.15)](#backstageplugin-kubernetes-common-0914--0915)
  - [`@backstage/plugin-kubernetes-react` (0.6.1 → 0.6.2)](#backstageplugin-kubernetes-react-061--062)
  - [`@backstage/plugin-mcp-actions-backend` (0.2.3 → 0.2.4)](#backstageplugin-mcp-actions-backend-023--024)
  - [`@backstage/plugin-mui-to-bui` (0.2.12 → 0.2.13)](#backstageplugin-mui-to-bui-0212--0213)
  - [`@backstage/plugin-notifications` (0.6.1 → 0.6.2)](#backstageplugin-notifications-061--062)
  - [`@backstage/plugin-notifications-backend` (0.6.10 → 0.6.11)](#backstageplugin-notifications-backend-0610--0611)
  - [`@backstage/plugin-notifications-backend-module-slack` (0.4.7 → 0.4.8)](#backstageplugin-notifications-backend-module-slack-047--048)
  - [`@backstage/plugin-org` (0.8.0 → 0.8.1)](#backstageplugin-org-080--081)
  - [`@backstage/plugin-org-react` (0.1.55 → 0.1.56)](#backstageplugin-org-react-0155--0156)
  - [`@backstage/plugin-permission-react` (0.5.6 → 0.5.7)](#backstageplugin-permission-react-056--057)
  - [`@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.3.27 → 0.3.28)](#backstageplugin-scaffolder-backend-module-confluence-to-markdown-0327--0328)
  - [`@backstage/plugin-scaffolder-backend-module-github` (0.10.3 → 0.10.2)](#backstageplugin-scaffolder-backend-module-github-0103--0102)
  - [`@backstage/plugin-scaffolder-backend-module-gitlab` (0.12.3 → 0.12.2)](#backstageplugin-scaffolder-backend-module-gitlab-0123--0122)
  - [`@backstage/plugin-scaffolder-backend-module-workspace-database` (0.1.1 → 0.1.2)](#backstageplugin-scaffolder-backend-module-workspace-database-011--012)
  - [`@backstage/plugin-scaffolder-node-test-utils` (0.3.16 → 0.3.17)](#backstageplugin-scaffolder-node-test-utils-0316--0317)
  - [`@backstage/plugin-search-backend-module-pg` (0.5.60 → 0.5.61)](#backstageplugin-search-backend-module-pg-0560--0561)
  - [`@backstage/plugin-signals-backend` (0.3.20 → 0.3.21)](#backstageplugin-signals-backend-0320--0321)
  - [`@backstage/plugin-techdocs-backend-module-zensical` (0.1.1 → 0.1.0)](#backstageplugin-techdocs-backend-module-zensical-011--010)
  - [`@backstage/plugin-user-settings` (0.9.8 → 0.9.9)](#backstageplugin-user-settings-098--099)
  - [`@backstage/plugin-user-settings-backend` (0.4.8 → 0.4.9)](#backstageplugin-user-settings-backend-048--049)
  - [`@backstage/repo-tools` (0.19.2 → 0.19.3)](#backstagerepo-tools-0192--0193)
  - [`@backstage/theme` (0.7.3 → 0.7.4)](#backstagetheme-073--074)
- [Other minor version bumps](#other-minor-version-bumps)
  - [`@backstage/app-defaults` (1.7.13 → 1.8.0)](#backstageapp-defaults-1713--180)
  - [`@backstage/backend-app-api` (1.8.0 → 1.9.0)](#backstagebackend-app-api-180--190)
  - [`@backstage/backend-test-utils` (1.11.8 → 1.12.0)](#backstagebackend-test-utils-1118--1120)
  - [`@backstage/dev-utils` (1.1.28 → 1.2.0)](#backstagedev-utils-1128--120)
  - [`@backstage/errors` (1.3.2 → 1.4.0)](#backstageerrors-132--140)
  - [`@backstage/integration` (2.1.3 → 2.2.0)](#backstageintegration-213--220)
  - [`@backstage/integration-react` (1.2.23 → 1.3.0)](#backstageintegration-react-1223--130)
  - [`@backstage/plugin-catalog` (2.0.10 → 2.1.0)](#backstageplugin-catalog-2010--210)
  - [`@backstage/plugin-scaffolder` (1.40.0 → 1.41.0)](#backstageplugin-scaffolder-1400--1410)
  - [`@backstage/plugin-scaffolder-backend` (4.2.5 → 4.3.0)](#backstageplugin-scaffolder-backend-425--430)
  - [`@backstage/plugin-scaffolder-common` (2.3.1 → 2.4.0)](#backstageplugin-scaffolder-common-231--240)
  - [`@backstage/plugin-search` (1.7.9 → 1.8.0)](#backstageplugin-search-179--180)
  - [`@backstage/plugin-search-react` (1.11.9 → 1.12.0)](#backstageplugin-search-react-1119--1120)
  - [`@backstage/plugin-techdocs` (1.19.0 → 1.20.0)](#backstageplugin-techdocs-1190--1200)
  - [`@backstage/plugin-techdocs-addons-test-utils` (2.0.10 → 2.1.0)](#backstageplugin-techdocs-addons-test-utils-2010--210)
  - [`@backstage/plugin-techdocs-module-addons-contrib` (1.1.41 → 1.2.0)](#backstageplugin-techdocs-module-addons-contrib-1141--120)
  - [`@backstage/plugin-techdocs-node` (2.2.1 → 2.3.0)](#backstageplugin-techdocs-node-221--230)
  - [`@backstage/plugin-techdocs-react` (1.4.0 → 1.5.0)](#backstageplugin-techdocs-react-140--150)
  - [`@backstage/test-utils` (1.7.23 → 1.8.0)](#backstagetest-utils-1723--180)
  - [`@backstage/version-bridge` (1.0.12 → 1.1.0)](#backstageversion-bridge-1012--110)
  - [`@techdocs/cli` (1.14.1 → 1.15.0)](#techdocscli-1141--1150)
- [Other patch version bumps](#other-patch-version-bumps)
  - [`@backstage/catalog-client` (1.16.3 → 1.16.4)](#backstagecatalog-client-1163--1164)
  - [`@backstage/core-app-api` (1.20.6 → 1.20.7)](#backstagecore-app-api-1206--1207)
  - [`@backstage/plugin-catalog-backend` (4.0.4 → 4.0.3)](#backstageplugin-catalog-backend-404--403)
  - [`@backstage/plugin-search-backend-module-elasticsearch` (2.0.1 → 2.0.2)](#backstageplugin-search-backend-module-elasticsearch-201--202)
  - [`@backstage/plugin-techdocs-backend` (2.4.2 → 2.4.3)](#backstageplugin-techdocs-backend-242--243)
- [Excluded dependency updates](#excluded-dependency-updates)

## Newly added packages

### `@backstage/frontend-adapter-react-router-v6` (new, [0.2.0](../../changelogs/@backstage/frontend-adapter-react-router-v6.md#020))

#### 0.2.0

##### Minor Changes

- [`1fba2bb`](https://github.com/backstage/backstage/commit/1fba2bb): Added `ReactRouterV6PageRouter` for page-scoped React Router v6 routing with app-owned history; React Router v6 is a peer dependency. Render it inside a lazily loaded page or sub-page component to support relative links, nested routes, and route parameters. See the [1.57 migration notes](https://backstage.io/docs/frontend-system/architecture/migrations#157) for detailed migration steps and the [page router guide](https://backstage.io/docs/frontend-system/building-plugins/page-routers#use-react-router-v6) for setup and nesting examples.

##### Patch Changes

- [`4bbc7a9`](https://github.com/backstage/backstage/commit/4bbc7a9): Removed explicit support for React 17: the peer dependency range for `react`, `react-dom` and `@types/react` is now `^18.0.0`. React 17 is no longer tested or guaranteed to work, although it may continue to work in some cases. See the [migration guide](https://backstage.io/docs/frontend-system/architecture/migrations#157).
- [`9d0a31b`](https://github.com/backstage/backstage/commit/9d0a31b): Removed an unused `use-sync-external-store` dependency, which is no longer needed now that React 18 is the minimum supported version.

### `@backstage/frontend-adapter-react-router-v7` (new, [0.2.0](../../changelogs/@backstage/frontend-adapter-react-router-v7.md#020))

#### 0.2.0

##### Minor Changes

- [`1fba2bb`](https://github.com/backstage/backstage/commit/1fba2bb): Added `ReactRouterV7PageRouter` for page-scoped React Router v7 routing with app-owned history; React Router v7 is a peer dependency. Render it inside a lazily loaded page or sub-page component to support relative links, nested routes, and route parameters. See the [1.57 migration notes](https://backstage.io/docs/frontend-system/architecture/migrations#157) for detailed migration steps and the [page router guide](https://backstage.io/docs/frontend-system/building-plugins/page-routers#use-react-router-v7) for setup and nesting examples.

##### Patch Changes

- [`9d0a31b`](https://github.com/backstage/backstage/commit/9d0a31b): Removed an unused `use-sync-external-store` dependency, which is no longer needed now that React 18 is the minimum supported version.

### `@backstage/frontend-adapter-tanstack-router` (new, [0.2.0](../../changelogs/@backstage/frontend-adapter-tanstack-router.md#020))

#### 0.2.0

##### Minor Changes

- [`1fba2bb`](https://github.com/backstage/backstage/commit/1fba2bb): Added `TanStackPageRouter` for page-scoped TanStack routing with app-owned history, including `createTanStackPageRouter` and `TanStackPageContent` for plugin-owned route trees; `@tanstack/react-router` and `@tanstack/history` are peer dependencies. See the [1.57 migration notes](https://backstage.io/docs/frontend-system/architecture/migrations#157) for detailed migration steps and the [TanStack page router guide](https://backstage.io/docs/frontend-system/building-plugins/page-routers#use-tanstack-router) for setup, navigation blockers, and custom history requirements.

##### Patch Changes

- [`9d0a31b`](https://github.com/backstage/backstage/commit/9d0a31b): Removed an unused `use-sync-external-store` dependency, which is no longer needed now that React 18 is the minimum supported version.

## Breaking changes

### `@backstage/backend-defaults` (0.18.1 → [0.19.0](../../changelogs/@backstage/backend-defaults.md#0190))

#### 0.19.0

##### Minor Changes

- [`250e4c3`](https://github.com/backstage/backstage/commit/250e4c3): Add support for the new WebSocket routing APIs.

  Existing server upgrade listeners can coexist during migration and receive unmatched upgrades. Multiple listeners produce a warning; migrate custom upgrade handling to the router API to avoid handling the same socket twice. Installing a plugin that registers a WebSocket route, such as signals, activates the server-level upgrade listener. Upgrades handled only through Express, such as the Kubernetes proxy, must migrate to this API; otherwise, unmatched upgrades receive 404 responses when this is the only server-level listener.

- [`3beb656`](https://github.com/backstage/backstage/commit/3beb656): **BREAKING**: Request logs from the root HTTP router no longer include a `date` field, and no longer repeat the date at the start of the message. JSON logs, used when `NODE_ENV` is `production`, now include a `timestamp` field on every log line instead. Update any log pipelines or dashboards that read `date` or parse the date out of the message to use `timestamp`.

  If you override the root logger with a custom JSON format, use `format.combine(format.timestamp(), format.json())` to keep the `timestamp` field.

##### Patch Changes

- [`f81ca4e`](https://github.com/backstage/backstage/commit/f81ca4e): The AWS S3 URL reader no longer assumes the configured `roleArn` a second time when the matching account under `aws.accounts` already provides credentials for that exact role, for example through a web identity token file. Previously the role had to trust itself for this setup to work. The role is still assumed explicitly when the integration sets an `externalId`.
- [`392710f`](https://github.com/backstage/backstage/commit/392710f): The Azure DevOps URL reader now warns at startup when a personal access token is configured for Azure DevOps Services. Global personal access tokens [stop working on January 27, 2027](https://devblogs.microsoft.com/devops/retirement-of-global-personal-access-tokens-in-azure-devops/), and organization-scoped tokens are now deprecated in favor of Microsoft Entra ID credentials. Errors from rejected credentials are also clearer.
- [`80cc892`](https://github.com/backstage/backstage/commit/80cc892): Removed the runtime dependency on `@backstage/cli-node`, which was only used for types. Backends no longer install the CLI tooling packages through `@backstage/backend-defaults`.
- [`5eb2381`](https://github.com/backstage/backstage/commit/5eb2381): Updated a documentation link for `DefaultRootHttpRouter` to point to the `coreServices.rootHttpRouter` service reference.
- [`1892d2f`](https://github.com/backstage/backstage/commit/1892d2f): chore(deps): bump `minimatch` from 10.2.6 to 11.0.1
- [`fbd2535`](https://github.com/backstage/backstage/commit/fbd2535): Fixed a connection and memory leak in the GitHub URL reader, where every failed request with a large error response body, such as the error pages served during a GitHub Enterprise outage, left its connection open indefinitely.
- [`da22423`](https://github.com/backstage/backstage/commit/da22423): Ensures that the limited user cookie issued for a request always represents the user authenticated on that request. A previously issued cookie belonging to a different user is now replaced during the cookie refresh, instead of being reused.
- [`918ca98`](https://github.com/backstage/backstage/commit/918ca98): Updated dependency `jose` to `^6.1.0`. Existing ES256 token issuance and verification are unchanged. ML-DSA algorithms can be used when the runtime supports them.
- [`9fc68ae`](https://github.com/backstage/backstage/commit/9fc68ae): Fixed the `valkey` cache store sharing keys between plugins. Two plugins that cached a value under the same key could read and overwrite each other's entries. Keys are now stored under the plugin namespace, the same way the `redis` store does it. Cache entries now use new key names, so existing entries are no longer read and are rebuilt as plugins write new values. Old entries stay in Valkey until their TTL expires. Entries without a TTL, and the per-plugin key index sets that the old layout created, stay until you remove them manually.

### `@backstage/backend-plugin-api` (1.11.0 → [1.12.0](../../changelogs/@backstage/backend-plugin-api.md#1120))

#### 1.12.0

##### Minor Changes

- [`a5337d0`](https://github.com/backstage/backstage/commit/a5337d0): The `coreServices` export is now a frozen plain object instead of a TypeScript namespace, and its type is described by the new `CoreServices` interface. Usage is unchanged, and every service reference keeps its existing type. The object can no longer be modified at runtime.
- [`250e4c3`](https://github.com/backstage/backstage/commit/250e4c3): Add WebSocket upgrade routes to the HTTP router services. Routes require token authentication by default. The `unauthenticated` override leaves authentication to the handler. Cookie authentication is not supported. Browser clients can pass bearer tokens through the WebSocket protocol header.

  ```ts
  httpRouter.addWebSocketHandler({
    path: '/events',
    handler({ request, socket, head }) {
      webSocketServer.handleUpgrade(request, socket, head, connection => {
        webSocketServer.emit('connection', connection, request);
      });
    },
  });
  ```

  **BREAKING PRODUCERS**: Custom implementations of `HttpRouterService` and `RootHttpRouterService` must implement `addWebSocketHandler`.

- [`6a0de59`](https://github.com/backstage/backstage/commit/6a0de59): Added support for passing a file URL string, such as `import.meta.url`, to `resolvePackagePath` to resolve assets relative to the containing package without specifying its name. The nearest ancestor directory containing `package.json` is used as the package root.

##### Patch Changes

- [`2b61a53`](https://github.com/backstage/backstage/commit/2b61a53): Fixed detection of PostgreSQL unique constraint violations when the database returns localized error messages. Catalog ingestion can now fall back to individual entity updates when a provider delivers duplicate entity references in the same batch.

### `@backstage/core-compat-api` (0.5.16 → [0.6.0](../../changelogs/@backstage/core-compat-api.md#060))

#### 0.6.0

##### Minor Changes

- [`df2bcee`](https://github.com/backstage/backstage/commit/df2bcee): **BREAKING**: `convertLegacyAppOptions` now rejects `components.Router`: remove plain `BrowserRouter` wrappers, move global providers to `AppRootWrapperBlueprint`, and use page router adapters for page-specific routing, with converted legacy pages receiving a scoped React Router v6 adapter automatically. See the [1.57 migration notes](https://backstage.io/docs/frontend-system/architecture/migrations#157) for detailed migration steps.

##### Patch Changes

- [`e55a4a8`](https://github.com/backstage/backstage/commit/e55a4a8): Updated compatibility with the `FrontendPlugin` interface after removal of its deprecated `id` property, retaining support for older plugin instances.
- [`e3d50c4`](https://github.com/backstage/backstage/commit/e3d50c4): Added support for the new icons API when rendering plugins in old-system apps, while continuing to provide the original icons API for older plugins. Legacy app context icon lookups continue to return components.

### `@backstage/core-plugin-api` (1.12.11 → [1.13.0](../../changelogs/@backstage/core-plugin-api.md#1130))

#### 1.13.0

##### Minor Changes

- [`558c076`](https://github.com/backstage/backstage/commit/558c076): Exported the alpha `TranslationRefTuple` type for messages selected by calling a translation ref. Refs are now callable functions; treat them as opaque values.

  **BREAKING PRODUCERS**: Translation snapshots require `t` even when `ready` is false. Custom translation APIs must provide a translator using available messages and language fallbacks.

##### Patch Changes

- [`ca02018`](https://github.com/backstage/backstage/commit/ca02018): API reference IDs now use plugin ID validation for each dot-separated component.
  This accepts numeric dash groups and mixed case, including IDs such as
  `plugin.example-2.todos`.
- [`6540a44`](https://github.com/backstage/backstage/commit/6540a44): Preserved the legacy `useApi` hook's direct-value behavior when the frontend
  system's hook unwraps promise-valued APIs. The legacy hook continues returning
  promises unchanged.
- [`e55a4a8`](https://github.com/backstage/backstage/commit/e55a4a8): Updated compatibility with the `FrontendPlugin` interface after removal of its deprecated `id` property, retaining support for older plugin instances.
- [`315f7bc`](https://github.com/backstage/backstage/commit/315f7bc): Made the legacy icon component and `withApis` compatibility APIs independent of `@backstage/frontend-plugin-api` so that they remain available to legacy frontend apps.

  Deprecated `withApis`. Wrap class components in a function component that uses `useApi` instead.

- [`e3d50c4`](https://github.com/backstage/backstage/commit/e3d50c4): Updated `useApp` to support the new icons API. Its `getSystemIcon` and `getSystemIcons` methods continue to return icon components.

### `@backstage/frontend-app-api` (0.16.9 → [1.0.0](../../changelogs/@backstage/frontend-app-api.md#100))

#### 1.0.0

##### Major Changes

- [`b3befd0`](https://github.com/backstage/backstage/commit/b3befd0): Released version 1.0 of this frontend framework package. Its public APIs are now stable under the [package versioning policy](https://backstage.io/docs/overview/versioning-policy/#package-versioning-policy). Alpha and beta APIs retain their existing stability levels.

##### Minor Changes

- [`8c6c842`](https://github.com/backstage/backstage/commit/8c6c842): **BREAKING**: Removed the deprecated `createSpecializedApp` and `CreateSpecializedAppOptions` exports. Use `prepareSpecializedApp(options).finalize()` and `PrepareSpecializedAppOptions` instead. For sign-in or asynchronous session preparation, render the bootstrap app and subscribe with `onFinalized()` instead of calling `finalize()`.

  Replace `advanced.apis` with `advanced.sessionState` from a previously finalized app to reuse its APIs, identity, and predicate context. Register custom APIs through `ApiBlueprint` extensions rather than passing an arbitrary API holder. Pass a supplied config API through the top-level `config` option. To reuse an identity supplied through the API holder, configure a sign-in page that calls `onSignInSuccess(identityApi)` and use the bootstrap/`onFinalized()` flow; an `ApiBlueprint` cannot override the app's identity proxy.

##### Patch Changes

- [`d514e4d`](https://github.com/backstage/backstage/commit/d514e4d): Updated app options to use the `ExtensionFactoryMiddleware` type from `@backstage/frontend-app-api` instead of the deprecated export from `@backstage/frontend-plugin-api`. Middleware behavior is unchanged.
- [`e55a4a8`](https://github.com/backstage/backstage/commit/e55a4a8): Updated plugin identity handling to use `pluginId`, while preserving support for older plugin instances that only expose `id`.
- [`4bbc7a9`](https://github.com/backstage/backstage/commit/4bbc7a9): Removed explicit support for React 17: the peer dependency range for `react`, `react-dom` and `@types/react` is now `^18.0.0`. React 17 is no longer tested or guaranteed to work, although it may continue to work in some cases. See the [migration guide](https://backstage.io/docs/frontend-system/architecture/migrations#157).
- [`9d0a31b`](https://github.com/backstage/backstage/commit/9d0a31b): Removed an unused `use-sync-external-store` dependency, which is no longer needed now that React 18 is the minimum supported version.
- [`c147b7a`](https://github.com/backstage/backstage/commit/c147b7a): Fixed disabled external route bindings falling back to their default targets during link resolution.

  Navigation analytics now use the most specific routed extension even when it has no route reference, including nested extensions with an empty path.

- [`2aa14e3`](https://github.com/backstage/backstage/commit/2aa14e3): The new frontend system now owns app history independently of page routing libraries, so page matching, route references, and navigation analytics use the same location and route hierarchy. Href creation and navigation require app-absolute paths starting with `/`, excluding the deployment basename, and custom factories for `coreApis.appHistory` must be available during initialization without an `if` predicate. See the [1.57 migration notes](https://backstage.io/docs/frontend-system/architecture/migrations#157) for detailed migration steps.

  Query and state synchronization through direct browser history replacements stays silent across rerenders. In browsers with the Navigation API, third-party pushes and replacements that change the pathname or hash are still reported as navigation.

### `@backstage/frontend-plugin-api` (0.18.2 → [1.0.0](../../changelogs/@backstage/frontend-plugin-api.md#100))

#### 1.0.0

##### Major Changes

- [`b3befd0`](https://github.com/backstage/backstage/commit/b3befd0): Released version 1.0 of this frontend framework package. Its public APIs are now stable under the [package versioning policy](https://backstage.io/docs/overview/versioning-policy/#package-versioning-policy). Alpha and beta APIs retain their existing stability levels.

##### Minor Changes

- [`5a539ca`](https://github.com/backstage/backstage/commit/5a539ca): **BREAKING**: The `pluginId` property of plugins passed as a `FrontendFeature` is now required. Plugins built against framework versions that predate `pluginId` must be rebuilt against a current version.
- [`6540a44`](https://github.com/backstage/backstage/commit/6540a44): **BREAKING**: `useApi` now unwraps promise-valued APIs, suspending while pending
  and throwing rejection reasons to an error boundary. Its return type is
  `Awaited<T>`. Existing consumers that intentionally used the promise returned by
  `useApi` must use a direct holder lookup instead.

  Declare lazy implementations with `ApiRef<Promise<MyApi>>`. API holders,
  factories, and dependencies keep their existing contracts and pass the declared
  value through unchanged.

  See the [Utility API documentation](https://backstage.io/docs/frontend-system/utility-apis/creating/#lazy-api-implementations)
  for lazy implementations, Suspense boundaries, and migration requirements.

- [`d514e4d`](https://github.com/backstage/backstage/commit/d514e4d): **BREAKING**: Removed the deprecated `ExtensionFactoryMiddleware` type export. Import it from `@backstage/frontend-app-api` instead:

  ```diff
  -import type { ExtensionFactoryMiddleware } from '@backstage/frontend-plugin-api';
  +import type { ExtensionFactoryMiddleware } from '@backstage/frontend-app-api';
  ```

  Add `@backstage/frontend-app-api` as a dependency of your app package if it is not already declared. Middleware behavior is unchanged.

- [`0a552cf`](https://github.com/backstage/backstage/commit/0a552cf): **BREAKING**: Removed the `ExtensionAttachTo` type export. Use `Extension<unknown>['attachTo']` if you need to reference the attachment type.
- [`62268a9`](https://github.com/backstage/backstage/commit/62268a9): **BREAKING**: Removed the `AnalyticsImplementation` type and the deprecated `AnalyticsImplementationBlueprint` and `AnalyticsImplementationFactory` exports. Import them from `@backstage/plugin-app-react` instead. No changes to their usage are needed beyond updating the imports.
- [`86ff5a3`](https://github.com/backstage/backstage/commit/86ff5a3): Removed the deprecated `PageTab` and `PluginOptions` types. Use `PageLayoutTab` and `CreateFrontendPluginOptions` instead.
- [`8ae0b8e`](https://github.com/backstage/backstage/commit/8ae0b8e): **BREAKING**: Removed the deprecated `IconComponent` export. Use `IconElement` and pass `<MyIcon />` rather than `MyIcon` when working with icons in the new frontend system. Legacy integrations that still need a component type can import `IconComponent` from `@backstage/core-plugin-api`. Auth provider icons continue to accept components with the same optional `fontSize` prop.
- [`806a9cf`](https://github.com/backstage/backstage/commit/806a9cf): **BREAKING**: Removed the `/alpha` entry point. All of its exports are already available from `@backstage/frontend-plugin-api`; update imports to use the main entry point instead:

  ```diff
  -import { PluginWrapperBlueprint } from '@backstage/frontend-plugin-api/alpha';
  +import { PluginWrapperBlueprint } from '@backstage/frontend-plugin-api';
  ```

  The exported APIs retain the same behavior and identity. For the deprecated `pluginWrapperApiRef`, prefer `coreApis.internal.pluginWrapper` from the main entry point.

- [`dafdab8`](https://github.com/backstage/backstage/commit/dafdab8): **BREAKING**: Removed the deprecated `withApis` export. Wrap class components in a function component that uses `useApi` instead:

  ```tsx
  import { errorApiRef, useApi } from '@backstage/frontend-plugin-api';
  import { MyClassComponent, MyClassComponentProps } from './MyClassComponent';

  export function MyComponent(props: Omit<MyClassComponentProps, 'errorApi'>) {
    const errorApi = useApi(errorApiRef);
    return <MyClassComponent {...props} errorApi={errorApi} />;
  }
  ```

- [`0f2ffc9`](https://github.com/backstage/backstage/commit/0f2ffc9): **BREAKING**: Removed the `ProgressProps` type. Replace imports and usages of this type with its existing shape, `{}`. The `Progress` component and its props contract are unchanged.
- [`a5b3445`](https://github.com/backstage/backstage/commit/a5b3445): Added router-independent navigation and routing APIs: `RouterLink`, `AppHistoryApi` (also available as `coreApis.appHistory`), `useAppNavigate`, `useAppHref`, `useAppLocation`, `useAppSearchParams`, and `RouteResolutionApi.resolvePath` for matched routing ancestry. **BREAKING**: `useRouteRefParams` returns only parameters declared by the supplied route ref, with `undefined` for unmatched parameters, and no longer includes the splat `*`. See the [1.57 migration notes](https://backstage.io/docs/frontend-system/architecture/migrations#157) for detailed migration steps.

  The stable public `/routing` entry point exposes `RoutingProvider`, `RoutingIntegration`, and `useRoutingIntegration` for router and component-library integrations. It has the same stability and compatibility guarantees as the main entry point; app history APIs, plugin navigation hooks, and route refs remain in the main entry point. `AppNavigate` describes the navigation function returned by `useAppNavigate`.

- [`e55a4a8`](https://github.com/backstage/backstage/commit/e55a4a8): **BREAKING**: Removed the deprecated `FrontendPlugin.id` property from the public interface. Use `pluginId` instead. The runtime alias is retained for compatibility with older apps.
- [`7285912`](https://github.com/backstage/backstage/commit/7285912): **BREAKING PRODUCERS**: `TranslationSnapshot` now requires `t` even when `ready` is false. Custom `TranslationApi` implementations must provide a translator using available messages and language fallbacks.
- [`d84cf73`](https://github.com/backstage/backstage/commit/d84cf73): Removed the deprecated `DialogApi.show`, `DialogApi.showModal`, and `IconsApi.getIcon` methods. Use `DialogApi.open` with your own dialog presentation, and `IconsApi.icon` to retrieve icon elements.

  The API references now use `core.dialog.v2` and `core.icons.v2`. Upgrade `@backstage/plugin-app` alongside this package, and update custom API implementations to use the new references.

##### Patch Changes

- [`ca02018`](https://github.com/backstage/backstage/commit/ca02018): API reference IDs now use plugin ID validation for each dot-separated component.
  This accepts numeric dash groups and mixed case, including IDs such as
  `plugin.example-2.todos`.
- [`ac2de0f`](https://github.com/backstage/backstage/commit/ac2de0f): Fixed a "Type instantiation is excessively deep and possibly infinite" error from `createFrontendPlugin` in plugins with many extensions, in particular with TypeScript 5.9 and later. In rare cases, the extensions in the type of a plugin may be in a different order or include extensions that were missing before.
- [`d5e1d51`](https://github.com/backstage/backstage/commit/d5e1d51): Deprecated `AnyApiRef` and `AnyApiFactory`. Use `ApiRef` and `ApiFactory` without type arguments instead; their new defaults match the existing aliases. The deprecated aliases remain available for compatibility.
- [`d47986a`](https://github.com/backstage/backstage/commit/d47986a): Improved type inference for deeply nested and cyclic translation messages. Required replacement values and plural counts are inferred at any depth, and count interpolation requires a numeric value.
- [`8ca78a2`](https://github.com/backstage/backstage/commit/8ca78a2): Added `coreApis`, an object of core Utility API refs, with framework infrastructure APIs grouped under `coreApis.internal`: app lifecycle, OAuth requests, plugin header actions, plugin wrappers, and swappable components. The nested object is public. The deprecated Alert API is excluded in favor of Toast. The individual refs with object equivalents are deprecated in favor of their matching object members, while remaining compatible. Provider-specific authentication refs remain separate and are not deprecated.
- [`4bbc7a9`](https://github.com/backstage/backstage/commit/4bbc7a9): Removed explicit support for React 17: the peer dependency range for `react`, `react-dom` and `@types/react` is now `^18.0.0`. React 17 is no longer tested or guaranteed to work, although it may continue to work in some cases. See the [migration guide](https://backstage.io/docs/frontend-system/architecture/migrations#157).
- [`9d0a31b`](https://github.com/backstage/backstage/commit/9d0a31b): Removed an unused `use-sync-external-store` dependency, which is no longer needed now that React 18 is the minimum supported version.
- [`6928d62`](https://github.com/backstage/backstage/commit/6928d62): Fixed swappable components losing their mounted state when their props change. The resolved component remains stable while its props update.
- [`641ac02`](https://github.com/backstage/backstage/commit/641ac02): Added `coreExtensionData.titleTranslation` to provide a translation message selection alongside a static title. Consumers can opt in to translated titles. The selection must not require formatting values.
- [`7594fd4`](https://github.com/backstage/backstage/commit/7594fd4): Page and sub-page blueprints now accept typed translation message selections in their `title` parameter, using existing translation resources. Select a message by calling a translation ref, for example `myTranslationRef('page.title')`. TypeScript checks the key and rejects messages that require formatting values.

  Resolved translations take precedence over configured titles in every language, including the default language. Titles wait for the selected language on first load and retain resolved values during later loads or failures, preserving page state.

  `TranslationRef` values are now callable functions. Treat refs as opaque values rather than checking for plain objects or cloning them.

### `@backstage/frontend-test-utils` (0.6.5 → [1.0.0](../../changelogs/@backstage/frontend-test-utils.md#100))

#### 1.0.0

##### Major Changes

- [`b3befd0`](https://github.com/backstage/backstage/commit/b3befd0): Released version 1.0 of this frontend framework package. Its public APIs are now stable under the [package versioning policy](https://backstage.io/docs/overview/versioning-policy/#package-versioning-policy). Alpha and beta APIs retain their existing stability levels.

##### Minor Changes

- [`76b1c3d`](https://github.com/backstage/backstage/commit/76b1c3d): Removed the deprecated standalone mock API type exports and the non-deprecated `MockFetchApiOptions` export. Use the corresponding `mockApis` helpers to create instances and derive types as follows:

  | Removed type                 | Replacement type                                                     |
  | ---------------------------- | -------------------------------------------------------------------- |
  | `MockAlertApi`               | `ReturnType<typeof mockApis.alert>`                                  |
  | `MockAnalyticsApi`           | `ReturnType<typeof mockApis.analytics>`                              |
  | `MockConfigApi`              | `ReturnType<typeof mockApis.config>`                                 |
  | `MockErrorApi`               | `ReturnType<typeof mockApis.error>`                                  |
  | `MockFeatureFlagsApi`        | `ReturnType<typeof mockApis.featureFlags>`                           |
  | `MockFetchApi`               | `ReturnType<typeof mockApis.fetch>`                                  |
  | `MockPermissionApi`          | `ReturnType<typeof mockApis.permission>`                             |
  | `MockStorageApi`             | `ReturnType<typeof mockApis.storage>`                                |
  | `MockTranslationApi`         | `ReturnType<typeof mockApis.translation>`                            |
  | `MockErrorApiOptions`        | `NonNullable<Parameters<typeof mockApis.error>[0]>`                  |
  | `MockFetchApiOptions`        | `NonNullable<Parameters<typeof mockApis.fetch>[0]>`                  |
  | `MockFeatureFlagsApiOptions` | `NonNullable<Parameters<typeof mockApis.featureFlags>[0]>`           |
  | `ErrorWithContext`           | `ReturnType<ReturnType<typeof mockApis.error>['getErrors']>[number]` |

  Import `mockApis` from `@backstage/frontend-test-utils`. For example, use `mockApis.analytics()` to create an analytics mock and `ReturnType<typeof mockApis.analytics>` when you need an explicit instance type. Existing calls to the helpers require no changes. Inspection methods such as `getEvents`, `getErrors`, and `getAlerts`, along with legacy alert support, remain available.

- [`2aa14e3`](https://github.com/backstage/backstage/commit/2aa14e3): Added the `renderAs: 'chrome'` option to `renderInTestApp` and mock utilities for navigation tests: `mockApis.appHistory()` and `mockApis.routeResolution()`. Page matching uses framework routing; wrap test elements in their page adapter when they need routing-library context. See the [1.57 migration notes](https://backstage.io/docs/frontend-system/architecture/migrations#157) for detailed migration steps and the [routing test guide](https://backstage.io/docs/frontend-system/building-plugins/testing#navigation-and-app-history) for examples.
- [`53ab1aa`](https://github.com/backstage/backstage/commit/53ab1aa): **BREAKING**: `renderInTestApp`, `renderTestApp` and `createExtensionTester` now throw for every error reported while creating the test app or extension tree, including the ones a real app only logs as warnings, such as `EXTENSION_IGNORED`. Previously `renderInTestApp` and `renderTestApp` ignored these errors, so a test could pass for an app that is broken. All three helpers accept a new `isExpectedError` option to allow specific errors.

  **Migration:** fix the reported error in the test setup. The error message names the code to allow if the error is expected:

  ```ts
  renderInTestApp(<MyComponent />, {
    isExpectedError: error =>
      error.code === 'EXTENSION_INPUT_DATA_IGNORED' &&
      error.context.node.spec.id === 'page:my-plugin',
  });
  ```

  A common one is `API_FACTORY_CONFLICT` from providing an API that another plugin owns, such as a `core.*` API passed in `extensions`. That override was always rejected, so remove it, or use the `apis` option to replace an API in a test.

- [`8ca78a2`](https://github.com/backstage/backstage/commit/8ca78a2): **BREAKING** Updated `renderInTestApp` and `renderTestApp` to provide default API implementations that are more suitable for testing. This may break existing tests that rely on the previous defaults:

  - **Toasts** are collected in memory instead of being displayed. Tests that assert on visible notifications need to provide an API implementation that forwards toasts to the UI, or assert on an explicitly supplied toast fake instead.
  - **Storage** is isolated in memory for each test app instead of using browser `localStorage`. Tests that seed or inspect `localStorage`, or rely on storage persisting between test apps, need to supply an explicit storage implementation.
  - **Errors** are collected without forwarding them to alerts or installing global error handlers. Error subscriptions no longer receive events from the default implementation. Tests that rely on these behaviors need an explicit error API implementation; tests can also supply a collecting error fake to assert on reported errors.
  - **Alerts** are collected and delivered to current subscribers, but earlier alerts are no longer replayed to new subscribers. Tests that rely on replay need an explicit alert API implementation.
  - **OAuth requests** use an in-memory coordinator with the same request coordination behavior as before.

  Explicit API overrides continue to take precedence over the defaults.

  Added `mockApis` helpers for all APIs in `coreApis`, including those grouped under `coreApis.internal`. These cover app state, dialogs, icons, OAuth requests, plugin wrappers and header actions, route resolution, swappable components, and toast notifications. Each `.mock()` helper provides typed Jest stubs without default behavior that can be registered directly with frontend test utilities.

  Added functional in-memory fakes for language, lifecycle, themes, icons, OAuth requests, plugin header actions, and toast notifications. Except for lifecycle, these can be supplied explicitly through the test app's `apis` option to configure behavior and inspect state. Use `TestApiProvider` for the lifecycle fake, since test apps manage their own lifecycle.

  Fixed storage fake isolation for nested buckets with the same name under different parents.

- [`e3d50c4`](https://github.com/backstage/backstage/commit/e3d50c4): Removed the deprecated `show` and `showModal` methods from dialog test helpers, and `getIcon` from icons test helpers. Update tests to use `open` for dialogs and `icon` for icon elements.

##### Patch Changes

- [`6540a44`](https://github.com/backstage/backstage/commit/6540a44): `renderInTestApp` now handles suspended content with an empty fallback, so
  promise-valued APIs do not require a Suspense wrapper in each test. Use asynchronous
  queries such as `findByText` to await suspended content. Elements that do not
  suspend still render immediately. When a descendant suspends, the entire element
  waits unless an inner Suspense boundary
  isolates it. An inner boundary also controls its own fallback. Tests that relied
  on an ancestor boundary's loading UI may need updated assertions.

  Test API tuples for promise-valued refs accept both synchronous partial
  implementations and promises of partial implementations. Synchronous mocks render
  immediately and pass through unchanged. Use promise mocks to test loading,
  failures, or code that calls promise methods.

  Fixed test rendering helpers losing their test extensions when a plugin named
  `test` is included in `features`.

- [`4bbc7a9`](https://github.com/backstage/backstage/commit/4bbc7a9): Removed explicit support for React 17: the peer dependency range for `react`, `react-dom` and `@types/react` is now `^18.0.0`. React 17 is no longer tested or guaranteed to work, although it may continue to work in some cases. See the [migration guide](https://backstage.io/docs/frontend-system/architecture/migrations#157).
- [`9d0a31b`](https://github.com/backstage/backstage/commit/9d0a31b): Removed an unused `use-sync-external-store` dependency, which is no longer needed now that React 18 is the minimum supported version.
- [`ec245df`](https://github.com/backstage/backstage/commit/ec245df): Added `apis` to the results of `renderInTestApp` and `renderTestApp`, providing access to the app's Utility APIs using API refs. The holder exposes the same instances used by components, including registered APIs and test overrides.

### `@backstage/plugin-app` (0.5.4 → [0.6.0](../../changelogs/@backstage/plugin-app.md#060))

#### 0.6.0

##### Minor Changes

- [`f9f794b`](https://github.com/backstage/backstage/commit/f9f794b): **BREAKING**: Icon bundles created with `IconBundleBlueprint` now accept only icon elements. Replace component values such as `icons: { user: MyIcon }` with `icons: { user: <MyIcon /> }`. For Material UI icons, use `<MyIcon fontSize="inherit" />`. Icons supplied through `convertLegacyAppOptions` continue to accept components and are converted automatically.
- [`cedb355`](https://github.com/backstage/backstage/commit/cedb355): The deprecated `DialogApi.show` and `DialogApi.showModal` methods now throw errors. Use `DialogApi.open` and provide your own dialog surface and dismissal handling.

  Added support for the new icons API while preserving `IconsApi.getIcon` for older plugins.

- [`86681bf`](https://github.com/backstage/backstage/commit/86681bf): Removed the ignored `anchorOrigin` option from the built-in alert display extension and toast display props. Remove this option from your extension configuration. Toasts continue to appear at the bottom center of the screen.
- [`df2bcee`](https://github.com/backstage/backstage/commit/df2bcee): Pages and sub-pages now share app-owned navigation and can use different routing libraries, with implicit React Router v6 compatibility for existing pages. **BREAKING**: Removed the `router` input from `app/root`; remove root router extensions, move global providers to `AppRootWrapperBlueprint`, and use page adapters where needed. See the [1.57 migration notes](https://backstage.io/docs/frontend-system/architecture/migrations#157) for detailed migration steps.
- [`24bde66`](https://github.com/backstage/backstage/commit/24bde66): Custom navigation components now receive `navItems` without the deprecated flat `items` collection.

##### Patch Changes

- [`9bac36e`](https://github.com/backstage/backstage/commit/9bac36e): Fixed the app remounting during finalization when root elements are added, for example ones deferred with an `if` predicate. Root elements are now keyed by their extension ID and rendered in a single fixed position, so adding one no longer moves the rest of the app in the React tree.
- [`edf309d`](https://github.com/backstage/backstage/commit/edf309d): Ensure dismissed toasts are marked as closed in `ToastApiForwarder` so they are not replayed when `ToastDisplay` remounts (such as during theme changes).
- [`e55a4a8`](https://github.com/backstage/backstage/commit/e55a4a8): Updated plugin identity handling to use `pluginId`, while preserving support for older plugin instances that only expose `id`.
- [`4bbc7a9`](https://github.com/backstage/backstage/commit/4bbc7a9): Removed explicit support for React 17: the peer dependency range for `react`, `react-dom` and `@types/react` is now `^18.0.0`. React 17 is no longer tested or guaranteed to work, although it may continue to work in some cases. See the [migration guide](https://backstage.io/docs/frontend-system/architecture/migrations#157).
- [`9d0a31b`](https://github.com/backstage/backstage/commit/9d0a31b): Removed an unused `use-sync-external-store` dependency, which is no longer needed now that React 18 is the minimum supported version.
- [`ff23578`](https://github.com/backstage/backstage/commit/ff23578): Added support for translated titles in navigation, page headers, tabs, and breadcrumbs.
- [`8f36712`](https://github.com/backstage/backstage/commit/8f36712): Updated the app runtime to use the analytics implementation APIs from `@backstage/plugin-app-react`.

### `@backstage/plugin-app-react` (0.2.8 → [0.3.0](../../changelogs/@backstage/plugin-app-react.md#030))

#### 0.3.0

##### Minor Changes

- [`f9f794b`](https://github.com/backstage/backstage/commit/f9f794b): **BREAKING**: Icon bundles created with `IconBundleBlueprint` now accept only icon elements. Replace component values such as `icons: { user: MyIcon }` with `icons: { user: <MyIcon /> }`. For Material UI icons, use `<MyIcon fontSize="inherit" />`. Icons supplied through `convertLegacyAppOptions` continue to accept components and are converted automatically.
- [`5c29a89`](https://github.com/backstage/backstage/commit/5c29a89): **BREAKING**: Removed the deprecated flat `items` prop from custom navigation components. Use the `navItems` collection instead.

  Use `navItems.rest()` instead of iterating over `items`. Replace `item.to` with `item.href` and `item.text` with `item.title`. The `item.icon` value is a React element, so render it directly instead of using it as a component type.

- [`df2bcee`](https://github.com/backstage/backstage/commit/df2bcee): **BREAKING**: Removed `RouterBlueprint`; remove overrides that only install `BrowserRouter`, move global providers to `AppRootWrapperBlueprint`, and render routing adapters inside lazily loaded page components. For custom navigation, provide `AppHistoryApi` through an `ApiBlueprint` factory for `coreApis.appHistory` that is available during initialization without an `if` predicate. See the [1.57 migration notes](https://backstage.io/docs/frontend-system/architecture/migrations#157) for detailed migration steps.

##### Patch Changes

- [`77c1622`](https://github.com/backstage/backstage/commit/77c1622): Added the `AnalyticsImplementation` type, moved from `@backstage/frontend-plugin-api`, alongside `AnalyticsImplementationBlueprint` and `AnalyticsImplementationFactory`.
- [`4bbc7a9`](https://github.com/backstage/backstage/commit/4bbc7a9): Removed explicit support for React 17: the peer dependency range for `react`, `react-dom` and `@types/react` is now `^18.0.0`. React 17 is no longer tested or guaranteed to work, although it may continue to work in some cases. See the [migration guide](https://backstage.io/docs/frontend-system/architecture/migrations#157).

### `@backstage/plugin-auth-backend` (0.30.2 → [0.31.0](../../changelogs/@backstage/plugin-auth-backend.md#0310))

#### 0.31.0

##### Minor Changes

- [`352ad44`](https://github.com/backstage/backstage/commit/352ad44): **BREAKING**: The deprecated experimental Dynamic Client Registration (DCR) support has been removed. Use Client ID Metadata Documents (CIMD) instead and remove `auth.experimentalDynamicClientRegistration` from your configuration. The database migration deletes registered clients and their authorization and offline sessions, invalidating existing DCR authorization codes and refresh tokens. Users must sign in again through a CIMD client. Already-issued user tokens remain valid until they expire. See the [migration guide](https://backstage.io/docs/ai/mcp-actions#migrating-from-dynamic-client-registration).
- [`9e22c4b`](https://github.com/backstage/backstage/commit/9e22c4b): Added support for pre-registered OAuth clients through the new `auth.staticClients` configuration. This allows integrations that support neither Client ID Metadata Documents nor Dynamic Client Registration to act on behalf of signed-in users using a fixed client ID, an optional client secret, and exact redirect URIs. All clients must use PKCE. Clients with a secret must also authenticate at the token endpoint.

  The token endpoint verifies client credentials for both authorization code and refresh token grants. Missing or incorrect credentials for confidential clients return `invalid_client` with HTTP 401. Public clients can identify themselves using HTTP Basic with an empty secret. Codes issued to a different client are rejected.

  Removing a configured client rejects its outstanding authorization codes and refresh tokens. HTTP Basic authentication supports form-encoded client IDs and secrets.

  PKCE now requires the `S256` challenge method for all clients, including existing CIMD clients. The `plain` method is no longer accepted or advertised. Update clients that use `plain` to generate SHA-256 challenges.

##### Patch Changes

- [`5fc15b7`](https://github.com/backstage/backstage/commit/5fc15b7): Fixed authorization-code exchanges to reject supplied client IDs that do not match the client that obtained the code. These requests return `invalid_grant` without consuming the code. Exchanges that omit `client_id` remain supported for older clients but now log a deprecation warning; a future release will require it.
- [`97ee785`](https://github.com/backstage/backstage/commit/97ee785): Allow Cursor clients to use Client ID Metadata Documents by default.
- [`8965c27`](https://github.com/backstage/backstage/commit/8965c27): User tokens issued by sign-in resolvers now always have the entity refs in their `sub` and `ent` claims in canonical form, for example `user:default/jane.doe` rather than `User:default/Jane.Doe`, and duplicate `ent` refs are removed. Previously, a custom sign-in resolver could issue valid but non-canonical refs, which then failed to match stored user info and offline sessions on case-sensitive databases.
- [`1892d2f`](https://github.com/backstage/backstage/commit/1892d2f): chore(deps): bump `minimatch` from 10.2.6 to 11.0.1
- [`6a0de59`](https://github.com/backstage/backstage/commit/6a0de59): Backend plugins now locate their database migrations relative to their own package directory, without requiring the package to be resolvable by name.
- [`7db7c52`](https://github.com/backstage/backstage/commit/7db7c52): Respect the `auth.backstageTokenExpiration` configuration when issuing OAuth access and ID tokens from the OIDC service, instead of hard-coding a 1-hour expiry.
- [`fa0eb7a`](https://github.com/backstage/backstage/commit/fa0eb7a): Added a `POST /v1/offline-sessions/revoke` endpoint that lets other backend services revoke all offline sessions (refresh tokens) of a user. The endpoint only accepts service credentials, records an audit event, and is only available when `auth.experimentalRefreshToken.enabled` is set.
- [`918ca98`](https://github.com/backstage/backstage/commit/918ca98): Updated dependency `jose` to `^6.1.0`. Existing ES256 token issuance and verification are unchanged. ML-DSA algorithms can be used when the runtime supports them.

### `@backstage/plugin-catalog-backend-module-ldap` (0.12.10 → [0.13.0](../../changelogs/@backstage/plugin-catalog-backend-module-ldap.md#0130))

#### 0.13.0

##### Minor Changes

- [`f9a84cb`](https://github.com/backstage/backstage/commit/f9a84cb): The LDAP org entity provider now reads users and groups in parallel by default. Set `disableParallelReads: true` to use one connection and read sequentially. Parallel reads open two binds and two connections per refresh. Directories with per-client connection limits may notice the extra load after upgrading.

  The org entity provider and `LdapOrgReaderProcessor` request only the attributes used by configured mappings. LDAP connections are closed after each refresh.

  **BREAKING**: Searches no longer request `['*', '+']` by default. This applies to both the org entity provider and `LdapOrgReaderProcessor`. When options.attributes is not explicitly configured, attributes required by map (including custom map.\* overrides and membership mappings) are requested automatically. When options.attributes is explicitly configured, the provided list is used as-is and must include all attributes required by mappings, vendor configuration, and custom transformers. Custom transformers that access other attributes from LDAP entries may now find those attributes missing.

  If your transformers rely on additional LDAP attributes, include them in `options.attributes` or use `['*', '+']` to request all attributes:

  ```diff
   catalog:
     providers:
       ldapOrg:
         default:
           users:
             options:
  +            attributes: ['*', '+']
           groups:
             options:
  +            attributes: ['*', '+']
  ```

### `@backstage/plugin-events-backend-module-azure` (0.2.36 → [0.3.0](../../changelogs/@backstage/plugin-events-backend-module-azure.md#030))

#### 0.3.0

##### Minor Changes

- [`70fd46d`](https://github.com/backstage/backstage/commit/70fd46d): **BREAKING** Webhook events modules now require a webhook secret by default. Requests to the `/api/events/http/github`, `/api/events/http/gitlab`, and `/api/events/http/azureDevOps` endpoints are rejected with HTTP 403 when no webhook secret is configured, instead of being accepted without validation. To continue accepting unauthenticated events, for example in development environments, set the module's new `dangerouslyAllowUnauthenticatedEvents` option to `true`. In addition, the `createGitlabTokenValidator` function from `@backstage/plugin-events-backend-module-gitlab` now requires a `logger` argument.

### `@backstage/plugin-events-backend-module-github` (0.4.17 → [0.5.0](../../changelogs/@backstage/plugin-events-backend-module-github.md#050))

#### 0.5.0

##### Minor Changes

- [`70fd46d`](https://github.com/backstage/backstage/commit/70fd46d): **BREAKING** Webhook events modules now require a webhook secret by default. Requests to the `/api/events/http/github`, `/api/events/http/gitlab`, and `/api/events/http/azureDevOps` endpoints are rejected with HTTP 403 when no webhook secret is configured, instead of being accepted without validation. To continue accepting unauthenticated events, for example in development environments, set the module's new `dangerouslyAllowUnauthenticatedEvents` option to `true`. In addition, the `createGitlabTokenValidator` function from `@backstage/plugin-events-backend-module-gitlab` now requires a `logger` argument.

### `@backstage/plugin-events-backend-module-gitlab` (0.3.17 → [0.4.0](../../changelogs/@backstage/plugin-events-backend-module-gitlab.md#040))

#### 0.4.0

##### Minor Changes

- [`70fd46d`](https://github.com/backstage/backstage/commit/70fd46d): **BREAKING** Webhook events modules now require a webhook secret by default. Requests to the `/api/events/http/github`, `/api/events/http/gitlab`, and `/api/events/http/azureDevOps` endpoints are rejected with HTTP 403 when no webhook secret is configured, instead of being accepted without validation. To continue accepting unauthenticated events, for example in development environments, set the module's new `dangerouslyAllowUnauthenticatedEvents` option to `true`. In addition, the `createGitlabTokenValidator` function from `@backstage/plugin-events-backend-module-gitlab` now requires a `logger` argument.

### `@backstage/plugin-scaffolder-backend-module-gcp` (0.2.26 → [0.3.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-gcp.md#030))

#### 0.3.0

##### Minor Changes

- [`44d5ba2`](https://github.com/backstage/backstage/commit/44d5ba2): **BREAKING**: The backend's Google Cloud credentials now require the `storage.objects.list` permission on the configured task recovery bucket, in addition to the existing object permissions. Grant this permission before upgrading.

  Fixed task recovery workspace saves failing with Google Cloud Storage rate limit errors when template steps finish in quick succession. Each snapshot is saved to a separate object, and recovery continues to support snapshots from older versions.

### `@backstage/ui` (0.19.0 → [0.20.0](../../changelogs/@backstage/ui.md#0200))

#### 0.20.0

##### Minor Changes

- [`f4d8adf`](https://github.com/backstage/backstage/commit/f4d8adf): **BREAKING**: Backstage UI now uses explicit routing integration and React Aria's native link behavior: standalone apps that relied on automatic React Router integration must supply `BUIProvider` with a `useNavigation` hook, React Router is no longer a peer dependency, and `routerOptions` now supports only the router-neutral `replace` and `state` fields. **BREAKING**: Link targets using `javascript:`, `data:`, or `vbscript:` become inert `about:blank` links with a console warning. See the [1.57 migration notes](https://backstage.io/docs/frontend-system/architecture/migrations#157) for detailed migration steps and the [BUI routing migration guide](https://backstage.io/docs/frontend-system/building-plugins/page-routers#migrate-backstage-ui-routing) for integration requirements.

  Affected components: BUIProvider, ButtonLink, Card, Combobox, Header, Link, List, Menu, PluginHeader, SearchAutocomplete, Select, Table, Tabs, TagGroup

##### Patch Changes

- [`9d0a31b`](https://github.com/backstage/backstage/commit/9d0a31b): Removed an unused `use-sync-external-store` dependency, which is no longer needed now that React 18 is the minimum supported version.
- [`9120c46`](https://github.com/backstage/backstage/commit/9120c46): Updated dependency `glob` to `^14.0.0`.
- [`724657a`](https://github.com/backstage/backstage/commit/724657a): `Header` tabs no longer make the page scroll horizontally when they do not fit. The tabs now stay in a single row that scrolls on its own, with a visible scrollbar. When more tabs are hidden on a side, that edge of the row fades out. The fade is removed while a tab has keyboard focus. The row scrolls to show the active tab when the page loads and whenever the active tab changes. With a mouse or other precise pointer, a scroll button also appears on each side that has hidden tabs. Small touch screens show only the fade. The buttons respect the reduced motion setting. Screen readers do not announce them, because every tab is still reachable with the keyboard.

  **Affected components:** Header

- [`065d1e3`](https://github.com/backstage/backstage/commit/065d1e3): Fixed `useTable` in complete mode showing an empty page labelled "NaN - NaN of N" when `paginationOptions` switched from `type: 'none'` to paged pagination after mount.

  **Affected components:** `useTable`

## Major version bumps

### `@backstage/frontend-dev-utils` (0.1.7 → [1.0.0](../../changelogs/@backstage/frontend-dev-utils.md#100))

#### 1.0.0

##### Major Changes

- [`b3befd0`](https://github.com/backstage/backstage/commit/b3befd0): Released version 1.0 of this frontend framework package. Its public APIs are now stable under the [package versioning policy](https://backstage.io/docs/overview/versioning-policy/#package-versioning-policy). Alpha and beta APIs retain their existing stability levels.

##### Patch Changes

- [`4bbc7a9`](https://github.com/backstage/backstage/commit/4bbc7a9): Removed explicit support for React 17: the peer dependency range for `react`, `react-dom` and `@types/react` is now `^18.0.0`. React 17 is no longer tested or guaranteed to work, although it may continue to work in some cases. See the [migration guide](https://backstage.io/docs/frontend-system/architecture/migrations#157).

### `@backstage/plugin-catalog-react` (3.3.0 → [4.0.0](../../changelogs/@backstage/plugin-catalog-react.md#400))

#### 4.0.0

##### Minor Changes

- [`d4f458e`](https://github.com/backstage/backstage/commit/d4f458e): Added support for translated entity content titles through `EntityContentBlueprint`.
- [`4bbc7a9`](https://github.com/backstage/backstage/commit/4bbc7a9): Removed explicit support for React 17: the peer dependency range for `react`, `react-dom` and `@types/react` is now `^18.0.0`. React 17 is no longer tested or guaranteed to work, although it may continue to work in some cases. See the [migration guide](https://backstage.io/docs/frontend-system/architecture/migrations#157).

### `@backstage/plugin-scaffolder-react` (2.1.1 → [3.0.0](../../changelogs/@backstage/plugin-scaffolder-react.md#300))

#### 3.0.0

##### Minor Changes

- [`3fe82f6`](https://github.com/backstage/backstage/commit/3fe82f6): Added a `ScaffolderTemplateFilterBlueprint` that lets apps filter the new frontend system's template list using identity, catalog, or other viewer-specific state.
- [`4bbc7a9`](https://github.com/backstage/backstage/commit/4bbc7a9): Removed explicit support for React 17: the peer dependency range for `react`, `react-dom` and `@types/react` is now `^18.0.0`. React 17 is no longer tested or guaranteed to work, although it may continue to work in some cases. See the [migration guide](https://backstage.io/docs/frontend-system/architecture/migrations#157).
- [`ff0ef74`](https://github.com/backstage/backstage/commit/ff0ef74): The scaffolder wizard now shows or hides parameter steps based on their `when` condition, and values from hidden steps are left out of the submitted parameters.

##### Patch Changes

- [`1c461ca`](https://github.com/backstage/backstage/commit/1c461ca): Fixed BUI array item headings to use the item schema title and honor an explicit item `ui:title` without adding a numeric suffix. Untitled items retain the numbered fallback.
- [`e8c4fb9`](https://github.com/backstage/backstage/commit/e8c4fb9): Improved screen reader support in the BUI scaffolder form theme: array item controls include the item name in their labels.
- [`818fbd6`](https://github.com/backstage/backstage/commit/818fbd6): The BUI form theme now renders a multi-select dropdown for array fields with unique `enum` items, and focus/blur events now report the selected values correctly.
- [`70bbe4b`](https://github.com/backstage/backstage/commit/70bbe4b): The review step now applies `ui:backstage.review.mask`, `ui:backstage.review.show: false`, `ui:widget: password` and `ui:field: Secret` to fields and items nested inside arrays and inside objects with `ui:backstage.review.explode: false`. Previously these nested values were shown in clear text.

## 0.x minor version bumps

### `@backstage/plugin-events-node` (0.4.27 → [0.5.0](../../changelogs/@backstage/plugin-events-node.md#050))

#### 0.5.0

##### Minor Changes

- [`a70aaea`](https://github.com/backstage/backstage/commit/a70aaea): The requests passed to request validators now include the parsed query string. The request rejection details now also
  support an optional `contentType` option for the provided payload, defaulting to `application/json` but also allowing
  `text/plain`.

## 0.0.x patch version bumps

### `@backstage/plugin-kubernetes-cluster` (0.0.42 → [0.0.43](../../changelogs/@backstage/plugin-kubernetes-cluster.md#0043))

#### 0.0.43

##### Patch Changes

- [`4bbc7a9`](https://github.com/backstage/backstage/commit/4bbc7a9): Removed explicit support for React 17: the peer dependency range for `react`, `react-dom` and `@types/react` is now `^18.0.0`. React 17 is no longer tested or guaranteed to work, although it may continue to work in some cases. See the [migration guide](https://backstage.io/docs/frontend-system/architecture/migrations#157).
- [`ca14116`](https://github.com/backstage/backstage/commit/ca14116): Moved `kubernetes-models` and `@kubernetes-models/apimachinery` to dev dependencies, since they are only used for types. Backends no longer install `kubernetes-models` through `@backstage/plugin-kubernetes-common`.

### `@backstage/plugin-signals` (0.0.36 → [0.0.37](../../changelogs/@backstage/plugin-signals.md#0037))

#### 0.0.37

##### Patch Changes

- [`4bbc7a9`](https://github.com/backstage/backstage/commit/4bbc7a9): Removed explicit support for React 17: the peer dependency range for `react`, `react-dom` and `@types/react` is now `^18.0.0`. React 17 is no longer tested or guaranteed to work, although it may continue to work in some cases. See the [migration guide](https://backstage.io/docs/frontend-system/architecture/migrations#157).

### `@backstage/plugin-signals-react` (0.0.27 → [0.0.28](../../changelogs/@backstage/plugin-signals-react.md#0028))

#### 0.0.28

##### Patch Changes

- [`4bbc7a9`](https://github.com/backstage/backstage/commit/4bbc7a9): Removed explicit support for React 17: the peer dependency range for `react`, `react-dom` and `@types/react` is now `^18.0.0`. React 17 is no longer tested or guaranteed to work, although it may continue to work in some cases. See the [migration guide](https://backstage.io/docs/frontend-system/architecture/migrations#157).

### `@backstage/release-manifests` (0.0.15 → [0.0.16](../../changelogs/@backstage/release-manifests.md#0016))

#### 0.0.16

##### Patch Changes

- [`b8777d1`](https://github.com/backstage/backstage/commit/b8777d1): Updated the `requirements` example in the README to the Node.js 24 and 26 range.

## 0.x patch version bumps

### `@backstage/backend-dynamic-feature-service` (0.8.8 → [0.8.9](../../changelogs/@backstage/backend-dynamic-feature-service.md#089))

#### 0.8.9

##### Patch Changes

- [`ed8f1ef`](https://github.com/backstage/backstage/commit/ed8f1ef): Updated dependency `@module-federation/sdk` to `~2.9.0`.
  Updated dependency `@module-federation/enhanced` to `~2.9.0`.
  Updated dependency `@module-federation/runtime` to `~2.9.0`.
  Updated dependency `@module-federation/runtime-core` to `~2.9.0`.
- [`c999b77`](https://github.com/backstage/backstage/commit/c999b77): Dynamic backend plugins can now require the packages they share with the backend when those packages are not in the root `node_modules`, as with the pnpm `isolated` node linker. They are found through the backend package and through this package. With the default pnpm hoisting, this includes the packages that pnpm hoists into `node_modules/.pnpm/node_modules`. With `hoist: false`, only the direct dependencies of the backend package and of this package are found. Everything that was searched before is still searched first, so a module that was found before is found in the same place. The exception is plugins inside the Backstage root on Windows, which did not search the root `node_modules` before, other than through `NODE_PATH`. It is now searched in the same order as on other platforms.

### `@backstage/backend-openapi-utils` (0.7.3 → [0.7.4](../../changelogs/@backstage/backend-openapi-utils.md#074))

#### 0.7.4

##### Patch Changes

- [`5695308`](https://github.com/backstage/backstage/commit/5695308): Fixed response validation so that an empty response body for a JSON response now reports that the body is required but missing, instead of failing with a JSON parse error when the response schema declares required properties.

### `@backstage/cli` (0.36.7 → [0.36.8](../../changelogs/@backstage/cli.md#0368))

#### 0.36.8

##### Patch Changes

- [`04a54e2`](https://github.com/backstage/backstage/commit/04a54e2): Switched the compilation target to ES2024, which all supported Node.js versions fully support. Package builds, app bundles, and the backend development server now compile code for ES2024, and the TypeScript `target` and `lib` options in `@backstage/cli/config/tsconfig.json` are set to `ES2024`. This requires TypeScript 5.9 or later, which is now the oldest supported version according to the [versioning policy](https://backstage.io/docs/overview/versioning-policy#typescript-releases).

  The `lib` change allows code to use ES2024 built-in APIs such as `Object.groupBy` and `Promise.withResolvers`. Backstage doesn't include polyfills, so frontend code that uses these APIs needs at least Chrome or Edge 119, Firefox 121, or Safari 17.4.

- [`9120c46`](https://github.com/backstage/backstage/commit/9120c46): Updated dependency `glob` to `^14.0.0`.

### `@backstage/cli-module-auth` (0.1.5 → [0.1.6](../../changelogs/@backstage/cli-module-auth.md#016))

#### 0.1.6

##### Patch Changes

- [`4d94005`](https://github.com/backstage/backstage/commit/4d94005): Fixed `auth logout` so that it revokes the refresh token on the server. Previously the revocation request was rejected because it did not identify the CLI client, which left the session valid until it expired.
- [`5fc15b7`](https://github.com/backstage/backstage/commit/5fc15b7): Fixed `auth login` to include the CLI's client ID when exchanging authorization codes, supporting auth backends that enforce client ID binding.
- [`9120c46`](https://github.com/backstage/backstage/commit/9120c46): Updated dependency `glob` to `^14.0.0`.

### `@backstage/cli-module-build` (0.1.9 → [0.1.10](../../changelogs/@backstage/cli-module-build.md#0110))

#### 0.1.10

##### Patch Changes

- [`04a54e2`](https://github.com/backstage/backstage/commit/04a54e2): Switched the compilation target to ES2024, which all supported Node.js versions fully support. Package builds, app bundles, and the backend development server now compile code for ES2024, and the TypeScript `target` and `lib` options in `@backstage/cli/config/tsconfig.json` are set to `ES2024`. This requires TypeScript 5.9 or later, which is now the oldest supported version according to the [versioning policy](https://backstage.io/docs/overview/versioning-policy#typescript-releases).

  The `lib` change allows code to use ES2024 built-in APIs such as `Object.groupBy` and `Promise.withResolvers`. Backstage doesn't include polyfills, so frontend code that uses these APIs needs at least Chrome or Edge 119, Firefox 121, or Safari 17.4.

- [`ed81712`](https://github.com/backstage/backstage/commit/ed81712): Fixed `backstage-cli package start` and `backstage-cli repo start` so the `--require` flag can be repeated again. `repo start` also forwards every `--require` from a backend package's `start` script, instead of only the last one.
- [`ed81712`](https://github.com/backstage/backstage/commit/ed81712): Added `--import` flag to `backstage-cli repo start` and `backstage-cli package start`. This flag can be specified multiple times and is forwarded to the underlying node process.
- [`ed8f1ef`](https://github.com/backstage/backstage/commit/ed8f1ef): Updated dependency `@module-federation/sdk` to `~2.9.0`.
  Updated dependency `@module-federation/enhanced` to `~2.9.0`.
  Updated dependency `@module-federation/runtime` to `~2.9.0`.
  Updated dependency `@module-federation/runtime-core` to `~2.9.0`.
- [`20e14f5`](https://github.com/backstage/backstage/commit/20e14f5): Updated dependency `@types/react-dom` to `19.3.0`.
  Updated dependency `react` to `19.3.0`.
  Updated dependency `react-dom` to `19.3.0`.
  Updated dependency `react-refresh` to `^0.19.0`.
- [`9120c46`](https://github.com/backstage/backstage/commit/9120c46): Updated dependency `glob` to `^14.0.0`.

### `@backstage/cli-module-info` (0.1.5 → [0.1.6](../../changelogs/@backstage/cli-module-info.md#016))

#### 0.1.6

##### Patch Changes

- [`1892d2f`](https://github.com/backstage/backstage/commit/1892d2f): chore(deps): bump `minimatch` from 10.2.6 to 11.0.1

### `@backstage/cli-module-migrate` (0.2.2 → [0.2.3](../../changelogs/@backstage/cli-module-migrate.md#023))

#### 0.2.3

##### Patch Changes

- [`1892d2f`](https://github.com/backstage/backstage/commit/1892d2f): chore(deps): bump `minimatch` from 10.2.6 to 11.0.1

### `@backstage/cli-module-new` (0.1.8 → [0.1.9](../../changelogs/@backstage/cli-module-new.md#019))

#### 0.1.9

##### Patch Changes

- [`b937434`](https://github.com/backstage/backstage/commit/b937434): Fixed `backstage-cli new` rewriting the entire `CODEOWNERS` file when an owner is provided. Existing content, including comments and formatting, is now preserved and a single repository-relative entry such as `/packages/my-lib/ @org/team` is appended, rather than an entry with an absolute filesystem path.
- [`c009ae4`](https://github.com/backstage/backstage/commit/c009ae4): The `frontend-plugin` template now declares package info: the generated `package.json` exports `./package.json`, and the plugin passes `info: { packageJson: () => import('../package.json') }` to `createFrontendPlugin`.
- [`500f8ff`](https://github.com/backstage/backstage/commit/500f8ff): Templates now depend on `@testing-library/react` 16 together with `@testing-library/dom` 10, which React Testing Library 16 requires as a peer dependency and which matches `@backstage/frontend-test-utils`.
- [`c584676`](https://github.com/backstage/backstage/commit/c584676): Template version hints are now treated as a minimum version within their caret range, that is the same major version, or the same minor version for `0.x` hints. When the lockfile already contains a range for a dependency that resolves to the hinted version or a newer compatible one, `backstage-cli new` reuses the highest such range instead of adding an older one, which avoids duplicate dependency versions.
- [`e769ccb`](https://github.com/backstage/backstage/commit/e769ccb): Fix an issue where creating a new package with the `cli-module` role would crash during the installation phase due to an unhandled role mapping.
- [`33894d6`](https://github.com/backstage/backstage/commit/33894d6): Fixed an issue where scaffolding templates on Windows could generate corrupted file names for files in subdirectories.

### `@backstage/cli-module-package-manager-yarn` (0.1.4 → [0.1.5](../../changelogs/@backstage/cli-module-package-manager-yarn.md#015))

#### 0.1.5

##### Patch Changes

- [`1cffd6f`](https://github.com/backstage/backstage/commit/1cffd6f): Made `@yarnpkg/cli`, `@yarnpkg/core`, and `@yarnpkg/plugin-patch` optional peer dependencies. `@yarnpkg/core@4.9.2` was published with a dependency on a patch file that only exists in the Yarn repository, which made installation fail for all projects depending on this module. To use the `pm verify-patches` command until this is fixed upstream, add these packages as `devDependencies` in your root `package.json`, together with the resolution `"@yarnpkg/core/got": "npm:^11.8.6"`. They will become regular dependencies again once a fixed version of `@yarnpkg/core` is published.

### `@backstage/cli-module-test-jest` (0.1.7 → [0.1.8](../../changelogs/@backstage/cli-module-test-jest.md#018))

#### 0.1.8

##### Patch Changes

- [`9120c46`](https://github.com/backstage/backstage/commit/9120c46): Updated dependency `glob` to `^14.0.0`.

### `@backstage/cli-node` (0.3.5 → [0.3.6](../../changelogs/@backstage/cli-node.md#036))

#### 0.3.6

##### Patch Changes

- [`4294614`](https://github.com/backstage/backstage/commit/4294614): Commands run through `runCli` now exit with the exit code they set, instead of always exiting with `0` on completion. For example, `catalog validate` and `template dry-run` now exit with a non-zero code when the input is invalid.
- [`a96b99c`](https://github.com/backstage/backstage/commit/a96b99c): The Node.js module transform now uses the synchronous `module.registerHooks()` API when it is available, which avoids the `module.register()` deprecation warning printed by Node.js 26. On older Node.js versions it continues to use `module.register()`.
- [`8069934`](https://github.com/backstage/backstage/commit/8069934): Fixed the Node.js module transform loading ES module JavaScript files from packages without a `"type"` field as CommonJS, which broke named imports such as `import { DefaultGithubCredentialsProvider } from '@backstage/integration'` during local development. The format of these files is now detected by Node.js, while TypeScript files in such packages are still treated as CommonJS.
- [`27b7aaa`](https://github.com/backstage/backstage/commit/27b7aaa): Support loading remote frontend features whose default export is a `FrontendFeatureLoader` and include that feature type in generated package metadata.
- [`04a54e2`](https://github.com/backstage/backstage/commit/04a54e2): Switched the compilation target to ES2024, which all supported Node.js versions fully support. Package builds, app bundles, and the backend development server now compile code for ES2024, and the TypeScript `target` and `lib` options in `@backstage/cli/config/tsconfig.json` are set to `ES2024`. This requires TypeScript 5.9 or later, which is now the oldest supported version according to the [versioning policy](https://backstage.io/docs/overview/versioning-policy#typescript-releases).

  The `lib` change allows code to use ES2024 built-in APIs such as `Object.groupBy` and `Promise.withResolvers`. Backstage doesn't include polyfills, so frontend code that uses these APIs needs at least Chrome or Edge 119, Firefox 121, or Safari 17.4.

### `@backstage/core-components` (0.18.15 → [0.18.16](../../changelogs/@backstage/core-components.md#01816))

#### 0.18.16

##### Patch Changes

- [`1c75912`](https://github.com/backstage/backstage/commit/1c75912): Deprecated components with Backstage UI replacements or compositions: `Avatar`, `Link`, `LinkButton`, `Select`, `Content`, `BottomLink`, `HeaderActionMenu`, `HeaderLabel`, `HeaderTabs`, `ItemCardGrid`, `ItemCardHeader`, `TabbedCard`, `CardTab`, `SubvalueCell`, `CreateButton`, `ContentHeader`, `FavoriteToggle`, `FavoriteToggleIcon`, `HeaderIconLinkRow`, `IconLinkVertical`, and `OverflowTooltip`, along with their associated public types.

  Use the replacements from `@backstage/ui` described in each component's deprecation notice. These migrations require adapting props and composition, including external-link presentation, selection callbacks, document titles, and error boundaries where applicable. Existing exports and runtime behavior are unchanged.

- [`cac9654`](https://github.com/backstage/backstage/commit/cac9654): `MarkdownContent` now loads `react-markdown` and its `remark` and `rehype` plugins the first time it renders, instead of with the app. This keeps them out of the app's startup bundle. Markdown appears once the renderer has loaded, so tests that look for rendered markdown right after a synchronous `render` may need to use `findBy*` queries instead.
- [`7890ec2`](https://github.com/backstage/backstage/commit/7890ec2): Deprecated legacy page shells (`Page`, `PageWithHeader`, `Header`), routed tabs (`TabbedLayout`, `TabbedLayout.Route`, `RoutedTabs`), `AlertDisplay`, `AppIcon`, the named icon wrappers, and their associated public types for new frontend development. Existing exports and behavior remain available, including in migrated plugins.

  Use page and sub-page extensions and `PageLayout` from `@backstage/frontend-plugin-api` for framework-managed pages, or compose `@backstage/ui` headers and tabs with explicit routing for standalone layouts. Legacy themes, arbitrary header content, document titles, and focus behavior need deliberate migration. Rely on the new frontend app's existing alert/toast display. For app-customizable icons, use `useApi(coreApis.icons).icon(key)` from `@backstage/frontend-plugin-api` and render the returned element, handling missing icons as needed.

### `@backstage/create-app` (0.9.3 → [0.9.4](../../changelogs/@backstage/create-app.md#094))

#### 0.9.4

##### Patch Changes

- [`bdbbe91`](https://github.com/backstage/backstage/commit/bdbbe91): Bumped create-app version.
- [`04a54e2`](https://github.com/backstage/backstage/commit/04a54e2): Bumped TypeScript in the app templates to `~5.9.0`.
- [`b8777d1`](https://github.com/backstage/backstage/commit/b8777d1): New apps now support Node.js 24 and 26, in line with the [versioning policy](https://backstage.io/docs/overview/versioning-policy#nodejs-releases). The `engines` field in the app template is set to `^24.15.0 || ^26.13.0`, and creating a new app now requires Node.js 24 (24.15.0 or later) or Node.js 26 (26.13.0 or later). 24.15.0 is the lowest version that all dependencies support, and 26.13.0 is the first Node.js 26 LTS release.

  To update an existing app, set `engines.node` in your root `package.json` to `^24.15.0 || ^26.13.0`, and update the Node.js version used in your CI workflows and `Dockerfile` if needed.

  If your `yarn.lock` resolves `avsc` to a version older than 5.7.8, run `yarn up -R avsc`. Those versions crash on load on Node.js 25 and later, which breaks Jest tests that import the AsyncAPI widget from `@backstage/plugin-api-docs`. If it resolves `node-gyp` to 12.3.0, run `yarn up -R node-gyp`, since that version can't download Node.js headers through a proxy on Node.js 26.

- [`77f9227`](https://github.com/backstage/backstage/commit/77f9227): New apps now declare support for light and dark color schemes and apply the stored theme choice before the app loads. The browser's default page background, scrollbars and form controls then match the theme during loading, instead of always starting out light. A new `public/theme.js` applies a stored light or dark choice, and the OS preference is used otherwise.

  To add this to an existing app, copy `packages/app/public/theme.js` from a newly created app, and add `<meta name="color-scheme" content="light dark" />` and `<script src="<%= publicPath %>/theme.js"></script>` to the `<head>` of `packages/app/public/index.html`.

### `@backstage/eslint-plugin` (0.3.3 → [0.3.4](../../changelogs/@backstage/eslint-plugin.md#034))

#### 0.3.4

##### Patch Changes

- [`1892d2f`](https://github.com/backstage/backstage/commit/1892d2f): chore(deps): bump `minimatch` from 10.2.6 to 11.0.1
- [`245d9e3`](https://github.com/backstage/backstage/commit/245d9e3): Internal changes for TypeScript 7 compatibility. The rules work the same as before.

### `@backstage/frontend-defaults` (0.5.7 → [0.5.8](../../changelogs/@backstage/frontend-defaults.md#058))

#### 0.5.8

##### Patch Changes

- [`d514e4d`](https://github.com/backstage/backstage/commit/d514e4d): Updated app options to use the `ExtensionFactoryMiddleware` type from `@backstage/frontend-app-api` instead of the deprecated export from `@backstage/frontend-plugin-api`. Middleware behavior is unchanged.
- [`f747f16`](https://github.com/backstage/backstage/commit/f747f16): Removed the outdated warning that the frontend system is in alpha. This package remains on 0.x.
- [`4bbc7a9`](https://github.com/backstage/backstage/commit/4bbc7a9): Removed explicit support for React 17: the peer dependency range for `react`, `react-dom` and `@types/react` is now `^18.0.0`. React 17 is no longer tested or guaranteed to work, although it may continue to work in some cases. See the [migration guide](https://backstage.io/docs/frontend-system/architecture/migrations#157).
- [`2aa14e3`](https://github.com/backstage/backstage/commit/2aa14e3): Apps now release their browser history listener when the React root is removed or a hot refresh replaces the app within the existing root. See the [1.57 migration notes](https://backstage.io/docs/frontend-system/architecture/migrations#157) for background on app-owned history.

### `@backstage/frontend-dynamic-feature-loader` (0.1.17 → [0.1.18](../../changelogs/@backstage/frontend-dynamic-feature-loader.md#0118))

#### 0.1.18

##### Patch Changes

- [`27b7aaa`](https://github.com/backstage/backstage/commit/27b7aaa): Support loading remote frontend features whose default export is a `FrontendFeatureLoader` and include that feature type in generated package metadata.
- [`4bbc7a9`](https://github.com/backstage/backstage/commit/4bbc7a9): Removed explicit support for React 17: the peer dependency range for `react`, `react-dom` and `@types/react` is now `^18.0.0`. React 17 is no longer tested or guaranteed to work, although it may continue to work in some cases. See the [migration guide](https://backstage.io/docs/frontend-system/architecture/migrations#157).
- [`ed8f1ef`](https://github.com/backstage/backstage/commit/ed8f1ef): Updated dependency `@module-federation/sdk` to `~2.9.0`.
  Updated dependency `@module-federation/enhanced` to `~2.9.0`.
  Updated dependency `@module-federation/runtime` to `~2.9.0`.
  Updated dependency `@module-federation/runtime-core` to `~2.9.0`.

### `@backstage/integration-aws-node` (0.2.3 → [0.2.4](../../changelogs/@backstage/integration-aws-node.md#024))

#### 0.2.4

##### Patch Changes

- [`f81ca4e`](https://github.com/backstage/backstage/commit/f81ca4e): Credential providers returned by `DefaultAwsCredentialsManager` now include a `roleArn` field with the ARN of the IAM role the credentials are for, when the account is configured to assume a role.

### `@backstage/module-federation-common` (0.1.6 → [0.1.7](../../changelogs/@backstage/module-federation-common.md#017))

#### 0.1.7

##### Patch Changes

- [`4bbc7a9`](https://github.com/backstage/backstage/commit/4bbc7a9): Removed explicit support for React 17: the peer dependency range for `react`, `react-dom` and `@types/react` is now `^18.0.0`. React 17 is no longer tested or guaranteed to work, although it may continue to work in some cases. See the [migration guide](https://backstage.io/docs/frontend-system/architecture/migrations#157).
- [`ed8f1ef`](https://github.com/backstage/backstage/commit/ed8f1ef): Updated dependency `@module-federation/sdk` to `~2.9.0`.
  Updated dependency `@module-federation/enhanced` to `~2.9.0`.
  Updated dependency `@module-federation/runtime` to `~2.9.0`.
  Updated dependency `@module-federation/runtime-core` to `~2.9.0`.

### `@backstage/plugin-api-docs` (0.14.8 → [0.14.7](../../changelogs/@backstage/plugin-api-docs.md#0147))

_No changelog entries found._

### `@backstage/plugin-api-docs-module-protoc-gen-doc` (0.1.11 → [0.1.12](../../changelogs/@backstage/plugin-api-docs-module-protoc-gen-doc.md#0112))

#### 0.1.12

##### Patch Changes

- [`4bbc7a9`](https://github.com/backstage/backstage/commit/4bbc7a9): Removed explicit support for React 17: the peer dependency range for `react`, `react-dom` and `@types/react` is now `^18.0.0`. React 17 is no longer tested or guaranteed to work, although it may continue to work in some cases. See the [migration guide](https://backstage.io/docs/frontend-system/architecture/migrations#157).

### `@backstage/plugin-app-backend` (0.5.19 → [0.5.20](../../changelogs/@backstage/plugin-app-backend.md#0520))

#### 0.5.20

##### Patch Changes

- [`11f4455`](https://github.com/backstage/backstage/commit/11f4455): Documented that if your package manager doesn't hoist workspace packages, for example pnpm with `hoistWorkspacePackages: false`, you need to add the app package to the `dependencies` of the root `package.json`.
- [`6a0de59`](https://github.com/backstage/backstage/commit/6a0de59): Backend plugins now locate their database migrations relative to their own package directory, without requiring the package to be resolvable by name.
- [`2fea3e2`](https://github.com/backstage/backstage/commit/2fea3e2): Reduced startup database traffic and memory usage when checking for previously cached static assets.

### `@backstage/plugin-app-visualizer` (0.2.9 → [0.2.10](../../changelogs/@backstage/plugin-app-visualizer.md#0210))

#### 0.2.10

##### Patch Changes

- [`4bbc7a9`](https://github.com/backstage/backstage/commit/4bbc7a9): Removed explicit support for React 17: the peer dependency range for `react`, `react-dom` and `@types/react` is now `^18.0.0`. React 17 is no longer tested or guaranteed to work, although it may continue to work in some cases. See the [migration guide](https://backstage.io/docs/frontend-system/architecture/migrations#157).

### `@backstage/plugin-auth` (0.1.13 → [0.1.14](../../changelogs/@backstage/plugin-auth.md#0114))

#### 0.1.14

##### Patch Changes

- [`4bbc7a9`](https://github.com/backstage/backstage/commit/4bbc7a9): Removed explicit support for React 17: the peer dependency range for `react`, `react-dom` and `@types/react` is now `^18.0.0`. React 17 is no longer tested or guaranteed to work, although it may continue to work in some cases. See the [migration guide](https://backstage.io/docs/frontend-system/architecture/migrations#157).

### `@backstage/plugin-auth-backend-module-auth0-provider` (0.4.6 → [0.4.7](../../changelogs/@backstage/plugin-auth-backend-module-auth0-provider.md#047))

#### 0.4.7

##### Patch Changes

- [`918ca98`](https://github.com/backstage/backstage/commit/918ca98): Updated dependency `jose` to `^6.1.0`. Existing ES256 token issuance and verification are unchanged. ML-DSA algorithms can be used when the runtime supports them.

### `@backstage/plugin-auth-backend-module-aws-alb-provider` (0.4.21 → [0.4.22](../../changelogs/@backstage/plugin-auth-backend-module-aws-alb-provider.md#0422))

#### 0.4.22

##### Patch Changes

- [`918ca98`](https://github.com/backstage/backstage/commit/918ca98): Updated dependency `jose` to `^6.1.0`. Existing ES256 token issuance and verification are unchanged. ML-DSA algorithms can be used when the runtime supports them.

### `@backstage/plugin-auth-backend-module-azure-easyauth-provider` (0.2.25 → [0.2.26](../../changelogs/@backstage/plugin-auth-backend-module-azure-easyauth-provider.md#0226))

#### 0.2.26

##### Patch Changes

- [`918ca98`](https://github.com/backstage/backstage/commit/918ca98): Updated dependency `jose` to `^6.1.0`. Existing ES256 token issuance and verification are unchanged. ML-DSA algorithms can be used when the runtime supports them.

### `@backstage/plugin-auth-backend-module-cloudflare-access-provider` (0.5.1 → [0.5.2](../../changelogs/@backstage/plugin-auth-backend-module-cloudflare-access-provider.md#052))

#### 0.5.2

##### Patch Changes

- [`918ca98`](https://github.com/backstage/backstage/commit/918ca98): Updated dependency `jose` to `^6.1.0`. Existing ES256 token issuance and verification are unchanged. ML-DSA algorithms can be used when the runtime supports them.

### `@backstage/plugin-auth-backend-module-microsoft-provider` (0.3.20 → [0.3.21](../../changelogs/@backstage/plugin-auth-backend-module-microsoft-provider.md#0321))

#### 0.3.21

##### Patch Changes

- [`918ca98`](https://github.com/backstage/backstage/commit/918ca98): Updated dependency `jose` to `^6.1.0`. Existing ES256 token issuance and verification are unchanged. ML-DSA algorithms can be used when the runtime supports them.

### `@backstage/plugin-auth-backend-module-oauth2-proxy-provider` (0.3.4 → [0.3.5](../../changelogs/@backstage/plugin-auth-backend-module-oauth2-proxy-provider.md#035))

#### 0.3.5

##### Patch Changes

- [`918ca98`](https://github.com/backstage/backstage/commit/918ca98): Updated dependency `jose` to `^6.1.0`. Existing ES256 token issuance and verification are unchanged. ML-DSA algorithms can be used when the runtime supports them.

### `@backstage/plugin-auth-backend-module-oidc-provider` (0.4.22 → [0.4.23](../../changelogs/@backstage/plugin-auth-backend-module-oidc-provider.md#0423))

#### 0.4.23

##### Patch Changes

- [`918ca98`](https://github.com/backstage/backstage/commit/918ca98): Updated dependency `jose` to `^6.1.0`. Existing ES256 token issuance and verification are unchanged. ML-DSA algorithms can be used when the runtime supports them.

### `@backstage/plugin-auth-backend-module-pinniped-provider` (0.3.19 → [0.3.20](../../changelogs/@backstage/plugin-auth-backend-module-pinniped-provider.md#0320))

#### 0.3.20

##### Patch Changes

- [`918ca98`](https://github.com/backstage/backstage/commit/918ca98): Updated dependency `jose` to `^6.1.0`. Existing ES256 token issuance and verification are unchanged. ML-DSA algorithms can be used when the runtime supports them.

### `@backstage/plugin-auth-backend-module-vmware-cloud-provider` (0.5.19 → [0.5.20](../../changelogs/@backstage/plugin-auth-backend-module-vmware-cloud-provider.md#0520))

#### 0.5.20

##### Patch Changes

- [`918ca98`](https://github.com/backstage/backstage/commit/918ca98): Updated dependency `jose` to `^6.1.0`. Existing ES256 token issuance and verification are unchanged. ML-DSA algorithms can be used when the runtime supports them.

### `@backstage/plugin-auth-node` (0.7.7 → [0.7.8](../../changelogs/@backstage/plugin-auth-node.md#078))

#### 0.7.8

##### Patch Changes

- [`918ca98`](https://github.com/backstage/backstage/commit/918ca98): Updated dependency `jose` to `^6.1.0`. Existing ES256 token issuance and verification are unchanged. ML-DSA algorithms can be used when the runtime supports them.

### `@backstage/plugin-auth-react` (0.1.32 → [0.1.33](../../changelogs/@backstage/plugin-auth-react.md#0133))

#### 0.1.33

##### Patch Changes

- [`4bbc7a9`](https://github.com/backstage/backstage/commit/4bbc7a9): Removed explicit support for React 17: the peer dependency range for `react`, `react-dom` and `@types/react` is now `^18.0.0`. React 17 is no longer tested or guaranteed to work, although it may continue to work in some cases. See the [migration guide](https://backstage.io/docs/frontend-system/architecture/migrations#157).

### `@backstage/plugin-bitbucket-cloud-common` (0.3.14 → [0.3.15](../../changelogs/@backstage/plugin-bitbucket-cloud-common.md#0315))

#### 0.3.15

##### Patch Changes

- [`ed1cb3e`](https://github.com/backstage/backstage/commit/ed1cb3e): Added `BitbucketCloudClient.searchWorkspaceCode` and the `CodeSearch` types for the workspace code search API of Bitbucket Cloud (`POST /2.0/workspaces/{workspace}/codesearch`). This API needs a credential that identifies a user, with the scopes `read:repository:bitbucket` and `read:workspace:bitbucket`. Bitbucket Cloud rejects app passwords, legacy OAuth consumers, and API keys for this API with `BitbucketCloudApiError` status `403`.

  Added `BitbucketCloudClient.repositorySourceFileExists`, `BitbucketCloudClient.listRepositorySource`, and `BitbucketCloudApiError` so callers can fall back to the Bitbucket Cloud source API when workspace code search is unavailable.

  Deprecated `BitbucketCloudClient.searchCode`, because Bitbucket Cloud removes the endpoint that it uses on 2026-11-15.

### `@backstage/plugin-catalog-backend-module-ai-model` (0.1.5 → [0.1.6](../../changelogs/@backstage/plugin-catalog-backend-module-ai-model.md#016))

#### 0.1.6

##### Patch Changes

- [`f74cd6a`](https://github.com/backstage/backstage/commit/f74cd6a): Document how to declare relation pairs for custom kinds when using the catalog model layer.

### `@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.5.16 → [0.5.17](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-cloud.md#0517))

#### 0.5.17

##### Patch Changes

- [`ed1cb3e`](https://github.com/backstage/backstage/commit/ed1cb3e): The Bitbucket Cloud entity provider now finds catalog files with the workspace code search API of Bitbucket Cloud, because Bitbucket Cloud removes the old code search API on 2026-11-15. The provider finds the same locations for the same configuration.

  The new API needs a credential that identifies a user, for example an Atlassian account email as `username` with an API `token`. The token needs the scopes `read:repository:bitbucket` and `read:workspace:bitbucket`. The old API did not need `read:workspace:bitbucket`. Bitbucket Cloud rejects app passwords, legacy OAuth consumers, and API keys for this API. An API token without `read:workspace:bitbucket` is also rejected with `403`. When that happens, or when code search is not enabled, the provider checks catalog files with the source API instead. Adding `read:workspace:bitbucket` to the API token restores workspace code search.

### `@backstage/plugin-catalog-backend-module-github` (0.14.1 → [0.14.2](../../changelogs/@backstage/plugin-catalog-backend-module-github.md#0142))

#### 0.14.2

##### Patch Changes

- [`1892d2f`](https://github.com/backstage/backstage/commit/1892d2f): chore(deps): bump `minimatch` from 10.2.6 to 11.0.1
- [`d926160`](https://github.com/backstage/backstage/commit/d926160): Added `fetchEmailForGithubApps` config option to the GitHub org entity providers (`GithubOrgEntityProvider` and `GithubMultiOrgEntityProvider`). When enabled, the provider requests the public email field from the GitHub GraphQL API even when using a GitHub App for authentication. By default, the public email is only requested with personal access tokens due to a historical GitHub API limitation that may no longer apply to all instances. If the GitHub instance does not support this, the user sync will fail — only enable it after confirming your GitHub App can access user emails.

### `@backstage/plugin-catalog-backend-module-github-org` (0.3.27 → [0.3.28](../../changelogs/@backstage/plugin-catalog-backend-module-github-org.md#0328))

#### 0.3.28

##### Patch Changes

- [`d926160`](https://github.com/backstage/backstage/commit/d926160): Added `fetchEmailForGithubApps` config option to the GitHub org entity providers (`GithubOrgEntityProvider` and `GithubMultiOrgEntityProvider`). When enabled, the provider requests the public email field from the GitHub GraphQL API even when using a GitHub App for authentication. By default, the public email is only requested with personal access tokens due to a historical GitHub API limitation that may no longer apply to all instances. If the GitHub instance does not support this, the user sync will fail — only enable it after confirming your GitHub App can access user emails.

### `@backstage/plugin-catalog-backend-module-gitlab` (0.8.10 → [0.8.11](../../changelogs/@backstage/plugin-catalog-backend-module-gitlab.md#0811))

#### 0.8.11

##### Patch Changes

- [`d586214`](https://github.com/backstage/backstage/commit/d586214): GitLab discovery entity provider: catalog locations and refresh keys resulting from push events are now derived from the project record fetched from the GitLab API, instead of fields of the event payload. Committed file paths that do not resolve within the project itself are ignored.
- [`ca14116`](https://github.com/backstage/backstage/commit/ca14116): Moved `@gitbeaker/rest` to dev dependencies, since it is only used for types.

### `@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.9.0 → [0.9.1](../../changelogs/@backstage/plugin-catalog-backend-module-incremental-ingestion.md#091))

#### 0.9.1

##### Patch Changes

- [`6a0de59`](https://github.com/backstage/backstage/commit/6a0de59): Backend plugins now locate their database migrations relative to their own package directory, without requiring the package to be resolvable by name.
- [`7baaad7`](https://github.com/backstage/backstage/commit/7baaad7): Fixed incremental ingestion getting stuck when a provider emits the same entity more than once in a single page or event. Since the previous release, this made every attempt to ingest that page fail on PostgreSQL with `ON CONFLICT DO UPDATE command cannot affect row a second time`, so the provider never got past it. Now only the last copy of each entity is kept. A warning names the provider and some of the repeated entity refs, at most once every 10 minutes per provider.

  Providers should still emit each entity at most once per page. If the copies differ and arrive in a different order on each run, the stored entity can change on every run.

### `@backstage/plugin-catalog-backend-module-unprocessed` (0.6.17 → [0.6.18](../../changelogs/@backstage/plugin-catalog-backend-module-unprocessed.md#0618))

#### 0.6.18

##### Patch Changes

- [`af39b90`](https://github.com/backstage/backstage/commit/af39b90): Fixed pending entities being returned without their entity ID and entity ref.

### `@backstage/plugin-catalog-graph` (0.6.9 → [0.6.10](../../changelogs/@backstage/plugin-catalog-graph.md#0610))

#### 0.6.10

##### Patch Changes

- [`4bbc7a9`](https://github.com/backstage/backstage/commit/4bbc7a9): Removed explicit support for React 17: the peer dependency range for `react`, `react-dom` and `@types/react` is now `^18.0.0`. React 17 is no longer tested or guaranteed to work, although it may continue to work in some cases. See the [migration guide](https://backstage.io/docs/frontend-system/architecture/migrations#157).

### `@backstage/plugin-catalog-import` (0.13.19 → [0.13.20](../../changelogs/@backstage/plugin-catalog-import.md#01320))

#### 0.13.20

##### Patch Changes

- [`63d6533`](https://github.com/backstage/backstage/commit/63d6533): The pull request preview card in the import flow now uses Backstage UI components.
- [`4bbc7a9`](https://github.com/backstage/backstage/commit/4bbc7a9): Removed explicit support for React 17: the peer dependency range for `react`, `react-dom` and `@types/react` is now `^18.0.0`. React 17 is no longer tested or guaranteed to work, although it may continue to work in some cases. See the [migration guide](https://backstage.io/docs/frontend-system/architecture/migrations#157).

### `@backstage/plugin-catalog-unprocessed-entities` (0.2.36 → [0.2.37](../../changelogs/@backstage/plugin-catalog-unprocessed-entities.md#0237))

#### 0.2.37

##### Patch Changes

- [`4bbc7a9`](https://github.com/backstage/backstage/commit/4bbc7a9): Removed explicit support for React 17: the peer dependency range for `react`, `react-dom` and `@types/react` is now `^18.0.0`. React 17 is no longer tested or guaranteed to work, although it may continue to work in some cases. See the [migration guide](https://backstage.io/docs/frontend-system/architecture/migrations#157).

### `@backstage/plugin-config-schema` (0.1.85 → [0.1.86](../../changelogs/@backstage/plugin-config-schema.md#0186))

#### 0.1.86

##### Patch Changes

- [`4bbc7a9`](https://github.com/backstage/backstage/commit/4bbc7a9): Removed explicit support for React 17: the peer dependency range for `react`, `react-dom` and `@types/react` is now `^18.0.0`. React 17 is no longer tested or guaranteed to work, although it may continue to work in some cases. See the [migration guide](https://backstage.io/docs/frontend-system/architecture/migrations#157).

### `@backstage/plugin-devtools` (0.1.44 → [0.1.45](../../changelogs/@backstage/plugin-devtools.md#0145))

#### 0.1.45

##### Patch Changes

- [`ca1165d`](https://github.com/backstage/backstage/commit/ca1165d): Fixed an issue in `ScheduledTasksContent` where actual backend error messages (such as network or authorization errors) were discarded in favor of a hardcoded "No scheduled tasks found" message, and ensured the loading indicator is displayed while switching plugins.
- [`4bbc7a9`](https://github.com/backstage/backstage/commit/4bbc7a9): Removed explicit support for React 17: the peer dependency range for `react`, `react-dom` and `@types/react` is now `^18.0.0`. React 17 is no longer tested or guaranteed to work, although it may continue to work in some cases. See the [migration guide](https://backstage.io/docs/frontend-system/architecture/migrations#157).

### `@backstage/plugin-devtools-react` (0.2.7 → [0.2.8](../../changelogs/@backstage/plugin-devtools-react.md#028))

#### 0.2.8

##### Patch Changes

- [`4bbc7a9`](https://github.com/backstage/backstage/commit/4bbc7a9): Removed explicit support for React 17: the peer dependency range for `react`, `react-dom` and `@types/react` is now `^18.0.0`. React 17 is no longer tested or guaranteed to work, although it may continue to work in some cases. See the [migration guide](https://backstage.io/docs/frontend-system/architecture/migrations#157).

### `@backstage/plugin-events-backend` (0.6.7 → [0.6.8](../../changelogs/@backstage/plugin-events-backend.md#068))

#### 0.6.8

##### Patch Changes

- [`a1ca033`](https://github.com/backstage/backstage/commit/a1ca033): Fixed the database event bus listener connection inheriting the trace context of the request that first opened it. Its keepalive queries are now recorded as separate root spans instead of being attached to that request's trace for as long as the connection stays open.
- [`6a0de59`](https://github.com/backstage/backstage/commit/6a0de59): Backend plugins now locate their database migrations relative to their own package directory, without requiring the package to be resolvable by name.
- [`a70aaea`](https://github.com/backstage/backstage/commit/a70aaea): The requests passed to request validators now include the parsed query string. The request rejection details now also
  support an optional `contentType` option for the provided payload, defaulting to `application/json` but also allowing
  `text/plain`.

### `@backstage/plugin-events-backend-module-google-pubsub` (0.2.8 → [0.2.9](../../changelogs/@backstage/plugin-events-backend-module-google-pubsub.md#029))

#### 0.2.9

##### Patch Changes

- [`b03427c`](https://github.com/backstage/backstage/commit/b03427c): Updated dependency `@google-cloud/pubsub` to `^6.3.2`. The new version requires Node.js 22 or later, which matches the Node.js versions that Backstage supports.

### `@backstage/plugin-home` (0.9.11 → [0.9.12](../../changelogs/@backstage/plugin-home.md#0912))

#### 0.9.12

##### Patch Changes

- [`0f93c60`](https://github.com/backstage/backstage/commit/0f93c60): The World Clock home page widget now uses Backstage UI components and styles instead of Material UI.
- [`4bbc7a9`](https://github.com/backstage/backstage/commit/4bbc7a9): Removed explicit support for React 17: the peer dependency range for `react`, `react-dom` and `@types/react` is now `^18.0.0`. React 17 is no longer tested or guaranteed to work, although it may continue to work in some cases. See the [migration guide](https://backstage.io/docs/frontend-system/architecture/migrations#157).

### `@backstage/plugin-home-react` (0.1.43 → [0.1.44](../../changelogs/@backstage/plugin-home-react.md#0144))

#### 0.1.44

##### Patch Changes

- [`4bbc7a9`](https://github.com/backstage/backstage/commit/4bbc7a9): Removed explicit support for React 17: the peer dependency range for `react`, `react-dom` and `@types/react` is now `^18.0.0`. React 17 is no longer tested or guaranteed to work, although it may continue to work in some cases. See the [migration guide](https://backstage.io/docs/frontend-system/architecture/migrations#157).

### `@backstage/plugin-kubernetes` (0.12.24 → [0.12.25](../../changelogs/@backstage/plugin-kubernetes.md#01225))

#### 0.12.25

##### Patch Changes

- [`4bbc7a9`](https://github.com/backstage/backstage/commit/4bbc7a9): Removed explicit support for React 17: the peer dependency range for `react`, `react-dom` and `@types/react` is now `^18.0.0`. React 17 is no longer tested or guaranteed to work, although it may continue to work in some cases. See the [migration guide](https://backstage.io/docs/frontend-system/architecture/migrations#157).

### `@backstage/plugin-kubernetes-backend` (0.21.14 → [0.21.13](../../changelogs/@backstage/plugin-kubernetes-backend.md#02113))

_No changelog entries found._

### `@backstage/plugin-kubernetes-common` (0.9.14 → [0.9.15](../../changelogs/@backstage/plugin-kubernetes-common.md#0915))

#### 0.9.15

##### Patch Changes

- [`68abde4`](https://github.com/backstage/backstage/commit/68abde4): Allow AWS Kubernetes clusters to select credentials from a configured AWS account without assuming another role. Set `kubernetes.io/aws-account-id` in the cluster's auth metadata to use that account's credentials directly, including credentials obtained through web identity federation.
- [`ca14116`](https://github.com/backstage/backstage/commit/ca14116): Moved `kubernetes-models` and `@kubernetes-models/apimachinery` to dev dependencies, since they are only used for types. Backends no longer install `kubernetes-models` through `@backstage/plugin-kubernetes-common`.

### `@backstage/plugin-kubernetes-react` (0.6.1 → [0.6.2](../../changelogs/@backstage/plugin-kubernetes-react.md#062))

#### 0.6.2

##### Patch Changes

- [`4bbc7a9`](https://github.com/backstage/backstage/commit/4bbc7a9): Removed explicit support for React 17: the peer dependency range for `react`, `react-dom` and `@types/react` is now `^18.0.0`. React 17 is no longer tested or guaranteed to work, although it may continue to work in some cases. See the [migration guide](https://backstage.io/docs/frontend-system/architecture/migrations#157).

### `@backstage/plugin-mcp-actions-backend` (0.2.3 → [0.2.4](../../changelogs/@backstage/plugin-mcp-actions-backend.md#024))

#### 0.2.4

##### Patch Changes

- [`1892d2f`](https://github.com/backstage/backstage/commit/1892d2f): chore(deps): bump `minimatch` from 10.2.6 to 11.0.1
- [`9e22c4b`](https://github.com/backstage/backstage/commit/9e22c4b): OAuth discovery metadata is now also served when pre-registered clients are configured with `auth.staticClients`.

### `@backstage/plugin-mui-to-bui` (0.2.12 → [0.2.13](../../changelogs/@backstage/plugin-mui-to-bui.md#0213))

#### 0.2.13

##### Patch Changes

- [`4bbc7a9`](https://github.com/backstage/backstage/commit/4bbc7a9): Removed explicit support for React 17: the peer dependency range for `react`, `react-dom` and `@types/react` is now `^18.0.0`. React 17 is no longer tested or guaranteed to work, although it may continue to work in some cases. See the [migration guide](https://backstage.io/docs/frontend-system/architecture/migrations#157).

### `@backstage/plugin-notifications` (0.6.1 → [0.6.2](../../changelogs/@backstage/plugin-notifications.md#062))

#### 0.6.2

##### Patch Changes

- [`4bbc7a9`](https://github.com/backstage/backstage/commit/4bbc7a9): Removed explicit support for React 17: the peer dependency range for `react`, `react-dom` and `@types/react` is now `^18.0.0`. React 17 is no longer tested or guaranteed to work, although it may continue to work in some cases. See the [migration guide](https://backstage.io/docs/frontend-system/architecture/migrations#157).
- [`555d6ff`](https://github.com/backstage/backstage/commit/555d6ff): Updated custom notification icons to use the element-based icons API. Missing icons still fall back to the notification severity icon.

### `@backstage/plugin-notifications-backend` (0.6.10 → [0.6.11](../../changelogs/@backstage/plugin-notifications-backend.md#0611))

#### 0.6.11

##### Patch Changes

- [`c0ea056`](https://github.com/backstage/backstage/commit/c0ea056): Fixed broadcast notifications losing their saved status when marked as read or unread, and losing their read status when saved or unsaved.
- [`6a0de59`](https://github.com/backstage/backstage/commit/6a0de59): Backend plugins now locate their database migrations relative to their own package directory, without requiring the package to be resolvable by name.

### `@backstage/plugin-notifications-backend-module-slack` (0.4.7 → [0.4.8](../../changelogs/@backstage/plugin-notifications-backend-module-slack.md#048))

#### 0.4.8

##### Patch Changes

- [`6a0de59`](https://github.com/backstage/backstage/commit/6a0de59): Backend plugins now locate their database migrations relative to their own package directory, without requiring the package to be resolvable by name.

### `@backstage/plugin-org` (0.8.0 → [0.8.1](../../changelogs/@backstage/plugin-org.md#081))

#### 0.8.1

##### Patch Changes

- [`4bbc7a9`](https://github.com/backstage/backstage/commit/4bbc7a9): Removed explicit support for React 17: the peer dependency range for `react`, `react-dom` and `@types/react` is now `^18.0.0`. React 17 is no longer tested or guaranteed to work, although it may continue to work in some cases. See the [migration guide](https://backstage.io/docs/frontend-system/architecture/migrations#157).

### `@backstage/plugin-org-react` (0.1.55 → [0.1.56](../../changelogs/@backstage/plugin-org-react.md#0156))

#### 0.1.56

##### Patch Changes

- [`4bbc7a9`](https://github.com/backstage/backstage/commit/4bbc7a9): Removed explicit support for React 17: the peer dependency range for `react`, `react-dom` and `@types/react` is now `^18.0.0`. React 17 is no longer tested or guaranteed to work, although it may continue to work in some cases. See the [migration guide](https://backstage.io/docs/frontend-system/architecture/migrations#157).

### `@backstage/plugin-permission-react` (0.5.6 → [0.5.7](../../changelogs/@backstage/plugin-permission-react.md#057))

#### 0.5.7

##### Patch Changes

- [`4bbc7a9`](https://github.com/backstage/backstage/commit/4bbc7a9): Removed explicit support for React 17: the peer dependency range for `react`, `react-dom` and `@types/react` is now `^18.0.0`. React 17 is no longer tested or guaranteed to work, although it may continue to work in some cases. See the [migration guide](https://backstage.io/docs/frontend-system/architecture/migrations#157).

### `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.3.27 → [0.3.28](../../changelogs/@backstage/plugin-scaffolder-backend-module-confluence-to-markdown.md#0328))

#### 0.3.28

##### Patch Changes

- [`076f478`](https://github.com/backstage/backstage/commit/076f478): Fixed the Confluence to Markdown action leaking a file handle for every attachment it downloaded. A download that failed partway through also left the scaffolder step hanging. It now fails with the underlying error.

### `@backstage/plugin-scaffolder-backend-module-github` (0.10.3 → [0.10.2](../../changelogs/@backstage/plugin-scaffolder-backend-module-github.md#0102))

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-gitlab` (0.12.3 → [0.12.2](../../changelogs/@backstage/plugin-scaffolder-backend-module-gitlab.md#0122))

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-workspace-database` (0.1.1 → [0.1.2](../../changelogs/@backstage/plugin-scaffolder-backend-module-workspace-database.md#012))

#### 0.1.2

##### Patch Changes

- [`6a0de59`](https://github.com/backstage/backstage/commit/6a0de59): Backend plugins now locate their database migrations relative to their own package directory, without requiring the package to be resolvable by name.

### `@backstage/plugin-scaffolder-node-test-utils` (0.3.16 → [0.3.17](../../changelogs/@backstage/plugin-scaffolder-node-test-utils.md#0317))

#### 0.3.17

##### Patch Changes

- [`4bbc7a9`](https://github.com/backstage/backstage/commit/4bbc7a9): Removed explicit support for React 17: the peer dependency range for `react`, `react-dom` and `@types/react` is now `^18.0.0`. React 17 is no longer tested or guaranteed to work, although it may continue to work in some cases. See the [migration guide](https://backstage.io/docs/frontend-system/architecture/migrations#157).

### `@backstage/plugin-search-backend-module-pg` (0.5.60 → [0.5.61](../../changelogs/@backstage/plugin-search-backend-module-pg.md#0561))

#### 0.5.61

##### Patch Changes

- [`6a0de59`](https://github.com/backstage/backstage/commit/6a0de59): Backend plugins now locate their database migrations relative to their own package directory, without requiring the package to be resolvable by name.
- [`39cda0c`](https://github.com/backstage/backstage/commit/39cda0c): Avoid recomputing full-text search `tsvector` data for unchanged documents during indexing.

### `@backstage/plugin-signals-backend` (0.3.20 → [0.3.21](../../changelogs/@backstage/plugin-signals-backend.md#0321))

#### 0.3.21

##### Patch Changes

- [`bcb1697`](https://github.com/backstage/backstage/commit/bcb1697): Register WebSocket upgrades through the framework router so the first connection works without a prior HTTP request. Preserve user-only authentication and existing token-as-protocol clients, while keeping only the health endpoint public over HTTP.

### `@backstage/plugin-techdocs-backend-module-zensical` (0.1.1 → [0.1.0](../../changelogs/@backstage/plugin-techdocs-backend-module-zensical.md#010))

_No changelog entries found._

### `@backstage/plugin-user-settings` (0.9.8 → [0.9.9](../../changelogs/@backstage/plugin-user-settings.md#099))

#### 0.9.9

##### Patch Changes

- [`4bbc7a9`](https://github.com/backstage/backstage/commit/4bbc7a9): Removed explicit support for React 17: the peer dependency range for `react`, `react-dom` and `@types/react` is now `^18.0.0`. React 17 is no longer tested or guaranteed to work, although it may continue to work in some cases. See the [migration guide](https://backstage.io/docs/frontend-system/architecture/migrations#157).

### `@backstage/plugin-user-settings-backend` (0.4.8 → [0.4.9](../../changelogs/@backstage/plugin-user-settings-backend.md#049))

#### 0.4.9

##### Patch Changes

- [`6a0de59`](https://github.com/backstage/backstage/commit/6a0de59): Backend plugins now locate their database migrations relative to their own package directory, without requiring the package to be resolvable by name.

### `@backstage/repo-tools` (0.19.2 → [0.19.3](../../changelogs/@backstage/repo-tools.md#0193))

#### 0.19.3

##### Patch Changes

- [`1892d2f`](https://github.com/backstage/backstage/commit/1892d2f): chore(deps): bump `minimatch` from 10.2.6 to 11.0.1
- [`11437a9`](https://github.com/backstage/backstage/commit/11437a9): The `type-deps` command now fails with a clear error when no packages with built type declarations are found, instead of silently passing. Make sure to build all packages before running it.
- [`7d58727`](https://github.com/backstage/backstage/commit/7d58727): The peer dependency checks now expect React 18 for frontend packages, following the removal of React 17 support across the workspace. The old frontend system core packages continue to allow React 17.
- [`9120c46`](https://github.com/backstage/backstage/commit/9120c46): Updated dependency `glob` to `^14.0.0`.
- [`5eb2381`](https://github.com/backstage/backstage/commit/5eb2381): The generated API reference documentation no longer overwrites pages when a package exports declarations whose names only differ in case, or that share a name but are of different kinds, for example a variable and an interface or namespace. One of them keeps the existing page, and the others get a page with their kind added to the filename, for example `-interface` or `-namespace`, or a number if they are of the same kind.
- [`fbb676e`](https://github.com/backstage/backstage/commit/fbb676e): The `package schema openapi generate` command now exits with a non-zero code when client or server generation fails, for example when linting the generated code fails. Previously the failure was logged but the command still exited with code 0. Watch mode is unaffected and keeps watching after a failed generation.
- [`1fba2bb`](https://github.com/backstage/backstage/commit/1fba2bb): The peer dependency check no longer enforces a shared `react-router-dom` version, so packages can declare their own supported major version. See the [1.57 migration notes](https://backstage.io/docs/frontend-system/architecture/migrations#157) for background on the routing changes this supports.

### `@backstage/theme` (0.7.3 → [0.7.4](../../changelogs/@backstage/theme.md#074))

#### 0.7.4

##### Patch Changes

- [`4bbc7a9`](https://github.com/backstage/backstage/commit/4bbc7a9): Removed explicit support for React 17: the peer dependency range for `react`, `react-dom` and `@types/react` is now `^18.0.0`. React 17 is no longer tested or guaranteed to work, although it may continue to work in some cases. See the [migration guide](https://backstage.io/docs/frontend-system/architecture/migrations#157).

## Other minor version bumps

### `@backstage/app-defaults` (1.7.13 → [1.8.0](../../changelogs/@backstage/app-defaults.md#180))

#### 1.8.0

##### Minor Changes

- [`4bbc7a9`](https://github.com/backstage/backstage/commit/4bbc7a9): Removed explicit support for React 17: the peer dependency range for `react`, `react-dom` and `@types/react` is now `^18.0.0`. React 17 is no longer tested or guaranteed to work, although it may continue to work in some cases. See the [migration guide](https://backstage.io/docs/frontend-system/architecture/migrations#157).

### `@backstage/backend-app-api` (1.8.0 → [1.9.0](../../changelogs/@backstage/backend-app-api.md#190))

#### 1.9.0

##### Minor Changes

- [`1c93987`](https://github.com/backstage/backstage/commit/1c93987): Add optional `beginAt` timestamps to `PluginStartupResult` and `ModuleStartupResult` in the `BackendStartupResult` returned by `backend.start()`. The new timestamp marks when a plugin's or module's init function was invoked, i.e. after its dependencies were resolved. Together with the existing `resultAt` this makes it possible to see how long each individual plugin's or module's init function took, separate from time spent waiting for other plugins to initialize. It is undefined when a plugin or module failed before reaching initialization.

### `@backstage/backend-test-utils` (1.11.8 → [1.12.0](../../changelogs/@backstage/backend-test-utils.md#1120))

#### 1.12.0

##### Minor Changes

- [`250e4c3`](https://github.com/backstage/backstage/commit/250e4c3): Support WebSocket upgrade route registration in HTTP router service mocks and test backends.
- [`a5337d0`](https://github.com/backstage/backstage/commit/a5337d0): The `mockServices` export is now a frozen plain object instead of a TypeScript namespace, and its type is described by the new `MockServices` interface. Usage is unchanged: you can still call each mock service directly, use its `factory` and `mock` helpers, and refer to types such as `mockServices.rootConfig.Options`.

  Both `mockServices` and each of its services are frozen, so they can no longer be modified at runtime, for example with `jest.spyOn(mockServices.urlReader, 'mock')`. The mocks and factories they create are not affected.

##### Patch Changes

- [`ee1c5af`](https://github.com/backstage/backstage/commit/ee1c5af): `registerMswTestHooks` now also fails tests on unhandled requests when used with msw 3.

### `@backstage/dev-utils` (1.1.28 → [1.2.0](../../changelogs/@backstage/dev-utils.md#120))

#### 1.2.0

##### Minor Changes

- [`4bbc7a9`](https://github.com/backstage/backstage/commit/4bbc7a9): Removed explicit support for React 17: the peer dependency range for `react`, `react-dom` and `@types/react` is now `^18.0.0`. React 17 is no longer tested or guaranteed to work, although it may continue to work in some cases. See the [migration guide](https://backstage.io/docs/frontend-system/architecture/migrations#157).

### `@backstage/errors` (1.3.2 → [1.4.0](../../changelogs/@backstage/errors.md#140))

#### 1.4.0

##### Minor Changes

- [`d368d89`](https://github.com/backstage/backstage/commit/d368d89): Added static type guards such as `AuthenticationError.is(value)` and `ResponseError.is(value)` to narrow unknown errors by name and basic shape across package copies.

  Added an `isErrorWithName(value, name)` helper for implementing custom error guards. `CustomErrorBase` and `ForwardedError` have no public `is` guard; forwarded errors are recognized by their preserved error names.

### `@backstage/integration` (2.1.3 → [2.2.0](../../changelogs/@backstage/integration.md#220))

#### 2.2.0

##### Minor Changes

- [`2b201b6`](https://github.com/backstage/backstage/commit/2b201b6): Added a `ClientCertificate` credential kind for the Azure DevOps integration. Configure `clientId`, `tenantId` and either `clientCertificate` (PEM including the private key) or `clientCertificatePath` to authenticate an App Registration with a certificate instead of a client secret.

##### Patch Changes

- [`f56086a`](https://github.com/backstage/backstage/commit/f56086a): Fixed GitHub app credentials failing for every owner with `Cannot read properties of null (reading 'account')` when the list of app installations returned by GitHub contained null entries. Those entries are now ignored.

### `@backstage/integration-react` (1.2.23 → [1.3.0](../../changelogs/@backstage/integration-react.md#130))

#### 1.3.0

##### Minor Changes

- [`4bbc7a9`](https://github.com/backstage/backstage/commit/4bbc7a9): Removed explicit support for React 17: the peer dependency range for `react`, `react-dom` and `@types/react` is now `^18.0.0`. React 17 is no longer tested or guaranteed to work, although it may continue to work in some cases. See the [migration guide](https://backstage.io/docs/frontend-system/architecture/migrations#157).

##### Patch Changes

- [`4c662c9`](https://github.com/backstage/backstage/commit/4c662c9): Removed this package's direct Material UI v4 dependencies. SCM integrations without a registered system icon now use a Remix code icon as the fallback.

### `@backstage/plugin-catalog` (2.0.10 → [2.1.0](../../changelogs/@backstage/plugin-catalog.md#210))

#### 2.1.0

##### Minor Changes

- [`d4f458e`](https://github.com/backstage/backstage/commit/d4f458e): Added support for translated entity content titles through `EntityContentBlueprint`.
- [`4bbc7a9`](https://github.com/backstage/backstage/commit/4bbc7a9): Removed explicit support for React 17: the peer dependency range for `react`, `react-dom` and `@types/react` is now `^18.0.0`. React 17 is no longer tested or guaranteed to work, although it may continue to work in some cases. See the [migration guide](https://backstage.io/docs/frontend-system/architecture/migrations#157).

##### Patch Changes

- [`0da6298`](https://github.com/backstage/backstage/commit/0da6298): Entity page tabs now generate app-absolute links from the entity route, so they work correctly when navigation comes from outside the page router.
- [`57111dc`](https://github.com/backstage/backstage/commit/57111dc): Migrated the `EntityNotFound` component from Material UI to Backstage UI.
- [`9d0a31b`](https://github.com/backstage/backstage/commit/9d0a31b): Removed an unused `use-sync-external-store` dependency, which is no longer needed now that React 18 is the minimum supported version.
- [`118d84a`](https://github.com/backstage/backstage/commit/118d84a): Updated catalog tabs to render icon elements through the current frontend icon API.

### `@backstage/plugin-scaffolder` (1.40.0 → [1.41.0](../../changelogs/@backstage/plugin-scaffolder.md#1410))

#### 1.41.0

##### Minor Changes

- [`3fe82f6`](https://github.com/backstage/backstage/commit/3fe82f6): Added a `ScaffolderTemplateFilterBlueprint` that lets apps filter the new frontend system's template list using identity, catalog, or other viewer-specific state.
- [`ae86338`](https://github.com/backstage/backstage/commit/ae86338): Added GitLab branch autocompletion to RepoBranchPicker using user SCM credentials.
- [`4bbc7a9`](https://github.com/backstage/backstage/commit/4bbc7a9): Removed explicit support for React 17: the peer dependency range for `react`, `react-dom` and `@types/react` is now `^18.0.0`. React 17 is no longer tested or guaranteed to work, although it may continue to work in some cases. See the [migration guide](https://backstage.io/docs/frontend-system/architecture/migrations#157).

##### Patch Changes

- [`111c6ce`](https://github.com/backstage/backstage/commit/111c6ce): Keep the task button bar at the user's chosen visibility when a task completes, so log visibility and start-over controls remain accessible. Action availability continues to depend on task state and permissions.

### `@backstage/plugin-scaffolder-backend` (4.2.5 → [4.3.0](../../changelogs/@backstage/plugin-scaffolder-backend.md#430))

#### 4.3.0

##### Minor Changes

- [`ff0ef74`](https://github.com/backstage/backstage/commit/ff0ef74): Added support for `when` conditions on parameter steps. Steps whose condition evaluates to false are skipped during validation, and their values are removed before the task runs. Also updated Nunjitsu to 0.7.0, with no change to existing templating behavior.

##### Patch Changes

- [`6a0de59`](https://github.com/backstage/backstage/commit/6a0de59): Backend plugins now locate their database migrations relative to their own package directory, without requiring the package to be resolvable by name.
- [`2fac95b`](https://github.com/backstage/backstage/commit/2fac95b): Group the Software Templates API documentation by functionality instead of placing all endpoints under "Untagged".
- [`eda8ede`](https://github.com/backstage/backstage/commit/eda8ede): Check the host that relative fetch URLs resolve to when user credentials are required.

  When `scaffolder.requireScmUserCredentials` is enabled, the fetch actions now apply the user-credential requirement to the host that the fetch URL resolves to, rather than the host of the template location. This makes the requirement effective also for fetch URLs that are not parseable as absolute URLs on their own.

- [`e318672`](https://github.com/backstage/backstage/commit/e318672): Fixed matching of action input values in scaffolder permission policies, including identifiers that are provided either as numbers or as strings.
- [`be5074c`](https://github.com/backstage/backstage/commit/be5074c): Preserve public task log values when rendering without secrets omits an earlier object field, while continuing to redact secret-derived keys and values.
- [`62eaba9`](https://github.com/backstage/backstage/commit/62eaba9): Fixed custom task permission rules registered by backend modules being ignored when authorizing task access and filtering task lists.

### `@backstage/plugin-scaffolder-common` (2.3.1 → [2.4.0](../../changelogs/@backstage/plugin-scaffolder-common.md#240))

#### 2.4.0

##### Minor Changes

- [`ff0ef74`](https://github.com/backstage/backstage/commit/ff0ef74): Added support for `when` conditions on parameter steps, allowing templates to show or hide wizard steps based on earlier answers, for example `${{ parameters.cloudProvider === 'AWS' }}`. Also added the alpha `resolveParameterSteps` and `filterHiddenStepValues` helpers for working out which steps are visible and removing values from hidden steps.

### `@backstage/plugin-search` (1.7.9 → [1.8.0](../../changelogs/@backstage/plugin-search.md#180))

#### 1.8.0

##### Minor Changes

- [`4bbc7a9`](https://github.com/backstage/backstage/commit/4bbc7a9): Removed explicit support for React 17: the peer dependency range for `react`, `react-dom` and `@types/react` is now `^18.0.0`. React 17 is no longer tested or guaranteed to work, although it may continue to work in some cases. See the [migration guide](https://backstage.io/docs/frontend-system/architecture/migrations#157).

### `@backstage/plugin-search-react` (1.11.9 → [1.12.0](../../changelogs/@backstage/plugin-search-react.md#1120))

#### 1.12.0

##### Minor Changes

- [`4bbc7a9`](https://github.com/backstage/backstage/commit/4bbc7a9): Removed explicit support for React 17: the peer dependency range for `react`, `react-dom` and `@types/react` is now `^18.0.0`. React 17 is no longer tested or guaranteed to work, although it may continue to work in some cases. See the [migration guide](https://backstage.io/docs/frontend-system/architecture/migrations#157).

##### Patch Changes

- [`6c8a6b1`](https://github.com/backstage/backstage/commit/6c8a6b1): Fixed `SearchFilter.Autocomplete` with `multiple` clearing the typed text on every keystroke once a value was selected.

### `@backstage/plugin-techdocs` (1.19.0 → [1.20.0](../../changelogs/@backstage/plugin-techdocs.md#1200))

#### 1.20.0

##### Minor Changes

- [`4bbc7a9`](https://github.com/backstage/backstage/commit/4bbc7a9): Removed explicit support for React 17: the peer dependency range for `react`, `react-dom` and `@types/react` is now `^18.0.0`. React 17 is no longer tested or guaranteed to work, although it may continue to work in some cases. See the [migration guide](https://backstage.io/docs/frontend-system/architecture/migrations#157).

##### Patch Changes

- [`9a1d5cf`](https://github.com/backstage/backstage/commit/9a1d5cf): Fixed the TechDocs table of contents drifting to the right on wide screens. It now stays aligned with the right edge of the documentation content.

### `@backstage/plugin-techdocs-addons-test-utils` (2.0.10 → [2.1.0](../../changelogs/@backstage/plugin-techdocs-addons-test-utils.md#210))

#### 2.1.0

##### Minor Changes

- [`4bbc7a9`](https://github.com/backstage/backstage/commit/4bbc7a9): Removed explicit support for React 17: the peer dependency range for `react`, `react-dom` and `@types/react` is now `^18.0.0`. React 17 is no longer tested or guaranteed to work, although it may continue to work in some cases. See the [migration guide](https://backstage.io/docs/frontend-system/architecture/migrations#157).

### `@backstage/plugin-techdocs-module-addons-contrib` (1.1.41 → [1.2.0](../../changelogs/@backstage/plugin-techdocs-module-addons-contrib.md#120))

#### 1.2.0

##### Minor Changes

- [`4bbc7a9`](https://github.com/backstage/backstage/commit/4bbc7a9): Removed explicit support for React 17: the peer dependency range for `react`, `react-dom` and `@types/react` is now `^18.0.0`. React 17 is no longer tested or guaranteed to work, although it may continue to work in some cases. See the [migration guide](https://backstage.io/docs/frontend-system/architecture/migrations#157).

### `@backstage/plugin-techdocs-node` (2.2.1 → [2.3.0](../../changelogs/@backstage/plugin-techdocs-node.md#230))

#### 2.3.0

##### Minor Changes

- [`a4604d2`](https://github.com/backstage/backstage/commit/a4604d2): Added a new `@backstage/plugin-techdocs-node/alpha` entry point with building blocks for implementing additional documentation engines in separate modules: `createDockerContainerRunner`, `createOrUpdateMetadata`, `storeEtagMetadata`, `runCommand`, `validateInputDirectory`, `patchIndexPreBuild`, and the `mkdocs.yml` helpers `MKDOCS_SCHEMA`, `validateMkdocsYaml` and `sanitizeMkdocsYml`. These are alpha and may change in minor releases.

##### Patch Changes

- [`686d3cb`](https://github.com/backstage/backstage/commit/686d3cb): Fixed TechDocs served from Azure Blob Storage or Google Cloud Storage keeping storage connections open when a browser navigates away before a file is fully loaded. Errors that occur while streaming a file from Azure Blob Storage are now also logged and handled, instead of being left unhandled.
- [`bc73976`](https://github.com/backstage/backstage/commit/bc73976): Restricts `markdown_extensions` in `mkdocs.yml` to known extension names before documentation generation, in both the MkDocs and Zensical engines. Extension names outside the permitted set are removed from the configuration with a warning. Allow additional extensions, for example from a custom build image, with the new `techdocs.generator.mkdocs.dangerouslyAllowAdditionalExtensions` configuration, or the `--dangerouslyAllowAdditionalExtensions` flag when using the TechDocs CLI.
- [`2e98895`](https://github.com/backstage/backstage/commit/2e98895): Fixed TechDocs served from AWS S3 leaking S3 connections when a browser navigates away before a file is fully loaded. Over time the connection pool was exhausted and all TechDocs pages failed to load with `Socket timed out without establishing a connection` errors until the backend was restarted.

### `@backstage/plugin-techdocs-react` (1.4.0 → [1.5.0](../../changelogs/@backstage/plugin-techdocs-react.md#150))

#### 1.5.0

##### Minor Changes

- [`4bbc7a9`](https://github.com/backstage/backstage/commit/4bbc7a9): Removed explicit support for React 17: the peer dependency range for `react`, `react-dom` and `@types/react` is now `^18.0.0`. React 17 is no longer tested or guaranteed to work, although it may continue to work in some cases. See the [migration guide](https://backstage.io/docs/frontend-system/architecture/migrations#157).

### `@backstage/test-utils` (1.7.23 → [1.8.0](../../changelogs/@backstage/test-utils.md#180))

#### 1.8.0

##### Minor Changes

- [`4bbc7a9`](https://github.com/backstage/backstage/commit/4bbc7a9): Removed explicit support for React 17: the peer dependency range for `react`, `react-dom` and `@types/react` is now `^18.0.0`. React 17 is no longer tested or guaranteed to work, although it may continue to work in some cases. See the [migration guide](https://backstage.io/docs/frontend-system/architecture/migrations#157).

##### Patch Changes

- [`ee1c5af`](https://github.com/backstage/backstage/commit/ee1c5af): `registerMswTestHooks` now also fails tests on unhandled requests when used with msw 3.

### `@backstage/version-bridge` (1.0.12 → [1.1.0](../../changelogs/@backstage/version-bridge.md#110))

#### 1.1.0

##### Minor Changes

- [`4bbc7a9`](https://github.com/backstage/backstage/commit/4bbc7a9): Removed explicit support for React 17: the peer dependency range for `react`, `react-dom` and `@types/react` is now `^18.0.0`. React 17 is no longer tested or guaranteed to work, although it may continue to work in some cases. See the [migration guide](https://backstage.io/docs/frontend-system/architecture/migrations#157).

### `@techdocs/cli` (1.14.1 → [1.15.0](../../changelogs/@techdocs/cli.md#1150))

#### 1.15.0

##### Minor Changes

- [`a4604d2`](https://github.com/backstage/backstage/commit/a4604d2): Add Zensical support to `serve`, `serve:raw` and `generate` via `--engine zensical` (or the `backstage.io/techdocs-engine` annotation in `catalog-info.yaml`), including live reload in the preview app. The default `--docker-image` is now chosen per engine instead of always being `spotify/techdocs`, and matches the image the TechDocs backend uses for that engine, so MkDocs previews now use `spotify/techdocs:v1.2.8` instead of `latest`. Passing `--docker-image` explicitly behaves as before.

  The `serve` flags `--mkdocs-port`, `--mkdocs-config-file-name` and `--mkdocs-parameter-*` are deprecated in favor of `--engine-port`, `--config-file-name` and `--parameter-*`. If both the old and new flag are given, the new one wins and the warning says the old one is ignored.

##### Patch Changes

- [`bc73976`](https://github.com/backstage/backstage/commit/bc73976): Restricts `markdown_extensions` in `mkdocs.yml` to known extension names before documentation generation, in both the MkDocs and Zensical engines. Extension names outside the permitted set are removed from the configuration with a warning. Allow additional extensions, for example from a custom build image, with the new `techdocs.generator.mkdocs.dangerouslyAllowAdditionalExtensions` configuration, or the `--dangerouslyAllowAdditionalExtensions` flag when using the TechDocs CLI.

## Other patch version bumps

### `@backstage/catalog-client` (1.16.3 → [1.16.4](../../changelogs/@backstage/catalog-client.md#1164))

#### 1.16.4

##### Patch Changes

- [`9c76a81`](https://github.com/backstage/backstage/commit/9c76a81): Documented that the `entities/by-query` endpoint currently applies only the first `orderField`; any additional order fields are ignored. Updated the OpenAPI spec parameter description and the Software Catalog API docs accordingly. No behavior change. Refs #17560.

### `@backstage/core-app-api` (1.20.6 → [1.20.7](../../changelogs/@backstage/core-app-api.md#1207))

#### 1.20.7

##### Patch Changes

- [`9c97ff4`](https://github.com/backstage/backstage/commit/9c97ff4): Fixed the OAuth "Login Required" popup (`OAuthRequestDialog`) appearing after a transient network failure during a background token refresh — for example right after the machine wakes from sleep, when the session has not actually expired.
- [`25297de`](https://github.com/backstage/backstage/commit/25297de): Fixed translation subscriptions failing when an abandoned language load rejects after switching to a language whose translations are already available.
- [`2aa14e3`](https://github.com/backstage/backstage/commit/2aa14e3): Backstage UI links and collections now use client-side navigation at their consuming route scope, and apps with a custom `Router` that provides no React Router context render without failing at startup. See the [1.57 migration notes](https://backstage.io/docs/frontend-system/architecture/migrations#157) for detailed migration steps.
- [`7285912`](https://github.com/backstage/backstage/commit/7285912): Translation snapshots now provide `t` while resources are loading, using available messages and language fallbacks. Check `ready` before rendering to wait for the selected language.
- [`8688124`](https://github.com/backstage/backstage/commit/8688124): Fix unexpected sign-in prompts when multiple tabs refresh a session at the same time with an auth provider that rotates refresh tokens. Refresh requests are coordinated across tabs in browsers that support the Web Locks API.

### `@backstage/plugin-catalog-backend` (4.0.4 → [4.0.3](../../changelogs/@backstage/plugin-catalog-backend.md#403))

_No changelog entries found._

### `@backstage/plugin-search-backend-module-elasticsearch` (2.0.1 → [2.0.2](../../changelogs/@backstage/plugin-search-backend-module-elasticsearch.md#202))

#### 2.0.2

##### Patch Changes

- [`8da9c23`](https://github.com/backstage/backstage/commit/8da9c23): Internal changes for TypeScript 7 compatibility. There are no changes to behavior or the public API.

### `@backstage/plugin-techdocs-backend` (2.4.2 → [2.4.3](../../changelogs/@backstage/plugin-techdocs-backend.md#243))

#### 2.4.3

##### Patch Changes

- [`4d7a3fe`](https://github.com/backstage/backstage/commit/4d7a3fe): Clarified in the config schema which `techdocs.generator.mkdocs` settings also apply to the Zensical engine: `legacyCopyReadmeMdToIndexMd`, `dangerouslyAllowAdditionalKeys` and `dangerouslyAllowAdditionalPlugins`.
- [`bc73976`](https://github.com/backstage/backstage/commit/bc73976): Restricts `markdown_extensions` in `mkdocs.yml` to known extension names before documentation generation, in both the MkDocs and Zensical engines. Extension names outside the permitted set are removed from the configuration with a warning. Allow additional extensions, for example from a custom build image, with the new `techdocs.generator.mkdocs.dangerouslyAllowAdditionalExtensions` configuration, or the `--dangerouslyAllowAdditionalExtensions` flag when using the TechDocs CLI.

## Excluded dependency updates

- `@backstage/catalog-model` (1.10.2 → [1.10.3](../../changelogs/@backstage/catalog-model.md#1103))
- `@backstage/cli-common` (0.3.2 → [0.3.3](../../changelogs/@backstage/cli-common.md#033))
- `@backstage/cli-defaults` (0.1.7 → [0.1.8](../../changelogs/@backstage/cli-defaults.md#018))
- `@backstage/cli-module-actions` (0.1.4 → [0.1.5](../../changelogs/@backstage/cli-module-actions.md#015))
- `@backstage/cli-module-catalog` (0.2.0 → [0.2.1](../../changelogs/@backstage/cli-module-catalog.md#021))
- `@backstage/cli-module-config` (0.1.8 → [0.1.9](../../changelogs/@backstage/cli-module-config.md#019))
- `@backstage/cli-module-github` (0.1.5 → [0.1.6](../../changelogs/@backstage/cli-module-github.md#016))
- `@backstage/cli-module-lint` (0.1.6 → [0.1.7](../../changelogs/@backstage/cli-module-lint.md#017))
- `@backstage/cli-module-maintenance` (0.1.6 → [0.1.7](../../changelogs/@backstage/cli-module-maintenance.md#017))
- `@backstage/cli-module-scaffolder` (0.2.0 → [0.2.1](../../changelogs/@backstage/cli-module-scaffolder.md#021))
- `@backstage/cli-module-search` (0.2.0 → [0.2.1](../../changelogs/@backstage/cli-module-search.md#021))
- `@backstage/cli-module-translations` (0.1.5 → [0.1.6](../../changelogs/@backstage/cli-module-translations.md#016))
- `@backstage/config` (1.3.10 → [1.3.11](../../changelogs/@backstage/config.md#1311))
- `@backstage/config-loader` (1.11.4 → [1.11.5](../../changelogs/@backstage/config-loader.md#1115))
- `@backstage/connections` (0.4.1 → [0.4.2](../../changelogs/@backstage/connections.md#042))
- `@backstage/filter-predicates` (0.2.0 → [0.2.1](../../changelogs/@backstage/filter-predicates.md#021))
- `@backstage/plugin-app-module-user-settings` (0.1.3 → [0.1.4](../../changelogs/@backstage/plugin-app-module-user-settings.md#014))
- `@backstage/plugin-app-node` (0.1.50 → [0.1.51](../../changelogs/@backstage/plugin-app-node.md#0151))
- `@backstage/plugin-auth-backend-module-atlassian-provider` (0.5.0 → [0.5.1](../../changelogs/@backstage/plugin-auth-backend-module-atlassian-provider.md#051))
- `@backstage/plugin-auth-backend-module-bitbucket-provider` (0.3.20 → [0.3.21](../../changelogs/@backstage/plugin-auth-backend-module-bitbucket-provider.md#0321))
- `@backstage/plugin-auth-backend-module-bitbucket-server-provider` (0.2.20 → [0.2.21](../../changelogs/@backstage/plugin-auth-backend-module-bitbucket-server-provider.md#0221))
- `@backstage/plugin-auth-backend-module-gcp-iap-provider` (0.4.20 → [0.4.21](../../changelogs/@backstage/plugin-auth-backend-module-gcp-iap-provider.md#0421))
- `@backstage/plugin-auth-backend-module-github-provider` (0.5.8 → [0.5.9](../../changelogs/@backstage/plugin-auth-backend-module-github-provider.md#059))
- `@backstage/plugin-auth-backend-module-gitlab-provider` (0.4.8 → [0.4.9](../../changelogs/@backstage/plugin-auth-backend-module-gitlab-provider.md#049))
- `@backstage/plugin-auth-backend-module-google-provider` (0.3.20 → [0.3.21](../../changelogs/@backstage/plugin-auth-backend-module-google-provider.md#0321))
- `@backstage/plugin-auth-backend-module-guest-provider` (0.2.24 → [0.2.25](../../changelogs/@backstage/plugin-auth-backend-module-guest-provider.md#0225))
- `@backstage/plugin-auth-backend-module-oauth2-provider` (0.4.20 → [0.4.21](../../changelogs/@backstage/plugin-auth-backend-module-oauth2-provider.md#0421))
- `@backstage/plugin-auth-backend-module-okta-provider` (0.2.20 → [0.2.21](../../changelogs/@backstage/plugin-auth-backend-module-okta-provider.md#0221))
- `@backstage/plugin-auth-backend-module-onelogin-provider` (0.3.20 → [0.3.21](../../changelogs/@backstage/plugin-auth-backend-module-onelogin-provider.md#0321))
- `@backstage/plugin-auth-backend-module-openshift-provider` (0.1.12 → [0.1.13](../../changelogs/@backstage/plugin-auth-backend-module-openshift-provider.md#0113))
- `@backstage/plugin-catalog-backend-module-aws` (0.4.29 → [0.4.30](../../changelogs/@backstage/plugin-catalog-backend-module-aws.md#0430))
- `@backstage/plugin-catalog-backend-module-azure` (0.3.23 → [0.3.24](../../changelogs/@backstage/plugin-catalog-backend-module-azure.md#0324))
- `@backstage/plugin-catalog-backend-module-backstage-openapi` (0.5.19 → [0.5.20](../../changelogs/@backstage/plugin-catalog-backend-module-backstage-openapi.md#0520))
- `@backstage/plugin-catalog-backend-module-bitbucket-server` (0.5.16 → [0.5.17](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-server.md#0517))
- `@backstage/plugin-catalog-backend-module-gcp` (0.3.24 → [0.3.25](../../changelogs/@backstage/plugin-catalog-backend-module-gcp.md#0325))
- `@backstage/plugin-catalog-backend-module-gerrit` (0.3.19 → [0.3.20](../../changelogs/@backstage/plugin-catalog-backend-module-gerrit.md#0320))
- `@backstage/plugin-catalog-backend-module-gitea` (0.1.17 → [0.1.18](../../changelogs/@backstage/plugin-catalog-backend-module-gitea.md#0118))
- `@backstage/plugin-catalog-backend-module-gitlab-org` (0.2.26 → [0.2.27](../../changelogs/@backstage/plugin-catalog-backend-module-gitlab-org.md#0227))
- `@backstage/plugin-catalog-backend-module-logs` (0.1.27 → [0.1.28](../../changelogs/@backstage/plugin-catalog-backend-module-logs.md#0128))
- `@backstage/plugin-catalog-backend-module-msgraph` (0.10.7 → [0.10.8](../../changelogs/@backstage/plugin-catalog-backend-module-msgraph.md#0108))
- `@backstage/plugin-catalog-backend-module-msgraph-incremental` (0.1.5 → [0.1.6](../../changelogs/@backstage/plugin-catalog-backend-module-msgraph-incremental.md#016))
- `@backstage/plugin-catalog-backend-module-openapi` (0.2.27 → [0.2.28](../../changelogs/@backstage/plugin-catalog-backend-module-openapi.md#0228))
- `@backstage/plugin-catalog-backend-module-puppetdb` (0.2.27 → [0.2.28](../../changelogs/@backstage/plugin-catalog-backend-module-puppetdb.md#0228))
- `@backstage/plugin-catalog-backend-module-scaffolder-entity-model` (0.2.25 → [0.2.26](../../changelogs/@backstage/plugin-catalog-backend-module-scaffolder-entity-model.md#0226))
- `@backstage/plugin-catalog-common` (1.2.1 → [1.2.2](../../changelogs/@backstage/plugin-catalog-common.md#122))
- `@backstage/plugin-catalog-node` (2.2.6 → [3.0.0](../../changelogs/@backstage/plugin-catalog-node.md#300))
- `@backstage/plugin-catalog-unprocessed-entities-common` (0.0.18 → [0.0.19](../../changelogs/@backstage/plugin-catalog-unprocessed-entities-common.md#0019))
- `@backstage/plugin-devtools-backend` (0.5.22 → [0.5.23](../../changelogs/@backstage/plugin-devtools-backend.md#0523))
- `@backstage/plugin-devtools-common` (0.1.27 → [0.1.28](../../changelogs/@backstage/plugin-devtools-common.md#0128))
- `@backstage/plugin-events-backend-module-aws-sqs` (0.4.27 → [0.4.28](../../changelogs/@backstage/plugin-events-backend-module-aws-sqs.md#0428))
- `@backstage/plugin-events-backend-module-bitbucket-cloud` (0.2.36 → [0.2.37](../../changelogs/@backstage/plugin-events-backend-module-bitbucket-cloud.md#0237))
- `@backstage/plugin-events-backend-module-bitbucket-server` (0.1.17 → [0.1.18](../../changelogs/@backstage/plugin-events-backend-module-bitbucket-server.md#0118))
- `@backstage/plugin-events-backend-module-gerrit` (0.2.36 → [0.2.37](../../changelogs/@backstage/plugin-events-backend-module-gerrit.md#0237))
- `@backstage/plugin-events-backend-module-kafka` (0.3.9 → [0.3.10](../../changelogs/@backstage/plugin-events-backend-module-kafka.md#0310))
- `@backstage/plugin-events-backend-test-utils` (0.1.60 → [0.1.61](../../changelogs/@backstage/plugin-events-backend-test-utils.md#0161))
- `@backstage/plugin-gateway-backend` (1.1.10 → [1.1.11](../../changelogs/@backstage/plugin-gateway-backend.md#1111))
- `@backstage/plugin-kubernetes-node` (0.4.9 → [0.4.10](../../changelogs/@backstage/plugin-kubernetes-node.md#0410))
- `@backstage/plugin-notifications-backend-module-email` (0.3.26 → [0.3.27](../../changelogs/@backstage/plugin-notifications-backend-module-email.md#0327))
- `@backstage/plugin-notifications-common` (0.2.5 → [0.2.6](../../changelogs/@backstage/plugin-notifications-common.md#026))
- `@backstage/plugin-notifications-node` (0.2.31 → [0.2.32](../../changelogs/@backstage/plugin-notifications-node.md#0232))
- `@backstage/plugin-permission-backend` (0.7.17 → [0.7.18](../../changelogs/@backstage/plugin-permission-backend.md#0718))
- `@backstage/plugin-permission-backend-module-allow-all-policy` (0.2.24 → [0.2.25](../../changelogs/@backstage/plugin-permission-backend-module-allow-all-policy.md#0225))
- `@backstage/plugin-permission-common` (0.9.12 → [0.9.13](../../changelogs/@backstage/plugin-permission-common.md#0913))
- `@backstage/plugin-permission-node` (0.11.5 → [0.11.6](../../changelogs/@backstage/plugin-permission-node.md#0116))
- `@backstage/plugin-proxy-backend` (0.6.19 → [0.6.20](../../changelogs/@backstage/plugin-proxy-backend.md#0620))
- `@backstage/plugin-proxy-node` (0.1.20 → [0.1.21](../../changelogs/@backstage/plugin-proxy-node.md#0121))
- `@backstage/plugin-scaffolder-backend-module-azure` (0.2.27 → [0.2.28](../../changelogs/@backstage/plugin-scaffolder-backend-module-azure.md#0228))
- `@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` (0.3.12 → [0.3.13](../../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket-cloud.md#0313))
- `@backstage/plugin-scaffolder-backend-module-bitbucket-server` (0.2.27 → [0.2.28](../../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket-server.md#0228))
- `@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.3.28 → [0.3.29](../../changelogs/@backstage/plugin-scaffolder-backend-module-cookiecutter.md#0329))
- `@backstage/plugin-scaffolder-backend-module-gerrit` (0.2.26 → [0.2.27](../../changelogs/@backstage/plugin-scaffolder-backend-module-gerrit.md#0227))
- `@backstage/plugin-scaffolder-backend-module-gitea` (0.2.26 → [0.2.27](../../changelogs/@backstage/plugin-scaffolder-backend-module-gitea.md#0227))
- `@backstage/plugin-scaffolder-backend-module-notifications` (0.1.27 → [0.1.28](../../changelogs/@backstage/plugin-scaffolder-backend-module-notifications.md#0128))
- `@backstage/plugin-scaffolder-backend-module-rails` (0.5.26 → [0.5.27](../../changelogs/@backstage/plugin-scaffolder-backend-module-rails.md#0527))
- `@backstage/plugin-scaffolder-backend-module-sentry` (0.4.1 → [0.4.2](../../changelogs/@backstage/plugin-scaffolder-backend-module-sentry.md#042))
- `@backstage/plugin-scaffolder-backend-module-yeoman` (0.4.27 → [0.4.28](../../changelogs/@backstage/plugin-scaffolder-backend-module-yeoman.md#0428))
- `@backstage/plugin-scaffolder-node` (0.13.8 → [1.0.0](../../changelogs/@backstage/plugin-scaffolder-node.md#100))
- `@backstage/plugin-search-backend` (2.1.8 → [2.1.9](../../changelogs/@backstage/plugin-search-backend.md#219))
- `@backstage/plugin-search-backend-module-catalog` (0.3.20 → [0.3.21](../../changelogs/@backstage/plugin-search-backend-module-catalog.md#0321))
- `@backstage/plugin-search-backend-module-explore` (0.3.19 → [0.3.20](../../changelogs/@backstage/plugin-search-backend-module-explore.md#0320))
- `@backstage/plugin-search-backend-module-stack-overflow-collator` (0.3.25 → [0.3.26](../../changelogs/@backstage/plugin-search-backend-module-stack-overflow-collator.md#0326))
- `@backstage/plugin-search-backend-module-techdocs` (0.4.19 → [0.4.20](../../changelogs/@backstage/plugin-search-backend-module-techdocs.md#0420))
- `@backstage/plugin-search-backend-node` (1.4.9 → [1.4.10](../../changelogs/@backstage/plugin-search-backend-node.md#1410))
- `@backstage/plugin-search-common` (1.2.26 → [1.2.27](../../changelogs/@backstage/plugin-search-common.md#1227))
- `@backstage/plugin-signals-node` (0.2.6 → [0.2.7](../../changelogs/@backstage/plugin-signals-node.md#027))
- `@backstage/plugin-techdocs-common` (0.1.2 → [0.1.3](../../changelogs/@backstage/plugin-techdocs-common.md#013))
