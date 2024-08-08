import React from 'react'
import Container from '../../layout/Container'
import TabComponent from './TabComponent'

const faqData = [
  {
    title: 'Generral Questions',
    faqs: [
      {
        question: "What is your return policy?",
        answer: "Our Return policy allows returns within 30 days of purchase"
      },
      {
        question: "Are you Powerful ",
        answer: "yes i am as nothing is impossible for me"
      }
    ]
  },
  {
    title: 'Account',
    faqs: [
      {
        question: 'how do i reset my password',
        answer:  'you can reset your password by clicking the "forget password" '
      },
      // add more faq here
    ]
  }
  // can add more tab sections here
]

function Faq() {
  return (
    <Container>
      <div className="container mx-auto p-4">
      <div className='flex flex-col text-center gap-8 px-14 py-10'>
      <h2 className='text-4xl font-bold'>Frequently Asked Questions</h2>
          <p className='text-base font-bold text-slate-600 px-16 '>AISEO will enable you to generate short and long form SEO content in a fraction of the time it takes with other services.</p>
      </div>
      <TabComponent faqData={faqData} />
    </div>
    </Container>
  )
}

export default Faq
