import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { join } from "node:path";
import { buildSync } from "esbuild";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    {
      apply: "build",
      enforce: "post",
      transformIndexHtml() {
        buildSync({
          minify: true,
          bundle: true,
          entryPoints: [join(process.cwd(), "src", "sw.js")],
          outfile: join(process.cwd(), "dist", "sw.js"),
        });
      },
    },
  ],
})
