import { useSelector } from 'react-redux';
import {
  selectIsAuthError,
  selectIsRefreshing,
  selectUser,
  selectsIsLoggedIn,
} from 'redux/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectsIsLoggedIn);
  const user = useSelector(selectUser);
  const isAuthError = useSelector(selectIsAuthError);
  const isRefreshing = useSelector(selectIsRefreshing);

  return {
    isAuthError,
    isLoggedIn,
    user,
    isRefreshing,
  };
};
