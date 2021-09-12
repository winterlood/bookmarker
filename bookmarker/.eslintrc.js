module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars-experimental': 'error',
    'no-unused-vars': 'off',
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
  },
};
