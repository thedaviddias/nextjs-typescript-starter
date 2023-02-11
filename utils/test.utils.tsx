import { render, RenderOptions } from '@testing-library/react'
import React, { ReactElement } from 'react'

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>
}

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, {
    wrapper: (props) => {
      return <AllTheProviders {...props} />
    },
    ...options,
  })

// eslint-disable-next-line import/export
export * from '@testing-library/react'
// eslint-disable-next-line import/export
export { customRender as render }
