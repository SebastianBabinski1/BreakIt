import { useState } from 'react';
import { Dropdown } from '../Dropdown';
import styles from './Navbar.module.scss';
import arrow from '../../../../assets/arrow.svg';

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__left}>
        <a href="#">
          <img src="https://d13uy3bdhwkuhk.cloudfront.net/web/v0.230.0/static/media/fixly_logo.431d6d1b.svg"></img>
        </a>
      </div>
      <div className={styles.navbar__right}>
        <nav className={styles.navigation}>
          <ul className={styles.navigation__list}>
            <li className={styles.navigation__item}>
              <button onClick={() => setToggle(!toggle)} className={styles.dropdown__button}>
                <p>Usługi</p>
                <img className={toggle ? styles.dropdown__button__true : null} src={arrow} />
              </button>
              <div
                className={`${styles.dropdown__menu}
                 ${toggle ? styles.dropdown__menu__true : styles.dropdown__menu__false}`}
              >
                <Dropdown />
              </div>
            </li>
            <li className={styles.navigation__item}>
              <button>Moja zapytania</button>
            </li>
            <li className={styles.navigation__item}>
              <button>Zaloguj się</button>
            </li>
            <li className={styles.navigation__item}>
              <button className={styles.specialist}>BreakIt dla wykonawców</button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
