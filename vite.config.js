import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  build: {
    // 禁用 source map 生成  
    sourcemap: false,
    // 使用 terser 进行代码压缩  
    minify: 'terser',
    // 设置块大小警告限制为 1500kB  
    chunkSizeWarningLimit: 1500,
    terserOptions: {
      compress: {
        // 移除 console 和 debugger 语句  
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        // 自定义代码块划分  
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id
              .toString()
              .split('node_modules/')[1]
              .split('/')[0]
              .toString();
          }
          // 如果没有匹配到 node_modules，则返回 null 或 undefined（让 Rollup 使用默认划分）  
          return null;
        },
        // 自定义生成的 chunk 文件名  
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId
            ? chunkInfo.facadeModuleId.split('/')
            : [];
          const fileName =
            facadeModuleId[facadeModuleId.length - 2] || '[name]';
          return `js/${fileName}/[name].[hash].js`;
        },
      },
    },
  },
});