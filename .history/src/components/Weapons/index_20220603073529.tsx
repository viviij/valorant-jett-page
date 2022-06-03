import riflesImg from '../../assets/waepon1.svg'
import smgsImg from '../../assets/waepon2.svg'
import sidearmImg from '../../assets/waepon3.svg'
import iconsImg from '../../assets/coins.svg'

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
          <SwiperSlide><div>
            <header>
              <img src={riflesImg} alt="Icone da habilidade blade storm" />
              <strong>BLADESTORM: </strong>
            </header>
            <p>Automatically equips the agent with various throwing knives that one shot if you hit the head. Performing a kill restores all the knives.</p>
          </div></SwiperSlide>
          <SwiperSlide><div>
            <header>
              <img src={sidearmImg} alt="Icone da habilidade blade storm" />
              <strong>BLADESTORM: </strong>
            </header>
            <p>Automatically equips the agent with various throwing knives that one shot if you hit the head. Performing a kill restores all the knives.</p>
          </div></SwiperSlide>
          <SwiperSlide><div>
            <header>
              <strong>RIFLES</strong>
              <p>GUARDIAN</p>
            </header>
            <img src={smgsImg} alt="Icone da habilidade blade storm" />
            <p>2700

            </p>
          </div></SwiperSlide>

        </Swiper>
      </>

    </Weapon>
  )
}