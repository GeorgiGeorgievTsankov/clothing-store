import React from 'react'
import { Link } from 'react-router-dom'

export const NotFoundComponent = () => {
  return (
    <div className='noFound'>
        <h1>The page is not found</h1>
        <Link to={"/"}><p>Click here to homepage...</p></Link>
    </div>
  )
}
