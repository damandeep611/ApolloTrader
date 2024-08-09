import React from 'react'
import Container from '../../layout/Container'

function InfoCard() {
  return (
    <Container>
      <div className="flex flex-col ">
        <div className="flex md:flex-row gap-5 items-center px-5 py-10">
          <div className="flex-1 px-10 ">
            <h3 className="text-4xl font-bold">Why Backtesting Matters</h3>
            <p className="text-base font-semibold text-slate-600 py-6">
              SEO 2.0 isn't just about ranking higher—it's about understanding
              and adapting to the dynamic digital environment. It ensures your
              content is both visible and impactful, driving not just traffic
              but meaningful engagement that leads to conversions.
            </p>
          </div>
          <div className="flex-1">
            <img
              src="https://aiseo.ai/assets/images/new-landing-ui/seoLandingUpdateImg2.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default InfoCard
