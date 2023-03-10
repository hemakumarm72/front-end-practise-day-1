module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'eslint:recommended',
        'plugin:prettier/recommended',
    ],
    overrides: [],
    parser: '@babel/eslint-parser',
    parserOptions: {
        requireConfigFile: false,
        babelOptions: {
            babelrc: false,
            configFile: false,
            // your babel options
            presets: ['@babel/preset-react'],
        },
        ecmaFeatures: {
            jsx: true,
            experimentalObjectRestSpread: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', 'prettier'],
    rules: {
        'linebreak-style': 0,
        'react/prop-types': 0,
        camelcase: 0,
        'react/jsx-pascal-case': 0,
        'import/prefer-default-export': 0,
        'import/no-unresolved': 0,
        'import/no-extraneous-dependencies': [
            'error',
            { devDependencies: true },
        ],
        'no-console': 0,
        'react/prefer-stateless-function': 0,
        'react/state-in-constructor': 0,
        'react/no-unused-state': -0,
        'jsx-a11y/label-has-associated-control': [
            'error',
            {
                required: {
                    some: ['nesting', 'id'],
                },
            },
        ],
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto',
            },
            { usePrettierrc: true },
        ],
        'jsx-a11y/label-has-for': [
            'error',
            {
                required: {
                    some: ['nesting', 'id'],
                },
            },
        ],
        'react/jsx-props-no-spreading': 0,
        'react/react-in-jsx-scope': 0,
    },
};
