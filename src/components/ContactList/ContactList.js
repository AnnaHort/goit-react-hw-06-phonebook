import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, findContact } from 'redux/actions';
import { ContactButton, ListContact, ListEl, StyledSearchInput } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);

  const dispatch = useDispatch();

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };


  const handleChange = e => {
    const inputValue = e.target.value;
    dispatch(findContact(inputValue));

    if (filter && filter !== '') {
      contacts.filter(contact =>
        contact.name.toLowerCase().includes(inputValue.toLowerCase())
      );
    }
  };

  return (
    <>
      <h2>Contacts</h2>
      <StyledSearchInput
        type="text"
        name="filter"
        placeholder="Search by name"
        onChange={handleChange}
      />
      <ListContact>
        {contacts
          .filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
          )
          .map(contact => (
            <ListEl key={contact.id}>
              <p>{contact.name}:</p>
              <p> {contact.phoneNumber}</p>
              <ContactButton onClick={() => handleDelete(contact.id)}>Delete</ContactButton>
            </ListEl>
          ))}
      </ListContact>
    </>
  );
};
