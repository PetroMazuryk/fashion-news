import { Link } from 'react-router-dom';
import { ImArrowLeft } from 'react-icons/im';
import css from './BackLink.module.css';

export const BackLink = ({ href, children }) => {
  return (
    <>
      <Link className={css.link} to={href}>
        <span className={css.textArrow}>
          <ImArrowLeft />
        </span>
        {children}
      </Link>
    </>
  );
};
