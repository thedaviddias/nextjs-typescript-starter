import { render } from '@testing-library/react'

import Home from '../pages/index'

// import { render, screen } from '@/utils/test.utils'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)

    // const heading = screen.getByRole('heading', {
    //   name: /Welcome to next\.js!/i,
    // })

    // expect(heading).toBeInTheDocument()
  })
})
