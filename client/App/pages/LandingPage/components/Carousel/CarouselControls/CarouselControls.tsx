import styles from './CarouselControls.module.scss';

interface carouselControlsProps {
  prev: () => void;
  next: () => void;
}

export const CarouselControls = ({ prev, next }: carouselControlsProps) => {
  return (
    <div>
      <button onClick={prev} className={`${styles.carouselControl} ${styles.left}`}>
        Prev
      </button>
      <button onClick={next} className={`${styles.carouselControl} ${styles.right}`}>
        Next
      </button>
    </div>
  );
};
