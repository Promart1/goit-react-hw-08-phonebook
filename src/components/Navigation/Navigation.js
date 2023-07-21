// import { useAuth } from 'hooks';
// import { Link } from 'react-router-dom';

// export const Navigation = () => {
//   const { isLoggedIn } = useAuth();

//   return (
//     <nav>
//       <Link to="/">Home</Link>
//       {isLoggedIn && <Link to="/contacts">Contacts</Link>}{' '}
//     </nav>
//   );
// };

import { useAuth } from 'hooks';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Button component={Link} to="/" color="inherit" sx={{ fontSize: 18 }}>
        Home
      </Button>
      {isLoggedIn && (
        <Button component={Link} to="/contacts" color="inherit">
          Contacts
        </Button>
      )}
    </nav>
  );
};
