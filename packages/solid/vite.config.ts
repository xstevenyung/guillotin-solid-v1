import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';
import { resolve } from 'path';
import pkg from './package.json';

const entry = resolve(__dirname, 'src/index.ts');

export default defineConfig({
  plugins: [solid()],

  build: {
    lib: {
      name: pkg.name,
      fileName: 'index',
      entry,
    },

    rollupOptions: {
      external: [
        'solid-js',
        'solid-js/web',
        'solid-styled-components',
        'solid-js/store',
      ],

      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          'solid-js': 'Solid',
          'solid-js/web': 'SolidWeb',
          'solid-styled-components': 'SolidStyledComponent',
          'solid-js/store': 'SolidStore',
        },
      },
    },
  },
});
