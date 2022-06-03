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

  div {
    top: -265px;  
    font-size: 0.8rem;
    position: relative;
    display: grid;
    grid-template-columns: repeat(1fr, 3);
    border-right: 1px solid black;
    align-content: flex-start;

    color: var(--white);
    background: var(--header-color);
    header {
      
      img {
        margin-top: 1rem;
        margin-bottom: 1rem;
        margin-left: 25%;
        display: inline-block;
      }

      strong {

        font-family: 'Montserrat', sans-serif;
        height: 700;
        font-size: 1rem;
        margin-right: 1rem;
        margin-left: 1rem;
      }
    }
    p {
      margin-left: 1rem;

      font-family: 'Montserrat', sans-serif;

    }
   
  }

`