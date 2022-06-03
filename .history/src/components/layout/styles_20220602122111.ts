import styled from "styled-components";

export const Container = styled.body`
  position: absolute;
  max-height: 440px;
  max-width: 700px;


  
  width: 700px;
  height: 650px;
  top: 100px;
  margin: 3rem 0 3rem 6rem;
  
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
      margin: 0;
      .image {
        margin: 0;
        padding: 0;

        position: relative;
        left:-50px;
      }

      .agentInfo {
        h1 {
          font-family: 'Monstserrat', sans-serif;
          height: 500;
          font-size: 1rem;

          position:relative;
          top: -250px;
          left: 300px;
         
          padding: 1rem 5rem 4rem 1rem;
          

          color: rgba(31, 35, 38, 1);
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