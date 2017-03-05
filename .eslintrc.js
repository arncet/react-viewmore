module.exports = {
    "extends": "eslint:recommended",
    "env": {
      "es6": true
    },
    "rules": {
      "react/jsx-uses-vars": 2,
      "react/jsx-uses-react": 2,
      "indent": [2, 2, { "SwitchCase": 1 }],
      "semi": [2, "never"],
      "no-case-declarations": 0,
      "eol-last": 2,
      "no-cond-assign": 2,
      "no-constant-condition": 0,
      "no-console": ["error", { allow: ["warn", "error"] }]
    },
    "parser": "babel-eslint",
    "globals": {
      "window": true,
      "React": true,
      "document": true
    },
    "plugins": [
      "react"
    ]
};
