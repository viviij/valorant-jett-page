import riflesImg from '../../assets/waepon1.svg'
import smgsImg from '../../assets/waepon2.svg'
import sidearmImg from '../../assets/waepon3.svg'
import { Weapon } from './styles'

export function Weapons() {
  return (
    <Weapon>
      <div>
        <header>
          <img src={riflesImg} alt="Icone da habilidade blade storm" />
          <strong>BLADESTORM: </strong>
        </header>
        <p>Automatically equips the agent with various throwing knives that one shot if you hit the head. Performing a kill restores all the knives.</p>
      </div>
      <div>
        <header>
          <img src={sidearmImg} alt="Icone da habilidade blade storm" />
          <strong>BLADESTORM: </strong>
        </header>
        <p>Automatically equips the agent with various throwing knives that one shot if you hit the head. Performing a kill restores all the knives.</p>
      </div>
      <div>
        <header>
          <img src={smgsImg} alt="Icone da habilidade blade storm" />
          <strong>BLADESTORM: </strong>
        </header>
        <p>Automatically equips the agent with various throwing knives that one shot if you hit the head. Performing a kill restores all the knives.</p>
      </div>
    </Waepon>
  )
}