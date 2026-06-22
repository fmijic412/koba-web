import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
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
  },
});
