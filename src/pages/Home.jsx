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
          Psychologue, Psychothérapeute, Psychanalyste à Bron (Rhône, 69) Jean-Louis Clément, Psychologue à Bron (également Psychothérapeute
          & Psychanalyste), accueille Adultes, Adolescents et Couples sur rendez-vous "Le psychologue intervient dans tous les domaines de
          la société (éducation, santé, social, travail, sport, etc.) pour préserver, maintenir ou améliorer le bien-être ou la qualité de
          vie de l'individu et sa santé psychique, développer ses capacités ou favoriser son intégration sociale." Sur le site internet du
          cabinet de psychologie de Jean-Louis Clément à Bron (69500) vous trouverez des explications : le psychologue aide le patient à
          mieux se connaître, pour mieux avancer.
        </div>
        <img src={profile} alt='Photo de profile' className='w-64 h-auto' />
      </div>

      {/* <img className='w-full  hover:border-red-800' src={card1}></img>
        <img className='w-full' src={card3}></img>
        <img className='w-full ' src={test}></img> */}
      <Cards />

      <div className='flex flex-wrap items-center flex-col pt-20 w-full'>
        <h1 className='flex-initial w-full text-center text-3xl uppercase tracking-wider'>Foire aux questions</h1>

        <Accordion type='single' collapsible className='w-full max-w-3xl'>
          <AccordionItem value='item-1'>
            <AccordionTrigger className='border-solid border-b-2 border-slate-300 py-4 text-lg font-semibold hover:bg-slate-100 transition-colors'>
              Is it accessible?
            </AccordionTrigger>
            <AccordionContent className='py-4 px-2 text-base text-gray-700'>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-2'>
            <AccordionTrigger className='border-solid border-b-2 border-slate-300 py-4 text-lg font-semibold hover:bg-slate-100 transition-colors'>
              Is it accessible?
            </AccordionTrigger>
            <AccordionContent className='py-4 px-2 text-base text-gray-700'>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-3'>
            <AccordionTrigger className='border-solid border-b-2 border-slate-300 py-4 text-lg font-semibold hover:bg-slate-100 transition-colors'>
              Is it accessible?
            </AccordionTrigger>
            <AccordionContent className='py-4 px-2 text-base text-gray-700'>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-4'>
            <AccordionTrigger className='border-solid border-b-2 border-slate-300 py-4 text-lg font-semibold hover:bg-slate-100 transition-colors'>
              Is it accessible?
            </AccordionTrigger>
            <AccordionContent className='py-4 px-2 text-base text-gray-700'>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}

export default Home
