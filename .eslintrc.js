module.exports = {
    // Specify the environment
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    // Use 'next/core-web-vitals' for Next.js best practices
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'next/core-web-vitals',
    ],
    // Specify the parser options
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 12,
      sourceType: 'module',
    },
    // Specify custom rules
    rules: {
      'react/react-in-jsx-scope': 'off', // Next.js automatically imports React
      // Add more custom rules here
    },
    // Include plugins
    plugins: ['react', 'react-hooks'],
    // Add settings for React
    settings: {
      react: {
        version: 'detect', // Automatically picks the version you have installed
      },
    },
  };
  