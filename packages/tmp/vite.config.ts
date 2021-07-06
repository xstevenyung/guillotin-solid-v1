import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'
import { resolve } from 'path'

export default defineConfig({
  plugins: [solidPlugin()],
  build: {
    lib: {
      name: 'tmp',
      fileName: 'index',
      entry: resolve(__dirname, 'src/index.tsx'),
    },
    minify: false,
  },
})
