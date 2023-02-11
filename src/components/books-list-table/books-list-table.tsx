import React from 'react';

import { IBooksItem } from 'types/IBooksItem';

import { BooksItemTable } from './components';

import './books-list-table.scss';

interface IBooksListParams {
  list: IBooksItem[];
}

export const BooksListTable: React.FC<IBooksListParams> = ({ list }) => (
  <div className='BooksListTable'>
    {list.map((book: IBooksItem) => (
      <BooksItemTable key={book.id} item={book} />
    ))}
  </div>
);
