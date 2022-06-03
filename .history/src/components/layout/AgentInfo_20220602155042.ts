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
    
   
      justify-content: space-between;

      img {
        margin-left: 20%;
        display: inline-block;
        text-align: center;
        justify-content: center;
      }

      strong {padding: 1.5rem;
        margin-top: 2rem;
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