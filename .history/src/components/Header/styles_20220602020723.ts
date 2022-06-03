import styled from "styled-components";

export const Container = styled.header` 
  position: absolute;
  max-height: 40px;

  width: 100%;
  height: 100%;

  margin: 1rem auto;
 


  .riot {
    font-size: 1rem;

  }

  .range {
    border-left: 1px solid white;
    height: 1.8rem;
  }

  .range2 {
    margin-top: 2rem;
    border-bottom: 1px solid white;
  }


  
`;

export const Nav = styled.div`
    
    display:flex;
    gap: 1rem;
    justify-content: space-between;
    position: absolute;
    margin-left: 3rem;

    a {
      font-family:'Montserrat', sans-serif;
      font-weight: 700;
      margin: 1.4rem;
      text-decoration: none;
      color: var(--text-header-color);
      transition: 0.4s;
      &:hover{
        filter: opacity(0.9);
        border-bottom: 1px solid white;
      }
    }

    .profile {
      i {
 
      }

    }

  
`