import { createAction } from '@reduxjs/toolkit';

export const fetchAllContactsLoading = createAction('contacts/fetch/loading');
export const fetchAllContactsSuccess = createAction('contacts/fetch/success');
export const fetchAllContactsError = createAction('contacts/fetch/error');

export const fetchAddContactLoading = createAction('contacts/add/loading');
export const fetchAddContactSuccess = createAction('contacts/add/success');
export const fetchAddContactError = createAction('contacts/add/error');

export const fetchRemoveContactLoading = createAction(
  'contacts/remove/loading'
);
export const fetchRemoveContactSuccess = createAction(
  'contacts/remove/success'
);
export const fetchRemoveContactError = createAction('contacts/remove/error');
