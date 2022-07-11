import { useEffect, useState } from 'react';
import { verticalCarouselSlides as slides } from './utils';
import styles from './VerticalCarousel.module.scss';
import { VerticalCarouselItem } from './VerticalCarouselItem';

interface Props {
  interval?: number;
  autoPlay?: boolean;
}

export const VerticalCarousel = ({ interval = 5000, autoPlay = false }: Props) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideInterval, setSlideInterval] = useState(0);

  const moveToPrevSlide = () => {
    startSlideTimer();

    const index = currentSlide > 0 ? currentSlide - 1 : slides.length - 1;
    setCurrentSlide(index);
  };

  const moveToNextSlide = () => {
    startSlideTimer();

    const index = currentSlide < slides.length - 1 ? currentSlide + 1 : 0;
    setCurrentSlide(index);
  };

  const startSlideTimer = () => {
    if (autoPlay) {
      stopSlideTimer();

      const intervalId = window.setInterval(() => {
        setCurrentSlide((currentSlide) => {
          return currentSlide < slides.length - 1 ? currentSlide + 1 : 0;
        });
      }, interval);
      setSlideInterval(intervalId);
    }
  };

  const stopSlideTimer = () => {
    if (autoPlay) {
      clearInterval(slideInterval);
    }
  };

  useEffect(() => {
    startSlideTimer();
    return () => stopSlideTimer();
  }, []);

  return (
    <div className={styles.verticalCarousel}>
      <button
        onClick={moveToNextSlide}
        className={`${styles.control} ${currentSlide == slides.length - 1 && styles.controlHidden}`}
      >
        <img
          className={styles.arrowUp}
          src="https://d13uy3bdhwkuhk.cloudfront.net/web/v0.241.0/static/media/activity_feed_scroll_arrow.4b8e052d.svg"
        />
      </button>
      <div className={styles.carousel}>
        <div
          className={styles.carouselInner}
          style={{ transform: `translate(0, ${(-currentSlide * 100) / slides.length}%)` }}
        >
          {slides.map((slide, index) => (
            <VerticalCarouselItem key={index} slide={slide} stopSlide={stopSlideTimer} startSlide={startSlideTimer} />
          ))}
        </div>
        <div className={styles.fog} />
      </div>
      <button onClick={moveToPrevSlide} className={`${styles.control} ${currentSlide == 0 && styles.controlHidden}`}>
        <img
          className={styles.arrowDown}
          src="https://d13uy3bdhwkuhk.cloudfront.net/web/v0.241.0/static/media/activity_feed_scroll_arrow.4b8e052d.svg"
        />
      </button>
    </div>
  );
};
