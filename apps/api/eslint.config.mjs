import { baseEslintConfig } from "@website/eslint-config/base.mjs";
import { defineConfig } from "eslint/config";

export default defineConfig([
  baseEslintConfig,
  {
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ["eslint.config.mjs"],
        },
      },
    },
  },
]);
