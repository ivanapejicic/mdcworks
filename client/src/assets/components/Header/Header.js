import './Header.scss';
import logo from '../../images/mdcworks-logo.png';
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useState } from 'react';

function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(true);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <header className='header'>
            <div className='header__logo-container'>
                <img className='header__logo' src={logo} alt='logo for MDC Works' />
            </div>
            <div
                className='header__menu-toggle'
                onClick={toggleMenu}
            >
                <RxHamburgerMenu />
            </div>
            <nav className={`header__nav ${(isMenuOpen) ? 'open' : 'closed'}`}>
                <Link className='header__nav-link' to='https://www.mdc.edu/mdcworks/explore-careers/default.aspx'>CAREERS</Link>
                <Link className='header__nav-link' to='https://www.mdc.edu/mdcworks/career-resources/default.aspx'>RESOURCES</Link>
                <Link className='header__nav-link' to='https://www.mdc.edu/mdcworks/events.aspx'>EVENTS</Link>
                <Link className='header__nav-link' to='https://www.mdc.edu/mdcworks/employers.aspx'>EMPLOYERS</Link>
                <Link className='header__nav-link' to='https://www.mdc.edu/mdcworks/contact.aspx'>CONTACT</Link>
            </nav>
        </header>
    )
}

export default Header;