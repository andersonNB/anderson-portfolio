# Public Experience Contract

## Purpose

Define the minimum contract that the public portfolio experience must continue to satisfy
while the product remains within the baseline scope.

## Visitor Contract

1. The experience identifies Anderson Navarro and communicates his professional focus
   without requiring authentication.
2. Visitors can navigate the primary sections of the portfolio directly from the public
   interface.
3. Featured projects include enough context to understand why they matter and where the
   visitor can learn more.
4. Public follow-up resources such as contact channels, repositories, or CV access remain
   discoverable and directly reachable.
5. The public experience remains readable and usable across supported viewport sizes and
   basic keyboard interaction.

## Maintainer Contract

1. Changes that stay within the baseline may refine copy, visuals, assets, layout, or
   project highlights without redefining the product.
2. Changes that introduce login, user-specific persistence, transactional flows, required
   third-party services, or backend-driven product behavior must be treated as explicit
   scope expansion.
3. Public content updates must preserve equivalent meaning across supported locales.
4. Broken external destinations must be fixed, replaced, or clearly handled before the
   experience is considered ready.

## Non-Goals Covered by This Contract

- User registration or authentication
- Private dashboards or member-only areas
- Database-backed visitor records
- Required integrations with external SaaS platforms to browse the portfolio
- Transactional or workflow-heavy product behavior beyond profile presentation

## Verification Cues

- A reviewer can browse the homepage and reach all major sections without signing in.
- A reviewer can open each public action shown in the contact or project areas.
- A reviewer can verify that the product is still a portfolio presentation rather than a
  service-backed application.
