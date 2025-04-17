import { defineConfig, loadEnv } from "vite";
import { figmaCodePlugin } from "vite-figma-plugin";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  const env = loadEnv(mode, process.cwd(), '')
  
  return {
    plugins: [figmaCodePlugin()],
    build: {
      emptyOutDir: false,
      outDir: ".tmp",
      target: "chrome58",
      rollupOptions: {
        output: {
          manualChunks: {},
          entryFileNames: `code.js`,
        },
        input: "./src-code/code.ts",
      },
    },
    define: {
      'process.env.VITE_OPENAI_API_KEY': JSON.stringify(env.VITE_OPENAI_API_KEY)
    }
  }
});
