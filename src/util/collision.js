export const rules = {
  shelf: {
    shelf: { x: 0, y: 20 },
    checkout: { x: 20, y: 20 }
  },
  checkout: {
    shelf: { x: 20, y: 20 },
    checkout: { x: 10, y: 10 }
  }
}

// export const calculateBorders = (shapeType, collisionType) => {
//   const margins = rules[shapeType][collisionType]
//   return {
//     border: margins.x + 'px',
//     borderTop: margins.y + 'px',
//     borderBottom: margins.y + 'px'
//   }
// }

export const addMarginsToShape = (shape, collidesWith) => {
  const margins = rules[shape.type][collidesWith]
  return {
    x: shape.x - margins.x,
    y: shape.y - margins.y,
    width: shape.width + 2 * margins.x,
    height: shape.height + 2 * margins.y
  }
}
