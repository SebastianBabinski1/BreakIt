import styles from './MostPopularCategories.module.scss';
import { useState } from 'react';
import { MostPopularCategoriesItem } from './MostPopularCategoriesItem';
import { arrow } from '../../../../assets';
import { useCurrentViewport } from '../../../../utils';
import { slides } from './utils';

export const MostPopularServicesCarousel = () => {
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
    <>
      <p className={styles.title}>Najpopularniejsze usługi BreakIt</p>
      <div className={styles.mostPopularServicesCarousel}>
        <div className={`${styles.fog} ${styles.fogLeft}`} />
        <button
          onClick={moveToPrevSlide}
          className={`${styles.control} ${styles.controlLeft} 
         ${currentSlide == 0 && styles.controlHidden}`}
        >
          <img className={`${styles.arrow} ${styles.arrowLeft}`} src={arrow} />
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
          <div className={styles.fog} />
        </div>
        <button
          onClick={moveToNextSlide}
          className={`${styles.control} ${styles.controlRight} 
        ${currentSlide == slides.length - (isDesktop ? 2 : 1) && styles.controlHidden}`}
        >
          <img className={`${styles.arrow} ${styles.arrowRight}`} src={arrow} />
        </button>
        <div className={`${styles.fog} ${styles.fogRight}`} />
      </div>
    </>
  );
};
