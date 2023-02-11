module.exports = {
  root: true,
  extends: [
    '@thedaviddias/eslint-config/next.cjs',
    'plugin:mdx/recommended',
    'plugin:prettier/recommended', // always at the end
  ],
  plugins: ['prettier'],
  rules: {
    'no-console': ['error'],
    'react/jsx-no-undef': ['off', { allowGlobals: true }],
    '@typescript-eslint/no-unused-vars': ['error'],
  },
}
