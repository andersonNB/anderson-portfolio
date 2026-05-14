# Data Model: Animated Corner Guide

## Overview

This feature does not introduce persistent backend data. The data model describes the UI
entities and state needed to render and localize the animated guide within the portfolio.

## Entities

### Animated Guide

- **Purpose**: Represents the fixed visual mascot/guide shown in a corner of the portfolio.
- **Fields**:
  - `variant`
  - `anchorCorner`
  - `sizeMode`
  - `visualPriority`
  - `motionProfile`
  - `messageSet`
- **Validation Rules**:
  - Must remain visually secondary to the main content.
  - Must fit within supported viewport sizes without blocking critical UI.
  - Must be understandable as a branded portfolio element.

### Guide Message

- **Purpose**: Represents a short prompt shown in response to interaction or attention
  state.
- **Fields**:
  - `id`
  - `locale`
  - `text`
  - `trigger`
  - `ctaIntent`
- **Validation Rules**:
  - Must remain short and readable.
  - Must align in meaning across supported locales.
  - Must encourage contact or exploration without sounding intrusive.

### Guide Interaction State

- **Purpose**: Represents the presentational state of the guide during idle and interaction
  moments.
- **Fields**:
  - `idle`
  - `hovered`
  - `focused`
  - `pressed`
  - `messageVisible`
  - `reducedMotion`
- **Validation Rules**:
  - Must remain optional and non-blocking.
  - Must support pointer and touch-friendly behavior.
  - Must adapt when reduced motion is preferred.

## Relationships

- One **Animated Guide** has one or more **Guide Messages**.
- One **Animated Guide** transitions through one **Guide Interaction State** set.
- Each **Guide Message** belongs to one locale-specific content set.

## State Considerations

- The guide should always have a stable idle state.
- Interaction states can reveal or swap messages, but should not require persistent user
  memory or saved progress.
- Reduced-motion behavior can change the motion profile without changing the guide's core
  identity or message intent.
