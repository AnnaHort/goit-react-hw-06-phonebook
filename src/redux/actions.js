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

export const findContact = contactName => {
  return {
    type: 'contacts/findContact',
    payload: contactName,
  }
}
