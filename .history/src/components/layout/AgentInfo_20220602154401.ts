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
    padding: 1rem;

    color: var(--white);
    background: var(--header-color);
    header {
      display: flex;
   
      justify-content: space-between;

      img {
        display: block;
      }

      strong {
        margin-top: 1rem;
        font-size: 1rem;
 
      }
    }
    p {
      font-family: 'Montserrat', sans-serif;
    }
  }

`