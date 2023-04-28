import vue from "@vitejs/plugin-vue";
import path from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: "./dist",
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "primitive-vue",
      fileName: (format) => `primitive-vue.${format}.js`,
    },
    rollupOptions: {
      external: ["vue"],
      output: { globals: { vue: "Vue" } },
    },
  },
});
