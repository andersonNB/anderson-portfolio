# Animated Guide Contract

## Purpose

Define the user-facing and maintainer-facing contract for the animated corner guide.

## Visitor Contract

1. The guide is visible as a small, intentional branded element in a screen corner.
2. The guide does not prevent the visitor from reading or navigating the portfolio.
3. Interacting with the guide can reveal a short friendly prompt or contact-oriented
   message.
4. The guide remains optional; the portfolio is still fully usable without interacting
   with it.

## Maintainer Contract

1. The feature remains a lightweight UI component, not a chatbot or service-backed tool.
2. Public-facing messages must remain localized across supported languages.
3. Motion must respect reduced-motion expectations and stay non-intrusive.
4. The guide's visual style must support the portfolio narrative rather than compete with
   it.

## Non-Goals Covered by This Contract

- Conversational assistant behavior
- Backend-driven personalization
- Login-gated interaction
- Required third-party widget integration
- Overlay behavior that blocks the page or replaces existing contact/navigation patterns

## Verification Cues

- A reviewer can identify the guide quickly without losing content access.
- A reviewer can trigger at least one friendly prompt through lightweight interaction.
- A reviewer can confirm the guide still feels decorative plus directional, not
  application-like.
