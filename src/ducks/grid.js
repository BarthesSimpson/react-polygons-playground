const initialState = {
  width: window.innerWidth,
  height: window.innerHeight,
  isDragging: null
}

export const resize = ({ width, height }) => ({ type: RESIZE, width, height })

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case RESIZE:
      return { ...state, width: action.width, height: action.height }
    case DRAG:
      return { ...state, isDragging: action.shape }
    case DRAGEND:
      return { ...state, isDragging: null }
    default:
      return state
  }
}

const RESIZE = 'RESIZE'
const DRAG = 'DRAG'
const DRAGEND = 'DRAGEND'
