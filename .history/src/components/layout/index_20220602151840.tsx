import agentsInCombatImg from '../../assets/agentInCombat.svg'

import { Credentials, Information } from './agentInfo';
import { Container } from "./styles";




export function Layout() {
  return (
    <Container>
      <body>
        <h1>Lore and Storyline</h1>
        <p>In Valorant lore, Jett is an agile agent expert in the art of evasion. She overwhelms enemies and wounds them with a blade without them knowing her position.</p>
        <p>Of Korean origin, Jett is an agile fighter who gives priority to movement. Her abilities focus on stealth with jumps that allow her to reach high ledges, teleportation, and smoke bombs. Her ultimate ability gives her kunaïs that inflict moderate to heavy damage, remaining very accurate even when she moves.</p>
        <p>There are a total of six groups of weapons that players will be able to purchase at the start of each round with each costing a different amount based on their power and weapon type. None of the weapons are tied exclusively to a specific character, so players will be able to use any of the weapons available in the FPS, no matter the character they are using for a particular match. </p>

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
                <p>Country: </p>
              </Credentials>

              <Information>
                <p>South Korea</p>
              </Information>
            </div>

            <div className="information">
              <Credentials>
                <p>Abilities: </p>
              </Credentials>

              <Information>
                <p>Cloudburst, Updraft</p>
              </Information>
            </div>

            <div className="information">
              <Credentials>
                <p>Ultimate: </p>
              </Credentials>

              <Information>
                <p>Blade Storm</p>
              </Information>
            </div>


          </div>

          <div>
            <header>
              <img src="" alt="" />
              <strong>CLOUDBURST: </strong>
            </header>
            <p>Deploys a cloud of smoke that obstructs the enemy's vision. Press the skill button a second time to lift the cloud.</p>
          </div>
          <div>
            <header>
              <img src="" alt="" />
              <strong>UPDRAFT: </strong>
            </header>
            <p>Propels you through the air.</p>
          </div>
          <div>
            <header>
              <strong>TAILWIND: </strong>
              <img src="" alt="" />
            </header>
            <p>Dashes a short distance in the direction you want to go.</p>
          </div>
          <div>
            <header>
              <strong>BLADESTORM</strong>
              <img src="" alt="" />
            </header>
            <p>Automatically equips the agent with various throwing knives that one shot if you hit the head. Performing a kill restores all the knives.</p>
          </div>

        </div>


      </body>
    </Container>
  )

}