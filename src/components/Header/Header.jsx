import { useState } from 'react';

import css from "./Header.module.css";
import { Logo } from '../Logo/Logo.jsx';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu.jsx';

export const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(prevState => !prevState);
  };

  return (
    <header className={css.header}>

      {!isActive && (
        <>
          <div
            className={css.open_burger_menu_button}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <Logo />
        </>)}
      {isActive && (<BurgerMenu toggleMenu={toggleMenu} />)}

    </header>
  );
};
