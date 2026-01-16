module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'plugin:i18next/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'i18next', 'react-hooks'],
  rules: {
    'react/jsx-indent': [2],
    'react/jsx-indent-props': [2],
    indent: 'off',
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.tsx'] },
    ],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['warn'],
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/function-component-definition': 'off',
    'no-shadow': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-underscore-dangle': 'off',
    'i18next/no-literal-string': 'off',
    'max-len': ['error', { ignoreComments: true, code: 135 }],
    'jsx-a11y/no-static-element-interactions': 'off', // to allow onClick handler on div
    'jsx-a11y/click-events-have-key-events': 'off',
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks (eslint-plugin-react-hooks)
    'react-hooks/exhaustive-deps': 'error', // Checks effect dependencies
    'no-param-reassign': 'off',
    'comma-dangle': 'off',
    'object-curly-newline': 'off',
    'implicit-arrow-linebreak': 'off',
    'operator-linebreak': 'off',
    'no-undef': 'off',
    'react/no-array-index-key': 'off',
    'function-paren-newline': 'off',
  },
  globals: {
    __IS_DEV__: true,
    __API__: true,
    __PROJECT__: true,
  },
  overrides: [
    {
      files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
      rules: {
        'i18next/no-literal-string': 'off', // there is no need to test translations
        '@typescript-eslint/no-unused-vars': ['warn'], // turn on the TS-version
        'max-len': 'off',
      },
    },
  ],
};
