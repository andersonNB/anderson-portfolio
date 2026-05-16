---

description: "Task list for Animated Corner Guide"
---

# Tasks: Animated Corner Guide

**Input**: Design documents from `/specs/002-animated-guide/`

**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md,
data-model.md, contracts/

**Tests**: Validation tasks are included because this feature changes the public UI and
must be checked for interaction, responsiveness, localization, and reduced-motion
behavior.

**Organization**: Tasks are grouped by user story to enable independent implementation and
testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- Feature docs live in `specs/002-animated-guide/`
- Homepage composition lives in `src/components/home/`
- Shared styling lives in `src/app/globals.css`
- Localized copy lives in `src/messages/es.json` and `src/messages/en.json`
- Shared types live in `src/types/portfolio.ts`

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Prepare the feature workspace and confirm the current homepage integration points

- [x] T001 Confirm active feature path in `.specify/feature.json`
- [x] T002 Review homepage integration points in `src/components/home/home-page.tsx` and `src/app/page.tsx`
- [x] T003 [P] Review current visual language tokens and motion patterns in `src/app/globals.css`
- [x] T004 [P] Review relevant Next.js guidance note in `node_modules/next/dist/docs/index.md`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Create the shared model, copy, and integration scaffolding required by all stories

**CRITICAL**: No user story work can begin until this phase is complete

- [x] T005 Define animated-guide content and state types in `src/types/portfolio.ts`
- [x] T006 [P] Add localized guide content entries in `src/messages/es.json`
- [x] T007 [P] Add localized guide content entries in `src/messages/en.json`
- [x] T008 Create the base animated guide component shell in `src/components/home/animated-corner-guide.tsx`
- [x] T009 Add base guide layout and non-blocking positioning rules in `src/app/globals.css`
- [x] T010 Mount the guide in the homepage composition from `src/components/home/home-page.tsx`

**Checkpoint**: The guide exists as a mounted, typed, localized UI shell and future story work can build on it

---

## Phase 3: User Story 1 - Notice a memorable animated guide (Priority: P1)

**Goal**: Make the guide visually distinctive, intentional, and secondary to the portfolio content

**Independent Test**: A visitor can load the homepage and notice the guide quickly without
losing access to hero, work, stack, or contact content

### Implementation for User Story 1

- [x] T011 [US1] Implement the chosen visual guide structure in `src/components/home/animated-corner-guide.tsx`
- [x] T012 [P] [US1] Add visual styling, idle animation, and corner placement in `src/app/globals.css`
- [x] T013 [P] [US1] Tune responsive size and spacing rules for the guide in `src/app/globals.css`
- [x] T014 [US1] Verify the homepage composition still reads cleanly with the guide in `src/components/home/home-page.tsx`

**Checkpoint**: The guide is visibly present and memorable without dominating the page

---

## Phase 4: User Story 2 - Receive a friendly contact prompt (Priority: P1)

**Goal**: Add lightweight interaction that reveals a short localized message or contact cue

**Independent Test**: A visitor can hover, focus, tap, or click the guide and receive a
friendly prompt that feels aligned with the portfolio tone

### Implementation for User Story 2

- [x] T015 [US2] Implement guide interaction state and message reveal behavior in `src/components/home/animated-corner-guide.tsx`
- [x] T016 [P] [US2] Add prompt bubble or message panel styling in `src/app/globals.css`
- [x] T017 [P] [US2] Refine localized guide prompts in `src/messages/es.json` and `src/messages/en.json`
- [x] T018 [US2] Ensure prompt behavior remains optional and non-blocking in `src/components/home/animated-corner-guide.tsx`

**Checkpoint**: The guide can deliver a friendly contact-oriented prompt without feeling intrusive

---

## Phase 5: User Story 3 - Preserve a lightweight portfolio experience (Priority: P2)

**Goal**: Keep the feature accessible, motion-safe, and clearly inside the static-first portfolio scope

**Independent Test**: A maintainer can confirm the guide remains lightweight, reduced-motion aware, and independent from backend or assistant-like complexity

### Implementation for User Story 3

- [x] T019 [US3] Add reduced-motion behavior handling in `src/components/home/animated-corner-guide.tsx`
- [x] T020 [P] [US3] Add reduced-motion and accessibility-safe animation rules in `src/app/globals.css`
- [x] T021 [P] [US3] Ensure keyboard focus and touch-friendly interaction states in `src/components/home/animated-corner-guide.tsx`
- [x] T022 [US3] Review final guide behavior against the static-first contract in `specs/002-animated-guide/contracts/animated-guide-contract.md`

**Checkpoint**: The feature remains lightweight, accessible, and aligned with portfolio constraints

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final consistency, quality, and validation across the feature

- [x] T023 [P] Review internal references across `specs/002-animated-guide/`
- [x] T024 Ensure `AGENTS.md` points to `specs/002-animated-guide/plan.md`
- [x] T025 Run `npm run lint`
- [x] T026 Run `npm run build`
- [x] T027 Perform manual desktop review using `specs/002-animated-guide/quickstart.md`
- [x] T028 Perform manual mobile and reduced-motion review using `specs/002-animated-guide/quickstart.md`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies; can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion; blocks all user stories
- **User Stories (Phase 3+)**: Depend on Foundational completion
- **Polish (Phase 6)**: Depends on all user story phases being complete

### User Story Dependencies

- **User Story 1 (P1)**: Starts after Foundational; no dependency on other stories
- **User Story 2 (P1)**: Starts after User Story 1 because interaction depends on the guide shell and placement being in place
- **User Story 3 (P2)**: Starts after User Story 2 because reduced-motion and accessibility tuning must be applied to the final interaction behavior

### Within Each User Story

- Implement the structure first
- Add styling and responsive behavior
- Add or refine localized copy where needed
- Finish with story-level validation against the spec and contract

### Parallel Opportunities

- T003 and T004 can run in parallel during setup
- T006 and T007 can run in parallel during foundational work
- T012 and T013 can run in parallel in US1
- T016 and T017 can run in parallel in US2
- T020 and T021 can run in parallel in US3
- T027 and T028 can run sequentially after lint/build because both depend on the completed feature

---

## Parallel Example: User Story 2

```text
Task: "Add prompt bubble or message panel styling in src/app/globals.css"
Task: "Refine localized guide prompts in src/messages/es.json and src/messages/en.json"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational
3. Complete Phase 3: User Story 1
4. Validate that the corner guide is visible, intentional, and non-blocking

### Incremental Delivery

1. Build the mounted guide shell and localized content support
2. Add the visual guide presence and responsive placement
3. Add friendly interaction prompts
4. Add reduced-motion and accessibility tuning
5. Finish with lint, build, and manual validation

### Suggested MVP Scope

The smallest useful slice is **User Story 1** plus the Foundational phase, because that
already adds the visible branded guide without needing richer interaction.

---

## Notes

- Total tasks: 28
- User Story 1 tasks: 4
- User Story 2 tasks: 4
- User Story 3 tasks: 4
- All tasks follow the required checklist format with IDs, labels where needed, and file paths
