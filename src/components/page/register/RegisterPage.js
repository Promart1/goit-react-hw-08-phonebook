import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useDispatch } from 'react-redux';
import { register } from 'redux/operations';
import PasswordStrengthBar from 'react-password-strength-bar';
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'hooks';

const containerStyle = {
  backgroundImage:
    'url(https://foni.club/uploads/posts/2023-01/thumbs/1674331302_foni-club-p-fon-dlya-votsap-8.png)',
};

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
    <div style={containerStyle}>
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
          sx={{ bgcolor: '#49494959' }}
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
          <PasswordStrengthBar password={password} />
        </div>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSignup}
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
    </div>
  );
}

export default RegisterPage;
