import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to='/cocktail-sp'>
          <img src={logo} alt='cocktail logo' className='logo' />
        </Link>
        <ul className="nav-links">
          <li>
            <Link to='/cocktail-sp'>Home</Link>
          </li>

          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
