import React from 'react'
import card1 from '../assets/card1.svg'
import card2 from '../assets/card2.svg'
import card3 from '../assets/card3.svg'

const Card = () => {
  return (
    <>
      <section></section>
      <section id='work'>
        <h1>3 Etapes</h1>

        <div>
          <div>
            <div>
              <img src={card1} alt='card-hero-image' />
              <h2>Adolescents</h2>
              <div>
                <hr />
                <p>
                  Le psychologue aide les adolescents à comprendre et à gérer leurs émotions, à surmonter les défis scolaires et sociaux, et
                  à naviguer dans cette période de transition avec confiance.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div>
            <div>
              <img src={card2} alt='card-hero-image' />
              <h2>Adultes</h2>
              <div>
                <br />
                <br />
                <hr />
                <p>
                  Pour les adultes, le psychologue offre un espace de soutien pour explorer les sources de stress et d'anxiété, améliorer
                  les relations interpersonnelles, et développer des stratégies de gestion efficaces pour un bien-être mental durable.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div>
            <div>
              <img src={card3} alt='card-hero-image' />
              <h2>Couples</h2>
              <br />
              <br />
              <br />
              <div>
                <hr />
                <p>
                  En tant que couple, vous pouvez bénéficier de l'accompagnement d'un psychologue pour améliorer la communication, renforcer
                  la connexion émotionnelle, et résoudre les conflits de manière constructive afin de favoriser une relation harmonieuse.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Card
