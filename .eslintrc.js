module.exports = {
    env: { browser: true, es2021: true, jest: true },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: ['react', '@typescript-eslint'],
    "rules": {
        "@typescript-eslint/no-unused-vars": "warn",
        "@typescript-eslint/no-non-null-assertion": "off"
    }
};