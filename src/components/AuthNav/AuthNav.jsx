import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import RippleButton from '../RippleButton/RippleButton';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <div className={css.wrapper}>
      <NavLink to="/register" className={css.link}>
        {({ isActive }) => (
          <RippleButton isActive={isActive} className={clsx(css.rippleButton)}>
            Register
          </RippleButton>
        )}
      </NavLink>
      <NavLink to="/login" className={css.link}>
        {({ isActive }) => (
          <RippleButton isActive={isActive} className={clsx(css.rippleButton)}>
            Login
          </RippleButton>
        )}
      </NavLink>
    </div>
  );
};
