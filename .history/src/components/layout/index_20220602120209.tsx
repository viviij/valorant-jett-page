import agentsInCombatImg from '../../assets/agentInCombat.svg'
import { Credentials, Information } from './agentInfo';

import { Container } from "./styles";

export function Layout() {
  return (
    <Container>
      <body>
        <h1>Lore and Storyline</h1>
        <span>In Valorant lore, Jett is an agile agent expert in the art of evasion. She overwhelms enemies and wounds them with a blade without them knowing her position.</span>
        <span>Of Korean origin, Jett is an agile fighter who gives priority to movement. Her abilities focus on stealth with jumps that allow her to reach high ledges, teleportation, and smoke bombs. Her ultimate ability gives her kunaïs that inflict moderate to heavy damage, remaining very accurate even when she moves.</span>
        <span>There are a total of six groups of weapons that players will be able to purchase at the start of each round with each costing a different amount based on their power and weapon type. None of the weapons are tied exclusively to a specific character, so players will be able to use any of the weapons available in the FPS, no matter the character they are using for a particular match. </span>

        <div className="agents">
          <div className="image">
            <img src={agentsInCombatImg} alt="imagem do agente em combate" />
          </div>
          <div className="agentInfo">
            <h1>Agents Information</h1>
            <div className="information">
              <Credentials>
                <p>Name: </p>
              </Credentials>

              <Information>
                <p>Jett</p>
              </Information>
            </div>

            <div className="information">
              <Credentials>
                <p>Name: </p>
              </Credentials>

              <Information>
                <p>Jett</p>
              </Information>
            </div>

            <div className="information">
              <Credentials>
                <p>Name: </p>
              </Credentials>

              <Information>
                <p>Jett</p>
              </Information>
            </div>

            <div className="information">
              <Credentials>
                <p>Name: </p>
              </Credentials>

              <Information>
                <p>Jett</p>
              </Information>
            </div>


          </div>


        </div>

      </body>
    </Container>
  )

}