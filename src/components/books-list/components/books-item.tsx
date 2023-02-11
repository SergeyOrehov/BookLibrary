import React from 'react';

import { NavLink } from 'react-router-dom';

import { IBooksItem } from 'types/IBooksItem';

import bookImage from 'assets/picture-list.png';
import rating from 'assets/star.png';
import noPicture from 'assets/noPicture.png';

import './books-item.scss';

interface IBooksItemParams {
  item: IBooksItem;
}

export const BooksItem: React.FC<IBooksItemParams> = ({ item }) => (
  <NavLink to='id'>
    <div className='booksItem' data-test-id='card'>
      {item.page ? (
        <div className='booksItem__img'>
          <img src={bookImage} alt='page' title='page' />
        </div>
      ) : (
        <div className='booksItem__img'>
          <img src={noPicture} alt='page' title='page' />
        </div>
      )}
      <div className='book-info'>
        <p className='booksItem__title'>{item.title}</p>
        <p className='booksItem__authors'>{item.authors}</p>
        <div className='book-wrapper'>
          {item.rank ? (
            <img className='booksItem__rating_img' src={rating} alt='rank' title='rank' />
          ) : (
            <p className='booksItem__rating'> еще нет оценок </p>
          )}
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
      </div>
    </div>
  </NavLink>
);
