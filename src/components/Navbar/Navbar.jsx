import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to="/profile" className={({isActive}) => isActive? s.active : s.item}>Profile</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/dialogues" className={({isActive}) => isActive? s.active : s.item}>Messages</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/weather" className={({isActive}) => isActive? s.active : s.item}>Weather</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/calculator" className={({isActive}) => isActive? s.active : s.item}>Calculator</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/assignment" className={({isActive}) => isActive? s.active : s.item}>Semester assignment</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/users" className={({isActive}) => isActive? s.active : s.item}>Users</NavLink>
        </div>
    </nav>
}

export default Navbar;