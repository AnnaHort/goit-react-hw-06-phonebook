import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/actions';

export const QuizForm = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();

  const handleFormSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const newName = form.elements.name.value;
    const newPhoneNumber = form.elements.contacts.value;

    const contactData = {
      name: newName,
      phoneNumber: newPhoneNumber,
      id: nanoid(),
    };

    if (contactData.name !== '' && contactData.phoneNumber !== '') {
      if (!contacts.includes(contactData)) {
        dispatch(addContact(contactData));
        form.reset();
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
          <input
            name="name"
            placeholder="add new name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          />
        </li>
        <li>
          <p>Number:</p>
          <input
            name="contacts"
            placeholder="add new number"
            pattern="\+?[0-9\s\-\(\)]+"
          />
        </li>
        <li>
          <button>Add contact</button>
        </li>
      </ul>
    </form>
  );
};
