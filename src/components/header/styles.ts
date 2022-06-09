import styled from "styled-components";

export const Nav = styled.div`
    position: absolute;
    margin-left: 3rem;
    

    nav ul, .logo, .nav, .profile{
      display: flex;
      align-items: center;
    }

    nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
    }

    .profile {
      justify-content: end;
    }
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
  max-width: 100vw;
  z-index: 10;
  position: fixed;
  max-height: 60px;
  background-color: var(--header-color);
  width: 100%;
  height: 100%;
  @media (max-width: 600px) {
    max-width: 600px;
    .nav {
      display: none;
    }
    .toggle {
      margin: 1rem 1rem 1rem 18rem;
      display: unset;
      position: relative;
      
    }
    .valorant {
      display: unset;
      img {
        top: -5px;
        left: -45px;
        position: relative;
        height: 2.25rem;
        width: 2.25rem;
      }
    }
    .range {
      display: unset;
      position: relative;
      left: 2.0625rem;
      border-right: 1px solid;
      height: 1.6rem;
    }
    .profile {
      position: absolute;
      
      left: -6.375rem;
      justify-content: flex-start;
    }
  }

`;