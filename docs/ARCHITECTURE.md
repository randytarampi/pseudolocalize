# Architecture

`pseudolocalize` is a single-package CLI/library.

## Layout
- `bin/p7e.js` is the command entry point.
- `lib/pseudolocalizer.js` is the main library entry point.
- `test/` contains the Mocha suite.
- Published output is limited to `bin/`, `lib/`, and `npm-shrinkwrap.json`.

## Dependency shape
- `commander` provides the CLI interface.
- The package has no workspace-level dependencies or subpackages.
