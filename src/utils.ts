import consola from 'consola'
import { downloadTemplate } from 'giget'

export const templateMap = {
  react: 'react',
  nextjs: 'nextjs',
  'react-anchor': 'react-anchor',
  'nextjs-anchor': 'nextjs-anchor',
}

export const mapPackageCommands = {
  npm: {
    install: 'npm i',
    dev: 'npm run dev',
  },
  yarn: {
    install: 'yarn',
    dev: 'yarn dev',
  },
  pnpm: {
    install: 'pnpm i',
    dev: 'pnpm dev',
  },
}

export const VALID_PROJECT_NAME_PATTERN = /^[a-zA-Z0-9-_]+$/

export const downloadProject = async (
  template: string,
  projectName: string
) => {
  try {
    const { source, dir } = await downloadTemplate(
      `github:syndicate-xyz/create-solana-dapp/templates/${template}`,
      {
        dir: projectName,
        force: true,
        cwd: '.',
      }
    )
    consola.success('Template downloaded successfully', source, dir)
    return { source, dir }
  } catch (error) {
    consola.error('Error downloading template', error)
    process.exit(1)
  }
}
