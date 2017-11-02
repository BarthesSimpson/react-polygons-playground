const initialState = {}

export const upsert = polygon => ({ type: UPSERT, id: polygon.id, polygon })

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPSERT:
      return { ...state, [action.id]: action.polygon }
    default:
      return state
  }
}

// export const incrementAsync = () => async dispatch => {
//   await new Promise(resolve => setTimeout(_ => resolve(), 1000))
//   dispatch(increment())
// }

const UPSERT = 'update'
