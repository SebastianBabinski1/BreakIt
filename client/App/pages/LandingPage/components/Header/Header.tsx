import { useCurrentViewport } from '../../../../utils';
import { Dropdown } from '../Dropdown';
import Categories from './Categories/Categories';
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
