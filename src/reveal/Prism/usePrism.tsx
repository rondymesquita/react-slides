import { useEffect } from 'react'

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
    await import('prismjs/plugins/line-numbers/prism-line-numbers')
    console.log(Prism)
    Prism.highlightAll()
  }

  useEffect(() => {
    load()
  }, [])
}
