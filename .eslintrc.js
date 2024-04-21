module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    // 'plugin:react/recommended',
    'eslint:recommended',
    'airbnb',
    'airbnb/hooks', //追加
    // 'plugin:@typescript-eslint/recommended', //型を必要としないプラグインの推奨ルールをすべて有効
    // 'plugin:@typescript-eslint/recommended-requiring-type-checking', //型を必要とするプラグインの推奨ルールをすべて有効
    'prettier',
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    'unused-imports', //追加 使っていないimportを自動で削除用
  ],
  ignorePatterns: ['build'], //追加 .eslintignoreに対象外にしているが無いとコンパイルに時間がかかる
  // 以下追記
  rules: {
    'no-use-before-define': 'off', //関数や変数が定義される前に使われているとエラーになるデフォルトの機能をoff
    'import/prefer-default-export': 'off', //named exportがエラーになるので使えるようにoff
    // '@typescript-eslint/no-unused-vars': 'off', //unused-importsを使うため削除
    'unused-imports/no-unused-imports': 'error', //不要なimportの削除
    'unused-imports/no-unused-vars': [
      //unused-importsでno-unused-varsのルールを再定義
      'warn',
      { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
    ],
    'react/function-component-definition': [
      //アロー関数以外受け付けない設定
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'no-param-reassign': [2, { props: false }], //パラメーターのプロパティ変更を許可
    'import/extensions': [
      //importのときに以下の拡張子を記述しなくてもエラーにしない
      'error',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/jsx-filename-extension': [
      //jsx形式のファイル拡張子をjsxもしくはtsxに限定
      'error',
      {
        extensions: ['.jsx'],
      },
    ],
    'react/react-in-jsx-scope': 'off', //import React from 'react'が無くてもエラーを無くす
    'react/jsx-props-no-spreading': 'off',
    // 'react/prop-types': 'off', //TypeScriptでチェックしているから不要。offにする
    'no-void': [
      //void演算子の許可
      'error',
      {
        allowAsStatement: true,
      },
    ],
  },
  settings: {
    'import/resolver': {
      //importするファイルをjsだけではなく、tsを含むファイルを許可する
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
