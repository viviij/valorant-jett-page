import { createGlobalStyle } from 'styled-components'



export const GlobalStyle = createGlobalStyle`
  :root {
    //COLOR
    --background-color: rgba(255, 70, 86, 1);
    --header-color: rgba(31, 35, 38, 1);
    --text-header-color: rgba(248, 248, 248, 1);
    --background-details-color: rgba(248, 248, 248, 1);
    --grey: rgba(196, 196, 196, 1);
    --white: rgba(255, 255, 255, 1);
    //FONT
    --font-page: 'Montserrat', sans-serif;
  }

  * {
    background-image: url('../assets/jettLogo.svg');
    background-position: right center;
    background-repeat: no-repeat;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
    background: black;
  }

  body, html, :root {
    background: var(--background-color);
    background-position: right center;
    background-size: 400 500;
    background-repeat: no-repeat;
    max-height: 100vh;
    max-width: 100vw;

    height: 100%;
    width: 100%;
  }

  *, button, form {
    border: 0;
    background: none;
  }

  a {
    font-family: 700 1rem 'Montserrat', sans-serif;
  }
  

  @media (min-width: 1200px) {
    font-size: 4.9375rem;
  }

  @media (min-width: 1000px) {
    font-size: 0.875rem;
  }

  @media (min-width: 800px) {
    font-size: 0.8125rem;
  }
`