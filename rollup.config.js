import postcss from 'rollup-plugin-postcss';
import babel from 'rollup-plugin-babel';
import {nodeResolve} from '@rollup/plugin-node-resolve';
import postcssImport from 'postcss-import';
import {eslint} from 'rollup-plugin-eslint';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife',
    name: 'EmailsEditor'
  },
  plugins: [
    babel({exclude: 'node_modules/**'}),
    postcss({
      extract: false,
      modules: true,
      use: [],
      plugins: [postcssImport()]
    }),
    nodeResolve(),
    eslint()
    // replace({
    //     exclude: 'node_modules/**',
    //     ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
    // }),
    // (process.env.NODE_ENV === 'production' && uglify()),
  ]
};
