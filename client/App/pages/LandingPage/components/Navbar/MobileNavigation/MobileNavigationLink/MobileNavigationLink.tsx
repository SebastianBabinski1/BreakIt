import styles from './MobileNavigationLink.module.scss';

interface mobileNavigationProps {
  src: string;
  text: string;
}
const MobileNavigationLink = ({ src, text }: mobileNavigationProps) => {
  return (
    <li className={styles.wrapper}>
      <img className={styles.image} src={src} />
      <p className={styles.text}>{text}</p>
    </li>
  );
};

export default MobileNavigationLink;
