import styled from "styled-components";

export const Container = styled.div`
  top: -230px;
  margin-left: 19rem;
  position: relative;
`

export const Weapon = styled.div`
  div {
   
    header {

    }
    .swiper {      
      padding: 3rem 0;
      width: 100%;
      height: 100%;
    }

    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;

      /* Center slide text vertically */
      -webkit-box-shadow: 0px 0px 16px 0px rgba(0,0,0,0.48); 
       box-shadow: 0px 0px 16px 0px rgba(0,0,0,0.48);
    
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;

      background: var(--header-color);
      padding: 2rem 3rem 1rem 3rem;
      border-radius: 0.25rem;
      
    }

    .swiper-slide img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      
    }
    
   
  }
`