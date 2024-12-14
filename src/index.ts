// import chalk from 'chalk'
import consola from 'consola'
import fs from 'fs-extra'
import path from 'path'
import pc from 'picocolors'
import { parseCliArgs } from './cli'
import { getPrompts } from './prompts'
import { mapPackageCommands } from './utils'

// parse cli args
const { parsedName, parsedTemplate, parsedPackageManager } = parseCliArgs()

async function createProject() {
  try {
    const { projectName, projectTemplate } = await getPrompts({
      parsedName,
      parsedTemplate,
      parsedPackageManager,
    })

    consola.start('Creating project...')

    const currentDir = process.cwd()
    const projectPath = path.join(currentDir, projectName)

    const templatePath = path.join(
      projectPath,
      '..',
      'templates',
      projectTemplate
    )

    // Check if directory already exists
    if (fs.existsSync(projectPath)) {
      consola.error(
        `Directory ${projectName} already exists. Please choose a different name.`
      )
      process.exit(1)
    }

    // copy template files
    await fs.copy(templatePath, projectPath)

    // read package.json
    const packageJsonPath = path.join(projectPath, 'package.json')
    const packageJson = await fs.readJson(packageJsonPath)

    // change project name
    packageJson.name = projectName
    await fs.writeJson(packageJsonPath, packageJson, { spaces: 2 })

    // Final success message
    console.log(
      pc.green(`
✅ Project ${projectName} created successfully! ✨🚀

To get started:
  ${pc.bold(pc.italic('# Navigate to the project directory'))}
  cd ${projectName}

  ${pc.bold(pc.italic('# Install dependencies'))}
  ${
    mapPackageCommands[parsedPackageManager as keyof typeof mapPackageCommands]
      .install
  }

  ${pc.bold(pc.italic('# Run the project'))}
  ${
    mapPackageCommands[parsedPackageManager as keyof typeof mapPackageCommands]
      .dev
  }
    `)
    )
  } catch (error) {
    consola.error('Error creating project')
    consola.error(error)
    process.exit(1)
  }
}

createProject()
