import js from '@eslint/js';

export default [
  {
    files: ['src/**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        document: true,
        window: true,
      },
    },
    rules: {},
  },
  {
    files: ['test/**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        describe: true,
        it: true,
        expect: true,
        beforeAll: true,
        afterAll: true,
        beforeEach: true,
        afterEach: true,
        test: true,
        jest: true,
      },
    },
    rules: {},
  },
  js.configs.recommended,
];
