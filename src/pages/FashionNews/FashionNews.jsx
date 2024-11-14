import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FashionNewsList } from '../../components/FashionNewsList/FashionNewsList.jsx';
import { Section } from '../../components/Section/Section.jsx';
import { SearchBar } from '../../components/SearchBar/SearchBar.jsx';
import { FashionNewsForm } from '../../components/FashionNewsForm/FashionNewsForm.jsx';

import { FashionNewsCounter } from '../../components/FashionNewsCounter/FashionNewsCounter.jsx';
import { Notification } from '../../components/Notification/Notification.jsx';
import { fetchFashionNews } from '../../redux/contacts/operations.js';
import { Spinner } from '../../components/Spinner/Spinner.jsx';
import {
  selectAllContacts,
  selectIsLoading,
  selectError,
} from '../../redux/contacts/selectors.js';
import { DocumentTitle } from '../../components/DocumentTitle.jsx';

export default function FashionNews() {
  const dispatch = useDispatch();
  const contactsAll = useSelector(selectAllContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchFashionNews());
  }, [dispatch]);

  return (
    <>
      <DocumentTitle>Fashion news</DocumentTitle>

      <Section title="Add new fashion news">
        <FashionNewsForm />
      </Section>

      {contactsAll.length > 0 && (
        <Section title="Find fashion by text">
          <SearchBar />
        </Section>
      )}

      <Section title="Fashion News List">
        {contactsAll.length > 0 ? (
          <>
            <FashionNewsCounter />
            <FashionNewsList />
          </>
        ) : (
          <>
            {!error && (
              <>
                <Notification message="There is no added fashion news"></Notification>
              </>
            )}

            {error && <Notification error={error} />}
          </>
        )}
      </Section>

      {isLoading && !error && <Spinner />}
    </>
  );
}
