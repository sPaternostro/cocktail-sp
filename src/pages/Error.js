import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
   <section className="error-page section">
    <div className="error-container">
      <h1>Oops. Seems like you reached a dead-end.</h1>
      <Link to='/cocktail-sp' className='btn btn-primary'>
        Take me home
      </Link>
    </div>
   </section>
  )
}

export default Error
