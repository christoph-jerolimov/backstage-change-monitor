# Backstage Release 1.56.6 changelog

Changes between 1.56.5 and 1.56.6 — 0 added, 0 removed, 6 upgraded, 210 unchanged packages.

## Summary

- [0.x patch version bumps](#0x-patch-version-bumps): 4 packages
- [Other patch version bumps](#other-patch-version-bumps): 2 packages

## Table of contents

- [0.x patch version bumps](#0x-patch-version-bumps)
  - [`@backstage/plugin-api-docs` (0.14.6 → 0.14.8)](#backstageplugin-api-docs-0146--0148)
  - [`@backstage/plugin-kubernetes-backend` (0.21.12 → 0.21.14)](#backstageplugin-kubernetes-backend-02112--02114)
  - [`@backstage/plugin-scaffolder-backend-module-github` (0.10.1 → 0.10.3)](#backstageplugin-scaffolder-backend-module-github-0101--0103)
  - [`@backstage/plugin-scaffolder-backend-module-gitlab` (0.12.1 → 0.12.3)](#backstageplugin-scaffolder-backend-module-gitlab-0121--0123)
- [Other patch version bumps](#other-patch-version-bumps)
  - [`@backstage/plugin-catalog-backend` (4.0.2 → 4.0.4)](#backstageplugin-catalog-backend-402--404)
  - [`@backstage/plugin-scaffolder-backend` (4.2.2 → 4.2.5)](#backstageplugin-scaffolder-backend-422--425)

## 0.x patch version bumps

### `@backstage/plugin-api-docs` (0.14.6 → [0.14.8](../../changelogs/@backstage/plugin-api-docs.md#0148))

#### 0.14.7

##### Patch Changes

- [`a44c5eb`](https://github.com/backstage/backstage/commit/a44c5eb): The AsyncAPI definition widget no longer resolves external references by default. References to whole external documents still render, with a placeholder naming the document that was not loaded; references that point into an external document (using a `#` fragment) fail to render with an error naming the reference. To resolve external references — for example to reach internal schema registries that require authentication — provide the `resolvers` prop to enable external reference resolution.
- [`4bbc7a9`](https://github.com/backstage/backstage/commit/4bbc7a9): Removed explicit support for React 17: the peer dependency range for `react`, `react-dom` and `@types/react` is now `^18.0.0`. React 17 is no longer tested or guaranteed to work, although it may continue to work in some cases. See the [migration guide](https://backstage.io/docs/frontend-system/architecture/migrations#157).

### `@backstage/plugin-kubernetes-backend` (0.21.12 → [0.21.14](../../changelogs/@backstage/plugin-kubernetes-backend.md#02114))

#### 0.21.13

##### Patch Changes

- [`68abde4`](https://github.com/backstage/backstage/commit/68abde4): Allow AWS Kubernetes clusters to select credentials from a configured AWS account without assuming another role. Set `kubernetes.io/aws-account-id` in the cluster's auth metadata to use that account's credentials directly, including credentials obtained through web identity federation.
- [`0915584`](https://github.com/backstage/backstage/commit/0915584): Kubernetes proxy: stop forwarding the caller's `Authorization` and `Cookie` headers to the target cluster. Upstream requests now carry only credentials from the configured auth strategy or the `Backstage-Kubernetes-Authorization` header.

### `@backstage/plugin-scaffolder-backend-module-github` (0.10.1 → [0.10.3](../../changelogs/@backstage/plugin-scaffolder-backend-module-github.md#0103))

#### 0.10.2

##### Patch Changes

- [`1368ad3`](https://github.com/backstage/backstage/commit/1368ad3): Added a `github:repo:rulesets:create` action that creates a ruleset in a GitHub repository. Rules and bypass actors are written in the same format as the GitHub REST API, so any rule type that GitHub supports can be used in templates.
- [`6c43d4f`](https://github.com/backstage/backstage/commit/6c43d4f): Validates the `targetPath` input of the `gitlab:repo:push`, `publish:gitlab:merge-request` and `publish:github:pull-request` scaffolder actions, and the `filesToDelete` entries of `publish:github:pull-request`. The values must be relative paths within the target repository; absolute paths and paths containing `..` segments are now rejected, so changes are only applied inside the intended subdirectory of the repository.

### `@backstage/plugin-scaffolder-backend-module-gitlab` (0.12.1 → [0.12.3](../../changelogs/@backstage/plugin-scaffolder-backend-module-gitlab.md#0123))

#### 0.12.2

##### Patch Changes

- [`ae86338`](https://github.com/backstage/backstage/commit/ae86338): Added GitLab branch autocompletion to RepoBranchPicker using user SCM credentials.
- [`6c43d4f`](https://github.com/backstage/backstage/commit/6c43d4f): Validates the `targetPath` input of the `gitlab:repo:push`, `publish:gitlab:merge-request` and `publish:github:pull-request` scaffolder actions, and the `filesToDelete` entries of `publish:github:pull-request`. The values must be relative paths within the target repository; absolute paths and paths containing `..` segments are now rejected, so changes are only applied inside the intended subdirectory of the repository.
- [`ed8e58f`](https://github.com/backstage/backstage/commit/ed8e58f): Fixed `publish:gitlab:merge-request` and `gitlab:repo:push` failing with "A file with this name already exists" when `commitAction` is `auto` and the repository file list cannot be fetched, for example when the request times out on a large repository. The actions now check each file individually in that case, instead of treating every file as new.

## Other patch version bumps

### `@backstage/plugin-catalog-backend` (4.0.2 → [4.0.4](../../changelogs/@backstage/plugin-catalog-backend.md#404))

#### 4.0.3

##### Patch Changes

- [`9c76a81`](https://github.com/backstage/backstage/commit/9c76a81): Documented that the `entities/by-query` endpoint currently applies only the first `orderField`; any additional order fields are ignored. Updated the OpenAPI spec parameter description and the Software Catalog API docs accordingly. No behavior change. Refs #17560.
- [`7d765b6`](https://github.com/backstage/backstage/commit/7d765b6): Improved repository validation for catalog entity placeholders. Placeholder-driven reads, including `$openapi` and `$asyncapi` document references, are now restricted to the entity's own repository on SCM hosts; cross-repository references are rejected.
- [`2c223ee`](https://github.com/backstage/backstage/commit/2c223ee): Fixed a `Item of type "refresh" was emitted after processing had completed` warning that could appear when one of several placeholders in an entity failed to resolve. Processing now waits for all placeholders to finish before reporting the first failure.
- [`c4b7cb1`](https://github.com/backstage/backstage/commit/c4b7cb1): The `entities/by-refs` endpoint now resolves entity references case-insensitively, matching `entities/by-name` and the documented entity reference contract where receivers treat refs case-insensitively. Previously, a ref whose casing differed from the stored lowercased ref returned `null`. Fixes #36743.
- [`3b97016`](https://github.com/backstage/backstage/commit/3b97016): Improved the performance of entity facets and total item counts on PostgreSQL when the filter contains `$any` or `$not` conditions, such as those produced by conditional permission policies for catalog entity reads.
- [`3b97016`](https://github.com/backstage/backstage/commit/3b97016): Entity filter predicates that combine `$all`, `$any` or `$not` with other keys in the same object, or that give `$all` or `$any` a non-array value, are now rejected with a 400 error. Previously the extra keys were silently ignored.
- [`cd5fa5f`](https://github.com/backstage/backstage/commit/cd5fa5f): Improved the performance of entity queries on PostgreSQL when a filter matches a field against a long list of values, such as the ownership claims used by conditional permission policies for catalog entity reads.
- [`eb5875d`](https://github.com/backstage/backstage/commit/eb5875d): Improved repository validation for catalog entity placeholders on Azure DevOps. Placeholder-driven reads on a configured Azure DevOps integration are now restricted to the entity's own repository on every Azure DevOps host shape, including legacy `{org}.visualstudio.com` hosts and Azure DevOps Server hosts, and targets that cannot be attributed to a repository are rejected as well.
- [`32e6642`](https://github.com/backstage/backstage/commit/32e6642): Adds internal publication bookkeeping as groundwork for future catalog change tracking. Existing catalog APIs and deletion behavior are unchanged.

  The PostgreSQL upgrade builds an index concurrently without rewriting existing entities, but still scans the catalog table. Large installations may need to prepare this index out of band before upgrading; see [Upgrading large installations](https://github.com/backstage/backstage/blob/master/plugins/catalog-backend/README.md#upgrading-large-installations).

- [`2a9f08b`](https://github.com/backstage/backstage/commit/2a9f08b): Match URL locations in catalog rules in canonical form.

  URL locations are now matched against catalog rules in a canonical form of the URL, so that rule decisions agree with how the location target is resolved when its content is fetched. URL patterns that relied on percent-encoded characters being matched as written, or on default ports being kept, no longer match and should be updated.

- [`1892d2f`](https://github.com/backstage/backstage/commit/1892d2f): chore(deps): bump `minimatch` from 10.2.6 to 11.0.1
- [`f7ce914`](https://github.com/backstage/backstage/commit/f7ce914): Fixed an issue where `/validate-entity` would not return after sending a 400 response on invalid entity validation, causing an unhandled `ERR_HTTP_HEADERS_SENT` error and triggering duplicate success/fail audit events.
- [`6a0de59`](https://github.com/backstage/backstage/commit/6a0de59): Backend plugins now locate their database migrations relative to their own package directory, without requiring the package to be resolvable by name.
- [`9120c46`](https://github.com/backstage/backstage/commit/9120c46): Updated dependency `glob` to `^14.0.0`.
- [`20746bc`](https://github.com/backstage/backstage/commit/20746bc): Location annotations on entities submitted to the validate-entity endpoint can no longer override the location of the request.

### `@backstage/plugin-scaffolder-backend` (4.2.2 → [4.2.5](../../changelogs/@backstage/plugin-scaffolder-backend.md#425))

_No changelog entries found._
