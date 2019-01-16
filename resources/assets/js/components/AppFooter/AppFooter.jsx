import React from 'react'

import { linkStyle } from 'constants/styles'

export const AppFooter = (props) => (
  <p className="text-center text-sm text-grey py-8">
    React Laravel Boilerplate - Made by <a
      className={linkStyle}
      target="_blank"
      href="https://www.github.com/huwcarwyn">Carwyn</a>
  </p>
)
