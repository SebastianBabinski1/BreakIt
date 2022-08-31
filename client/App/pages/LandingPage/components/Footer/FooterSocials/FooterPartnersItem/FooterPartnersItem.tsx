import classNames from 'classnames';
import styles from './FooterPartnersItem.module.scss';

interface Props {
  title: string;
  image: string;
}

const FooterPartnersItem = ({ title, image }: Props) => {
  const classname = classNames(styles.image, { [styles.imageWithoutTitle]: title === '' });
  return (
    <a className={styles.footerPartnersItem}>
      <>
        <img className={classname} src={image} alt={'partner'} />
        {title}
      </>
    </a>
  );
};

export default FooterPartnersItem;
