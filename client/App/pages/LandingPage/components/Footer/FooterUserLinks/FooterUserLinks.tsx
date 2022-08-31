import { FooterContacts } from './FooterContacts';
import { FooterHelp } from './FooterHelp';
import { FooterLinks } from './FooterLinks';
import styles from './FooterUserLinks.module.scss';

const FooterUserLinks = () => {
  return (
    <div className={styles.footerUserLinks}>
      <FooterLinks />
      <FooterHelp />
      <FooterContacts />
    </div>
  );
};

export default FooterUserLinks;
