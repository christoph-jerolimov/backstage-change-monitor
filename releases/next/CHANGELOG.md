# Backstage Release 1.57.0-next.2 changelog

Changes between 1.56.5 and 1.57.0-next.2 — 3 added, 0 removed, 209 upgraded, 7 unchanged packages.

## Summary

- [Newly added packages](#newly-added-packages): 3 packages
- [Breaking changes](#breaking-changes): 10 packages
- [Major version bumps](#major-version-bumps): 1 package
- [0.x minor version bumps](#0x-minor-version-bumps): 2 packages
- [0.0.x patch version bumps](#00x-patch-version-bumps): 2 packages
- [0.x patch version bumps](#0x-patch-version-bumps): 48 packages
- [Other minor version bumps](#other-minor-version-bumps): 6 packages
- [Other patch version bumps](#other-patch-version-bumps): 12 packages
- [Excluded dependency updates](#excluded-dependency-updates): 128 packages

## Table of contents

- [Newly added packages](#newly-added-packages)
  - [`@backstage/frontend-adapter-react-router-v6` (new, 0.2.0-next.0)](#backstagefrontend-adapter-react-router-v6-new-020-next0)
  - [`@backstage/frontend-adapter-react-router-v7` (new, 0.2.0-next.0)](#backstagefrontend-adapter-react-router-v7-new-020-next0)
  - [`@backstage/frontend-adapter-tanstack-router` (new, 0.2.0-next.0)](#backstagefrontend-adapter-tanstack-router-new-020-next0)
- [Breaking changes](#breaking-changes)
  - [`@backstage/backend-plugin-api` (1.11.0 → 1.12.0-next.1)](#backstagebackend-plugin-api-1110--1120-next1)
  - [`@backstage/core-compat-api` (0.5.16 → 0.6.0-next.2)](#backstagecore-compat-api-0516--060-next2)
  - [`@backstage/frontend-app-api` (0.16.9 → 0.17.0-next.2)](#backstagefrontend-app-api-0169--0170-next2)
  - [`@backstage/frontend-plugin-api` (0.18.2 → 0.19.0-next.2)](#backstagefrontend-plugin-api-0182--0190-next2)
  - [`@backstage/frontend-test-utils` (0.6.5 → 0.7.0-next.2)](#backstagefrontend-test-utils-065--070-next2)
  - [`@backstage/plugin-app` (0.5.4 → 0.6.0-next.2)](#backstageplugin-app-054--060-next2)
  - [`@backstage/plugin-app-react` (0.2.8 → 0.3.0-next.2)](#backstageplugin-app-react-028--030-next2)
  - [`@backstage/plugin-auth-backend` (0.30.2 → 0.31.0-next.2)](#backstageplugin-auth-backend-0302--0310-next2)
  - [`@backstage/plugin-scaffolder-backend-module-gcp` (0.2.26 → 0.3.0-next.1)](#backstageplugin-scaffolder-backend-module-gcp-0226--030-next1)
  - [`@backstage/ui` (0.19.0 → 0.20.0-next.0)](#backstageui-0190--0200-next0)
- [Major version bumps](#major-version-bumps)
  - [`@backstage/plugin-scaffolder-react` (2.1.1 → 3.0.0-next.2)](#backstageplugin-scaffolder-react-211--300-next2)
- [0.x minor version bumps](#0x-minor-version-bumps)
  - [`@backstage/backend-defaults` (0.18.1 → 0.19.0-next.2)](#backstagebackend-defaults-0181--0190-next2)
  - [`@backstage/plugin-events-node` (0.4.27 → 0.5.0-next.2)](#backstageplugin-events-node-0427--050-next2)
- [0.0.x patch version bumps](#00x-patch-version-bumps)
  - [`@backstage/plugin-kubernetes-cluster` (0.0.42 → 0.0.43-next.1)](#backstageplugin-kubernetes-cluster-0042--0043-next1)
  - [`@backstage/release-manifests` (0.0.15 → 0.0.16-next.0)](#backstagerelease-manifests-0015--0016-next0)
- [0.x patch version bumps](#0x-patch-version-bumps)
  - [`@backstage/backend-dynamic-feature-service` (0.8.8 → 0.8.9-next.2)](#backstagebackend-dynamic-feature-service-088--089-next2)
  - [`@backstage/backend-openapi-utils` (0.7.3 → 0.7.4-next.1)](#backstagebackend-openapi-utils-073--074-next1)
  - [`@backstage/cli` (0.36.7 → 0.36.8-next.2)](#backstagecli-0367--0368-next2)
  - [`@backstage/cli-module-auth` (0.1.5 → 0.1.6-next.1)](#backstagecli-module-auth-015--016-next1)
  - [`@backstage/cli-module-build` (0.1.9 → 0.1.10-next.2)](#backstagecli-module-build-019--0110-next2)
  - [`@backstage/cli-module-info` (0.1.5 → 0.1.6-next.1)](#backstagecli-module-info-015--016-next1)
  - [`@backstage/cli-module-migrate` (0.2.2 → 0.2.3-next.2)](#backstagecli-module-migrate-022--023-next2)
  - [`@backstage/cli-module-new` (0.1.8 → 0.1.9-next.2)](#backstagecli-module-new-018--019-next2)
  - [`@backstage/cli-module-package-manager-yarn` (0.1.4 → 0.1.5-next.2)](#backstagecli-module-package-manager-yarn-014--015-next2)
  - [`@backstage/cli-module-test-jest` (0.1.7 → 0.1.8-next.1)](#backstagecli-module-test-jest-017--018-next1)
  - [`@backstage/cli-node` (0.3.5 → 0.3.6-next.2)](#backstagecli-node-035--036-next2)
  - [`@backstage/core-components` (0.18.15 → 0.18.16-next.1)](#backstagecore-components-01815--01816-next1)
  - [`@backstage/create-app` (0.9.3 → 0.9.4-next.2)](#backstagecreate-app-093--094-next2)
  - [`@backstage/eslint-plugin` (0.3.3 → 0.3.4-next.1)](#backstageeslint-plugin-033--034-next1)
  - [`@backstage/frontend-defaults` (0.5.7 → 0.5.8-next.2)](#backstagefrontend-defaults-057--058-next2)
  - [`@backstage/frontend-dynamic-feature-loader` (0.1.17 → 0.1.18-next.2)](#backstagefrontend-dynamic-feature-loader-0117--0118-next2)
  - [`@backstage/integration-aws-node` (0.2.3 → 0.2.4-next.1)](#backstageintegration-aws-node-023--024-next1)
  - [`@backstage/module-federation-common` (0.1.6 → 0.1.7-next.0)](#backstagemodule-federation-common-016--017-next0)
  - [`@backstage/plugin-app-backend` (0.5.19 → 0.5.20-next.1)](#backstageplugin-app-backend-0519--0520-next1)
  - [`@backstage/plugin-auth-backend-module-auth0-provider` (0.4.6 → 0.4.7-next.1)](#backstageplugin-auth-backend-module-auth0-provider-046--047-next1)
  - [`@backstage/plugin-auth-backend-module-aws-alb-provider` (0.4.21 → 0.4.22-next.1)](#backstageplugin-auth-backend-module-aws-alb-provider-0421--0422-next1)
  - [`@backstage/plugin-auth-backend-module-azure-easyauth-provider` (0.2.25 → 0.2.26-next.1)](#backstageplugin-auth-backend-module-azure-easyauth-provider-0225--0226-next1)
  - [`@backstage/plugin-auth-backend-module-cloudflare-access-provider` (0.5.1 → 0.5.2-next.1)](#backstageplugin-auth-backend-module-cloudflare-access-provider-051--052-next1)
  - [`@backstage/plugin-auth-backend-module-microsoft-provider` (0.3.20 → 0.3.21-next.1)](#backstageplugin-auth-backend-module-microsoft-provider-0320--0321-next1)
  - [`@backstage/plugin-auth-backend-module-oauth2-proxy-provider` (0.3.4 → 0.3.5-next.1)](#backstageplugin-auth-backend-module-oauth2-proxy-provider-034--035-next1)
  - [`@backstage/plugin-auth-backend-module-oidc-provider` (0.4.22 → 0.4.23-next.1)](#backstageplugin-auth-backend-module-oidc-provider-0422--0423-next1)
  - [`@backstage/plugin-auth-backend-module-pinniped-provider` (0.3.19 → 0.3.20-next.1)](#backstageplugin-auth-backend-module-pinniped-provider-0319--0320-next1)
  - [`@backstage/plugin-auth-backend-module-vmware-cloud-provider` (0.5.19 → 0.5.20-next.1)](#backstageplugin-auth-backend-module-vmware-cloud-provider-0519--0520-next1)
  - [`@backstage/plugin-auth-node` (0.7.7 → 0.7.8-next.2)](#backstageplugin-auth-node-077--078-next2)
  - [`@backstage/plugin-catalog-backend-module-ai-model` (0.1.5 → 0.1.6-next.2)](#backstageplugin-catalog-backend-module-ai-model-015--016-next2)
  - [`@backstage/plugin-catalog-backend-module-github` (0.14.1 → 0.14.2-next.2)](#backstageplugin-catalog-backend-module-github-0141--0142-next2)
  - [`@backstage/plugin-catalog-backend-module-github-org` (0.3.27 → 0.3.28-next.2)](#backstageplugin-catalog-backend-module-github-org-0327--0328-next2)
  - [`@backstage/plugin-catalog-backend-module-gitlab` (0.8.10 → 0.8.10-next.2)](#backstageplugin-catalog-backend-module-gitlab-0810--0810-next2)
  - [`@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.9.0 → 0.9.1-next.2)](#backstageplugin-catalog-backend-module-incremental-ingestion-090--091-next2)
  - [`@backstage/plugin-catalog-backend-module-unprocessed` (0.6.17 → 0.6.18-next.1)](#backstageplugin-catalog-backend-module-unprocessed-0617--0618-next1)
  - [`@backstage/plugin-devtools` (0.1.44 → 0.1.45-next.2)](#backstageplugin-devtools-0144--0145-next2)
  - [`@backstage/plugin-events-backend` (0.6.7 → 0.6.8-next.2)](#backstageplugin-events-backend-067--068-next2)
  - [`@backstage/plugin-events-backend-module-google-pubsub` (0.2.8 → 0.2.9-next.2)](#backstageplugin-events-backend-module-google-pubsub-028--029-next2)
  - [`@backstage/plugin-kubernetes-backend` (0.21.12 → 0.21.13-next.2)](#backstageplugin-kubernetes-backend-02112--02113-next2)
  - [`@backstage/plugin-kubernetes-common` (0.9.14 → 0.9.15-next.2)](#backstageplugin-kubernetes-common-0914--0915-next2)
  - [`@backstage/plugin-mcp-actions-backend` (0.2.3 → 0.2.4-next.2)](#backstageplugin-mcp-actions-backend-023--024-next2)
  - [`@backstage/plugin-notifications` (0.6.1 → 0.6.2-next.2)](#backstageplugin-notifications-061--062-next2)
  - [`@backstage/plugin-notifications-backend` (0.6.10 → 0.6.11-next.2)](#backstageplugin-notifications-backend-0610--0611-next2)
  - [`@backstage/plugin-scaffolder-backend-module-gitlab` (0.12.1 → 0.12.2-next.1)](#backstageplugin-scaffolder-backend-module-gitlab-0121--0122-next1)
  - [`@backstage/plugin-search-backend-module-pg` (0.5.60 → 0.5.61-next.1)](#backstageplugin-search-backend-module-pg-0560--0561-next1)
  - [`@backstage/plugin-signals-backend` (0.3.20 → 0.3.21-next.2)](#backstageplugin-signals-backend-0320--0321-next2)
  - [`@backstage/plugin-techdocs-backend-module-zensical` (0.1.1 → 0.1.0-next.1)](#backstageplugin-techdocs-backend-module-zensical-011--010-next1)
  - [`@backstage/repo-tools` (0.19.2 → 0.19.3-next.1)](#backstagerepo-tools-0192--0193-next1)
- [Other minor version bumps](#other-minor-version-bumps)
  - [`@backstage/backend-app-api` (1.8.0 → 1.9.0-next.1)](#backstagebackend-app-api-180--190-next1)
  - [`@backstage/backend-test-utils` (1.11.8 → 1.12.0-next.2)](#backstagebackend-test-utils-1118--1120-next2)
  - [`@backstage/errors` (1.3.2 → 1.4.0-next.0)](#backstageerrors-132--140-next0)
  - [`@backstage/plugin-scaffolder` (1.40.0 → 1.41.0-next.2)](#backstageplugin-scaffolder-1400--1410-next2)
  - [`@backstage/plugin-scaffolder-backend` (4.2.2 → 4.3.0-next.2)](#backstageplugin-scaffolder-backend-422--430-next2)
  - [`@backstage/plugin-scaffolder-common` (2.3.1 → 2.4.0-next.1)](#backstageplugin-scaffolder-common-231--240-next1)
- [Other patch version bumps](#other-patch-version-bumps)
  - [`@backstage/catalog-client` (1.16.3 → 1.16.4-next.1)](#backstagecatalog-client-1163--1164-next1)
  - [`@backstage/core-app-api` (1.20.6 → 1.20.7-next.2)](#backstagecore-app-api-1206--1207-next2)
  - [`@backstage/core-plugin-api` (1.12.11 → 1.12.12-next.2)](#backstagecore-plugin-api-11211--11212-next2)
  - [`@backstage/integration` (2.1.3 → 2.1.4-next.0)](#backstageintegration-213--214-next0)
  - [`@backstage/plugin-catalog` (2.0.10 → 2.0.11-next.2)](#backstageplugin-catalog-2010--2011-next2)
  - [`@backstage/plugin-catalog-backend` (4.0.2 → 4.0.3-next.2)](#backstageplugin-catalog-backend-402--403-next2)
  - [`@backstage/plugin-search-backend-module-elasticsearch` (2.0.1 → 2.0.2-next.2)](#backstageplugin-search-backend-module-elasticsearch-201--202-next2)
  - [`@backstage/plugin-search-react` (1.11.9 → 1.11.10-next.2)](#backstageplugin-search-react-1119--11110-next2)
  - [`@backstage/plugin-techdocs` (1.19.0 → 1.19.1-next.2)](#backstageplugin-techdocs-1190--1191-next2)
  - [`@backstage/plugin-techdocs-backend` (2.4.2 → 2.4.2-next.2)](#backstageplugin-techdocs-backend-242--242-next2)
  - [`@backstage/plugin-techdocs-node` (2.2.1 → 2.2.1-next.2)](#backstageplugin-techdocs-node-221--221-next2)
  - [`@techdocs/cli` (1.14.1 → 1.14.1-next.1)](#techdocscli-1141--1141-next1)
- [Excluded dependency updates](#excluded-dependency-updates)

## Newly added packages

### `@backstage/frontend-adapter-react-router-v6` (new, [0.2.0-next.0](../../changelogs/@backstage/frontend-adapter-react-router-v6.md#020-next0))

#### 0.2.0-next.0

##### Minor Changes

- [`1fba2bb`](https://github.com/backstage/backstage/commit/1fba2bb): Added `ReactRouterV6PageRouter` for page-scoped React Router v6 routing with app-owned history; React Router v6 is a peer dependency. Render it inside a lazily loaded page or sub-page component to support relative links, nested routes, and route parameters. See the [1.57 migration notes](https://backstage.io/docs/frontend-system/architecture/migrations#157) for detailed migration steps and the [page router guide](https://backstage.io/docs/frontend-system/building-plugins/page-routers#use-react-router-v6) for setup and nesting examples.

### `@backstage/frontend-adapter-react-router-v7` (new, [0.2.0-next.0](../../changelogs/@backstage/frontend-adapter-react-router-v7.md#020-next0))

#### 0.2.0-next.0

##### Minor Changes

- [`1fba2bb`](https://github.com/backstage/backstage/commit/1fba2bb): Added `ReactRouterV7PageRouter` for page-scoped React Router v7 routing with app-owned history; React Router v7 is a peer dependency. Render it inside a lazily loaded page or sub-page component to support relative links, nested routes, and route parameters. See the [1.57 migration notes](https://backstage.io/docs/frontend-system/architecture/migrations#157) for detailed migration steps and the [page router guide](https://backstage.io/docs/frontend-system/building-plugins/page-routers#use-react-router-v7) for setup and nesting examples.

### `@backstage/frontend-adapter-tanstack-router` (new, [0.2.0-next.0](../../changelogs/@backstage/frontend-adapter-tanstack-router.md#020-next0))

#### 0.2.0-next.0

##### Minor Changes

- [`1fba2bb`](https://github.com/backstage/backstage/commit/1fba2bb): Added `TanStackPageRouter` for page-scoped TanStack routing with app-owned history, including `createTanStackPageRouter` and `TanStackPageContent` for plugin-owned route trees; `@tanstack/react-router` and `@tanstack/history` are peer dependencies. See the [1.57 migration notes](https://backstage.io/docs/frontend-system/architecture/migrations#157) for detailed migration steps and the [TanStack page router guide](https://backstage.io/docs/frontend-system/building-plugins/page-routers#use-tanstack-router) for setup, navigation blockers, and custom history requirements.

## Breaking changes

### `@backstage/backend-plugin-api` (1.11.0 → [1.12.0-next.1](../../changelogs/@backstage/backend-plugin-api.md#1120-next1))

#### 1.12.0-next.1

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

### `@backstage/core-compat-api` (0.5.16 → [0.6.0-next.2](../../changelogs/@backstage/core-compat-api.md#060-next2))

#### 0.6.0-next.2

##### Minor Changes

- [`df2bcee`](https://github.com/backstage/backstage/commit/df2bcee): **BREAKING**: `convertLegacyAppOptions` now rejects `components.Router`: remove plain `BrowserRouter` wrappers, move global providers to `AppRootWrapperBlueprint`, and use page router adapters for page-specific routing, with converted legacy pages receiving a scoped React Router v6 adapter automatically. See the [1.57 migration notes](https://backstage.io/docs/frontend-system/architecture/migrations#157) for detailed migration steps.

#### 0.5.17-next.1

##### Patch Changes

- [`e55a4a8`](https://github.com/backstage/backstage/commit/e55a4a8): Updated compatibility with the `FrontendPlugin` interface after removal of its deprecated `id` property, retaining support for older plugin instances.
- [`e3d50c4`](https://github.com/backstage/backstage/commit/e3d50c4): Added support for the new icons API when rendering plugins in old-system apps, while continuing to provide the original icons API for older plugins. Legacy app context icon lookups continue to return components.

### `@backstage/frontend-app-api` (0.16.9 → [0.17.0-next.2](../../changelogs/@backstage/frontend-app-api.md#0170-next2))

#### 0.17.0-next.2

##### Patch Changes

- [`2aa14e3`](https://github.com/backstage/backstage/commit/2aa14e3): The new frontend system now owns app history independently of page routing libraries, so page matching, route references, and navigation analytics use the same location and route hierarchy. Href creation and navigation require app-absolute paths starting with `/`, excluding the deployment basename, and custom `appHistoryApiRef` factories must be available during initialization without an `if` predicate. See the [1.57 migration notes](https://backstage.io/docs/frontend-system/architecture/migrations#157) for detailed migration steps.

#### 0.17.0-next.1

##### Minor Changes

- [`8c6c842`](https://github.com/backstage/backstage/commit/8c6c842): **BREAKING**: Removed the deprecated `createSpecializedApp` and `CreateSpecializedAppOptions` exports. Use `prepareSpecializedApp(options).finalize()` and `PrepareSpecializedAppOptions` instead. For sign-in or asynchronous session preparation, render the bootstrap app and subscribe with `onFinalized()` instead of calling `finalize()`.

  Replace `advanced.apis` with `advanced.sessionState` from a previously finalized app to reuse its APIs, identity, and predicate context. Register custom APIs through `ApiBlueprint` extensions rather than passing an arbitrary API holder. Pass a supplied config API through the top-level `config` option. To reuse an identity supplied through the API holder, configure a sign-in page that calls `onSignInSuccess(identityApi)` and use the bootstrap/`onFinalized()` flow; an `ApiBlueprint` cannot override the app's identity proxy.

##### Patch Changes

- [`d514e4d`](https://github.com/backstage/backstage/commit/d514e4d): Updated app options to use the `ExtensionFactoryMiddleware` type from `@backstage/frontend-app-api` instead of the deprecated export from `@backstage/frontend-plugin-api`. Middleware behavior is unchanged.
- [`e55a4a8`](https://github.com/backstage/backstage/commit/e55a4a8): Updated plugin identity handling to use `pluginId`, while preserving support for older plugin instances that only expose `id`.
- [`c147b7a`](https://github.com/backstage/backstage/commit/c147b7a): Fixed disabled external route bindings falling back to their default targets during link resolution.

  Navigation analytics now use the most specific routed extension even when it has no route reference, including nested extensions with an empty path.

### `@backstage/frontend-plugin-api` (0.18.2 → [0.19.0-next.2](../../changelogs/@backstage/frontend-plugin-api.md#0190-next2))

#### 0.19.0-next.2

##### Minor Changes

- [`a5b3445`](https://github.com/backstage/backstage/commit/a5b3445): Added router-independent navigation and routing APIs: `RouterLink`, `AppHistoryApi` with `useAppNavigate`, `useAppHref`, `useAppLocation`, `useAppSearchParams`, and `RouteResolutionApi.resolvePath` for matched routing ancestry. **BREAKING**: `useRouteRefParams` returns only parameters declared by the supplied route ref, with `undefined` for unmatched parameters, and no longer includes the splat `*`. See the [1.57 migration notes](https://backstage.io/docs/frontend-system/architecture/migrations#157) for detailed migration steps.

#### 0.19.0-next.1

##### Minor Changes

- [`d514e4d`](https://github.com/backstage/backstage/commit/d514e4d): **BREAKING**: Removed the deprecated `ExtensionFactoryMiddleware` type export. Import it from `@backstage/frontend-app-api` instead:

  ```diff
  -import type { ExtensionFactoryMiddleware } from '@backstage/frontend-plugin-api';
  +import type { ExtensionFactoryMiddleware } from '@backstage/frontend-app-api';
  ```

  Add `@backstage/frontend-app-api` as a dependency of your app package if it is not already declared. Middleware behavior is unchanged.

- [`62268a9`](https://github.com/backstage/backstage/commit/62268a9): **BREAKING**: Removed the deprecated `AnalyticsImplementationBlueprint` and `AnalyticsImplementationFactory` exports. Import them from `@backstage/plugin-app-react` instead. No changes to their usage are needed beyond updating the imports.
- [`86ff5a3`](https://github.com/backstage/backstage/commit/86ff5a3): Removed the deprecated `PageTab` and `PluginOptions` types. Use `PageLayoutTab` and `CreateFrontendPluginOptions` instead.
- [`dafdab8`](https://github.com/backstage/backstage/commit/dafdab8): **BREAKING**: Removed the deprecated `withApis` export. Wrap class components in a function component that uses `useApi` instead:

  ```tsx
  import { errorApiRef, useApi } from '@backstage/frontend-plugin-api';
  import { MyClassComponent, MyClassComponentProps } from './MyClassComponent';

  export function MyComponent(props: Omit<MyClassComponentProps, 'errorApi'>) {
    const errorApi = useApi(errorApiRef);
    return <MyClassComponent {...props} errorApi={errorApi} />;
  }
  ```

- [`e55a4a8`](https://github.com/backstage/backstage/commit/e55a4a8): **BREAKING**: Removed the deprecated `FrontendPlugin.id` property from the public interface. Use `pluginId` instead. The runtime alias is retained for compatibility with older apps.
- [`d84cf73`](https://github.com/backstage/backstage/commit/d84cf73): Removed the deprecated `DialogApi.show`, `DialogApi.showModal`, and `IconsApi.getIcon` methods. Use `DialogApi.open` with your own dialog presentation, and `IconsApi.icon` to retrieve icon elements.

  The API references now use `core.dialog.v2` and `core.icons.v2`. Upgrade `@backstage/plugin-app` alongside this package, and update custom API implementations to use the new references.

#### 0.18.3-next.0

##### Patch Changes

- [`ac2de0f`](https://github.com/backstage/backstage/commit/ac2de0f): Fixed a "Type instantiation is excessively deep and possibly infinite" error from `createFrontendPlugin` in plugins with many extensions, in particular with TypeScript 5.9 and later. In rare cases, the extensions in the type of a plugin may be in a different order or include extensions that were missing before.
- [`8ca78a2`](https://github.com/backstage/backstage/commit/8ca78a2): Added `coreApis`, a namespace of core Utility API refs. The deprecated Alert API is excluded in favor of Toast. The individual refs with namespace equivalents are deprecated in favor of their `coreApis` equivalents, while remaining compatible. Provider-specific authentication refs remain separate and are not deprecated.

### `@backstage/frontend-test-utils` (0.6.5 → [0.7.0-next.2](../../changelogs/@backstage/frontend-test-utils.md#070-next2))

#### 0.7.0-next.2

##### Minor Changes

- [`2aa14e3`](https://github.com/backstage/backstage/commit/2aa14e3): Added `router` and `renderAs: 'chrome'` options to `renderInTestApp`, an `appHistory` return value on `renderInTestApp` and `renderTestApp`, and mock utilities for navigation tests: `createMockAppHistory`, `createMockRouteResolutionApi`, `mockApis.appHistory()`, and `mockApis.routeResolution()`. See the [1.57 migration notes](https://backstage.io/docs/frontend-system/architecture/migrations#157) for detailed migration steps and the [routing test guide](https://backstage.io/docs/frontend-system/building-plugins/testing#navigation-and-app-history) for examples.

#### 0.7.0-next.1

##### Minor Changes

- [`76b1c3d`](https://github.com/backstage/backstage/commit/76b1c3d): Removed the deprecated standalone mock API type exports. Use the corresponding `mockApis` helpers to create instances and derive types as follows:

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
  | `MockFeatureFlagsApiOptions` | `NonNullable<Parameters<typeof mockApis.featureFlags>[0]>`           |
  | `ErrorWithContext`           | `ReturnType<ReturnType<typeof mockApis.error>['getErrors']>[number]` |

  Import `mockApis` from `@backstage/frontend-test-utils`. For example, use `mockApis.analytics()` to create an analytics mock and `ReturnType<typeof mockApis.analytics>` when you need an explicit instance type. Existing calls to the helpers require no changes. Inspection methods such as `getEvents`, `getErrors`, and `getAlerts`, along with legacy alert support, remain available. `MockFetchApiOptions` remains exported for configuring `mockApis.fetch`.

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

- [`e3d50c4`](https://github.com/backstage/backstage/commit/e3d50c4): Removed the deprecated `show` and `showModal` methods from dialog test helpers, and `getIcon` from icons test helpers. Update tests to use `open` for dialogs and `icon` for icon elements.

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

### `@backstage/plugin-app` (0.5.4 → [0.6.0-next.2](../../changelogs/@backstage/plugin-app.md#060-next2))

#### 0.6.0-next.2

##### Minor Changes

- [`df2bcee`](https://github.com/backstage/backstage/commit/df2bcee): Pages and sub-pages now share app-owned navigation and can use different routing libraries, with implicit React Router v6 compatibility for existing pages. **BREAKING**: Removed the `router` input from `app/root`; remove root router extensions, move global providers to `AppRootWrapperBlueprint`, and use page adapters where needed. See the [1.57 migration notes](https://backstage.io/docs/frontend-system/architecture/migrations#157) for detailed migration steps.

##### Patch Changes

- [`9bac36e`](https://github.com/backstage/backstage/commit/9bac36e): Fixed the app remounting during finalization when root elements are added, for example ones deferred with an `if` predicate. Root elements are now keyed by their extension ID and rendered in a single fixed position, so adding one no longer moves the rest of the app in the React tree.

#### 0.6.0-next.1

##### Minor Changes

- [`cedb355`](https://github.com/backstage/backstage/commit/cedb355): The deprecated `DialogApi.show` and `DialogApi.showModal` methods now throw errors. Use `DialogApi.open` and provide your own dialog surface and dismissal handling.

  Added support for the new icons API while preserving `IconsApi.getIcon` for older plugins.

- [`86681bf`](https://github.com/backstage/backstage/commit/86681bf): Removed the ignored `anchorOrigin` option from the built-in alert display extension and toast display props. Remove this option from your extension configuration. Toasts continue to appear at the bottom center of the screen.
- [`24bde66`](https://github.com/backstage/backstage/commit/24bde66): Custom navigation components now receive `navItems` without the deprecated flat `items` collection.

##### Patch Changes

- [`e55a4a8`](https://github.com/backstage/backstage/commit/e55a4a8): Updated plugin identity handling to use `pluginId`, while preserving support for older plugin instances that only expose `id`.
- [`8f36712`](https://github.com/backstage/backstage/commit/8f36712): Updated the app runtime to use the analytics implementation APIs from `@backstage/plugin-app-react`.

### `@backstage/plugin-app-react` (0.2.8 → [0.3.0-next.2](../../changelogs/@backstage/plugin-app-react.md#030-next2))

#### 0.3.0-next.2

##### Minor Changes

- [`df2bcee`](https://github.com/backstage/backstage/commit/df2bcee): **BREAKING**: Removed `RouterBlueprint`; remove overrides that only install `BrowserRouter`, move global providers to `AppRootWrapperBlueprint`, and render routing adapters inside lazily loaded page components. For custom navigation, provide `AppHistoryApi` through an `ApiBlueprint` factory for `appHistoryApiRef` that is available during initialization without an `if` predicate. See the [1.57 migration notes](https://backstage.io/docs/frontend-system/architecture/migrations#157) for detailed migration steps.

#### 0.3.0-next.1

##### Minor Changes

- [`5c29a89`](https://github.com/backstage/backstage/commit/5c29a89): **BREAKING**: Removed the deprecated flat `items` prop from custom navigation components. Use the `navItems` collection instead.

  Use `navItems.rest()` instead of iterating over `items`. Replace `item.to` with `item.href` and `item.text` with `item.title`. The `item.icon` value is a React element, so render it directly instead of using it as a component type.

### `@backstage/plugin-auth-backend` (0.30.2 → [0.31.0-next.2](../../changelogs/@backstage/plugin-auth-backend.md#0310-next2))

#### 0.31.0-next.2

##### Minor Changes

- [`352ad44`](https://github.com/backstage/backstage/commit/352ad44): **BREAKING**: The deprecated experimental Dynamic Client Registration (DCR) support has been removed. Use Client ID Metadata Documents (CIMD) instead and remove `auth.experimentalDynamicClientRegistration` from your configuration. The database migration deletes registered clients and their authorization and offline sessions, invalidating existing DCR authorization codes and refresh tokens. Users must sign in again through a CIMD client. Already-issued user tokens remain valid until they expire. See the [migration guide](https://backstage.io/docs/ai/mcp-actions#migrating-from-dynamic-client-registration).

##### Patch Changes

- [`5fc15b7`](https://github.com/backstage/backstage/commit/5fc15b7): Fixed authorization-code exchanges to reject supplied client IDs that do not match the client that obtained the code. These requests return `invalid_grant` without consuming the code. Exchanges that omit `client_id` remain supported for older clients but now log a deprecation warning; a future release will require it.
- [`1892d2f`](https://github.com/backstage/backstage/commit/1892d2f): chore(deps): bump `minimatch` from 10.2.6 to 11.0.1

#### 0.30.3-next.1

##### Patch Changes

- [`97ee785`](https://github.com/backstage/backstage/commit/97ee785): Allow Cursor clients to use Client ID Metadata Documents by default.

#### 0.30.3-next.0

##### Patch Changes

- [`8965c27`](https://github.com/backstage/backstage/commit/8965c27): User tokens issued by sign-in resolvers now always have the entity refs in their `sub` and `ent` claims in canonical form, for example `user:default/jane.doe` rather than `User:default/Jane.Doe`, and duplicate `ent` refs are removed. Previously, a custom sign-in resolver could issue valid but non-canonical refs, which then failed to match stored user info and offline sessions on case-sensitive databases.
- [`fa0eb7a`](https://github.com/backstage/backstage/commit/fa0eb7a): Added a `POST /v1/offline-sessions/revoke` endpoint that lets other backend services revoke all offline sessions (refresh tokens) of a user. The endpoint only accepts service credentials, records an audit event, and is only available when `auth.experimentalRefreshToken.enabled` is set.
- [`918ca98`](https://github.com/backstage/backstage/commit/918ca98): Updated dependency `jose` to `^6.1.0`. Existing ES256 token issuance and verification are unchanged. ML-DSA algorithms can be used when the runtime supports them.

### `@backstage/plugin-scaffolder-backend-module-gcp` (0.2.26 → [0.3.0-next.1](../../changelogs/@backstage/plugin-scaffolder-backend-module-gcp.md#030-next1))

#### 0.3.0-next.0

##### Minor Changes

- [`44d5ba2`](https://github.com/backstage/backstage/commit/44d5ba2): **BREAKING**: The backend's Google Cloud credentials now require the `storage.objects.list` permission on the configured task recovery bucket, in addition to the existing object permissions. Grant this permission before upgrading.

  Fixed task recovery workspace saves failing with Google Cloud Storage rate limit errors when template steps finish in quick succession. Each snapshot is saved to a separate object, and recovery continues to support snapshots from older versions.

### `@backstage/ui` (0.19.0 → [0.20.0-next.0](../../changelogs/@backstage/ui.md#0200-next0))

#### 0.20.0-next.0

##### Minor Changes

- [`f4d8adf`](https://github.com/backstage/backstage/commit/f4d8adf): **BREAKING**: Backstage UI now uses explicit routing integration and React Aria's native link behavior: standalone apps that relied on automatic React Router integration must supply `BUIProvider` with a `useNavigation` hook, React Router is no longer a peer dependency, and `routerOptions` now supports only the router-neutral `replace` and `state` fields. **BREAKING**: Link targets using `javascript:`, `data:`, or `vbscript:` become inert `about:blank` links with a console warning. See the [1.57 migration notes](https://backstage.io/docs/frontend-system/architecture/migrations#157) for detailed migration steps and the [BUI routing migration guide](https://backstage.io/docs/frontend-system/building-plugins/page-routers#migrate-backstage-ui-routing) for integration requirements.

  Affected components: BUIProvider, ButtonLink, Card, Combobox, Header, Link, List, Menu, PluginHeader, SearchAutocomplete, Select, Table, Tabs, TagGroup

##### Patch Changes

- [`9120c46`](https://github.com/backstage/backstage/commit/9120c46): Updated dependency `glob` to `^14.0.0`.
- [`065d1e3`](https://github.com/backstage/backstage/commit/065d1e3): Fixed `useTable` in complete mode showing an empty page labelled "NaN - NaN of N" when `paginationOptions` switched from `type: 'none'` to paged pagination after mount.

  **Affected components:** `useTable`

## Major version bumps

### `@backstage/plugin-scaffolder-react` (2.1.1 → [3.0.0-next.2](../../changelogs/@backstage/plugin-scaffolder-react.md#300-next2))

#### 3.0.0-next.2

##### Patch Changes

- [`e8c4fb9`](https://github.com/backstage/backstage/commit/e8c4fb9): Improved screen reader support in the BUI scaffolder form theme: array item controls include the item name in their labels.
- [`818fbd6`](https://github.com/backstage/backstage/commit/818fbd6): The BUI form theme now renders a multi-select dropdown for array fields with unique `enum` items, and focus/blur events now report the selected values correctly.

#### 3.0.0-next.1

##### Minor Changes

- [`ff0ef74`](https://github.com/backstage/backstage/commit/ff0ef74): The scaffolder wizard now shows or hides parameter steps based on their `when` condition, and values from hidden steps are left out of the submitted parameters.

#### 3.0.0-next.0

##### Minor Changes

- [`3fe82f6`](https://github.com/backstage/backstage/commit/3fe82f6): Added a `ScaffolderTemplateFilterBlueprint` that lets apps filter the new frontend system's template list using identity, catalog, or other viewer-specific state.

##### Patch Changes

- [`1c461ca`](https://github.com/backstage/backstage/commit/1c461ca): Fixed BUI array item headings to use the item schema title and honor an explicit item `ui:title` without adding a numeric suffix. Untitled items retain the numbered fallback.

## 0.x minor version bumps

### `@backstage/backend-defaults` (0.18.1 → [0.19.0-next.2](../../changelogs/@backstage/backend-defaults.md#0190-next2))

#### 0.19.0-next.2

##### Minor Changes

- [`250e4c3`](https://github.com/backstage/backstage/commit/250e4c3): Add support for the new WebSocket routing APIs.

  Existing server upgrade listeners can coexist during migration and receive unmatched upgrades. Multiple listeners produce a warning; migrate custom upgrade handling to the router API to avoid handling the same socket twice. Installing a plugin that registers a WebSocket route, such as signals, activates the server-level upgrade listener. Upgrades handled only through Express, such as the Kubernetes proxy, must migrate to this API; otherwise, unmatched upgrades receive 404 responses when this is the only server-level listener.

##### Patch Changes

- [`5eb2381`](https://github.com/backstage/backstage/commit/5eb2381): Updated a documentation link for `DefaultRootHttpRouter` to point to the `coreServices.rootHttpRouter` service reference.
- [`1892d2f`](https://github.com/backstage/backstage/commit/1892d2f): chore(deps): bump `minimatch` from 10.2.6 to 11.0.1

#### 0.18.2-next.1

##### Patch Changes

- [`f81ca4e`](https://github.com/backstage/backstage/commit/f81ca4e): The AWS S3 URL reader no longer assumes the configured `roleArn` a second time when the matching account under `aws.accounts` already provides credentials for that exact role, for example through a web identity token file. Previously the role had to trust itself for this setup to work. The role is still assumed explicitly when the integration sets an `externalId`.
- [`9fc68ae`](https://github.com/backstage/backstage/commit/9fc68ae): Fixed the `valkey` cache store sharing keys between plugins. Two plugins that cached a value under the same key could read and overwrite each other's entries. Keys are now stored under the plugin namespace, the same way the `redis` store does it. Cache entries now use new key names, so existing entries are no longer read and are rebuilt as plugins write new values. Old entries stay in Valkey until their TTL expires. Entries without a TTL, and the per-plugin key index sets that the old layout created, stay until you remove them manually.

#### 0.18.2-next.0

##### Patch Changes

- [`80cc892`](https://github.com/backstage/backstage/commit/80cc892): Removed the runtime dependency on `@backstage/cli-node`, which was only used for types. Backends no longer install the CLI tooling packages through `@backstage/backend-defaults`.
- [`918ca98`](https://github.com/backstage/backstage/commit/918ca98): Updated dependency `jose` to `^6.1.0`. Existing ES256 token issuance and verification are unchanged. ML-DSA algorithms can be used when the runtime supports them.

### `@backstage/plugin-events-node` (0.4.27 → [0.5.0-next.2](../../changelogs/@backstage/plugin-events-node.md#050-next2))

#### 0.5.0-next.1

##### Minor Changes

- [`a70aaea`](https://github.com/backstage/backstage/commit/a70aaea): The requests passed to request validators now include the parsed query string. The request rejection details now also
  support an optional `contentType` option for the provided payload, defaulting to `application/json` but also allowing
  `text/plain`.

## 0.0.x patch version bumps

### `@backstage/plugin-kubernetes-cluster` (0.0.42 → [0.0.43-next.1](../../changelogs/@backstage/plugin-kubernetes-cluster.md#0043-next1))

#### 0.0.43-next.0

##### Patch Changes

- [`ca14116`](https://github.com/backstage/backstage/commit/ca14116): Moved `kubernetes-models` and `@kubernetes-models/apimachinery` to dev dependencies, since they are only used for types. Backends no longer install `kubernetes-models` through `@backstage/plugin-kubernetes-common`.

### `@backstage/release-manifests` (0.0.15 → [0.0.16-next.0](../../changelogs/@backstage/release-manifests.md#0016-next0))

#### 0.0.16-next.0

##### Patch Changes

- [`b8777d1`](https://github.com/backstage/backstage/commit/b8777d1): Updated the `requirements` example in the README to the Node.js 24 and 26 range.

## 0.x patch version bumps

### `@backstage/backend-dynamic-feature-service` (0.8.8 → [0.8.9-next.2](../../changelogs/@backstage/backend-dynamic-feature-service.md#089-next2))

#### 0.8.9-next.2

##### Patch Changes

- [`ed8f1ef`](https://github.com/backstage/backstage/commit/ed8f1ef): Updated dependency `@module-federation/sdk` to `~2.9.0`.
  Updated dependency `@module-federation/enhanced` to `~2.9.0`.
  Updated dependency `@module-federation/runtime` to `~2.9.0`.
  Updated dependency `@module-federation/runtime-core` to `~2.9.0`.

#### 0.8.9-next.0

##### Patch Changes

- [`c999b77`](https://github.com/backstage/backstage/commit/c999b77): Dynamic backend plugins can now require the packages they share with the backend when those packages are not in the root `node_modules`, as with the pnpm `isolated` node linker. They are found through the backend package and through this package. With the default pnpm hoisting, this includes the packages that pnpm hoists into `node_modules/.pnpm/node_modules`. With `hoist: false`, only the direct dependencies of the backend package and of this package are found. Everything that was searched before is still searched first, so a module that was found before is found in the same place. The exception is plugins inside the Backstage root on Windows, which did not search the root `node_modules` before, other than through `NODE_PATH`. It is now searched in the same order as on other platforms.

### `@backstage/backend-openapi-utils` (0.7.3 → [0.7.4-next.1](../../changelogs/@backstage/backend-openapi-utils.md#074-next1))

#### 0.7.4-next.1

##### Patch Changes

- [`5695308`](https://github.com/backstage/backstage/commit/5695308): Fixed response validation so that an empty response body for a JSON response now reports that the body is required but missing, instead of failing with a JSON parse error when the response schema declares required properties.

### `@backstage/cli` (0.36.7 → [0.36.8-next.2](../../changelogs/@backstage/cli.md#0368-next2))

#### 0.36.8-next.2

##### Patch Changes

- [`9120c46`](https://github.com/backstage/backstage/commit/9120c46): Updated dependency `glob` to `^14.0.0`.

#### 0.36.8-next.1

##### Patch Changes

- [`04a54e2`](https://github.com/backstage/backstage/commit/04a54e2): Switched the compilation target to ES2024, which all supported Node.js versions fully support. Package builds, app bundles, and the backend development server now compile code for ES2024, and the TypeScript `target` and `lib` options in `@backstage/cli/config/tsconfig.json` are set to `ES2024`. This requires TypeScript 5.9 or later, which is now the oldest supported version according to the [versioning policy](https://backstage.io/docs/overview/versioning-policy#typescript-releases).

  The `lib` change allows code to use ES2024 built-in APIs such as `Object.groupBy` and `Promise.withResolvers`. Backstage doesn't include polyfills, so frontend code that uses these APIs needs at least Chrome or Edge 119, Firefox 121, or Safari 17.4.

### `@backstage/cli-module-auth` (0.1.5 → [0.1.6-next.1](../../changelogs/@backstage/cli-module-auth.md#016-next1))

#### 0.1.6-next.1

##### Patch Changes

- [`5fc15b7`](https://github.com/backstage/backstage/commit/5fc15b7): Fixed `auth login` to include the CLI's client ID when exchanging authorization codes, supporting auth backends that enforce client ID binding.
- [`9120c46`](https://github.com/backstage/backstage/commit/9120c46): Updated dependency `glob` to `^14.0.0`.

#### 0.1.6-next.0

##### Patch Changes

- [`4d94005`](https://github.com/backstage/backstage/commit/4d94005): Fixed `auth logout` so that it revokes the refresh token on the server. Previously the revocation request was rejected because it did not identify the CLI client, which left the session valid until it expired.

### `@backstage/cli-module-build` (0.1.9 → [0.1.10-next.2](../../changelogs/@backstage/cli-module-build.md#0110-next2))

#### 0.1.10-next.2

##### Patch Changes

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

#### 0.1.10-next.1

##### Patch Changes

- [`04a54e2`](https://github.com/backstage/backstage/commit/04a54e2): Switched the compilation target to ES2024, which all supported Node.js versions fully support. Package builds, app bundles, and the backend development server now compile code for ES2024, and the TypeScript `target` and `lib` options in `@backstage/cli/config/tsconfig.json` are set to `ES2024`. This requires TypeScript 5.9 or later, which is now the oldest supported version according to the [versioning policy](https://backstage.io/docs/overview/versioning-policy#typescript-releases).

  The `lib` change allows code to use ES2024 built-in APIs such as `Object.groupBy` and `Promise.withResolvers`. Backstage doesn't include polyfills, so frontend code that uses these APIs needs at least Chrome or Edge 119, Firefox 121, or Safari 17.4.

### `@backstage/cli-module-info` (0.1.5 → [0.1.6-next.1](../../changelogs/@backstage/cli-module-info.md#016-next1))

#### 0.1.6-next.1

##### Patch Changes

- [`1892d2f`](https://github.com/backstage/backstage/commit/1892d2f): chore(deps): bump `minimatch` from 10.2.6 to 11.0.1

### `@backstage/cli-module-migrate` (0.2.2 → [0.2.3-next.2](../../changelogs/@backstage/cli-module-migrate.md#023-next2))

#### 0.2.3-next.2

##### Patch Changes

- [`1892d2f`](https://github.com/backstage/backstage/commit/1892d2f): chore(deps): bump `minimatch` from 10.2.6 to 11.0.1

### `@backstage/cli-module-new` (0.1.8 → [0.1.9-next.2](../../changelogs/@backstage/cli-module-new.md#019-next2))

#### 0.1.9-next.2

##### Patch Changes

- [`b937434`](https://github.com/backstage/backstage/commit/b937434): Fixed `backstage-cli new` rewriting the entire `CODEOWNERS` file when an owner is provided. Existing content, including comments and formatting, is now preserved and a single repository-relative entry such as `/packages/my-lib/ @org/team` is appended, rather than an entry with an absolute filesystem path.
- [`c009ae4`](https://github.com/backstage/backstage/commit/c009ae4): The `frontend-plugin` template now declares package info: the generated `package.json` exports `./package.json`, and the plugin passes `info: { packageJson: () => import('../package.json') }` to `createFrontendPlugin`.
- [`500f8ff`](https://github.com/backstage/backstage/commit/500f8ff): Templates now depend on `@testing-library/react` 16 together with `@testing-library/dom` 10, which React Testing Library 16 requires as a peer dependency and which matches `@backstage/frontend-test-utils`.
- [`c584676`](https://github.com/backstage/backstage/commit/c584676): Template version hints are now treated as a minimum version within their caret range, that is the same major version, or the same minor version for `0.x` hints. When the lockfile already contains a range for a dependency that resolves to the hinted version or a newer compatible one, `backstage-cli new` reuses the highest such range instead of adding an older one, which avoids duplicate dependency versions.

#### 0.1.9-next.1

##### Patch Changes

- [`e769ccb`](https://github.com/backstage/backstage/commit/e769ccb): Fix an issue where creating a new package with the `cli-module` role would crash during the installation phase due to an unhandled role mapping.
- [`33894d6`](https://github.com/backstage/backstage/commit/33894d6): Fixed an issue where scaffolding templates on Windows could generate corrupted file names for files in subdirectories.

### `@backstage/cli-module-package-manager-yarn` (0.1.4 → [0.1.5-next.2](../../changelogs/@backstage/cli-module-package-manager-yarn.md#015-next2))

#### 0.1.5-next.0

##### Patch Changes

- [`1cffd6f`](https://github.com/backstage/backstage/commit/1cffd6f): Made `@yarnpkg/cli`, `@yarnpkg/core`, and `@yarnpkg/plugin-patch` optional peer dependencies. `@yarnpkg/core@4.9.2` was published with a dependency on a patch file that only exists in the Yarn repository, which made installation fail for all projects depending on this module. To use the `pm verify-patches` command until this is fixed upstream, add these packages as `devDependencies` in your root `package.json`, together with the resolution `"@yarnpkg/core/got": "npm:^11.8.6"`. They will become regular dependencies again once a fixed version of `@yarnpkg/core` is published.

### `@backstage/cli-module-test-jest` (0.1.7 → [0.1.8-next.1](../../changelogs/@backstage/cli-module-test-jest.md#018-next1))

#### 0.1.8-next.1

##### Patch Changes

- [`9120c46`](https://github.com/backstage/backstage/commit/9120c46): Updated dependency `glob` to `^14.0.0`.

### `@backstage/cli-node` (0.3.5 → [0.3.6-next.2](../../changelogs/@backstage/cli-node.md#036-next2))

#### 0.3.6-next.2

##### Patch Changes

- [`8069934`](https://github.com/backstage/backstage/commit/8069934): Fixed the Node.js module transform loading ES module JavaScript files from packages without a `"type"` field as CommonJS, which broke named imports such as `import { DefaultGithubCredentialsProvider } from '@backstage/integration'` during local development. The format of these files is now detected by Node.js, while TypeScript files in such packages are still treated as CommonJS.

#### 0.3.6-next.1

##### Patch Changes

- [`a96b99c`](https://github.com/backstage/backstage/commit/a96b99c): The Node.js module transform now uses the synchronous `module.registerHooks()` API when it is available, which avoids the `module.register()` deprecation warning printed by Node.js 26. On older Node.js versions it continues to use `module.register()`.
- [`04a54e2`](https://github.com/backstage/backstage/commit/04a54e2): Switched the compilation target to ES2024, which all supported Node.js versions fully support. Package builds, app bundles, and the backend development server now compile code for ES2024, and the TypeScript `target` and `lib` options in `@backstage/cli/config/tsconfig.json` are set to `ES2024`. This requires TypeScript 5.9 or later, which is now the oldest supported version according to the [versioning policy](https://backstage.io/docs/overview/versioning-policy#typescript-releases).

  The `lib` change allows code to use ES2024 built-in APIs such as `Object.groupBy` and `Promise.withResolvers`. Backstage doesn't include polyfills, so frontend code that uses these APIs needs at least Chrome or Edge 119, Firefox 121, or Safari 17.4.

#### 0.3.6-next.0

##### Patch Changes

- [`4294614`](https://github.com/backstage/backstage/commit/4294614): Commands run through `runCli` now exit with the exit code they set, instead of always exiting with `0` on completion. For example, `catalog validate` and `template dry-run` now exit with a non-zero code when the input is invalid.

### `@backstage/core-components` (0.18.15 → [0.18.16-next.1](../../changelogs/@backstage/core-components.md#01816-next1))

#### 0.18.16-next.1

##### Patch Changes

- [`cac9654`](https://github.com/backstage/backstage/commit/cac9654): `MarkdownContent` now loads `react-markdown` and its `remark` and `rehype` plugins the first time it renders, instead of with the app. This keeps them out of the app's startup bundle. Markdown appears once the renderer has loaded, so tests that look for rendered markdown right after a synchronous `render` may need to use `findBy*` queries instead.

### `@backstage/create-app` (0.9.3 → [0.9.4-next.2](../../changelogs/@backstage/create-app.md#094-next2))

#### 0.9.4-next.2

##### Patch Changes

- Bumped create-app version.

#### 0.9.4-next.1

##### Patch Changes

- [`04a54e2`](https://github.com/backstage/backstage/commit/04a54e2): Bumped TypeScript in the app templates to `~5.9.0`.
- [`b8777d1`](https://github.com/backstage/backstage/commit/b8777d1): New apps now support Node.js 24 and 26, in line with the [versioning policy](https://backstage.io/docs/overview/versioning-policy#nodejs-releases). The `engines` field in the app template is set to `^24.15.0 || ^26.13.0`, and creating a new app now requires Node.js 24 (24.15.0 or later) or Node.js 26 (26.13.0 or later). 24.15.0 is the lowest version that all dependencies support, and 26.13.0 is the first Node.js 26 LTS release.

  To update an existing app, set `engines.node` in your root `package.json` to `^24.15.0 || ^26.13.0`, and update the Node.js version used in your CI workflows and `Dockerfile` if needed.

  If your `yarn.lock` resolves `avsc` to a version older than 5.7.8, run `yarn up -R avsc`. Those versions crash on load on Node.js 25 and later, which breaks Jest tests that import the AsyncAPI widget from `@backstage/plugin-api-docs`. If it resolves `node-gyp` to 12.3.0, run `yarn up -R node-gyp`, since that version can't download Node.js headers through a proxy on Node.js 26.

#### 0.9.4-next.0

##### Patch Changes

- [`77f9227`](https://github.com/backstage/backstage/commit/77f9227): New apps now declare support for light and dark color schemes and apply the stored theme choice before the app loads. The browser's default page background, scrollbars and form controls then match the theme during loading, instead of always starting out light. A new `public/theme.js` applies a stored light or dark choice, and the OS preference is used otherwise.

  To add this to an existing app, copy `packages/app/public/theme.js` from a newly created app, and add `<meta name="color-scheme" content="light dark" />` and `<script src="<%= publicPath %>/theme.js"></script>` to the `<head>` of `packages/app/public/index.html`.

### `@backstage/eslint-plugin` (0.3.3 → [0.3.4-next.1](../../changelogs/@backstage/eslint-plugin.md#034-next1))

#### 0.3.4-next.1

##### Patch Changes

- [`1892d2f`](https://github.com/backstage/backstage/commit/1892d2f): chore(deps): bump `minimatch` from 10.2.6 to 11.0.1

#### 0.3.4-next.0

##### Patch Changes

- [`245d9e3`](https://github.com/backstage/backstage/commit/245d9e3): Internal changes for TypeScript 7 compatibility. The rules work the same as before.

### `@backstage/frontend-defaults` (0.5.7 → [0.5.8-next.2](../../changelogs/@backstage/frontend-defaults.md#058-next2))

#### 0.5.8-next.2

##### Patch Changes

- [`2aa14e3`](https://github.com/backstage/backstage/commit/2aa14e3): Apps now release their browser history listener when the React root is removed or a hot refresh replaces the app within the existing root. See the [1.57 migration notes](https://backstage.io/docs/frontend-system/architecture/migrations#157) for background on app-owned history.

#### 0.5.8-next.1

##### Patch Changes

- [`d514e4d`](https://github.com/backstage/backstage/commit/d514e4d): Updated app options to use the `ExtensionFactoryMiddleware` type from `@backstage/frontend-app-api` instead of the deprecated export from `@backstage/frontend-plugin-api`. Middleware behavior is unchanged.

### `@backstage/frontend-dynamic-feature-loader` (0.1.17 → [0.1.18-next.2](../../changelogs/@backstage/frontend-dynamic-feature-loader.md#0118-next2))

#### 0.1.18-next.2

##### Patch Changes

- [`ed8f1ef`](https://github.com/backstage/backstage/commit/ed8f1ef): Updated dependency `@module-federation/sdk` to `~2.9.0`.
  Updated dependency `@module-federation/enhanced` to `~2.9.0`.
  Updated dependency `@module-federation/runtime` to `~2.9.0`.
  Updated dependency `@module-federation/runtime-core` to `~2.9.0`.

### `@backstage/integration-aws-node` (0.2.3 → [0.2.4-next.1](../../changelogs/@backstage/integration-aws-node.md#024-next1))

#### 0.2.4-next.0

##### Patch Changes

- [`f81ca4e`](https://github.com/backstage/backstage/commit/f81ca4e): Credential providers returned by `DefaultAwsCredentialsManager` now include a `roleArn` field with the ARN of the IAM role the credentials are for, when the account is configured to assume a role.

### `@backstage/module-federation-common` (0.1.6 → [0.1.7-next.0](../../changelogs/@backstage/module-federation-common.md#017-next0))

#### 0.1.7-next.0

##### Patch Changes

- [`ed8f1ef`](https://github.com/backstage/backstage/commit/ed8f1ef): Updated dependency `@module-federation/sdk` to `~2.9.0`.
  Updated dependency `@module-federation/enhanced` to `~2.9.0`.
  Updated dependency `@module-federation/runtime` to `~2.9.0`.
  Updated dependency `@module-federation/runtime-core` to `~2.9.0`.

### `@backstage/plugin-app-backend` (0.5.19 → [0.5.20-next.1](../../changelogs/@backstage/plugin-app-backend.md#0520-next1))

#### 0.5.20-next.0

##### Patch Changes

- [`11f4455`](https://github.com/backstage/backstage/commit/11f4455): Documented that if your package manager doesn't hoist workspace packages, for example pnpm with `hoistWorkspacePackages: false`, you need to add the app package to the `dependencies` of the root `package.json`.
- [`2fea3e2`](https://github.com/backstage/backstage/commit/2fea3e2): Reduced startup database traffic and memory usage when checking for previously cached static assets.

### `@backstage/plugin-auth-backend-module-auth0-provider` (0.4.6 → [0.4.7-next.1](../../changelogs/@backstage/plugin-auth-backend-module-auth0-provider.md#047-next1))

#### 0.4.7-next.0

##### Patch Changes

- [`918ca98`](https://github.com/backstage/backstage/commit/918ca98): Updated dependency `jose` to `^6.1.0`. Existing ES256 token issuance and verification are unchanged. ML-DSA algorithms can be used when the runtime supports them.

### `@backstage/plugin-auth-backend-module-aws-alb-provider` (0.4.21 → [0.4.22-next.1](../../changelogs/@backstage/plugin-auth-backend-module-aws-alb-provider.md#0422-next1))

#### 0.4.22-next.0

##### Patch Changes

- [`918ca98`](https://github.com/backstage/backstage/commit/918ca98): Updated dependency `jose` to `^6.1.0`. Existing ES256 token issuance and verification are unchanged. ML-DSA algorithms can be used when the runtime supports them.

### `@backstage/plugin-auth-backend-module-azure-easyauth-provider` (0.2.25 → [0.2.26-next.1](../../changelogs/@backstage/plugin-auth-backend-module-azure-easyauth-provider.md#0226-next1))

#### 0.2.26-next.0

##### Patch Changes

- [`918ca98`](https://github.com/backstage/backstage/commit/918ca98): Updated dependency `jose` to `^6.1.0`. Existing ES256 token issuance and verification are unchanged. ML-DSA algorithms can be used when the runtime supports them.

### `@backstage/plugin-auth-backend-module-cloudflare-access-provider` (0.5.1 → [0.5.2-next.1](../../changelogs/@backstage/plugin-auth-backend-module-cloudflare-access-provider.md#052-next1))

#### 0.5.2-next.0

##### Patch Changes

- [`918ca98`](https://github.com/backstage/backstage/commit/918ca98): Updated dependency `jose` to `^6.1.0`. Existing ES256 token issuance and verification are unchanged. ML-DSA algorithms can be used when the runtime supports them.

### `@backstage/plugin-auth-backend-module-microsoft-provider` (0.3.20 → [0.3.21-next.1](../../changelogs/@backstage/plugin-auth-backend-module-microsoft-provider.md#0321-next1))

#### 0.3.21-next.0

##### Patch Changes

- [`918ca98`](https://github.com/backstage/backstage/commit/918ca98): Updated dependency `jose` to `^6.1.0`. Existing ES256 token issuance and verification are unchanged. ML-DSA algorithms can be used when the runtime supports them.

### `@backstage/plugin-auth-backend-module-oauth2-proxy-provider` (0.3.4 → [0.3.5-next.1](../../changelogs/@backstage/plugin-auth-backend-module-oauth2-proxy-provider.md#035-next1))

#### 0.3.5-next.0

##### Patch Changes

- [`918ca98`](https://github.com/backstage/backstage/commit/918ca98): Updated dependency `jose` to `^6.1.0`. Existing ES256 token issuance and verification are unchanged. ML-DSA algorithms can be used when the runtime supports them.

### `@backstage/plugin-auth-backend-module-oidc-provider` (0.4.22 → [0.4.23-next.1](../../changelogs/@backstage/plugin-auth-backend-module-oidc-provider.md#0423-next1))

#### 0.4.23-next.0

##### Patch Changes

- [`918ca98`](https://github.com/backstage/backstage/commit/918ca98): Updated dependency `jose` to `^6.1.0`. Existing ES256 token issuance and verification are unchanged. ML-DSA algorithms can be used when the runtime supports them.

### `@backstage/plugin-auth-backend-module-pinniped-provider` (0.3.19 → [0.3.20-next.1](../../changelogs/@backstage/plugin-auth-backend-module-pinniped-provider.md#0320-next1))

#### 0.3.20-next.0

##### Patch Changes

- [`918ca98`](https://github.com/backstage/backstage/commit/918ca98): Updated dependency `jose` to `^6.1.0`. Existing ES256 token issuance and verification are unchanged. ML-DSA algorithms can be used when the runtime supports them.

### `@backstage/plugin-auth-backend-module-vmware-cloud-provider` (0.5.19 → [0.5.20-next.1](../../changelogs/@backstage/plugin-auth-backend-module-vmware-cloud-provider.md#0520-next1))

#### 0.5.20-next.0

##### Patch Changes

- [`918ca98`](https://github.com/backstage/backstage/commit/918ca98): Updated dependency `jose` to `^6.1.0`. Existing ES256 token issuance and verification are unchanged. ML-DSA algorithms can be used when the runtime supports them.

### `@backstage/plugin-auth-node` (0.7.7 → [0.7.8-next.2](../../changelogs/@backstage/plugin-auth-node.md#078-next2))

#### 0.7.8-next.0

##### Patch Changes

- [`918ca98`](https://github.com/backstage/backstage/commit/918ca98): Updated dependency `jose` to `^6.1.0`. Existing ES256 token issuance and verification are unchanged. ML-DSA algorithms can be used when the runtime supports them.

### `@backstage/plugin-catalog-backend-module-ai-model` (0.1.5 → [0.1.6-next.2](../../changelogs/@backstage/plugin-catalog-backend-module-ai-model.md#016-next2))

#### 0.1.6-next.1

##### Patch Changes

- [`f74cd6a`](https://github.com/backstage/backstage/commit/f74cd6a): Document how to declare relation pairs for custom kinds when using the catalog model layer.

### `@backstage/plugin-catalog-backend-module-github` (0.14.1 → [0.14.2-next.2](../../changelogs/@backstage/plugin-catalog-backend-module-github.md#0142-next2))

#### 0.14.2-next.2

##### Patch Changes

- [`1892d2f`](https://github.com/backstage/backstage/commit/1892d2f): chore(deps): bump `minimatch` from 10.2.6 to 11.0.1
- [`d926160`](https://github.com/backstage/backstage/commit/d926160): Added `fetchEmailForGithubApps` config option to the GitHub org entity providers (`GithubOrgEntityProvider` and `GithubMultiOrgEntityProvider`). When enabled, the provider requests the public email field from the GitHub GraphQL API even when using a GitHub App for authentication. By default, the public email is only requested with personal access tokens due to a historical GitHub API limitation that may no longer apply to all instances. If the GitHub instance does not support this, the user sync will fail — only enable it after confirming your GitHub App can access user emails.

### `@backstage/plugin-catalog-backend-module-github-org` (0.3.27 → [0.3.28-next.2](../../changelogs/@backstage/plugin-catalog-backend-module-github-org.md#0328-next2))

#### 0.3.28-next.2

##### Patch Changes

- [`d926160`](https://github.com/backstage/backstage/commit/d926160): Added `fetchEmailForGithubApps` config option to the GitHub org entity providers (`GithubOrgEntityProvider` and `GithubMultiOrgEntityProvider`). When enabled, the provider requests the public email field from the GitHub GraphQL API even when using a GitHub App for authentication. By default, the public email is only requested with personal access tokens due to a historical GitHub API limitation that may no longer apply to all instances. If the GitHub instance does not support this, the user sync will fail — only enable it after confirming your GitHub App can access user emails.

### `@backstage/plugin-catalog-backend-module-gitlab` (0.8.10 → [0.8.10-next.2](../../changelogs/@backstage/plugin-catalog-backend-module-gitlab.md#0810-next2))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.9.0 → [0.9.1-next.2](../../changelogs/@backstage/plugin-catalog-backend-module-incremental-ingestion.md#091-next2))

#### 0.9.1-next.1

##### Patch Changes

- [`7baaad7`](https://github.com/backstage/backstage/commit/7baaad7): Fixed incremental ingestion getting stuck when a provider emits the same entity more than once in a single page or event. Since the previous release, this made every attempt to ingest that page fail on PostgreSQL with `ON CONFLICT DO UPDATE command cannot affect row a second time`, so the provider never got past it. Now only the last copy of each entity is kept. A warning names the provider and some of the repeated entity refs, at most once every 10 minutes per provider.

  Providers should still emit each entity at most once per page. If the copies differ and arrive in a different order on each run, the stored entity can change on every run.

### `@backstage/plugin-catalog-backend-module-unprocessed` (0.6.17 → [0.6.18-next.1](../../changelogs/@backstage/plugin-catalog-backend-module-unprocessed.md#0618-next1))

#### 0.6.18-next.0

##### Patch Changes

- [`af39b90`](https://github.com/backstage/backstage/commit/af39b90): Fixed pending entities being returned without their entity ID and entity ref.

### `@backstage/plugin-devtools` (0.1.44 → [0.1.45-next.2](../../changelogs/@backstage/plugin-devtools.md#0145-next2))

#### 0.1.45-next.2

##### Patch Changes

- [`ca1165d`](https://github.com/backstage/backstage/commit/ca1165d): Fixed an issue in `ScheduledTasksContent` where actual backend error messages (such as network or authorization errors) were discarded in favor of a hardcoded "No scheduled tasks found" message, and ensured the loading indicator is displayed while switching plugins.

### `@backstage/plugin-events-backend` (0.6.7 → [0.6.8-next.2](../../changelogs/@backstage/plugin-events-backend.md#068-next2))

#### 0.6.8-next.1

##### Patch Changes

- [`a70aaea`](https://github.com/backstage/backstage/commit/a70aaea): The requests passed to request validators now include the parsed query string. The request rejection details now also
  support an optional `contentType` option for the provided payload, defaulting to `application/json` but also allowing
  `text/plain`.

#### 0.6.8-next.0

##### Patch Changes

- [`a1ca033`](https://github.com/backstage/backstage/commit/a1ca033): Fixed the database event bus listener connection inheriting the trace context of the request that first opened it. Its keepalive queries are now recorded as separate root spans instead of being attached to that request's trace for as long as the connection stays open.

### `@backstage/plugin-events-backend-module-google-pubsub` (0.2.8 → [0.2.9-next.2](../../changelogs/@backstage/plugin-events-backend-module-google-pubsub.md#029-next2))

#### 0.2.9-next.1

##### Patch Changes

- [`b03427c`](https://github.com/backstage/backstage/commit/b03427c): Updated dependency `@google-cloud/pubsub` to `^6.3.2`. The new version requires Node.js 22 or later, which matches the Node.js versions that Backstage supports.

### `@backstage/plugin-kubernetes-backend` (0.21.12 → [0.21.13-next.2](../../changelogs/@backstage/plugin-kubernetes-backend.md#02113-next2))

#### 0.21.13-next.1

##### Patch Changes

- [`68abde4`](https://github.com/backstage/backstage/commit/68abde4): Allow AWS Kubernetes clusters to select credentials from a configured AWS account without assuming another role. Set `kubernetes.io/aws-account-id` in the cluster's auth metadata to use that account's credentials directly, including credentials obtained through web identity federation.

### `@backstage/plugin-kubernetes-common` (0.9.14 → [0.9.15-next.2](../../changelogs/@backstage/plugin-kubernetes-common.md#0915-next2))

#### 0.9.15-next.1

##### Patch Changes

- [`68abde4`](https://github.com/backstage/backstage/commit/68abde4): Allow AWS Kubernetes clusters to select credentials from a configured AWS account without assuming another role. Set `kubernetes.io/aws-account-id` in the cluster's auth metadata to use that account's credentials directly, including credentials obtained through web identity federation.

#### 0.9.15-next.0

##### Patch Changes

- [`ca14116`](https://github.com/backstage/backstage/commit/ca14116): Moved `kubernetes-models` and `@kubernetes-models/apimachinery` to dev dependencies, since they are only used for types. Backends no longer install `kubernetes-models` through `@backstage/plugin-kubernetes-common`.

### `@backstage/plugin-mcp-actions-backend` (0.2.3 → [0.2.4-next.2](../../changelogs/@backstage/plugin-mcp-actions-backend.md#024-next2))

#### 0.2.4-next.2

##### Patch Changes

- [`1892d2f`](https://github.com/backstage/backstage/commit/1892d2f): chore(deps): bump `minimatch` from 10.2.6 to 11.0.1

### `@backstage/plugin-notifications` (0.6.1 → [0.6.2-next.2](../../changelogs/@backstage/plugin-notifications.md#062-next2))

#### 0.6.2-next.1

##### Patch Changes

- [`555d6ff`](https://github.com/backstage/backstage/commit/555d6ff): Updated custom notification icons to use the element-based icons API. Missing icons still fall back to the notification severity icon.

### `@backstage/plugin-notifications-backend` (0.6.10 → [0.6.11-next.2](../../changelogs/@backstage/plugin-notifications-backend.md#0611-next2))

#### 0.6.11-next.1

##### Patch Changes

- [`c0ea056`](https://github.com/backstage/backstage/commit/c0ea056): Fixed broadcast notifications losing their saved status when marked as read or unread, and losing their read status when saved or unsaved.

### `@backstage/plugin-scaffolder-backend-module-gitlab` (0.12.1 → [0.12.2-next.1](../../changelogs/@backstage/plugin-scaffolder-backend-module-gitlab.md#0122-next1))

#### 0.12.2-next.0

##### Patch Changes

- [`ae86338`](https://github.com/backstage/backstage/commit/ae86338): Added GitLab branch autocompletion to RepoBranchPicker using user SCM credentials.
- [`ed8e58f`](https://github.com/backstage/backstage/commit/ed8e58f): Fixed `publish:gitlab:merge-request` and `gitlab:repo:push` failing with "A file with this name already exists" when `commitAction` is `auto` and the repository file list cannot be fetched, for example when the request times out on a large repository. The actions now check each file individually in that case, instead of treating every file as new.

### `@backstage/plugin-search-backend-module-pg` (0.5.60 → [0.5.61-next.1](../../changelogs/@backstage/plugin-search-backend-module-pg.md#0561-next1))

#### 0.5.61-next.1

##### Patch Changes

- [`39cda0c`](https://github.com/backstage/backstage/commit/39cda0c): Avoid recomputing full-text search `tsvector` data for unchanged documents during indexing.

### `@backstage/plugin-signals-backend` (0.3.20 → [0.3.21-next.2](../../changelogs/@backstage/plugin-signals-backend.md#0321-next2))

#### 0.3.21-next.2

##### Patch Changes

- [`bcb1697`](https://github.com/backstage/backstage/commit/bcb1697): Register WebSocket upgrades through the framework router so the first connection works without a prior HTTP request. Preserve user-only authentication and existing token-as-protocol clients, while keeping only the health endpoint public over HTTP.

### `@backstage/plugin-techdocs-backend-module-zensical` (0.1.1 → [0.1.0-next.1](../../changelogs/@backstage/plugin-techdocs-backend-module-zensical.md#010-next1))

_No changelog entries found._

### `@backstage/repo-tools` (0.19.2 → [0.19.3-next.1](../../changelogs/@backstage/repo-tools.md#0193-next1))

#### 0.19.3-next.1

##### Patch Changes

- [`1892d2f`](https://github.com/backstage/backstage/commit/1892d2f): chore(deps): bump `minimatch` from 10.2.6 to 11.0.1
- [`9120c46`](https://github.com/backstage/backstage/commit/9120c46): Updated dependency `glob` to `^14.0.0`.
- [`5eb2381`](https://github.com/backstage/backstage/commit/5eb2381): The generated API reference documentation no longer overwrites pages when a package exports declarations whose names only differ in case, or that share a name but are of different kinds, for example a variable and an interface or namespace. One of them keeps the existing page, and the others get a page with their kind added to the filename, for example `-interface` or `-namespace`, or a number if they are of the same kind.
- [`1fba2bb`](https://github.com/backstage/backstage/commit/1fba2bb): The peer dependency check no longer enforces a shared `react-router-dom` version, so packages can declare their own supported major version. See the [1.57 migration notes](https://backstage.io/docs/frontend-system/architecture/migrations#157) for background on the routing changes this supports.

## Other minor version bumps

### `@backstage/backend-app-api` (1.8.0 → [1.9.0-next.1](../../changelogs/@backstage/backend-app-api.md#190-next1))

#### 1.9.0-next.0

##### Minor Changes

- [`1c93987`](https://github.com/backstage/backstage/commit/1c93987): Add optional `beginAt` timestamps to `PluginStartupResult` and `ModuleStartupResult` in the `BackendStartupResult` returned by `backend.start()`. The new timestamp marks when a plugin's or module's init function was invoked, i.e. after its dependencies were resolved. Together with the existing `resultAt` this makes it possible to see how long each individual plugin's or module's init function took, separate from time spent waiting for other plugins to initialize. It is undefined when a plugin or module failed before reaching initialization.

### `@backstage/backend-test-utils` (1.11.8 → [1.12.0-next.2](../../changelogs/@backstage/backend-test-utils.md#1120-next2))

#### 1.12.0-next.2

##### Minor Changes

- [`250e4c3`](https://github.com/backstage/backstage/commit/250e4c3): Support WebSocket upgrade route registration in HTTP router service mocks and test backends.
- [`a5337d0`](https://github.com/backstage/backstage/commit/a5337d0): The `mockServices` export is now a frozen plain object instead of a TypeScript namespace, and its type is described by the new `MockServices` interface. Usage is unchanged: you can still call each mock service directly, use its `factory` and `mock` helpers, and refer to types such as `mockServices.rootConfig.Options`.

  Both `mockServices` and each of its services are frozen, so they can no longer be modified at runtime, for example with `jest.spyOn(mockServices.urlReader, 'mock')`. The mocks and factories they create are not affected.

### `@backstage/errors` (1.3.2 → [1.4.0-next.0](../../changelogs/@backstage/errors.md#140-next0))

#### 1.4.0-next.0

##### Minor Changes

- [`d368d89`](https://github.com/backstage/backstage/commit/d368d89): Added static type guards such as `AuthenticationError.is(value)` and `ResponseError.is(value)` to narrow unknown errors by name and basic shape across package copies.

  Added an `isErrorWithName(value, name)` helper for implementing custom error guards. `CustomErrorBase` and `ForwardedError` have no public `is` guard; forwarded errors are recognized by their preserved error names.

### `@backstage/plugin-scaffolder` (1.40.0 → [1.41.0-next.2](../../changelogs/@backstage/plugin-scaffolder.md#1410-next2))

#### 1.41.0-next.0

##### Minor Changes

- [`3fe82f6`](https://github.com/backstage/backstage/commit/3fe82f6): Added a `ScaffolderTemplateFilterBlueprint` that lets apps filter the new frontend system's template list using identity, catalog, or other viewer-specific state.
- [`ae86338`](https://github.com/backstage/backstage/commit/ae86338): Added GitLab branch autocompletion to RepoBranchPicker using user SCM credentials.

##### Patch Changes

- [`111c6ce`](https://github.com/backstage/backstage/commit/111c6ce): Keep the task button bar at the user's chosen visibility when a task completes, so log visibility and start-over controls remain accessible. Action availability continues to depend on task state and permissions.

### `@backstage/plugin-scaffolder-backend` (4.2.2 → [4.3.0-next.2](../../changelogs/@backstage/plugin-scaffolder-backend.md#430-next2))

#### 4.3.0-next.1

##### Minor Changes

- [`ff0ef74`](https://github.com/backstage/backstage/commit/ff0ef74): Added support for `when` conditions on parameter steps. Steps whose condition evaluates to false are skipped during validation, and their values are removed before the task runs. Also updated Nunjitsu to 0.7.0, with no change to existing templating behavior.

##### Patch Changes

- [`2fac95b`](https://github.com/backstage/backstage/commit/2fac95b): Group the Software Templates API documentation by functionality instead of placing all endpoints under "Untagged".

### `@backstage/plugin-scaffolder-common` (2.3.1 → [2.4.0-next.1](../../changelogs/@backstage/plugin-scaffolder-common.md#240-next1))

#### 2.4.0-next.0

##### Minor Changes

- [`ff0ef74`](https://github.com/backstage/backstage/commit/ff0ef74): Added support for `when` conditions on parameter steps, allowing templates to show or hide wizard steps based on earlier answers, for example `${{ parameters.cloudProvider === 'AWS' }}`. Also added the alpha `resolveParameterSteps` and `filterHiddenStepValues` helpers for working out which steps are visible and removing values from hidden steps.

## Other patch version bumps

### `@backstage/catalog-client` (1.16.3 → [1.16.4-next.1](../../changelogs/@backstage/catalog-client.md#1164-next1))

#### 1.16.4-next.0

##### Patch Changes

- [`9c76a81`](https://github.com/backstage/backstage/commit/9c76a81): Documented that the `entities/by-query` endpoint currently applies only the first `orderField`; any additional order fields are ignored. Updated the OpenAPI spec parameter description and the Software Catalog API docs accordingly. No behavior change. Refs #17560.

### `@backstage/core-app-api` (1.20.6 → [1.20.7-next.2](../../changelogs/@backstage/core-app-api.md#1207-next2))

#### 1.20.7-next.2

##### Patch Changes

- [`25297de`](https://github.com/backstage/backstage/commit/25297de): Fixed translation subscriptions failing when an abandoned language load rejects after switching to a language whose translations are already available.
- [`2aa14e3`](https://github.com/backstage/backstage/commit/2aa14e3): Backstage UI links and collections now use client-side navigation at their consuming route scope, and apps with a custom `Router` that provides no React Router context render without failing at startup. See the [1.57 migration notes](https://backstage.io/docs/frontend-system/architecture/migrations#157) for detailed migration steps.
- [`8688124`](https://github.com/backstage/backstage/commit/8688124): Fix unexpected sign-in prompts when multiple tabs refresh a session at the same time with an auth provider that rotates refresh tokens. Refresh requests are coordinated across tabs in browsers that support the Web Locks API.

#### 1.20.7-next.1

##### Patch Changes

- [`9c97ff4`](https://github.com/backstage/backstage/commit/9c97ff4): Fixed the OAuth "Login Required" popup (`OAuthRequestDialog`) appearing after a transient network failure during a background token refresh — for example right after the machine wakes from sleep, when the session has not actually expired.

### `@backstage/core-plugin-api` (1.12.11 → [1.12.12-next.2](../../changelogs/@backstage/core-plugin-api.md#11212-next2))

#### 1.12.12-next.1

##### Patch Changes

- [`e55a4a8`](https://github.com/backstage/backstage/commit/e55a4a8): Updated compatibility with the `FrontendPlugin` interface after removal of its deprecated `id` property, retaining support for older plugin instances.
- [`315f7bc`](https://github.com/backstage/backstage/commit/315f7bc): Made the legacy icon component and `withApis` compatibility APIs independent of `@backstage/frontend-plugin-api` so that they remain available to legacy frontend apps.

  Deprecated `withApis`. Wrap class components in a function component that uses `useApi` instead.

- [`e3d50c4`](https://github.com/backstage/backstage/commit/e3d50c4): Updated `useApp` to support the new icons API. Its `getSystemIcon` and `getSystemIcons` methods continue to return icon components.

### `@backstage/integration` (2.1.3 → [2.1.4-next.0](../../changelogs/@backstage/integration.md#214-next0))

#### 2.1.4-next.0

##### Patch Changes

- [`f56086a`](https://github.com/backstage/backstage/commit/f56086a): Fixed GitHub app credentials failing for every owner with `Cannot read properties of null (reading 'account')` when the list of app installations returned by GitHub contained null entries. Those entries are now ignored.

### `@backstage/plugin-catalog` (2.0.10 → [2.0.11-next.2](../../changelogs/@backstage/plugin-catalog.md#2011-next2))

#### 2.0.11-next.2

##### Patch Changes

- [`0da6298`](https://github.com/backstage/backstage/commit/0da6298): Entity page tabs now generate app-absolute links from the entity route, so they work correctly when navigation comes from outside the page router.

#### 2.0.11-next.1

##### Patch Changes

- [`118d84a`](https://github.com/backstage/backstage/commit/118d84a): Updated catalog tabs to render icon elements through the current frontend icon API.

### `@backstage/plugin-catalog-backend` (4.0.2 → [4.0.3-next.2](../../changelogs/@backstage/plugin-catalog-backend.md#403-next2))

#### 4.0.3-next.2

##### Patch Changes

- [`c4b7cb1`](https://github.com/backstage/backstage/commit/c4b7cb1): The `entities/by-refs` endpoint now resolves entity references case-insensitively, matching `entities/by-name` and the documented entity reference contract where receivers treat refs case-insensitively. Previously, a ref whose casing differed from the stored lowercased ref returned `null`. Fixes #36743.
- [`1892d2f`](https://github.com/backstage/backstage/commit/1892d2f): chore(deps): bump `minimatch` from 10.2.6 to 11.0.1
- [`9120c46`](https://github.com/backstage/backstage/commit/9120c46): Updated dependency `glob` to `^14.0.0`.

#### 4.0.3-next.1

##### Patch Changes

- [`9c76a81`](https://github.com/backstage/backstage/commit/9c76a81): Documented that the `entities/by-query` endpoint currently applies only the first `orderField`; any additional order fields are ignored. Updated the OpenAPI spec parameter description and the Software Catalog API docs accordingly. No behavior change. Refs #17560.
- [`3b97016`](https://github.com/backstage/backstage/commit/3b97016): Improved the performance of entity facets and total item counts on PostgreSQL when the filter contains `$any` or `$not` conditions, such as those produced by conditional permission policies for catalog entity reads.
- [`3b97016`](https://github.com/backstage/backstage/commit/3b97016): Entity filter predicates that combine `$all`, `$any` or `$not` with other keys in the same object, or that give `$all` or `$any` a non-array value, are now rejected with a 400 error. Previously the extra keys were silently ignored.
- [`f7ce914`](https://github.com/backstage/backstage/commit/f7ce914): Fixed an issue where `/validate-entity` would not return after sending a 400 response on invalid entity validation, causing an unhandled `ERR_HTTP_HEADERS_SENT` error and triggering duplicate success/fail audit events.

#### 4.0.3-next.0

##### Patch Changes

- [`7d765b6`](https://github.com/backstage/backstage/commit/7d765b6): Improved repository validation for catalog entity placeholders. Placeholder-driven reads, including `$openapi` and `$asyncapi` document references, are now restricted to the entity's own repository on SCM hosts; cross-repository references are rejected.
- [`2a9f08b`](https://github.com/backstage/backstage/commit/2a9f08b): Match URL locations in catalog rules in canonical form.

  URL locations are now matched against catalog rules in a canonical form of the URL, so that rule decisions agree with how the location target is resolved when its content is fetched. URL patterns that relied on percent-encoded characters being matched as written, or on default ports being kept, no longer match and should be updated.

### `@backstage/plugin-search-backend-module-elasticsearch` (2.0.1 → [2.0.2-next.2](../../changelogs/@backstage/plugin-search-backend-module-elasticsearch.md#202-next2))

#### 2.0.2-next.0

##### Patch Changes

- [`8da9c23`](https://github.com/backstage/backstage/commit/8da9c23): Internal changes for TypeScript 7 compatibility. There are no changes to behavior or the public API.

### `@backstage/plugin-search-react` (1.11.9 → [1.11.10-next.2](../../changelogs/@backstage/plugin-search-react.md#11110-next2))

#### 1.11.10-next.1

##### Patch Changes

- [`6c8a6b1`](https://github.com/backstage/backstage/commit/6c8a6b1): Fixed `SearchFilter.Autocomplete` with `multiple` clearing the typed text on every keystroke once a value was selected.

### `@backstage/plugin-techdocs` (1.19.0 → [1.19.1-next.2](../../changelogs/@backstage/plugin-techdocs.md#1191-next2))

#### 1.19.1-next.0

##### Patch Changes

- [`9a1d5cf`](https://github.com/backstage/backstage/commit/9a1d5cf): Fixed the TechDocs table of contents drifting to the right on wide screens. It now stays aligned with the right edge of the documentation content.

### `@backstage/plugin-techdocs-backend` (2.4.2 → [2.4.2-next.2](../../changelogs/@backstage/plugin-techdocs-backend.md#242-next2))

_No changelog entries found._

### `@backstage/plugin-techdocs-node` (2.2.1 → [2.2.1-next.2](../../changelogs/@backstage/plugin-techdocs-node.md#221-next2))

_No changelog entries found._

### `@techdocs/cli` (1.14.1 → [1.14.1-next.1](../../changelogs/@techdocs/cli.md#1141-next1))

_No changelog entries found._

## Excluded dependency updates

- `@backstage/app-defaults` (1.7.13 → [1.7.14-next.1](../../changelogs/@backstage/app-defaults.md#1714-next1))
- `@backstage/catalog-model` (1.10.2 → [1.10.3-next.0](../../changelogs/@backstage/catalog-model.md#1103-next0))
- `@backstage/cli-common` (0.3.2 → [0.3.3-next.0](../../changelogs/@backstage/cli-common.md#033-next0))
- `@backstage/cli-defaults` (0.1.7 → [0.1.8-next.0](../../changelogs/@backstage/cli-defaults.md#018-next0))
- `@backstage/cli-module-actions` (0.1.4 → [0.1.5-next.1](../../changelogs/@backstage/cli-module-actions.md#015-next1))
- `@backstage/cli-module-catalog` (0.2.0 → [0.2.1-next.2](../../changelogs/@backstage/cli-module-catalog.md#021-next2))
- `@backstage/cli-module-config` (0.1.8 → [0.1.9-next.1](../../changelogs/@backstage/cli-module-config.md#019-next1))
- `@backstage/cli-module-github` (0.1.5 → [0.1.6-next.1](../../changelogs/@backstage/cli-module-github.md#016-next1))
- `@backstage/cli-module-lint` (0.1.6 → [0.1.7-next.1](../../changelogs/@backstage/cli-module-lint.md#017-next1))
- `@backstage/cli-module-maintenance` (0.1.6 → [0.1.7-next.1](../../changelogs/@backstage/cli-module-maintenance.md#017-next1))
- `@backstage/cli-module-scaffolder` (0.2.0 → [0.2.1-next.2](../../changelogs/@backstage/cli-module-scaffolder.md#021-next2))
- `@backstage/cli-module-search` (0.2.0 → [0.2.1-next.1](../../changelogs/@backstage/cli-module-search.md#021-next1))
- `@backstage/cli-module-translations` (0.1.5 → [0.1.6-next.1](../../changelogs/@backstage/cli-module-translations.md#016-next1))
- `@backstage/config` (1.3.10 → [1.3.11-next.0](../../changelogs/@backstage/config.md#1311-next0))
- `@backstage/config-loader` (1.11.4 → [1.11.5-next.0](../../changelogs/@backstage/config-loader.md#1115-next0))
- `@backstage/connections` (0.4.1 → [0.4.2-next.0](../../changelogs/@backstage/connections.md#042-next0))
- `@backstage/dev-utils` (1.1.28 → [1.1.29-next.1](../../changelogs/@backstage/dev-utils.md#1129-next1))
- `@backstage/filter-predicates` (0.2.0 → [0.2.1-next.0](../../changelogs/@backstage/filter-predicates.md#021-next0))
- `@backstage/frontend-dev-utils` (0.1.7 → [0.1.8-next.2](../../changelogs/@backstage/frontend-dev-utils.md#018-next2))
- `@backstage/integration-react` (1.2.23 → [1.2.24-next.1](../../changelogs/@backstage/integration-react.md#1224-next1))
- `@backstage/plugin-api-docs` (0.14.6 → [0.14.7-next.2](../../changelogs/@backstage/plugin-api-docs.md#0147-next2))
- `@backstage/plugin-app-module-user-settings` (0.1.3 → [0.1.4-next.1](../../changelogs/@backstage/plugin-app-module-user-settings.md#014-next1))
- `@backstage/plugin-app-node` (0.1.50 → [0.1.51-next.1](../../changelogs/@backstage/plugin-app-node.md#0151-next1))
- `@backstage/plugin-app-visualizer` (0.2.9 → [0.2.10-next.2](../../changelogs/@backstage/plugin-app-visualizer.md#0210-next2))
- `@backstage/plugin-auth` (0.1.13 → [0.1.14-next.2](../../changelogs/@backstage/plugin-auth.md#0114-next2))
- `@backstage/plugin-auth-backend-module-atlassian-provider` (0.5.0 → [0.5.1-next.1](../../changelogs/@backstage/plugin-auth-backend-module-atlassian-provider.md#051-next1))
- `@backstage/plugin-auth-backend-module-bitbucket-provider` (0.3.20 → [0.3.21-next.1](../../changelogs/@backstage/plugin-auth-backend-module-bitbucket-provider.md#0321-next1))
- `@backstage/plugin-auth-backend-module-bitbucket-server-provider` (0.2.20 → [0.2.21-next.1](../../changelogs/@backstage/plugin-auth-backend-module-bitbucket-server-provider.md#0221-next1))
- `@backstage/plugin-auth-backend-module-gcp-iap-provider` (0.4.20 → [0.4.21-next.1](../../changelogs/@backstage/plugin-auth-backend-module-gcp-iap-provider.md#0421-next1))
- `@backstage/plugin-auth-backend-module-github-provider` (0.5.8 → [0.5.9-next.1](../../changelogs/@backstage/plugin-auth-backend-module-github-provider.md#059-next1))
- `@backstage/plugin-auth-backend-module-gitlab-provider` (0.4.8 → [0.4.9-next.1](../../changelogs/@backstage/plugin-auth-backend-module-gitlab-provider.md#049-next1))
- `@backstage/plugin-auth-backend-module-google-provider` (0.3.20 → [0.3.21-next.1](../../changelogs/@backstage/plugin-auth-backend-module-google-provider.md#0321-next1))
- `@backstage/plugin-auth-backend-module-guest-provider` (0.2.24 → [0.2.25-next.1](../../changelogs/@backstage/plugin-auth-backend-module-guest-provider.md#0225-next1))
- `@backstage/plugin-auth-backend-module-oauth2-provider` (0.4.20 → [0.4.21-next.1](../../changelogs/@backstage/plugin-auth-backend-module-oauth2-provider.md#0421-next1))
- `@backstage/plugin-auth-backend-module-okta-provider` (0.2.20 → [0.2.21-next.1](../../changelogs/@backstage/plugin-auth-backend-module-okta-provider.md#0221-next1))
- `@backstage/plugin-auth-backend-module-onelogin-provider` (0.3.20 → [0.3.21-next.1](../../changelogs/@backstage/plugin-auth-backend-module-onelogin-provider.md#0321-next1))
- `@backstage/plugin-auth-backend-module-openshift-provider` (0.1.12 → [0.1.13-next.1](../../changelogs/@backstage/plugin-auth-backend-module-openshift-provider.md#0113-next1))
- `@backstage/plugin-auth-react` (0.1.32 → [0.1.33-next.1](../../changelogs/@backstage/plugin-auth-react.md#0133-next1))
- `@backstage/plugin-bitbucket-cloud-common` (0.3.14 → [0.3.15-next.0](../../changelogs/@backstage/plugin-bitbucket-cloud-common.md#0315-next0))
- `@backstage/plugin-catalog-backend-module-aws` (0.4.29 → [0.4.30-next.2](../../changelogs/@backstage/plugin-catalog-backend-module-aws.md#0430-next2))
- `@backstage/plugin-catalog-backend-module-azure` (0.3.23 → [0.3.24-next.2](../../changelogs/@backstage/plugin-catalog-backend-module-azure.md#0324-next2))
- `@backstage/plugin-catalog-backend-module-backstage-openapi` (0.5.19 → [0.5.20-next.1](../../changelogs/@backstage/plugin-catalog-backend-module-backstage-openapi.md#0520-next1))
- `@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.5.16 → [0.5.17-next.2](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-cloud.md#0517-next2))
- `@backstage/plugin-catalog-backend-module-bitbucket-server` (0.5.16 → [0.5.17-next.2](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-server.md#0517-next2))
- `@backstage/plugin-catalog-backend-module-gcp` (0.3.24 → [0.3.25-next.1](../../changelogs/@backstage/plugin-catalog-backend-module-gcp.md#0325-next1))
- `@backstage/plugin-catalog-backend-module-gerrit` (0.3.19 → [0.3.20-next.1](../../changelogs/@backstage/plugin-catalog-backend-module-gerrit.md#0320-next1))
- `@backstage/plugin-catalog-backend-module-gitea` (0.1.17 → [0.1.18-next.1](../../changelogs/@backstage/plugin-catalog-backend-module-gitea.md#0118-next1))
- `@backstage/plugin-catalog-backend-module-gitlab-org` (0.2.26 → [0.2.27-next.2](../../changelogs/@backstage/plugin-catalog-backend-module-gitlab-org.md#0227-next2))
- `@backstage/plugin-catalog-backend-module-ldap` (0.12.10 → [0.12.11-next.1](../../changelogs/@backstage/plugin-catalog-backend-module-ldap.md#01211-next1))
- `@backstage/plugin-catalog-backend-module-logs` (0.1.27 → [0.1.28-next.2](../../changelogs/@backstage/plugin-catalog-backend-module-logs.md#0128-next2))
- `@backstage/plugin-catalog-backend-module-msgraph` (0.10.7 → [0.10.8-next.1](../../changelogs/@backstage/plugin-catalog-backend-module-msgraph.md#0108-next1))
- `@backstage/plugin-catalog-backend-module-msgraph-incremental` (0.1.5 → [0.1.6-next.1](../../changelogs/@backstage/plugin-catalog-backend-module-msgraph-incremental.md#016-next1))
- `@backstage/plugin-catalog-backend-module-openapi` (0.2.27 → [0.2.28-next.1](../../changelogs/@backstage/plugin-catalog-backend-module-openapi.md#0228-next1))
- `@backstage/plugin-catalog-backend-module-puppetdb` (0.2.27 → [0.2.28-next.1](../../changelogs/@backstage/plugin-catalog-backend-module-puppetdb.md#0228-next1))
- `@backstage/plugin-catalog-backend-module-scaffolder-entity-model` (0.2.25 → [0.2.26-next.2](../../changelogs/@backstage/plugin-catalog-backend-module-scaffolder-entity-model.md#0226-next2))
- `@backstage/plugin-catalog-common` (1.2.1 → [1.2.2-next.0](../../changelogs/@backstage/plugin-catalog-common.md#122-next0))
- `@backstage/plugin-catalog-graph` (0.6.9 → [0.6.10-next.2](../../changelogs/@backstage/plugin-catalog-graph.md#0610-next2))
- `@backstage/plugin-catalog-import` (0.13.19 → [0.13.20-next.2](../../changelogs/@backstage/plugin-catalog-import.md#01320-next2))
- `@backstage/plugin-catalog-node` (2.2.6 → [3.0.0-next.2](../../changelogs/@backstage/plugin-catalog-node.md#300-next2))
- `@backstage/plugin-catalog-react` (3.3.0 → [4.0.0-next.2](../../changelogs/@backstage/plugin-catalog-react.md#400-next2))
- `@backstage/plugin-catalog-unprocessed-entities` (0.2.36 → [0.2.37-next.2](../../changelogs/@backstage/plugin-catalog-unprocessed-entities.md#0237-next2))
- `@backstage/plugin-catalog-unprocessed-entities-common` (0.0.18 → [0.0.19-next.0](../../changelogs/@backstage/plugin-catalog-unprocessed-entities-common.md#0019-next0))
- `@backstage/plugin-config-schema` (0.1.85 → [0.1.86-next.1](../../changelogs/@backstage/plugin-config-schema.md#0186-next1))
- `@backstage/plugin-devtools-backend` (0.5.22 → [0.5.23-next.1](../../changelogs/@backstage/plugin-devtools-backend.md#0523-next1))
- `@backstage/plugin-devtools-common` (0.1.27 → [0.1.28-next.0](../../changelogs/@backstage/plugin-devtools-common.md#0128-next0))
- `@backstage/plugin-devtools-react` (0.2.7 → [0.2.8-next.1](../../changelogs/@backstage/plugin-devtools-react.md#028-next1))
- `@backstage/plugin-events-backend-module-aws-sqs` (0.4.27 → [0.4.28-next.2](../../changelogs/@backstage/plugin-events-backend-module-aws-sqs.md#0428-next2))
- `@backstage/plugin-events-backend-module-azure` (0.2.36 → [0.2.37-next.2](../../changelogs/@backstage/plugin-events-backend-module-azure.md#0237-next2))
- `@backstage/plugin-events-backend-module-bitbucket-cloud` (0.2.36 → [0.2.37-next.2](../../changelogs/@backstage/plugin-events-backend-module-bitbucket-cloud.md#0237-next2))
- `@backstage/plugin-events-backend-module-bitbucket-server` (0.1.17 → [0.1.18-next.2](../../changelogs/@backstage/plugin-events-backend-module-bitbucket-server.md#0118-next2))
- `@backstage/plugin-events-backend-module-gerrit` (0.2.36 → [0.2.37-next.2](../../changelogs/@backstage/plugin-events-backend-module-gerrit.md#0237-next2))
- `@backstage/plugin-events-backend-module-github` (0.4.17 → [0.4.18-next.2](../../changelogs/@backstage/plugin-events-backend-module-github.md#0418-next2))
- `@backstage/plugin-events-backend-module-gitlab` (0.3.17 → [0.3.18-next.2](../../changelogs/@backstage/plugin-events-backend-module-gitlab.md#0318-next2))
- `@backstage/plugin-events-backend-module-kafka` (0.3.9 → [0.3.10-next.2](../../changelogs/@backstage/plugin-events-backend-module-kafka.md#0310-next2))
- `@backstage/plugin-events-backend-test-utils` (0.1.60 → [0.1.61-next.1](../../changelogs/@backstage/plugin-events-backend-test-utils.md#0161-next1))
- `@backstage/plugin-gateway-backend` (1.1.10 → [1.1.11-next.1](../../changelogs/@backstage/plugin-gateway-backend.md#1111-next1))
- `@backstage/plugin-home` (0.9.11 → [0.9.12-next.2](../../changelogs/@backstage/plugin-home.md#0912-next2))
- `@backstage/plugin-home-react` (0.1.43 → [0.1.44-next.2](../../changelogs/@backstage/plugin-home-react.md#0144-next2))
- `@backstage/plugin-kubernetes` (0.12.24 → [0.12.25-next.2](../../changelogs/@backstage/plugin-kubernetes.md#01225-next2))
- `@backstage/plugin-kubernetes-node` (0.4.9 → [0.4.10-next.1](../../changelogs/@backstage/plugin-kubernetes-node.md#0410-next1))
- `@backstage/plugin-kubernetes-react` (0.6.1 → [0.6.2-next.1](../../changelogs/@backstage/plugin-kubernetes-react.md#062-next1))
- `@backstage/plugin-mui-to-bui` (0.2.12 → [0.2.13-next.2](../../changelogs/@backstage/plugin-mui-to-bui.md#0213-next2))
- `@backstage/plugin-notifications-backend-module-email` (0.3.26 → [0.3.27-next.2](../../changelogs/@backstage/plugin-notifications-backend-module-email.md#0327-next2))
- `@backstage/plugin-notifications-backend-module-slack` (0.4.7 → [0.4.8-next.1](../../changelogs/@backstage/plugin-notifications-backend-module-slack.md#048-next1))
- `@backstage/plugin-notifications-common` (0.2.5 → [0.2.6-next.0](../../changelogs/@backstage/plugin-notifications-common.md#026-next0))
- `@backstage/plugin-notifications-node` (0.2.31 → [0.2.32-next.1](../../changelogs/@backstage/plugin-notifications-node.md#0232-next1))
- `@backstage/plugin-org` (0.8.0 → [0.8.1-next.2](../../changelogs/@backstage/plugin-org.md#081-next2))
- `@backstage/plugin-org-react` (0.1.55 → [0.1.56-next.2](../../changelogs/@backstage/plugin-org-react.md#0156-next2))
- `@backstage/plugin-permission-backend` (0.7.17 → [0.7.18-next.1](../../changelogs/@backstage/plugin-permission-backend.md#0718-next1))
- `@backstage/plugin-permission-backend-module-allow-all-policy` (0.2.24 → [0.2.25-next.1](../../changelogs/@backstage/plugin-permission-backend-module-allow-all-policy.md#0225-next1))
- `@backstage/plugin-permission-common` (0.9.12 → [0.9.13-next.0](../../changelogs/@backstage/plugin-permission-common.md#0913-next0))
- `@backstage/plugin-permission-node` (0.11.5 → [0.11.6-next.1](../../changelogs/@backstage/plugin-permission-node.md#0116-next1))
- `@backstage/plugin-permission-react` (0.5.6 → [0.5.7-next.1](../../changelogs/@backstage/plugin-permission-react.md#057-next1))
- `@backstage/plugin-proxy-backend` (0.6.19 → [0.6.20-next.1](../../changelogs/@backstage/plugin-proxy-backend.md#0620-next1))
- `@backstage/plugin-proxy-node` (0.1.20 → [0.1.21-next.1](../../changelogs/@backstage/plugin-proxy-node.md#0121-next1))
- `@backstage/plugin-scaffolder-backend-module-azure` (0.2.27 → [0.2.28-next.1](../../changelogs/@backstage/plugin-scaffolder-backend-module-azure.md#0228-next1))
- `@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` (0.3.12 → [0.3.13-next.1](../../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket-cloud.md#0313-next1))
- `@backstage/plugin-scaffolder-backend-module-bitbucket-server` (0.2.27 → [0.2.28-next.1](../../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket-server.md#0228-next1))
- `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.3.27 → [0.3.28-next.1](../../changelogs/@backstage/plugin-scaffolder-backend-module-confluence-to-markdown.md#0328-next1))
- `@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.3.28 → [0.3.29-next.1](../../changelogs/@backstage/plugin-scaffolder-backend-module-cookiecutter.md#0329-next1))
- `@backstage/plugin-scaffolder-backend-module-gerrit` (0.2.26 → [0.2.27-next.1](../../changelogs/@backstage/plugin-scaffolder-backend-module-gerrit.md#0227-next1))
- `@backstage/plugin-scaffolder-backend-module-gitea` (0.2.26 → [0.2.27-next.1](../../changelogs/@backstage/plugin-scaffolder-backend-module-gitea.md#0227-next1))
- `@backstage/plugin-scaffolder-backend-module-github` (0.10.1 → [0.10.2-next.1](../../changelogs/@backstage/plugin-scaffolder-backend-module-github.md#0102-next1))
- `@backstage/plugin-scaffolder-backend-module-notifications` (0.1.27 → [0.1.28-next.1](../../changelogs/@backstage/plugin-scaffolder-backend-module-notifications.md#0128-next1))
- `@backstage/plugin-scaffolder-backend-module-rails` (0.5.26 → [0.5.27-next.1](../../changelogs/@backstage/plugin-scaffolder-backend-module-rails.md#0527-next1))
- `@backstage/plugin-scaffolder-backend-module-sentry` (0.4.1 → [0.4.2-next.1](../../changelogs/@backstage/plugin-scaffolder-backend-module-sentry.md#042-next1))
- `@backstage/plugin-scaffolder-backend-module-workspace-database` (0.1.1 → [0.1.2-next.1](../../changelogs/@backstage/plugin-scaffolder-backend-module-workspace-database.md#012-next1))
- `@backstage/plugin-scaffolder-backend-module-yeoman` (0.4.27 → [0.4.28-next.1](../../changelogs/@backstage/plugin-scaffolder-backend-module-yeoman.md#0428-next1))
- `@backstage/plugin-scaffolder-node` (0.13.8 → [1.0.0-next.2](../../changelogs/@backstage/plugin-scaffolder-node.md#100-next2))
- `@backstage/plugin-scaffolder-node-test-utils` (0.3.16 → [0.3.17-next.1](../../changelogs/@backstage/plugin-scaffolder-node-test-utils.md#0317-next1))
- `@backstage/plugin-search` (1.7.9 → [1.7.10-next.2](../../changelogs/@backstage/plugin-search.md#1710-next2))
- `@backstage/plugin-search-backend` (2.1.8 → [2.1.9-next.1](../../changelogs/@backstage/plugin-search-backend.md#219-next1))
- `@backstage/plugin-search-backend-module-catalog` (0.3.20 → [0.3.21-next.2](../../changelogs/@backstage/plugin-search-backend-module-catalog.md#0321-next2))
- `@backstage/plugin-search-backend-module-explore` (0.3.19 → [0.3.20-next.1](../../changelogs/@backstage/plugin-search-backend-module-explore.md#0320-next1))
- `@backstage/plugin-search-backend-module-stack-overflow-collator` (0.3.25 → [0.3.26-next.1](../../changelogs/@backstage/plugin-search-backend-module-stack-overflow-collator.md#0326-next1))
- `@backstage/plugin-search-backend-module-techdocs` (0.4.19 → [0.4.20-next.2](../../changelogs/@backstage/plugin-search-backend-module-techdocs.md#0420-next2))
- `@backstage/plugin-search-backend-node` (1.4.9 → [1.4.10-next.1](../../changelogs/@backstage/plugin-search-backend-node.md#1410-next1))
- `@backstage/plugin-search-common` (1.2.26 → [1.2.27-next.0](../../changelogs/@backstage/plugin-search-common.md#1227-next0))
- `@backstage/plugin-signals` (0.0.36 → [0.0.37-next.1](../../changelogs/@backstage/plugin-signals.md#0037-next1))
- `@backstage/plugin-signals-node` (0.2.6 → [0.2.7-next.2](../../changelogs/@backstage/plugin-signals-node.md#027-next2))
- `@backstage/plugin-signals-react` (0.0.27 → [0.0.28-next.0](../../changelogs/@backstage/plugin-signals-react.md#0028-next0))
- `@backstage/plugin-techdocs-addons-test-utils` (2.0.10 → [2.0.11-next.0](../../changelogs/@backstage/plugin-techdocs-addons-test-utils.md#2011-next0))
- `@backstage/plugin-techdocs-common` (0.1.2 → [0.1.3-next.0](../../changelogs/@backstage/plugin-techdocs-common.md#013-next0))
- `@backstage/plugin-techdocs-module-addons-contrib` (1.1.41 → [1.1.42-next.2](../../changelogs/@backstage/plugin-techdocs-module-addons-contrib.md#1142-next2))
- `@backstage/plugin-techdocs-react` (1.4.0 → [1.4.1-next.2](../../changelogs/@backstage/plugin-techdocs-react.md#141-next2))
- `@backstage/plugin-user-settings` (0.9.8 → [0.9.9-next.2](../../changelogs/@backstage/plugin-user-settings.md#099-next2))
- `@backstage/plugin-user-settings-backend` (0.4.8 → [0.4.9-next.1](../../changelogs/@backstage/plugin-user-settings-backend.md#049-next1))
- `@backstage/test-utils` (1.7.23 → [1.7.24-next.1](../../changelogs/@backstage/test-utils.md#1724-next1))
