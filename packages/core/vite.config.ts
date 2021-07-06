import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'
import { resolve } from 'path'
import pkg from './package.json'

export default defineConfig({
  plugins: [solidPlugin()],
  build: {
    lib: {
      name: pkg.name,
      fileName: 'index',
      entry: resolve(__dirname, 'src/index.ts'),
    },
    minify: false,
    // rollupOptions: {},
  },
})
