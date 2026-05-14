# Implementation Plan: Portfolio Baseline Definition

**Branch**: `001-portfolio-baseline` | **Date**: 2026-05-14 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/001-portfolio-baseline/spec.md`

**Note**: This template is filled in by the `/speckit-plan` command. See `.specify/templates/plan-template.md` for the execution workflow.

## Summary

Formalize the current portfolio as a static-first public experience. The work focuses on
documenting the existing scope, setting explicit boundaries against backend or
service-driven expansion, and creating planning artifacts that future changes can use as a
governance baseline.

## Technical Context

**Language/Version**: TypeScript 5.x with React 19 and Next.js 16 App Router

**Primary Dependencies**: Next.js, React, `next-intl`, Tailwind CSS v4, ESLint

**Storage**: N/A for the baseline product scope; no managed application database is
required

**Testing**: `npm run lint`, `npm run build`, and manual review of the public UI flow

**Target Platform**: Responsive web browsers on desktop and mobile

**Project Type**: Single Next.js web application for a public personal portfolio

**Performance Goals**: Fast first-pass reading experience, stable media rendering, and
smooth section navigation on a single-page portfolio

**Constraints**: No login, no private user area, no visitor-specific persisted state, no
required third-party service integration, and content parity across supported locales

**Scale/Scope**: Single public-facing portfolio with a homepage, bilingual public content,
project showcase items, contact links, and professional narrative sections

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- Relevant Next.js 16 documentation under `node_modules/next/dist/docs/` was reviewed for
  any framework-level behavior being changed.
- PASS: This plan strengthens the portfolio narrative by formalizing the product boundary
  and reducing future scope confusion.
- PASS: Localization impact is explicitly included because the baseline requires aligned
  public content for the supported languages.
- PASS: Accessibility and performance risks are documented as baseline quality gates for a
  landing-style portfolio experience.
- PASS: Verification includes `npm run lint`, `npm run build`, and manual UI review of
  the affected public flow.

## Project Structure

### Documentation (this feature)

```text
specs/001-portfolio-baseline/
|-- plan.md
|-- research.md
|-- data-model.md
|-- quickstart.md
|-- contracts/
|   `-- public-experience-contract.md
`-- tasks.md
```

### Source Code (repository root)

```text
src/
|-- app/
|   |-- globals.css
|   |-- layout.tsx
|   `-- page.tsx
|-- components/
|   |-- home/
|   |-- ui/
|   `-- typewriter-skills.tsx
|-- messages/
|   |-- en.json
|   `-- es.json
`-- types/
    `-- portfolio.ts

public/
|-- anderson-profile.jpg
|-- anderson-profile-clean.png
|-- anderson-navarro-cv-2025.pdf
|-- project-admin-todo-cover.svg
|-- project-blizzard-cover.webp
`-- project-tesloshop-cover.svg
```

**Structure Decision**: Use the existing single-project Next.js App Router structure. The
plan artifacts document the current public experience and its boundaries without
introducing new runtime layers.

## Complexity Tracking

No constitution violations or added technical complexity are required for this planning
phase.
