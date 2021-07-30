import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;
export const getLoading = state => state.contacts.loading;
export const getCurrentContact = state => state.contacts.currentContact;

export const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const normalizedNameFilter = filter.name.toLowerCase();

    return contacts
      .filter(({ name }) => name.toLowerCase().includes(normalizedNameFilter))
      .filter(({ number }) => number.toLowerCase().includes(filter.number))
      .sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
  },
);
