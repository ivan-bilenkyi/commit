import { Logo } from '../Logo/Logo.jsx';

import css from './BurgerMenu.module.css';

export const BurgerMenu = ({toggleMenu}) => {
  return (
    <div className={css.burger_menu}>
      <div className={css.wrapper}>
        <div
          className={css.close_burger_menu_button}
          onClick={toggleMenu}
        >
        </div>
        <Logo />
      </div>
      <ul>
        <li><a href="#about" onClick={toggleMenu}>про нас</a></li>
        <li><a href="#cases" onClick={toggleMenu}>кейси</a></li>
        <li><a href="#footer" onClick={toggleMenu}>контакти</a></li>
      </ul>
    </div>
  )
}