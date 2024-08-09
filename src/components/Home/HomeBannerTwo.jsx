import React from 'react'
import Container from '../../layout/Container'

function HomeBannerTwo() {
  return (
    <Container>
      <div className="flex flex-col ">
        <h2 className="text-4xl font-bold text-center">
          ApolloT 2.0 <br />
          Revolutionize the way you test your strategies
        </h2>

        <div className="flex md:flex-row gap-5 items-center px-5 py-10">
          <div className="flex-1 px-10">
            <h3 className="text-3xl font-bold tracking-wide ">
              Why Backtesting is Essential
            </h3>
            <p className="text-base font-semibold text-slate-600 py-6">
              Backtesting is the cornerstone of successful trading. By
              simulating real-world market conditions, you can identify
              profitable patterns, mitigate risks, and build robust trading
              systems.
            </p>
          </div>
          <div className="flex-1">
            <img
              src="https://aiseo.ai/assets/images/new-landing-ui/seoLandingUpdateImg1.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default HomeBannerTwo
