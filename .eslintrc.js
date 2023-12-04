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
        'plugin:import/typescript',
        'plugin:import/recommended',
        'plugin:@stylistic/recommended-extends',
        './eslint/import.js',
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
        'import',
        '@stylistic',
    ],
    rules: {
        'react-hooks/rules-of-hooks': 'error',
    },
    root: true,
}
