import riotImg from '../../assets/riotGamesIcon.svg'
import valorantImg from '../../assets/valorantIcon.svg'
import profileImg from '../../assets/profileImage.svg'
import menuImg from '../../assets/profileImage.svg'

import { Container, Nav, NickName } from "./styles";

export function Header() {
  return (
    <Container>
      <Nav>

        <i className='nav'><img src={riotImg} alt="icone riot" /></i>
        <div className='range nav' />
        <i className='nav valorant'><img src={valorantImg} alt="icone valorant" /></i>



        <div className='nav'><a href="#">navegacao</a></div>
        <div className='nav'><a href="#">navegacao</a></div>
        <div className='nav'><a href="#">navegacao</a></div>
        <div className='nav'><a href="#">navegacao</a></div>
        <div className='nav'><a href="#">navegacao</a></div>
        <div className='profile'><i>
          <img src={profileImg} alt="foto de perfil" />
        </i><NickName>Aurelion</NickName>

        </div>


      </Nav>
      <div className="range2" />

    </Container>
  )
}