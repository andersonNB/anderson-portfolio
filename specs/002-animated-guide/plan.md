# Implementation Plan: Animated Corner Guide

**Branch**: `002-animated-guide` | **Date**: 2026-05-14 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/002-animated-guide/spec.md`

**Note**: This template is filled in by the `/speckit-plan` command. See `.specify/templates/plan-template.md` for the execution workflow.

## Summary

Add a small animated corner guide to the portfolio that increases personality and gently
encourages contact without becoming a chatbot or blocking the main reading flow. The
feature will be delivered as a lightweight UI component integrated into the current
homepage composition, with bilingual copy, responsive behavior, and reduced-motion
awareness.

## Technical Context

**Language/Version**: TypeScript 5.x with React 19 and Next.js 16 App Router

**Primary Dependencies**: Next.js, React, `next-intl`, Tailwind CSS v4, ESLint

**Storage**: N/A

**Testing**: `npm run lint`, `npm run build`, responsive manual review, reduced-motion
manual review, and localized copy verification

**Target Platform**: Responsive web browsers on desktop and mobile

**Project Type**: Single Next.js web application for a public personal portfolio

**Performance Goals**: The guide should feel visually alive while staying lightweight,
non-blocking, and fast to render on the landing experience

**Constraints**: No login, no backend state, no external services, no intrusive overlay
behavior, bilingual copy parity, and reduced-motion-safe interaction patterns

**Scale/Scope**: One reusable corner-guide component, its styling/animation layer, and the
copy/content needed to support a small number of friendly prompts

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- Relevant Next.js 16 documentation under `node_modules/next/dist/docs/` was reviewed for
  any framework-level behavior being changed.
- PASS: The feature strengthens the portfolio narrative by adding a distinctive branded UI
  element rather than generic utility UI.
- PASS: Localization impact is explicit because any visible guide prompt must stay aligned
  across supported languages.
- PASS: Accessibility and performance risks are in scope, including reduced motion,
  viewport crowding, and non-blocking placement.
- PASS: Verification includes `npm run lint`, `npm run build`, and manual UI review of
  hover, click/tap, responsive, and reduced-motion behavior.

## Project Structure

### Documentation (this feature)

```text
specs/002-animated-guide/
|-- plan.md
|-- research.md
|-- data-model.md
|-- quickstart.md
|-- contracts/
|   `-- animated-guide-contract.md
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
|   |   |-- home-page.tsx
|   |   `-- ...
|   `-- ui/
|       `-- ...
|-- messages/
|   |-- en.json
|   `-- es.json
`-- types/
    `-- portfolio.ts
```

**Structure Decision**: Implement the guide as a focused home-level UI component integrated
into the existing homepage composition. Keep interaction logic local and lightweight, and
store any user-facing guide copy in the translation JSON files rather than inline strings.

## Complexity Tracking

No constitution violations are required. The feature remains inside the portfolio's
static-first scope as long as the guide stays decorative plus lightly interactive rather
than turning into a service-backed assistant.
