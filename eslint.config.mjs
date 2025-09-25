import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import prettier from "eslint-plugin-prettier";
import tailwind from "eslint-plugin-tailwindcss";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,ts,jsx,tsx}"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: { ecmaVersion: "latest", sourceType: "module" },
      globals: globals.browser,
    },
    plugins: {
      react,
      prettier,
      tailwind,
    },
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      react.configs.flat.recommended,
      "plugin:prettier/recommended",
      "plugin:tailwindcss/recommended",
    ],
    rules: {
      "prettier/prettier": "error",
      "react/react-in-jsx-scope": "off", // Next.js doesn’t require `import React`
      "tailwindcss/classnames-order": "warn", // auto-order Tailwind classes
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
]);
