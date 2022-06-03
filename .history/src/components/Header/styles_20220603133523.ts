import styled from "styled-components";

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

    .nav {
      margin: 1rem auto;
    }

    .toggle {
      
      margin-top: 0.5rem;
    }

    .range {
      border-left: 1px solid rgba(255, 70, 86, 1);
      height: 1.6rem;
    }

    .profile {
      img {
        top: 0.5rem;
        position: relative;
        margin-left: 10rem;
        cursor: pointer;
      }
      }

`

export const NickName = styled.text`
  color: var(--text-header-color);
  font-family: 'Montserrat', sans-serif;
  height: 700;
  top: -0.3rem;
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
  max-width: 1360px;
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
      display: unset;
      position: absolute;
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