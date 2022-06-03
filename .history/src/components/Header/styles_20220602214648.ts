import styled from "styled-components";



export const Container = styled.header`
  z-index: 10;
  position: fixed;
  max-height: 60px;
  background-color: var(--header-color);
  width: 100%;
  height: 100%;

  .nav {
    margin: 1rem auto;
  }

  .range {
    border-left: 1px solid white;
    height: 1.6rem;
  }

`;

export const Nav = styled.div`
    
    display:flex;
    gap: 3rem;
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
      img {
        top: 0.5rem;
        position: relative;
        margin-left: 40rem;
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

  
`