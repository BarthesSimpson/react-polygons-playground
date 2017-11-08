import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'

import AddShapeButton from './AddShapeButton'
import Shape from './Shape'

import { resize } from 'ducks/grid'

import colors from 'constants/colors'

const ViewContainer = styled.div`
  display: flex;
  /* background-color: ${props =>
    props.isDragging ? colors.complementaryGreen : 'initial'}; */
`
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

  componentDidUpdate() {
    // console.log('we re-rendered :(')
  }

  render() {
    const { polygons, isDragging } = this.props
    return (
      <ViewContainer isDragging={isDragging}>
        <ControlsContainer>
          <AddShapeButton shape="shelf" />
          <AddShapeButton shape="checkout" />
        </ControlsContainer>
        <FloorPlanContainer
          width={this.props.width - 100}
          height={this.props.height - 55}
          viewBox={'0 0 1000 1000'}
        >
          {Object.keys(polygons).map(key => (
            <Shape {...polygons[key]} key={key} />
          ))}
        </FloorPlanContainer>
      </ViewContainer>
    )
  }
}

const mapStateToProps = state => ({
  width: state.grid.width,
  height: state.grid.height,
  isDragging: state.grid.isDragging,
  polygons: state.shape
})
const mapDispatchToProps = dispatch => ({
  resize: ({ width, height }) => dispatch(resize({ width, height }))
})
export default connect(mapStateToProps, mapDispatchToProps)(Polygons)
