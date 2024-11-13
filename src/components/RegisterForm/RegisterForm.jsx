import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { BsEyeSlash, BsEye } from 'react-icons/bs';
import { register } from '../../redux/auth/operations';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [passwordShown, setPasswordShown] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <h2 className={css.text}>Registration</h2>
      <div className={css.wrapper}>
        <label className={css.label}>
          Enter your name:
          <input
            className={css.input}
            type="text"
            name="name"
            placeholder="Name"
          />
        </label>
        <label className={css.label}>
          Enter your email:
          <input
            className={css.input}
            type="email"
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            required
            placeholder="Email"
          />
        </label>
      </div>
      <div className={css.wrapperPassword}>
        <label className={css.label}>
          Enter your password:
          <input
            className={css.input}
            type={passwordShown ? 'text' : 'password'}
            name="password"
            required
            placeholder="Password"
          />
          <div className={css.divPassword} onClick={togglePassword}>
            {passwordShown ? <BsEye /> : <BsEyeSlash />}
          </div>
        </label>
      </div>

      <button className={css.button} type="submit">
        Register
      </button>
    </form>
  );
};
