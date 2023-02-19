import * as shiki from 'shiki'
import { useEffect } from 'react'

export default function useShiki() {
  useEffect(() => {
    shiki
      .getHighlighter({
        theme: 'nord',
      })
      .then((highlighter) => {
        const code = highlighter.codeToHtml(`console.log('shiki');`, {
          lang: 'js',
        })
      })
  }, [])
}
