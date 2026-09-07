import { defineConfig } from "vite";

export default defineConfig({
  base: "/DRE/",
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});