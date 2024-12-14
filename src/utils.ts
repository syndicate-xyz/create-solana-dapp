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
