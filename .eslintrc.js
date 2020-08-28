module.exports = {
    env: {
        browser: true,
        es2020: true,
    },
    extends: [
        'plugin:vue/essential',
        'airbnb-base',
    ],
    parserOptions: {
        ecmaVersion: 11,
        sourceType: 'module',
    },
    plugins: [
        'vue',
    ],
    settings: {
        'import/extensions': ['.js', '.vue'],
        'import/resolver': {
            node: {
                extensions: ['.js', '.json', '.vue'],
            },
            alias: {
                map: [
                    ['@', './resources/js'],
                ],
                extensions: ['.js', '.vue', '.json'],
            },
        },
    },
    rules: {
        indent: ['error', 4],
        'import/prefer-default-export': 'off',
        'no-param-reassign': 'off',
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                mjs: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
                vue: 'always',
            },
        ],
    },
};
