import { MouseEventHandler } from 'react';
import styles from './CarouselItem.module.scss';

interface Props {
  slide: string;
  stopSlide: MouseEventHandler<HTMLDivElement>;
  startSlide: MouseEventHandler<HTMLDivElement>;
  width: number;
  height: number;
  text?: string;
}

const CarouselItem = (props: Props) => {
  return (
    <div className={styles.carouselItem} onMouseEnter={props.stopSlide} onMouseOut={props.startSlide}>
      <div className={styles.carouselContentWrapper} style={{ width: props.width, height: props.height }}>
        <img
          className={`${styles.carouselImage} ${props.text == undefined ? styles.withoutText : undefined}`}
          src={props.slide}
        ></img>
        {props.text != undefined && <p className={styles.carouselText}>{props.text}</p>}
      </div>
    </div>
  );
};

export default CarouselItem;
