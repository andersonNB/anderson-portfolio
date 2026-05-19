# Research: Humanoid Guide

## Decision 1: Preserve the existing CMD identity as the core silhouette

**Decision**: Keep the terminal window shape and face as the main body of the guide, then
add simple limb cues around that shell rather than redesigning it into a fully separate
character.

**Rationale**: The spec requires the guide to remain recognizable as the current portfolio
companion. Keeping the CMD body intact protects brand continuity while still allowing a
warmer, more human expression.

**Alternatives considered**:

- Replace the guide with a fully illustrated mascot. Rejected because it risks breaking
  continuity and making the feature feel like a new product concept.
- Add only facial changes with no body cues. Rejected because it would not deliver enough
  of the humanoid redesign the feature is asking for.

## Decision 2: Use CSS-built limbs and gesture states instead of image assets or animation libraries

**Decision**: Build arms, legs, and the wave gesture using lightweight CSS shapes and
state-based class changes inside the existing component.

**Rationale**: The current project already expresses the guide through component markup and
global styling. CSS-built limbs keep the feature editable across themes, avoid new asset
management, and stay aligned with the lean-dependency rule in the constitution.

**Alternatives considered**:

- Add SVG or raster character assets. Rejected because that would make theme adaptation
  and quick iteration harder.
- Introduce an animation library. Rejected because the feature only needs a small wave and
  idle motion, not a richer motion system.

## Decision 3: Keep the greeting gesture short, optional, and non-loop-dominant

**Decision**: Treat the wave as a lightweight attention gesture that can appear in idle or
  greeting moments without becoming a constant dominant loop.

**Rationale**: The feature must add warmth without turning the guide into an attention
  magnet. A restrained gesture keeps the landing experience calm and respects the
  portfolio's narrative-first priority.

**Alternatives considered**:

- Continuous waving animation. Rejected because it would compete with surrounding content.
- No greeting motion at all. Rejected because the requested redesign explicitly asks for a
  greeting behavior.

## Decision 4: Preserve the existing prompt model and only refine supporting copy if needed

**Decision**: Reuse the current interaction pattern and prompt behavior, adjusting only the
  avatar's presentation and any small copy tweaks required by the more human tone.

**Rationale**: The spec explicitly says the guide should continue to show the same kind of
  hint on interaction. Reusing the current prompt contract avoids accidental scope
  expansion and keeps the implementation centered on design.

**Alternatives considered**:

- Add a new prompt flow tied to the wave gesture. Rejected because it would add new
  behavior rather than redesign the existing one.
- Remove prompt behavior and make the change purely decorative. Rejected because the
  current guide interaction is part of the established experience.
