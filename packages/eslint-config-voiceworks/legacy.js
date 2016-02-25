module.exports = {
  extends: [
    'eslint-config-voiceworks/rules/best-practices',
    'eslint-config-voiceworks/rules/errors',
    'eslint-config-voiceworks/rules/legacy',
    'eslint-config-voiceworks/rules/node',
    'eslint-config-voiceworks/rules/style',
    'eslint-config-voiceworks/rules/variables'
  ].map(require.resolve),
  env: {
    browser: true,
    node: true,
    amd: false,
    mocha: false,
    jasmine: false
  },
  ecmaFeatures: {},
  globals: {},
  rules: {}
};
