import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import { visualizer } from "rollup-plugin-visualizer";
import viteCompression from "vite-plugin-compression";
// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [
    react(),
    tsconfigPaths(),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
      // 指定symbolId格式
      symbolId: "icon-[dir]-[name]",
    }),
    visualizer(),
    viteCompression({
      verbose: true, // 输出压缩成功
      disable: false, // 是否禁用
      threshold: 10240, // 体积大于阈值会被压缩，单位是b
      algorithm: "gzip", // 压缩算法
      ext: ".gz", // 生成的压缩包后缀
      deleteOriginFile: true, // 是否删除原文件
    }),
  ],
  server: {
    // 自动打开浏览器
    open: true,
    host: true,
    port: 3001,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  build: {
    target: "esnext",
    minify: "terser",
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            // 让每个插件都打包成独立的文件
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
          return null;
        },
      },
    },
    terserOptions: {
      compress: {
        // 生产环境移除console
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
});
