import styles from './MobileNavigationLink.module.scss';

interface Props {
  src: string;
  text: string;
}

export const MobileNavigationLink = ({ src, text }: Props) => {
  return (
    <li className={styles.mobileNavigationLink}>
      <img className={styles.image} src={src} />
      <p className={styles.text}>{text}</p>
    </li>
  );
};
