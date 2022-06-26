import { useEffect, useRef, useState } from 'react';
import { flag, installation, smartphone } from '../../../../../assets/images';
import styles from './VerticalCarousel.module.scss';
import VerticalCarouselItem from './VerticalCarouselItem/VerticalCarouselItem';

interface carouselProps {
  interval?: number;
  autoPlay?: boolean;
}

const VerticalCarousel = ({ interval = 5000, autoPlay = false }: carouselProps) => {
  const slides = [
    {
      clientName: 'Michała',
      clientPicture: undefined,
      clientQuestion: 'Montaż kabiny prysznicowej',
      specialists: [
        { name: 'Zbigniew', avatar: undefined },
        { name: 'Krzysztof', avatar: installation },
      ],
      updateTime: '2 godziny temu',
      place: 'Wrocław',
    },
    {
      clientName: 'Rafała',
      clientPicture: undefined,
      clientQuestion: 'Montaż paneli podłogowych',
      specialists: [
        { name: 'Zbigniew', avatar: undefined },
        { name: 'Anna', avatar: smartphone },
        { name: 'Henryk', avatar: undefined },
      ],
      updateTime: 'Kilka sekund temu',
      place: 'Kraków',
    },
    {
      clientName: 'Agnieszki',
      clientPicture: flag,
      clientQuestion: 'Wybudowanie garażu',
      specialists: [
        { name: 'Zbigniew', avatar: undefined },
        { name: 'Alojzy', avatar: undefined },
      ],
      updateTime: '5 godzin temu',
      place: 'Warszawa',
    },
    {
      clientName: 'Stanisława',
      clientPicture: undefined,
      clientQuestion: 'Cyklinowanie',
      specialists: [
        { name: 'Aleksander', avatar: undefined },
        { name: 'Konstanty', avatar: undefined },
        { name: 'Piotr', avatar: undefined },
        { name: 'Alfred', avatar: undefined },
      ],
      updateTime: '4 godziny temu',
      place: 'Gdańsk',
    },
  ];

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
    <div className={styles.wrapper}>
      <button
        onClick={next}
        className={`${styles.control} ${currentSlide == slides.length - 1 && styles.controlHidden}`}
      >
        <img
          className={styles.arrowUp}
          src="https://d13uy3bdhwkuhk.cloudfront.net/web/v0.241.0/static/media/activity_feed_scroll_arrow.4b8e052d.svg"
        ></img>
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
        <div className={styles.fog}></div>
      </div>
      <button onClick={prev} className={`${styles.control} ${currentSlide == 0 && styles.controlHidden}`}>
        <img
          className={styles.arrowDown}
          src="https://d13uy3bdhwkuhk.cloudfront.net/web/v0.241.0/static/media/activity_feed_scroll_arrow.4b8e052d.svg"
        ></img>
      </button>
    </div>
  );
};

export default VerticalCarousel;
