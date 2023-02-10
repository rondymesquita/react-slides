import React, { useEffect } from 'react'

import 'highlight.js/styles/github-dark.css'

// or
// import hljs from 'highlight.js/lib/core'
// import javascript from 'highlight.js/lib/languages/javascript'
// hljs.registerLanguage('javascript', javascript)

export default function useHighlight() {
  useEffect(() => {
    const load = async () => {
      const hljs = (await import('highlight.js')).default
      // @ts-ignore
      window.hljs = hljs
      hljs.highlightAll()

      // @ts-ignore
      await import('highlightjs-line-numbers.js')
      // @ts-ignore
      hljs.initLineNumbersOnLoad()
    }

    load()
  }, [])
}
