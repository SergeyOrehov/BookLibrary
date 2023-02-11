import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import { Layout } from 'components/layout';
import { MainPage } from 'pages/main';
import { TermsPage } from 'pages/terms';
import { ContractPage } from 'pages/contract';
import { BooksDetail } from 'pages/books-detail';

export const App = () => (
  <Routes>
    <Route path='/' element={<Layout />}>
      <Route path='/' element={<Navigate to='/books/all' />} />
      <Route path='/books/:category' element={<MainPage />} />
      <Route path='terms' element={<TermsPage />} />
      <Route path='contract' element={<ContractPage />} />
      <Route path='/books/:category/:bookId' element={<BooksDetail />} />
      <Route path='profile' />
    </Route>
  </Routes>
);
