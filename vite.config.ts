import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Explicitly configure for React 19
      jsxRuntime: "automatic",
      babel: {
        plugins: [],
      },
    }),
  ],
  // Ensure proper React handling
  optimizeDeps: {
    include: ["react", "react-dom", "framer-motion"],
  },
  // Define React as external to prevent bundling issues
  define: {
    global: "globalThis",
  },
});
