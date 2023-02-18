import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = () => {
    return <header className={s.siteHeader}>
        <div className={s.siteHeader_wrapper}>
            <NavLink to="/profile" className={s.brand}><img src='https://i.pinimg.com/originals/9a/3b/90/9a3b902ff415e1a95368f1bf2b9ecca8.png'></img></NavLink>
            <nav className={s.headerNavigation}>
                <NavLink to="/weather" className={s.item}>Weather</NavLink>
                <NavLink to="/calculator" className={s.item}>Calculator</NavLink>
            </nav>
        </div>
    </header>
}


export default Header;