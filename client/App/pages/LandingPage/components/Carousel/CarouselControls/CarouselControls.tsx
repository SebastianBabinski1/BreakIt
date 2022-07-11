import styles from './CarouselControls.module.scss';

interface Props {
  prev: () => void;
  next: () => void;
}

export const CarouselControls = ({ prev, next }: Props) => {
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
