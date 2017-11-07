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

export const addMarginsToShape = (shape, collidesWith) => {
  const margins = rules[shape.type][collidesWith]
  return {
    ...shape,
    x: shape.x - margins[x],
    y: shape.y - margins[y],
    w: shape.w + margins[x],
    h: shape.h + margins[y]
  }
}
