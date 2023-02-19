import { useEffect } from 'react'

import Prism from 'prismjs'

// import 'prismjs/themes/prism-okaidia.css'
// import 'prismjs/components/prism-jsx.js'
// import 'prismjs/plugins/line-numbers/prism-line-numbers.js'
// import 'prismjs/plugins/line-numbers/prism-line-numbers.css'

export default function usePrism() {
  // @ts-ignore
  window.Prism = window.Prism || {}
  // @ts-ignore
  let Prism = window.Prism

  const load = async () => {
    await import('prismjs/themes/prism.css')
    await import('prismjs/plugins/line-numbers/prism-line-numbers.css')

    Prism.manual = true
    Prism = await import('prismjs')
    const p = await import('prismjs/plugins/line-numbers/prism-line-numbers')
    console.log(p.default)
    Prism.highlightAll()
  }

  useEffect(() => {
    load()
  }, [])
}
