# Oobee AI Dev Suite

A clean, minimal web application prototype for the Oobee AI Dev Suite, extending the Oobee platform with development-focused tools and features.

## Overview

Oobee AI Dev Suite is a React-based web application that provides a unified interface for AI-powered development tools. The application features a sidebar navigation system with multiple specialized views for different development workflows.

## Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **React Router** - Client-side routing

## Design Philosophy

The application follows Oobee's visual design principles:

- **Clean & Minimal** - No unnecessary elements or decorations
- **Neutral Color Palette** - Light greys and white backgrounds
- **Purple Accent** - `#6E56CF` used sparingly for active states and titles
- **Functional First** - Clear labels and data-first approach
- **No Animations** - Static, performance-focused UI
- **Subtle Borders** - Clean separation with `border-gray-200`
- **Ample White Space** - Breathing room for content

## Features

### Views

1. **IDE View** (`/ide`)
   - Development environment interface with inline accessibility checks
   - Default landing page
   - Two-column split layout:
     - **Left: Code Editor** - Mock code editor displaying React/TypeScript files with line numbers and syntax highlighting for flagged lines
     - **Right: Findings Panel** - List of accessibility issues with severity filters (All, Must-fix, Warning)
   - **Finding Cards** - Each finding displays:
     - Severity badge (Must-fix or Warning)
     - Issue description
     - WCAG reference
     - Code location with line number
     - Action buttons: "Preview fix" and "Ignore with reason..."
   - **Preview Fix Modal** - Shows before/after code comparison with axe-core validation status
   - Static fixture data demonstrating the interface without real scanning

2. **PR Review** (`/pr`)
   - Pull request review interface
   - Code review tools

3. **Repo Settings** (`/settings`)
   - Repository configuration
   - Project settings management

### Layout

- **Fixed Sidebar** - 256px wide navigation panel
- **Responsive Main Area** - Flexible content region
- **Active State Highlighting** - Purple accent on current route

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/virgchiniwala/oobee-ai-dev-suite.git

# Navigate to project directory
cd oobee-ai-dev-suite

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev

# Open http://localhost:5173
```

### Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
oobee-ai-dev-suite/
├── src/
│   ├── components/
│   │   ├── Layout.tsx          # Main layout with sidebar
│   │   ├── CodeEditor.tsx      # Mock code editor component
│   │   ├── FindingsPanel.tsx   # Accessibility findings panel
│   │   ├── FindingCard.tsx     # Individual finding card
│   │   └── PreviewFixModal.tsx # Fix preview modal dialog
│   ├── views/
│   │   ├── IdeView.tsx         # IDE view component
│   │   ├── PrReview.tsx        # PR review component
│   │   └── RepoSettings.tsx    # Settings component
│   ├── fixtures/
│   │   └── ideFindings.ts      # Mock data for IDE view
│   ├── App.tsx                 # Router configuration
│   ├── main.tsx                # Application entry point
│   └── index.css               # Tailwind imports & base styles
├── public/                     # Static assets
├── tailwind.config.js          # Tailwind configuration
├── vite.config.ts              # Vite configuration
└── tsconfig.json               # TypeScript configuration
```

## Configuration

### Tailwind CSS

The Tailwind configuration includes the Oobee purple accent color:

```javascript
colors: {
  purple: {
    accent: '#6E56CF',
  },
}
```

### Routing

Routes are configured in `App.tsx`:
- `/` redirects to `/ide`
- `/ide` - IDE View
- `/pr` - PR Review
- `/settings` - Repo Settings

## Development Workflow

This project follows a PR-based workflow:
- All changes are made in feature branches
- Pull requests are created for review before merging to main
- README is kept up-to-date with project changes

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## License

MIT
