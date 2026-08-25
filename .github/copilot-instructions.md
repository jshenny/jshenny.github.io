# Project Instructions

## Overview

- This is Jane Shen's personal portfolio site, built with Create React App.
- The app is deployed to GitHub Pages at `https://jshenny.github.io`.

## Structure

- `src/App.js` owns the top-level layout and React Router route table.
- Reusable and page-level UI belongs in `src/components/`.
- Global styles and Tailwind directives live in `src/index.css`; app-specific CSS is in `src/App.css`.
- Static public files belong in `public/`; imported images and fonts belong under `src/assets/`.

## Development Conventions

- Use React function components and keep components small and focused.
- Use `react-router-dom` for navigation and `NavLink` for navigation items.
- Prefer the existing Tailwind utility-class approach and established typography and spacing over introducing new styling systems.
- Preserve the personal, minimal portfolio aesthetic and responsive mobile/desktop layout.
- Use accessible image `alt` text, semantic elements, and button labels or ARIA labels for icon-only controls.
- Follow the repository's existing formatting and quote style in the file being changed.

## Validation

- Install dependencies with `npm install` when needed.
- Run `npm test -- --watchAll=false` for the test suite.
- Run `npm run build` to verify the production bundle.
- Run `npm start` for manual browser verification.
- For GitHub Pages deployment, use `npm run deploy` after a successful build.

## Scope

- Keep changes focused on the requested behavior and avoid ejecting Create React App.
- Do not commit generated `build/` output unless the task explicitly requires it.