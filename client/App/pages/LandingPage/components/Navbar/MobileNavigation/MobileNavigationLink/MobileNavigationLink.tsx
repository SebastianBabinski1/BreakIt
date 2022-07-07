import styles from './MobileNavigationLink.module.scss';

interface mobileNavigationProps {
  src: string;
  text: string;
}

export const MobileNavigationLink = ({ src, text }: mobileNavigationProps) => {
  return (
    <li className={styles.mobileNavigationLink}>
      <img className={styles.image} src={src} />
      <p className={styles.text}>{text}</p>
    </li>
  );
};
