import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { plugin as mdPlugin, Mode } from 'vite-plugin-markdown'
import DOMPurify from 'dompurify'
import Prism from 'prismjs'
import hljs from 'highlight.js'
import markdownItAttrs from 'markdown-it-attrs';
import markdownIt from 'markdown-it';

function escapeHTML(unsafe) {
  return unsafe.replace(
    /[\u0000-\u002F\u003A-\u0040\u005B-\u0060\u007B-\u00FF]/g,
    (c) => '&#' + ('000' + c.charCodeAt(0)).slice(-4) + ';',
  )
}

const md = markdownIt({
  html: true
})
md.use(markdownItAttrs)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    mdPlugin({
      mode: [Mode.HTML],
      markdownIt: md
      // markdownIt: {
        // highlight: function (code, lang) {
        //   if (lang && hljs.getLanguage(lang)) {
        //     try {
        //       // console.log(code)
        //       return hljs.highlight(code, { language: lang }).value
        //     } catch (__) {}
        //   }
        //   return '' // use external default escaping
        // },
      // },
    }),
    // , react()
  ],
})
