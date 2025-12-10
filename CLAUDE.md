# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Next.js 16 app using App Router, React 19, TypeScript, and Tailwind CSS 4 with authentication via Clerk.

## Development Commands

```bash
# Development server (localhost:3000)
npm run dev

# Production build
npm build

# Production server
npm start

# Lint code
npm run lint
```

## Architecture

**Frontend Framework**: Next.js 16 (App Router) + React 19

**Styling**:
- Tailwind CSS 4 (using `@tailwindcss/postcss` plugin)
- Custom theme system via CSS variables (light/dark modes)
- Global styles in `app/globals.css` with inline theme config
- `tw-animate-css` for animations

**Authentication**: Clerk (@clerk/nextjs) integrated at root layout level with SignIn/SignUp/UserButton components

**Theme System**:
- `next-themes` provider for dark/light mode switching
- Theme variables defined in `app/globals.css` using oklch color space
- Custom dark variant: `@custom-variant dark (&:is(.dark *))`

**Component Library**:
- Radix UI primitives (@radix-ui/react-dropdown-menu, @radix-ui/react-slot)
- shadcn/ui-style components in `components/ui/`
- Utility function `cn()` in `lib/utils.ts` for merging Tailwind classes

**Project Structure**:
- `app/` - Next.js App Router pages and layouts
- `components/` - React components
  - `components/ui/` - shadcn/ui-style primitives
  - `components/theme-provider.tsx` - Theme provider wrapper
  - `components/mode-toggle.tsx` - Dark mode toggle
- `lib/` - Utilities (currently `cn()` helper)

**TypeScript Configuration**:
- Path alias: `@/*` maps to project root
- Strict mode enabled
- Target: ES2017

**Important Notes**:
- Clerk auth components wrapped around entire app in root layout
- Header includes Clerk sign-in/sign-up buttons when signed out, UserButton when signed in
- Theme provider nested inside Clerk provider with `suppressHydrationWarning` on html tag
- Uses Geist and Geist Mono fonts from next/font/google
