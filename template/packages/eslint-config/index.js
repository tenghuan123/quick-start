const baseRules = {
  "linebreak-style": "off",
  "no-case-declarations": "off",
  "guard-for-in": "off",
  "no-await-in-loop": "warn",
  "no-tabs": "off",
  "no-empty": "off",
  "prefer-destructuring": "off",
  "jsx-a11y/html-has-lang": "off",
  "no-unused-vars": "off",
  "react/prop-types": "off",
  "react/jsx-filename-extension": "off",
  "no-console": "off",
  "max-len": "off",
  "jsx-a11y/click-events-have-key-events": "off",
  "jsx-a11y/no-noninteractive-element-interactions": "off",
  "react/jsx-props-no-spreading": "off",
  "no-underscore-dangle": "off",
  "import/no-extraneous-dependencies": "off",
  "react/no-danger": "off",
  eqeqeq: "off",
  "no-restricted-globals": "off",
  "react-hooks/rules-of-hooks": "error",
  "react-hooks/exhaustive-deps": "warn",
  "no-restricted-syntax": "off",
  "no-param-reassign": "off",
  "no-shadow": "off",
  "jsx-a11y/alt-text": "off",
  "global-require": "off",
  "import/no-dynamic-require": "off",
  "no-return-assign": "off",
  "no-multi-assign": "off",
  "no-unused-expressions": "off",
  "react/button-has-type": "off",
  "react/destructuring-assignment": "off",
  "import/no-unresolved": "off",
  "consistent-return": "off",
  "react/no-array-index-key": "off",
  "jsx-a11y/no-static-element-interactions": "off",
  "jsx-a11y/anchor-is-valid": "off",
  "jsx-a11y/label-has-associated-control": "off",
  "jsx-a11y/mouse-events-have-key-events": "off",
  "no-script-url": "off",
  "prefer-template": "off",
  "no-bitwise": "off",
  "func-names": "off",
  "no-use-before-define": "off",
  "react/jsx-no-target-blank": "off",
  "no-plusplus": "off",
  "react/jsx-one-expression-per-line": "off",
  "no-useless-escape": "off",
  "react/jsx-wrap-multilines": "off",
  "import/prefer-default-export": "off",
  "no-return-await": "off",
  "no-nested-ternary": "off",
  "class-methods-use-this": "off",
  "max-classes-per-file": "off",
  "no-useless-constructor": "off",
  "no-mixed-operators": "off",
  "jsx-a11y/media-has-caption": "off",
  "jsx-a11y/no-autofocus": "off",
  "import/no-import-module-exports": "off",
  "react/jsx-no-constructed-context-values": "off",
  "react/function-component-definition": "off",
  "react/require-default-props": "off",
  "react/no-unused-prop-types": "off",
  "react/react-in-jsx-scope": "off",
  "react/jsx-no-useless-fragment": "off",
  "default-param-last": "off",
  "import/extensions": [
    "error",
    "never",
    {
      // e.g. cookie.server.ts
      server: "always",
    },
  ],
  "react/no-unstable-nested-components": [
    "error",
    {
      allowAsProps: true,
    },
  ],

  // 关闭部分和Prettier有冲突的规则，交给Prettier来检查
  // 没有使用eslint-plugin-prettier，可以变快
  indent: "off",
  semi: "off",
  quotes: "off",
  curly: "off",
  "eol-last": "off",
  "wrap-iife": "off",
  "semi-style": "off",
  "arrow-parens": "off",
  "no-spaced-func": "off",
  "arrow-body-style": "off",
  "operator-linebreak": "off",
  "no-confusing-arrow": "off",
  "object-curly-newline": "off",
  "prefer-arrow-callback": "off",
  "function-paren-newline": "off",
  "newline-per-chained-call": "off",
  "implicit-arrow-linebreak": "off",
  "nonblock-statement-body-position": "off",
  "react/jsx-indent": "off",
  "react/jsx-indent-props": "off",
  "react/jsx-curly-newline": "off",
  "@typescript-eslint/semi": "off",
  "@typescript-eslint/quotes": "off",
  "@typescript-eslint/no-extra-semi": "off",
  "@typescript-eslint/type-annotation-spacing": "off",
  "@typescript-eslint/no-throw-literal": "off",
}

module.exports = {
  env: { node: true, browser: true },
  parserOptions: {
    ecmaVersion: "latest",
  },
  extends: [
    "plugin:json/recommended",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "airbnb",
    "airbnb/hooks",
  ],
  rules: {
    ...baseRules,
  },
  settings: {
    react: {
      version: "detect",
    },
  },

  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
      plugins: ["@typescript-eslint"],
      parserOptions: {
        ecmaVersion: "latest",
        project: ["tsconfig.json"],
      },
      extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "airbnb",
        "airbnb/hooks",
        "airbnb-typescript",
      ],
      rules: {
        ...baseRules,
        "@typescript-eslint/indent": "off",
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/no-unused-expressions": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/restrict-plus-operands": "off",
        "@typescript-eslint/restrict-template-expressions": "off",
        "@typescript-eslint/no-floating-promises": "off",
        "@typescript-eslint/unbound-method": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-shadow": "warn",
        "@typescript-eslint/no-unsafe-call": "warn",
        "@typescript-eslint/no-unsafe-return": "warn",
        "@typescript-eslint/no-unsafe-argument": "warn",
        "@typescript-eslint/no-unsafe-assignment": "warn",
        "@typescript-eslint/no-unsafe-member-access": "warn",
        "@typescript-eslint/ban-types": "warn",
        "@typescript-eslint/no-misused-promises": [
          "error",
          {
            checksVoidReturn: false,
          },
        ],
        "@typescript-eslint/consistent-type-imports": "error",
        "@typescript-eslint/consistent-type-exports": "error",
        "@typescript-eslint/naming-convention": "warn",
      },
    },
  ],
}
