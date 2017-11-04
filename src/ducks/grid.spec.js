//test utils
import { Reducer } from 'redux-testkit'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

//actions
import { resize } from './grid'

//reducer
import { initialState } from './grid'
import gridReducer from './grid'

describe('Resize grid tests', () => {
  it('Resizes the grid correctly', () => {
    const action = resize({ height: 9, width: 12 })
    const result = { height: 9, width: 12 }
    Reducer(polygonReducer)
      .withState({})
      .expect(action)
      .toReturnState(result)
  })
})
