import React from 'react'
import { Link } from 'react-router-dom'

export const Logo = () => (
  <h1 className="text-lg">
    <Link className="text-white no-underline" to="/">
      Boilerplate
    </Link>
  </h1>
)
