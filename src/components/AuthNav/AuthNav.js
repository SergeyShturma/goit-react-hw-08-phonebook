import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <div className={s.linksList}>
      <NavLink
        className={({ isActive }) => `${s.link} ${isActive ? s.active : ''}`}
        to="/register"
      >
        Registration
      </NavLink>
      <NavLink
        className={({ isActive }) => `${s.link} ${isActive ? s.active : ''}`}
        to="/login"
      >
        Login
      </NavLink>
    </div>
  );
};
