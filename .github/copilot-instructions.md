# Netflix-Style Portfolio AI Development Guide

This document provides essential context for AI agents working in this codebase.

## Project Overview

A Netflix-inspired developer portfolio built with React + Vite + Tailwind CSS. The architecture emphasizes centralized data management and component reusability.

## Key Architecture Patterns

### 1. Centralized Data Management

- All content is managed in `src/assets/data/contact-detail.js`
- Modify this file to update site content instead of changing components
- Data structure defines: personal info, skills, work experience, and projects

### 2. Component Structure

- `App.jsx`: Main layout and modal state management
- Components follow Netflix UI patterns:
  - `Hero.jsx`: Full-width banner section
  - `ProjectRow.jsx`: Horizontally scrolling content rows
  - `ProjectCard.jsx`: Individual cards within rows
  - `InfoModal.jsx`: Unified modal system for project/experience details

### 3. Data Flow

```
contact-detail.js → App.jsx → Individual Components
                     ↓
              Modal System (InfoModal)
```

## Development Workflow

1. Installation:

```bash
npm install  # or yarn install
```

2. Development:

```bash
npm run dev  # Starts dev server at localhost:5173
```

## Component Patterns

1. Card Components:

- Accept `handleMoreInfoClick` prop for modal interactions
- Use consistent image aspect ratios (16:9 recommended)

2. Modal System:

- Single `InfoModal` manages all modal content
- Determine content via `modalType`: "project", "experience", or "contact"

## Styling Conventions

1. Tailwind Classes:

- Mobile-first responsive design
- Use Netflix-inspired dark theme (`bg-[#141414]`, text-white)
- Custom gradient animation via `shimmer` utility class

2. Component Structure:

```jsx
<div className="bg-[#141414] text-white">
  <div className="pl-4 md:pl-16">
    {" "}
    {/* Standard padding pattern */}
    {/* Component content */}
  </div>
</div>
```

## Common Tasks

1. Adding a New Project:

- Add entry to relevant array in `contact-detail.js`
- Include all required fields: id, title, description, tech, imageUrl
- Place project images in `public/assets/`

2. Modifying Sections:

- Update `ProjectRow` components in `App.jsx`
- Each row needs: title, projects array, type, and click handler

## Integration Points

1. Image Assets:

- Store in `public/assets/`
- Reference via absolute paths: `/assets/image.jpg`

2. External Links:

- Managed in `contact.socials` object
- Used throughout footer and contact sections

## Key Files Reference

- `src/assets/data/contact-detail.js`: Central data store
- `src/App.jsx`: Main layout and routing
- `src/components/InfoModal.jsx`: Modal system
- `src/components/ProjectRow.jsx`: Content row template
