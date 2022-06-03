import styled from "styled-components";

export const Container = styled.header` 
  position: absolute;
  max-height: 40px;

  width: 100%;
  height: 100%;

  margin: 0 auto;
 
  background: var(--background-color);

  .riot {
    font-size: 1rem;
    margin: 1rem;
    padding: 1rem;
  }


  
`;

export const Nav = styled.div`
    display:flex;
    gap: 1rem;
    justify-content: space-between;
    position: absolute;
    margin-left: 3rem;
  
  
  
`