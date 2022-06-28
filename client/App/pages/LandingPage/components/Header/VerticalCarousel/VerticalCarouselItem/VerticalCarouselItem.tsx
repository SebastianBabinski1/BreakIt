import { MouseEventHandler } from 'react';
import styles from './VerticalCarouselItem.module.scss';

interface Props {
  slide: {
    clientName: string;
    clientPicture: string | undefined;
    clientQuestion: string;
    specialists: { name: string; avatar: string | undefined }[];
    updateTime: string;
    place: string;
  };
  stopSlide: MouseEventHandler<HTMLDivElement>;
  startSlide: MouseEventHandler<HTMLDivElement>;
}

const CarouselItem = ({ slide, stopSlide, startSlide }: Props) => {
  return (
    <div className={styles.carouselItem} onMouseEnter={stopSlide} onMouseOut={startSlide}>
      <div>
        <div className={styles.avatar}>
          {slide.clientPicture === undefined ? (
            <p>M</p>
          ) : (
            <img className={styles.avatarImage} src={slide.clientPicture}></img>
          )}
        </div>
      </div>
      <div>
        <p className={styles.text}>
          Do
          <b>
            <pre> {slide.clientName} </pre>
          </b>
          napisało {slide.specialists.length} wykonawców w sprawie zapytania
          <pre>
            {' '}
            <a className={styles.textHighlighted}>{slide.clientQuestion}</a>
          </pre>
        </p>
        <div className={styles.avatarsWrapper}>
          {slide.specialists.map((item, index) => (
            <div key={index} className={`${styles.avatar} ${styles.avatarSmall}`}>
              {item.avatar === undefined ? (
                <p>{item.name[0]}</p>
              ) : (
                <img className={styles.avatarImage} src={item.avatar}></img>
              )}
            </div>
          ))}
        </div>
        <p className={styles.timeOfAcceptance}>
          {slide.updateTime}, {slide.place}
        </p>
      </div>
    </div>
  );
};

export default CarouselItem;
