import React from 'react';
import css from '../Filter/Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { setFilter } from 'redux/FilterR/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <label className={css.label}>
      Filter contacts by name:
      <input
        className={css.input}
        type="text"
        placeholder="Name"
        value={filter}
        onChange={event => dispatch(setFilter(event.currentTarget.value))}
      />
    </label>
  );
};
