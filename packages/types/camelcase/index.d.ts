// Type definitions for camelcase 5.0
// Project: https://github.com/sindresorhus/camelcase

declare module 'camelcase' {
  export default function camelCase(
    strs: string | string[],
    options: {
      pascalCase?: boolean
    }
  ): string
}
