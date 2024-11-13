import { Navigation } from '../Navigation/Navigation';
import { AuthNav } from '../AuthNav/AuthNav';
import { UserMenu } from '../UserMenu/UserMenu';
import { useAuth } from '../../hooks';
import newsImg from '../../assets/news.png';

import css from './AppBar.module.css';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <header className={css.container}>
      <Navigation />
      <div className={css.wrapper}>
        <img className={css.Img} src={newsImg} alt="Photo fashion news" />
      </div>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
