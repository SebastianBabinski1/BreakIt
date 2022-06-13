import styles from './DesktopNavigation.module.scss';
import { arrow } from '../../../../../assets';
import classNames from 'classnames';
import { Props } from '../Navbar';

const DesktopNavigation = (props: Props) => {
  const toggleItemClasses = classNames(styles.item, { [styles.itemButtonToggled]: props.isToggled });
  const toggleButtonClasses = classNames(styles.itemButton, styles.toggle);
  const grayButtonClasses = classNames(styles.itemButton, styles.grayButton);

  return (
    <ul className={styles.list}>
      <li className={toggleItemClasses}>
        <button onClick={() => props.setIsToggled(!props.isToggled)} className={toggleButtonClasses}>
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
        <button className={grayButtonClasses}>BreakIt dla wykonawców</button>
      </li>
    </ul>
  );
};

export default DesktopNavigation;
