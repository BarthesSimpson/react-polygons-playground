import { createShape } from './shape'

describe('Shape Utils tests', () => {
  it('creates a shelf', () => {
    expect(createShape('shelf')).toBeTruthy()
  })
})
