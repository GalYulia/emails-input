import postcss from 'rollup-plugin-postcss';
// import typeScript from 'rollup-plugin-typescript2'; //посмотри мб другие плагины уже надо
import babel from 'rollup-plugin-babel';
// // import eslint from 'rollup-plugin-eslint';
// import uglify from 'rollup-plugin-uglify';
// import replace from 'rollup-plugin-replace';
import html  from '@rollup/plugin-html';

export default {
    input: 'src/index.js',
    output: {
      file: 'dist/bundle.js',
      format: 'iife',
      name: 'EmailsEditor'
    },
    plugins: [
        babel({ exclude: 'node_modules/**' }),
        // typeScript({tsconfig: "tsconfig.json"}), 
        // eslint(),
        postcss({
            extract: false, //keeps the CSS in the JavaScript file. If you want to generate a separate CSS file you can set extract to true and Rollup would build a index.css file which is also put in the projects dist/ directory.
            modules: true,
            use: [],
          }),
          html()
        // replace({
        //     exclude: 'node_modules/**',
        //     ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
        // }),
        // (process.env.NODE_ENV === 'production' && uglify()),
    ]
  };