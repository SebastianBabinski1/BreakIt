import { ScreenWidthValues, useCurrentViewport } from '../../../../utils';
import { Dropdown } from '../Dropdown';
import { Categories } from './Categories';
import { ServiceSearch } from './ServiceSearch';
import { VerticalCarousel } from './VerticalCarousel';
import styles from './Header.module.scss';
import classnames from 'classnames';

export const Header = () => {
  const width = useCurrentViewport();
  const isDesktop = width.x > ScreenWidthValues.MD;

  return (
    <div className={classnames(styles.header, styles.pageContent)}>
      <ServiceSearch />
      <VerticalCarousel autoPlay={false} />
      {isDesktop ? <Dropdown /> : <Categories />}
    </div>
  );
};
