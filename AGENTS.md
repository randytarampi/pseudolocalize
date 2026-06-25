# AGENTS.md

`pseudolocalize` is a small CLI/library package for pseudolocalized text generation. It ships as a single package with a binary wrapper and one library entry point.

Canonical commands:
- `yarn test`
- `yarn cover`

Details:
- [Architecture](docs/ARCHITECTURE.md)
- [Conventions](docs/CONVENTIONS.md)
- [Limitations](docs/LIMITATIONS.md)

## How to add/enrich/update guidance in this repo
- Keep this file short and put implementation detail in `docs/*`.
- Update `ARCHITECTURE.md` when the package layout or public entry points change.
- Update `CONVENTIONS.md` when the supported Node/module/lint rules change.
- Keep `LIMITATIONS.md` for unresolved issues only.
