const initialState = []

export const save = (layout) => ({ type: SAVE, layout })

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SAVE:
      return [...state, action.layout]
    default:
      return state
  }
}

const SAVE = 'SAVE'
