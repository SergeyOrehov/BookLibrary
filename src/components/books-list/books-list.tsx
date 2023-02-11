import React from 'react';

import { IBooksItem } from 'types/IBooksItem';

import { BooksItem } from './components';

interface IBooksListParams {
  list: IBooksItem[];
}

export const BooksList: React.FC<IBooksListParams> = ({ list }) => (
  <div className='BooksList'>
    {list.map((book: IBooksItem) => (
      <BooksItem key={book.id} item={book} />
    ))}
  </div>
);
