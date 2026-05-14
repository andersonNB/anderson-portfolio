<!--
Sync Impact Report
- Version change: template -> 1.0.0
- Modified principles:
  - Template Principle 1 -> I. Next.js 16 App Router Fidelity
  - Template Principle 2 -> II. Portfolio Narrative First
  - Template Principle 3 -> III. Type-Safe Localized Content
  - Template Principle 4 -> IV. Accessible Performance Baseline
  - Template Principle 5 -> V. Lean Delivery and Verification
- Added sections:
  - Technical Guardrails
  - Workflow and Quality Gates
- Removed sections:
  - None
- Templates requiring updates:
  - ✅ .specify/templates/plan-template.md
  - ✅ .specify/templates/spec-template.md
  - ✅ .specify/templates/tasks-template.md
  - ✅ README.md
- Follow-up TODOs:
  - None
-->
# Anderson Portfolio Constitution

## Core Principles

### I. Next.js 16 App Router Fidelity
All framework-level changes MUST respect the current Next.js 16 behavior used by this
repository. Before changing routing, rendering, caching, navigation, metadata, or asset
handling, contributors MUST read the relevant guide under `node_modules/next/dist/docs/`
instead of relying on older framework assumptions. New work MUST preserve the App Router
structure in `src/app` unless a specification explicitly approves a migration.

Rationale: This project uses a modern Next.js version with behavior that differs from
older guidance, and incorrect assumptions here can introduce subtle regressions quickly.

### II. Portfolio Narrative First
Every user-facing change MUST strengthen Anderson Navarro's professional presentation:
clarity of value, credibility of experience, and quality of showcased work. Components,
copy, visuals, and interactions MUST serve the portfolio narrative; generic dashboard
patterns, filler sections, or ornamental complexity without storytelling value MUST be
rejected.

Rationale: The primary product is not a feature platform; it is a personal portfolio
whose success depends on clear professional positioning.

### III. Type-Safe Localized Content
TypeScript types MUST remain authoritative for shared portfolio data and component
contracts. User-facing copy MUST be localization-aware and maintained consistently across
`src/messages/es.json` and `src/messages/en.json` or an approved equivalent source.
Hardcoded copy inside components SHOULD be avoided when the text is part of the public
portfolio experience, and any locale switch MUST preserve complete content parity.

Rationale: This repository already supports bilingual presentation with typed data, and
drift between locales or weak typing degrades both trust and maintainability.

### IV. Accessible Performance Baseline
Each UI change MUST preserve semantic HTML, keyboard reachability, readable contrast, and
responsive behavior across mobile and desktop. Images and media MUST be justified,
optimized, and sized deliberately for a portfolio context. Animations MUST support the
content rather than distract from it, and contributors MUST treat performance regressions
in the landing experience as release blockers.

Rationale: A portfolio is often judged within seconds, so accessibility and performance
directly affect credibility and conversion.

### V. Lean Delivery and Verification
The codebase MUST prefer the smallest viable solution that fits the existing stack:
Next.js, React, TypeScript, Tailwind CSS v4, `next-intl`, and ESLint. New dependencies,
architectural layers, or state-management tools require explicit justification in the
specification or plan. Before merge, contributors MUST validate affected work with
`npm run lint` and `npm run build`, plus a manual check of the impacted UI flow.

Rationale: Portfolio projects benefit from fast iteration and low maintenance overhead,
not from premature abstraction.

## Technical Guardrails

- The canonical application entry lives in `src/app`, and new routes or layouts MUST
  follow App Router conventions.
- The approved primary stack is Next.js 16.x, React 19.x, TypeScript 5.x, Tailwind CSS
  v4, and `next-intl`; replacing or bypassing these defaults requires an explicit design
  reason.
- Shared portfolio domain shapes belong in typed modules such as
  `src/types/portfolio.ts`; ad hoc object shapes duplicated across components SHOULD be
  consolidated.
- Static assets in `public/` MUST represent real portfolio content or deliberate branding
  support. Temporary placeholders SHOULD be removed before merge unless the spec marks
  them as intentional.
- Content and UX decisions MUST account for Spanish and English presentation whenever the
  affected section is exposed through the locale switch.

## Workflow and Quality Gates

- Non-trivial work MUST start with a spec or plan that states the portfolio goal,
  impacted sections, localization impact, and verification approach.
- Every implementation plan MUST include a constitution check that verifies:
  relevant Next.js docs were consulted, portfolio narrative value is clear, localization
  parity is addressed, accessibility/performance risks are named, and validation commands
  are listed.
- Task breakdowns MUST make room for copy updates, locale synchronization, asset updates,
  and final UX verification when those concerns are in scope.
- Pull requests or review-ready changes MUST call out any deliberate deviation from these
  principles and justify why the simpler portfolio-first approach was insufficient.

## Governance

This constitution overrides conflicting local habits and generic scaffolding defaults for
this repository. Amendments require a documented change to this file, an explicit version
bump following semantic versioning, and updates to dependent templates or guidance docs
when the rules affect planning or implementation. Compliance review is mandatory for every
specification, plan, task list, and code review touching the portfolio experience.

Versioning policy for this constitution:
- MAJOR: remove or redefine a principle in a backward-incompatible way.
- MINOR: add a principle, section, or materially stronger governance requirement.
- PATCH: clarify wording without changing expected behavior.

Operational guidance lives in `AGENTS.md`, `README.md`, and the templates under
`.specify/templates/`; those artifacts MUST stay aligned with this constitution.

**Version**: 1.0.0 | **Ratified**: 2026-05-14 | **Last Amended**: 2026-05-14
