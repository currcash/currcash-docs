import { defineConfig } from 'astro/config'
import preact from '@astrojs/preact'

// https://astro.build/config
export default defineConfig({
  outDir: './dist',
  server: {
    host: true,
    port: 8080
  },
  integrations: [preact()]
})
