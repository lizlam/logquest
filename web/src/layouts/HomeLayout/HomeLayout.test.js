import { render, cleanup } from '@testing-library/react'

import HomeLayout from './HomeLayout'

describe('HomeLayout', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<HomeLayout />)
    }).not.toThrow()
  })
})
