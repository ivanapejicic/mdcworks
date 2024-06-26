import './HeaderAdmin.scss';
import logo from './../../images/shark-tank.webp';
import { navOptions } from '../../data/data';
import { NavLink } from 'react-router-dom';
import { CiMail } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import admin from './../../images/admin.jpeg';
function HeaderAdmin() {

    return (
        <header className='header'>
            <a className='header__image-container' href='/'>
                <img className='header__image' src={logo} alt='placeholder' />
            </a>
            <nav className='header__nav'>
                <ul>
                    {
                        navOptions.map((item) => (
                            <li className='header__nav-item' key={item.id}>
                                <NavLink to={`/${item.path}`}>
                                    {item.name}
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
            </nav>
            <div className='header__buttons-container'>
                <button className='header__mail'>
                    <CiMail style={{ width: '1.5rem', height: '1.5rem' }}/>
                </button>
                <button className='header__notifications'>
                    <IoNotificationsOutline style={{ width: '1.5rem', height: '1.5rem' }}/>
                </button>                    
                <img className='header__profile' src={admin} alt='Admin Profile' />

            </div>
        </header>
    )
}

export default HeaderAdmin;