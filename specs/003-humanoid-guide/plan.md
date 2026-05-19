# Implementation Plan: Humanoid Guide

**Branch**: `feature/humanoid-guide` | **Date**: 2026-05-18 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/003-humanoid-guide/spec.md`

**Note**: This template is filled in by the `/speckit-plan` command. See `.specify/templates/plan-template.md` for the execution workflow.

## Summary

Evolve the current CMD-style corner guide into a more humanoid mascot without changing its
product role. The work will keep the existing prompt behavior and lightweight interaction
model, while redesigning the guide silhouette to add simple limbs, a small wave gesture,
and theme-safe visual treatment for dark and light modes.

## Technical Context

**Language/Version**: TypeScript 5.x with React 19 and Next.js 16 App Router

**Primary Dependencies**: Next.js, React, `next-intl`, Tailwind CSS v4, ESLint

**Storage**: N/A

**Testing**: `npm run lint`, `npm run build`, manual desktop review, manual mobile review,
theme-switch review, and reduced-motion review

**Target Platform**: Responsive web browsers on desktop and mobile

**Project Type**: Single Next.js web application for a public personal portfolio

**Performance Goals**: Keep the guide visually expressive without increasing perceived
landing-page heaviness or making the guide feel more dominant than nearby content

**Constraints**: No new dependencies, no backend state, no new conversation flow, no
required navigation path, bilingual copy parity, theme parity, and reduced-motion-safe
gesture behavior

**Scale/Scope**: One redesign of the existing corner-guide component, localized prompt
copy as needed, and the CSS/interaction changes required to support a humanoid silhouette
and wave gesture

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- Relevant Next.js 16 documentation under `node_modules/next/dist/docs/` was reviewed for
  any framework-level behavior being changed.
- PASS: The feature strengthens the portfolio narrative by making the existing mascot feel
  more personal rather than adding unrelated utility UI.
- PASS: Localization impact remains defined because visible prompts still belong to the
  public bilingual experience.
- PASS: Accessibility and performance risks are in scope, especially gesture distraction,
  theme contrast, responsive crowding, and reduced-motion behavior.
- PASS: Verification includes `npm run lint`, `npm run build`, and manual UI checks for
  interaction, theme switching, mobile fit, and reduced motion.

## Project Structure

### Documentation (this feature)

```text
specs/003-humanoid-guide/
|-- plan.md
|-- research.md
|-- data-model.md
|-- quickstart.md
|-- contracts/
|   `-- humanoid-guide-contract.md
`-- tasks.md
```

### Source Code (repository root)

```text
src/
|-- app/
|   |-- globals.css
|   `-- page.tsx
|-- components/
|   |-- home/
|   |   |-- animated-corner-guide.tsx
|   |   |-- home-page.tsx
|   |   `-- ...
|   `-- ui/
|       `-- icons.tsx
|-- messages/
|   |-- en.json
|   `-- es.json
`-- types/
    `-- portfolio.ts
```

**Structure Decision**: Keep the redesign inside the existing home-level guide component
and current global styling system. Reuse the established translation and shared-type
locations instead of introducing new folders or animation tooling.

## Complexity Tracking

No constitution violations are required. The feature remains inside the portfolio's
static-first scope because it only evolves the visual design and small interaction polish
of the existing guide.
