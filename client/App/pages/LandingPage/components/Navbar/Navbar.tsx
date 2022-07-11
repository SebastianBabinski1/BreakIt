import { useState } from 'react';
import { Dropdown } from '../Dropdown';
import { MobileNavigation } from './MobileNavigation';
import { MobileNavigationButton } from './MobileNavigationButton';
import styles from './Navbar.module.scss';
import { SearchBar } from './SearchBar';
import { DesktopNavigation } from './DesktopNavigation';
import classNames from 'classnames';
import { ScreenWidthValues, useCurrentViewport } from '../../../../utils';

export const Navbar = () => {
  const [isToggled, setIsToggled] = useState(false);

  const menuStyles = classNames(styles.menu, { [styles.menuVisible]: isToggled });
  const width = useCurrentViewport();
  const isDesktop = width.x < ScreenWidthValues.MD;

  const handleToggle = () => {
    setIsToggled((prevState) => !prevState);
  };

  return (
    <>
      <nav className={styles.navbar}>
        <a className={styles.navbarLeft} href="#">
          <img
            className={styles.logo}
            src="https://d13uy3bdhwkuhk.cloudfront.net/web/v0.230.0/static/media/fixly_logo.431d6d1b.svg"
          />
        </a>
        <div className={`${styles.navbarRight}`}>
          {isDesktop ? (
            <div className={styles.mobileNav}>
              <SearchBar />
              <MobileNavigationButton handleToggle={handleToggle} />
            </div>
          ) : (
            <DesktopNavigation isToggled={isToggled} handleToggle={handleToggle} />
          )}
        </div>
      </nav>
      <div className={menuStyles}>
        {isDesktop ? (
          <MobileNavigation />
        ) : (
          <div className={styles.dropdownWrapper}>
            <Dropdown />
          </div>
        )}
      </div>
    </>
  );
};
