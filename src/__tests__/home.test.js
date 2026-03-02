import { render, screen } from '@testing-library/react'
import TestComponent from '../components/TestComponent'

test('renders site title', () => {
  render(<TestComponent />)
  expect(screen.getByText(/tintlife-site/i)).toBeInTheDocument()
})
