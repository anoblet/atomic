# @anoblet/atomic

## Overview

Shared atomic CSS library for the `@anoblet` ecosystem. This package provides a set of utility classes and styles to ensure consistent design across web components and applications.

## Status

Stable

## Features

- [x] Shared atomic CSS library for the `@anoblet` ecosystem
- [x] Flexbox utilities (flex, grow, wrap, column, etc.)
- [x] Grid utilities (display: grid)
- [x] Typography utilities (font weights, text alignment, link styling)
- [x] Spacing utilities (gap, padding, margin)
- [x] Sizing utilities (width, height, min-height)
- [x] Layout & Scrolling utilities (box-sizing, sr-only, overflow handling)

## Architecture

The library is built using `lit` to provide scoped styles or shared style modules that can be easily consumed by Lit-based web components.

## API

The package exports CSS literals or style sheets that can be adopted by components.
(Specific class names correspond to the features listed above, e.g., `.flex`, `.grid`, `.text-center`).

## Dependencies

- `lit`: For defining and sharing styles.
