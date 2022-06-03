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



        <div><a href="#">navegacao</a></div>
        <div><a href="#">navegacao</a></div>
        <div><a href="#">navegacao</a></div>
        <div><a href="#">navegacao</a></div>
        <div><a href="#">navegacao</a></div>
        <div><a href="#">navegacao</a></div>


        <button></button>

      </Nav>

    </Container>
  )
}