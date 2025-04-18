import { useSelector } from 'react-redux';
import { selectAllNews } from '../../redux/contacts/selectors';
import css from './FashionNewsCounter.module.css';

export const FashionNewsCounter = () => {
  const news = useSelector(selectAllNews);
  const countNews = news.length;

  return (
    <div className={css.wrapper}>
      <p className={css.text}>Total fashion news:</p>
      <span className={css.total}> {countNews}</span>
    </div>
  );
};
