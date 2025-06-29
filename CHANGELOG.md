# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [12.1.0] - 2025-06-14

### Changed
- **BREAKING**: Dropped support for Node.js 18
- Added support for Node.js 24
- Updated minimum Node.js requirement to 18
- Updated minimum npm requirement to 9

## [12.0.0] - 2024-04-27

### Changed
- **BREAKING**: Made `enforce_shift` the default behavior for heading shifts and removed the option
- Migrated LaTeX table rendering from deprecated `tabu` package to modern `tabularray` package
- Updated all packages with new versions
- Fixed Lerna version management issues

### Updated Packages
- mdast-util-split-by-heading@1.1.2
- rebber@5.5.0
- rebber-plugins@4.4.0
- rehype-footnotes-title@2.0.1
- rehype-html-blocks@0.1.2
- rehype-postfix-footnote-anchors@2.0.3
- remark-abbr@1.4.2
- remark-align@1.2.15
- remark-captions@2.2.4
- remark-comments@1.2.10
- remark-custom-blocks@2.6.1
- remark-disable-tokenizers@1.1.1
- remark-emoticons@2.3.2
- remark-escape-escaped@0.0.35
- remark-fix-guillemets@1.1.3
- remark-grid-tables@2.2.2
- remark-heading-shift@1.1.2
- remark-heading-trailing-spaces@0.0.32
- remark-iframes@4.1.1
- remark-images-download@3.0.5
- remark-kbd@1.1.1
- remark-numbered-footnotes@3.1.1
- remark-ping@2.3.2
- remark-sub-super@1.0.21
- All typographic packages updated to latest versions

### Fixed
- Sentry error reporting (#511)
- LaTeX table rendering issues

## [Unreleased] - 2025-03-01

### Changed
- Updated default Node.js version for CI to 22 (latest LTS)
- Updated tests to accommodate heading shift changes

### Added
- Support for custom elements for iframes rendering

## Previous Versions

### Infrastructure Updates (2024)
- Updated CI to run on `next` branch
- Updated Node versions in CI to include latest LTS
- Improved ESLint configuration
- Updated Babel and related tooling
- Updated Lerna to v8.1.2
- Updated Code of Conduct to CC v2.1

### Tooling Improvements
- Migrated from deprecated packages
- Improved build system
- Enhanced test coverage
- Better monorepo management with Lerna

## Known Issues

- Still using remark versions < 13.0.0 (not migrated to micromark yet)
- Migration to micromark requires significant work and is pending