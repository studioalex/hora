import { defineConfig, searchForWorkspaceRoot } from 'vite'

export default defineConfig({
  server: {
    port: 3010,
    fs: {
      allow: [`${searchForWorkspaceRoot(process.cwd())}/`]
    }
  }
})