import { useEffect, useRef, useState } from 'react';
import { arrow } from '../../../../../assets';
import styles from './VerticalCarousel.module.scss';
import VerticalCarouselItem from './VerticalCarouselItem/VerticalCarouselItem';

interface carouselProps {
  slides: any[];
  interval?: number;
  autoPlay?: boolean;
}

const VerticalCarousel = ({ slides, interval = 5000, autoPlay = false }: carouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef<number>();

  const prev = () => {
    startSlideTimer();

    const index = currentSlide > 0 ? currentSlide - 1 : slides.length - 1;
    setCurrentSlide(index);
  };

  const next = () => {
    startSlideTimer();

    const index = currentSlide < slides.length - 1 ? currentSlide + 1 : 0;
    setCurrentSlide(index);
  };

  const startSlideTimer = () => {
    if (autoPlay) {
      stopSlideTimer();
      slideInterval.current = window.setInterval(() => {
        setCurrentSlide((currentSlide) => {
          return currentSlide < slides.length - 1 ? currentSlide + 1 : 0;
        });
      }, interval);
    }
  };

  const stopSlideTimer = () => {
    if (autoPlay && slideInterval.current != null) {
      clearInterval(slideInterval.current);
    }
  };

  useEffect(() => {
    startSlideTimer();
    return () => stopSlideTimer();
  }, []);

  return (
    <>
      <div className={styles.carousel}>
        <button onClick={next} className={`${styles.carouselControl} ${styles.up}`}>
          <img className={styles.arrowUp} src={arrow}></img>
        </button>

        <div className={styles.carouselInner} style={{ transform: `translate(0, ${-currentSlide * 25}%)` }}>
          {slides.map((slide, index) => (
            <VerticalCarouselItem
              key={index}
              slide={slide.image}
              stopSlide={stopSlideTimer}
              startSlide={startSlideTimer}
              text={slide.text}
            />
          ))}
        </div>

        <button onClick={prev} className={`${styles.carouselControl} ${styles.down}`}>
          <img className={styles.arrowDown} src={arrow}></img>
        </button>
      </div>
    </>
  );
};

export default VerticalCarousel;
