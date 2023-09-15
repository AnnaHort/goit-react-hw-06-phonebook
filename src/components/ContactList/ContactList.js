import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, findContact } from 'redux/actions';

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
      <input
        type="text"
        name="filter"
        placeholder="Search by name"
        onChange={handleChange}
      />
      <ul>
        {contacts
          .filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
          )
          .map(contact => (
            <li key={contact.id}>
              <p>{contact.name}</p>
              <p>Number: {contact.phoneNumber}</p>
              <button onClick={() => handleDelete(contact.id)}>Delete</button>
            </li>
          ))}
      </ul>
    </>
  );
};
