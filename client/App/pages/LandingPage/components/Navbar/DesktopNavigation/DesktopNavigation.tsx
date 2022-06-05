import styles from './DesktopNavigation.module.scss';
import { arrow } from '../../../../../assets/index';
import { Props } from '../Navbar';

const DesktopNavigation = (props: Props) => {
  return (
    <ul className={styles.list}>
      <li className={`${styles.item} ${props.isToggled && styles.itemButtonToggled}`}>
        <button
          onClick={() => props.setIsToggled(!props.isToggled)}
          className={`${styles.itemButton} ${styles.toggle}`}
        >
          <p>Usługi</p>
          <img className={props.isToggled ? styles.toggleTrue : undefined} src={arrow} />
        </button>
      </li>
      <li className={styles.item}>
        <button className={styles.itemButton}>Moja zapytania</button>
      </li>
      <li className={styles.item}>
        <button className={styles.itemButton}>Zaloguj się</button>
      </li>
      <li className={styles.item}>
        <button className={`${styles.itemButton} ${styles.specialist}`}>BreakIt dla wykonawców</button>
      </li>
    </ul>
  );
};

export default DesktopNavigation;
