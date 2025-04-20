import { useSelector } from 'react-redux';
import { selectAllNews } from '../../redux/contacts/selectors';
import { Section } from '../../components/Section/Section';
import FashionNews from '../../components/FashionNews/FashionNews';
import { DocumentTitle } from '../../components/DocumentTitle';

const FavoriteNewsPage = () => {
  const news = useSelector(selectAllNews);
  const favoriteNews = news.filter(item => item.favorite);

  return (
    <>
      <DocumentTitle>Favorite fashion news</DocumentTitle>
      <Section title="List of favorite fashion news">
        {favoriteNews.map(item => (
          <FashionNews key={item._id} contact={item} />
        ))}
      </Section>
    </>
  );
};

export default FavoriteNewsPage;
