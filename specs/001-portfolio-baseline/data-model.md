# Data Model: Portfolio Baseline Definition

## Overview

This feature does not introduce persisted backend data. Its data model documents the
public content entities that define the current portfolio experience and the relationships
between them.

## Entities

### Portfolio Experience

- **Purpose**: Represents the complete public-facing portfolio as a coherent presentation.
- **Fields**:
  - `profileNarrative`
  - `sectionCollection`
  - `projectShowcase`
  - `skillGrouping`
  - `contactResources`
  - `supportedLocales`
- **Validation Rules**:
  - Must expose a coherent professional identity.
  - Must remain usable without authentication or private user state.
  - Must preserve equivalent meaning across supported locales.

### Profile Narrative

- **Purpose**: Captures the owner identity, specialization, and value proposition.
- **Fields**:
  - `ownerName`
  - `headline`
  - `specializationSummary`
  - `supportingFacts`
- **Validation Rules**:
  - Must identify Anderson Navarro clearly.
  - Must communicate a professional focus in a short first-pass reading.

### Section Collection

- **Purpose**: Defines the major content areas exposed in the homepage flow.
- **Fields**:
  - `navigationItems`
  - `heroSection`
  - `aboutSection`
  - `experienceSection`
  - `selectedWorkSection`
  - `stackSection`
  - `contactSection`
- **Validation Rules**:
  - Each required section must remain reachable through direct navigation.
  - Sections must support a coherent single-page reading flow.

### Project Showcase Item

- **Purpose**: Represents a featured project used as proof of work.
- **Fields**:
  - `title`
  - `summary`
  - `contextLabel`
  - `impactStatement`
  - `destinationLink`
  - `mediaAsset`
  - `tagCollection`
- **Validation Rules**:
  - Must communicate what the project is and why it matters.
  - Must point to a valid public destination or be clearly marked otherwise.

### Skill or Tooling Group

- **Purpose**: Represents the visible technical stack and positioning cues.
- **Fields**:
  - `groupTitle`
  - `items`
  - `supportingContext`
- **Validation Rules**:
  - Items must reinforce the professional narrative.
  - The group should avoid becoming an uncurated list of unrelated tools.

### Public Contact Resource

- **Purpose**: Represents a public action a visitor can take after reviewing the portfolio.
- **Fields**:
  - `label`
  - `destination`
  - `resourceType`
  - `availabilityStatus`
- **Validation Rules**:
  - Must be publicly reachable.
  - Must not require a portfolio account or private session to serve its purpose.

### Supported Locale

- **Purpose**: Represents a language version of the public portfolio content.
- **Fields**:
  - `localeCode`
  - `translatedSections`
  - `contentParityStatus`
- **Validation Rules**:
  - Must preserve equivalent meaning for the public experience.
  - Missing or stale content must be treated as a maintenance issue.

## Relationships

- A **Portfolio Experience** contains one **Profile Narrative**.
- A **Portfolio Experience** contains one **Section Collection**.
- A **Section Collection** includes many **Project Showcase Items**.
- A **Section Collection** includes one or more **Skill or Tooling Groups**.
- A **Section Collection** includes many **Public Contact Resources**.
- A **Portfolio Experience** supports one or more **Supported Locales**.
- Each **Supported Locale** maps to the same conceptual sections and public actions.

## State Considerations

- The baseline portfolio is intentionally public and static-first.
- Locale selection and theme preference may alter presentation, but they do not change the
  baseline product boundary.
- Any future state involving user identity, persistent visitor records, or service-backed
  flows would constitute a scope expansion beyond this model.
