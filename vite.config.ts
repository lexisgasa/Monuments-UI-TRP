/// <reference types="vitest" />
import { defineConfig } from "vite";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    coverage: {
      include: ["src/**/*.ts", "!src/index.ts", "!src/**/types.ts"],
    },
  },
});
