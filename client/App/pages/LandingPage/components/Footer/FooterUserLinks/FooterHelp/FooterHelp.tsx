import styles from './FooterHelp.module.scss';
import { footerHelpData } from './utils';

export const FooterHelp = () => {
  return (
    <div className={styles.footerHelp}>
      <p className={styles.title}>Pomoc</p>
      <div className={styles.contentWrapper}>
        {footerHelpData.map((helpItem, helpItemIndex) => {
          return (
            <a className={styles.itemContent} href="#" key={helpItemIndex}>
              {helpItem}
            </a>
          );
        })}
      </div>
    </div>
  );
};
