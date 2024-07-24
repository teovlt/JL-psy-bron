import React from 'react'
import Cards from '@/components/Cards'

const Home = () => {
  return (
    <div id='top' className='max-w-full flex items-center flex-col py-10 md:mx-40'>
      <div className='px-4 md:px-20 '>
        <h1 className='pb-10 flex-initial p-2 text-center text-3xl uppercase tracking-wider underline underline-offset-3 decoration-primary'>
          Entretiens - Psychothérapie - Analyse de la Pratique Professionnelle
        </h1>
        <div className='flex flex-col md:flex-row items-center gap-8 md:gap-24 w-full-lg mx-5'>
          <div className='text-justify'>
            Psychologue, Psychothérapeute, Psychanalyste à <strong>Bron</strong> (152 Avenue Franklin Roosevelt 69500), Jean-Louis Clément
            accueille <strong>Adultes</strong>, <strong>Adolescents</strong> et <strong>Couples</strong> sur rendez-vous au 06 82 29 35 04.
            <br />
            Il propose également aux professionnels de <strong>l'Analyse de la Pratique Professionnelle.</strong>
            <br />
            On peut s’adresser à un psychologue simplement pour un avis ou par rapport à des difficultés diverses
            <h1 className='pt-20 flex-initial p-2 text-center text-3xl uppercase tracking-wider underline underline-offset-3 decoration-primary'>
              Motifs de consultations
            </h1>
            <div className='grid pt-10 items-center w-auto'>
              <ul className='list-disc pl-5 space-y-2 list-inside max-w-96'>
                <h3 className='text-primary font-bold'>Des difficultés liées à des vécus : </h3>
                <li className='text-primary'>
                  <span className='text-black'>De dépression</span>
                </li>
                <li className='text-primary'>
                  <span className='text-black'>D'anxiété</span>
                </li>
                <li className='text-primary'>
                  <span className='text-black'>D'angoisse</span>
                </li>
                <li className='text-primary'>
                  <span className='text-black'>De phobie</span>
                </li>
                <li className='text-primary'>
                  <span className='text-black'>De perte de confiance en soi</span>
                </li>
                <li className='text-primary'>
                  <span className='text-black'>De souffrance au travail</span>
                </li>
                <li className='text-primary'>
                  <span className='text-black'>...</span>
                </li>
              </ul>
              <ul className='list-disc pl-5 space-y-2 list-inside'>
                <h3 className='text-primary font-bold'>Des difficultés liées à des ressentis : </h3>
                <li className='text-primary'>
                  <span className='text-black'>Des troubles corporels</span>
                </li>
                <li className='text-primary'>
                  <span className='text-black'>Des problèmes de comportement ou d’addiction…</span>
                </li>
                <li className='text-primary'>
                  <span className='text-black'>...</span>
                </li>
              </ul>
              <ul className='list-disc pl-5 space-y-2 list-inside'>
                <h3 className='text-primary font-bold'>Des questionnements existentiels concernant :</h3>
                <li className='text-primary'>
                  <span className='text-black'>L'identité</span>
                </li>
                <li className='text-primary'>
                  <span className='text-black'>Le sens de la vie</span>
                </li>
                <li className='text-primary'>
                  <span className='text-black'>...</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className='pt-10 text-justify w-auto mx-20'>
        A la suite de l'écoute du patient dans un ou des premiers entretiens, Jean Louis CLEMENT peut proposer des rencontres régulières
        (psychothérapie / psychalanyse) ou ponctuelles (entretiens) ou une orientation vers d'autres soins.
        <p>
          Les <strong>adolescents</strong> ou les <strong>couples</strong> peuvent aussi consulter
        </p>
      </div>
      <Cards />
      <div className='flex flex-wrap items-center flex-col pt-20 w-full'>
        <h1 className='flex-initial p-2 text-center text-3xl uppercase tracking-wider underline underline-offset-3 decoration-primary'>
          Analyse de la Pratique Professionnelle
        </h1>
        <div className=' pt-10 flex flex-col md:flex-row items-center gap-8 md:gap-24  max-w-screen-lg text-justify mx-5'>
          Elle peut être individuelle ou groupale. Je la nomme personnellement Elaboration de la pratique professionnelle pour souligner
          qu’il ne s’agit pas principalement d’une transmission de savoirs mais d’un travail de mise en mots, d’échange et d’élaboration
          progressive accompagné par le groupe (si c’est dans ce cadre) et le psychologue. <br /> <br /> Elle concerne les professionnels
          qui ont une fonction dont la composante relationnelle est essentielle : profession du soin physique ou psychique, éducateurs,
          rééducateurs, bénévoles, médecins, psychologues, travailleurs sociaux, acteurs des ressources humaines, responsables de service,
          d’association, d’entreprises… <br /> <br />
          Les groupes peuvent être des groupes de pairs (ou de professions voisines) ou des professionnels d’un même service partageant une
          tâche commune. <br />
          <br /> Après une première rencontre un cadre de travail est proposé. Les séances ont lieu à un rythme régulier souvent mensuel ou
          bi- mensuel. Les professionnels sont invités à évoquer une situation de leur pratique dans laquelle ils sont personnellement
          engagés. <br />
          <br /> A partir de leur verbalisation, de leurs questionnements sur la pratique et la relation, ils élaborent progressivement,
          accompagnés par le psychologue et le groupe (si c’est dans ce cadre), les enjeux, les problèmes rencontrés, les pistes
          d’évolution… <br />
          <br /> Une règle de régularité, de respect de la parole de chacun et de discrétion professionnelle est nécessaire pour rendre ce
          travail possible.
        </div>
      </div>
    </div>
  )
}

export default Home
