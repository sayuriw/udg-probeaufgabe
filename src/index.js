import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import GlobalStyles from './GlobalStyles'
import * as serviceWorker from './serviceWorker'
import Provider from './provider'

ReactDOM.render(
  <Provider>
    <GlobalStyles />
    <App />
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
