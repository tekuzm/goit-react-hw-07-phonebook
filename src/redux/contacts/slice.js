import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAddContactError,
  fetchAddContactLoading,
  fetchAddContactSuccess,
  fetchAllContactsError,
  fetchAllContactsLoading,
  fetchAllContactsSuccess,
  fetchRemoveContactError,
  fetchRemoveContactLoading,
  fetchRemoveContactSuccess,
} from './actions';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [fetchAllContactsLoading]: store => {
      store.loading = true;
    },
    [fetchAllContactsSuccess]: (store, { payload }) => {
      console.log(payload);
      store.loading = false;
      store.items = payload;
    },
    [fetchAllContactsError]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
    [fetchAddContactLoading]: store => {
      store.loading = true;
    },
    [fetchAddContactSuccess]: (store, { payload }) => {
      store.loading = false;
      store.items.push(payload);
    },
    [fetchAddContactError]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
    [fetchRemoveContactLoading]: store => {
      store.loading = true;
    },
    [fetchRemoveContactSuccess]: (store, { payload }) => {
      store.loading = false;
      const idx = store.items.findIndex(items => items.id === payload);
      store.items.splice(idx, 1);
    },
    [fetchRemoveContactError]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
