import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Frame132 from './views/frame132'

const RootComponent = () => {
  return (
    <Router>
      <div>
        <Route exact component={Frame132} path="/" />
      </div>
    </Router>
  )
}

ReactDOM.render(<RootComponent />, document.getElementById('app'))
