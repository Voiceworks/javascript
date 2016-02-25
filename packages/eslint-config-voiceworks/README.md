This package provides Voiceworks's .eslintrc as an extensible shared config.

## Usage

We export three ESLint configurations for your usage.

### eslint-config-voiceworks/base

Lints ES6+ but does not lint React. Requires `eslint`.

1. add `"eslint-config-voiceworks": "Voiceworks/javascript"` to you package.json.
2. add `"extends": "voiceworks/base"` to your .eslintrc

### eslint-config-voiceworks/legacy

Lints ES5 and below. Only requires `eslint`.

1. `npm install --save-dev eslint-config-voiceworks eslint`
2. add `"extends": "voiceworks/legacy"` to your .eslintrc

See [Voiceworks's Javascript styleguide](https://github.com/voiceworks/javascript) and
the [ESlint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files)
for more information.