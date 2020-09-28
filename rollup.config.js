import postcss from 'rollup-plugin-postcss';
import babel from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typeScript from 'rollup-plugin-typescript2';
import postcssImport from 'postcss-import';
import postcssVars from 'postcss-css-variables';
import postcssApply from 'postcss-apply';
import { eslint } from 'rollup-plugin-eslint';
import url from 'postcss-url';
import copy from 'rollup-plugin-copy';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import { terser } from 'rollup-plugin-terser';

const getPlugins = (needToExtract = false, needCssModules = true) => [
  nodeResolve(),
  babel({ exclude: 'node_modules/**', babelHelpers: 'bundled' }),
  postcss({
    extract: needToExtract,
    modules: needCssModules,
    use: [],
    plugins: [
      postcssImport(),
      postcssApply(),
      postcssVars(),
      url({ url: 'inline' }),
      autoprefixer(),
      cssnano(),
    ],
  }),
  typeScript({ tsconfig: 'tsconfig.json' }),
  eslint({ include: 'src/' }),
  terser(),
];

export default [
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/emails-input.js',
      format: 'iife',
      name: 'EmailsInput',
    },
    plugins: getPlugins(),
  },
  {
    input: 'demo-example/index.ts',
    output: [
      {
        file: 'demo-example/dist/example.js',
        format: 'iife',
        name: 'initExampleForm',
      },
    ],
    plugins: [
      ...getPlugins(true, false),
      copy({
        targets: [{ src: 'dist/emails-input.js', dest: 'demo-example/dist' }],
      }),
    ],
  },
];
