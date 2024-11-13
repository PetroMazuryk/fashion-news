import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ContactList } from '../../components/ContactList/ContactList.jsx';
import { Section } from '../../components/Section/Section.jsx';
import { SearchBar } from '../../components/SearchBar/SearchBar.jsx';
import { ContactForm } from '../../components/ContactForm/ContactForm.jsx';
import { PhoneTitle } from '../../components/PhoneTitle/PhoneTitle.jsx';
import { ContactCounter } from '../../components/ContactCounter/ContactCounter.jsx';
import { Notification } from '../../components/Notification/Notification.jsx';
import { fetchContacts } from '../../redux/contacts/operations.js';
import { Spinner } from '../../components/Spinner/Spinner.jsx';
import {
  selectAllContacts,
  selectIsLoading,
  selectError,
} from '../../redux/contacts/selectors.js';
import { DocumentTitle } from '../../components/DocumentTitle.jsx';

export default function Contacts() {
  const dispatch = useDispatch();
  const contactsAll = useSelector(selectAllContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <DocumentTitle>Contacts</DocumentTitle>
      <PhoneTitle />

      <Section title="Add new contacts">
        <ContactForm />
      </Section>

      {contactsAll.length > 0 && (
        <Section title="Find contacts by name">
          <SearchBar />
        </Section>
      )}

      <Section title="Contact List">
        {contactsAll.length > 0 ? (
          <>
            <ContactCounter />
            <ContactList />
          </>
        ) : (
          <>
            {!error && (
              <>
                <Notification message="There is no added contacts"></Notification>
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
