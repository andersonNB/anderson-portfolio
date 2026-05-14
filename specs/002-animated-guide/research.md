# Research: Animated Corner Guide

## Decision 1: Use a branded UI mascot rather than a simulated assistant product

**Decision**: Treat the feature as a stylized portfolio guide with lightweight prompts,
not as a chatbot, floating support widget, or productivity assistant.

**Rationale**: The portfolio's value comes from personality and professional clarity. A
small branded guide can enhance that without shifting the product into a service-like
experience.

**Alternatives considered**:

- Build a richer assistant with multiple actions or conversation flow. Rejected because it
  expands scope and complexity beyond the portfolio baseline.
- Add a generic floating CTA pill only. Rejected because it would miss the distinctive
  visual personality the feature is meant to introduce.

## Decision 2: Favor CSS-driven animation with lightweight interaction state

**Decision**: Prefer a component whose motion and visual life come primarily from CSS and
small client-side state transitions.

**Rationale**: The repo already uses expressive CSS and client-side UI behavior. A
CSS-first approach keeps the guide light, fast, and easier to maintain in the existing
stack.

**Alternatives considered**:

- Introduce a heavy animation library. Rejected because the feature does not justify more
  dependency weight.
- Use frame-by-frame or media-heavy animation assets. Rejected because that increases
  asset overhead and reduces flexibility.

## Decision 3: Include explicit reduced-motion behavior from the first version

**Decision**: The guide should degrade to minimal or near-static behavior when reduced
motion is preferred.

**Rationale**: Persistent corner motion can quickly become distracting or inaccessible.
This portfolio already treats accessibility as part of credibility, so motion sensitivity
must be handled as a core requirement.

**Alternatives considered**:

- Ship the animated version first and add reduced-motion later. Rejected because it would
  create an avoidable accessibility gap.
- Remove motion entirely. Rejected because the feature's value depends partly on feeling
  alive and distinctive.

## Decision 4: Keep prompts short and localizable

**Decision**: Messages should be brief, friendly, and localized in the same content system
as the rest of the portfolio.

**Rationale**: Long floating text would compete with the portfolio content. Short prompts
fit the product tone better and reduce layout risk across languages and screen sizes.

**Alternatives considered**:

- Use long tooltip-style messages. Rejected because they risk visual clutter and copy drift.
- Hardcode prompt text in the component. Rejected because the repo constitution requires
  localization-aware public copy.
