import { MouseEventHandler } from 'react';
import { arrowRight } from '../../../../../assets';
import styles from './CarouselItem.module.scss';

interface Props {
  slide: string;
  stopSlide: MouseEventHandler<HTMLDivElement>;
  startSlide: MouseEventHandler<HTMLDivElement>;
  text?: string;
}

const CarouselItem = (props: Props) => {
  return (
    <div className={styles.carouselItem} onMouseEnter={props.stopSlide} onMouseOut={props.startSlide}>
      <div className={styles.carouselContentWrapper}>
        <img
          className={`${styles.carouselImage} ${props.text == undefined ? styles.withoutText : undefined}`}
          src={props.slide}
        ></img>
        {props.text != undefined && (
          <>
            <p className={styles.carouselText}>{props.text}</p>
            <img onClick={() => console.log('clicked')} className={styles.arrow} src={arrowRight}></img>
          </>
        )}
      </div>
    </div>
  );
};

export default CarouselItem;
