import { defineConfig } from "tsup"
import path from "path"

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: {
    compilerOptions: {
      incremental: false,
    },
  },
  splitting: true,
  treeshake: true,
  clean: true,
  external: ["react", "react-dom", "next"],
  esbuildOptions(options) {
    options.banner = { js: '"use client";' }
    options.alias = {
      "@": path.resolve(__dirname, "./src"),
    }
  },
})
