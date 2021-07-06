import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import pkg from './package.json';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';

const production = !process.env.ROLLUP_WATCH;

const name = pkg.name
  .replace(/^(@\S+\/)?(svelte-)?(\S+)/, '$3')
  .replace(/^\w/, m => m.toUpperCase())
  .replace(/-\w/g, m => m[1].toUpperCase());

const plugins = [
  commonjs(),

  typescript({
    inlineSources: !production,
  }),

  svelte({
    dev: !production,
    ...require('./svelte.config.cjs'),
  }),

  resolve({
    dedupe: ['svelte'],
  }),

  // production && terser(),
];

export default [
  {
    input: pkg.svelte,

    output: [
      { file: pkg.module, format: 'es', sourcemap: production },
      { file: pkg.main, format: 'umd', name, sourcemap: production },
    ],

    plugins,
  },
];
