import { useRef ,createRef} from 'react';
import { useSelector } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import FashionNews from '../FashionNews/FashionNews';
import { selectVisibleNews } from '../../redux/contacts/selectors';


export const FashionNewsList = () => {
  const filteredNewsList = useSelector(selectVisibleNews);
  const nodeRefs = useRef({});

  return (
    <TransitionGroup>
      {filteredNewsList.map(contact => {
         if (!nodeRefs.current[contact._id]) {
          nodeRefs.current[contact._id] = createRef();
        }
       
       return (
          <CSSTransition
            key={contact._id}
            timeout={500}
            classNames="contact"
            nodeRef={nodeRefs.current[contact._id]}
          >
             <div ref={nodeRefs.current[contact._id]}>
              <FashionNews contact={contact} />
            </div>
          </CSSTransition>
        );
      })}
    </TransitionGroup>
 
  );
};
