import React from 'react'
import Container from '../../layout/Container'

import productHunt from "../../../src/logos/productHuntLandingStars.svg";
import productLogo from "../../../src/logos/productHuntLogo.svg";
import trustpilot from "../../../src/logos/trustpilotLandingStars.svg";
import trustpilotLogo from "../../../src/logos/trustpilotLogo.svg";
import g2 from "../../../src/logos/g2LandingStars.svg";
import g2Logo from "../../../src/logos/g2Logo.svg";

import CompanyCard from '../Cards/CompanyCard'

import AutoPlaySlider from "../Ui/AutoPlaySlider";

function HomeReview() {
  return (
    <Container>
      <div className="flex flex-col justify-center text-center">
        <span className="text-lg font-semibold">
          Powering 250,000+ professionals at the world’s best companies
        </span>
        <div className="m-6">
          <AutoPlaySlider />
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-6">
          <CompanyCard
            iconUrl={productHunt}
            Review="4.8/5 (300+ reviews)"
            logo={productLogo}
          />
          <CompanyCard
            iconUrl={trustpilot}
            Review="4.5/5 (1000+ reviews) "
            logo={trustpilotLogo}
          />
          <CompanyCard
            iconUrl={g2}
            Review="4.6/5 (500+ reviews) "
            logo={g2Logo}
          />
        </div>
      </div>
    </Container>
  );
}

export default HomeReview
