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
    '@vercel/style-guide/eslint/node',
    '@vercel/style-guide/eslint/browser',
    '@vercel/style-guide/eslint/typescript',
    '@vercel/style-guide/eslint/react',
    '@vercel/style-guide/eslint/next',
    'eslint-config-turbo',
  ].map(require.resolve),
  plugins       : [
    'check-file',
  ],
  parserOptions : {
    project,
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
  ignorePatterns: ['node_modules/', 'dist/'],
  // add rules configurations here
  rules    : {
    'import/no-default-export'           : 'off',
    'eslint-comments/require-description': 'off',
    'react/hook-use-state'               : 'off',
  },
  overrides: [
    {
      files: ['**/*'],
      rules: {
        'unicorn/filename-case'                : 'off',
        'check-file/folder-naming-convention'  : ['error', { 'app/**/': 'NEXT_JS_APP_ROUTER_CASE' }],
        'check-file/filename-naming-convention': ['error', { '**/*.js': 'PASCAL_CASE' }],
      },
    },
  ],
};
