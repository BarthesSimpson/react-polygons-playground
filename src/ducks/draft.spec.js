//test utils
import { Reducer } from 'redux-testkit'
import configureStore from 'redux-mock-store'

//actions
import { save } from './draft'

//reducer
import { initialState } from './draft'
import draftReducer from './draft'

describe('Draft tests', () => {
  it('Saves a draft', () => {
    const action = save('mockLayout')
    const result = ['mockLayout']
    Reducer(draftReducer)
      .withState([])
      .expect(action)
      .toReturnState(['mockLayout'])
  })
})
