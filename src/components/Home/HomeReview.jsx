import React from 'react'
import Container from '../../layout/Container'
import imageOne from "../../../src/logos/sLogo.svg";
import imagep from "../../../src/logos/pLogo.svg";
import imagem from "../../../src/logos/mLogo.svg";
import imagedd from "../../../src/logos/ddLogo.svg";
import imaged from "../../../src/logos/dLogo.svg";
import productHunt from "../../../src/logos/productHuntLandingStars.svg";
import productLogo from "../../../src/logos/productHuntLogo.svg";
import trustpilot from "../../../src/logos/trustpilotLandingStars.svg";
import trustpilotLogo from "../../../src/logos/trustpilotLogo.svg";
import g2 from "../../../src/logos/g2LandingStars.svg";
import g2Logo from "../../../src/logos/g2Logo.svg";

import CompanyCard from '../Cards/CompanyCard'

function HomeReview() {
  return (
   <Container>
     <div className='flex flex-col justify-center text-center'>
      <span className='text-lg font-semibold'>Powering 250,000+ professionals at the world’s best companies</span>
      <div className='flex md:flex-row flex-col justify-center gap-8 m-3'>
        <img src={imageOne} alt="" />
        <img src={imagep} alt="" />
        <img src={imagem} alt="" />
        <img src={imaged} alt="" />
        <img src={imagedd} alt="" />
      </div>

      <div className='flex flex-col md:flex-row justify-center gap-6'>
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
  )
}

export default HomeReview
