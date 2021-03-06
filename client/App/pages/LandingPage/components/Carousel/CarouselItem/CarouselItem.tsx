import classNames from 'classnames';
import { MouseEventHandler } from 'react';
import { arrowRight } from '../../../../../assets';
import styles from './CarouselItem.module.scss';

interface Props {
  slide: string;
  stopSlide: MouseEventHandler<HTMLDivElement>;
  startSlide: MouseEventHandler<HTMLDivElement>;
  text: string;
}

const CarouselItem = ({ slide, stopSlide, startSlide, text }: Props) => (
  <div className={styles.carouselItem} onMouseOver={stopSlide} onMouseOut={startSlide}>
    <div className={styles.carouselContentWrapper}>
      <img className={classNames(styles.carouselImage, { [styles.withoutText]: text == '' })} src={slide} />
      {text !== '' && (
        <>
          <p className={styles.carouselText}>{text}</p>
          <img className={styles.arrow} src={arrowRight} />
        </>
      )}
    </div>
  </div>
);

export default CarouselItem;
