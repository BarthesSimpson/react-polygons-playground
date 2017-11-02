import React from 'react'
import ReactDOM from 'react-dom'
import { mount, shallow } from 'enzyme'
import App from './app'
import TestWrapper from 'test/hoc/testWrapper'

jest.mock('../img/Target-Logo.jpg')

describe('App Tests', () => {
  it('renders without crashing', () => {
    const app = shallow(
      <TestWrapper>
        <App />
      </TestWrapper>
    )
    expect(app).toBeTruthy()
  })
})