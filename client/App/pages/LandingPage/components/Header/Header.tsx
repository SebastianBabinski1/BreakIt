import { useCurrentViewport } from '../../../../utils';
import { Dropdown } from '../Dropdown';
import Categories from './Categories/Categories';
import ServiceSearch from './ServiceSearch/ServiceSearch';
import VerticalCarousel from './VerticalCarousel/VerticalCarousel';
import styles from './Header.module.scss';

const Header = () => {
  const width = useCurrentViewport();
  const isDesktop = width.x < 992;

  return (
    <div className={styles.header}>
      <div className={styles.headerTop}>
        <ServiceSearch />
        {isDesktop === false && <VerticalCarousel autoPlay={true} />}
      </div>
      {width.x > 992 ? <Dropdown /> : <Categories />}
      {isDesktop && <VerticalCarousel autoPlay={true} />}
    </div>
  );
};

export default Header;
