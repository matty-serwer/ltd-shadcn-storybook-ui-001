import type { Preview } from "@storybook/nextjs-vite";
import React from "react";
import { ThemeProvider } from "../src/components/theme-provider";

import "../src/app/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: "centered",
    a11y: {
      test: "todo",
    },
  },
  globalTypes: {
    theme: {
      description: "Global theme for components",
      toolbar: {
        title: "Theme",
        icon: "paintbrush",
        items: [
          { value: "light", title: "Light", icon: "sun" },
          { value: "dark", title: "Dark", icon: "moon" },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: "light",
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || "light";
      return (
        <ThemeProvider
          attribute="class"
          defaultTheme={theme}
          forcedTheme={theme}
          disableTransitionOnChange
        >
          <div className={theme === "dark" ? "dark" : ""}>
            <div className="bg-background text-foreground min-h-screen p-4">
              <Story />
            </div>
          </div>
        </ThemeProvider>
      );
    },
  ],
};

export default preview;
