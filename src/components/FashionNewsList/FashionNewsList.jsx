import { TransitionGroup, CSSTransition } from 'react-transition-group';
import FashionNews from '../FashionNews/FashionNews';
import { useSelector } from 'react-redux';
import { selectVisibleNews } from '../../redux/contacts/selectors';

export const FashionNewsList = () => {
  const filteredNewsList = useSelector(selectVisibleNews);

  return (
    <TransitionGroup>
      {filteredNewsList.map(contact => (
        <CSSTransition key={contact._id} timeout={500} classNames="contact">
          <FashionNews contact={contact} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};
