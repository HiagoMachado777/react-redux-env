module.exports = {
    "parser": "babel-eslint",
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
      ],
      "parserOptions": {
        "ecmaFeatures": {
          "jsx": true
        }
      },
    "rules": {
        "import/no-extraneous-dependencies": 0,
        "import/extensions": 0,
        "import/no-unresolved": 0
      },
};