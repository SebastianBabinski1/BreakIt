import styles from './Dropdown.module.scss';
import { hand, home, leaf, business, party, repair } from '../../../../assets/index';
import ListItem from './ListItem/ListItem';

export interface Props {
  src: string;
  text: string;
}

export const Dropdown = () => {
  const items = [
    { src: hand, text: 'Dla Ukrainy' },
    { src: leaf, text: 'Ogród' },
    { src: business, text: 'Usługi dla biznesu' },
    { src: home, text: 'Budowa domu' },
    { src: party, text: 'Organizacja imprez' },
    { src: repair, text: 'Montaż i naprawa' },
    { src: repair, text: 'Elektryk' },
    { src: repair, text: 'Projektowanie' },
    { src: repair, text: 'Usługi finansowe' },
    { src: repair, text: 'Hydraulik' },
    { src: repair, text: 'Remont' },
    { src: repair, text: 'Usługi prawne' },
    { src: repair, text: 'Malarz' },
    { src: repair, text: 'Sprzątanie' },
    { src: repair, text: 'Usługi zdalne' },
    { src: repair, text: 'Meble i zabudowa' },
    { src: repair, text: 'Szkolenia i języki obce' },
    { src: repair, text: 'Zdrowie i uroda' },
    { src: repair, text: 'Motoryzacja' },
    { src: repair, text: 'Transport' },
    { src: repair, text: 'Złota rączka' },
  ];

  return (
    <div className={styles.dropdown}>
      <ul className={styles.dropdownList}>
        {items.map((item, index) => {
          return <ListItem key={index} src={item.src} text={item.text} />;
        })}
      </ul>
    </div>
  );
};
