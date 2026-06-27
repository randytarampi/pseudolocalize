# Architecture

`pseudolocalize` is a single-package CLI/library for generating pseudolocalized text.

## Layout
- `bin/p7e.js` is the CLI entry point.
- `lib/pseudolocalizer.js` is the public library entry point.
- `test/unit` covers the library helpers; `test/integration` covers the CLI wrapper and filesystem behavior.
- Published output is limited to `bin/`, `lib/`, and `npm-shrinkwrap.json`.

## Dependency shape
- `commander` provides the CLI interface.
- The package has no workspace-level dependencies or subpackages.
