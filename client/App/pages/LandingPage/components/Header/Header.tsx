import { carouselLanding, flag, installation, smartphone } from '../../../../assets/images';
import { useCurrentViewport } from '../../../../utils';
import { Dropdown } from '../Dropdown';
import Categories from './Categories/Categories';
import ServiceSearch from './ServiceSearch/ServiceSearch';
import VerticalCarousel from './VerticalCarousel/VerticalCarousel';
import styles from './Header.module.scss';

const slides = [
  { image: carouselLanding, text: undefined },
  {
    image: flag,
    text: 'Шукаєте роботу? Зареєструйтеся як фахівець на Fixly',
  },
  { image: smartphone, text: 'Skorzystaj z Płatności Fixly - zleć usługę i zapłać bezpiecznie w aplikacji!' },
  { image: installation, text: 'Zamów montaż wybranych mebli IKEA na Fixly' },
];

const Header = () => {
  const width = useCurrentViewport();
  return (
    <>
      <div className={styles.headerTop}>
        <ServiceSearch />
        <VerticalCarousel slides={slides} autoPlay={true} />
      </div>
      {width.x > 992 ? <Dropdown background={false} /> : <Categories />}
    </>
  );
};

export default Header;
