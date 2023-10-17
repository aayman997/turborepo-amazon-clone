const { resolve } = require('node:path');

const project = resolve(process.cwd(), 'tsconfig.json');

/*
 * This is a custom ESLint configuration for use with
 * Next.js apps.
 *
 * This config extends the Vercel Engineering Style Guide.
 * For more information, see https://github.com/vercel/style-guide
 *
 */

module.exports = {
  extends       : [
    'eslint-config-turbo',
  ].map(require.resolve),
  parser        : '@typescript-eslint/parser',
  parserOptions : {
    project,
    sourceType: 'module',
  },
  globals       : {
    React: true,
    JSX  : true,
  },
  settings      : {
    'import/resolver': {
      typescript: {
        project,
      },
    },
  },
  plugins       : ['@typescript-eslint/eslint-plugin'],
  root          : true,
  env           : {
    node: true,
    jest: true,
  },
  ignorePatterns: ['node_modules/', 'dist/', '.eslintrc.js'],
  // add rules configurations here
  rules: {
    '@typescript-eslint/interface-name-prefix'         : 'off',
    '@typescript-eslint/explicit-function-return-type' : 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any'               : 'off',
  },
};
