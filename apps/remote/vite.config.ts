import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5002,
  },
  preview: {
    port: 6002,
  },
  build: {
    target: "esnext",
  },
  plugins: [
    react(),
    federation({
      name: "remoteApp",
      filename: "remoteEntry.js",
      exposes: {
        "./TheApp": "./src/TheApp",
      },
      shared: ["react", "react-dom"],
    }),
  ],
});
