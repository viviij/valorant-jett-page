import riotImg from '../../assets/riotGamesIcon.svg'
import valorantImg from '../../assets/valorantIcon.svg'
import arrowImg from '../../assets/lowArrow.svg'
import profileImg from '../../assets/profileImage.svg'

import { Container, Nav } from "./styles";

export function Header() {
  return (
    <Container>
      <Nav>
        <i><img src={riotImg} alt="icone riot" /></i>
        <div className='range' />
        <i><img src={valorantImg} alt="icone valorant" /></i>


        <ul>
          <div><i>navegacao</i></div>
          <div><i>navegacao</i></div>
          <div><i>navegacao</i></div>
          <div><i>navegacao</i></div>
          <div><i>navegacao</i></div>
          <div><i>navegacao</i></div>
        </ul>

        <button></button>

      </Nav>

    </Container>
  )
}