import React from 'react'
import { Link } from 'react-router-dom'

export const NotFound = (props) => (
  <div className="flex items-center justify-center flex-wrap text-center text-grey-darkest mt-20">
    <h1 className="text-10xl text-grey-light font-light">404</h1>
    <h2 className="w-full mb-4">We couldn't find the page you were looking for, sorry!</h2>
    <div>Click <Link to="/">here</Link> to be sent back to the overview</div>
  </div>
)
