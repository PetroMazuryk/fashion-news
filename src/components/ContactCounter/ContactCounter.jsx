import { useSelector } from 'react-redux';
import { selectAllContacts } from '../../redux/contacts/selectors';
import css from './ContactCounter.module.css';

export const ContactCounter = () => {
  const contacts = useSelector(selectAllContacts);
  const countContacts = contacts.length;

  return (
    <div className={css.wrapper}>
      <p className={css.text}>Total contacts:</p>
      <span className={css.total}> {countContacts}</span>
    </div>
  );
};
