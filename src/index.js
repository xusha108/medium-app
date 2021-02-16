import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'

import Routes from 'pages/routes'
import TopBar from 'components/topBar'

const App = () => {
  return (
    <Router>
      <TopBar />
      <Routes />
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
