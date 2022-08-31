import styles from './FooterLinks.module.scss';
import { footerLinksData } from './utils';

export const FooterLinks = () => {
  return (
    <div className={styles.footerLinks}>
      <p className={styles.title}>Przydatne linki</p>
      <div className={styles.contentWrapper}>
        {footerLinksData.map((linksItem, linksItemIndex) => {
          return (
            <a className={styles.itemContent} href="#" key={linksItemIndex}>
              {linksItem}
            </a>
          );
        })}
      </div>
    </div>
  );
};
