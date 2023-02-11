import React, { useState } from 'react';
import classNames from 'classnames';
import { Menu } from 'components/menu';

import './burger-menu.scss';

export const BurgerMenu = () => {
  const [isMenuOpen, toggleMenu] = useState(false);
  const toggleMenuMode = () => {
    toggleMenu(!isMenuOpen);
  };

  const changeShowMenu = (value: boolean) => {
    toggleMenu(value);
  };

  const windowInnerWidth = window.innerWidth;

  return (
    <div>
      <button
        data-test-id='button-burger'
        type='button'
        aria-label='button'
        className={classNames('burger-menu-btn', { visibleHamburger: isMenuOpen })}
        onClick={toggleMenuMode}
      >
        <span />
        <span />
        <span />
      </button>
      {windowInnerWidth < 769 ? <Menu visibleMenu={isMenuOpen} changeShowMenu={changeShowMenu} /> : null}
    </div>
  );
};
