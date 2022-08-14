import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div> 
            <ul>
                <li><Link style={{color:'#FF6060' , textDecoration:'none'}} to="/">Accueil</Link></li>
                <li><Link style={{color:'#FF6060' , textDecoration:'none'}} to="about">A propos</Link></li>
            </ul>
        </div>
    );
}

export default Nav;