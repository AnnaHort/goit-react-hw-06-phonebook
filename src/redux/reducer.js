const initialState = {
  contacts: [],
  filter: '',
};

export const addContactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'contacts/addContact':
      return {
        ...state, 
        contacts: [...state.contacts, action.payload]
      }
    default:
      return state;
  }
};


