import postcss from 'rollup-plugin-postcss';
import babel from 'rollup-plugin-babel';
import {nodeResolve} from '@rollup/plugin-node-resolve';
import typeScript from 'rollup-plugin-typescript2';
import postcssImport from 'postcss-import';
import postcssVars from 'postcss-css-variables';
import postcssApply from 'postcss-apply';
import {eslint} from 'rollup-plugin-eslint';


export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/bundle.js',
    format: 'iife',
    name: 'EmailsEditor'
  },
  plugins: [
    nodeResolve(),
    // babel({exclude: 'node_modules/**'}),
    postcss({
      extract: false,
      modules: true,
      use: [],
      plugins: [postcssImport(), postcssApply(), postcssVars()]
    }),
    typeScript({tsconfig: 'tsconfig.json'}),
    eslint()
    // terser()
    // replace({
    //     exclude: 'node_modules/**',
    //     ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
    // }),
    // (process.env.NODE_ENV === 'production' && uglify()),
  ]
};
