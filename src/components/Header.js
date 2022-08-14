import React from 'react';
import Logo from '../assets/Logo.JPG';
import Nav from './Nav';

function Header() {
    return (
        <div className='div-app-header'>
            <img className='logo-header' src={Logo}></img>
            <Nav />
        </div>
    );
}

export default Header;