import classnames from 'classnames';
import styles from './Footer.module.scss';
import FooterSocials from './FooterSocials/FooterSocials';
import FooterUserLinks from './FooterUserLinks/FooterUserLinks';

export const Footer = () => {
  return (
    <div className={classnames(styles.footer, styles.pageContent)}>
      <FooterUserLinks />
      <FooterSocials />
    </div>
  );
};
