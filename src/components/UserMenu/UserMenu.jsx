import { useDispatch } from 'react-redux';
import { useAuth } from '../../hooks';
import { logOut } from '../../redux/auth/operations';
import logo from '../../assets/Avatar_1.png';
import { IoMdLogOut } from 'react-icons/io';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      <div className={css.wrapperImg}>
        <img className={css.logo} src={logo} alt="Logo" />
        <p className={css.username}>Welcome, {user.name} !</p>
      </div>

      <button
        className={css.button}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        <IoMdLogOut />
        Logout
      </button>
    </div>
  );
};
