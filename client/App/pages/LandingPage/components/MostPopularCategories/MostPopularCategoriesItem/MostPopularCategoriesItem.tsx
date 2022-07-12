import styles from './MostPopularCategoriesItem.module.scss';

interface Props {
  slide: { image: string; title: string; numberOfInquiries: number };
}

export const MostPopularCategoriesItem = ({ slide }: Props) => (
  <div className={styles.mostPopularCategoriesItem} style={{ backgroundImage: `url(${slide.image})` }}>
    <div className={styles.blure}>
      <p className={styles.title}>{slide.title}</p>
      <p className={styles.inquiries}>{slide.numberOfInquiries} zapytań</p>
    </div>
  </div>
);
