import { defineConfig, loadEnv } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";
import { figmaPlugin, figmaPluginInit, runAction } from "vite-figma-plugin";
import react from "@vitejs/plugin-react"; 
import { config } from "./figma.config";

const action = process.env.ACTION;
const mode = process.env.MODE;

if (action)
  runAction(
    {},
    action
  );

figmaPluginInit();

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '')
  
  return {
    plugins: [
      react(), 
      viteSingleFile(),
      figmaPlugin(config, mode),
    ],
    build: {
      assetsInlineLimit: Infinity,
      emptyOutDir: false,
      outDir: ".tmp",
    },
    define: {
      'process.env.VITE_OPENAI_API_KEY': JSON.stringify(env.VITE_OPENAI_API_KEY)
    }
  }
});
