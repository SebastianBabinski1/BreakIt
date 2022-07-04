import styles from './MobileNavigationLink.module.scss';

import { Props } from '../MobileNavigation';
const MobileNavigationLink = (props: Props) => {
  return (
    <li className={styles.wrapper}>
      <img className={styles.image} src={props.src} />
      <p className={styles.text}>{props.text}</p>
    </li>
  );
};

export default MobileNavigationLink;
