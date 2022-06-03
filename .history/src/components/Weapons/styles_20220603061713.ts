import styled from "styled-components";

export const Weapon = styled.div`
 
  div {
    -webkit-box-shadow: 0px 0px 16px 0px rgba(0,0,0,0.48); 
    box-shadow: 0px 0px 16px 0px rgba(0,0,0,0.48);
    font-size: 0.8rem;
    
    display: flex;
    position: relative;
    grid-template-columns: repeat(1fr, 4);

    color: var(--white);
    background: var(--header-color);
 
    header {
      
      img {
        margin-top: 1rem;
        margin-bottom: 1rem;
        margin-left: 37%;
      }

      strong {       
        font-family: 'Montserrat', sans-serif;
        height: 700;
        font-size: 1rem;
        margin-right: 1rem;
        margin-left: 1rem;
      }
    }
    p {
      margin-left: 1rem;
      padding: 1.5rem;
      font-family: 'Montserrat', sans-serif;
    } 
  }
`