import styled from "styled-components";

export const Weapon = styled.div`
 
  div {

    -webkit-box-shadow: 0px 0px 16px 0px rgba(0,0,0,0.48); 
    box-shadow: 0px 0px 16px 0px rgba(0,0,0,0.48);
    top: -230px;
    font-size: 0.8rem;
    position: absolute;
    display: flex;

    grid-template-columns: repeat(1fr, 4);
    border-right: 1px solid rgba(255, 70, 86, 1);
    align-content: flex-start;

    color: var(--white);
    background: var(--header-color);
    padding: 1rem 3rem 0 2rem;
    
  }
`