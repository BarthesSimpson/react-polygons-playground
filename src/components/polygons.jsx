import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'

import AddShapeButton from './AddShapeButton'

import { resize } from 'ducks/grid'

import { shapeMap } from 'util/shape'

const ViewContainer = styled.div`display: flex;`
const ControlsContainer = styled.div`
  width: 100px;
  background-color: #222;
`
const FloorPlanContainer = styled.svg`
  flex: 1;
  border: 1px solid black;
`

class Polygons extends PureComponent {
  static propTypes = {}

  componentWillMount() {
    window.addEventListener('resize', () =>
      this.props.resize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    )
  }

  componentWillUnmount() {
    window.removeEventListener('resize')
  }

  componentDidMount() {
    console.log(this.props)
    console.log(this.props.width)
  }

  render() {
    const polygons = this.props.polygons
    return (
      <ViewContainer>
        <ControlsContainer>
          <AddShapeButton shape="shelf" />
        </ControlsContainer>
        <FloorPlanContainer
          width={this.props.width - 100}
          height={this.props.height - 55}
          viewBox={'0 0 1000 1000'}
        >
          {Object.keys(polygons).map(key => shapeMap(polygons[key]))}
        </FloorPlanContainer>
      </ViewContainer>
    )
  }
}

const mapStateToProps = state => ({
  width: state.grid.width,
  height: state.grid.height,
  polygons: state.shape
})
const mapDispatchToProps = dispatch => ({
  resize: ({ width, height }) => dispatch(resize({ width, height }))
})
export default connect(mapStateToProps, mapDispatchToProps)(Polygons)
