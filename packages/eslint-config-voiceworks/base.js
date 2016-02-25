module.exports = {
  extends: [
    'eslint-config-voiceworks/legacy',
    'eslint-config-voiceworks/rules/es6',
  ].map(require.resolve),
  rules: {}
};
