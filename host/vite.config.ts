import { federation } from '@module-federation/vite';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    base:"http://localhost:5175/",
    plugins: [
      react(),
      federation({
        name: 'host',
        remotes: {
          remote: {
            type: 'module',
            name: 'remote',
            entry: 'http://localhost:5173/remoteEntry.js',
            entryGlobalName: 'remote',
            shareScope: 'default',
          },
        },
        exposes: {},
        filename: 'remoteEntry.js',
        shared: ["react", "react-dom"],
      }),
    ],
    server: {
      open: true,
      port: 5175,
    },
    preview: {
      port: 5175,
    },
    build: {
        target: "esnext",
      },
});