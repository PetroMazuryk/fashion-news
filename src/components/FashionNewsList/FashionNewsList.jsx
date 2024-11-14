import { TransitionGroup, CSSTransition } from 'react-transition-group';
import FashionNews from '../FashionNews/FashionNews';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from '../../redux/contacts/selectors';

export const FashionNewsList = () => {
  const filteredContactList = useSelector(selectVisibleContacts);

  return (
    <TransitionGroup>
      {filteredContactList.map(contact => (
        <CSSTransition key={contact.id} timeout={500} classNames="contact">
          <FashionNews contact={contact} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};
