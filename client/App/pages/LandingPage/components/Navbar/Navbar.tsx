import { Dispatch, SetStateAction, useState } from 'react';
import { Dropdown } from '../Dropdown';
import MobileNavigation from './MobileNavigation/MobileNavigation';
import MobileNavigationButton from './MobileNavigationButton/MobileNavigationButton';
import styles from './Navbar.module.scss';
import SearchBar from './SearchBar/SearchBar';
import DesktopNavigation from './DesktopNavigation/DesktopNavigation';
import classNames from 'classnames';

export interface Props {
  isToggled: boolean;
  setIsToggled: Dispatch<SetStateAction<boolean>>;
}

export const Navbar = () => {
  const [isToggled, setIsToggled] = useState(false);

  const menuStyles = classNames(styles.menu, { [styles.menuTrue]: isToggled });

  const resizeListen = () => {
    const [isShrink, setIsShrink] = useState(false);
    window.addEventListener('resize', () => {
      window.screen.width < 992 ? setIsShrink(true) : setIsShrink(false);
    });
    return isShrink;
  };

  const isMobile = resizeListen();

  return (
    <>
      <nav className={styles.navbar}>
        <a className={styles.navbarLeft} href="#">
          <img
            className={styles.logo}
            src="https://d13uy3bdhwkuhk.cloudfront.net/web/v0.230.0/static/media/fixly_logo.431d6d1b.svg"
          ></img>
        </a>
        <div className={`${styles.navbarRight}`}>
          {isMobile ? (
            <div className={styles.mobileNav}>
              <SearchBar />
              <MobileNavigationButton isToggled={isToggled} setIsToggled={setIsToggled} />
            </div>
          ) : (
            <DesktopNavigation isToggled={isToggled} setIsToggled={setIsToggled} />
          )}
        </div>
      </nav>
      <div className={menuStyles}>{isMobile ? <MobileNavigation /> : <Dropdown />}</div>
    </>
  );
};
