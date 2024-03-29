module.exports = {
    rules: {
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/consistent-type-exports': 'error',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/consistent-type-imports': [
            'error',
            { prefer: 'type-imports', disallowTypeAnnotations: true },
        ],
    },
}
