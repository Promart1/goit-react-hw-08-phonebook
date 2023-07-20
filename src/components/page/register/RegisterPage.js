import { useAuth } from 'hooks';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/operations';
import PasswordStrengthBar from 'react-password-strength-bar';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const navigate = useNavigate();
  const { isAuthError } = useAuth();
  const dispatch = useDispatch();

  const handleLoginNavigate = () => {
    navigate('/login');
  };

  const handleSignup = () => {
    dispatch(register({ email, password, name }));
  };

  return (
    <div>
      <div>Register</div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={event => setName(event.target.value)}
      />{' '}
      <br />
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
      {/* // Mango12345@ */}
      <br />
      {isAuthError && <div>Error occurred while registering in</div>}
      <div style={{ width: 150 }}>
        <PasswordStrengthBar password={password} />
      </div>
      <button onClick={handleSignup}>Sing up</button> <br />
      <button onClick={handleLoginNavigate}>Go to login!</button>
    </div>
  );
}

export default RegisterPage;
