import { DocumentTitle } from '../../components/DocumentTitle';
import { HomeTitle } from '../../components/HomeTitle/HomeTitle';
import { PhoneTitle } from '../../components/PhoneTitle/PhoneTitle';

export default function Home() {
  return (
    <div>
      <DocumentTitle>Home</DocumentTitle>
      <PhoneTitle />
      <HomeTitle />
    </div>
  );
}
