import riotImg from '../../assets/riotGamesIcon.svg'
import valorantImg from '../../assets/valorantIcon.svg'
import { Container } from "./styles";

export function Header() {
  return (
    <Container>
      <i><img src={riotImg} alt="icone riot" /></i>
      <div className='range' />
      <i><img src={valorantImg} alt="icone valorant" /></i>


      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>

      <button></button>

    </Container>
  )
}