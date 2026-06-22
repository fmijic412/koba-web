import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

// Base path. Defaults to the GitHub Pages project-page sub-path "/koba-web/".
// When you move to a custom domain (or org/user root Pages), build with
// VITE_BASE=/ so URLs resolve from the domain root.
const base = process.env.VITE_BASE || "/koba-web/";

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
