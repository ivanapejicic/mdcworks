import './Header.scss';
import logo from '../../images/logo.jpg'
import { Link } from "react-router-dom";

function Header(){
    return(
        <div className='header'>
            <img className='header__logo' src={logo} alt='logo for MDC Works'/> 
            <nav className='header__nav'>
                <Link className='header__nav-link' to='https://mdc.edu/'>CAREERS</Link>
                <Link className='header__nav-link' to='https://mdc.edu/'>RESOURCES</Link>
                {/* <Link className='header__nav-link' to='https://mdc.edu/'>EVENTS</Link> */}
                <Link className='header__nav-link' to='https://mdc.edu/'>EMPLOYERS</Link>
                <Link className='header__nav-link' to='https://mdc.edu/'>CONTACT</Link>

            </nav>
        </div>
    )
}

export default Header;