import styled from "styled-components";

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
  grid-template-columns: repeat(3, 1fr);

  div {
    font-size: 0.8rem;
    

    color: var(--white);
    background: var(--header-color);
    header {
    
      text-align: center;
      align-content: center;
      justify-content: space-between;

      img {
        margin-top: 1rem;
        margin-bottom: 1rem;
        margin-left: 25%;

      
      }

      strong {

        font-family: 'Montserrat', sans-serif;
        height: 700;
        font-size: 1rem;
 
      }
    }
    p {
      padding: 1.5rem;
      font-family: 'Montserrat', sans-serif;

    }
  }

`