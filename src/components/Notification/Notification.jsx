import css from './Notification.module.css';

export const Notification = ({ message, error }) => {
  return (
    <div className={css.messageWrapper}>
      <p className={css.message}>{message}</p>
      <p className={css.message}>{error}</p>
    </div>
  );
};
