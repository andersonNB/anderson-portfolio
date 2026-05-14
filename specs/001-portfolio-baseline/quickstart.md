# Quickstart: Validate Portfolio Baseline

## Goal

Confirm that the portfolio still matches the documented static-first baseline and that the
planning artifacts remain aligned with the public experience.

## Steps

1. Open the repository root.
2. Review `specs/001-portfolio-baseline/spec.md` and
   `specs/001-portfolio-baseline/contracts/public-experience-contract.md`.
3. Start the development server:

```bash
npm run dev
```

4. Open the public homepage and verify:
   - The owner identity and professional focus are immediately visible.
   - Main sections are reachable from the public navigation.
   - Project showcase items expose meaningful context and working destinations.
   - Contact resources are visible and directly usable.
   - No login, private account flow, or service-gated content is required.
5. Switch between supported locales and verify equivalent public meaning.
6. Review the experience on desktop and mobile widths.
7. Run validation commands:

```bash
npm run lint
npm run build
```

## Expected Result

The portfolio behaves as a public professional presentation with no required backend
services, no account system, and no ambiguity about the intended scope.
