import { useState, useEffect } from 'react';
import scss from './Slider.module.css';

export const Slider = ({ images }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className={scss.sliderWrapper}>
      <img
        className={scss.sliderImg}
        src={images[index]}
        alt={`Slide ${index}`}
      />
      <strong className={scss.sliderText}>
        The latest fashion news trends!
      </strong>
    </div>
  );
};
