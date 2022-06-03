import agentsInCombatImg from '../../assets/agentInCombat.svg'
import cloudBurstImg from '../../assets/cloudBurst.svg'
import upDraftImg from '../../assets/upDraft.svg'
import tailWindImg from '../../assets/tailWind.svg'
import bladeStormImg from '../../assets/bladeStorm.svg'
import jettImg from './jett.png'


import { Abilities, Credentials, Information } from './agentInfo';
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
            <img src={jettImg} alt="" />


            <Abilities>
              <div>
                <header>
                  <img src={cloudBurstImg} alt="Icone da habilidade cloud burst" />
                  <strong>CLOUDBURST: </strong>
                </header>
                <p>Deploys a cloud of smoke that obstructs the enemy's vision. Press the skill button a second time to lift the cloud.</p>

              </div>
              <div>
                <header>
                  <img src={upDraftImg} alt="Icone da habilidade up draft" />
                  <strong>UPDRAFT: </strong>
                </header>
                <p>Propels you through the air.</p>
              </div>
              <div>
                <header className='tailWind'>
                  <img src={tailWindImg} alt="Icone da gabilidade tail wind" />
                  <strong>TAILWIND: </strong>
                </header>
                <p>Dashes a short distance in the direction you want to go.</p>
                {/* Um verdadeiro misterio da ciencia pq ele ta acima de todos */}
              </div>

              <div>
                <header>
                  <img src={bladeStormImg} alt="Icone da habilidade blade storm" />
                  <strong>BLADESTORM: </strong>
                </header>
                <p>Automatically equips the agent with various throwing knives that one shot if you hit the head. Performing a kill restores all the knives.</p>
              </div>
            </Abilities>
          </div>


        </div>


      </body>
    </Container>
  )

}