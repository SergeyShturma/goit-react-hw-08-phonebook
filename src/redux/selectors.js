import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.items;
export const getFilter = state => state.filter.value;

export const getFilteredContacts = createSelector(
  [getContacts, getFilter],

  (contacts, filter) => {
    return contacts.filter(c =>
      c.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

export const getIsLoading = state => state.contacts.isLoading;
