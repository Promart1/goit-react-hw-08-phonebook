import AuthNav from 'components/AuthNav/AuthNav';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { selectsIsLoggedIn } from 'redux/selectors';

export default function Layout() {
  const isLoggedIn = useSelector(selectsIsLoggedIn);

  return (
    <nav>
      <div>
        <NavLink to="/">Home</NavLink>
        {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
      </div>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
      <div>
        <Outlet />
      </div>
    </nav>
  );
}
