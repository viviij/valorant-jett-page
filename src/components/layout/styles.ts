import styled from "styled-components";


export const Container = styled.body`
  position: absolute;

  width: 700px;
  height: 350px;
  
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
    margin: 6rem 1rem 2rem 5rem;
    width: 300px;

    position: absolute;
    .Jett, .jettLogo {
      display: none;
    }
    .mobile {
      margin: 3rem;
    }
    .desktop {
      display: none;
    }
    body {
      .agents {
        .image{
          filter: opacity(0);
          visibility: hidden;
        }
        .agentInfo {
          h1 {
            
            z-index: 7;
            position: absolute;
            top: 260px;
            left: -116px;       
            
          }
          .information {
            
            z-index: 5;
            display: flex;
            position: relative;
            top: -110px;
            left: -30px;
            
            margin: 1rem 1rem 1rem 5rem;
  
            margin-right: 1rem;
            }
          }      
        }
      } 
  }
`