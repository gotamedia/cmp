module.exports = {
    rules: {
        'react-hooks/exhaustive-deps': [
            'error',
            {
                enableDangerousAutofixThisMayCauseInfiniteLoops: true,
            },
        ],
        'react-hooks/rules-of-hooks': 'error',
    },
}
