# @anoblet/atomic

A shared atomic CSS library for the `@anoblet` ecosystem.

## Installation

```bash
pnpm add @anoblet/atomic
```

## Usage

Import the styles in your Lit components:

```typescript
import { index as atomicStyles } from '@anoblet/atomic';
import { css } from 'lit';

static styles = [atomicStyles, css`...`];
```

## Development

To build the package:

```bash
pnpm build
```

To run tests:

```bash
pnpm test
```

## Specifications

### Utility Classes

#### Flexbox

- `.flex`: `display: flex`
- `.flex.grow`: `flex-grow: 1`
- `.flex-wrap`: `flex-wrap: wrap`
- `.column`, `.flex-col`: `flex-direction: column`
- `.flex-1`: `flex: 1`
- `.justify-center`: `justify-content: center`
- `.items-center`, `.align-items-center`: `align-items: center`
- `.align-content-space-around`: `align-content: space-around`
- `.align-self-center`: `align-self: center`
- `.align-self-flex-end`: `align-self: flex-end`
- `.flex .center`: `align-items: center; justify-content: center`

#### Grid

- `.grid`: `display: grid`

#### Typography

- `.font-weight-{100-800}`: Sets font weight
- `.text-center`: `text-align: center`
- `a`: Styled links with hover effects

#### Spacing

- `.gap`: `gap: 1rem`
- `.p-4`: `padding: 1rem`
- `.m-4`: `margin: 1rem`

#### Sizing

- `.w-full`: `width: 100%`
- `.h-full`: `height: 100%`
- `.min-h-0`: `min-height: 0`

#### Layout & Scrolling

- `.box-border`: `box-sizing: border-box`
- `.sr-only`: Screen reader only (visually hidden)
- `.scroll`: `overflow: auto`
- `.scroll-x`: `overflow-x: auto`
- `.scroll-y`: `overflow-y: auto`
- `.overflow-auto`: `overflow: auto`

### Variables

- `--golden-ratio`: Defined as `1.618`. Used for calculating layout proportions.

### Golden Layout

Import `golden` styles to apply Golden Ratio defaults to `vaadin-split-layout`.

```typescript
import { golden } from '@anoblet/atomic'; // Exported via index or specific file
// or
import { golden } from '@anoblet/atomic/src/golden.ts'; // Direct import if needed

static styles = [golden, ...];
```
