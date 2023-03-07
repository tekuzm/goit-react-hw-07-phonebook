import { getAllContacts, removeContact } from 'components/services/contacts';
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
} from './contacts/actions';
import { addContact } from './contacts/slice';

export const fetchAllContacts = () => {
  const func = async dispatch => {
    try {
      dispatch(fetchAllContactsLoading()); // request
      const data = await getAllContacts();
      dispatch(fetchAllContactsSuccess(data)); // success response
    } catch ({ response }) {
      dispatch(fetchAllContactsError(response.data.message)); // response with error
    }
  };
  return func;
};

// Find duplicates
const isDuplicate = (contacts, { name }) => {
  const normalizedName = name.toLowerCase();

  const contact = contacts.find(({ name }) => {
    return name.toLowerCase() === normalizedName;
  });

  return Boolean(contact);
};

export const fetchAddContact = data => {
  const func = async (dispatch, getState) => {
    try {
      const { contacts } = getState();
      if (isDuplicate(contacts.items, data)) {
        alert(`${data.name} is already in contacts.`);
        return false;
      }
      dispatch(fetchAddContactLoading());
      const result = await addContact();
      dispatch(fetchAddContactSuccess(result));
    } catch ({ response }) {
      dispatch(fetchAddContactError(response.data.message));
    }
  };
  return func;
};

export const fetchRemoveContact = id => {
  const func = async dispatch => {
    try {
      dispatch(fetchRemoveContactLoading());
      await removeContact(id);
      dispatch(fetchRemoveContactSuccess(id));
    } catch ({ response }) {
      dispatch(fetchRemoveContactError(response.data.message));
    }
  };
  return func;
};
