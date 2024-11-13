import { DocumentTitle } from '../../components/DocumentTitle';
import { HomeTitle } from '../../components/HomeTitle/HomeTitle';
import { Slider } from '../../components/Slider/Slider';

import ImgA from '../../assets/slider/img-1.jpg';
import ImgB from '../../assets/slider/img-2.jpg';
import ImgC from '../../assets/slider/img-3.jpg';
import ImgD from '../../assets/slider/img-4.jpg';
import ImgE from '../../assets/slider/img-5.jpg';

export default function Home() {
  const images = [ImgA, ImgB, ImgC, ImgD, ImgE];

  return (
    <div>
      <DocumentTitle>Home</DocumentTitle>
      <HomeTitle />
      <Slider images={images} />
    </div>
  );
}
