import axios from 'axios';

const contactsInstance = axios.create({
  baseURL: 'https://6406139440597b65de49aae2.mockapi.io/contacts',
});

export const getAllContacts = async () => {
  const { data } = await contactsInstance.get('/');
  return data;
};

export const addContact = async data => {
  const { data: result } = await contactsInstance.post('/', data);
  return result;
};

export const removeContact = async id => {
  const { data } = await contactsInstance.delete(`/${id}`);
  return data;
};
