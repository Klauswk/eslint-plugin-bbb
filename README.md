# eslint-plugin-bbb

An eslint plugin for bbb-HTML5 client

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-bbb`:

```
$ npm install eslint-plugin-bbb --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-bbb` globally.

## Usage

Add `bbb` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "bbb"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "bbb/no-service-import-component": 2
    }
}
```

## Supported Rules

* no-service-import-component





