import styles from './MobileNavigationButton.module.scss';
import { mobileMenu } from '../../../../../assets';

interface MobileNavigationButtonProps {
  handleToggle: () => void;
}

export const MobileNavigationButton = ({ handleToggle }: MobileNavigationButtonProps) => {
  return (
    <button className={styles.button} onClick={handleToggle}>
      <img className={styles.icon} src={mobileMenu} alt="menu" />
    </button>
  );
};
