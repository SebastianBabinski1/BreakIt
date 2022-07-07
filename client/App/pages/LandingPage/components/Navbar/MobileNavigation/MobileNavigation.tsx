import styles from './MobileNavigation.module.scss';
import { MobileNavigationLink } from './MobileNavigationLink';
import { googlePlay, hand } from '../../../../../assets';
import { mobileNavLinksText } from './utils';

export const MobileNavigation = () => {
  return (
    <div className={styles.mobileNavigation}>
      <ul className={styles.linksWrapper}>
        {mobileNavLinksText.map((link, index) => (
          <MobileNavigationLink key={index} src={hand} text={link} />
        ))}
      </ul>
      <div className={styles.button}>
        <img className={styles.buttonImage} src={googlePlay} />
        <p className={styles.buttonText}>POBIERZ APLIKACJĘ BREAKIT</p>
      </div>
    </div>
  );
};
