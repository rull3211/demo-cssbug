import { federation } from "@module-federation/vite";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "http://localhost:5173/",
  plugins: [
    react(),
    
    federation({
      filename: 'remoteEntry.js',
      name: 'remote',
      exposes: {
        './remote-app': './src/components/RegistreringForm.tsx',
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: {
    open: true,
    port: 5173,
  },
  preview: {
    port: 5173,
  },
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
