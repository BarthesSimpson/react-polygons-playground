import store from 'store'
export const createShape = shape => {
  const baseShape = {
    type: shape,
    id: +new Date(),
    x: 0,
    y: Object.keys(store.getState().shape).length * 10
    // transform: 'rotate(45)'
  }
  switch (shape) {
    case 'shelf':
      return {
        ...baseShape,
        width: 100,
        height: 20
      }
    case 'checkout':
      return {
        ...baseShape,
        width: 50,
        height: 10
      }
  }
}

// 'food' 'carts' 'checkout'
