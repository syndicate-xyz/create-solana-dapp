#!/usr/bin/env node

import consola from 'consola'
import fs from 'fs-extra'
import path from 'path'
import { parseCliArgs } from './cli'
import { getPrompts } from './prompts'
import { downloadProject, mapPackageCommands } from './utils'

// parse cli args
const { parsedName, parsedTemplate, parsedPackageManager } = parseCliArgs()

async function createProject() {
  try {
    const { projectName, projectTemplate, projectPackageManager } =
      await getPrompts({
        parsedName,
        parsedTemplate,
        parsedPackageManager,
      })

    consola.start('Downloading project template...')

    const currentDir = process.cwd()
    const projectPath = path.join(currentDir, projectName)

    // Check if directory already exists
    if (fs.existsSync(projectPath)) {
      consola.error(
        `Directory ${projectName} already exists. Please choose a different name.`
      )
      process.exit(1)
    }

    // download template
    const { dir } = await downloadProject(projectTemplate, projectName)

    // read package.json
    const packageJsonPath = path.join(dir, 'package.json')
    const packageJson = await fs.readJson(packageJsonPath)

    // change project name
    packageJson.name = projectName
    await fs.writeJson(packageJsonPath, packageJson, { spaces: 2 })

    const installCommand =
      mapPackageCommands[
        projectPackageManager as keyof typeof mapPackageCommands
      ].install

    const devCommand =
      mapPackageCommands[
        projectPackageManager as keyof typeof mapPackageCommands
      ].dev

    // Final success message
    console.log(`
✅ Project ${projectName} created successfully! ✨🚀

To get started:
  # Navigate to the project directory
  cd ${projectName}

  # Install dependencies
  ${installCommand}

  # Run the project
  ${devCommand}
  `)
  } catch (error) {
    consola.error('Error creating project')
    consola.error(error)
    process.exit(1)
  }
}

createProject()
