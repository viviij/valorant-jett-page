import styled from "styled-components";


export const Container = styled.body`
  position: absolute;

  width: 700px;
  height: 650px;
  
  margin: 6rem 0 3rem 5rem;

  .Jett {
    z-index: 1;
   position: absolute;
    transform: scaleX(-1);
    align-content: flex-end;
    align-items: flex-end;
    top: -50px;
    left: 520px;   
  }

  .jettLogo {
    z-index: 1;
    font-size: 4rem;
    position: relative;
    font-family: 'Montserrat', sans-serif;
    height: 700;
    transform: scaleY(1.5);
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


`