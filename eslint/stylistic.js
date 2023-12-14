// eslint-disable-next-line @typescript-eslint/no-var-requires
const stylistic = require('@stylistic/eslint-plugin')

const customized = stylistic.configs.customize({
    indent: 4,
    quotes: 'single',
    semi: false,
    jsx: true,
})

module.exports = {
    rules: {
        ...customized.rules,
        '@stylistic/multiline-ternary': ['off'],
        '@stylistic/jsx-curly-brace-presence': [
            'error',
            {
                props: 'always',
                children: 'always',
                propElementValues: 'always',
            },
        ],
    },
}
