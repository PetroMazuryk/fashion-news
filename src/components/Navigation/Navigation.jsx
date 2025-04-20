import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks';
import clsx from 'clsx';
import css from './Navigation.module.css';
import RippleButton from '../RippleButton/RippleButton';
export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className={css.nav}>
      <NavLink to="/" className={css.link}>
        {({ isActive }) => (
          <RippleButton isActive={isActive} className={clsx(css.rippleButton)}>
            Home
          </RippleButton>
        )}
      </NavLink>

      {isLoggedIn && (
        <NavLink to="/fashion-news" className={css.link}>
          {({ isActive }) => (
            <RippleButton
              isActive={isActive}
              className={clsx(css.rippleButton)}
            >
              Fashion News
            </RippleButton>
          )}
        </NavLink>
      )}
      {isLoggedIn && (
        <NavLink to="/favorite-news" className={css.link}>
          {({ isActive }) => (
            <RippleButton
              isActive={isActive}
              className={clsx(css.rippleButton)}
            >
              Favorite
            </RippleButton>
          )}
        </NavLink>
      )}
    </nav>
  );
};
