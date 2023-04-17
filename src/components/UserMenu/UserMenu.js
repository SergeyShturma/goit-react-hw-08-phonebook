import { useDispatch } from 'react-redux';
import { logOut } from 'redux/user/operations';
import { useAuth } from 'hooks/useAuth';
import s from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={s.wrapper}>
      <p className={s.userName}>Welcome, {user.name}!</p>
      <button
        className={s.btnLogout}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
};
