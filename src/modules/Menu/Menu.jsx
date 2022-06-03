import HomePage from 'pages/HomePage';
import Movies from 'pages/Movies';

import { NavLink, Outlet } from 'react-router-dom';
import styles from './menu.module.css';

const getActiveLink = ({isActive}) => isActive ? styles.linkActive : styles.link;

const Menu = () =>{
    return(
        <>
        <header className={styles.header}>
            <nav>
        <ul className={styles.menu}>
            <li className={styles.menu_item}>
                <NavLink className={getActiveLink} to='/'>Home </NavLink>
            </li>
            <li className={styles.menu_item}>
                <NavLink className={getActiveLink} to='/movies'>Movies</NavLink>
            </li>
        </ul>
        </nav>
        </header>
        <main> 
            <Outlet/>
        </main>
        </>
    )
}

export default Menu;