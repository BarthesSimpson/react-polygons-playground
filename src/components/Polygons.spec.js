import React from 'react'
import ReactDOM from 'react-dom'
import { mount, shallow } from 'enzyme'
import Polygons from './Polygons'
import TestWrapper from 'test/hoc/testWrapper'

describe('Polygons Tests', () => {
  it('renders without crashing', () => {
    const component = shallow(
      <TestWrapper>
        <Polygons />
      </TestWrapper>
    )
    expect(component).toBeTruthy()
  })
})
