import { createAction } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';
// import types from './contacts-types';

// const addContact = ({ name, number }) => ({
//   type: types.ADD,
//   payload: {
//     id: uuid(),
//     name,
//     number,
//   },
// });

// const deleteContact = contactId => ({
//   type: types.DELETE,
//   payload: contactId,
// });

// const changeFilter = value => ({
//   type: types.CHANGE_FILTER,
//   payload: value,
// });
const addContact = createAction('contacts/add', ({ name, number }) => ({
  payload: {
    id: uuid(),
    name,
    number,
  },
}));
const deleteContact = createAction('contacts/delete');
const changeFilter = createAction('contacts/changeFilter');

/* eslint-disable import/no-anonymous-default-export */
export default { addContact, deleteContact, changeFilter };
