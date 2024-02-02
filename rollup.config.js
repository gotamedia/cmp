const babel = require('@rollup/plugin-babel')
const commonjs = require('@rollup/plugin-commonjs')
const json = require('@rollup/plugin-json')
const resolve = require('@rollup/plugin-node-resolve')
const peerDepsExternal = require('rollup-plugin-peer-deps-external')
const typescript = require('rollup-plugin-typescript2')

const cmpPackage = require('./package.json')
const tscAlias = require('./rollup/tscAlias')

module.exports = {
    input: 'src/index.ts',
    output: [
        {
            file: cmpPackage.main,
            format: 'cjs',
            exports: 'auto',
            sourcemap: true,
            interop: 'auto',
        },
        {
            file: cmpPackage.module,
            format: 'es',
            exports: 'auto',
            sourcemap: true,
            interop: 'auto',
        },
    ],
    plugins: [
        peerDepsExternal(),
        resolve(),
        commonjs(),
        typescript({
            clean: true,
            rollupCommonJSResolveHack: false,
        }),
        babel(),
        json(),
        tscAlias(),
    ],
}
