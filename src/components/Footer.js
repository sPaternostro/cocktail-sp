import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-center">

        <Link to='https://github.com/sPaternostro?tab=repositories' target='_blank' rel='noopener noreferrer'>
          <img src={logo} alt='cocktail logo' className='logo' />
        </Link>

        <p>
        &copy;Created by Sebastian Paternostro, 2023.
        </p>

      </div>
    </footer>
  )
}

export default Footer