import { useEffect } from 'react'
import Reveal from 'reveal.js'
import 'reveal.js/dist/reveal.css'
import 'reveal.js/dist/theme/black.css'

export default function useReveal() {
  useEffect(() => {
    let deck = new Reveal({})
    deck.initialize({
      highlight: {
        highlightOnLoad: false,
      },
    })
  }, [])
}
