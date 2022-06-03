import riflesImg from '../../assets/waepon1.svg'
import smgsImg from '../../assets/waepon2.svg'
import sidearmImg from '../../assets/waepon3.svg'

import React from 'react'

import { Pagination } from 'swiper';
import { Weapon } from './styles'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export function Weapons() {
  return (
    <Weapon>
      <>
        <Swiper
          pagination={{
            dynamicBullets: true
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide><p>pato</p></SwiperSlide>
          <SwiperSlide><p>pato</p></SwiperSlide>
          <SwiperSlide><p>pato</p></SwiperSlide>

        </Swiper>
      </>

    </Weapon>
  )
}