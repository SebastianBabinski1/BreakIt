import styles from './MobileAppAd.module.scss';
import { apple, googlePlay } from '../../../../assets';
import { mobileAppAd } from '../../../../assets/images';

export const MobileAppAd = () => {
  return (
    <div className={styles.mobileAppAd}>
      <div className={styles.left}>
        <p>Potrzebujesz pomocy wykonawcy?</p>
        <p className={styles.boldedText}>Pobierz aplikację mobilną BreakIt!</p>
        <div>
          <div className={styles.buttonsWrapper}>
            <button className={styles.button}>
              <img src={googlePlay} alt="googlePlay" className={styles.logo} />
              <p>Pobierz z Google Play</p>
            </button>
            <button className={styles.button}>
              <img src={apple} alt="googlePlay" className={styles.logo} />
              <p>Pobierz z Google Play</p>
            </button>
          </div>
        </div>
      </div>
      <div>
        <img src={mobileAppAd} alt="Ad" />
      </div>
    </div>
  );
};
