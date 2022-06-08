import styles from './CarouselControls.module.scss';

interface carouselControlsProps {
  prev: any;
  next: any;
}

const CarouselControls = (props: carouselControlsProps) => {
  return (
    <div>
      <button onClick={props.prev} className={`${styles.carouselControl} ${styles.left}`}>
        Prev
      </button>
      <button onClick={props.next} className={`${styles.carouselControl} ${styles.right}`}>
        Next
      </button>
    </div>
  );
};

export default CarouselControls;
