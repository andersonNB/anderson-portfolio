# Requirements Quality Checklist: Humanoid Guide

**Purpose**: Validate whether the humanoid guide requirements are complete, clear,
consistent, and review-ready before implementation and PR evaluation.
**Created**: 2026-05-19
**Feature**: [spec.md](../spec.md)

## Requirement Completeness

- [ ] CHK001 Are the allowed humanoid additions bounded enough to prevent the guide from drifting into a fully different mascot concept? [Completeness, Spec §FR-001, Spec §FR-002]
- [ ] CHK002 Does the spec define the required humanoid cues with enough specificity to guide design review beyond "hands, feet, posture, or equivalent body cues"? [Clarity, Spec §FR-002]
- [ ] CHK003 Are the prompt-preservation requirements complete enough to prevent accidental expansion of guide behavior during redesign? [Completeness, Spec §FR-005, Spec §FR-006]
- [ ] CHK004 Are theme-related requirements complete enough to define what successful light/dark adaptation means in practice? [Clarity, Spec §FR-008]

## Requirement Clarity

- [ ] CHK005 Is "more human and expressive" specific enough for two reviewers to judge consistently? [Ambiguity, Spec §User Story 1]
- [ ] CHK006 Is "same branded portfolio element" defined clearly enough to distinguish preservation from reinvention? [Clarity, Spec §FR-007]
- [ ] CHK007 Is "visually lightweight" specific enough to evaluate gesture size, frequency, and overall attention cost? [Ambiguity, Spec §FR-004]
- [ ] CHK008 Is the expected wave behavior described clearly enough to distinguish a greeting gesture from a broader animation sequence? [Clarity, Spec §FR-003]

## Requirement Consistency

- [ ] CHK009 Do the redesign requirements stay consistent with the non-goal that the feature is not a richer assistant product? [Consistency, Spec §FR-006, Contract §Maintainer Contract]
- [ ] CHK010 Do the assumptions about preserving prompt behavior align with the new humanoid redesign scope? [Consistency, Spec §Assumptions, Spec §FR-005]
- [ ] CHK011 Do the success criteria reinforce the same "warmer but still secondary" positioning stated in the user stories and requirements? [Consistency, Spec §SC-001, Spec §SC-004]

## Acceptance Criteria Quality

- [ ] CHK012 Can reviewers objectively determine whether the avatar is still recognizable as the same CMD guide? [Measurability, Spec §SC-001]
- [ ] CHK013 Is theme coherence measurable enough for PR review decisions rather than subjective visual preference? [Clarity, Spec §SC-002]
- [ ] CHK014 Can "does not create layout obstruction or attention competition" be evaluated with repeatable acceptance criteria? [Measurability, Spec §SC-004]

## Scenario Coverage

- [ ] CHK015 Are requirements sufficiently separated for idle pose, greeting motion, and prompt-trigger interaction states? [Coverage, Data Model §Greeting Gesture, Data Model §Guide Prompt State]
- [ ] CHK016 Are non-interaction scenarios covered clearly enough for visitors who ignore the guide entirely? [Coverage, Contract §Visitor Contract]
- [ ] CHK017 Are cross-theme review scenarios covered for cases where one theme reads the limbs or gesture differently from the other? [Coverage, Spec §Edge Cases]

## Edge Case Coverage

- [ ] CHK018 Does the spec define expected behavior for small mobile viewports when new limbs make the silhouette larger? [Edge Case, Gap]
- [ ] CHK019 Are reduced-motion expectations specific enough to define what parts of the greeting motion must simplify or stop? [Clarity, Spec §FR-011]
- [ ] CHK020 Is fallback behavior defined if the humanoid redesign weakens the CMD identity during visual review? [Gap, Spec §Edge Cases]

## Non-Functional Requirements

- [ ] CHK021 Are accessibility expectations complete enough to cover keyboard reachability, touch equivalence, and non-blocking interaction after the redesign? [Completeness, Gap]
- [ ] CHK022 Are performance expectations concrete enough to assess whether the redesign keeps the landing experience lightweight? [Clarity, Plan §Performance Goals]
- [ ] CHK023 Do the requirements define enough constraints to avoid unnecessary animation tooling or asset weight during implementation? [Consistency, Plan §Constraints]

## Dependencies & Assumptions

- [ ] CHK024 Are localization dependencies documented strongly enough to ensure any prompt refinement stays synchronized in `es` and `en`? [Dependency, Spec §FR-009, Spec §FR-012]
- [ ] CHK025 Is the assumption that the first humanoid version can stay simple still bounded enough to control review scope? [Assumption, Spec §Assumptions]
- [ ] CHK026 Are maintainers given explicit enough guidance to tell design evolution apart from product-scope expansion? [Traceability, Contract §Maintainer Contract]

## Ambiguities & Conflicts

- [ ] CHK027 Is there any ambiguity between "same CMD guide" and "more humanoid" that should be resolved more explicitly in the requirements? [Ambiguity, Spec §FR-001, Spec §FR-002]
- [ ] CHK028 Do the requirements clearly separate a greeting gesture from any new required conversion or navigation action? [Clarity, Spec §FR-003, Spec §FR-005]
- [ ] CHK029 Is there any unresolved conflict between expressive motion and the requirement to remain visually secondary? [Conflict, Spec §FR-004, Spec §FR-011]

## Notes

- Intended audience: author
- Depth: standard
- Focus area: requirements-quality
- This checklist is for requirement review quality, not implementation QA.
