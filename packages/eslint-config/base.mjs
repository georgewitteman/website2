import js from "@eslint/js";
import json from "@eslint/json";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import perfectionist from "eslint-plugin-perfectionist";
import { defineConfig } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

export const baseEslintConfig = defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    languageOptions: { globals: globals.browser },
    ...js.configs.recommended,
  },
  {
    files: ["**/*.json", "tsconfig.json"],
    ignores: ["package-lock.json"],
    language: "json/json",
    ...json.configs.recommended,
    plugins: { json },
  },
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    languageOptions: { globals: globals.browser },
  },
  {
    extends: ["js/recommended"],
    files: ["**/*.{js,mjs,cjs,ts}"],
    plugins: { js },
  },
  {
    extends: [
      perfectionist.configs["recommended-natural"],
      // @ts-expect-error not sure why this is not working
      tseslint.configs.strictTypeChecked,
      // @ts-expect-error not sure why this is not working
      tseslint.configs.stylisticTypeChecked,
    ],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
    rules: {
      "@typescript-eslint/no-floating-promises": [
        "error",
        {
          allowForKnownSafeCalls: [
            {
              from: "package",
              name: ["it", "describe", "test"],
              package: "node:test",
            },
          ],
        },
      ],
    },
  },
  eslintConfigPrettier,
]);
