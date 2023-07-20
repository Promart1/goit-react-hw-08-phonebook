import { NavLink } from 'react-router-dom';

export default function AuthNav() {
  return (
    <>
      <NavLink to="/signup">Register</NavLink>
      <NavLink to="/login">Login</NavLink>
    </>
  );
}
