import css from './Section.module.css';

export const Section = ({ title, children }) => {
  return (
    <h2 className={css.section}>
      <section className={css.text}>{title}</section>
      {children}
    </h2>
  );
};
