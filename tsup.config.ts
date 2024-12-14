import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  publicDir: false,
  clean: true,
  minify: true,
  format: ['esm'],
  onSuccess: 'rsync -av --quiet templates dist/ --exclude node_modules',
})
