import styles from './CarouselIndicators.module.scss';

interface carouselIndicatorsProps {
  slides: any;
  currentIndex: number;
  switchIndex: any;
}

const CarouselIndicators = (props: carouselIndicatorsProps) => {
  return (
    <div className={styles.carouselIndicators}>
      {props.slides.map((_: any, index: number) => {
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
