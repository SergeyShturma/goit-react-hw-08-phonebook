import { useAuth } from 'hooks/useAuth';
import s from './Header.module.css';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import Navigation from 'components/Navigation/Navigation';

export const Header = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className={s.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default Header;
