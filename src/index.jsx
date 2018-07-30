import React from 'react'
import { render } from 'react-dom'

import 'normalize.css'
import 'modules/fonts.scss'
import 'modules/flexbox.scss'
import 'modules/fontawesome.jsx'

import './index.html'

import Home from './scenes/Home/Home.jsx'

class App extends React.Component {
  render () {
    return <Home />
  }
}

render(<App />, document.getElementById('app'))
