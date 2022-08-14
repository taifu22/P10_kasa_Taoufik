import React from 'react';
import LogoFooter from '../assets/LogoFooter.JPG'

function Footer() {
    return (
        <div className='div-footer'>
            <img src={LogoFooter}></img>
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    );
}

export default Footer;