import React from "react";
import './Navbar.css';
import Logo from "../Logo/Logo";
import { NavLink } from "react-router-dom";
import { ReactCountryFlag } from "react-country-flag";

const Navbar = () => {


    return (
        <nav className='Navbar'>
          <Logo />
          <ul className='NavbarList'>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/about'>About Morromico</NavLink>
            </li>
            <li>
              <NavLink to='/activities'>Activities</NavLink>
            </li>
          </ul>
          <ul className='NavbarList'>
            <li>
              <NavLink to='/gallery'>Gallery</NavLink>
            </li>
            <li>
              <NavLink to='/blog'>Blog</NavLink>
            </li>
            <li>
              <NavLink to='/english' className='LanguageBox'>
                <span>English</span>
                <ReactCountryFlag
                  className="emojiFlag"
                  countryCode="US"
                  style={{
                    fontSize: '2em',
                    lineHeight: '2em',
                  }}
                  aria-label="United States"
                />
              </NavLink>
            </li>
          </ul>
        </nav>
    )
}

export default Navbar;