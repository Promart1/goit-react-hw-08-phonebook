import { AppBarCont } from 'components/AppBar/AppBar';
import { Loader } from 'components/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  // const isLoggedIn = useSelector(selectsIsLoggedIn);

  return (
    <div>
      <AppBarCont />{' '}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
