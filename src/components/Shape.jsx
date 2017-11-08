import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Draggable from 'react-draggable'

import { drag, dragEnd } from 'ducks/shape'

import colors from 'constants/colors'
import { addMarginsToShape } from 'util/collision'

class Shape extends React.PureComponent {
  static propTypes = {}
  getRectProps() {
    const { id, x, y, width, height, isDragging, type } = this.props
    const baseProps = { x, y, width, height }
    return !isDragging
      ? baseProps
      : isDragging.id === id
        ? { ...baseProps, style: { fill: colors.triadicBlue } }
        : {
            ...baseProps,
            ...addMarginsToShape(this.props, isDragging.type),
            style: {
              fill: colors.targetRed
            }
          }
  }
  render() {
    const { dragStartHandler, dragEndHandler } = this.props
    const rectProps = this.getRectProps()
    console.log(`we re-rendered shape ${this.props.id}`)
    // maybe add an "isSelected" prop that we toggle in onClick and set in onStart?
    // This could make a dialog appear with ability to rotate and do other transforms
    return (
      <Draggable onStart={dragStartHandler} onStop={dragEndHandler}>
        <g>
          <rect {...rectProps} />
        </g>
      </Draggable>
    )
  }
}

const mapStateToProps = (state, props) => {
  return { isDragging: state.grid.isDragging }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    dragStartHandler: () => dispatch(drag(props)),
    dragEndHandler: () => dispatch(dragEnd(props))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Shape)
