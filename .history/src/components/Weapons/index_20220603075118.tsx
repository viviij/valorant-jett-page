import riflesImg from '../../assets/waepon1.svg'
import smgsImg from '../../assets/waepon2.svg'
import sidearmImg from '../../assets/waepon3.svg'
import iconsImg from '../../assets/coins.svg'

import React from 'react'

import { Pagination } from 'swiper';
import { Container, Weapon } from './styles'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export function Weapons() {
  return (
    <Weapon>
      <Container>
        <Swiper
          pagination={{
            dynamicBullets: true
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div>
              <header>
                <strong>RIFLES</strong>
                <p>GUARDIAN</p>
              </header>
              <img src={riflesImg} alt="imagem do rifle" />
              <p>2,700</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div>
              <header>
                <strong>SMGS</strong>
                <p>SPECTRE</p>
              </header>
              <img src={smgsImg} alt="Icone da habilidade blade storm" />
              <p>1,600</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div>
              <header>
                <strong>SIDEARM</strong>
                <p>SHRIFF</p>
              </header>
              <img src={sidearmImg} alt="Icone da habilidade blade storm" />
              <p>900</p>
            </div>
          </SwiperSlide>

        </Swiper>
        <Container />

    </Weapon>
  )
}