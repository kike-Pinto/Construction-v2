import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      '@typescript-eslint/no-unused-vars': [
        'off', // Cambia a "off" para desactivar completamente
        {
          argsIgnorePattern: '^_', // Ignorar variables que comiencen con "_"
          varsIgnorePattern: '^_', // Ignorar variables no usadas que comiencen con "_"
        },
      ],
      'no-unused-vars': 'off', // Asegúrate de desactivar también esta regla genérica
    },
  }
)
