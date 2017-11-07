//test utils
import { Reducer } from 'redux-testkit'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

//actions
import { resize } from './grid'
import { drag, dragEnd } from './shape'

//reducer
import { initialState } from './grid'
import gridReducer from './grid'

describe('Resize grid tests', () => {
  it('Resizes the grid correctly', () => {
    const action = resize({ height: 9, width: 12 })
    const result = { height: 9, width: 12 }
    Reducer(gridReducer)
      .withState({})
      .expect(action)
      .toReturnState(result)
  })
  it('Toggles dragState correctly', () => {
    const dragAction = drag({ id: 123 })
    const dragEndAction = dragEnd({ id: 123 })
    Reducer(gridReducer)
      .withState({ isDragging: null })
      .expect(dragAction)
      .toReturnState({ isDragging: 123 })
    Reducer(gridReducer)
      .withState({ isDragging: 123 })
      .expect(dragEndAction)
      .toReturnState({ isDragging: null })
  })
})
