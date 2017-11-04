const initialState = {}

export const upsert = shape => ({ type: UPSERT, id: shape.id, shape })

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPSERT:
      return { ...state, [action.id]: action.shape }
    default:
      return state
  }
}

// export const incrementAsync = () => async dispatch => {
//   await new Promise(resolve => setTimeout(_ => resolve(), 1000))
//   dispatch(increment())
// }

const UPSERT = 'UPSERT'
