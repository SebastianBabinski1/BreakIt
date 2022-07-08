import styles from './ServiceValues.module.scss';
import { ServiceValuesItem } from './ServiceValuesItem/ServiceValuesItem';
import { serviceValuesItems as items } from './utils';

export const ServiceValues = () => {
  return (
    <div className={styles.serviceValuesWrapper}>
      {items.map((item, index) => {
        return <ServiceValuesItem key={index} title={item.title} description={item.description} />;
      })}
    </div>
  );
};
