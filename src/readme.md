# Src

<!-- directory-responsibility -->
Exports atomic styling utilities and golden-ratio helpers.

Key files: `golden.ts`, `index.ts`.

```mermaid
flowchart LR
    A["Component styling requirements"] --> B["Compose exported CSS utilities"]
    B --> C["Reusable styles"]
```

Git tracking defaults to exclusion. Each tracked directory owns a `.gitignore` that explicitly allows its important immediate files and child directories. Add an allowlist entry when introducing content intended for version control, and give each new child directory its own `.gitignore`. This repository applies the workspace policy independently; its root rules cover root entries only. Existing responsibilities and the diagram remain unchanged.
