import styled from "styled-components";

export const Jett = styled.img`
  img {
    position: relative;
    transform: scaleX(-1);

  }
`

export const Credentials = styled.p`
  color: var(--grey);
  font-size: 0.77rem;
  font-family: 'Montserrat', sans-serif;
  margin-right: 1rem;
`

export const Information = styled.p`
  font-size: 0.77rem;
  font-family: 'Montserrat', sans-serif;
`

export const AgentInformation = styled.div`     
  padding: 5px;
  h1 {
    position: relative;
    font-family: 'Montserrat', sans-serif;
    height: 700;
    font-size: 1rem;
    color: rgba(31, 35, 38, 1);  
    margin: 1.5rem 0 2rem 23rem;      
  }
     
  img {
    padding: 5px;
    z-index: 2;
    position: relative;
    left:-50px;
    top: -190px;
    margin-bottom: -10rem;
  }      

  .information {
    position: relative;
    display: flex;
    margin-left: 23rem;
    margin-top: 1rem;
    
  }

  @media (max-width: 600px) {
    margin-left: 2rem;
    .information {
      display: flex;
      gap: 1rem;
      margin: 0;
      margin-top: 0.3rem;
    }

    h1 {
      position: relative;
      font-family: 'Montserrat', sans-serif;
      height: 700;
      font-size: 1rem;
      color: rgba(31, 35, 38, 1);  
      margin: 0;     
      margin-bottom: 1rem;
    }

    img {
      padding: 0;
      z-index: 2;
      position: relative;
      left:0;
      top: 0;
      margin-bottom: 0;

      height: 200px;
      width: 300px;
      overflow: hidden;
    }
  }
`

export const Abilities = styled.div`
  display: flex;
  .ability { 
      display: grid;
      grid-template-columns: repeat(1fr, 4);
      gap: 2rem;
    }

  div {
    z-index: 1;
    -webkit-box-shadow: 0px 0px 16px 0px rgba(0,0,0,0.48); 
    box-shadow: 0px 0px 16px 0px rgba(0,0,0,0.48);
    
    font-size: 0.8rem;
    
    
    border-right: 1px solid rgba(255, 70, 86, 1);
    align-content: flex-start;
    
    color: var(--white);
    background: var(--header-color);
    padding: 1rem 3rem 0 2rem;
    
    header {
      
      img {
        margin-top: 1rem;
        margin-bottom: 1rem;
        margin-left: 37%;
        display: inline-block;
      }

      strong {
        
        padding: 1.5rem;
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
  @media(max-width: 600px) {
    display: none;
  }
`