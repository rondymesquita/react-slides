import { useEffect } from 'react';

import './App.css'
import {html } from './index.md'
import RevealSlides from './reveal/RevealSlides';


function App() {

  const slidesHtml = html.split('<hr>')

  return (
    <div id="app">
      <RevealSlides html={slidesHtml} />
    </div>
  )
}

export default App
