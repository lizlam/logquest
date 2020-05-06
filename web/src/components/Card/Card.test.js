import { render, cleanup } from '@testing-library/react'

import Card from './Card'

describe('Card', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<Card />)
    }).not.toThrow()
  })
})
