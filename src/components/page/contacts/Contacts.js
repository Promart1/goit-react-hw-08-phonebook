import React, { useEffect } from 'react';
import css from './Contacts.module.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { Filter } from 'components/Filter/Filter';
import { Form } from 'components/Form/Form';
import { ContactList } from 'components/ContactList/ContactList';

export const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className={css.container}>
      <h2>Phonebook</h2>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      <ToastContainer />
    </div>
  );
};
