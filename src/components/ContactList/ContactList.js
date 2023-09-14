import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/actions';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);

  const dispatch = useDispatch();

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          <p>{contact.name}</p>
          <p>Number:{contact.phoneNumber}</p>
          <button onClick={() => handleDelete(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
