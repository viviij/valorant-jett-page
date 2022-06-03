import riflesImg from '../../assets/waepon1.svg'
import smgsImg from '../../assets/waepon2.svg'
import sidearmImg from '../../assets/waepon3.svg'
import iconsImg from '../../assets/coins.svg'

import React from 'react'

import { Pagination } from 'swiper';
import { Container, Weapon } from './styles'
import { Swiper, SwiperSlide } from "swiper/react";

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
            <div className='weapon-1'>
              <header>
                <strong>RIFLES</strong>
                <p>GUARDIAN</p>
              </header>
              <img className='weaponImg' src={riflesImg} alt="imagem do rifle" />
              <p>2,700<strong className='value'>$</strong></p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='weapon-2'>
              <header>
                <strong>SMGS</strong>
                <p>SPECTRE</p>
              </header>
              <img className='weaponImg' src={smgsImg} alt="imagem da SMGS" />
              <p>1,600<strong className='value'>$</strong></p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='weapon-3'>
              <header>
                <strong>SIDEARM</strong>
                <p>SHRIFF</p>
              </header>
              <img className='weaponImg' src={sidearmImg} alt="imagem da SideArm" />
              <p className='valueWeapon'>900 <strong className='value'>$</strong></p>
            </div>
          </SwiperSlide>

        </Swiper>

      </Container>
    </Weapon>
  )
}