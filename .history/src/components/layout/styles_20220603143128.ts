import styled from "styled-components";


export const Container = styled.body`
  position: absolute;

  width: 700px;
  height: 650px;
  
  margin: 6rem 0 0rem 5rem;

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
    -webkit-box-shadow: 0px 0px 16px 0px rgba(0,0,0,0.48); 
    box-shadow: 0px 0px 16px 0px rgba(0,0,0,0.48);
    position: absolute;

    background: var(--background-details-color);
    
    h1 {
      font-family: 'Montserrat', sans-serif;
      height: 700;
      font-size: 0.77rem;
      margin: 1rem 0 1rem 4.5rem;
    }

    >p{
      font-family: 'Montserrat', sans-serif;
      height: 500;
      font-size: 0.7rem;
      margin: 1rem 4.5rem;
    }

    .agents {
      .image {
        z-index: 2;
        position: relative;
        left:-50px;
      }

      .agentInfo {
        h1 {
          font-family: 'Montserrat', sans-serif;
          height: 700;
          font-size: 1rem;
          color: rgba(31, 35, 38, 1);
          position:relative;

          top: -250px;
          left: 222px;         
          padding: 1rem 5rem 4rem 5.9rem;
        }

        .information {
          display: flex;
          position: relative;
          top: -280px;
          left: 309px;
          margin: 1rem 1rem 1rem 5rem;

          margin-right: 1rem;

        }
      }

    }


  }

  @media (max-width: 600px) {
    .Jett, .jettLogo {
      display: none;
    }

    .agents {

    }
  }
`