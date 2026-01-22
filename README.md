# @lupine-tech-design/pedal-ui

A beautifully crafted React component library built on [shadcn/ui](https://ui.shadcn.com/) with the **Lupine Pedal** brand theme. Designed for Next.js applications using Tailwind CSS v4.

## Features

- 21 accessible, customizable UI components
- Built on Radix UI primitives for accessibility
- Lupine Pedal brand theme with purple, coral, and warm gray palettes
- Full TypeScript support
- Dark mode ready
- Tailwind CSS v4 compatible
- Tree-shakeable ESM and CommonJS builds

## Installation

```bash
npm install @lupine-tech-design/pedal-ui
```

### Peer Dependencies

This package requires the following peer dependencies:

```bash
npm install react react-dom tailwindcss
```

## Setup

### 1. Configure Tailwind CSS

Ensure your project has Tailwind CSS v4 configured. Your `globals.css` should include:

```css
@import "tailwindcss";
```

### 2. Import the Theme

Add the Lupine Pedal theme to your `globals.css`:

```css
@import "tailwindcss";
@import "@lupine-tech-design/pedal-ui/theme.css";
```

### 3. Load the Fonts

The theme uses three Google Fonts. Add them to your `layout.tsx`:

```tsx
import { Plus_Jakarta_Sans, JetBrains_Mono, Cormorant_Garamond } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.variable} ${jetbrainsMono.variable} ${cormorantGaramond.variable}`}>
        {children}
      </body>
    </html>
  );
}
```

### 4. Set Up Dark Mode (Optional)

For dark mode support, install `next-themes`:

```bash
npm install next-themes
```

Create a theme provider and wrap your app:

```tsx
// components/theme-provider.tsx
"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({ children, ...props }: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
```

```tsx
// layout.tsx
<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
  {children}
</ThemeProvider>
```

## Quick Start

```tsx
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent
} from "@lupine-tech-design/pedal-ui"

export default function MyPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome</CardTitle>
        <CardDescription>Get started with Pedal UI</CardDescription>
      </CardHeader>
      <CardContent>
        <Button>Click me</Button>
      </CardContent>
    </Card>
  )
}
```

---

## API Reference

All components accept a `className` prop for style overrides and spread additional props to the underlying element.

### Alert

Displays a callout for important information.

```tsx
import { Alert, AlertTitle, AlertDescription } from "@lupine-tech-design/pedal-ui"
```

#### Alert Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"default" \| "destructive"` | `"default"` | Visual style variant |
| `className` | `string` | - | Additional CSS classes |

#### AlertTitle Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Additional CSS classes |

#### AlertDescription Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Additional CSS classes |

```tsx
<Alert variant="destructive">
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>Something went wrong.</AlertDescription>
</Alert>
```

---

### AlertDialog

A modal dialog that interrupts the user with important content and expects a response.

```tsx
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from "@lupine-tech-design/pedal-ui"
```

#### AlertDialog Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | - | Controlled open state |
| `onOpenChange` | `(open: boolean) => void` | - | Callback when open state changes |
| `defaultOpen` | `boolean` | `false` | Initial open state (uncontrolled) |

```tsx
<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="destructive">Delete</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you sure?</AlertDialogTitle>
      <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
```

---

### Avatar

An image element with a fallback for representing the user.

```tsx
import { Avatar, AvatarImage, AvatarFallback } from "@lupine-tech-design/pedal-ui"
```

#### Avatar Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Additional CSS classes |

#### AvatarImage Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `string` | - | Image source URL |
| `alt` | `string` | - | Alt text for the image |
| `className` | `string` | - | Additional CSS classes |

#### AvatarFallback Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `delayMs` | `number` | - | Delay before showing fallback |
| `className` | `string` | - | Additional CSS classes |

```tsx
<Avatar>
  <AvatarImage src="/avatar.jpg" alt="User" />
  <AvatarFallback>JD</AvatarFallback>
</Avatar>

// Custom size
<Avatar className="size-16">
  <AvatarImage src="/avatar.jpg" alt="User" />
  <AvatarFallback>JD</AvatarFallback>
</Avatar>
```

---

### Badge

Displays a badge or a component that looks like a badge.

```tsx
import { Badge } from "@lupine-tech-design/pedal-ui"
```

#### Badge Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"default" \| "secondary" \| "destructive" \| "outline"` | `"default"` | Visual style variant |
| `asChild` | `boolean` | `false` | Render as child element |
| `className` | `string` | - | Additional CSS classes |

```tsx
<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>
```

---

### Blockquote

Styled quotation block with citation support.

```tsx
import { Blockquote, BlockquoteCite } from "@lupine-tech-design/pedal-ui"
```

#### Blockquote Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Additional CSS classes |

#### BlockquoteCite Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Additional CSS classes |

```tsx
<Blockquote>
  The best way to predict the future is to create it.
  <BlockquoteCite>— Peter Drucker</BlockquoteCite>
</Blockquote>
```

---

### Button

Primary interactive element for actions.

```tsx
import { Button } from "@lupine-tech-design/pedal-ui"
```

#### Button Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"default" \| "destructive" \| "outline" \| "secondary" \| "ghost" \| "link"` | `"default"` | Visual style variant |
| `size` | `"default" \| "sm" \| "lg" \| "icon" \| "icon-sm" \| "icon-lg"` | `"default"` | Button size |
| `asChild` | `boolean` | `false` | Render as child element (for custom components) |
| `disabled` | `boolean` | `false` | Disable the button |
| `onClick` | `() => void` | - | Click handler |
| `className` | `string` | - | Additional CSS classes |

```tsx
// Variants
<Button variant="default">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>
<Button variant="destructive">Destructive</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon"><PlusIcon /></Button>

// As link
<Button asChild>
  <a href="/page">Go to page</a>
</Button>
```

---

### Card

Container for grouping related content.

```tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction,
} from "@lupine-tech-design/pedal-ui"
```

#### Card Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Additional CSS classes |

#### CardHeader Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Additional CSS classes |

#### CardTitle Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Additional CSS classes |

#### CardDescription Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Additional CSS classes |

#### CardContent Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Additional CSS classes |

#### CardFooter Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Additional CSS classes |

#### CardAction Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Additional CSS classes |

```tsx
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description goes here.</CardDescription>
    <CardAction>
      <Button size="sm">Action</Button>
    </CardAction>
  </CardHeader>
  <CardContent>
    <p>Card content goes here.</p>
  </CardContent>
  <CardFooter>
    <Button>Save</Button>
  </CardFooter>
</Card>
```

---

### Checkbox

A control that allows the user to toggle between checked and not checked.

```tsx
import { Checkbox } from "@lupine-tech-design/pedal-ui"
```

#### Checkbox Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `checked` | `boolean \| "indeterminate"` | - | Controlled checked state |
| `defaultChecked` | `boolean` | `false` | Initial checked state (uncontrolled) |
| `onCheckedChange` | `(checked: boolean) => void` | - | Callback when checked changes |
| `disabled` | `boolean` | `false` | Disable the checkbox |
| `required` | `boolean` | `false` | Mark as required |
| `name` | `string` | - | Name attribute for forms |
| `value` | `string` | - | Value attribute for forms |
| `className` | `string` | - | Additional CSS classes |

```tsx
<div className="flex items-center gap-2">
  <Checkbox id="terms" />
  <label htmlFor="terms">Accept terms and conditions</label>
</div>

// Controlled
const [checked, setChecked] = useState(false)
<Checkbox checked={checked} onCheckedChange={setChecked} />
```

---

### Dialog

A modal dialog window.

```tsx
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@lupine-tech-design/pedal-ui"
```

#### Dialog Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | - | Controlled open state |
| `onOpenChange` | `(open: boolean) => void` | - | Callback when open state changes |
| `defaultOpen` | `boolean` | `false` | Initial open state (uncontrolled) |

#### DialogContent Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `showCloseButton` | `boolean` | `true` | Show/hide the close button |
| `className` | `string` | - | Additional CSS classes |

```tsx
<Dialog>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
      <DialogDescription>Dialog description goes here.</DialogDescription>
    </DialogHeader>
    <div>Dialog content</div>
    <DialogFooter>
      <DialogClose asChild>
        <Button variant="outline">Cancel</Button>
      </DialogClose>
      <Button>Save</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>

// Without close button
<DialogContent showCloseButton={false}>
  ...
</DialogContent>
```

---

### DropdownMenu

Displays a menu to the user with a list of actions or options.

```tsx
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
} from "@lupine-tech-design/pedal-ui"
```

#### DropdownMenu Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | - | Controlled open state |
| `onOpenChange` | `(open: boolean) => void` | - | Callback when open state changes |
| `defaultOpen` | `boolean` | `false` | Initial open state (uncontrolled) |

#### DropdownMenuItem Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `inset` | `boolean` | `false` | Add left padding for alignment |
| `disabled` | `boolean` | `false` | Disable the item |
| `onSelect` | `() => void` | - | Callback when selected |
| `className` | `string` | - | Additional CSS classes |

```tsx
<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button>Open Menu</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Settings</DropdownMenuItem>
    <DropdownMenuItem disabled>Disabled</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem>
      Logout
      <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

---

### Form

Form components built on react-hook-form for handling form state and validation.

```tsx
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  useFormField,
} from "@lupine-tech-design/pedal-ui"
```

#### Form Props

Accepts all props from react-hook-form's `FormProvider`.

#### FormField Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `string` | - | Field name (required) |
| `control` | `Control` | - | Form control from useForm |
| `render` | `({ field }) => ReactNode` | - | Render function |

```tsx
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

const formSchema = z.object({
  username: z.string().min(2),
})

function MyForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { username: "" },
  })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>Enter your username.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
```

---

### Input

A text input field.

```tsx
import { Input } from "@lupine-tech-design/pedal-ui"
```

#### Input Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `string` | `"text"` | Input type (text, email, password, etc.) |
| `placeholder` | `string` | - | Placeholder text |
| `disabled` | `boolean` | `false` | Disable the input |
| `value` | `string` | - | Controlled value |
| `defaultValue` | `string` | - | Initial value (uncontrolled) |
| `onChange` | `(e: ChangeEvent) => void` | - | Change handler |
| `className` | `string` | - | Additional CSS classes |

```tsx
<Input placeholder="Enter your email" type="email" />
<Input disabled placeholder="Disabled" />

// With label
<div className="grid gap-2">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="you@example.com" />
</div>
```

---

### Label

Renders an accessible label associated with controls.

```tsx
import { Label } from "@lupine-tech-design/pedal-ui"
```

#### Label Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `htmlFor` | `string` | - | ID of the associated form element |
| `className` | `string` | - | Additional CSS classes |

```tsx
<Label htmlFor="email">Email</Label>
<Input id="email" />
```

---

### Progress

Displays an indicator showing the completion progress of a task.

```tsx
import { Progress } from "@lupine-tech-design/pedal-ui"
```

#### Progress Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `number` | `0` | Progress value (0-100) |
| `max` | `number` | `100` | Maximum value |
| `className` | `string` | - | Additional CSS classes |

```tsx
<Progress value={33} />
<Progress value={66} className="h-3" />
```

---

### Select

Displays a list of options for the user to pick from.

```tsx
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectLabel,
  SelectSeparator,
} from "@lupine-tech-design/pedal-ui"
```

#### Select Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | - | Controlled value |
| `defaultValue` | `string` | - | Initial value (uncontrolled) |
| `onValueChange` | `(value: string) => void` | - | Callback when value changes |
| `disabled` | `boolean` | `false` | Disable the select |
| `required` | `boolean` | `false` | Mark as required |
| `name` | `string` | - | Name attribute for forms |

#### SelectTrigger Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `"default" \| "sm"` | `"default"` | Trigger size |
| `className` | `string` | - | Additional CSS classes |

#### SelectContent Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `position` | `"item-aligned" \| "popper"` | `"item-aligned"` | Positioning strategy |
| `align` | `"start" \| "center" \| "end"` | `"center"` | Alignment |
| `className` | `string` | - | Additional CSS classes |

#### SelectItem Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | - | Item value (required) |
| `disabled` | `boolean` | `false` | Disable the item |
| `className` | `string` | - | Additional CSS classes |

```tsx
<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select a fruit" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>Fruits</SelectLabel>
      <SelectItem value="apple">Apple</SelectItem>
      <SelectItem value="banana">Banana</SelectItem>
      <SelectItem value="orange">Orange</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>

// Controlled
const [value, setValue] = useState("")
<Select value={value} onValueChange={setValue}>
  ...
</Select>
```

---

### Sheet

A panel that slides in from the edge of the screen.

```tsx
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@lupine-tech-design/pedal-ui"
```

#### Sheet Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | - | Controlled open state |
| `onOpenChange` | `(open: boolean) => void` | - | Callback when open state changes |
| `defaultOpen` | `boolean` | `false` | Initial open state (uncontrolled) |

#### SheetContent Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `side` | `"top" \| "right" \| "bottom" \| "left"` | `"right"` | Side to slide in from |
| `className` | `string` | - | Additional CSS classes |

```tsx
<Sheet>
  <SheetTrigger asChild>
    <Button>Open Sheet</Button>
  </SheetTrigger>
  <SheetContent side="right">
    <SheetHeader>
      <SheetTitle>Sheet Title</SheetTitle>
      <SheetDescription>Sheet description goes here.</SheetDescription>
    </SheetHeader>
    <div>Sheet content</div>
    <SheetFooter>
      <SheetClose asChild>
        <Button>Close</Button>
      </SheetClose>
    </SheetFooter>
  </SheetContent>
</Sheet>

// Different sides
<SheetContent side="left">...</SheetContent>
<SheetContent side="top">...</SheetContent>
<SheetContent side="bottom">...</SheetContent>
```

---

### Switch

A control that allows the user to toggle between checked and not checked.

```tsx
import { Switch } from "@lupine-tech-design/pedal-ui"
```

#### Switch Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `checked` | `boolean` | - | Controlled checked state |
| `defaultChecked` | `boolean` | `false` | Initial checked state (uncontrolled) |
| `onCheckedChange` | `(checked: boolean) => void` | - | Callback when checked changes |
| `disabled` | `boolean` | `false` | Disable the switch |
| `required` | `boolean` | `false` | Mark as required |
| `name` | `string` | - | Name attribute for forms |
| `value` | `string` | - | Value attribute for forms |
| `className` | `string` | - | Additional CSS classes |

```tsx
<div className="flex items-center gap-2">
  <Switch id="notifications" />
  <Label htmlFor="notifications">Enable notifications</Label>
</div>

// Controlled
const [enabled, setEnabled] = useState(false)
<Switch checked={enabled} onCheckedChange={setEnabled} />
```

---

### Table

A responsive table component for displaying data.

```tsx
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from "@lupine-tech-design/pedal-ui"
```

#### All Table Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Additional CSS classes |

```tsx
<Table>
  <TableCaption>A list of recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead>Invoice</TableHead>
      <TableHead>Status</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>INV001</TableCell>
      <TableCell>Paid</TableCell>
      <TableCell className="text-right">$250.00</TableCell>
    </TableRow>
  </TableBody>
  <TableFooter>
    <TableRow>
      <TableCell colSpan={2}>Total</TableCell>
      <TableCell className="text-right">$250.00</TableCell>
    </TableRow>
  </TableFooter>
</Table>
```

---

### Tabs

A set of layered sections of content displayed one at a time.

```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@lupine-tech-design/pedal-ui"
```

#### Tabs Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | - | Controlled active tab |
| `defaultValue` | `string` | - | Initial active tab (uncontrolled) |
| `onValueChange` | `(value: string) => void` | - | Callback when active tab changes |
| `orientation` | `"horizontal" \| "vertical"` | `"horizontal"` | Orientation |
| `className` | `string` | - | Additional CSS classes |

#### TabsTrigger Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | - | Tab value (required) |
| `disabled` | `boolean` | `false` | Disable the tab |
| `className` | `string` | - | Additional CSS classes |

#### TabsContent Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | - | Tab value (required) |
| `className` | `string` | - | Additional CSS classes |

```tsx
<Tabs defaultValue="account">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
    <TabsTrigger value="settings" disabled>Settings</TabsTrigger>
  </TabsList>
  <TabsContent value="account">Account content here.</TabsContent>
  <TabsContent value="password">Password content here.</TabsContent>
</Tabs>
```

---

### Textarea

A multi-line text input field.

```tsx
import { Textarea } from "@lupine-tech-design/pedal-ui"
```

#### Textarea Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `placeholder` | `string` | - | Placeholder text |
| `disabled` | `boolean` | `false` | Disable the textarea |
| `value` | `string` | - | Controlled value |
| `defaultValue` | `string` | - | Initial value (uncontrolled) |
| `onChange` | `(e: ChangeEvent) => void` | - | Change handler |
| `rows` | `number` | - | Number of visible rows |
| `className` | `string` | - | Additional CSS classes |

```tsx
<Textarea placeholder="Enter your message" />
<Textarea rows={6} />
```

---

### Tooltip

A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.

```tsx
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@lupine-tech-design/pedal-ui"
```

#### TooltipProvider Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `delayDuration` | `number` | `0` | Delay before showing tooltip (ms) |
| `skipDelayDuration` | `number` | `300` | Time to skip delay when moving between triggers |
| `disableHoverableContent` | `boolean` | `false` | Prevent hovering over content |

#### TooltipContent Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `side` | `"top" \| "right" \| "bottom" \| "left"` | `"top"` | Preferred side |
| `sideOffset` | `number` | `0` | Offset from trigger |
| `align` | `"start" \| "center" \| "end"` | `"center"` | Alignment |
| `className` | `string` | - | Additional CSS classes |

```tsx
<Tooltip>
  <TooltipTrigger asChild>
    <Button variant="outline">Hover me</Button>
  </TooltipTrigger>
  <TooltipContent>
    <p>Tooltip content</p>
  </TooltipContent>
</Tooltip>

// With custom position
<TooltipContent side="right" sideOffset={5}>
  <p>Right side tooltip</p>
</TooltipContent>
```

---

## Utilities

### cn

Class name merging utility powered by `clsx` and `tailwind-merge`.

```tsx
import { cn } from "@lupine-tech-design/pedal-ui"

// Merge classes with conditional logic
<div className={cn("base-class", isActive && "active-class", className)} />
```

---

## Theme Colors

The Lupine Pedal theme includes these color scales:

### Brand (Purple)
`brand-50` through `brand-950` - Primary purple palette

### Accent (Coral)
`accent-50` through `accent-950` - Coral/orange accent colors

### Accent Pastel
`accent-pastel-50` through `accent-pastel-950` - Soft coral for dark mode

### Surface (Warm Grays)
`surface-50` through `surface-950` - Warm neutral grays

### Semantic Colors
- `primary` - Brand purple
- `secondary` - Muted surface
- `accent` - Coral highlights
- `destructive` - Error/danger states
- `muted` - Subdued backgrounds
- `background` / `foreground` - Base colors

---

## Typography

The theme uses three font families:

| Font | Variable | Usage |
|------|----------|-------|
| Plus Jakarta Sans | `--font-sans` | Body text, buttons, labels |
| JetBrains Mono | `--font-mono` | Code, monospace elements |
| Cormorant Garamond | `--font-serif` | Descriptions, captions, blockquotes |

---

## Dark Mode

Components automatically adapt to dark mode when using the `.dark` class on a parent element.

```tsx
<html className="dark">
```

---

## TypeScript

Full TypeScript support with exported types:

```tsx
import type { ButtonProps } from "@lupine-tech-design/pedal-ui"
```

---

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

## Contributing

This package is maintained by Lupine Tech Design. For issues and feature requests, visit the [GitHub repository](https://github.com/matty-serwer/ltd-shadcn-storybook-ui-001).

### Development

```bash
# Install dependencies
npm install

# Run Storybook for development
npm run storybook

# Build the library
npm run build:lib

# Run Next.js dev server
npm run dev
```

---

## License

MIT License - see [LICENSE](LICENSE) for details.

---

Built with [shadcn/ui](https://ui.shadcn.com/) and [Radix UI](https://www.radix-ui.com/)
