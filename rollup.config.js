const babel = require('@rollup/plugin-babel')
const resolve = require('@rollup/plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')
const json = require('@rollup/plugin-json')

const typescript = require('rollup-plugin-typescript2')
const peerDepsExternal = require('rollup-plugin-peer-deps-external')

const cmpPackage = require('./package.json')

module.exports = {
    input: 'src/index.ts',
    output: [
        {
            file: cmpPackage.main,
            format: 'cjs',
            exports: 'auto',
            sourcemap: true,
            interop: 'auto'
        },
        {
            file: cmpPackage.module,
            format: 'es',
            exports: 'auto',
            sourcemap: true,
            interop: 'auto'
        }
    ],
    plugins: [
        peerDepsExternal(),
        resolve(),
        commonjs(),
        typescript({
            clean: true,
            rollupCommonJSResolveHack: false
        }),
        babel(),
        json()
    ]
}