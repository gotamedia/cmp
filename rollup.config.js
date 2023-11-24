const babel = require('@rollup/plugin-babel')
const resolve = require('@rollup/plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')
const terser = require('@rollup/plugin-terser')
const typescript = require('rollup-plugin-typescript2')
const cmpPackage = require('./package.json')
const json = require('@rollup/plugin-json')

module.exports = {
    input: 'src/index.ts',
    output: [
        {
            file: cmpPackage.main,
            format: 'cjs',
            exports: 'named',
            sourcemap: true
        },
        {
            file: cmpPackage.module,
            format: 'es',
            exports: 'named',
            sourcemap: true
        }
    ],
    plugins: [
        babel(),
        json(),
        resolve(),
        commonjs(),
        terser(),
        typescript({
            rollupCommonJSResolveHack: false,
            clean: true,
        })
    ],
    external: Object.keys(cmpPackage.peerDependencies)
}