# Backstage Release 1.57.0-next.0 (next)

## Compared to 1.56.2 (latest release)

1 added, 0 removed, 186 upgraded, 29 unchanged.

⚠️ Need extra attention: 2 major, 2 0.x minor, 3 0.0.x patch.

### ⚠️ Major version bumps

| Package | 1.56.2 | 1.57.0-next.0 |
| --- | --- | --- |
| `@backstage/plugin-catalog-react` | **3.3.0** | **4.0.0-next.0** |
| `@backstage/plugin-scaffolder-react` | **2.1.1** | **3.0.0-next.0** |

### 🆕 Added packages

| Package | Version |
| --- | --- |
| `@backstage/plugin-techdocs-backend-module-zensical` | 0.1.0-next.0 |

### Version bumps

| Package | 1.56.2 | 1.57.0-next.0 | Type |
| --- | --- | --- | --- |
| `@backstage/app-defaults` | 1.7.13 | 1.7.14-next.0 | Patch |
| `@backstage/backend-app-api` | 1.8.0 | 1.9.0-next.0 | Minor |
| `@backstage/backend-defaults` | 0.18.1 | 0.18.2-next.0 | Patch |
| `@backstage/backend-dynamic-feature-service` | 0.8.8 | 0.8.9-next.0 | Patch |
| `@backstage/backend-openapi-utils` | 0.7.3 | 0.7.4-next.0 | Patch |
| `@backstage/backend-plugin-api` | 1.11.0 | 1.11.1-next.0 | Patch |
| `@backstage/backend-test-utils` | 1.11.8 | 1.11.9-next.0 | Patch |
| `@backstage/cli` | 0.36.7 | 0.36.8-next.0 | Patch |
| `@backstage/cli-defaults` | 0.1.7 | 0.1.8-next.0 | Patch |
| `@backstage/cli-module-actions` | 0.1.4 | 0.1.5-next.0 | Patch |
| `@backstage/cli-module-auth` | 0.1.5 | 0.1.6-next.0 | Patch |
| `@backstage/cli-module-build` | 0.1.9 | 0.1.10-next.0 | Patch |
| `@backstage/cli-module-catalog` | 0.2.0 | 0.2.1-next.0 | Patch |
| `@backstage/cli-module-config` | 0.1.8 | 0.1.9-next.0 | Patch |
| `@backstage/cli-module-github` | 0.1.5 | 0.1.6-next.0 | Patch |
| `@backstage/cli-module-info` | 0.1.5 | 0.1.6-next.0 | Patch |
| `@backstage/cli-module-lint` | 0.1.6 | 0.1.7-next.0 | Patch |
| `@backstage/cli-module-maintenance` | 0.1.6 | 0.1.7-next.0 | Patch |
| `@backstage/cli-module-migrate` | 0.2.2 | 0.2.3-next.0 | Patch |
| `@backstage/cli-module-new` | 0.1.8 | 0.1.9-next.0 | Patch |
| `@backstage/cli-module-package-manager-yarn` | 0.1.4 | 0.1.5-next.0 | Patch |
| `@backstage/cli-module-scaffolder` | 0.2.0 | 0.2.1-next.0 | Patch |
| `@backstage/cli-module-search` | 0.2.0 | 0.2.1-next.0 | Patch |
| `@backstage/cli-module-test-jest` | 0.1.7 | 0.1.8-next.0 | Patch |
| `@backstage/cli-module-translations` | 0.1.5 | 0.1.6-next.0 | Patch |
| `@backstage/cli-node` | 0.3.5 | 0.3.6-next.0 | Patch |
| `@backstage/core-app-api` | 1.20.6 | 1.20.7-next.0 | Patch |
| `@backstage/core-compat-api` | 0.5.16 | 0.5.17-next.0 | Patch |
| `@backstage/core-components` | 0.18.15 | 0.18.16-next.0 | Patch |
| `@backstage/core-plugin-api` | 1.12.11 | 1.12.12-next.0 | Patch |
| `@backstage/create-app` | 0.9.3 | 0.9.4-next.0 | Patch |
| `@backstage/dev-utils` | 1.1.28 | 1.1.29-next.0 | Patch |
| `@backstage/eslint-plugin` | 0.3.3 | 0.3.4-next.0 | Patch |
| `@backstage/frontend-app-api` | 0.16.9 | 0.16.10-next.0 | Patch |
| `@backstage/frontend-defaults` | 0.5.7 | 0.5.8-next.0 | Patch |
| `@backstage/frontend-dev-utils` | 0.1.7 | 0.1.8-next.0 | Patch |
| `@backstage/frontend-dynamic-feature-loader` | 0.1.17 | 0.1.18-next.0 | Patch |
| `@backstage/frontend-plugin-api` | 0.18.2 | 0.18.3-next.0 | Patch |
| `@backstage/frontend-test-utils` | 0.6.5 | 0.7.0-next.0 | Minor ⚠️ |
| `@backstage/integration-react` | 1.2.23 | 1.2.24-next.0 | Patch |
| `@backstage/plugin-api-docs` | 0.14.6 | 0.14.7-next.0 | Patch |
| `@backstage/plugin-app` | 0.5.4 | 0.5.5-next.0 | Patch |
| `@backstage/plugin-app-backend` | 0.5.19 | 0.5.20-next.0 | Patch |
| `@backstage/plugin-app-module-user-settings` | 0.1.3 | 0.1.4-next.0 | Patch |
| `@backstage/plugin-app-node` | 0.1.50 | 0.1.51-next.0 | Patch |
| `@backstage/plugin-app-react` | 0.2.8 | 0.2.9-next.0 | Patch |
| `@backstage/plugin-app-visualizer` | 0.2.9 | 0.2.10-next.0 | Patch |
| `@backstage/plugin-auth` | 0.1.13 | 0.1.14-next.0 | Patch |
| `@backstage/plugin-auth-backend` | 0.30.2 | 0.30.3-next.0 | Patch |
| `@backstage/plugin-auth-backend-module-atlassian-provider` | 0.5.0 | 0.5.1-next.0 | Patch |
| `@backstage/plugin-auth-backend-module-auth0-provider` | 0.4.6 | 0.4.7-next.0 | Patch |
| `@backstage/plugin-auth-backend-module-aws-alb-provider` | 0.4.21 | 0.4.22-next.0 | Patch |
| `@backstage/plugin-auth-backend-module-azure-easyauth-provider` | 0.2.25 | 0.2.26-next.0 | Patch |
| `@backstage/plugin-auth-backend-module-bitbucket-provider` | 0.3.20 | 0.3.21-next.0 | Patch |
| `@backstage/plugin-auth-backend-module-bitbucket-server-provider` | 0.2.20 | 0.2.21-next.0 | Patch |
| `@backstage/plugin-auth-backend-module-cloudflare-access-provider` | 0.5.1 | 0.5.2-next.0 | Patch |
| `@backstage/plugin-auth-backend-module-gcp-iap-provider` | 0.4.20 | 0.4.21-next.0 | Patch |
| `@backstage/plugin-auth-backend-module-github-provider` | 0.5.8 | 0.5.9-next.0 | Patch |
| `@backstage/plugin-auth-backend-module-gitlab-provider` | 0.4.8 | 0.4.9-next.0 | Patch |
| `@backstage/plugin-auth-backend-module-google-provider` | 0.3.20 | 0.3.21-next.0 | Patch |
| `@backstage/plugin-auth-backend-module-guest-provider` | 0.2.24 | 0.2.25-next.0 | Patch |
| `@backstage/plugin-auth-backend-module-microsoft-provider` | 0.3.20 | 0.3.21-next.0 | Patch |
| `@backstage/plugin-auth-backend-module-oauth2-provider` | 0.4.20 | 0.4.21-next.0 | Patch |
| `@backstage/plugin-auth-backend-module-oauth2-proxy-provider` | 0.3.4 | 0.3.5-next.0 | Patch |
| `@backstage/plugin-auth-backend-module-oidc-provider` | 0.4.22 | 0.4.23-next.0 | Patch |
| `@backstage/plugin-auth-backend-module-okta-provider` | 0.2.20 | 0.2.21-next.0 | Patch |
| `@backstage/plugin-auth-backend-module-onelogin-provider` | 0.3.20 | 0.3.21-next.0 | Patch |
| `@backstage/plugin-auth-backend-module-openshift-provider` | 0.1.12 | 0.1.13-next.0 | Patch |
| `@backstage/plugin-auth-backend-module-pinniped-provider` | 0.3.19 | 0.3.20-next.0 | Patch |
| `@backstage/plugin-auth-backend-module-vmware-cloud-provider` | 0.5.19 | 0.5.20-next.0 | Patch |
| `@backstage/plugin-auth-node` | 0.7.7 | 0.7.8-next.0 | Patch |
| `@backstage/plugin-auth-react` | 0.1.32 | 0.1.33-next.0 | Patch |
| `@backstage/plugin-catalog` | 2.0.10 | 2.0.11-next.0 | Patch |
| `@backstage/plugin-catalog-backend` | 4.0.2 | 4.0.3-next.0 | Patch |
| `@backstage/plugin-catalog-backend-module-ai-model` | 0.1.5 | 0.1.6-next.0 | Patch |
| `@backstage/plugin-catalog-backend-module-aws` | 0.4.29 | 0.4.30-next.0 | Patch |
| `@backstage/plugin-catalog-backend-module-azure` | 0.3.23 | 0.3.24-next.0 | Patch |
| `@backstage/plugin-catalog-backend-module-backstage-openapi` | 0.5.19 | 0.5.20-next.0 | Patch |
| `@backstage/plugin-catalog-backend-module-bitbucket-cloud` | 0.5.16 | 0.5.17-next.0 | Patch |
| `@backstage/plugin-catalog-backend-module-bitbucket-server` | 0.5.16 | 0.5.17-next.0 | Patch |
| `@backstage/plugin-catalog-backend-module-gcp` | 0.3.24 | 0.3.25-next.0 | Patch |
| `@backstage/plugin-catalog-backend-module-gerrit` | 0.3.19 | 0.3.20-next.0 | Patch |
| `@backstage/plugin-catalog-backend-module-gitea` | 0.1.17 | 0.1.18-next.0 | Patch |
| `@backstage/plugin-catalog-backend-module-github` | 0.14.1 | 0.14.2-next.0 | Patch |
| `@backstage/plugin-catalog-backend-module-github-org` | 0.3.27 | 0.3.28-next.0 | Patch |
| `@backstage/plugin-catalog-backend-module-gitlab` | 0.8.9 | 0.8.10-next.0 | Patch |
| `@backstage/plugin-catalog-backend-module-gitlab-org` | 0.2.26 | 0.2.27-next.0 | Patch |
| `@backstage/plugin-catalog-backend-module-incremental-ingestion` | 0.9.0 | 0.9.1-next.0 | Patch |
| `@backstage/plugin-catalog-backend-module-ldap` | 0.12.10 | 0.12.11-next.0 | Patch |
| `@backstage/plugin-catalog-backend-module-logs` | 0.1.27 | 0.1.28-next.0 | Patch |
| `@backstage/plugin-catalog-backend-module-msgraph` | 0.10.7 | 0.10.8-next.0 | Patch |
| `@backstage/plugin-catalog-backend-module-msgraph-incremental` | 0.1.5 | 0.1.6-next.0 | Patch |
| `@backstage/plugin-catalog-backend-module-openapi` | 0.2.27 | 0.2.28-next.0 | Patch |
| `@backstage/plugin-catalog-backend-module-puppetdb` | 0.2.27 | 0.2.28-next.0 | Patch |
| `@backstage/plugin-catalog-backend-module-scaffolder-entity-model` | 0.2.25 | 0.2.26-next.0 | Patch |
| `@backstage/plugin-catalog-backend-module-unprocessed` | 0.6.17 | 0.6.18-next.0 | Patch |
| `@backstage/plugin-catalog-graph` | 0.6.9 | 0.6.10-next.0 | Patch |
| `@backstage/plugin-catalog-import` | 0.13.19 | 0.13.20-next.0 | Patch |
| `@backstage/plugin-catalog-node` | 2.2.6 | 2.2.7-next.0 | Patch |
| `@backstage/plugin-catalog-react` | **3.3.0** | **4.0.0-next.0** | Major ⚠️ |
| `@backstage/plugin-catalog-unprocessed-entities` | 0.2.36 | 0.2.37-next.0 | Patch |
| `@backstage/plugin-config-schema` | 0.1.85 | 0.1.86-next.0 | Patch |
| `@backstage/plugin-devtools` | 0.1.44 | 0.1.45-next.0 | Patch |
| `@backstage/plugin-devtools-backend` | 0.5.22 | 0.5.23-next.0 | Patch |
| `@backstage/plugin-devtools-react` | 0.2.7 | 0.2.8-next.0 | Patch |
| `@backstage/plugin-events-backend` | 0.6.7 | 0.6.8-next.0 | Patch |
| `@backstage/plugin-events-backend-module-aws-sqs` | 0.4.27 | 0.4.28-next.0 | Patch |
| `@backstage/plugin-events-backend-module-azure` | 0.2.36 | 0.2.37-next.0 | Patch |
| `@backstage/plugin-events-backend-module-bitbucket-cloud` | 0.2.36 | 0.2.37-next.0 | Patch |
| `@backstage/plugin-events-backend-module-bitbucket-server` | 0.1.17 | 0.1.18-next.0 | Patch |
| `@backstage/plugin-events-backend-module-gerrit` | 0.2.36 | 0.2.37-next.0 | Patch |
| `@backstage/plugin-events-backend-module-github` | 0.4.17 | 0.4.18-next.0 | Patch |
| `@backstage/plugin-events-backend-module-gitlab` | 0.3.17 | 0.3.18-next.0 | Patch |
| `@backstage/plugin-events-backend-module-google-pubsub` | 0.2.8 | 0.2.9-next.0 | Patch |
| `@backstage/plugin-events-backend-module-kafka` | 0.3.9 | 0.3.10-next.0 | Patch |
| `@backstage/plugin-events-backend-test-utils` | 0.1.60 | 0.1.61-next.0 | Patch |
| `@backstage/plugin-events-node` | 0.4.27 | 0.4.28-next.0 | Patch |
| `@backstage/plugin-gateway-backend` | 1.1.10 | 1.1.11-next.0 | Patch |
| `@backstage/plugin-home` | 0.9.11 | 0.9.12-next.0 | Patch |
| `@backstage/plugin-home-react` | 0.1.43 | 0.1.44-next.0 | Patch |
| `@backstage/plugin-kubernetes` | 0.12.24 | 0.12.25-next.0 | Patch |
| `@backstage/plugin-kubernetes-backend` | 0.21.12 | 0.21.13-next.0 | Patch |
| `@backstage/plugin-kubernetes-cluster` | 0.0.42 | 0.0.43-next.0 | Patch ⚠️ |
| `@backstage/plugin-kubernetes-common` | 0.9.14 | 0.9.15-next.0 | Patch |
| `@backstage/plugin-kubernetes-node` | 0.4.9 | 0.4.10-next.0 | Patch |
| `@backstage/plugin-kubernetes-react` | 0.6.1 | 0.6.2-next.0 | Patch |
| `@backstage/plugin-mcp-actions-backend` | 0.2.3 | 0.2.4-next.0 | Patch |
| `@backstage/plugin-mui-to-bui` | 0.2.12 | 0.2.13-next.0 | Patch |
| `@backstage/plugin-notifications` | 0.6.1 | 0.6.2-next.0 | Patch |
| `@backstage/plugin-notifications-backend` | 0.6.10 | 0.6.11-next.0 | Patch |
| `@backstage/plugin-notifications-backend-module-email` | 0.3.26 | 0.3.27-next.0 | Patch |
| `@backstage/plugin-notifications-backend-module-slack` | 0.4.7 | 0.4.8-next.0 | Patch |
| `@backstage/plugin-notifications-node` | 0.2.31 | 0.2.32-next.0 | Patch |
| `@backstage/plugin-org` | 0.8.0 | 0.8.1-next.0 | Patch |
| `@backstage/plugin-org-react` | 0.1.55 | 0.1.56-next.0 | Patch |
| `@backstage/plugin-permission-backend` | 0.7.17 | 0.7.18-next.0 | Patch |
| `@backstage/plugin-permission-backend-module-allow-all-policy` | 0.2.24 | 0.2.25-next.0 | Patch |
| `@backstage/plugin-permission-node` | 0.11.5 | 0.11.6-next.0 | Patch |
| `@backstage/plugin-permission-react` | 0.5.6 | 0.5.7-next.0 | Patch |
| `@backstage/plugin-proxy-backend` | 0.6.19 | 0.6.20-next.0 | Patch |
| `@backstage/plugin-proxy-node` | 0.1.20 | 0.1.21-next.0 | Patch |
| `@backstage/plugin-scaffolder` | 1.40.0 | 1.41.0-next.0 | Minor |
| `@backstage/plugin-scaffolder-backend` | 4.2.1 | 4.2.2-next.0 | Patch |
| `@backstage/plugin-scaffolder-backend-module-azure` | 0.2.27 | 0.2.28-next.0 | Patch |
| `@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` | 0.3.12 | 0.3.13-next.0 | Patch |
| `@backstage/plugin-scaffolder-backend-module-bitbucket-server` | 0.2.27 | 0.2.28-next.0 | Patch |
| `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` | 0.3.27 | 0.3.28-next.0 | Patch |
| `@backstage/plugin-scaffolder-backend-module-cookiecutter` | 0.3.28 | 0.3.29-next.0 | Patch |
| `@backstage/plugin-scaffolder-backend-module-gcp` | 0.2.26 | 0.3.0-next.0 | Minor ⚠️ |
| `@backstage/plugin-scaffolder-backend-module-gerrit` | 0.2.26 | 0.2.27-next.0 | Patch |
| `@backstage/plugin-scaffolder-backend-module-gitea` | 0.2.26 | 0.2.27-next.0 | Patch |
| `@backstage/plugin-scaffolder-backend-module-github` | 0.10.1 | 0.10.2-next.0 | Patch |
| `@backstage/plugin-scaffolder-backend-module-gitlab` | 0.12.1 | 0.12.2-next.0 | Patch |
| `@backstage/plugin-scaffolder-backend-module-notifications` | 0.1.27 | 0.1.28-next.0 | Patch |
| `@backstage/plugin-scaffolder-backend-module-rails` | 0.5.26 | 0.5.27-next.0 | Patch |
| `@backstage/plugin-scaffolder-backend-module-sentry` | 0.4.1 | 0.4.2-next.0 | Patch |
| `@backstage/plugin-scaffolder-backend-module-workspace-database` | 0.1.1 | 0.1.2-next.0 | Patch |
| `@backstage/plugin-scaffolder-backend-module-yeoman` | 0.4.27 | 0.4.28-next.0 | Patch |
| `@backstage/plugin-scaffolder-node` | 0.13.8 | 0.13.9-next.0 | Patch |
| `@backstage/plugin-scaffolder-node-test-utils` | 0.3.16 | 0.3.17-next.0 | Patch |
| `@backstage/plugin-scaffolder-react` | **2.1.1** | **3.0.0-next.0** | Major ⚠️ |
| `@backstage/plugin-search` | 1.7.9 | 1.7.10-next.0 | Patch |
| `@backstage/plugin-search-backend` | 2.1.8 | 2.1.9-next.0 | Patch |
| `@backstage/plugin-search-backend-module-catalog` | 0.3.20 | 0.3.21-next.0 | Patch |
| `@backstage/plugin-search-backend-module-elasticsearch` | 2.0.1 | 2.0.2-next.0 | Patch |
| `@backstage/plugin-search-backend-module-explore` | 0.3.19 | 0.3.20-next.0 | Patch |
| `@backstage/plugin-search-backend-module-pg` | 0.5.60 | 0.5.61-next.0 | Patch |
| `@backstage/plugin-search-backend-module-stack-overflow-collator` | 0.3.25 | 0.3.26-next.0 | Patch |
| `@backstage/plugin-search-backend-module-techdocs` | 0.4.19 | 0.4.20-next.0 | Patch |
| `@backstage/plugin-search-backend-node` | 1.4.9 | 1.4.10-next.0 | Patch |
| `@backstage/plugin-search-react` | 1.11.9 | 1.11.10-next.0 | Patch |
| `@backstage/plugin-signals` | 0.0.36 | 0.0.37-next.0 | Patch ⚠️ |
| `@backstage/plugin-signals-backend` | 0.3.20 | 0.3.21-next.0 | Patch |
| `@backstage/plugin-signals-node` | 0.2.6 | 0.2.7-next.0 | Patch |
| `@backstage/plugin-signals-react` | 0.0.27 | 0.0.28-next.0 | Patch ⚠️ |
| `@backstage/plugin-techdocs` | 1.19.0 | 1.19.1-next.0 | Patch |
| `@backstage/plugin-techdocs-addons-test-utils` | 2.0.10 | 2.0.11-next.0 | Patch |
| `@backstage/plugin-techdocs-backend` | 2.4.0 | 2.4.1-next.0 | Patch |
| `@backstage/plugin-techdocs-module-addons-contrib` | 1.1.41 | 1.1.42-next.0 | Patch |
| `@backstage/plugin-techdocs-node` | 2.1.0 | 2.2.0-next.0 | Minor |
| `@backstage/plugin-techdocs-react` | 1.4.0 | 1.4.1-next.0 | Patch |
| `@backstage/plugin-user-settings` | 0.9.8 | 0.9.9-next.0 | Patch |
| `@backstage/plugin-user-settings-backend` | 0.4.8 | 0.4.9-next.0 | Patch |
| `@backstage/repo-tools` | 0.19.2 | 0.19.3-next.0 | Patch |
| `@backstage/test-utils` | 1.7.23 | 1.7.24-next.0 | Patch |
| `@techdocs/cli` | 1.13.0 | 1.14.0-next.0 | Minor |
