import React from 'react'
import Container from '../../layout/Container'

function HomeBannerTwo() {
  return (
    <Container>
      <div className='flex flex-col '>
        <h2 className='text-5xl font-bold text-center'>SEO 2.0: Revolutionizing How <br />Your Business Gets Found Online</h2>

        <div className='flex md:flex-row gap-5 items-center px-5 py-10'>
          <div className='flex-1 px-10'>
            <h3 className='text-4xl font-bold tracking-wide '>Imagine Leading the Next Wave of Search</h3>
            <p className='text-base font-semibold text-slate-600 py-6'>Imagine your business popping up when people search for your site terms on "Gemini" or "ChatGPT." With SEO 2.0, this isn't just possible—it's within reach. Organic search currently drives approximately $10 billion per day in revenue from 5.5 billion clicks, yet the potential of SEO 2.0 remains largely untapped.</p>
          </div>
          <div className='flex-1'>
            <img src="https://aiseo.ai/assets/images/new-landing-ui/seoLandingUpdateImg1.svg" alt="" />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default HomeBannerTwo
