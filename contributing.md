# Contributing to El Parlamento Frontend

Thank you for your interest in contributing to El Parlamento's frontend application! This document provides guidelines and information for developers working on this project.

## Table of Contents

- [Development Setup](#development-setup)
- [Code Standards](#code-standards)
- [Project Structure](#project-structure)
- [Component Development](#component-development)
- [Styling Guidelines](#styling-guidelines)
- [State Management](#state-management)
- [Testing](#testing)
- [Git Workflow](#git-workflow)
- [Pull Request Process](#pull-request-process)

## Development Setup

### Prerequisites

- Node.js 18+
- pnpm (preferred) or npm
- Git
- VS Code (recommended)

### Getting Started

1. **Fork and clone the repository**
   ```bash
   git clone https://github.com/Subo-bo25/frontend_elparlamento.git
   cd frontend_parlamento/frontend_p
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start development server**
   ```bash
   pnpm dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## Code Standards

### TypeScript

- Use TypeScript for all new files
- Define proper interfaces and types
- Avoid `any` type, use specific types
- Use proper type imports: `import type { ... }`

### Code Style

- Use ESLint and Prettier configurations
- Follow Next.js conventions
- Use meaningful variable and function names
- Comment complex logic
- Keep functions small and focused

### File Naming

- Components: `PascalCase.tsx` (e.g., `EventCard.tsx`)
- Utilities: `camelCase.ts` (e.g., `dateUtils.ts`)
- Pages: `page.tsx` (Next.js App Router)
- Hooks: `use-kebab-case.ts` (e.g., `use-event-store.ts`)

## Project Structure

```
frontend_p/
├── app/                    # Next.js App Router pages
│   ├── (routes)/          # Page routes
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── forms/            # Form components
│   ├── layout/           # Layout components
│   └── features/         # Feature-specific components
├── hooks/                # Custom React hooks
├── lib/                  # Utilities and configurations
│   ├── utils.ts          # General utilities
│   ├── types.ts          # Type definitions
│   └── constants.ts      # App constants
├── public/               # Static assets
└── styles/               # Additional styles
```

## Component Development

### Component Structure

```tsx
/**
 * Copyright (c) 2025 Sergio Agreda
 * 
 * This code is proprietary and confidential.
 * All rights reserved.
 */

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ComponentProps {
  title: string
  onAction?: () => void
  className?: string
}

export function Component({ title, onAction, className }: ComponentProps) {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <div className={cn("default-classes", className)}>
      <h2>{title}</h2>
      <Button onClick={onAction} disabled={isLoading}>
        Action
      </Button>
    </div>
  )
}
```

### Component Guidelines

- Use functional components with hooks
- Implement proper TypeScript interfaces
- Use `forwardRef` when needed
- Follow accessibility best practices
- Use shadcn/ui components as base

## Styling Guidelines

### Tailwind CSS

- Use Tailwind utility classes
- Follow mobile-first approach
- Use custom color palette from `tailwind.config.ts`
- Prefer component variants over inline styles

### Custom Colors

```css
/* Brand colors defined in tailwind.config.ts */
primary-ruby: #C41E3A     /* Main brand color */
secondary-navy: #2C3E50   /* Secondary brand color */
alabaster: #F8F8FF        /* Light background */
```

### Responsive Design

```tsx
// Use responsive classes
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  // Mobile: 1 column, Tablet: 2 columns, Desktop: 3 columns
</div>
```

## State Management

### Zustand Store

- Use Zustand for global state
- Keep stores focused and small
- Define proper TypeScript interfaces
- Use immer for complex state updates

```typescript
import { create } from 'zustand'

interface StoreState {
  items: Item[]
  setItems: (items: Item[]) => void
}

export const useStore = create<StoreState>((set) => ({
  items: [],
  setItems: (items) => set({ items }),
}))
```

## Testing

### Testing Strategy

- Unit tests for utilities and hooks
- Component tests for UI components
- Integration tests for page flows
- E2E tests for critical user paths

### Writing Tests

```typescript
import { render, screen } from '@testing-library/react'
import { Component } from './Component'

describe('Component', () => {
  it('renders correctly', () => {
    render(<Component title="Test" />)
    expect(screen.getByText('Test')).toBeInTheDocument()
  })
})
```

## Git Workflow

### Branch Naming

- `feature/description` - New features
- `fix/description` - Bug fixes
- `refactor/description` - Code refactoring
- `docs/description` - Documentation updates

### Commit Messages

Follow conventional commits:

```bash
feat: add event booking functionality
fix: resolve mobile menu toggle issue
docs: update README installation steps
refactor: optimize component structure
```

### Development Process

1. Create feature branch from `main`
2. Make changes with proper commits
3. Write/update tests
4. Run linting and type checking
5. Create pull request

## Pull Request Process

### Before Submitting

- [ ] Code follows project standards
- [ ] Tests pass locally
- [ ] TypeScript compiles without errors
- [ ] No linting errors
- [ ] Documentation updated if needed

### PR Description Template

```markdown
## Description
Brief description of changes

## Changes Made
- List of changes
- Another change

## Testing
- [ ] Manual testing completed
- [ ] Unit tests added/updated
- [ ] Integration tests pass

## Screenshots (if applicable)
Add screenshots for UI changes
```

## Important Notes

### Code Ownership

- All code is proprietary to El Parlamento
- Include copyright headers in new files
- Follow established patterns and conventions
- Maintain code quality and consistency

### Performance Considerations

- Optimize images and assets
- Use Next.js built-in optimizations
- Implement proper loading states
- Consider code splitting for large features

### Accessibility

- Use semantic HTML
- Implement proper ARIA labels
- Ensure keyboard navigation
- Test with screen readers
- Follow WCAG guidelines

## Support

For questions about development or contribution:

- **Technical Issues**: Create an issue in the repository
- **General Questions**: Contact sergioagreda21@outlook.com
- **Documentation**: Check existing docs or create improvement PRs

---

**Original Developer**: Sergio Agreda (sergioagreda21@outlook.com)  
**Project**: El Parlamento Frontend  
**Last Updated**: January 2025 