import { useRef } from 'react';
import { BackLink } from '../../components/BackLink/BackLink';
import { Notification } from '../../components/Notification/Notification';

export default function NotFoundPage() {
  const goBackHref = useRef(location.state?.from || '/');

  return (
    <div>
      <Notification message="Woops! Sorry, but this page does not exist. Go to the main page!"></Notification>

      <BackLink href={goBackHref.current}>Go back</BackLink>
    </div>
  );
}
