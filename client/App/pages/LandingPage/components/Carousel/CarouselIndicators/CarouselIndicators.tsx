import styles from './CarouselIndicators.module.scss';

interface carouselIndicatorsProps {
  slides: { image: string; text: string }[];
  currentIndex: number;
  switchIndex: (index: number) => void;
}

export const CarouselIndicators = ({ slides, currentIndex, switchIndex }: carouselIndicatorsProps) => (
  <div className={styles.carouselIndicators}>
    {slides.map((_, index: number) => (
      <button
        key={index}
        className={`${styles.carouselIndicator} ${currentIndex === index && styles.active}`}
        onClick={() => {
          switchIndex(index);
        }}
      />
    ))}
  </div>
);
