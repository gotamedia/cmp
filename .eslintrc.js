module.exports = {
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react-hooks/recommended',
        'plugin:storybook/recommended',
        'plugin:@stylistic/recommended-extends',
        './eslint/reactHooks.js',
        './eslint/stylistic.js',
        './eslint/typescript.js',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
    },
    plugins: [
        'react',
        'react-hooks',
        '@typescript-eslint',
        '@stylistic',
    ],
    rules: {
        'react-hooks/rules-of-hooks': 'error',
    },
    root: true,
}
