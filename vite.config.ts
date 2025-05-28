// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // 로컬에서 /api로 시작하는 요청을 실제 API 서버로 프록시합니다.
      '/api': {
        target: 'https://lazy-shaylah-guhyunwoo-777b581b.koyeb581b.koyeb.app',
        changeOrigin: true,           // 요청 헤더의 origin을 타겟 URL로 변경
        rewrite: (path) => path.replace(/^\/api/, ''), // /api 제거 후 요청
      },
    },
  },
});
