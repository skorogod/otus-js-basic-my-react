module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint-config-prettier", "prettier", "plugin:react/recommended"],
  parser: "@typescript-eslint/parser",
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "import/prefer-default-export": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/ban-types": "off",
    "no-promise-executor-return": "off",
    "jest/valid-title": "off",
    "no-console": "off",
    "no-alert": "off",
    "no-restricted-globals": "off",
    "no-plusplus": "off",
    "import/no-unresolved": "off", // https://github.com/typescript-eslint/typescript-eslint/issues/1624
  },
};

// module.exports = {
//     env: {
//       browser: true,
//       es2021: true,
//     },
//     extends: [
//       "standard-with-typescript",
//       "plugin:react/recommended",
//       "eslint-config-prettier",
//     ],
//     parser: "@typescript-eslint/parser",
//     overrides: [
//       {
//         env: {
//           node: true,
//         },
//         files: [".eslintrc.{js,cjs}"],
//         parserOptions: {
//           sourceType: "script",
//         },
//       },
//     ],
//     parserOptions: {
//       ecmaVersion: "latest",
//       sourceType: "module",
//     },
//     plugins: ["react", "@typescript-eslint"],
//     rules: {
//       "import/prefer-default-export": "off",
//       "@typescript-eslint/ban-ts-comment": "off",
//       "@typescript-eslint/ban-types": "off",
//       "no-promise-executor-return": "off",
//       "jest/valid-title": "off",
//       "no-console": "off",
//       "no-alert": "off",
//       "no-restricted-globals": "off",
//       "no-plusplus": "off",
//       "import/no-unresolved": "off", // https://github.com/typescript-eslint/typescript-eslint/issues/1624
//     },
//   };
