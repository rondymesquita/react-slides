import { useEffect } from 'react';
import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import 'reveal.js/dist/reveal.css'
import 'reveal.js/dist/theme/black.css'
import './App.css'

import {html } from './index.md'

function createMarkup(htmlString: string) {
  return {__html: htmlString};
}

function Slide({htmlString}: {htmlString: string}) {
  console.log(createMarkup(htmlString))
  return <section dangerouslySetInnerHTML={createMarkup(htmlString)}></section>
}

function App() {

  const slidesRaw = html.split('<hr>')
  console.log(slidesRaw)


  useEffect(() => {

    let deck = new Reveal({
      // plugins: [ Markdown ]
   })
   deck.initialize();

  }, [])


  return (
    <div id="app">
      <div className='reveal'>
        <div className='slides'>
          {slidesRaw.map((htmlString: string, index: number) => {
            return <Slide key={index}  htmlString={htmlString}/>
          })}
      </div>
      </div>
    </div>
  )
}

export default App
