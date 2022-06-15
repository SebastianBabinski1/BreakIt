import { Dispatch, SetStateAction, useEffect, useState } from 'react';
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

export const useCurrentViewport = () => {
  const [width, setWidth] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setWidth((prevState) => ({ ...prevState, x: window.screen.width }));

    window.addEventListener('resize', () => {
      setWidth((prevState) => ({ ...prevState, x: window.screen.width }));
    });

    return () => window.removeEventListener('resize', () => null);
  }, []);

  return width;
};

export const Navbar = () => {
  const [isToggled, setIsToggled] = useState(false);

  const width = useCurrentViewport();
  const isDesktop = width.x < 992;

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
          {isDesktop ? (
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
        {isDesktop ? <MobileNavigation /> : <Dropdown background={true} />}
      </div>
    </>
  );
};
