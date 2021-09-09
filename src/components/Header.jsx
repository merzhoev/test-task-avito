import React from 'react';
import { Link } from 'react-router-dom'

import logo from '../assets/img/hn-logo.png';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <img src={logo} alt="Logo" />
          </div>
        </Link>
        <nav className="menu">
          <ul className="d-flex">
            <li className="menu__item"><Link to="/">New</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;