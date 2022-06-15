import styles from './ListItem.module.scss';

interface Props {
  src: string;
  text: string;
}

const ListItem = (props: Props) => {
  return (
    <li className={styles.item}>
      <img className={styles.icon} src={props.src} alt="list item" />
      <a>{props.text}</a>
    </li>
  );
};

export default ListItem;
