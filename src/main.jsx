import 'babel-polyfill' // generator support
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { RouterProvider } from 'redux-little-router'

import store from 'store'
import App from 'components/App.jsx'

ReactDOM.render(
  <Provider store={ store }>
    <RouterProvider store={ store }>
      <App />
    </RouterProvider>
  </Provider>,
  document.getElementById('app')
)
