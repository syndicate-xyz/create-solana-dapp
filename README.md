# Create Solana Dapp

A CLI tool to quickly scaffold Solana dapps with modern tooling and templates.

## Features

- 🚀 Quick setup for Solana dapp development
- ⚡️ Multiple frontend templates (React, Next.js)
- 🔧 Support for different package managers (npm, yarn, pnpm)
- 🎨 Pre-configured with Tailwind CSS
- 🦊 Wallet adapter integration (Phantom, Solflare)
- 🔄 React Query for data fetching
- 📱 Responsive layouts out of the box

## Quick Start
You can create a new project interactively:
`npx solana-dapp@latest`

###### with command line options:
`npx solana-dapp@latest -n my-app -t react -p npm`
or
`npx solana-dapp@latest --name my-app --template nextjs --package-manager pnpm`

### Command Line Options

- `--name, -n`: Name of your project
- `--template, -t`: Template to use (react, nextjs)
- `--package-manager, -pm`: Package manager to use (npm, yarn, pnpm)

## Templates

- `react`: A simple React template
- `nextjs`: A Next.js template
- `anchor-react`: A template for Anchor dapps (coming soon)
- `anchor-nextjs`: A template for Anchor dapps with Next.js (coming soon)
