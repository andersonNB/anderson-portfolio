# Feature Specification: Humanoid Guide

**Feature Branch**: `003-humanoid-guide`

**Created**: 2026-05-18

**Status**: Draft

**Input**: User description: "Evolucionar el avatar actual del portfolio para que conserve
la forma de CMD con cara, pero se vea un poco mas humanoide agregando manos, pies y un
saludo simple con la mano. Debe mantener la misma dinamica de mostrar una pista cuando se
interactua con el avatar, y adaptarse al tema claro y oscuro del sitio."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Notice a more human guide presence (Priority: P1)

As a visitor, I want the corner guide to feel more human and expressive while still
reading clearly as the existing CMD-inspired avatar, so that the portfolio feels more
personal and memorable.

**Why this priority**: The main value of this change is visual personality. If the avatar
does not feel recognizably upgraded, the feature does not deliver enough value.

**Independent Test**: A visitor can load the homepage and immediately identify the guide
as the same portfolio companion, now with humanoid cues that make it feel friendlier.

**Acceptance Scenarios**:

1. **Given** a visitor opens the homepage, **When** the guide becomes visible, **Then**
   it still reads as a CMD-style portfolio avatar rather than a different unrelated
   character.
2. **Given** the visitor notices the guide, **When** they look at its silhouette and
   posture, **Then** they can perceive simple humanoid traits such as hands, feet, or a
   body-like stance.

---

### User Story 2 - Receive a friendly greeting without changing the guide's role (Priority: P1)

As a visitor, I want the guide to greet me with a simple hand wave while keeping its
existing hint behavior, so that the interaction feels warmer without becoming a more
complex assistant.

**Why this priority**: The change should add warmth and motion, but it must not change
the purpose of the guide or introduce a new interaction model.

**Independent Test**: A visitor can see a simple greeting gesture and still trigger the
same kind of short prompt they already expect from the current guide.

**Acceptance Scenarios**:

1. **Given** the guide is visible on the page, **When** it enters its idle or attention
   state, **Then** it can perform a simple greeting gesture such as waving with one hand.
2. **Given** the visitor hovers, focuses, taps, or clicks the guide, **When** the
   interaction occurs, **Then** the guide still reveals a short prompt without requiring
   any new action flow.

---

### User Story 3 - Preserve theme consistency and lightweight behavior (Priority: P2)

As a maintainer, I want the more humanoid guide to stay aligned with light and dark
themes and remain visually lightweight, so that the portfolio keeps its clean narrative
and static-first scope.

**Why this priority**: The feature must not break the portfolio's visual system or make
the guide feel heavier than the rest of the experience.

**Independent Test**: A maintainer can switch themes and review the guide on desktop and
mobile while confirming that the visual upgrade remains compatible, secondary, and
optional.

**Acceptance Scenarios**:

1. **Given** the portfolio theme changes between light and dark, **When** the guide is
   displayed, **Then** its body, face, limbs, and greeting state remain legible and
   stylistically coherent in both modes.
2. **Given** the guide includes extra humanoid details, **When** it is reviewed in the
   portfolio layout, **Then** it remains secondary to the main content and does not
   expand into a richer assistant feature.

---

### Edge Cases

- What happens when the humanoid details make the guide feel too visually heavy on small
  mobile screens?
- How does the guide behave for motion-sensitive users if the greeting gesture would
  otherwise loop or repeat?
- What happens if the humanoid shape reads too much like a separate cartoon character and
  loses the CMD identity?
- What happens if one theme makes the limbs or greeting gesture harder to read than the
  other?
- How does the experience behave on mobile and keyboard-only navigation for this feature?

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The portfolio MUST preserve the existing corner guide as a CMD-inspired
  avatar rather than replacing it with a completely different character concept.
- **FR-002**: The guide MUST introduce simple humanoid traits that can include hands,
  feet, posture, or equivalent body cues that make the avatar feel friendlier.
- **FR-003**: The guide MUST support a simple greeting gesture that reads as a wave or
  comparable welcoming motion.
- **FR-004**: The greeting gesture MUST remain visually lightweight and MUST not dominate
  the page or distract from the portfolio's main content.
- **FR-005**: Visitors MUST still be able to trigger the same category of short prompt or
  hint that the current guide already provides.
- **FR-006**: The feature MUST NOT introduce new assistant capabilities, conversation
  flows, required navigation paths, or service-backed behavior.
- **FR-007**: The guide MUST remain understandable as the same branded portfolio element
  before and after the humanoid redesign.
- **FR-008**: The guide MUST adapt cleanly to both light and dark themes without losing
  readability in its face, limbs, or greeting state.
- **FR-009**: Any visible prompt content associated with the guide MUST preserve meaning
  across the portfolio's supported public languages.
- **FR-010**: The updated guide MUST remain usable and visually secondary on desktop and
  mobile viewports.
- **FR-011**: The guide MUST respect motion-sensitive users by reducing or simplifying the
  greeting motion when appropriate.
- **FR-012**: Any user-facing copy change MUST specify whether both Spanish and English
  content need updates.
- **FR-013**: Any UI change MUST preserve responsive behavior, semantic structure, and
  keyboard accessibility for the affected experience.

### Key Entities *(include if feature involves data)*

- **Humanoid Guide Shell**: The CMD-based avatar body that keeps the guide recognizable
  while adding simple humanoid cues.
- **Greeting Gesture**: The lightweight wave or equivalent welcoming motion shown by the
  guide.
- **Guide Prompt State**: The same short hint or contact-oriented prompt behavior already
  associated with visitor interaction.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: In first-screen viewing, the updated guide is still recognizable as the
  portfolio's existing CMD avatar while visibly more human-like.
- **SC-002**: A reviewer can switch between light and dark themes and confirm that the
  guide remains readable and visually coherent in both modes.
- **SC-003**: A reviewer can trigger the guide interaction and receive the same category
  of short prompt without encountering any new assistant behavior or extra interaction
  steps.
- **SC-004**: On desktop and mobile review, the guide remains secondary to the main
  content and does not create layout obstruction or attention competition that changes the
  reading flow.

## Assumptions

- The redesign is visual-first and does not require changing the underlying purpose of the
  guide within the portfolio.
- The first version of the humanoid treatment can stay simple as long as the avatar reads
  as warmer and more expressive than the current version.
- Existing prompt behavior, locale parity, and contact intent will be reused unless the
  feature explicitly requires new copy later.
- Theme adaptation is part of scope because the portfolio already supports light and dark
  presentation.
- Motion remains intentionally small and optional so the guide stays inside the current
  static-first portfolio boundary.
