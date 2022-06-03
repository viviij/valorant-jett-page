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