import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Draggable from 'react-draggable'

import { drag, dragEnd } from 'ducks/shape'

import colors from 'constants/colors'

class Shape extends React.PureComponent {
  static propTypes = {
    isDragging: PropTypes.bool.isRequired
  }
  render() {
    const {
      id,
      x,
      y,
      width,
      height,
      isDragging,
      dragStartHandler,
      dragEndHandler
    } = this.props
    const baseProps = { x, y, width, height }
    const rectProps = isDragging
      ? { ...baseProps, style: { fill: colors.triadicBlue } }
      : baseProps
    console.log(`we re-rendered shape ${id}`)
    console.log({rectProps})
    // when we start dragging, need to set this as the current draggable element
    // then, on all the other shapes, we need to add a 'border-top, border-right'
    // etc so that they show up with their buffers, and we can also make the floorplan
    // background color green or something...so we have the visual illusion of a tilemap
    
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
  return { isDragging: state.grid.isDragging === props.id }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    dragStartHandler: () => dispatch(drag(props)),
    dragEndHandler: () => dispatch(dragEnd(props))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Shape)
