---

description: "Task list for Humanoid Guide"
---

# Tasks: Humanoid Guide

**Input**: Design documents from `/specs/003-humanoid-guide/`

**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md,
data-model.md, contracts/

**Tests**: Validation tasks are included because this feature changes a public interactive
UI element and must be reviewed for motion, theme parity, responsiveness, and reduced-motion behavior.

**Organization**: Tasks are grouped by user story to enable independent implementation and
testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this belongs to (e.g., [US1], [US2], [US3])
- Include exact file paths in descriptions

## Path Conventions

- Feature docs live in `specs/003-humanoid-guide/`
- Current guide logic lives in `src/components/home/animated-corner-guide.tsx`
- Homepage composition lives in `src/components/home/home-page.tsx`
- Shared styling lives in `src/app/globals.css`
- Localized copy lives in `src/messages/es.json` and `src/messages/en.json`
- Shared types live in `src/types/portfolio.ts`

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Confirm the active feature context and current avatar integration points

- [x] T001 Confirm active feature path in `.specify/feature.json`
- [x] T002 Review current guide implementation in `src/components/home/animated-corner-guide.tsx`
- [x] T003 [P] Review homepage mounting context in `src/components/home/home-page.tsx`
- [x] T004 [P] Review relevant Next.js guidance in `node_modules/next/dist/docs/01-app/03-api-reference/01-directives/use-client.md` and `node_modules/next/dist/docs/01-app/01-getting-started/11-css.md`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Extend the guide model and content scaffolding required by all stories

**CRITICAL**: No user story work can begin until this phase is complete

- [x] T005 Extend humanoid guide types and state contracts in `src/types/portfolio.ts`
- [x] T006 [P] Add humanoid guide content entries in `src/messages/es.json`
- [x] T007 [P] Add humanoid guide content entries in `src/messages/en.json`
- [x] T008 Refactor the guide component structure for body parts and gesture state in `src/components/home/animated-corner-guide.tsx`
- [x] T009 Add base humanoid guide layout hooks and theme-aware style tokens in `src/app/globals.css`
- [x] T010 Verify `src/components/home/home-page.tsx` still mounts the guide without changing page flow

**Checkpoint**: The humanoid guide has typed content, localized copy, and a reusable component shell ready for visual story work

---

## Phase 3: User Story 1 - Notice a more human guide presence (Priority: P1)

**Goal**: Make the current CMD guide feel recognizably more humanoid without losing its existing identity

**Independent Test**: A visitor can load the homepage and recognize the same CMD guide with simple human-like traits such as limbs or body stance

### Implementation for User Story 1

- [x] T011 [US1] Implement CMD-preserving humanoid body structure in `src/components/home/animated-corner-guide.tsx`
- [x] T012 [P] [US1] Add torso, arm, hand, leg, and foot styling in `src/app/globals.css`
- [x] T013 [P] [US1] Tune responsive body proportions and silhouette fit in `src/app/globals.css`
- [x] T014 [US1] Verify the redesigned guide remains secondary and recognizable in `src/components/home/home-page.tsx`

**Checkpoint**: The guide appears more human-like while still reading as the current CMD mascot

---

## Phase 4: User Story 2 - Receive a friendly greeting without changing the guide's role (Priority: P1)

**Goal**: Add a lightweight wave gesture while preserving the existing prompt behavior and interaction model

**Independent Test**: A visitor can see a restrained greeting gesture and still trigger the same short hint behavior already associated with the guide

### Implementation for User Story 2

- [x] T015 [US2] Implement greeting gesture state and wave behavior in `src/components/home/animated-corner-guide.tsx`
- [x] T016 [P] [US2] Add wave animation and prompt-friendly pose states in `src/app/globals.css`
- [x] T017 [P] [US2] Refine guide prompt copy for the humanoid tone in `src/messages/es.json` and `src/messages/en.json`
- [x] T018 [US2] Ensure prompt reveal behavior remains unchanged in role and scope inside `src/components/home/animated-corner-guide.tsx`

**Checkpoint**: The guide greets visitors more warmly without acting like a richer assistant

---

## Phase 5: User Story 3 - Preserve theme consistency and lightweight behavior (Priority: P2)

**Goal**: Keep the redesign coherent in light/dark themes, responsive on small screens, and safe for reduced-motion users

**Independent Test**: A maintainer can switch themes and review desktop/mobile layouts while confirming the guide remains readable, secondary, and reduced-motion aware

### Implementation for User Story 3

- [x] T019 [US3] Add theme-sensitive body-part and contrast handling in `src/app/globals.css`
- [x] T020 [P] [US3] Add reduced-motion-safe gesture fallbacks in `src/app/globals.css`
- [x] T021 [P] [US3] Ensure keyboard, touch, and motion preference handling stays coherent in `src/components/home/animated-corner-guide.tsx`
- [x] T022 [US3] Review final behavior against `specs/003-humanoid-guide/contracts/humanoid-guide-contract.md`

**Checkpoint**: The redesigned guide remains usable and visually coherent across themes, viewports, and motion preferences

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final consistency, validation, and implementation closeout

- [x] T023 [P] Review internal references across `specs/003-humanoid-guide/`
- [x] T024 Ensure `AGENTS.md` points to `specs/003-humanoid-guide/plan.md`
- [x] T025 Run `npm run lint`
- [x] T026 Run `npm run build`
- [x] T027 Perform manual desktop and theme-switch review using `specs/003-humanoid-guide/quickstart.md`
- [x] T028 Perform manual mobile and reduced-motion review using `specs/003-humanoid-guide/quickstart.md`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies; can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion; blocks all user stories
- **User Stories (Phase 3+)**: Depend on Foundational completion
- **Polish (Phase 6)**: Depends on all user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Starts after Foundational; defines the redesigned silhouette
- **User Story 2 (P1)**: Starts after User Story 1 because the wave gesture depends on the humanoid body structure
- **User Story 3 (P2)**: Starts after User Story 2 because theme, motion, and interaction tuning should apply to the final visual and gesture behavior

### Within Each User Story

- Update structure before styling
- Add styling before responsive/motion tuning
- Adjust copy only where the story needs user-facing language changes
- End each story with a story-specific verification step

### Parallel Opportunities

- T003 and T004 can run in parallel during setup
- T006 and T007 can run in parallel during foundational work
- T012 and T013 can run in parallel in US1
- T016 and T017 can run in parallel in US2
- T020 and T021 can run in parallel in US3

---

## Parallel Example: User Story 2

```text
Task: "Add wave animation and prompt-friendly pose states in src/app/globals.css"
Task: "Refine guide prompt copy for the humanoid tone in src/messages/es.json and src/messages/en.json"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational
3. Complete Phase 3: User Story 1
4. Validate that the guide feels more humanoid while keeping its CMD identity

### Incremental Delivery

1. Extend types, content, and guide structure
2. Add the humanoid silhouette and responsive body fit
3. Add the greeting gesture without changing prompt behavior
4. Add theme, reduced-motion, and interaction safety refinements
5. Finish with lint, build, and manual UI validation

### Suggested MVP Scope

The smallest useful slice is **User Story 1** plus the Foundational phase, because that already delivers the visible redesign of the guide without needing final gesture polish.

---

## Notes

- Total tasks: 28
- User Story 1 tasks: 4
- User Story 2 tasks: 4
- User Story 3 tasks: 4
- All tasks follow the required checklist format with IDs, labels where needed, and explicit file paths
