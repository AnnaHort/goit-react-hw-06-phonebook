import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { deleteContact } from 'redux/actions';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contacts.id));
  return (
    <ul>
      {contacts.map(contact => (
        <li key={nanoid()}>
          {contact}
          <button onClick={handleDelete}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
