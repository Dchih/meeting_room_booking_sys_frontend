import { defineConfig, type PluginOption } from "vite";
import vue from "@vitejs/plugin-vue";
import { visualizer } from "rollup-plugin-visualizer";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    visualizer({
      gzipSize: true,
      brotliSize: true,
      emitFile: false,
      filename: "test.html", //分析图生成的文件名
      open: true, //如果存在本地服务端口，将在打包后自动展示
    }) as PluginOption,
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
});
