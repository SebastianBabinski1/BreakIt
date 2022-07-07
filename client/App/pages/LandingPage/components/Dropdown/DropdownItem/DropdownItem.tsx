import styles from './DropdownItem.module.scss';

interface Props {
  src: string;
  text: string;
}

export const DropdownItem = ({ src, text }: Props) => {
  return (
    <li className={styles.item}>
      <img className={styles.icon} src={src} alt="list item" />
      <a>{text}</a>
    </li>
  );
};
