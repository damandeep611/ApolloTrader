import React from 'react'
import Container from '../../layout/Container'


function GetStarted() {
  return (
    <div className="bg-cover bg-center bg-no-repeat mx-4 rounded-2xl" style={{ backgroundImage: "url('/gridbgDarkImage.png')", borderRadius: "1rem" }}>
      <div className="bg-black bg-opacity-50 py-20 rounded-2xl">
        <Container>
          <div className="flex flex-col gap-6 justify-center items-center text-white text-center">
            <h2 className="text-5xl font-bold">Get Started with AISEO Today</h2>
            <p className="text-base font-semibold max-w-3xl">
              Join us at the forefront of SEO innovation. Start your journey with AISEO's SEO 2.0 tools and redefine what your content can achieve. Try our free trial and experience firsthand the advantages of a sophisticated, future-proof SEO strategy.
            </p>
            <button className='bg-green-700 hover:bg-green-800 text-white px-10 py-3 rounded transition duration-300'>
              Get Started
            </button>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default GetStarted
