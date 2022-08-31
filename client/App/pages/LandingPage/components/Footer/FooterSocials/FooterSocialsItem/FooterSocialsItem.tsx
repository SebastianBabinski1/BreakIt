import styles from './FooterSocialsItem.module.scss';

interface Props {
  image: string;
  title: string;
}

const FooterSocialsItem = ({ image, title }: Props) => {
  const content = title === '' ? <img className={styles.image} src={image} alt="socials" /> : <p>{title}</p>;
  return content;
};

export default FooterSocialsItem;
