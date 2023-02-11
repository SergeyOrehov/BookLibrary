import React from 'react';

import { NavLink } from 'react-router-dom';

import { IBooksItem } from 'types/IBooksItem';

import bookImage from 'assets/picture-table.png';
import rating from 'assets/star.png';
import noPicture from 'assets/noPicture.png';

import './books-item-table.scss';

interface IBooksItemParams {
  item: IBooksItem;
}

export const BooksItemTable: React.FC<IBooksItemParams> = ({ item }) => (
  <NavLink to='id'>
    <div className='booksItemTable' data-test-id='card'>
      {item.page ? (
        <div className='booksItem__img'>
          <img src={bookImage} alt='page' title='page' />
        </div>
      ) : (
        <div className='booksItem__img'>
          <img src={noPicture} alt='page' title='page' />
        </div>
      )}
      {item.rank ? (
        <img className='booksItem__rating' src={rating} alt='rank' title='rank' />
      ) : (
        <p className='booksItem__rating'> еще нет оценок </p>
      )}
      <p className='booksItem__title'>{item.title}</p>
      <p className='booksItem__authors'>{item.authors}</p>
      {item.status === 'забронировать' ? (
        <button className='booksItem__btn' type='button' aria-label='button'>
          {item.status}
        </button>
      ) : item.status === 'забронирована' ? (
        <button className='booksItem__btn busy' type='button' aria-label='button'>
          {item.status}
        </button>
      ) : (
        <button className='booksItem__btn busy-until' type='button' aria-label='button'>
          {item.status}
        </button>
      )}
    </div>
  </NavLink>
);
