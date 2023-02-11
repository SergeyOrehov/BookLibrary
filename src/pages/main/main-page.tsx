import React, { useState } from 'react';
import classNames from 'classnames';

import { Menu } from 'components/menu';
import { BooksList } from 'components/books-list';
import { BooksListTable } from 'components/books-list-table';
import { booksListMocks } from 'fixtures/books-list';
import { booksListMocksTable } from 'fixtures/books-list-table';
import { SearchBook } from 'components/search';

import searchImg from 'assets/icon-search.png';
import actionImg from 'assets/icon-action.png';
import menuTablet from 'assets/menu-tablet.png';
import menuTabletActive from 'assets/menu-tablet-active.png';
import menuList from 'assets/menu-list.png';
import menuListActive from 'assets/menu-list-active.png';

import './main-page.scss';

const plug = (value: boolean) => value;

export const MainPage = () => {
  const [switchList, setSwitchList] = useState(true);
  const [showInput, setshowInput] = useState(false);

  const togleShowInput = () => {
    setshowInput(!showInput);
  };

  const closeInputSmall = (value: boolean) => {
    setshowInput(value);
  };

  return (
    <section className='main-page'>
      <div className='container'>
        <Menu visibleMenu={false} changeShowMenu={plug} />
        <div className='main-wrapper'>
          <div className={classNames('filter', { filterView: showInput })}>
            <SearchBook changeInput={showInput} closeInputSmall={closeInputSmall} />
            <div className={classNames('filter-icons', { toggleViewMenu: showInput })}>
              <button type='button' aria-label='button' onClick={togleShowInput} data-test-id='button-search-open'>
                <img src={searchImg} alt='search' title='search' />
              </button>
              <button type='button' aria-label='button'>
                <img src={actionImg} alt='search' title='search' />
              </button>
            </div>
            <div className={classNames('menu-options', { toggleViewMenu: showInput })}>
              <button
                type='button'
                aria-label='button'
                className={switchList ? 'menu-type menu-type-active' : 'menu-type'}
                onClick={() => setSwitchList(true)}
                data-test-id='button-menu-view-window'
              >
                <img className='img-main' src={menuTablet} alt='menuTablet' title='menuTablet' />
                <img className='img-active' src={menuTabletActive} alt='menuTabletActive' title='menuTabletActive' />
              </button>
              <button
                type='button'
                aria-label='button'
                className={switchList ? 'menu-type' : 'menu-type menu-type-active'}
                onClick={() => setSwitchList(false)}
                data-test-id='button-menu-view-list'
              >
                <img className='img-main' src={menuList} alt='menuList' title='menuList' />
                <img className='img-active' src={menuListActive} alt='menuListActive' title='menuListActive' />
              </button>
            </div>
          </div>
          <div className='main-page-content'>
            {switchList ? (
              <div className='books-list-table'>
                {booksListMocksTable.length > 0 && <BooksListTable list={booksListMocksTable} />}
              </div>
            ) : (
              <div className='books-list'>{booksListMocks.length > 0 && <BooksList list={booksListMocks} />}</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
