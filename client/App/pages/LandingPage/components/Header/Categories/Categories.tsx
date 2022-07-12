import styles from './Categories.module.scss';
import { DropdownItem } from '../../Dropdown/DropdownItem';
import { arrow } from '../../../../../assets';
import { categories } from '../../../../../utils';

export const Categories = () => {
  return (
    <div className={styles.categories}>
      {categories.map((category, index) => {
        return (
          <div className={styles.listItemWrapper} key={index}>
            <DropdownItem src={category.src} text={category.text} />
            <img className={styles.arrow} src={arrow} />
          </div>
        );
      })}
    </div>
  );
};
