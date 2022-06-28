import styles from './MostPopularCategoriesItem.module.scss';

interface mostPopularCategoriesItemProps {
  slide: { image: string; title: string; numberOfInquiries: number };
}

const MostPopularCategoriesItem = ({ slide }: mostPopularCategoriesItemProps) => (
  <div className={styles.blure}>
    <div className={styles.contentWrapper} style={{ backgroundImage: `url(${slide.image})` }}>
      <p className={styles.title}>{slide.title}</p>
      <p className={styles.inquiries}>{slide.numberOfInquiries} zapytań</p>
    </div>
  </div>
);

export default MostPopularCategoriesItem;
