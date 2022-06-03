import styled from "styled-components";

export const Container = styled.div`
  width: 700px;
  top: -230px;
  margin-left: 9rem;
  margin-right: 9rem;
  position: relative;
`

export const Weapon = styled.div`
  div {
   
    header {
      margin: 1rem auto;
      padding: 0;      
      display: grid;
      justify-content: left;
      margin-right: 30rem;
      strong {
        font-family: 'Averia Libre', cursive;
        height: 800;
        font-size: 2rem;
        color: var(--grey);
        position: relative;
        top: 100px;
        margin-bottom: 1rem;
      }
      
     
    }

    .weaponImg {
      
        position: relative;
        margin-left: 10rem;
      
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

      background: rgba(248, 248, 248, 1);
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