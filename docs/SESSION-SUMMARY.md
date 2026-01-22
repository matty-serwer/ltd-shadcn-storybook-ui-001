# Session Summary: Storybook + shadcn/ui Setup

**Date:** January 15, 2026
**Project:** `storybook-shadcn-lab`

---

## What Was Accomplished

### 1. Project Initialization
- Created Next.js 16 app with TypeScript, App Router, and ESLint
- Configured Tailwind CSS 4.x with `@import "tailwindcss"` syntax
- Initialized shadcn/ui with `npx shadcn@latest init` (New York style, neutral base)

### 2. Storybook 10 Installation
- Installed Storybook 10 with Next.js + Vite framework (`@storybook/nextjs-vite`)
- Configured addons: vitest, a11y, docs, chromatic, themes
- Set up Vitest integration with Playwright for component testing

### 3. Theme Provider Setup
- Installed `next-themes` for dark mode support
- Created `ThemeProvider` component at `src/components/theme-provider.tsx`
- Wired theme provider into Next.js layout and Storybook preview
- Configured `@storybook/addon-themes` with `withThemeByClassName` decorator

### 4. shadcn Components Installed
- button, card, input, select, form, label, dialog, dropdown-menu
- tabs, alert, badge, checkbox, switch, textarea, table, avatar
- progress, tooltip, alert-dialog, sheet

### 5. Storybook Stories Created
Created CSF3 stories with autodocs for all 20 components:

| Component | Variants |
|-----------|----------|
| Alert | Default, Destructive, Info, Success |
| AlertDialog | Default, Destructive, Open |
| Avatar | Default, WithFallback, Sizes, AvatarGroup |
| Badge | Default, Variants, WithStatus, InContext |
| Button | Default, Variants, Sizes, Disabled, Loading |
| Card | Simple, WithHeader, WithHeaderAndFooter, ContentLayout |
| Checkbox | Default, WithLabel, Checked, Disabled, CheckboxGroup |
| Dialog | Default, Open, WithForm, WithLongContent |
| DropdownMenu | Default, WithIcons, WithDisabledItems |
| Form | Default, LoginForm, WithValidationError |
| Input | Default, WithPlaceholder, WithDefaultValue, WithLabel, Invalid |
| Label | Default, WithInput, WithCheckbox, Required |
| Progress | Default, Empty, Half, Complete, WithLabel |
| Select | Default, WithGroups, WithLabel, Disabled |
| Sheet | Default, WithForm, LeftSide, Positions |
| Switch | Default, WithLabel, Checked, Disabled, SettingsList |
| Table | Default, WithCaption, WithFooter |
| Tabs | Default, WithCards, ThreeTabs |
| Textarea | Default, WithLabel, WithDefaultValue, Disabled, WithCharacterCount |
| Tooltip | Default, WithIcon, Positions |

### 6. Lupine Pedal Brand Theme Applied
- **Brand colors:** Purple scale (oklch hue 280)
- **Accent colors:** Coral scale (oklch hue ~18-40)
- **Accent pastel:** Soft coral/pink for dark mode
- **Surface colors:** Warm grays (oklch hue 60)
- **Fonts:** Plus Jakarta Sans (sans), JetBrains Mono (mono)

---

## Project Structure

```
storybook-shadcn-lab/
├── .storybook/
│   ├── main.ts              # Storybook config
│   ├── preview.tsx          # Decorators, globals.css import
│   └── vitest.setup.ts      # Vitest test setup
├── src/
│   ├── app/
│   │   ├── globals.css      # Lupine Pedal theme tokens
│   │   ├── layout.tsx       # Root layout with fonts + ThemeProvider
│   │   └── page.tsx
│   ├── components/
│   │   ├── theme-provider.tsx
│   │   └── ui/              # 20 shadcn components
│   └── lib/
│       └── utils.ts         # cn() utility
├── stories/
│   ├── README.md
│   └── *.stories.tsx        # 20 story files
├── components.json          # shadcn config
├── vitest.config.ts
└── package.json
```

---

## Available Scripts

```bash
npm run dev           # Start Next.js dev server (port 3000)
npm run storybook     # Start Storybook (port 6006)
npm run build         # Build Next.js for production
npm run build-storybook  # Build static Storybook
npm run lint          # Run ESLint
npx vitest            # Run component tests
```

---

## Available Tailwind Classes (Brand)

```css
/* Brand (purple) */
bg-brand-50 ... bg-brand-950
text-brand-500

/* Accent (coral) */
bg-accent-50 ... bg-accent-950

/* Accent Pastel (dark mode coral) */
bg-accent-pastel-50 ... bg-accent-pastel-950

/* Surface (warm grays) */
bg-surface-50 ... bg-surface-950

/* Shadows */
shadow-soft, shadow-medium, shadow-strong

/* Animations */
duration-fast, duration-normal, duration-slow
ease-smooth, ease-bounce
```

---

## Next Steps (Future Sessions)

- [ ] Add more composite/pattern components
- [ ] Create documentation pages in Storybook
- [ ] Set up Chromatic for visual regression testing
- [ ] Package as npm module for reuse across projects
- [ ] Add form patterns and validation examples
