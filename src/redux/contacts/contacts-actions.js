import { createAction } from '@reduxjs/toolkit';

export const changeNameFilter = createAction('contacts/changeNameFilter');
export const changeNumberFilter = createAction('contacts/changeNumberFilter');

export const changecurrentContact = createAction(
  'contacts/changecurrentContact',
);
