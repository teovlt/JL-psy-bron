import React from 'react'
import Cards from '@/components/Cards'

const Home = () => {
  return (
    <div id='top' className='max-w-full flex items-center flex-col py-10 md:mx-40'>
      <div className='px-4 md:px-20 '>
        <h1 className='text-center text-3xl uppercase tracking-wider mb-8'>Je me présente</h1>
        <div className='flex flex-col md:flex-row items-center gap-8 md:gap-24  max-w-screen-lg mx-5'>
          <div className='text-justify'>
            Psychologue, Psychothérapeute, <strong>Psychanalyste</strong> à <strong>Bron</strong> (Rhône, 69),{' '}
            <strong>Jean-Louis Clément</strong> accueille <strong>Adultes, Adolescents</strong> et <strong>Couples</strong> sur rendez-vous.
            <br />
            Le psychologue intervient dans tous les domaines de la société (<strong>éducation, santé, social, travail, sport, etc.</strong>)
            pour préserver, maintenir ou améliorer le <strong>bien-être</strong> ou la qualité de vie de l'individu et sa santé psychique,
            développer ses capacités ou favoriser son intégration sociale.
            <br />
            Sur le site internet du cabinet de psychologie de Jean-Louis Clément à <strong>Bron (69500)</strong>, vous trouverez des
            explications : le psychologue aide le patient à mieux se connaître, pour mieux avancer.
            <h1 className='text-center text-3xl uppercase tracking-wider my-8'>Sujets abordés</h1>
            <p className='text-justify mb-4'>
              Le psychologue Jean-Louis Clément est qualifié pour aborder un large éventail de sujets liés à la santé mentale et au
              bien-être. Qu'il s'agisse de problèmes d'anxiété et d'angoisse, de souffrance au travail, de défis rencontrés pendant
              l'adolescence, de thérapie de couple, de psychanalyse ou de psychothérapie, il offre un soutien professionnel et personnalisé
              pour aider chaque individu à trouver des solutions et à améliorer sa qualité de vie.
            </p>
            <ul className='list-disc pl-5 space-y-2 list-inside'>
              <li className='text-primary'>
                <span className='text-black'>Anxiété - Angoisse</span>
              </li>
              <li className='text-primary'>
                <span className='text-black'>Burn out - Souffrance au Travail</span>
              </li>
              <li className='text-primary'>
                <span className='text-black'>Adolescence</span>
              </li>
              <li className='text-primary'>
                <span className='text-black'>La Thérapie de Couple</span>
              </li>
              <li className='text-primary'>
                <span className='text-black'>Psychanalyse</span>
              </li>
              <li className='text-primary'>
                <span className='text-black'>Psychothérapie</span>
              </li>
            </ul>
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
