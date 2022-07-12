import { categories } from '../../../../utils';
import styles from './Dropdown.module.scss';
import { DropdownItem } from './DropdownItem';

export const Dropdown = () => {
  return (
    <ul className={styles.dropdownList}>
      {categories.map((item, index) => {
        return <DropdownItem key={index} src={item.src} text={item.text} />;
      })}
    </ul>
  );
};
