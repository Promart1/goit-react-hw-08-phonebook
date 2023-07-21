import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';

export default function AuthNav() {
  return (
    <Box sx={{ mx: 35 }}>
      <Button
        component={NavLink}
        to="/signup"
        sx={{ backgroundColor: '#031a4bf8' }}
        variant="contained"
      >
        Register
      </Button>
      <Button
        sx={{ mx: 3, color: '#031a4bf8', backgroundColor: '#ffffff' }}
        component={NavLink}
        to="/login"
        variant="outlined"
      >
        Login
      </Button>
    </Box>
  );
}
