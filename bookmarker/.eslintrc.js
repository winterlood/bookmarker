module.exports = {
  root: true,
  extends: '@react-native-community',
  globals: {
    React: true,
    google: true,
    mount: true,
    mountWithRouter: true,
    shallow: true,
    shallowWithRouter: true,
    context: true,
    expect: true,
    jsdom: true,
    JSX: true,
  },
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars-experimental': 'error',
    'no-unused-vars': ['warn', {varsIgnorePattern: '^_'}],
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
  },
};
