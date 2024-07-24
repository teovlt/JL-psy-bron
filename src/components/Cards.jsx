import React from 'react'
import card1 from '../assets/card1.svg'
import card3 from '../assets/card3.svg'

const Card = () => {
  return (
    <>
      <section className='pt-20'></section>
      <section id='work'>
        {/* <h1 className='pb-10 flex-initial p-2 text-center text-3xl uppercase tracking-wider underline underline-offset-3 decoration-primary'>
          Le patient
        </h1> */}
        <div className='card-container flex justify-center items-center mr-20'>
          <div className='card h-520 w-400 perspective-1000'>
            <div className='card-content text-center transform-style-preserve-3d transition-transform duration-800'>
              <img src={card1} alt='card-hero-image' className='w-full h-200 pt-40 clip-path-top-rounded' />
              <div className='card-text h-320 overflow-y-auto px-4'>
                <h2>Adolescents</h2>
                <div className='mt-48'>
                  <p className='text-gray-700 pt-96 text-justify'>
                    L’adolescence est une phase du développement humain physique et mental qui se déroule de la période de la puberté à
                    l’âge adulte. Cette phase est traversée de changements physiques : poussée hormonale, croissance, évolution des
                    caractères sexuels, alimentation, sommeil… et psychologiques au niveau des émotions, des comportements, des relations…
                    C’est une période de désorganisation – réorganisation sur plusieurs années. Elle peut susciter des malaises et des
                    questionnements psychiques de durées et d’expression très variées. Les adolescents peuvent venir consulter avec leurs
                    parents ou seuls. Seuls, s’ils sont mineurs le consentement de leurs parents est nécessaire. Le travail psychologique
                    avec les adolescents comme avec les adultes est un travail de parole. Il peut parfois s’appuyer sur des médiations
                    facilitant l’expression : écriture, dessin, photo langage. Après un premier entretien de prise de contact, le travail
                    peut se poursuivre sous forme d’entretiens ponctuels ou réguliers ou bien de psychothérapie.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='card-container flex justify-center items-center'>
          <div className='card h-520 w-400 perspective-1000'>
            <div className='card-content text-center transform-style-preserve-3d transition-transform duration-800'>
              <img src={card3} alt='card-hero-image' className='w-full h-200 pt-40 clip-path-top-rounded' />
              <div className='card-text h-320 overflow-y-auto px-4'>
                <div className='flex items-center justify-center'>
                  <h2>Couples</h2>
                </div>
                <div>
                  <p className='text-justify text-gray-700 pt-32'>
                    La vie d’un couple, comme celle d’un individu, peut traverser des moments de difficultés, de crises. JL Clément reçoit
                    aussi des couples qui se questionnent ou se sentent en situation de blocage et souhaitent en parler. À la suite de
                    l’écoute du couple dans un premier entretien, il peut être proposé : des rencontres régulières ou ponctuelles ou une
                    orientation vers d’autres soins ou organisme adapté.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Card
