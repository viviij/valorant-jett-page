import riotImg from '../../assets/riotGamesIcon.svg'
import valorantImg from '../../assets/valorantIcon.svg'
import arrowImg from '../../assets/lowArrow.svg'
import profileImg from '../../assets/profileImage.svg'

import { Container, Nav, NickName } from "./styles";

export function Header() {
  return (
    <Container>
      <Nav>
        <i className='riot'><img src={riotImg} alt="icone riot" /></i>
        <div className='range' />
        <i className='valorant'><img src={valorantImg} alt="icone valorant" /></i>



        <div><a href="#">navegacao</a></div>
        <div><a href="#">navegacao</a></div>
        <div><a href="#">navegacao</a></div>
        <div><a href="#">navegacao</a></div>
        <div><a href="#">navegacao</a></div>
        <div className='profile'><i>
          <img src={profileImg} alt="foto de perfil" />
        </i><NickName>Aurelion</NickName></div>


        <button></button>

      </Nav>
      <div className="range2" />

    </Container>
  )
}