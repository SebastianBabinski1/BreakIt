import styles from './MobileNavigation.module.scss';
import MobileNavigationLink from './MobileNavigationLink/MobileNavigationLink';
import { googlePlay, hand } from '../../../../../assets';

const MobileNavigation = () => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.linksWrapper}>
        <MobileNavigationLink src={hand} text="Usługi" />
        <MobileNavigationLink src={hand} text="BreakIt dla wykonawców" />
        <MobileNavigationLink src={hand} text="Moja zapytania" />
        <MobileNavigationLink src={hand} text="Zaloguj się" />
      </ul>
      <div className={styles.button}>
        <img className={styles.buttonImage} src={googlePlay}></img>
        <p className={styles.buttonText}>POBIERZ APLIKACJĘ BREAKIT</p>
      </div>
    </div>
  );
};

export default MobileNavigation;
