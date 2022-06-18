import styles from './DesktopNavigation.module.scss';
import { arrow } from '../../../../../assets';
import classNames from 'classnames';

interface Props {
  isToggled: boolean;
  handleToggle: () => void;
}

const DesktopNavigation = ({ isToggled, handleToggle }: Props) => {
  const toggleItemClasses = classNames(styles.item, { [styles.itemButtonToggled]: isToggled });
  const toggleButtonClasses = classNames(styles.itemButton, styles.toggle);
  const goToWorkersSectionButtonClasses = classNames(styles.itemButton, styles.goToWorkersSectionButton);

  return (
    <ul className={styles.list}>
      <li className={toggleItemClasses}>
        <button onClick={handleToggle} className={toggleButtonClasses}>
          <p>Usługi</p>
          <img className={isToggled && styles.toggleTrue} src={arrow} />
        </button>
      </li>
      <li className={styles.item}>
        <button className={styles.itemButton}>Moja zapytania</button>
      </li>
      <li className={styles.item}>
        <button className={styles.itemButton}>Zaloguj się</button>
      </li>
      <li className={styles.item}>
        <button className={goToWorkersSectionButtonClasses}>BreakIt dla wykonawców</button>
      </li>
    </ul>
  );
};

export default DesktopNavigation;
