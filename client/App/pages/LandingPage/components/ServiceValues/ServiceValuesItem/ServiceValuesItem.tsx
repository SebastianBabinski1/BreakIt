import styles from './ServiceValuesItem.module.scss';

interface serviceValuesItemProps {
  title: string;
  description: string;
}

export const ServiceValuesItem = ({ title, description }: serviceValuesItemProps) => {
  return (
    <div className={styles.serviceValuesItem}>
      <p className={styles.title}>{title}</p>
      <p className={styles.description}>{description}</p>
    </div>
  );
};
