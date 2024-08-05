/** @type {import('eslint').Linter.Config} */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:eslint-comments/recommended',
    'plugin:promise/recommended',
    // 'plugin:prettier/recommended',
  ],
  plugins: ['simple-import-sort', 'prettier'],
  ignorePatterns: ['dist', 'coverage'],
  parserOptions: {
    ecmaFeatures: {jsx: true},
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'object-curly-spacing': 'off',
    'linebreak-style': 'off',
    '@typescript-eslint/consistent-type-imports': 'off',
    'max-len': 'off',
    'consistent-return': 'off',
    'no-shadow': 'off',
    'no-param-reassign': 'warn',
    'no-template-curly-in-string': 'off',
    'no-console': 'off',
    'react/prop-types': 'off',
    'react/jsx-indent': 'off',
    'react/no-children-prop': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/no-unused-prop-types': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/button-has-type': 'warn',
    'react/no-array-index-key': 'warn',
    'react-hooks/exhaustive-deps': 'warn',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: ['arrow-function'],
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-no-useless-fragment': ['error', {allowExpressions: true}],
    'sort-imports': 'off',
    'import/order': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'simple-import-sort/exports': 'error',
    'require-await': 'error',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
      },
      extends: [
        'airbnb-typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:prettier/recommended',
      ],
      rules: {
        'import/newline-after-import': 'off',
        'react/button-has-type': 'off',
        'spaced-comment': 'off',
        'react/destructuring-assignment': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        'jsx-a11y/alt-text': 'off',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        'react/jsx-curly-brace-presence': 'off',
        'react/no-array-index-key': 'off',
        'import/order': 'off',
        'import/extensions': 'off',
        'import/prefer-default-export': 'off',
        'import/no-extraneous-dependencies': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-shadow': 'off',
        '@typescript-eslint/restrict-template-expressions': [
          'warn',
          {allowBoolean: true, allowNullish: true},
        ],
        'require-await': 'off',
        '@typescript-eslint/require-await': 'error',
      },
    },
  ],
};