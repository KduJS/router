import { defineConfig } from 'wite'
import kdu from '@witejs/plugin-kdu'
import analyze from 'rollup-plugin-analyzer'
import { resolve } from 'path'

// https://witejs.web.app/config/
export default defineConfig({
  root: resolve(process.cwd(), 'playground'),
  build: {
    outDir: '../playground_dist',
    rollupOptions: {
      plugins: [analyze()],
    },
  },
  plugins: [kdu()],
  define: {
    __DEV__: JSON.stringify(!process.env.prod),
    __BROWSER__: 'true',
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    },
  },
})
