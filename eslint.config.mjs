import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import parser from '@typescript-eslint/parser';
import reactPlugin from 'eslint-plugin-react';
import reactNativePlugin from 'eslint-plugin-react-native';
import unusedImportsPlugin from 'eslint-plugin-unused-imports';
import importPlugin from 'eslint-plugin-import';
import prettier from 'eslint-config-prettier';

export default defineConfig([
  js.configs.recommended,

  {
    files: ['**/*.{ts,tsx,js,jsx}'],

    languageOptions: {
      parser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        project: './tsconfig.json',
      },
      globals: {
        console: 'readonly',
        __DEV__: true,
      },
    },

    settings: {
      react: {
        version: 'detect',
      },
    },

    plugins: {
      '@typescript-eslint': tsPlugin,
      'react': reactPlugin,
      'react-native': reactNativePlugin,
      'unused-imports': unusedImportsPlugin,
      'import': importPlugin,
    },

    rules: {
      ...tsPlugin.configs.recommended.rules,

      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['error'],

      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',

      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],

      'react-native/no-unused-styles': 'error',
      'react-native/split-platform-components': 'error',
      'react-native/no-inline-styles': 'error',
      'react-native/no-color-literals': 'off',
      'react-native/no-raw-text': 'error',
      'react-native/no-single-element-style-arrays': 'error',

      'import/extensions': 'off',
      'import/no-unresolved': 'off',
      'import/prefer-default-export': 'off',
    },
  },

  prettier,

  {
    ignores: [
      'node_modules/',
      'lib/',
      'example/',
      'babel.config.js',
      '*.config.js',
    ],
  },
]);
