const { exec } = require('node:child_process')

// Merci to Steve in Paris
// https://github.com/ezolenko/rollup-plugin-typescript2/issues/201#issuecomment-1014244173
function tscAlias() {
    return {
        name: 'tsAlias',
        writeBundle: () => {
            return new Promise((resolve, reject) => {
                exec('tsc-alias', function callback(error, stdout, stderr) {
                    if (stderr || error) {
                        reject(stderr || error)
                    }
                    else {
                        resolve(stdout)
                    }
                })
            })
        },
    }
}

module.exports = tscAlias
