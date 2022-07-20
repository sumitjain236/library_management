import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import proxyOptions from "./proxyOptions";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8080,
    proxy: proxyOptions,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    outDir: "../library_management/public/library",
    emptyOutDir: true,
    target: "es2015",
  },
});
