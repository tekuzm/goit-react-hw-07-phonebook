import { createAction } from '@reduxjs/toolkit';

export const fetchContactsLoading = createAction('contacts/fetchAll/loading');
export const fetchContactsSuccess = createAction('contacts/fetchAll/success');
export const fetchContactsError = createAction('contacts/fetchAll/error');

export const addContactLoading = createAction('contacts/addContact/loading');
export const addContactSuccess = createAction('contacts/addContact/success');
export const addContactError = createAction('contacts/addContact/error');

export const deleteContactLoading = createAction(
  'contacts/deleteContact/loading'
);
export const deleteContactSuccess = createAction(
  'contacts/deleteContact/success'
);
export const deleteContactError = createAction('contacts/deleteContact/error');
