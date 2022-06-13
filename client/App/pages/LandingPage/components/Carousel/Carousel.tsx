import styles from './Carousel.module.scss';
import CarouselItem from './CarouselItem/CarouselItem';
import { useRef, useEffect, useState } from 'react';
import CarouselIndicators from './CarouselIndicators/CarouselIndicators';
import CarouselControls from './CarouselControls/CarouselControls';

interface carouselProps {
  slides: any[];
  interval?: number;
  controls?: boolean;
  indicators?: boolean;
  autoPlay?: boolean;
  children?: JSX.Element;
}

const Carousel = ({
  slides,
  interval = 5000,
  controls = false,
  indicators = false,
  autoPlay = false,
  children,
}: carouselProps) => {
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

  const switchIndex = (index: number) => {
    startSlideTimer();
    setCurrentSlide(index);
  };

  useEffect(() => {
    startSlideTimer();
    return () => stopSlideTimer();
  }, []);

  return (
    <>
      <div className={styles.carousel}>
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
        {controls && <CarouselControls prev={prev} next={next} />}
        {indicators && <CarouselIndicators slides={slides} currentIndex={currentSlide} switchIndex={switchIndex} />}
      </div>
    </>
  );
};

export default Carousel;
