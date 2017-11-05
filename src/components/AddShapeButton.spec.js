import React from 'react'
import ReactDOM from 'react-dom'
import { mount, shallow } from 'enzyme'
import AddShapeButton from './AddShapeButton'
import TestWrapper from 'test/hoc/testWrapper'

describe('AddShapeButton Tests', () => {
  it('renders without crashing', () => {
    const component = shallow(
      <TestWrapper>
        <AddShapeButton />
      </TestWrapper>
    )
    expect(component).toBeTruthy()
  })
})
