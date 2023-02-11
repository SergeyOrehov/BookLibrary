import React, { useState } from 'react';
import classNames from 'classnames';

import { Breadcrumbs } from 'components/breadcrumbs';

import image from 'assets/picture.jpg';
import rating from 'assets/rating.png';
import foto from 'assets/foto-user.png';
import arrowReviw from 'assets/arrow-tumbler-black.svg';

import './books-detail-page.scss';
import { SwiperComponent } from 'components/swiper';

export const BooksDetail = () => {
  const [toggleBtnReview, setToggleBtnReview] = useState(false);

  const togleReviews = () => {
    setToggleBtnReview(!toggleBtnReview);
  };

  return (
    <section className='booksDetail-page'>
      <Breadcrumbs />
      <div className='container'>
        <div className='book-wrapper'>
          <div className='book'>
            <div className='book__img'>
              <SwiperComponent first={image} />
            </div>
            <div className='book__info'>
              <h3 className='book__title'>
                Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих
              </h3>
              <p className='authors'>Адитья Бхаргава, 2019</p>
              <button type='submit' className='btn'>
                Забронировать
              </button>
            </div>
          </div>
          <div className='book__description'>
            <h4> О книге</h4>
            <p className='book__text'>
              Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были кем-то
              решены, протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального Кнута,
              изучить многостраничные фолианты с доказательствами и обоснованиями, но хотите ли вы тратить на это свое
              время?
            </p>
            <p className='book__text'>
              Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. А грокать
              алгоритмы — это веселое и увлекательное занятие.
            </p>
          </div>
        </div>
        <div className='rating'>
          <h4>Рейтинг</h4>
          <div className='rank'>
            <img src={rating} alt='rank' title='rank' />
            <span>4.3</span>
          </div>
        </div>
        <div className='infoDetail'>
          <h4>Подробная информация</h4>
          <div className='infoDetail-list'>
            <div className='infoDetail-list__item'>
              <p className='first'>Издательство</p>
              <p className='second'>Питер</p>
            </div>
            <div className='infoDetail-list__item'>
              <p className='first'>Жанр</p>
              <p className='second'>Компьютерная литература</p>
            </div>
            <div className='infoDetail-list__item'>
              <p className='first'>Год издания</p>
              <p className='second'>2019</p>
            </div>
            <div className='infoDetail-list__item'>
              <p className='first'>Вес</p>
              <p className='second'>370 г</p>
            </div>
            <div className='infoDetail-list__item'>
              <p className='first'>Страниц</p>
              <p className='second'>288</p>
            </div>
            <div className='infoDetail-list__item'>
              <p className='first'>ISBN</p>
              <p className='second'>978-5-4461-0923-4</p>
            </div>
            <div className='infoDetail-list__item'>
              <p className='first'>Переплет</p>
              <p className='second'>Мягкая обложка</p>
            </div>
            <div className='infoDetail-list__item'>
              <p className='first'>Изготовитель</p>
              <p className='second'>
                ООО «Питер Мейл». РФ, 198 206, г. Санкт-Петербург, Петергофское ш, д. 73, лит. А29
              </p>
            </div>
            <div className='infoDetail-list__item'>
              <p className='first'>Формат</p>
              <p className='second'>70x100</p>
            </div>
          </div>
        </div>
        <div className='reviews'>
          <div className='toggle-show-reviews'>
            <h4>
              Отзывы <span>2</span>
            </h4>
            <button
              className='toggle-show-reviews-btn'
              type='button'
              aria-label='button'
              onClick={togleReviews}
              data-test-id='button-hide-reviews'
            >
              <img className={classNames({ imgTurn: toggleBtnReview })} src={arrowReviw} alt='arrow' title='arrow' />
            </button>
          </div>
          <div className={classNames('reviews-list', { reviewsListOpen: toggleBtnReview })}>
            <div className='reviews-list__item'>
              <div className='reviews-list__item__info'>
                <img src={foto} alt='foto' title='foto' />
                <div className='reviews-list__item__text'>
                  <p>Иван Иванов</p>
                  <p>5 января 2019</p>
                </div>
              </div>
              <img className='rating-foto' src={rating} alt='rank' title='rank' />
            </div>
            <div className='reviews-list__item'>
              <div className='reviews-list__item__info'>
                <img src={foto} alt='foto' title='foto' />
                <div className='reviews-list__item__text'>
                  <p>Николай Качков</p>
                  <p>28 июня 2018</p>
                </div>
              </div>
              <img className='rating-foto' src={rating} alt='rank' title='rank' />
              <p className='text'>
                Учитывая ключевые сценарии поведения, курс на социально-ориентированный национальный проект не оставляет
                шанса для анализа существующих паттернов поведения. Для современного мира внедрение современных методик
                предоставляет широкие возможности для позиций, занимаемых участниками в отношении поставленных задач.
                Как уже неоднократно упомянуто, сделанные на базе интернет-аналитики выводы будут в равной степени
                предоставлены сами себе. Вот вам яркий пример современных тенденций — глубокий уровень погружения
                создаёт предпосылки для своевременного выполнения сверхзадачи. И нет сомнений, что акционеры крупнейших
                компаний, инициированные исключительно синтетически, превращены в посмешище, хотя само их существование
                приносит несомненную пользу обществу.
              </p>
            </div>
            <div className='reviews-list__item'>
              <div className='reviews-list__item__info'>
                <img src={foto} alt='foto' title='foto' />
                <div className='reviews-list__item__text'>
                  <p>Екатерина Беляева</p>
                  <p>18 февраля 2018</p>
                </div>
              </div>
              <img className='rating-foto' src={rating} alt='rank' title='rank' />
            </div>
          </div>
          <button type='submit' className='btn btn-eval' data-test-id='button-rating'>
            Оценить книгу
          </button>
        </div>
      </div>
    </section>
  );
};
