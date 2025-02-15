const RULES = {
    OFF: "off",
    WARN: "warn",
    ERROR: "error"
};

module.exports = {
    root: true,
    env: { browser: true, es2020: true, node: true },
    extends: ["eslint:recommended", "plugin:react/recommended", "prettier"],
    ignorePatterns: ["dist", ".eslintrc.cjs"],
    parserOptions: { ecmaVersion: "latest", sourceType: "module" },
    settings: { react: { version: "18.2" } },
    plugins: ["react-refresh"],
    rules: {
        indent: [RULES.WARN, 4, { SwitchCase: 1 }],
        quotes: [RULES.WARN, "double"],
        semi: [RULES.WARN, "always"],
        "linebreak-style": RULES.OFF,
        "react/react-in-jsx-scope": RULES.OFF,
        "react/prop-types": RULES.OFF
    }
};
