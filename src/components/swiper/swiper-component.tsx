import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './styles.scss';
// import required modules
import SwiperCore, { FreeMode, Navigation, Thumbs } from 'swiper';

interface Styles {
  first: string;
}

export const SwiperComponent: React.FC<Styles> = (props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();
  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation, Thumbs]}
        grabCursor={true}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        className='vehicle-image-slider'
      >
        <SwiperSlide>
          <img src={props.first} alt='img' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={props.first} alt='img' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={props.first} alt='img' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={props.first} alt='img' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={props.first} alt='img' />
        </SwiperSlide>
      </Swiper>

      <Swiper
        spaceBetween={50}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className='mySwiper'
        onSwiper={setThumbsSwiper}
      >
        <SwiperSlide data-test-id='slide-mini'>
          <img src={props.first} alt='img' />
        </SwiperSlide>
        <SwiperSlide data-test-id='slide-mini'>
          <img src={props.first} alt='img' />
        </SwiperSlide>
        <SwiperSlide data-test-id='slide-mini'>
          <img src={props.first} alt='img' />
        </SwiperSlide>
        <SwiperSlide data-test-id='slide-mini'>
          <img src={props.first} alt='img' />
        </SwiperSlide>
        <SwiperSlide data-test-id='slide-mini'>
          <img src={props.first} alt='img' />
        </SwiperSlide>
        <SwiperSlide data-test-id='slide-mini'>
          <img src={props.first} alt='img' />
        </SwiperSlide>
        <SwiperSlide data-test-id='slide-mini'>
          <img src={props.first} alt='img' />
        </SwiperSlide>
        <SwiperSlide data-test-id='slide-mini'>
          <img src={props.first} alt='img' />
        </SwiperSlide>
        <SwiperSlide data-test-id='slide-mini'>
          <img src={props.first} alt='img' />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
