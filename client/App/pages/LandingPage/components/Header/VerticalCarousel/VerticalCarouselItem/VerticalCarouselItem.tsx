import { MouseEventHandler } from 'react';
import styles from './VerticalCarouselItem.module.scss';

interface verticalCarouselItemProps {
  slide: {
    clientName: string;
    clientPicture: string;
    clientQuestion: string;
    specialists: { name: string; avatar: string }[];
    updateTime: string;
    place: string;
  };
  stopSlide: MouseEventHandler<HTMLDivElement>;
  startSlide: MouseEventHandler<HTMLDivElement>;
}

export const VerticalCarouselItem = ({ slide, stopSlide, startSlide }: verticalCarouselItemProps) => {
  return (
    <div className={styles.carouselItem} onMouseEnter={stopSlide} onMouseOut={startSlide}>
      <div>
        <div className={styles.avatar}>
          {slide.clientPicture === '' ? <p>M</p> : <img className={styles.avatarImage} src={slide.clientPicture} />}
        </div>
      </div>
      <div>
        <p>
          Do <strong>{` ${slide.clientName} `}</strong> napisało {slide.specialists.length} wykonawców w sprawie
          zapytania
          <br />
          <a className={styles.textHighlighted}>{slide.clientQuestion}</a>
        </p>
        <div className={styles.avatarsWrapper}>
          {slide.specialists.map((item, index) => (
            <div key={index} className={`${styles.avatar} ${styles.avatarSmall}`}>
              {item.avatar === '' ? <p>{item.name[0]}</p> : <img className={styles.avatarImage} src={item.avatar} />}
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
