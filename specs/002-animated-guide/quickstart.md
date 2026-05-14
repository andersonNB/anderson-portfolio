# Quickstart: Validate Animated Corner Guide

## Goal

Confirm that the animated guide adds personality and gentle contact guidance without
hurting readability, accessibility, or the portfolio's lightweight scope.

## Steps

1. Open the repository root.
2. Review `specs/002-animated-guide/spec.md` and
   `specs/002-animated-guide/contracts/animated-guide-contract.md`.
3. Start the dev server:

```bash
npm run dev
```

4. Open the homepage and verify:
   - The guide is visible in a corner without covering key content.
   - The guide feels stylistically consistent with the rest of the portfolio.
   - Hover or click/tap reveals a short friendly prompt.
   - The portfolio still makes sense even if the guide is ignored.
5. Switch locales and verify the prompt meaning stays aligned.
6. Review desktop and mobile layouts.
7. Review reduced-motion behavior if motion preferences are enabled.
8. Run:

```bash
npm run lint
npm run build
```

## Expected Result

The guide feels intentional, lightweight, and portfolio-first, while remaining responsive,
localized, and accessible.
