import styles from './CarouselIndicators.module.scss';

interface Props {
  slides: { image: string; text: string }[];
  currentIndex: number;
  switchIndex: (index: number) => void;
}

export const CarouselIndicators = ({ slides, currentIndex, switchIndex }: Props) => (
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
