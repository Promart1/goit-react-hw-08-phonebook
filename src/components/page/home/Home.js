import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  backgroundImage:
    'url(https://foni.club/uploads/posts/2023-01/thumbs/1674331302_foni-club-p-fon-dlya-votsap-8.png)',
};

export default function Home() {
  return (
    <Box sx={containerStyle}>
      <Typography variant="h1" sx={{ color: '#031a4bf8' }}>
        Welcome to Phonebook!
      </Typography>
    </Box>
  );
}
