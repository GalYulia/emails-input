import postcss from 'rollup-plugin-postcss';
import babel from 'rollup-plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';


export default {
    input: 'src/index.js',
    output: {
      file: 'dist/bundle.js',
      format: 'iife',
      name: 'EmailsEditor'
    },
    plugins: [
        babel({ exclude: 'node_modules/**' }),
        postcss({
            extract: false, //keeps the CSS in the JavaScript file. If you want to generate a separate CSS file you can set extract to true and Rollup would build a index.css file which is also put in the projects dist/ directory.
            modules: true,
            use: [],
          }),
        nodeResolve()
        // replace({
        //     exclude: 'node_modules/**',
        //     ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
        // }),
        // (process.env.NODE_ENV === 'production' && uglify()),
    ]
  };