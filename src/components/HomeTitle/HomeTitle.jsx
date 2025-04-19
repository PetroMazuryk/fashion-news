import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks';

import css from './HomeTitle.module.css';

export const HomeTitle = () => {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn) return null;

  return (
    <div className={css.container}>
      <p className={css.text}>
        Please{' '}
        <NavLink to="/login" className={css.span}>
          Login
        </NavLink>{' '}
        or{' '}
        <NavLink to="/register" className={css.span}>
          Register
        </NavLink>{' '}
        to view and save your fashion news!
      </p>
    </div>
  );
};
