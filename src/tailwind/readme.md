# Tailwind

<!-- directory-responsibility -->
Defines color CSS exports based on the Tailwind palette.

Key files: `colors.css.ts`.

```mermaid
flowchart LR
    A["Color selection"] --> B["Resolve palette definitions"]
    B --> C["Typed color styles"]
```

Git tracking defaults to exclusion. Each tracked directory owns a `.gitignore` that explicitly allows its important immediate files and child directories. Add an allowlist entry when introducing content intended for version control, and give each new child directory its own `.gitignore`. This repository applies the workspace policy independently; its root rules cover root entries only. Existing responsibilities and the diagram remain unchanged.
