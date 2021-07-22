import { createAction } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';
import modalActions from '../modal/modal-actions';
// const addContact = createAction('contacts/add', ({ name, number }) => ({
//   payload: {
//     id: uuid(),
//     name,
//     number,
//   },
// }));
const addContact = createAction('contacts/add', contacts => ({
  payload: { ...contacts, id: uuid() },
}));

const deleteContact = createAction('contacts/delete');
const changeFilter = createAction('contacts/changeFilter');

const newContact = contacts => dispatch => {
  dispatch(modalActions.closeModal());
  dispatch(addContact(contacts));
};

/* eslint-disable import/no-anonymous-default-export */
export default { addContact, deleteContact, changeFilter, newContact };
