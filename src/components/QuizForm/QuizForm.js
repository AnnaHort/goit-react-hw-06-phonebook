import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/actions';

export const QuizForm = () => {
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const handleFormSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const newName = form.elements.name.value;
    const newPhoneNumber = form.elements.contacts.value;

    const newContact = {
      name: newName,
      phoneNumber: newPhoneNumber,
      id: nanoid(),
    };

    if (newContact.name !== '' && newContact.phoneNumber !== '') {
      console.log(newContact);
      if (!contacts.includes(newContact)) {
        dispatch(addContact(newContact));
        form.reset();
        console.log(contacts);
      }
    } else {
      alert('Please enter both Name and Number');
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <ul>
        <li>
          <p>Name:</p>
          <input name="name" placeholder="add new name" />
        </li>
        <li>
          <p>Number:</p>
          <input name="contacts" placeholder="add new number" />
        </li>
        <li>
          <button>Add contact</button>
        </li>
      </ul>
    </form>
  );
};
