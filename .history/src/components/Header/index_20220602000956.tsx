import riotImg from '../../assets/riotGamesIcon.svg'
import valorantImg from '../../assets/valorantIcon.svg'
import arrowImg from '../../assets/lowArrow.svg'
import profileImg from '../../assets/profileImage.svg'

import { Container } from "./styles";

export function Header() {
  return (
    <Container>
      <i><img src={riotImg} alt="icone riot" /></i>
      <div className='range' />
      <i><img src={valorantImg} alt="icone valorant" /></i>


      <ul>
        <li><a href="#">game</a></li>
        <li><a href="#">champions</a></li>
        <li>
          <a href="#">news</a>
          <i><img src={arrowImg} alt="seta para baixo" /></i>
        </li>
        <li><a href="#">patch notes</a> </li>
        <li>
          <a href="#">discover</a>
          <i><img src={arrowImg} alt="seta para baixo " /></i>
        </li>
        <li><a href="#">esports</a></li>
        <li><a href="#">universe</a></li>
        <li><a href="#">universe</a></li>
        <li><a href="#"></a>support</li>
        <li>
          <i className='profile'><img src={profileImg} alt="Foto de perfil" /></i>
          <span>AndresitosGameplay</span>
        </li>
      </ul>

      <button></button>

    </Container>
  )
}