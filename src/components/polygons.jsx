import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Stage, Layer, Rect } from 'react-konva'

const ViewContainer = styled.div`display: flex;`
const ControlsContainer = styled.div`
  width: 100px;
  background-color: #222;
`
const FloorPlanContainer = styled.div`
  flex: 1;
`
const AddRectangleButton = styled.button`
  display: block;
  color: white;
  width: 100%;
  background-color: #222;
  border-top: 1px solid #666;
  border-bottom: 1px solid #666;
  padding: 8px;
`

const Rectangle = () => (
  <Layer>
    <Rect
      x={10}
      y={10}
      width={50}
      height={50}
      fill={'#CA0815'}
      shadowBlur={5}
      draggable="true"
      dragBoundFunc={pos => {
        const leftBound = 10
        const rightBound = 1080 - 60 //this should be stage width minus (rectangle width plus padding)
        const topBound = 10
        const bottomBound = 600 - 60
        const newX =
          pos.x < leftBound
            ? leftBound
            : pos.x > rightBound ? rightBound : pos.x
        const newY =
          pos.y < topBound
            ? topBound
            : pos.y > bottomBound ? bottomBound : pos.y
        return {
          x: newX,
          y: newY
        }
      }}
      onClick={() => {
        console.log('yas')
      }}
    />
  </Layer>
)

class Polygons extends PureComponent {
  static propTypes = {}

  componentDidMount() {
    console.log(this.stageRef.getStage())
  }

  render() {
    return (
      <ViewContainer>
        <ControlsContainer>
          <AddRectangleButton>Add a Rectangle</AddRectangleButton>
        </ControlsContainer>
        <FloorPlanContainer>
          <Stage
            ref={x => (this.stageRef = x)}
            width={1080}
            height={720}
            style={{ backgroundColor: 'white' }}
          >
            <Rectangle />
          </Stage>
        </FloorPlanContainer>
      </ViewContainer>
    )
  }
}

export default Polygons
