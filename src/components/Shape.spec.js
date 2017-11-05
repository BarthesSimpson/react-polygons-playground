import React from 'react'
import ReactDOM from 'react-dom'
import { mount, shallow } from 'enzyme'
import Shape from './Shape'
import TestWrapper from 'test/hoc/testWrapper'

describe('Shape Tests', () => {
  it('renders without crashing', () => {
    const component = shallow(
      <TestWrapper>
        <Shape />
      </TestWrapper>
    )
    expect(component).toBeTruthy()
  })
})
