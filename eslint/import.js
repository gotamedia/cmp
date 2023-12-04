// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

module.exports = {
    rules: {
        'import/no-named-as-default': 'off',
        'import/no-unresolved': 'error',
        'import/order': [
            'error',
            {
                'groups': [
                    'builtin',
                    'external',
                    ['parent', 'sibling'],
                    'internal',
                    'index',
                    'type',
                ],
                'pathGroups': [
                    {
                        pattern: '@components/**',
                        group: 'external',
                        position: 'after',
                    },
                    {
                        pattern: '@contexts/**',
                        group: 'external',
                        position: 'after',
                    },
                    {
                        pattern: '@hooks/**',
                        group: 'external',
                        position: 'after',
                    },
                    {
                        pattern: '@utils/**',
                        group: 'external',
                        position: 'after',
                    },
                ],
                'alphabetize': {
                    order: 'asc',
                    caseInsensitive: true,
                },
                'newlines-between': 'always',
            },
        ],
    },
    settings: {
        'import/resolver': {
            typescript: {
                alwaysTryTypes: false,
                project: path.join(__dirname, 'tsconfig.json'),
            },
        },
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
    },
}
