import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    //COLOR
    --background-color: rgba(255, 70, 86, 1);
    --header-color: rgba(31, 35, 38, 1);
    --text-header-color: rgba(248, 248, 248, 1);
    --background-details-color: rgba(248, 248, 248, 1);
    --grey: rgba(196, 196, 196, 1);
    //FONT
    --font-page: 'Montserrat', sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, -ms-hyphenate-limit-chars, :root {
    background: var(--background-color);
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

  .swiper {
  width: 100%;
  height: 100%;
  }

  .swiper-slide {
 
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */

  }

  .swiper-slide img {
    display: flex;
    width: 100%;
    height: 100%;
    object-fit: contain;
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