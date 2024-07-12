import React from 'react'
import Cards from '@/components/Cards'

const Home = () => {
  return (
    <div id='top' className='max-w-full flex items-center flex-col py-10 md:mx-40'>
      <div className='px-4 md:px-20 '>
        {/* <h1 className='text-center text-3xl uppercase tracking-wider mb-8'>Accueil</h1> */}
        <div className='flex flex-col md:flex-row items-center gap-8 md:gap-24  max-w-screen-lg mx-5'>
          <div className='text-justify'>
            Psychologue, Psychothérapeute, Psychanalyste à <strong>Bron</strong> (152 Avenue Franklin Roosevelt 69500), Jean-Louis Clément
            accueille <strong>Adultes</strong>, <strong>Adolescents</strong> et <strong>Couples</strong> sur rendez-vous.
            <br />
            Le psychologue intervient dans tous les domaines de la société (éducation, santé, social, travail, sport, etc.) pour préserver,
            maintenir ou améliorer le bien-être ou la qualité de vie de l'individu et sa santé psychique, développer ses capacités ou
            favoriser son intégration sociale.
            <br /> <br />A la suite de l’écoute du couple dans un premier entretien, il peut être proposé : des rencontres régulières ou
            ponctuelles ou une orientation vers d’autres soins ou organisme adapté.
            <h1 className='text-center text-3xl uppercase tracking-wider my-8'>Motifs de consultations</h1>
            <p className='text-justify mb-4'>
              On peut s’adresser à un psychologue simplement pour un avis ou par rapport à des difficultés personnelles ou à un
              questionnement existentiel
            </p>
            <div className='grid  items-center w-auto'>
              <ul className='list-disc pl-5 space-y-2 list-inside max-w-96'>
                <h3 className='text-primary font-bold'>Des difficultés liées à des vécus</h3>
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
              </ul>
              <br />
              <ul className='list-disc pl-5 space-y-2 list-inside'>
                <h3 className='text-primary font-bold'>Ou des questionnements existentiels personnels concernant</h3>
                <li className='text-primary'>
                  <span className='text-black'>L'identité</span>
                </li>
                <li className='text-primary'>
                  <span className='text-black'>Le sens de la vie</span>
                </li>
              </ul>
              <br />
              <ul className='list-disc pl-5 space-y-2 list-inside'>
                <h3 className='text-primary font-bold'>Des difficultés liées à des ressentis de troubles corporels</h3>
                <li className='text-primary'>
                  <span className='text-black'>De troubles corporels</span>
                </li>
                <li className='text-primary'>
                  <span className='text-black'>
                    de troubles de l’humeur ou de la pensée ou des problèmes de comportement ou d’addiction…
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Cards />
      <div className='flex flex-wrap items-center flex-col pt-20 w-full'>
        <h1 className='flex-initial w-full text-center text-3xl uppercase tracking-wider pb-20'>Analyse de la Pratique Professionnelle</h1>
        <div className='flex flex-col md:flex-row items-center gap-8 md:gap-24  max-w-screen-lg text-justify mx-5'>
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
