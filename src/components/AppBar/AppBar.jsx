import { FcTabletAndroid } from 'react-icons/fc';
import { IconContext } from 'react-icons';
import { Navigation } from '../Navigation/Navigation';
import { AuthNav } from '../AuthNav/AuthNav';
import { UserMenu } from '../UserMenu/UserMenu';
import { useAuth } from '../../hooks';

import css from './AppBar.module.css';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <header className={css.container}>
      <Navigation />
      <div className={css.wrapper}>
        <IconContext.Provider value={{ size: '36px' }}>
          <FcTabletAndroid />
        </IconContext.Provider>
        <span className={css.span}> Your favorite phone book</span>
      </div>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
