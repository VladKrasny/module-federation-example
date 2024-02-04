import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5001,
  },
  preview: {
    port: 6001,
  },
  build: {
    target: "esnext",
  },
  plugins: [
    react(),
    federation({
      name: "hostApp",
      remotes: {
        remoteApp: "http://localhost:6002/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],
});
