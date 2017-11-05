import store from 'store'
export const createShape = shape => {
  const baseShape = {
    type: shape,
    id: +new Date(),
    x: 0,
    y: Object.keys(store.getState().shape).length * 10,
    style: { fill: '#D4293E' }
  }
  switch (shape) {
    case 'shelf':
      return {
        ...baseShape,
        width: 100,
        height: 10
      }
  }
}

import React from 'react'
import Shelf from 'components/Shelf'
import Food from 'components/Food'
import Carts from 'components/Carts'
import Checkout from 'components/Checkout'

export const shapeMap = shape => {
  switch (shape.type) {
    case 'shelf':
      return <Shelf {...shape} key={shape.id} />
    case 'food':
      return <Food {...shape} key={shape.id} />
    case 'carts':
      return <Carts {...shape} key={shape.id} />
    case 'checkout':
      return <Checkout {...shape} key={shape.id} />
    default:
      return <Shelf {...shape} key={shape.id} />
  }
}
