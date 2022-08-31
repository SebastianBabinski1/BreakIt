import styles from './FooterContacts.module.scss';
import { footerContactsData } from './utils';

export const FooterContacts = () => {
  return (
    <div className={styles.footerContacts}>
      <p className={styles.title}>Dane firmy</p>
      <div className={styles.contentWrapper}>
        {footerContactsData.map((contactItem, contactItemIndex) => {
          return (
            <p className={styles.itemContent} key={contactItemIndex}>
              {contactItem}
            </p>
          );
        })}
      </div>
    </div>
  );
};
