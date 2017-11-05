import React from 'react'
import Draggable from 'react-draggable'

const Shape = props => {
  const style = {}
  console.log(`we re-rendered shape ${props.id}`)

  return (
    <Draggable>
      <rect {...props} />
    </Draggable>
  )
}

export default Shape

// axis="x"
//         handle=".handle"
//         defaultPosition={{x: 0, y: 0}}
//         position={null}
//         grid={[25, 25]}
//         onStart={this.handleStart}
//         onDrag={this.handleDrag}
//         onStop={this.handleStop}>
