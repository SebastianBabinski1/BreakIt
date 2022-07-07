import { search, star } from '../../../../../assets';
import styles from './ServiceSearch.module.scss';

export const ServiceSearch = () => {
  return (
    <div className={styles.service}>
      <p className={styles.title}>Sprawdzeni wykonawcy Breakit - do usług!</p>
      <p className={styles.introduction}>
        Mamy <b>234 573</b> wykonawców, ocenianych średnio na
        <img className={styles.image} src={star} />
        4,7. <b>11 288</b> z nich jest teraz online
      </p>
      <div className={styles.search}>
        <input placeholder="Wyszukaj usługę, której potrzebujesz..." className={styles.searchInput} />

        <button className={styles.magnifierButton}>
          <img className={styles.magnifier} src={search} />
        </button>
      </div>
    </div>
  );
};
