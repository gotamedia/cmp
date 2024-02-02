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
        'plugin:import/recommended',
        'plugin:@stylistic/recommended-extends',
        './eslint/import.js',
        './eslint/stylistic.js',
    ],
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            extends: [
                'plugin:@typescript-eslint/recommended',
                'plugin:import/typescript',
                './eslint/reactHooks.js',
                './eslint/typescript.js',
            ],

            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
                project: './tsconfig.json',
                tsconfigRootDir: __dirname,
            },
        },
    ],
    parser: '@typescript-eslint/parser',
    plugins: [
        'react',
        'react-hooks',
        '@typescript-eslint',
        'import',
        '@stylistic',
    ],
    root: true,
}
