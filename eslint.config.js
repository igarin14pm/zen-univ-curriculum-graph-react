import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import stylistic from '@stylistic/eslint-plugin';
import tseslint from 'typescript-eslint';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
    },
    plugins: {
      '@stylistic': stylistic
    },
    rules: {
      // Possible Problems
      "no-duplicate-imports": "warn",
      "no-self-compare": "error",
      "no-template-curly-in-string": "warn",
      "no-unmodified-loop-condition": "warn",
      "no-unreachable-loop": "warn",
      // Suggestions
      "class-methods-use-this": "warn",
      "curly": "error",
      "default-case-last": "error",
      "default-param-last": "warn",
      "dot-notation": "warn",
      "eqeqeq": ["error", "smart"],
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-empty": "error",
      "no-empty-function": [
        "error", 
        { "allow": ["constructors", "privateConstructors", "protectedConstructors"] }
      ],
      "no-empty-static-block": "error",
      "no-eval": "error",
      "no-implicit-coercion": "error",
      "no-multi-assign": "error",
      "no-nested-ternary": "warn",
      "no-new": "warn",
      "no-new-func": "warn",
      "no-new-wrappers": "warn",
      "no-object-constructor": "warn",
      "no-param-reassign": "warn",
      "no-return-assign": "error",
      "no-throw-literal": "error",
      "no-unneeded-ternary": "warn",
      "no-useless-rename": "warn",
      "no-var": "error",
      "no-warning-comments": "warn",
      "prefer-arrow-callback": "error",
      "prefer-const": "warn",
      "prefer-exponentiation-operator": "warn",
      "prefer-template": "warn",
      "require-await": "error",
      "sort-imports": "warn",
      "@stylistic/semi": ["warn", "always"]
    }
  },
]);
