import React, { useState } from 'react';
import classNames from 'classnames';

import searchImg from 'assets/icon-search.png';
import actionImg from 'assets/icon-action.png';
import closeInput from 'assets/close-input.png';

import './search-book.scss';

interface SearchBookProps {
  changeInput: boolean;
  closeInputSmall(value: boolean): void;
}

export const SearchBook: React.FC<SearchBookProps> = (props) => {
  const [showFilter, setShowFilter] = useState(false);
  const toggleShowFilter = () => {
    setShowFilter(!showFilter);
  };

  return (
    <div className={classNames('search', { searchView: props.changeInput })}>
      <div className={classNames('searchSmall', { searchSmallcreen: props.changeInput })}>
        <input type='text' placeholder='Поиск книги или автора...' data-test-id='input-search' />
        <img
          aria-hidden={true}
          src={closeInput}
          alt='search'
          title='search'
          onClick={() => props.closeInputSmall(false)}
          onKeyDown={() => props.closeInputSmall(false)}
          data-test-id='button-search-close'
        />
      </div>
      <div
        aria-hidden={true}
        className={classNames('search__input')}
        onClick={toggleShowFilter}
        onKeyDown={toggleShowFilter}
      >
        <input type='text' placeholder='Поиск книги или автора...' />
        <img src={searchImg} alt='search' title='search' />
      </div>
      <div className={classNames('search__filter', { visibleSearchElem: showFilter })}>
        <img src={actionImg} alt='search' title='search' />
        <p>По рейтингу</p>
      </div>
    </div>
  );
};
