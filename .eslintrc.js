module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ["standard", "plugin:react/recommended"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "react/prop-types": "off",
    "newline-per-chained-call": ["error", { ignoreChainWithDepth: 10 }],
    semi: ["error", "always"],
    "arrow-parens": ["error", "always"],
    "max-len": ["error", { code: 100, ignoreTemplateLiterals: true, ignoreComments: true }],
    quotes: ["error", "double"],
    "comma-dangle": [
      2,
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "always-multiline",
        functions: "always-multiline",
      },
    ],
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
};
