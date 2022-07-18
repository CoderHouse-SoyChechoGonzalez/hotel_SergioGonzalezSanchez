import React from "react";
import './Header.css';

import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import {CgMenuGridO} from "react-icons/all";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const iconToggleClose = {
        fontSize: '3em',
        position: 'absolute',
        right: '0.3em',
        top: '0.3em',
        color: '#000',
    }
    const iconToggleOpen = {
        fontSize: '3em',
        position: 'absolute',
        right: '0.3em',
        top: '0.3em',
        color: '#FFF'
    }


    const handleClickToggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <header className='Header'>
            <CgMenuGridO className='IconToggle' style={ isOpen ? iconToggleOpen : iconToggleClose }  onClick={ handleClickToggle }/>
            { isOpen ? <Navbar /> : !isOpen }
        </header>
    )
}

export default Header;