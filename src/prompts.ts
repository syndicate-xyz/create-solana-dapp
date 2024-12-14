import { input, select } from '@inquirer/prompts'
import { VALID_PROJECT_NAME_PATTERN } from './utils'

export const getPrompts = async ({
  parsedName,
  parsedTemplate,
  parsedPackageManager,
}: {
  parsedName?: string
  parsedTemplate?: string
  parsedPackageManager?: string
}) => {
  try {
    const projectName =
      parsedName ||
      (await input({
        message: 'Enter your project name:',
        required: true,
        default: 'solana-dapp',
        validate: (input) => {
          if (!input) return 'Project name is required'
          // Check for valid directory name characters
          if (!VALID_PROJECT_NAME_PATTERN.test(input)) {
            return 'Project name can only contain letters, numbers, hyphens, and underscores'
          }
          return true
        },
      }))

    const projectTemplate =
      parsedTemplate ||
      (await select({
        message: 'Select a template',
        choices: [
          {
            name: 'react',
            value: 'react',
            description: 'React template',
          },
          {
            name: 'nextjs',
            value: 'nextjs',
            description: 'Next.js template',
          },
          {
            name: 'react-anchor',
            value: 'react-anchor',
            description: 'React with anchor template',
            disabled: 'This template is not available yet',
          },
          {
            name: 'nextjs-anchor',
            value: 'nextjs-anchor',
            description: 'Next.js with anchor template',
            disabled: 'This template is not available yet',
          },
        ],
      }))

    const projectPackageManager =
      parsedPackageManager ||
      (await select({
        message: 'Select a template',
        choices: [
          {
            name: 'npm',
            value: 'npm',
            description: 'install with npm',
            short: 'n',
          },
          {
            name: 'yarn',
            value: 'yarn',
            description: 'install with yarn',
          },
          {
            name: 'pnpm',
            value: 'pnpm',
            description: 'install with pnpm',
          },
        ],
      }))

    return {
      projectName,
      projectTemplate,
      projectPackageManager,
    }
  } catch (error) {
    throw error
  }
}
