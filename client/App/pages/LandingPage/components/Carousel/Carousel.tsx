import styles from './Carousel.module.scss';
import CarouselItem from './CarouselItem/CarouselItem';
import { useEffect, useState } from 'react';
import { CarouselIndicators } from './CarouselIndicators';
import { CarouselControls } from './CarouselControls';
import classnames from 'classnames';
import { carouselSlides as slides } from './utils';

interface Props {
  interval?: number;
  controls?: boolean;
  indicators?: boolean;
  autoPlay?: boolean;
  children?: JSX.Element;
}

export const Carousel = ({
  interval = 5000,
  controls = false,
  indicators = false,
  autoPlay = false,
  children,
}: Props) => {
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

  const switchIndex = (index: number) => {
    startSlideTimer();
    setCurrentSlide(index);
  };

  useEffect(() => {
    startSlideTimer();
    return () => stopSlideTimer();
  }, []);

  return (
    <div className={classnames(styles.carousel, styles.pageContent)}>
      <div className={styles.carouselInner} style={{ transform: `translate(${-currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <CarouselItem
            key={index}
            slide={slide.image}
            stopSlide={stopSlideTimer}
            startSlide={startSlideTimer}
            text={slide.text}
          />
        ))}
        {children}
      </div>
      {controls && <CarouselControls prev={moveToPrevSlide} next={moveToNextSlide} />}
      {indicators && <CarouselIndicators slides={slides} currentIndex={currentSlide} switchIndex={switchIndex} />}
    </div>
  );
};
