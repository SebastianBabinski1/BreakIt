import styles from './SearchBar.module.scss';
import { search } from '../../../../../assets/index';

const SearchBar = () => {
  return (
    <div className={styles.search}>
      <img className={styles.searchMagnifier} src={search} />
      <input placeholder="Wyszukaj usługę, której potrzebujesz..." className={styles.searchInput} />
    </div>
  );
};

export default SearchBar;
