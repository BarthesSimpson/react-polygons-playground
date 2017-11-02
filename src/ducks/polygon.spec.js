//test utils
import { Reducer } from 'redux-testkit'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

//mocks etc.
import { polygon as testPolygon } from 'test/mock'

//actions
import { upsert } from './polygon'

//selectors
// import { } from './polygon'

//async
// import {  } from './polygon'

//reducer
import { initialState } from './polygon'
import polygonReducer from './polygon'

describe('Upsert polygon tests', () => {
  it('Creates a new polygon', () => {
    const action = upsert(testPolygon)
    const result = { [testPolygon.id]: testPolygon }
    Reducer(polygonReducer)
      .withState({})
      .expect(action)
      .toReturnState(result)
  })
  it('Updates an existing polygon', () => {
    const updatedPolygon = { ...testPolygon, w: testPolygon.w + 1 }
    const action = upsert(updatedPolygon)
    const result = { [testPolygon.id]: updatedPolygon }
    Reducer(polygonReducer)
      .withState({ [testPolygon.id]: testPolygon })
      .expect(action)
      .toReturnState(result)
  })
})
