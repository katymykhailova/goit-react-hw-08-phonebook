import { createAction } from '@reduxjs/toolkit';
// import { v4 as uuid } from 'uuid';
// import modalActions from '../modal/modal-actions';

// const addContact = createAction('contacts/add', contacts => ({
//   payload: { ...contacts, id: uuid() },
// }));

// const deleteContact = createAction('contacts/delete');

// const newContact = contacts => dispatch => {
//   dispatch(modalActions.closeModal());
//   dispatch(addContact(contacts));
// };

// export default { addContact, deleteContact, changeFilter };

export const fetchContactsRequest = createAction(
  'contacts/fetchContactsRequest',
);
export const fetchContactsSuccess = createAction(
  'contacts/fetchContactsSuccess',
);
export const fetchContactsError = createAction('contacts/fetchContactsError');

export const addContactRequest = createAction('contacts/addContactRequest');
export const addContactSuccess = createAction('contacts/addContactSuccess');
export const addContactError = createAction('contacts/addContactError');

export const deleteContactRequest = createAction(
  'contacts/deleteContactRequest',
);
export const deleteContactSuccess = createAction(
  'contacts/deleteContactSuccess',
);
export const deleteContactError = createAction('contacts/deleteContactError');

export const changeFilter = createAction('contacts/changeFilter');
