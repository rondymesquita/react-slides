import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {plugin as mdPlugin, Mode} from 'vite-plugin-markdown'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [mdPlugin({
    mode: [Mode.HTML]
  })
  // , react()
],
})
