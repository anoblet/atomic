# Atomic

<!-- directory-responsibility -->
Publishes atomic CSS helpers and color definitions for shared frontend styling.

Detailed usage and existing reference material: [README.md](README.md).

Key files: `package.json`, `specification.md`, `tsconfig.json`, `vitest.config.ts`.

```mermaid
flowchart LR
    A["Frontend styling requirement"] --> B["Compose atomic style exports"]
    B --> C["Reusable component styles"]
```

Git tracking defaults to exclusion. Each tracked directory owns a `.gitignore` that explicitly allows its important immediate files and child directories. Add an allowlist entry when introducing content intended for version control, and give each new child directory its own `.gitignore`. This repository applies the workspace policy independently; its root rules cover root entries only. Existing responsibilities and the diagram remain unchanged.
