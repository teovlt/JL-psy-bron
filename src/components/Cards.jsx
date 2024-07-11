import React from 'react'
import card1 from '../assets/card1.jpg'
import card2 from '../assets/card2.svg'
import card3 from '../assets/card3.jpg'

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
              <h2>Reconnaître</h2>
              <div>
                <hr />
                <p>
                  Identifier et comprendre vos problèmes est la première étape vers la guérison. Jean-louis est là pour vous aider à
                  naviguer à travers les moments difficiles et à transformer la confusion et le stress en clarté et sérénité.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div>
            <div>
              <img src={card2} alt='card-hero-image' />
              <h2>Communiquer</h2>
              <div>
                <hr />
                <p>
                  Parler de vos soucis avec un professionnel ou un proche est crucial pour avancer. Votre psychologue se dédie à vous
                  accompagner pour surmonter le stress, l'anxiété et les défis émotionnels, afin de retrouver un équilibre mental et un
                  bien-être durable.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div>
            <div>
              <img src={card3} alt='card-hero-image' />
              <h2>S'en sortir</h2>
              <div>
                <hr />
                <p>
                  Chez nous, nous croyons fermement que chaque défi mental peut être surmonté avec le bon soutien et les bonnes ressources.
                  Ensemble, nous pouvons transformer les difficultés en opportunités de croissance et de bien-être.
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
