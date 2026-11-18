import { defineConfig } from 'vite'

// App.jsx는 `import React` 없이 JSX를 사용하므로 자동 JSX 런타임을 켭니다.
export default defineConfig({
  esbuild: {
    jsx: 'automatic',
  },
})
