import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import { resolve } from 'path';
import pkg from './package.json';

export default defineConfig({
  plugins: [solidPlugin()],

  build: {
    lib: {
      name: pkg.name,
      fileName: 'index',
      entry: resolve(__dirname, 'src/index.ts'),
    },

    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['solid-js'],

      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          'solid-js': 'Solid',
        },
      },
    },
  },
});
