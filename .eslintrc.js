module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb', 'prettier', 'prettier/prettier'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: '8',
    sourceType: 'module',
    requireConfigFile: false,
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
  },
  plugins: ['react', 'prettier', 'react-hooks'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': 'off',
    'import/prefer-default-export': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/react-in-jsx-scope': 'off',
    'import/no-extraneous-dependencies': 'off',
    'default-param-last': 'off',
  },
};
