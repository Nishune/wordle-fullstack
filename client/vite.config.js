// client/vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Alla förfrågningar som börjar med /api kommer att skickas vidare till backend
      "/api": {
        target: "http://localhost:5080",
        changeOrigin: true,
      },
    },
  },
});
