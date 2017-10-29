import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'

const FloorPlanContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
const RectangleAdder = styled.button`
  display: block;
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px;
`

class Polygons extends PureComponent {
  static propTypes = {}

  render() {
    // const { count, incrementAsync } = this.props

    return (
      <Div>
        <FloorPlanContainer />
        <AddRectangleButton >Add a Rectangle</AddRectangleButton>
      </Div>
    )
  }
}

export default Polygons