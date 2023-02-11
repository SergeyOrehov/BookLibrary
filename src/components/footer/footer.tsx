import facebook from 'assets/icon-facebook.png';
import instagram from 'assets/icon-instagram.png';
import vk from 'assets/icon-vk.png';
import linkedin from 'assets/icon-linkedin.png';

import './footer.scss';

export const Footer = () => (
  <footer className='footer'>
    <div className='container'>
      <p>© 2020-2023 Cleverland. Все права защищены.</p>
      <ul className='social'>
        <li className='social__item'>
          <a href='https://www.facebook.com'>
            <img src={facebook} alt='facebook' title='facebook' />
          </a>
        </li>
        <li className='social__item'>
          <a href='https://www.instagram.com/'>
            <img src={instagram} alt='instagram' title='instagram' />
          </a>
        </li>
        <li className='social__item'>
          <a href='https://vk.com/'>
            <img src={vk} alt='vk' title='vk' />
          </a>
        </li>
        <li className='social__item'>
          <a href='https://www.linkedin.com/'>
            <img src={linkedin} alt='linkedin' title='linkedin' />
          </a>
        </li>
      </ul>
    </div>
  </footer>
);
