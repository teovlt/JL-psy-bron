import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const Home = () => {
  return (
    <div className='px-40 py-40 bg-slate-200 flex items-center flex-col gap-56'>
      <div>Hello from home</div>

      <div className='w-full'>
        <Accordion type='single' collapsible className='border-solid border-2 border-sky-200'>
          <AccordionItem value='item-1' className='border-solid border-2 border-sky-500'>
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-2' className='border-solid border-2 border-sky-500'>
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-3' className='border-solid border-2 border-sky-500'>
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-4' className='border-solid border-2 border-sky-500'>
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}

export default Home
