import { useState, useEffect, useRef, useCallback } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import classNames from 'classnames';

import arrowMenuBlack from 'assets/arrow-tumbler-black.svg';
import arrowMenuRed from 'assets/arrow-tumbler-red.svg';

import './menu.scss';

interface ChangeShowMenuProps {
  visibleMenu: boolean;
  changeShowMenu(value: boolean): void;
}

export const Menu: React.FC<ChangeShowMenuProps> = (props) => {
  const setActiveСhapter = ({ isActive }: { isActive: boolean }): string => (isActive ? 'active-link-chapter' : '');
  const setActive = ({ isActive }: { isActive: boolean }): string => (isActive ? 'active-link' : '');
  const location = useLocation();
  const [hideMenu, setHideMenu] = useState(true);
  const [refState, setRefState] = useState(true);
  const fun = props.changeShowMenu;
  const clickShowcase = () => {
    setHideMenu(!hideMenu);
  };

  const toggleRef = useCallback(() => {
    setRefState(!refState);
    fun(refState);
    setRefState(!refState);
  }, [fun, refState]);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log();
    const hadleClick = (event: Event): void => {
      const target = event?.target;
      if (!ref.current?.contains(target as Node)) {
        toggleRef();
      }
    };
    document.addEventListener('click', hadleClick);
    return () => {
      document.removeEventListener('click', hadleClick);
    };
  }, [toggleRef]);

  return (
    <nav
      ref={ref}
      className={classNames('nav', { visibleMenu: props.visibleMenu }, { showMenu: !props.visibleMenu })}
      data-test-id='burger-navigation'
      aria-hidden={true}
    >
      <div className='category'>
        <NavLink
          to='/books/all'
          className='navlink'
          data-test-id={props.visibleMenu ? 'burger-showcase' : 'navigation-showcase'}
        >
          <button
            type='button'
            aria-label='button'
            className={
              location.pathname.includes('books')
                ? 'category__item_first active-link-chapter category__item__first_active'
                : 'category__item_first'
            }
            onClick={clickShowcase}
          >
            Витрина книг
            <img
              className={classNames(
                { showcaseArrowTurn: hideMenu && location.pathname.includes('books') },
                { showcaseArrowView: !location.pathname.includes('books') }
              )}
              src={arrowMenuRed}
              title='arrow'
              alt='arrow'
            />
            <img
              className={classNames(
                { showcaseArrowTurn: hideMenu && location.pathname.includes('books') },
                { showcaseArrowView: location.pathname.includes('books') }
              )}
              src={arrowMenuBlack}
              title='arrow'
              alt='arrow'
            />
          </button>
        </NavLink>
        <ul
          className={classNames('list', { listVisible: !hideMenu || !location.pathname.includes('books') })}
          aria-hidden={true}
          onClick={() => props.changeShowMenu(false)}
          onKeyDown={() => props.changeShowMenu(false)}
        >
          <li className='list__item'>
            <NavLink
              to='/books/all'
              className={setActive}
              data-test-id={props.visibleMenu ? 'burger-books' : 'navigation-books'}
            >
              Все книги
            </NavLink>
          </li>
          <li className='list__item'>
            <NavLink to='/books/business' className={setActive}>
              Бизнес-книги<span>14</span>
            </NavLink>
          </li>
          <li className='list__item'>
            <NavLink to='/books/detectives' className={setActive}>
              Детективы<span>8</span>
            </NavLink>
          </li>
          <li className='list__item'>
            <NavLink to='/books/children' className={setActive}>
              Детские книги<span>14</span>
            </NavLink>
          </li>
          <li className='list__item'>
            <NavLink to='/books/foreign' className={setActive}>
              Зарубежная литература<span>2</span>
            </NavLink>
          </li>
          <li className='list__item'>
            <NavLink to='/books/history' className={setActive}>
              История<span>5</span>
            </NavLink>
          </li>
          <li className='list__item'>
            <NavLink to='/books/classic' className={setActive}>
              Классическая литература<span>12</span>
            </NavLink>
          </li>
          <li className='list__item'>
            <NavLink to='/books/psyhology' className={setActive}>
              Книги по психологии<span>11</span>
            </NavLink>
          </li>
          <li className='list__item'>
            <NavLink to='/books/computer' className={setActive}>
              Компьютерная литература<span>54</span>
            </NavLink>
          </li>
          <li className='list__item'>
            <NavLink to='/books/culture' className={setActive}>
              Культура и искусство<span>5</span>
            </NavLink>
          </li>
          <li className='list__item'>
            <NavLink to='/books/science' className={setActive}>
              Наука и образование<span>2</span>
            </NavLink>
          </li>
          <li className='list__item'>
            <NavLink to='/books/journalistic' className={setActive}>
              Публицистическая литература<span>0</span>
            </NavLink>
          </li>
          <li className='list__item'>
            <NavLink to='/books/directory' className={setActive}>
              Справочники<span>10</span>
            </NavLink>
          </li>
          <li className='list__item'>
            <NavLink to='/books/fantasy' className={setActive}>
              Фантастика<span>12</span>
            </NavLink>
          </li>
          <li className='list__item'>
            <NavLink to='/books/humor' className={setActive}>
              Юмористическая <br /> литература<span>8</span>
            </NavLink>
          </li>
        </ul>
        <div className='category__item' data-test-id={props.visibleMenu ? 'burger-terms' : 'navigation-terms'}>
          <NavLink to='/terms' className={setActiveСhapter}>
            Правила пользования
          </NavLink>
        </div>
        <div className='category__item' data-test-id={props.visibleMenu ? 'burger-contract' : 'navigation-contract'}>
          <NavLink to='/contract' className={setActiveСhapter}>
            Договор оферты
          </NavLink>
        </div>
        <div className='category__item'>
          <NavLink to='/profile' className={setActiveСhapter} onClick={() => props.changeShowMenu(false)}>
            Профиль
          </NavLink>
        </div>
        <div className='category__item'>
          <NavLink to='/' className={setActiveСhapter} onClick={() => props.changeShowMenu(false)}>
            Выход
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
