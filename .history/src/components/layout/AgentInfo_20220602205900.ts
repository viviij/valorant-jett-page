import styled from "styled-components";

export const Jett = styled.img`
  img {
    position: relative;
    transform: scaleX(-1);

  }
`

export const Credentials = styled.p`
  color: var(--grey);
  font-size: 0.77rem;
  font-family: 'Montserrat', sans-serif;
  margin-right: 1rem;
`

export const Information = styled.p`
  font-size: 0.77rem;
  font-family: 'Montserrat', sans-serif;

`

export const Abilities = styled.div`
  display: flex;

  div {
    z-index: 1;
    -webkit-box-shadow: 0px 0px 16px 0px rgba(0,0,0,0.48); 
    box-shadow: 0px 0px 16px 0px rgba(0,0,0,0.48);
    top: -16.5625rem;  
    font-size: 0.8rem;
    position: relative;
    display: grid;
    grid-template-columns: repeat(1fr, 4);
    border-right: 1px solid black;
    align-content: flex-start;

    color: var(--white);
    background: var(--header-color);
    padding: 1rem 3rem 3rem 2rem;
    header {
      
      img {
        margin-top: 1rem;
        margin-bottom: 1rem;
        margin-left: 37%;
        display: inline-block;
      }

      strong {
        
        padding: 1.5rem;
        font-family: 'Montserrat', sans-serif;
        height: 700;
        font-size: 1rem;
        margin-right: 1rem;
        margin-left: 1rem;
      }
    }
    p {
      margin-left: 1rem;
      padding: 1.5rem;
      font-family: 'Montserrat', sans-serif;

    }
   
  }

`