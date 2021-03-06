import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  changeNameFilter,
  changecurrentContact,
  changeNumberFilter,
} from './contacts-actions';

import {
  fetchContacts,
  addContact,
  deleteContact,
  changeContact,
} from './contacts-operations';

const items = createReducer([], {
  [fetchContacts.fulfilled]: (_, { payload }) => payload,
  [addContact.fulfilled]: (state, { payload }) => [...state, payload],
  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  [changeContact.fulfilled]: (state, { payload }) =>
    state.map(contact => (contact.id === payload.id ? payload : contact)),
});

const loading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,
  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
  [changeContact.pending]: () => true,
  [changeContact.fulfilled]: () => false,
  [changeContact.rejected]: () => false,
});

const filter = createReducer(
  { name: '', number: '' },
  {
    [changeNameFilter]: (state, { payload }) => ({
      ...state,
      name: payload,
    }),
    [changeNumberFilter]: (state, { payload }) => ({
      ...state,
      number: payload,
    }),
  },
);

const currentContact = createReducer('', {
  [changecurrentContact]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
  loading,
  currentContact,
});
