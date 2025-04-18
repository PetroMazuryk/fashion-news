import { createSelector } from '@reduxjs/toolkit';

export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectAllNews = state => state.contacts.items;
export const selectFilter = state => state.filters.filter;

export const selectVisibleNews = createSelector(
  [selectAllNews, selectFilter],
  (contacts, filter) =>
    contacts.filter(contact =>
      contact.title.toLowerCase().includes(filter.toLowerCase())
    )
);
