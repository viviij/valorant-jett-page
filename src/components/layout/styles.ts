import styled from "styled-components";


export const Container = styled.body`
  position: absolute;

  width: 700px;  
  margin: 96px 0 48px 80px;

  .Jett {
    z-index: 1;
   position: absolute;
    transform: scaleX(-1);
    align-content: flex-end;
    align-items: flex-end;
    top: -50px;
    left: 550px;   
  }

  .jettLogo {
  
    z-index: 0;
    position: absolute;
    left: 880px;
    top: 120px;
    display: flex;
    letter-spacing: 0.1em;

    text-shadow: -1px -1px 0 rgba(255, 255, 255, 1), 1px -1px 0 rgba(255, 255, 255, 1), -1px 1px 0 rgba(255, 255, 255, 1), 1px 1px 0 rgba(255, 255, 255, 1);
    color: var(--background-color);

    opacity: 0.6;
    font-size: 7rem;
    font-family: 'Averia Libre', cursive;
    height: 700;
    
    transform: rotate(90deg);
  }
  
  body {
    .pato {
      -webkit-box-shadow: 0px 0px 16px 0px rgba(0,0,0,0.48); 
      box-shadow: 0px 0px 16px 0px rgba(0,0,0,0.48);
      background: var(--background-details-color);

      h1 {
        font-family: 'Montserrat', sans-serif;
        height: 700;
        font-size: 0.77rem;  
        
      }

      .title {
        
        margin-left: 4.5rem;
      }

      >p{
        font-family: 'Montserrat', sans-serif;
        height: 500;
        font-size: 0.7rem;
        margin: 1rem 4.5rem;
      }    
    }
  }

  @media (max-width: 600px) {
    margin: 96px 0 48px 40px;
    max-width: 100px;

    .Jett, .jettLogo {
      display: none;
    }
    
    .desktop {
      display: none;
    }
    body {
      margin: 0;
      padding: 0;
      max-width: 300px;
      width: 300px;

      .pato {
        .title {
          margin: 0;
          margin-left: 2.3rem;
          padding: 1rem 0 1rem 0;
        }

        >p {
          margin: 0;
          margin-left: 2.4rem;
          margin-bottom: 1rem;
        }
      }
        
    }
      
  }
`