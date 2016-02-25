module.exports = {
  extends: [
    'eslint-config-voiceworks/base',
    'eslint-config-voiceworks/rules/strict',
    'eslint-config-voiceworks/rules/react',
  ].map(require.resolve),
  rules: {}
};
