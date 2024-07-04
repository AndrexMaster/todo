import { defineConfig } from "vite";
import basicSsl from "@vitejs/plugin-basic-ssl";
import reactRefresh from '@vitejs/plugin-react-refresh';
import tsconfigPaths from "vite-tsconfig-paths";
import react from '@vitejs/plugin-react'

const server = () => {
    // const env = process.env.VITE_APP_ENV ?? "local";
    const port = 3000;
    const origin = "http://localhost:3000";
    const host = "localhost";
    const watch = { usePolling: true };
    return {
        https: false,
        host: true,
        hmr: { host },
        port,
        origin,
        watch,
    };
};

export default defineConfig({
    // root: './public',
    plugins: [
        react(),
        reactRefresh(),
        basicSsl(),
        tsconfigPaths(),
    ],
    server: server(),
    build: {
        target: "es2020",
    },
});