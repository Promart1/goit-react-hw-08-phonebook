

import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logIn } from 'redux/operations';
import { useAuth } from 'hooks';
import { Box } from '@mui/material';
const containerStyle = {
  backgroundImage:
    'url(https://foni.club/uploads/posts/2023-01/thumbs/1674331302_foni-club-p-fon-dlya-votsap-8.png)',
};

function LoginPage() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();
  const { isAuthError } = useAuth();
  const dispatch = useDispatch();

  const handleSingupNavigate = () => {
    navigate('/signup');
  };

  const handleLogin = () => {
    dispatch(logIn({ email, password }));
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
          Login
        </Typography>
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
          <Typography color="error">Error occurred while logging in</Typography>
        )}
        <Button
          variant="contained"
          color="primary"
          onClick={handleLogin}
          sx={{ bgcolor: '#031a4bf8' }}
        >
          Login
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleSingupNavigate}
        >
          Go to register page!
        </Button>
      </Box>
    </div>
  );
}

export default LoginPage;
