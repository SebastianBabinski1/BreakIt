import { search, star } from '../../../../assets';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <h1>Sprawdzeni wykonawcy Breakit - do usług!</h1>
      <div className={styles.introduction}>
        <pre>Mamy </pre>
        <b>234 573</b>
        <pre> wykonawców, ocenianych średnio na </pre>
        <img className={styles.image} src={star} />
        <pre> 4,7. </pre>
        <b>11 288</b>
        <pre> z nich jest teraz online</pre>
      </div>
      <div className={styles.search}>
        <input placeholder="Wyszukaj usługę, której potrzebujesz..." className={styles.searchInput} />

        <button className={styles.magnifierButton}>
          <img className={styles.magnifier} src={search} />
        </button>
      </div>
    </div>
  );
};

export default Header;
