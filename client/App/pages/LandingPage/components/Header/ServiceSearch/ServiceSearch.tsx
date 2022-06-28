import { search, star } from '../../../../../assets';
import styles from './ServiceSearch.module.scss';

const ServiceSearch = () => {
  return (
    <div className={styles.service}>
      <p className={styles.title}>Sprawdzeni wykonawcy Breakit - do usług!</p>
      <div className={styles.introduction}>
        <pre>Mamy </pre>
        <b>234 573</b>
        <pre> wykonawców, ocenianych średnio na </pre>
        <img className={styles.image} src={star}></img>
        <pre> 4,7. </pre>
        <b>11 288</b>
        <pre> z nich jest teraz online</pre>
      </div>
      <div className={styles.search}>
        <input placeholder="Wyszukaj usługę, której potrzebujesz..." className={styles.searchInput}></input>

        <button className={styles.magnifierButton}>
          <img className={styles.magnifier} src={search}></img>
        </button>
      </div>
    </div>
  );
};

export default ServiceSearch;
