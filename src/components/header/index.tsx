import riotImg from '../../assets/riotGamesIcon.svg'
import valorantImg from '../../assets/valorantIcon.svg'
import profileImg from '../../assets/profileImage.svg'
import menuImg from '../../assets/menu.svg'

import '../../Js/menuNav'
import { Container, Nav, NickName } from "./styles";

export function Header() {
  return (
    <Container>
      <Nav>
        <nav>
          <ul>
            <li><i className='nav valorant'><img src={valorantImg} alt="icone valorant" /></i></li>
            <div className='range nav' />
            <li><i className='nav'><img src={riotImg} alt="icone riot" /></i></li>

            <li><a href="#">navegacao</a></li>
            <li><a href="#">navegacao</a></li>
            <li><a href="#">navegacao</a></li>
            <li><a href="#">navegacao</a></li>
            <li><a href="#">navegacao</a></li>
          </ul>

          <div className="profile">
            <li><img src={profileImg} alt="foto de perfil" /></li>
            <li><NickName>Aurelion</NickName></li>
          </div>
          <div className="toggle"><a href="#"><img src={menuImg} alt="icone do menu" /></a></div>
        </nav>

      </Nav>
      <div className="range2" />

    </Container>
  )
}