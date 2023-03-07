import { getAllContacts, removeContact } from 'components/services/contacts';
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
} from './contacts/actions';
import { addContact } from './contacts/slice';

export const fetchContacts = () => {
  const func = async dispatch => {
    try {
      dispatch(fetchContactsLoading()); // request
      const data = await getAllContacts();
      dispatch(fetchContactsSuccess(data)); // success response
    } catch ({ response }) {
      dispatch(fetchContactsError(response.data.message)); // response with error
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

export const addNewContact = data => {
  const func = async (dispatch, getState) => {
    try {
      const { contacts } = getState();
      if (isDuplicate(contacts.items, data)) {
        alert(`${data.name} is already in contacts.`);
        return false;
      }
      dispatch(addContactLoading());
      const result = await addContact();
      dispatch(addContactSuccess(result));
    } catch ({ response }) {
      dispatch(addContactError(response.data.message));
    }
  };
  return func;
};

export const deleteContact = id => {
  const func = async dispatch => {
    try {
      dispatch(deleteContactLoading());
      await removeContact(id);
      dispatch(deleteContactSuccess(id));
    } catch ({ response }) {
      dispatch(deleteContactError(response.data.message));
    }
  };
  return func;
};
