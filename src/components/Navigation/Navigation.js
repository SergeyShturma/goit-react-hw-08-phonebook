import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import s from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div className={s.wrapper}>
      <div className={s.logo}>
        <span className={s.logoName}>PhoneBook</span>
      </div>
      <nav className={s.list}>
        <NavLink
          className={({ isActive }) => `${s.link} ${isActive ? s.active : ''}`}
          to="/"
        >
          Home
        </NavLink>
        {isLoggedIn && (
          <NavLink
            className={({ isActive }) =>
              `${s.link} ${isActive ? s.active : ''}`
            }
            to="/contacts"
          >
            Contacts
          </NavLink>
        )}
      </nav>
    </div>
  );
};

export default Navigation;
