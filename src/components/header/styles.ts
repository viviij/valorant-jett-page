import styled from "styled-components";

export const Nav = styled.header`
    position: absolute;
    margin: 0 2rem;
    

    
`

export const NickName = styled.text`
  color: var(--text-header-color);
  font-family: 'Montserrat', sans-serif;
  height: 700;

  position: relative;

  transition: 0.5s;
  cursor: pointer;
  &:hover {
    height: 800;
    filter: opacity(0.5);
  }
  @media (max-width: 600px) {
    font-size: 0.8rem;
    position: absolute;
    margin: 1.5rem 1rem 1rem 1rem;
  }
  
`

export const Container = styled.header`
  z-index: 10;
  position: fixed;
  background-color: var(--header-color);
  max-width: 100vw;
  max-height: 60px;
  width: 100%;
  height: 100%;
  
  transition: 0.5s;
  nav, nav ul, .logo, .nav, .profile, .toggle{
    margin-top: 0.5rem;
    display: flex;
    align-items: center;
    align-content: center;

  }

  nav ul .toggle div {
    display: flex;
    justify-content: flex-end;
  }

  nav ul {
    justify-content: space-between;
    gap: 3rem;
  }

  nav ul li .title{
    margin-left: 2rem;
  }

  .toggle {
    display: flex;
    position: relative;
    margin-left: 0%;

  }

  .profile {
    justify-content: end;
  }
  @media (max-width: 600px) {
    nav ul{
      display: none;
    }

    .range {
      position: relative;
      border: 1px solid white;
      height: 30px;
    }

    nav .toggle {
      display: flex;   
      margin-left: 60%;
      cursor: pointer;
      
    }
    
  }

`;