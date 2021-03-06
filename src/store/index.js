import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'store/thunk'
import { routerForBrowser } from 'redux-little-router'
import * as reducers from 'ducks'
import { composeWithDevTools } from 'redux-devtools-extension'

const routes = {
  '/': {
    title: 'Polygons'
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

export default store
