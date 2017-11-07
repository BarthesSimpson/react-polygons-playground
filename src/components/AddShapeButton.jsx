import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { upsert } from 'ducks/shape'

import { createShape } from 'util/shape'

const NiceButton = styled.button`
  display: block;
  color: white;
  width: 100px;
  background-color: #222;
  border-top: 1px solid #666;
  border-bottom: 1px solid #666;
  padding: 8px;
`

const AddShapeButton = ({ shape, addShape }) => {
  // for(let i = 0; i < 7500; i++) {
  //   addShape()
  // }
 return (
  <NiceButton onClick={addShape}>Add {shape}</NiceButton>
)
}

AddShapeButton.propTypes = {
  shape: PropTypes.string.isRequired
}

const mapDispatchToProps = (dispatch, props) => ({
  addShape: () => dispatch(upsert(createShape(props.shape)))
})

export default connect(null, mapDispatchToProps)(AddShapeButton)
