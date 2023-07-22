import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useDispatch } from 'react-redux';
import PasswordStrengthBar from 'react-password-strength-bar';
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'hooks';
import { register } from 'redux/AuthR/AuthOperation';

function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { isAuthError } = useAuth();
  const navigate = useNavigate();

  const handleLoginNavigate = () => {
    navigate('/login');
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(register({ name, email, password }));
    reset();
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          gap: '16px',
        }}
      >
        <Typography variant="h3" sx={{ color: '#031a4bf8' }}>
          Register
        </Typography>
        <TextField
          type="text"
          label="Enter your name"
          variant="outlined"
          value={name}
          onChange={event => setName(event.target.value)}
          sx={{
            bgcolor: '#49494959',
            border: '1px solid rgba(255, 255, 255, 0.5)',
          }}
        />
        <TextField
          type="email"
          label="Enter your email"
          variant="outlined"
          value={email}
          onChange={event => setEmail(event.target.value)}
          sx={{ bgcolor: '#49494959' }}
        />
        <TextField
          type="password"
          label="Enter your password"
          variant="outlined"
          value={password}
          onChange={event => setPassword(event.target.value)}
          sx={{ bgcolor: '#49494959' }}
        />
        {isAuthError && (
          <Typography color="error">
            Error occurred while registering in
          </Typography>
        )}
        <div style={{ width: 150 }}>
          <PasswordStrengthBar password={password} shortScoreWord="" />
        </div>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{ bgcolor: '#031a4bf8' }}
        >
          Sign up
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleLoginNavigate}
        >
          Go to login!
        </Button>
      </Box>
    </form>
  );
}

export default RegisterPage;
