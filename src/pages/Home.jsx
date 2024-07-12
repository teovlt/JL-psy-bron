import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import profile from '../assets/profile.svg'

import Cards from '@/components/Cards'

const Home = () => {
  return (
    <div className='max-w-full flex items-center flex-col py-10 md:mx-40'>
      <h1 className='flex-initial w-full text-center text-3xl uppercase tracking-wider'>Qui suis-je ?</h1>

      <div className='flex items-center flex-row gap-24 mx-40'>
        <div className=' text-justify'>
          Psychologue, Psychothérapeute, <strong>Psychanalyste</strong> à <strong>Bron</strong> (Rhône, 69),{' '}
          <strong>Jean-Louis Clément</strong> accueille <strong>Adultes, Adolescents</strong> et <strong>Couples</strong> sur rendez-vous.
          <br />
          "Le psychologue intervient dans tous les domaines de la société (<strong>éducation, santé, social, travail, sport, etc.</strong>)
          pour préserver, maintenir ou améliorer le <strong>bien-être</strong> ou la qualité de vie de l'individu et sa santé psychique,
          développer ses capacités ou favoriser son intégration sociale." br Sur le site internet du cabinet de psychologie de Jean-Louis
          Clément à <strong>Bron (69500)</strong>, vous trouverez des explications : le psychologue aide le patient à mieux se connaître,
          pour mieux avancer.
        </div>
        <img src={profile} alt='Photo de profile' className='w-64 h-auto' />
      </div>

      <Cards />

      <div className='flex flex-wrap items-center flex-col pt-20 w-full'>
        <h1 className='flex-initial w-full text-center text-3xl uppercase tracking-wider'>Foire aux questions</h1>

        <Accordion type='single' collapsible className='w-full max-w-5xl pt-10'>
          <AccordionItem value='item-1'>
            <AccordionTrigger className='border-solid border-b-2 border-slate-300 py-4 text-lg font-semibold hover:bg-slate-100 transition-colors'>
              Qu'est-ce qu'une séance de psychothérapie individuelle ?
            </AccordionTrigger>
            <AccordionContent className='py-4 px-2 text-base text-gray-700'>
              Une séance de psychothérapie individuelle est une rencontre entre le psychologue et le patient. L'objectif est de discuter des
              préoccupations personnelles, de comprendre les difficultés émotionnelles ou comportementales, et de développer des stratégies
              pour améliorer le bien-être mental. Chaque séance dure généralement entre 45 et 60 minutes.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-2'>
            <AccordionTrigger className='border-solid border-b-2 border-slate-300 py-4 text-lg font-semibold hover:bg-slate-100 transition-colors'>
              Comment puis-je prendre rendez-vous ?
            </AccordionTrigger>
            <AccordionContent className='py-4 px-2 text-base text-gray-700'>
              Vous pouvez prendre rendez-vous en me contactant directement par téléphone au [numéro de téléphone] ou en utilisant le
              formulaire de contact disponible sur ce site. Je m'efforcerai de vous proposer un créneau qui correspond à vos disponibilités.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-3'>
            <AccordionTrigger className='border-solid border-b-2 border-slate-300 py-4 text-lg font-semibold hover:bg-slate-100 transition-colors'>
              Quelles sont les qualifications et l'expérience du psychologue ?
            </AccordionTrigger>
            <AccordionContent className='py-4 px-2 text-base text-gray-700'>
              Je suis titulaire d'un [nom du diplôme] de l'[université], et j'ai [nombre d'années] d'expérience en tant que psychologue.
              J'ai travaillé avec une variété de patients sur des problématiques diverses telles que l'anxiété, la dépression, les troubles
              relationnels, et bien d'autres.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-4'>
            <AccordionTrigger className='border-solid border-b-2 border-slate-300 py-4 text-lg font-semibold hover:bg-slate-100 transition-colors'>
              Les consultations sont-elles confidentielles ?
            </AccordionTrigger>
            <AccordionContent className='py-4 px-2 text-base text-gray-700'>
              Oui, toutes les consultations sont strictement confidentielles. En tant que psychologue, je suis tenu au secret professionnel.
              Les informations partagées pendant les séances ne seront divulguées à personne sans votre consentement, sauf en cas de danger
              imminent pour vous ou pour autrui.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}

export default Home
