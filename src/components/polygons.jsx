import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'

import AddShapeButton from './AddShapeButton'

import { resize } from '../ducks/grid'

const ViewContainer = styled.div`display: flex;`
const ControlsContainer = styled.div`
  width: 100px;
  background-color: #222;
`
const FloorPlanContainer = styled.div`flex: 1;`

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
    return (
      <ViewContainer>
        <ControlsContainer>
          <AddShapeButton shape="shelf" />
        </ControlsContainer>
        <FloorPlanContainer>

        </FloorPlanContainer>
      </ViewContainer>
    )
  }
}

const mapStateToProps = state => ({
  width: state.grid.width,
  height: state.grid.height
})
const mapDispatchToProps = dispatch => ({
  resize: ({ width, height }) => dispatch(resize({ width, height }))
})
export default connect(mapStateToProps, mapDispatchToProps)(Polygons)
