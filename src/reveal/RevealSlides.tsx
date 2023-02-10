import { useEffect } from 'react'
import usePrism from './Prism/usePrism'
import useHighlight from './useHighlight'
import useReveal from './useReveal'

function createMarkup(htmlString: string) {
  return { __html: htmlString }
}

function Slide({ htmlString }: { htmlString: string }) {
  return <section dangerouslySetInnerHTML={createMarkup(htmlString)}></section>
}

export default function RevealSlides({ html }: any) {
  useReveal()
  // usePrism()
  useHighlight()

  useEffect(() => {})
  return (
    <div className="reveal">
      <div className="slides">
        {html.map((htmlString: string, index: number) => {
          return <Slide key={index} htmlString={htmlString} />
        })}
      </div>
    </div>
  )
}
