import styled from "styled-components";

export const Container = styled.header` 
  position: absolute;
  max-height: 40px;

  width: 100%;
  height: 100%;

  margin: 0 auto;
 
  background: var(--background-color);

  
`;

export const Nav = styled.body`
  
  i{
    position: absolute;

  }

  ul {
    li{

      display:flex;
      justify-content: space-between;
      position: relative;
      margin-left: 3rem;
    }
  }
  
`