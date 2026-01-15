# Stories

This folder contains Storybook stories for shadcn/ui components.

## Structure

Stories are organized by component and follow the CSF3 (Component Story Format 3) convention:

```
stories/
├── Button.stories.tsx
├── Card.stories.tsx
├── Dialog.stories.tsx
└── ...
```

## Conventions

- Each component has its own `*.stories.tsx` file
- Use `autodocs` tag to generate automatic documentation
- Stories import components from `@/components/ui/*`
