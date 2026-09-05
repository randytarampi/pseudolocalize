# AGENTS.md

`pseudolocalize` is a pseudolocalization library for i18n testing. It is ESM on Node 24 with Yarn 4.17, Gulp 5, and Mocha.

Canonical commands:
- `yarn test`
- `yarn lint`
- `yarn clean`
- `yarn cover`

## How to add/enrich/update guidance in this repo
- Keep this file short and put implementation detail in `docs/*`.
- Update `docs/ARCHITECTURE.md` when the package layout or public entry points change.
- Update `docs/CONVENTIONS.md` when the supported Node/module/lint rules change.
- Keep `docs/LIMITATIONS.md` for unresolved issues only.

<!-- Managed by configure-agent-guidance.py — do not edit between DOTFILES_REPO_GUIDANCE markers -->
<!-- DOTFILES_REPO_GUIDANCE_START -->
## Repository Guidance

These policies apply to work in every repository.

### Verification

- Run the repository's canonical verification command before claiming success.
- If verification fails, fix it before reporting the work as complete.

### Commits and pushes

- Keep one concern per commit.
- Use Conventional Commits (`type(scope): description`).
- Never push unless the user explicitly authorizes it.

### Writing and ambiguity

- Use Canadian English in prose and Canadian Press style for formal artifacts.
- Ask before implementing when a flag or name has ambiguous semantics; do not guess when the cost of being wrong is high.

### Delegation and planning

- For unknown scope, delegate bounded discovery first; read expected edit targets directly.
- When changing AI tooling, assess every configured tool up front and enumerate the full tool fleet.
- Keep repository-specific facts and implementation details in the repository's own guidance and documentation.

### Artifacts

- Probe binary artifacts with appropriate local tools before concluding they are unreadable; never ask the user to resend an unreadable artifact.
<!-- DOTFILES_REPO_GUIDANCE_END -->
