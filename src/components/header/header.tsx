import { NavLink } from 'react-router-dom';

import { BurgerMenu } from 'components/burger-menu';

import logo from 'assets/logo.png';
import avatar from 'assets/avatar.png';

import './header.scss';

export const Header = () => {
  const windowInnerWidth = window.innerWidth;
  return (
    <header className='header'>
      <div className='container'>
        <div className='logo'>
          <NavLink to='/'>
            <img src={logo} alt='logo' title='logo' />
          </NavLink>
        </div>
        <div className='hamburger'>
          <BurgerMenu />
        </div>
        <h1>Библиотека</h1>
        <div className='autorisation'>
          <p> Привет, Иван!</p>
          <img src={avatar} alt='logo' />
        </div>
      </div>
    </header>
  );
};
