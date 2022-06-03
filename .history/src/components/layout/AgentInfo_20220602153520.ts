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
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -10rem;

  div {
    background: black;
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: black;

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      strong {
        margin-top: 1rem;
        font-size: 2rem;
        line-height: 3rem;
      }
    }
  }

`