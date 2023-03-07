import { createSlice } from '@reduxjs/toolkit';
import {
  addContactError,
  addContactLoading,
  addContactSuccess,
  fetchContactsError,
  fetchContactsLoading,
  fetchContactsSuccess,
  deleteContactError,
  deleteContactLoading,
  deleteContactSuccess,
} from './actions';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchContactsLoading]: store => {
      store.loading = true;
    },
    [fetchContactsSuccess]: (store, { payload }) => {
      store.loading = false;
      store.items = payload;
    },
    [fetchContactsError]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
    [addContactLoading]: store => {
      store.loading = true;
    },
    [addContactSuccess]: (store, { payload }) => {
      store.loading = false;
      store.items.push(payload);
    },
    [addContactError]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
    [deleteContactLoading]: store => {
      store.loading = true;
    },
    [deleteContactSuccess]: (store, { payload }) => {
      store.loading = false;
      const idx = store.items.findIndex(items => items.id === payload);
      store.items.splice(idx, 1);
    },
    [deleteContactError]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
