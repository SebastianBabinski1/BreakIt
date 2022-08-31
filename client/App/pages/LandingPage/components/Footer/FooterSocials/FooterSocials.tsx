import FooterPartnersItem from './FooterPartnersItem/FooterPartnersItem';
import styles from './FooterSocials.module.scss';
import FooterSocialsItem from './FooterSocialsItem/FooterSocialsItem';
import { footerPartnersData, footerSocialsData } from './utils';

const FooterSocials = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.footerSocialsWrapper}>
        <div className={styles.footerPartners}>
          {footerPartnersData.map((item, index) => {
            return <FooterPartnersItem key={index} title={item.title} image={item.image} />;
          })}
        </div>
        <div className={styles.footerSocials}>
          {footerSocialsData.map((item, index) => {
            return <FooterSocialsItem key={index} title={item.title} image={item.image} />;
          })}
        </div>
      </div>
      <p className={styles.footerCopyright}>Copyright © * 2016 - 2022 Breakit</p>
    </div>
  );
};

export default FooterSocials;
