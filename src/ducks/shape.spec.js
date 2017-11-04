//test utils
import { Reducer } from 'redux-testkit'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

//mocks etc.
import { shape as testShape } from 'test/mock'

//actions
import { upsert } from './shape'

//selectors
// import { } from './shape'

//async
// import {  } from './shape'

//reducer
import { initialState } from './shape'
import shapeReducer from './shape'

describe('Upsert shape tests', () => {
  it('Creates a new shape', () => {
    const action = upsert(testShape)
    const result = { [testShape.id]: testShape }
    Reducer(shapeReducer)
      .withState({})
      .expect(action)
      .toReturnState(result)
  })
  it('Updates an existing shape', () => {
    const updatedShape = { ...testShape, w: testShape.w + 1 }
    const action = upsert(updatedShape)
    const result = { [testShape.id]: updatedShape }
    Reducer(shapeReducer)
      .withState({ [testShape.id]: testShape })
      .expect(action)
      .toReturnState(result)
  })
})
