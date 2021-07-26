import { createAction } from '@reduxjs/toolkit';

export const changeFilter = createAction('contacts/changeFilter');
export const changecurrentContact = createAction(
  'contacts/changecurrentContact',
);
