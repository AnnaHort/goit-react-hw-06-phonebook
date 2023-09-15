import { ContactList } from './ContactList/ContactList';
import { GlobalStyle } from './GlobalStyle';
import { QuizForm } from './QuizForm/QuizForm';

export const App = () => {
  return (
    <>
      <QuizForm />
      <ContactList />
      <GlobalStyle/>
    </>
  );
};
