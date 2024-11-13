import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from '../../redux/contacts/selectors';

export const ContactList = () => {
  const filteredContactList = useSelector(selectVisibleContacts);

  return (
    <TransitionGroup>
      {filteredContactList.map(contact => (
        <CSSTransition key={contact.id} timeout={500} classNames="contact">
          <Contact contact={contact} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};
