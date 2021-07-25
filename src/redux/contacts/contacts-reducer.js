import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
// import actions from './contacts-actions';
import {
  // addContactRequest,
  // addContactSuccess,
  // addContactError,
  // deleteContactRequest,
  // deleteContactSuccess,
  // deleteContactError,
  // fetchContactsRequest,
  // fetchContactsSuccess,
  // fetchContactsError,
  changeFilter,
} from './contacts-actions';

import {
  fetchContacts,
  addContact,
  deleteContact,
} from './contacts-operations';
// const items = createReducer([], {
//   [actions.addContact]: (state, { type, payload }) => [payload, ...state],
//   [actions.deleteContact]: (state, { type, payload }) =>
//     state.filter(contact => contact.id !== payload),
// });

// const filter = createReducer('', {
//   [actions.changeFilter]: (_, { payload }) => payload,
// });

// export default combineReducers({
//   items,
//   filter,
// });

const items = createReducer([], {
  // [fetchContactsSuccess]: (_, { payload }) => payload,
  [fetchContacts.fulfilled]: (_, { payload }) => payload,
  // [addContactSuccess]: (state, { payload }) => [...state, payload],
  [addContact.fulfilled]: (state, { payload }) => [...state, payload],
  // [deleteContactSuccess]: (state, { payload }) =>
  //   state.filter(({ id }) => id !== payload),
  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const loading = createReducer(false, {
  // [fetchContactsRequest]: () => true,
  // [fetchContactsSuccess]: () => false,
  // [fetchContactsError]: () => false,
  // [addContactRequest]: () => true,
  // [addContactSuccess]: () => false,
  // [addContactError]: () => false,
  // [deleteContactRequest]: () => true,
  // [deleteContactSuccess]: () => false,
  // [deleteContactError]: () => false,
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,
  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const error = createReducer(null, {
  [fetchContacts.rejected]: (_, { payload }) => payload,
  [fetchContacts.pending]: () => null,
  [addContact.rejected]: (_, { payload }) => payload,
  [addContact.pending]: () => null,
  [deleteContact.rejected]: (_, { payload }) => payload,
  [deleteContact.pending]: () => null,
});

export default combineReducers({
  items,
  filter,
  loading,
  error,
});
