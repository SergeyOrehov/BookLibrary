import line from 'assets/line.svg';

import './breadcrumbs.scss';

export const Breadcrumbs = () => (
  <section className='breadcrumbs'>
    <div className='container'>
      <p>
        Бизнес книги
        <span className='first'>
          <img src={line} alt='line' title='line' />
        </span>
        <span className='second'> Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих</span>
      </p>
    </div>
  </section>
);
