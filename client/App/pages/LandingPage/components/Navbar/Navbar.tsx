import { Dispatch, SetStateAction, useState } from 'react';
import { Dropdown } from '../Dropdown';
import MobileNavigation from './MobileNavigation/MobileNavigation';
import MobileNavigationButton from './MobileNavigationButton/MobileNavigationButton';
import styles from './Navbar.module.scss';
import SearchBar from './SearchBar/SearchBar';
import DesktopNavigation from './DesktopNavigation/DesktopNavigation';

export interface Props {
  isToggled: boolean;
  setIsToggled: Dispatch<SetStateAction<boolean>>;
}

export const Navbar = () => {
  const [isShrink, setIsShrink] = useState(false);
  const [isToggled, setIsToggled] = useState(false);

  window.addEventListener('resize', () => {
    window.screen.width < 992 ? setIsShrink(true) : setIsShrink(false);
  });

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
          {isShrink ? (
            <div className={styles.mobileNav}>
              <SearchBar />
              <MobileNavigationButton isToggled={isToggled} setIsToggled={setIsToggled} />
            </div>
          ) : (
            <DesktopNavigation isToggled={isToggled} setIsToggled={setIsToggled} />
          )}
        </div>
      </nav>
      <div
        className={`${styles.menu}
                   ${isToggled && styles.menuTrue}`}
      >
        {isShrink ? <MobileNavigation /> : <Dropdown />}
      </div>
    </>
  );
};
