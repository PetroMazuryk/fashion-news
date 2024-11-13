import clsx from 'clsx';
import css from './Button.module.css';

export const Button = ({ variant, children, ...props }) => {
  return (
    <button className={clsx(css.myBtn, css[variant])} {...props}>
      {children}
    </button>
  );
};
