import React from 'react';
import './NavMenu.css';

const NavMenu = () => {
    const hamburgerMenu = () => {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
            hamburger.classList.toggle("active");
	        navMenu.classList.toggle("active");
    };
    const hamburgerMenuOut = () => {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
            hamburger.classList.remove("active");
	        navMenu.classList.remove("active");
    };

        return (
            <div id='topic' className='nav-body'>
                <nav className='navbar'>
                    <div className='nav-logo'>
                        <a href='/#'>.logo fotografa</a>
                    </div>
                    <div className='nav-complete-menu'>
                        <ul className='nav-menu'>
                            <li className='nav-item'>
                                <a href='/#' className='nav-link' onClick={hamburgerMenuOut}>Fotogalerie</a>
                            </li>
                            <li className='nav-item'>
                                <a href='/#' className='nav-link' onClick={hamburgerMenuOut}>Info o focení</a>
                            </li>
                            <li className='nav-item'>
                                <a href='/#' className='nav-link' onClick={hamburgerMenuOut}>Ceník</a>
                            </li>
                            <li className='nav-item'>
                                <a href='/#' className='nav-link' onClick={hamburgerMenuOut}>Ateliér</a>
                            </li>
                            <li className='nav-item'>
                                <a href='/#' className='nav-link' onClick={hamburgerMenuOut}>Reference</a>
                            </li>
                            <li className='nav-item lastChild'>
                                <a href='index.js' className='nav-link' onClick={hamburgerMenuOut}>Kontakt</a>
                            </li>
                        </ul>
                    </div>
                    <div className="hamburger" onClick={hamburgerMenu}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>			
                    </div>
                </nav>
            </div>
        );
}

export default NavMenu;
