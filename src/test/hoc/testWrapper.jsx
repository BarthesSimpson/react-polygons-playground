import React from 'react'
import { Provider } from 'react-redux'
import { RouterProvider } from 'redux-little-router'

import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const TestWrapper = (state = {}) => {
  const store = mockStore(state)
  return (
    <Provider store={store}>
      <RouterProvider store={store}>
      </RouterProvider>
    </Provider>
  )
}

export default TestWrapper
