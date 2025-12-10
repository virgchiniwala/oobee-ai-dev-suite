# Oobee AI Dev Suite

A prototype interface exploring how accessibility checks and fix suggestions could appear inside developer workflows.  
This is a front-end only prototype used to model IDE checks, PR suggestions, and repo-level settings.

## Overview

The project visualises how an **Oobee developer-focused tool** might behave inside IDEs, pull requests, and CI/CD workflows.  
It mirrors the visual style used in Oobee Web and Inspect Plus: neutral greys, structured layouts, sparse use of the Oobee purple accent (`#6E56CF`).

There is **no backend**, no axe-core integration, and all data is static.  
The goal is to evaluate interactions and layout—not functionality.

## Tech Stack

- React 18  
- TypeScript  
- Vite  
- Tailwind CSS  
- React Router  

## Design Notes

The prototype follows Oobee’s design language:

- Neutral greys and white backgrounds  
- Subtle borders, clear spacing  
- Purple accent `#6E56CF` for active states  
- Monospace fonts only for code/diff sections  
- No animation or decorative elements  

## Prototype Views

### 1. IDE View (`/ide`)

A mock “editor” showing how inline accessibility checks could surface.

- Two-column layout:  
  - **Left:** static code editor with highlighted lines  
  - **Right:** list of accessibility findings with severity filters  
- Finding cards include:  
  - severity  
  - description  
  - WCAG reference  
  - code location  
  - actions (“Preview fix”, “Ignore…”)  
- “Preview fix” modal shows before/after snippets and a static validation message  
- Data from `fixtures/ideFindings.ts`

### 2. PR Review (`/pr`)

A pull request mock with diff-based accessibility checks.

- **Left:** simplified GitHub-style diff (additions/removals, inline badges)  
- **Right:** suggested fix cards  
- Suggestions contain:  
  - severity + WCAG clause  
  - before/after code  
  - validation line  
  - accept/edit buttons  
- Accepting a suggestion updates local state  
- Data from `fixtures/prFindings.ts`

### 3. Repo Settings (`/settings`)

A mock configuration page for a repository.

- framework selection  
- IDE/PR/CI toggles  
- report-only vs blocking modes  
- severity gates  
- telemetry notice  
- live JSON showing the current config state  

## Layout

- Fixed left sidebar for navigation  
- Right-side content panel for views  
- Active nav item highlighted using the Oobee purple accent  

## Getting Started

### Installation

```bash
git clone https://github.com/virgchiniwala/oobee-ai-dev-suite.git
cd oobee-ai-dev-suite
npm install
```

### Development
```
npm run dev
open http://localhost:5173
```

### Build
```
npm run build
npm run preview
```

## Configuration
### Routing

Defined in ```App.tsx```:
```/``` → redirects to ```/ide```

```/ide``` → ```IDE View```

```/pr``` → ```PR Review```

```/settings``` → ```Repo Settings```

### Intended Use

This repository is meant for:

Exploring UI flows for developer-side accessibility tooling

Sharing with product, engineering, and design teams

Testing layouts and interactions before building actual integrations

This is not a functional accessibility scanner.

### Browser Support

Chrome / Edge (latest)

Firefox (latest)

Safari (latest)

### License

MIT
