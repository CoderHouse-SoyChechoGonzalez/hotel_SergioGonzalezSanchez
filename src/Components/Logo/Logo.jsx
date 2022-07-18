import React from "react";
import './Logo.css';

import LogoMorromico from '../../../public/assets/img/LogoMorromico.png';
import { NavLink } from "react-router-dom";


const Logo = () => {
    return (
      <NavLink to="/" className='Logo'>
        <picture>
            <img src={ LogoMorromico } alt=""/>
        </picture>
      </NavLink>
    );
}

export default Logo;