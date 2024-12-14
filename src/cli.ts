import { program } from 'commander'
import { consola } from 'consola'
import { VALID_PROJECT_NAME_PATTERN } from './utils'

export const parseCliArgs = () => {
  program
    .option('-n, --name <string>', 'name of the project')
    .option('-t, --template <string>', 'template to be used (react, nextjs)')
    .option(
      '-pm, --package-manager <string>',
      'package manager to be used (npm, yarn, pnpm)'
    )

  program.parse()

  const options = program.opts()
  const parsedName = options.name
  const parsedTemplate = options.template
  const parsedPackageManager = options.packageManager

  // validate name if exists
  if (parsedName) {
    if (!VALID_PROJECT_NAME_PATTERN.test(parsedName)) {
      consola.error(
        'Invalid project name. Project name can only contain letters, numbers, hyphens, and underscores.'
      )
      process.exit(1)
    }
  }

  // validate template if exists
  if (parsedTemplate) {
    const validTemplates = ['nextjs', 'react', 'react-anchor', 'nextjs-anchor']
    if (!validTemplates.includes(parsedTemplate)) {
      consola.error(
        `Invalid template. Template must be one of: ${validTemplates.join(
          ', '
        )}`
      )
      process.exit(1)
    }
  }

  // validate package manager if exists
  if (parsedPackageManager) {
    const validPackageManagers = ['npm', 'yarn', 'pnpm']
    if (!validPackageManagers.includes(parsedPackageManager)) {
      consola.error(
        `Invalid package manager. Package manager must be one of: ${validPackageManagers.join(
          ', '
        )}`
      )
      process.exit(1)
    }
  }

  return {
    parsedName,
    parsedTemplate,
    parsedPackageManager,
  }
}
