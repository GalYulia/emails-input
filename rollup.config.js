import postcss from 'rollup-plugin-postcss';
import babel from '@rollup/plugin-babel';
import {nodeResolve} from '@rollup/plugin-node-resolve';
import typeScript from 'rollup-plugin-typescript2';
import postcssImport from 'postcss-import';
import postcssVars from 'postcss-css-variables';
import postcssApply from 'postcss-apply';
import {eslint} from 'rollup-plugin-eslint';
import url from 'postcss-url';
import copy from 'rollup-plugin-copy';


const getPlugins = () => [
    nodeResolve(),
    babel({exclude: 'node_modules/**', babelHelpers: 'bundled'}),
    postcss({
        extract: false,
        modules: true,
        use: [],
        plugins: [
            postcssImport(),
            postcssApply(),
            postcssVars(),
            url({url: 'inline'})]
    }),
    typeScript({tsconfig: 'tsconfig.json'}),
    eslint({include: 'src/'}),


    // sizeSnapshot(), // напишет в консоль размер бандла
    // terser(), // минификатор совместимый с ES2015+, форк и наследник UglifyES
    // replace({
    //     exclude: 'node_modules/**',
    //     ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
    // }),
    // (process.env.NODE_ENV === 'production' && uglify()),
];

export default [{
    input: 'src/index.ts',
    output: {
        file: 'dist/emails-input.js',
        format: 'iife',
        name: 'EmailsInput'
    },
    plugins: getPlugins()
}, {
    input: 'demo-example/index.ts',
    output: [{
        file: 'demo-example/dist/example.js',
        format: 'iife',
        name: 'ExampleForm'
    }],
    plugins: [
        ...getPlugins(),
        copy({
            targets: [
                {src: 'demo-example/style.css', dest: 'demo-example/dist'},
                {src: 'dist/emails-input.js', dest: 'demo-example/dist'}]
        }
    )]
}];
