import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'store/thunk'
import { routerForBrowser } from 'redux-little-router'
import * as reducers from 'ducks'
import { composeWithDevTools } from 'redux-devtools-extension'

export default function() {
  const routes = {
    '/react-redux-async-await-boilerplate': {
      '/counter': {
        test: 'foo'
      },
      '/foo': {},
      '/bar': {}
    }
  }

  const {
    reducer: routerReducer,
    middleware: routerMiddleware,
    enhancer
  } = routerForBrowser({ routes })

  let middlewares = [thunk, routerMiddleware]

  const allReducers = {
    ...reducers,
    router: routerReducer
  }

  const store = createStore(
    combineReducers(allReducers),
    composeWithDevTools(enhancer, applyMiddleware(...middlewares))
  )

  return store
}
