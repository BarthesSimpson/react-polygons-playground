const initialState = {}

export const upsert = shape => ({ type: UPSERT, id: shape.id, shape })
export const drag = shape => ({ type: DRAG, shape })
export const dragEnd = shape => ({ type: DRAGEND, shape })

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
const DRAG = 'DRAG'
const DRAGEND = 'DRAGEND'
