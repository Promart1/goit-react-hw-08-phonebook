import React from 'react';
import css from '../ContactList/ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectFilter,
  selectIsLoading,
} from 'redux/selectors';
import ClipLoader from 'react-spinners/ClipLoader';
import { deleteContacts } from 'redux/operations';


export const ContactList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);

  if (isLoading) {
    return <ClipLoader color="#36d7b7" size={50} />;
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
          <button
            className={css.button}
            type="button"
            onClick={() => deleteContactHandler(contact.id)}
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};
