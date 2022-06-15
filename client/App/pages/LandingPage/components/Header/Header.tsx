import { Dropdown } from '../Dropdown';
import { useCurrentViewport } from '../Navbar';
import Categories from './Categories/Categories';
import styles from './Header.module.scss';
import ServiceSearch from './ServiceSearch/ServiceSearch';

const Header = () => {
  const width = useCurrentViewport();
  return (
    <>
      <ServiceSearch />
      {width.x > 992 ? <Dropdown background={false} /> : <Categories />}
    </>
  );
};

export default Header;
