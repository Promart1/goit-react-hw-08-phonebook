import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { Filter } from 'components/Filter/Filter';
import { Form } from 'components/Form/Form';
import { ContactList } from 'components/ContactList/ContactList';
import { Box, Typography } from '@mui/material';

export const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const containerStyle = {
    backgroundImage:
      'url(https://foni.club/uploads/posts/2023-01/thumbs/1674331302_foni-club-p-fon-dlya-votsap-8.png)',
  };

  return (
    <div style={containerStyle}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          margin: 'auto',
          height: '100vh',
          gap: '16px',
        }}
      >
        <Typography variant="h3" sx={{ color: '#031a4bf8', marginTop: '60px' }}>
          Phonebook
        </Typography>
        <Form />
        <Typography variant="h3" sx={{ color: '#031a4bf8' }}>
          Contacts
        </Typography>
        <Filter />
        <ContactList />
        <ToastContainer />
      </Box>
    </div>
  );
};
