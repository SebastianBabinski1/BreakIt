import styles from './CarouselIndicators.module.scss';

interface carouselIndicatorsProps {
  slides: { image: string; text: string | undefined }[];
  currentIndex: number;
  switchIndex: (index: number) => void;
}

const CarouselIndicators = (props: carouselIndicatorsProps) => {
  return (
    <div className={styles.carouselIndicators}>
      {props.slides.map((slide, index: number) => {
        return (
          <button
            key={index}
            className={`${styles.carouselIndicator} ${props.currentIndex === index ? styles.active : ''}`}
            onClick={() => {
              props.switchIndex(index);
            }}
          ></button>
        );
      })}
    </div>
  );
};

export default CarouselIndicators;
