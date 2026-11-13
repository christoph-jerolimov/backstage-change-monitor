# Backstage Release 1.55.4 changelog

Changes between 1.55.3 and 1.55.4 — 0 added, 0 removed, 2 upgraded, 210 unchanged packages.

## Summary

- [Patch version bumps](#patch-version-bumps): 1 package
- [Excluded dependency updates](#excluded-dependency-updates): 1 package

## Table of contents

- [Patch version bumps](#patch-version-bumps)
  - [`@backstage/plugin-scaffolder-backend` (4.2.0 → 4.2.3)](#backstageplugin-scaffolder-backend-420--423)
- [Excluded dependency updates](#excluded-dependency-updates)

## Patch version bumps

### `@backstage/plugin-scaffolder-backend` (4.2.0 → [4.2.3](../../changelogs/@backstage/plugin-scaffolder-backend.md#423))

#### 4.2.1

##### Patch Changes

- [`6e08d65`](https://github.com/backstage/backstage/commit/6e08d65): Fixes a regression where scaffolder step values consisting of a singular template statement block (ex. `if: "{% if parameters.foo == 'bar' %}true{% else %}false{% endif %}"`), were rendered as the strings `"true"` and `"false"` instead of their boolean values. This caused steps with `if` conditions to always run.

  Step values with a single statement block that renders nothing, such as `{% if false %}x{% endif %}`, are once again left out of the action input instead of being passed as an empty string.

  Updated `nunjitsu` to `^0.6.2`.

## Excluded dependency updates

- `@backstage/plugin-catalog-backend-module-gitlab` (0.8.8 → [0.8.10](../../changelogs/@backstage/plugin-catalog-backend-module-gitlab.md#0810))
