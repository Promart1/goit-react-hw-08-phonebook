import React from 'react';
import css from '../ContactList/ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectFilter,
  selectIsLoading,
} from 'redux/selectors';
import { deleteContacts } from 'redux/ContactsR/operations';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Loader } from 'components/Loader';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return 'Error:' + error;
  }

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const deleteContactHandler = contactId => {
    dispatch(deleteContacts(contactId));
  };

  return (
    <ul className={css.list}>
      {filteredContacts.map(contact => (
        <li className={css.item} key={contact.id}>
          {contact.name}: {contact.number}
          {/* <button
            className={css.button}
            type="button"
            onClick={() => deleteContactHandler(contact.id)}
          >
            delete
          </button> */}
          <IconButton
            aria-label="delete"
            size="small"
            type="button"
            onClick={() => deleteContactHandler(contact.id)}
          >
            <DeleteIcon fontSize="small" />
          </IconButton>
        </li>
      ))}
    </ul>
  );
};
