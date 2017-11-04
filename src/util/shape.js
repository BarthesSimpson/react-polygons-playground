export const createShape = shape => {
  const baseShape = {
    type: shape,
    id: +new Date(),
    x: 0,
    y: 0
  }
  switch (shape) {
    case 'shelf':
      return {
        ...baseShape,
        w: 100,
        h: 10
      }
  }
}
