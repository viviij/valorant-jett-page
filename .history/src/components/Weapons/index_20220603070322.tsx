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
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </>
      <div>
        <header>
          <img src={riflesImg} alt="Icone da habilidade blade storm" />
          <strong>BLADESTORM: </strong>
        </header>
        <p>Automatically equips the agent with various throwing knives that one shot if you hit the head. Performing a kill restores all the knives.</p>
      </div>
      <div>
        <header>
          <img src={sidearmImg} alt="Icone da habilidade blade storm" />
          <strong>BLADESTORM: </strong>
        </header>
        <p>Automatically equips the agent with various throwing knives that one shot if you hit the head. Performing a kill restores all the knives.</p>
      </div>
      <div>
        <header>
          <img src={smgsImg} alt="Icone da habilidade blade storm" />
          <strong>BLADESTORM: </strong>
        </header>
        <p>Automatically equips the agent with various throwing knives that one shot if you hit the head. Performing a kill restores all the knives.</p>
      </div>
    </Weapon>
  )
}