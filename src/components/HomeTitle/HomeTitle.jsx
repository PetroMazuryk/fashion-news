import { NavLink } from 'react-router-dom';
import css from './HomeTitle.module.css';
export const HomeTitle = () => {
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
        to view and save your own contacts!
      </p>
    </div>
  );
};
