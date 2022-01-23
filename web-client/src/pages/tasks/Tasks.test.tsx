import React from 'react'
import { render, screen } from '@testing-library/react'
import { Tasks } from './Tasks'

test('renders Tasks', () => {
  const { container } = render(<Tasks />)
  const element = screen.getByText(/My Tasks/i)
  expect(element).toBeInTheDocument()
  expect(container).toMatchSnapshot()
})
