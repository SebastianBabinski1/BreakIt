import styles from './ListItem.module.scss';

interface Props {
  src: string;
  text: string;
}

const ListItem = ({ src, text }: Props) => {
  return (
    <li className={styles.item}>
      <img className={styles.icon} src={src} alt="list item" />
      <a>{text}</a>
    </li>
  );
};

export default ListItem;
