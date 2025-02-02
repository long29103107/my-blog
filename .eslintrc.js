// <projectRoot>/.eslintrc.js
module.exports = {
  parser: '@typescript-eslint/parser', // Dùng parser của TypeScript
  parserOptions: {
    ecmaVersion: 'latest', // Hỗ trợ ESNext
    sourceType: 'module',
    project: ['./tsconfig.json'], // Đảm bảo ESLint đọc cấu hình TypeScript
    extraFileExtensions: ['.vue']
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:vue/vue3-recommended', // Hoặc 'plugin:vue/recommended' nếu dùng Vue 2
    'plugin:@typescript-eslint/recommended'
  ],
  rules: {
    'vue/multi-word-component-names': 0
  },
}
