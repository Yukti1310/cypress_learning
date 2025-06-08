import globals from "globals";
import { defineConfig } from "eslint/config";
import cypressPlugin from "eslint-plugin-cypress";

export default defineConfig([
  {
    ignores: [
      "node_modules/**",
      "cypress/screenshots/**",
      "cypress/videos/**",
      "cypress/e2e/1-getting-started/**",
      "cypress/e2e/2-advanced-examples/**"
    ]
  },
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.mocha,
        ...globals.jasmine,
      },
    },
    plugins: {
      cypress: cypressPlugin
    },
    rules: {
      ...cypressPlugin.configs.recommended.rules,
    }
  },
]);
