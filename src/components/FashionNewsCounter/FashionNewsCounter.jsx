import { useSelector } from 'react-redux';
import { selectAllContacts } from '../../redux/contacts/selectors';
import css from './FashionNewsCounter.module.css';

export const FashionNewsCounter = () => {
  const contacts = useSelector(selectAllContacts);
  const countContacts = contacts.length;

  return (
    <div className={css.wrapper}>
      <p className={css.text}>Total fashion news:</p>
      <span className={css.total}> {countContacts}</span>
    </div>
  );
};
