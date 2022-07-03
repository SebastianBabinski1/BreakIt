import styles from './MobileNavigationLink.module.scss';

interface mobileNavigationLinkProps {
  src: string;
  text: string;
}
const MobileNavigationLink = (props: mobileNavigationLinkProps) => {
  return (
    <li className={styles.wrapper}>
      <img className={styles.image} src={props.src} />
      <p className={styles.text}>{props.text}</p>
    </li>
  );
};

export default MobileNavigationLink;
