export const addContact = contactData => {
  return {
    type: 'contacts/addContact',
    payload: contactData,
  };
};

export const deleteContact = contactId => {
  return {
    type: 'contacts/deleteContacts',
    payload: contactId,
  };
};
