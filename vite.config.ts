import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

// Base path. Custom domain (or user/org Pages root) => "/".
// For a project page like https://<user>.github.io/koba-web/ set
// VITE_BASE=/koba-web/ when building.
const base = process.env.VITE_BASE || "/";

// https://vitejs.dev/config/
export default defineConfig({
  base,
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    // Files are edited from Windows over the \\wsl.localhost share; polling
    // guarantees HMR picks up changes. Harmless for production builds.
    watch: { usePolling: true, interval: 300 },
  },
  build: {
    outDir: "dist",
    assetsInlineLimit: 0,
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, "index.html"),
        story: resolve(import.meta.dirname, "story.html"),
      },
    },
  },
});
