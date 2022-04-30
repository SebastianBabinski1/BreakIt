import styles from './Dropdown.module.scss';
import hand from '../../../../assets/hand.svg';
import home from '../../../../assets/home.svg';
import leaf from '../../../../assets/leaf.svg';
import business from '../../../../assets/business.svg';
import party from '../../../../assets/party.svg';
import repair from '../../../../assets/repair.svg';

export const Dropdown = () => {
  return (
    <div className={styles.dropdown}>
      <ul className={styles.dropdown__list}>
        <li className={styles.dropdown__item}>
          <img className={styles.icon} src={hand} alt="hand" />
          <a>Dla Ukrainy</a>
        </li>
        <li className={styles.dropdown__item}>
          <img className={styles.icon} src={leaf} alt="leaf" />
          <a>Ogród</a>
        </li>
        <li className={styles.dropdown__item}>
          <img className={styles.icon} src={business} alt="business" />
          <a>Usługi dla biznesu</a>
        </li>
        <li className={styles.dropdown__item}>
          <img className={styles.icon} src={home} alt="home" />
          <a>Budowa domu</a>
        </li>
        <li className={styles.dropdown__item}>
          <img className={styles.icon} src={party} alt="party" />
          <a>Organizacja imprez</a>
        </li>
        <li className={styles.dropdown__item}>
          <img className={styles.icon} src={repair} alt="repair" />
          <a>Montaż i naprawa</a>
        </li>
        <li className={styles.dropdown__item}>
          <a>Elektryk</a>
        </li>
        <li className={styles.dropdown__item}>
          <a>Projektowanie</a>
        </li>
        <li className={styles.dropdown__item}>
          <a>Usługi finansowe</a>
        </li>
        <li className={styles.dropdown__item}>
          <a>Hydraulik</a>
        </li>
        <li className={styles.dropdown__item}>
          <a>Remont</a>
        </li>
        <li className={styles.dropdown__item}>
          <a>Usługi prawne i administracyjne</a>
        </li>
        <li className={styles.dropdown__item}>
          <a>Malarz</a>
        </li>
        <li className={styles.dropdown__item}>
          <a>Sprzątanie</a>
        </li>
        <li className={styles.dropdown__item}>
          <a>Usługi zdalne</a>
        </li>
        <li className={styles.dropdown__item}>
          <a>Meble i zabudowa</a>
        </li>
        <li className={styles.dropdown__item}>
          <a>Szkolenia i języki obce</a>
        </li>
        <li className={styles.dropdown__item}>
          <a>Zdrowie i uroda</a>
        </li>
        <li className={styles.dropdown__item}>
          <a>Motoryzacja</a>
        </li>
        <li className={styles.dropdown__item}>
          <a>Transport</a>
        </li>
        <li className={styles.dropdown__item}>
          <a>Złota rączka</a>
        </li>
      </ul>
    </div>
  );
};
