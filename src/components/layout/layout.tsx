import { Outlet } from 'react-router-dom';

import { Header } from 'components/header';
import { Footer } from 'components/footer';

import './layout.scss';

export const Layout = () => (
  <div className='layout'>
    <Header />
    <main className='main'>
      <Outlet />
    </main>
    <Footer />
  </div>
);
