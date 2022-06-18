import styles from './MobileNavigationButton.module.scss';
import { mobileMenu } from '../../../../../assets';

interface Props {
  handleToggle: () => void;
}

const MobileNavigationButton = ({ handleToggle }: Props) => {
  return (
    <button className={styles.button} onClick={handleToggle}>
      <img className={styles.icon} src={mobileMenu} alt="menu" />
    </button>
  );
};

export default MobileNavigationButton;
