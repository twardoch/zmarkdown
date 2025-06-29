# ZMarkdown TODO List

## 🚨 Critical - Security & Dependencies

- [ ] Run `npm audit --workspaces` and fix all vulnerabilities
- [ ] Update axios from 0.21.1 to ^1.6.0 (security vulnerability)
- [ ] Update all dev dependencies to latest stable versions
- [ ] Set up Renovate or Dependabot for automated updates
- [ ] Create SECURITY.md policy file

## 🏗️ Foundation - Build & TypeScript

- [ ] Add TypeScript configuration to monorepo root
- [ ] Create tsconfig.json with initial JS checking enabled
- [ ] Add @types packages for major dependencies
- [ ] Convert one small package to TypeScript as proof of concept
- [ ] Replace Babel with tsup for one package as test
- [ ] Set up dual CommonJS/ESM exports
- [ ] Add type checking to CI pipeline

## 🚀 Core - Micromark Migration

- [ ] Create compatibility matrix for all custom plugins
- [ ] Set up remark 14+ test environment
- [ ] Prototype micromark version of remark-custom-blocks
- [ ] Prototype micromark version of remark-grid-tables
- [ ] Create migration guide for plugin authors
- [ ] Set up parallel testing for old vs new versions
- [ ] Implement compatibility layer for smooth transition

## 📊 Performance - Optimization

- [ ] Create benchmark suite with real-world documents
- [ ] Add memory and CPU profiling to tests
- [ ] Implement processor caching mechanism
- [ ] Optimize regex patterns in all plugins
- [ ] Add performance regression tests to CI
- [ ] Investigate Worker Threads for parallel processing
- [ ] Implement lazy loading for client bundles

## 📚 Documentation - Developer Experience

- [ ] Set up Docusaurus or VitePress site
- [ ] Generate API documentation from JSDoc/TypeScript
- [ ] Create plugin development tutorial
- [ ] Add interactive playground for testing
- [ ] Write migration guide for v12 to v13
- [ ] Create architecture decision records (ADRs)
- [ ] Add code examples for common use cases

## 🛠️ Developer Tools - DX Improvements

- [ ] Add hot reload support for development
- [ ] Create AST visualizer web interface
- [ ] Add VS Code extension for ZMarkdown syntax
- [ ] Improve error messages with suggestions
- [ ] Add debug mode with detailed logging
- [ ] Create plugin scaffolding tool
- [ ] Add performance profiler integration

## 📦 Monorepo - Infrastructure

- [ ] Migrate from npm to pnpm workspaces
- [ ] Integrate Turborepo for build caching
- [ ] Set up Changesets for version management
- [ ] Migrate CI from Travis to GitHub Actions
- [ ] Add Husky + lint-staged for pre-commit hooks
- [ ] Configure branch protection rules
- [ ] Set up automated releases

## ✨ Features - New Capabilities

- [ ] Add Mermaid diagram support
- [ ] Implement code block line highlighting
- [ ] Add YouTube/Twitter embed support
- [ ] Create advanced table features (sort/filter)
- [ ] Add dark mode support for HTML output
- [ ] Implement component output mode (React/Vue)
- [ ] Add smart typography improvements

## 🔒 Security - Enhancements

- [ ] Implement Content Security Policy headers
- [ ] Add configurable sanitization levels
- [ ] Create security testing suite
- [ ] Add input validation schemas
- [ ] Implement rate limiting for API
- [ ] Add API key authentication option
- [ ] Create security best practices guide

## 🚢 Deployment - Modern Infrastructure

- [ ] Create multi-stage Dockerfile
- [ ] Add Docker Compose for local dev
- [ ] Create Kubernetes manifests
- [ ] Set up health check endpoints
- [ ] Add Prometheus metrics export
- [ ] Configure structured logging
- [ ] Implement Redis caching layer

## 🧪 Testing - Quality Assurance

- [ ] Increase test coverage to >90%
- [ ] Add visual regression tests
- [ ] Create E2E tests with Playwright
- [ ] Add mutation testing
- [ ] Implement fuzz testing for security
- [ ] Add cross-browser testing for client
- [ ] Create load testing suite

## 📈 Monitoring - Observability

- [ ] Add OpenTelemetry instrumentation
- [ ] Create Grafana dashboards
- [ ] Set up alerts for key metrics
- [ ] Add custom Sentry contexts
- [ ] Implement distributed tracing
- [ ] Create SLO/SLI definitions
- [ ] Add real user monitoring (RUM)

## 🎯 Quick Wins - Low Hanging Fruit

- [ ] Fix ESLint warnings
- [ ] Update README with badges
- [ ] Add CONTRIBUTING.md guide
- [ ] Create issue templates
- [ ] Add PR template
- [ ] Update license year
- [ ] Add Node 24 to CI matrix

## 💡 Future Ideas - Long Term

- [ ] WebAssembly version for browsers
- [ ] Native mobile SDKs
- [ ] Serverless deployment option
- [ ] GraphQL API endpoint
- [ ] Real-time collaboration features
- [ ] AI-powered writing assistance
- [ ] Jupyter notebook support

---

**Priority Legend**:
- 🚨 Critical - Do immediately
- 🏗️ Foundation - Do soon
- 🚀 Core - Major features
- 📊 Performance - Optimization
- ✨ Features - New capabilities
- 🧪 Testing - Quality improvements
- 🎯 Quick Wins - Easy improvements

**Notes**:
- Start with Critical and Quick Wins
- Foundation work enables everything else
- Core migration is highest risk/reward
- Features can be done in parallel
- Always maintain backward compatibility