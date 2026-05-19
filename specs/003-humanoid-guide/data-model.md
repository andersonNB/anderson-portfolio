# Data Model: Humanoid Guide

## Overview

This feature does not introduce persistent backend data. The data model describes the UI
entities and state used to evolve the existing guide into a more humanoid avatar while
keeping the same lightweight interaction role.

## Entities

### Humanoid Guide Shell

- **Purpose**: Represents the CMD-based avatar body that remains the visual anchor of the
  guide while adding human-like cues.
- **Fields**:
  - `variant`
  - `anchorCorner`
  - `sizeMode`
  - `visualPriority`
  - `motionProfile`
  - `themeMode`
  - `bodyParts`
  - `messageSet`
- **Validation Rules**:
  - Must remain recognizable as the existing CMD guide.
  - Must stay visually secondary to the portfolio's main content.
  - Must remain legible in both light and dark themes.

### Guide Body Part

- **Purpose**: Represents a visual humanoid element such as an arm, hand, leg, or foot.
- **Fields**:
  - `id`
  - `role`
  - `side`
  - `pose`
  - `visibilityMode`
- **Validation Rules**:
  - Must support the CMD identity rather than replace it.
  - Must fit within the guide footprint without creating layout obstruction.
  - Must remain readable across supported themes and viewport sizes.

### Greeting Gesture

- **Purpose**: Represents the lightweight welcoming motion performed by the guide.
- **Fields**:
  - `state`
  - `trigger`
  - `amplitude`
  - `reducedMotionMode`
- **Validation Rules**:
  - Must remain simple and non-dominant.
  - Must degrade gracefully for reduced-motion users.
  - Must not require a new interaction path or assistant behavior.

### Guide Prompt State

- **Purpose**: Represents the same hint or contact-oriented prompt behavior already tied to
  guide interaction.
- **Fields**:
  - `idle`
  - `hovered`
  - `focused`
  - `pressed`
  - `messageVisible`
  - `reducedMotion`
- **Validation Rules**:
  - Must preserve existing lightweight guide behavior.
  - Must support pointer, keyboard, and touch interaction.
  - Must stay optional and non-blocking.

## Relationships

- One **Humanoid Guide Shell** contains multiple **Guide Body Parts**.
- One **Humanoid Guide Shell** can present one **Greeting Gesture** state at a time.
- One **Humanoid Guide Shell** can reveal one **Guide Prompt State** set during
  interaction.

## State Considerations

- The guide should always have a stable resting pose.
- Greeting motion can appear briefly without redefining the guide's interaction model.
- Theme changes can alter contrast and body-part styling without changing the guide's role.
- Reduced-motion behavior can simplify or suppress gesture motion while preserving
  recognizability and prompt access.
