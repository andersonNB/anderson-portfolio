# Quickstart: Validate Humanoid Guide

## Goal

Confirm that the redesigned guide feels more human and expressive while preserving the
existing CMD identity, prompt behavior, theme compatibility, and lightweight role in the
portfolio.

## Steps

1. Open the repository root.
2. Review `specs/003-humanoid-guide/spec.md` and
   `specs/003-humanoid-guide/contracts/humanoid-guide-contract.md`.
3. Start the dev server:

```bash
npm run dev
```

4. Open the homepage and verify:
   - The guide still reads as the existing CMD-based avatar.
   - The guide now has clear humanoid cues such as arms, hands, legs, feet, or a more
     body-like stance.
   - The greeting gesture feels friendly and restrained.
   - Interacting with the guide still reveals the expected short prompt.
5. Switch between light and dark themes and verify the redesigned guide remains readable.
6. Review desktop and mobile layouts.
7. Review reduced-motion behavior if motion preferences are enabled.
8. Run:

```bash
npm run lint
npm run build
```

## Expected Result

The guide feels like a warmer evolution of the current CMD mascot, keeps the same role in
the portfolio, and stays responsive, theme-safe, and reduced-motion aware.
