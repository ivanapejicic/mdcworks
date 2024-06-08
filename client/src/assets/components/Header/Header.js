import './Header.scss';
import logo from './../../images/shark-tank.webp';
import { navOptions } from '../../data/data';
import { NavLink } from 'react-router-dom';

function Header() {

    return (
        <header className='header'>
            <a className='header__image-container' href='/'>
                <img className='header__image' src={logo} alt='placeholder' />
            </a>
            <nav className='header__nav'>
                <ul>
                    {
                        navOptions.map((item) => (
                            <li className='header__nav-item'>
                                <NavLink to={`/${item.path}`}>
                                    {item.name}
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
            </nav>
            <div className='header__buttons-container'>
                <button className='header__login'>
                    <a href='/login'>Log In</a>
                </button>
                <button className='header__signup'>
                    <a href='https://www.mdc.edu/registration/'>Sign Up</a>
                </button>
            </div>
        </header>
    )
}

export default Header;