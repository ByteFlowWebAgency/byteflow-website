import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react({
      jsxFactory: "React.createElement", // Change to your preferred JSX factory function
      jsxFragment: "React.Fragment", // Change to your preferred JSX fragment identifier
    }),
  ],
});
