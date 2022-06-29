import styles from './MostPopularCategories.module.scss';
import { useState } from 'react';
import MostPopularCategoriesItem from './MostPopularCategoriesItem/MostPopularCategoriesItem';
import { arrow } from '../../../../assets';
import { useCurrentViewport } from '../../../../utils';

const MostPopularServicesCarousel = () => {
  const slides = [
    {
      image: 'https://d13uy3bdhwkuhk.cloudfront.net/l4_mobile/2047:1x:l.webp',
      title: 'Naprawa okien',
      numberOfInquiries: 2841,
    },
    {
      image: 'https://d13uy3bdhwkuhk.cloudfront.net/l4_mobile/102:1x:l.webp',
      title: 'Elewacja domu',
      numberOfInquiries: 4913,
    },
    {
      image: 'https://d13uy3bdhwkuhk.cloudfront.net/l4_mobile/44:1x:l.webp',
      title: 'Malowanie ścian',
      numberOfInquiries: 142,
    },
    {
      image: 'https://d13uy3bdhwkuhk.cloudfront.net/l4_mobile/2199:1x:l.webp',
      title: 'Przycinanie drzew',
      numberOfInquiries: 2841,
    },
    {
      image: 'https://d13uy3bdhwkuhk.cloudfront.net/l4_mobile/2089:1x:l.jpg',
      title: 'Instalacja schodów',
      numberOfInquiries: 4913,
    },
    {
      image: 'https://d13uy3bdhwkuhk.cloudfront.net/l4_mobile/2197:1x:l.webp',
      title: 'Koszenie trawnika',
      numberOfInquiries: 142,
    },
    {
      image: 'https://d13uy3bdhwkuhk.cloudfront.net/l4_mobile/2156:1x:l.webp',
      title: 'Instalacja ogrzewania',
      numberOfInquiries: 2841,
    },
    {
      image: 'https://d13uy3bdhwkuhk.cloudfront.net/l4_mobile/2162:1x:l.webp',
      title: 'Wywóz śmieci wielkogabarytowych',
      numberOfInquiries: 4913,
    },
    {
      image: 'https://d13uy3bdhwkuhk.cloudfront.net/l4_mobile/218:1x:l.webp',
      title: 'Remont mieszkania',
      numberOfInquiries: 142,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const width = useCurrentViewport();
  const isDesktop = width.x > 992;

  const moveToPrevSlide = () => {
    const index = currentSlide > 0 ? currentSlide - 1 : slides.length - 1;
    setCurrentSlide(index);
  };

  const moveToNextSlide = () => {
    const index = currentSlide < slides.length - 1 ? currentSlide + 1 : 0;
    setCurrentSlide(index);
  };

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.fog} ${styles.fogLeft}`}></div>
      <button
        onClick={moveToPrevSlide}
        className={`${styles.control} ${styles.controlLeft} 
         ${currentSlide == 0 && styles.controlHidden}`}
      >
        <img className={`${styles.arrow} ${styles.arrowLeft}`} src={arrow}></img>
      </button>
      <div className={styles.carousel}>
        <div
          className={styles.carouselInner}
          style={{ transform: `translate(${(-currentSlide * 100) / slides.length}%,0)` }}
        >
          {slides.map((slide, index) => (
            <MostPopularCategoriesItem key={index} slide={slide} />
          ))}
        </div>
        <div className={styles.fog}></div>
      </div>
      <button
        onClick={moveToNextSlide}
        className={`${styles.control} ${styles.controlRight} 
        ${currentSlide == slides.length - (isDesktop ? 2 : 1) && styles.controlHidden}`}
      >
        <img className={`${styles.arrow} ${styles.arrowRight}`} src={arrow}></img>
      </button>
      <div className={`${styles.fog} ${styles.fogRight}`}></div>
    </div>
  );
};

export default MostPopularServicesCarousel;
