import React from 'react'
import { Link } from 'react-router-dom'
import HomeBanner from './HomeBanner'
import HomeReview from './HomeReview'
import HomeBannerTwo from './HomeBannerTwo'
import OurFeatures from './OurFeatures'
import InfoCard from './InfoCard'
import GetStarted from './GetStarted'
import OurTools from './OurTools'
import OurPlans from './OurPlans'
import Faq from './Faq'
import Reviews from './Reviews'


function Home() {
  return (
    <>
    
    <HomeBanner/>
    <HomeReview/>
    <HomeBannerTwo/>
    <OurFeatures/>
    <InfoCard/>
    <GetStarted/>
    <OurTools/>
    <OurPlans/>
    <Reviews/>
    <Faq/>
   
    </>
  )
}

export default Home
