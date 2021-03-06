import React from 'react'
import ReactDOM from 'react-dom'
import { mount, shallow } from 'enzyme'
import App from './App'
import TestWrapper from 'test/hoc/testWrapper'

jest.mock('img/Target-Logo.jpg')

describe('App Tests', () => {
  it('renders without crashing', () => {
    const component = shallow(
      <TestWrapper>
        <App />
      </TestWrapper>
    )
    expect(component).toBeTruthy()
  })
})