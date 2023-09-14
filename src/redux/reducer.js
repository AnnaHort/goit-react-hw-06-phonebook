const initialState = {
  contacts: [],
  filter: '',
};

export const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'contacts/addContact':
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };

    case 'contacts/deleteContacts':
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== action.payload),
      };

    default:
      return state;
  }
};
