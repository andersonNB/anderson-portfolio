---

description: "Task list for Portfolio Baseline Definition"
---

# Tasks: Portfolio Baseline Definition

**Input**: Design documents from `/specs/001-portfolio-baseline/`

**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md,
data-model.md, contracts/

**Tests**: Validation tasks are included because this feature is documentation-driven and
must be checked against the actual public experience.

**Organization**: Tasks are grouped by user story to enable independent implementation and
testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- Documentation for this feature lives in `specs/001-portfolio-baseline/`
- Portfolio source lives in `src/` and public assets in `public/`
- Agent guidance lives in `AGENTS.md`

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Establish the feature documentation workspace and baseline references

- [ ] T001 Confirm active feature path in `.specify/feature.json`
- [ ] T002 Review baseline source references in `README.md`, `AGENTS.md`, and `package.json`
- [ ] T003 [P] Review relevant Next.js guidance note in `node_modules/next/dist/docs/index.md`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Create the shared baseline artifacts that all user stories depend on

**CRITICAL**: No user story work can begin until this phase is complete

- [ ] T004 Consolidate baseline scope decisions in `specs/001-portfolio-baseline/research.md`
- [ ] T005 [P] Define baseline public entities in `specs/001-portfolio-baseline/data-model.md`
- [ ] T006 [P] Define visitor and maintainer guarantees in `specs/001-portfolio-baseline/contracts/public-experience-contract.md`
- [ ] T007 Document validation flow in `specs/001-portfolio-baseline/quickstart.md`
- [ ] T008 Link the active feature plan from `AGENTS.md`

**Checkpoint**: Shared baseline artifacts are complete and future story work can proceed independently

---

## Phase 3: User Story 1 - Review professional profile (Priority: P1)

**Goal**: Ensure the baseline clearly defines how the portfolio presents Anderson Navarro's
professional identity and core narrative

**Independent Test**: A reviewer can read the spec and compare it with the live homepage
to verify that the owner identity, value proposition, and main sections are represented
clearly without authentication

### Validation for User Story 1

- [ ] T009 [US1] Review profile narrative requirements in `specs/001-portfolio-baseline/spec.md`
- [ ] T010 [P] [US1] Cross-check hero and profile presentation against `src/components/home/hero-section.tsx`
- [ ] T011 [P] [US1] Cross-check profile card and supporting identity content against `src/components/home/profile-card.tsx`
- [ ] T012 [US1] Align plan summary and technical context in `specs/001-portfolio-baseline/plan.md` with the profile-focused baseline
- [ ] T013 [US1] Verify bilingual narrative coverage against `src/messages/es.json` and `src/messages/en.json`

**Checkpoint**: User Story 1 is fully documented and independently verifiable as a public professional presentation

---

## Phase 4: User Story 2 - Inspect work and supporting links (Priority: P1)

**Goal**: Ensure the baseline defines how visitors review featured work and reach public supporting resources

**Independent Test**: A reviewer can trace the selected-work and contact expectations from
the spec to the existing project cards and public destinations

### Validation for User Story 2

- [ ] T014 [US2] Review work and public-link requirements in `specs/001-portfolio-baseline/spec.md`
- [ ] T015 [P] [US2] Cross-check featured project expectations against `src/components/home/selected-work-section.tsx`
- [ ] T016 [P] [US2] Cross-check contact resource expectations against `src/components/home/stack-contact-section.tsx`
- [ ] T017 [P] [US2] Confirm project and contact copy parity in `src/messages/es.json` and `src/messages/en.json`
- [ ] T018 [US2] Validate public-action guarantees in `specs/001-portfolio-baseline/contracts/public-experience-contract.md`

**Checkpoint**: User Story 2 is fully documented and independently verifiable as proof-of-work plus public follow-up access

---

## Phase 5: User Story 3 - Preserve a static-first scope for future updates (Priority: P2)

**Goal**: Ensure maintainers can distinguish baseline-safe changes from scope-expanding changes

**Independent Test**: A contributor can read the documentation set and determine that
login, persistent user data, and required third-party integrations are outside the current baseline

### Validation for User Story 3

- [ ] T019 [US3] Review static-first boundary requirements in `specs/001-portfolio-baseline/spec.md`
- [ ] T020 [P] [US3] Align scope-boundary decisions in `specs/001-portfolio-baseline/research.md`
- [ ] T021 [P] [US3] Verify non-goals and maintainer rules in `specs/001-portfolio-baseline/contracts/public-experience-contract.md`
- [ ] T022 [US3] Confirm baseline entity boundaries in `specs/001-portfolio-baseline/data-model.md`
- [ ] T023 [US3] Confirm validation guidance for future maintainers in `specs/001-portfolio-baseline/quickstart.md`

**Checkpoint**: User Story 3 is fully documented and independently verifiable as a governance boundary for future work

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final consistency review across all baseline artifacts

- [ ] T024 [P] Review internal links and references across `specs/001-portfolio-baseline/`
- [ ] T025 Ensure `README.md` and `AGENTS.md` point to the same baseline expectations
- [ ] T026 Run `npm run lint`
- [ ] T027 Run `npm run build`
- [ ] T028 Perform manual portfolio review using `specs/001-portfolio-baseline/quickstart.md`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies; can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion; blocks all user stories
- **User Stories (Phase 3+)**: Depend on Foundational completion
- **Polish (Phase 6)**: Depends on all user story phases being complete

### User Story Dependencies

- **User Story 1 (P1)**: Starts after Foundational; no dependency on other stories
- **User Story 2 (P1)**: Starts after Foundational; no dependency on User Story 1
- **User Story 3 (P2)**: Starts after Foundational; depends conceptually on the baseline artifacts created in Phase 2, not on runtime implementation

### Within Each User Story

- Review the story requirements first
- Cross-check corresponding source or content files
- Reconcile the planning artifacts with the actual portfolio baseline
- Finish with a story-level verification pass

### Parallel Opportunities

- T003 can run in parallel with T001-T002
- T005-T007 can run in parallel after T004 starts the baseline consolidation
- In US1, T010 and T011 can run in parallel
- In US2, T015-T017 can run in parallel
- In US3, T020 and T021 can run in parallel
- T024 can run in parallel with T025 once all story phases are complete

---

## Parallel Example: User Story 2

```text
Task: "Cross-check featured project expectations against src/components/home/selected-work-section.tsx"
Task: "Cross-check contact resource expectations against src/components/home/stack-contact-section.tsx"
Task: "Confirm project and contact copy parity in src/messages/es.json and src/messages/en.json"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational
3. Complete Phase 3: User Story 1
4. Validate that the portfolio baseline clearly communicates the professional profile

### Incremental Delivery

1. Complete Setup + Foundational to establish the documentation baseline
2. Add User Story 1 validation for professional identity and narrative
3. Add User Story 2 validation for work showcase and public follow-up resources
4. Add User Story 3 validation for scope boundaries and future governance
5. Finish with cross-cutting verification and command-based checks

### Suggested MVP Scope

The smallest useful slice is **User Story 1** plus the Foundational phase, because that
already defines the portfolio as a coherent public professional presentation.

---

## Notes

- Total tasks: 28
- User Story 1 tasks: 5
- User Story 2 tasks: 5
- User Story 3 tasks: 5
- All tasks follow the required checklist format with IDs, labels where needed, and file paths
