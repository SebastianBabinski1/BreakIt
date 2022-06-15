import styles from './Categories.module.scss';
import { categories } from '../../Dropdown';
import ListItem from '../../Dropdown/ListItem/ListItem';
import { arrow } from '../../../../../assets';

const Categories = () => {
  return (
    <div className={styles.categoriesWrapper}>
      {categories.map((category, index) => {
        return (
          <div className={styles.listItemWrapper} key={index}>
            <ListItem src={category.src} text={category.text} />
            <img className={styles.arrow} src={arrow}></img>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
