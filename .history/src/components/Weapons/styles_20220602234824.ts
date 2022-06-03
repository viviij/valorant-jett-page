import styled from "styled-components";

export const Weapon = styled.div`
  position: absolute;
  header {
    font-size: 0.8rem;
    position: relative;
    display: grid;

    grid-template-columns: repeat(1fr, 4);
    border-right: 1px solid rgba(255, 70, 86, 1);
    align-content: flex-start;

    color: var(--white);
    background: var(--header-color);
    padding: 1rem 3rem 0 2rem;
  }
`