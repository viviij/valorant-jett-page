import styled from "styled-components";

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
      
      p {
        left: -5px;
        top: 100px;
        position: relative;
        font-family: 'Averia Libre', cursive;
        height: 800;
        font-size: 1rem;
        color: rgba(31, 35, 38, 1);
      }
    }
    p {
      font-family: 'Montserrat', sans-serif;
      font-size: 1.5rem;
      .value {
        font-family: 'Montserrat', sans-serif;
        color: rgba(0, 180, 116, 1);
      }
      
    }

    .weaponImg {
        
        position: relative;
        margin-left: 10rem;
        top: -80px;
        
    }
    .weapon-1{
      img {
        background: rgba(255, 0, 0, 0.5);
      }
      header strong{
        color:rgba(255, 0, 0, 0.5);
      }
    }
    .weapon-2{
      img {
        background: rgba(255, 13, 0, 0.2);
      }
      header strong {
        color: rgba(255, 13, 0, 0.2);
      }
    }

    .weapon-3{
      img {
        background: rgba(255, 56, 80, 0.4);
      }
      header strong{
        color: rgba(255, 56, 80, 0.4);
      }

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

export const Container = styled.div`
  width: 700px;
  top: -230px;
  margin-left: 9rem;
  margin-right: 9rem;
  position: relative;
  @media (max-width: 600px) {
    header {
      margin: 0;
      padding: 0;

    }
    .swiper-slide {
      padding: 1rem;
    }
  }
`