const initialState = {
  width: window.innerWidth,
  height: window.innerHeight
}

export const resize = ({width, height}) => ({ type: RESIZE, width, height })

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case RESIZE:
      return { ...state, width: action.width, height: action.height }
    default:
      return state
  }
}

const RESIZE = 'RESIZE'
