import { useAuth } from 'hooks';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logIn } from 'redux/operations';

function LoginPage() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();
  const { isAuthError } = useAuth();
  const dispatch = useDispatch();

  const handleSingupNavigate = () => {
    navigate('/singup');
  };

  const handleLogin = () => {
    dispatch(logIn({ email, password }));
  };

  return (
    <div>
      <div>Login</div>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={event => setEmail(event.target.value)}
      />{' '}
      <br />
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={event => setPassword(event.target.value)}
      />{' '}
      <br />
      {isAuthError && <div>Error occurred while logging in</div>}
      <button onClick={handleLogin}>Login</button> <br />
      <button onClick={handleSingupNavigate}>Go to register page!</button>
    </div>
  );
}

export default LoginPage;
