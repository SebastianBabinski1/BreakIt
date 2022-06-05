import styles from './MobileNavigationButton.module.scss';
import { mobileMenu } from '../../../../../assets';
import { Props } from '../Navbar';

const MobileNavigationButton = (props: Props) => {
  return (
    <button className={styles.button} onClick={() => props.setIsToggled(!props.isToggled)}>
      <img className={styles.icon} src={mobileMenu} alt="menu" />
    </button>
  );
};

export default MobileNavigationButton;
