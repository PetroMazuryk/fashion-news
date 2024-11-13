import { createSelector } from '@reduxjs/toolkit';

export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectAllContacts = state => state.contacts.items;
export const selectFilter = state => state.filters.filter;

export const selectVisibleContacts = createSelector(
  [selectAllContacts, selectFilter],
  (contacts, filter) =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    )
);
