import React from 'react'
import Container from '../../layout/Container'
import HomeBannerInput from './HomeBannerInput';

function HomeBanner() {
  return (
    <Container>
      <div className='flex flex-col items-center text-center py-5'>
        <span className="bg-transparent md:bg-[#E9E5FF] py-[0.25rem] px-[1.18rem] rounded-2xl w-fit mx-auto md:text-base text-[14px] md:max-w-fit max-w-[242px] font-medium text-slate-900">
          Outsmart Your Competition with SEO 2.0
        </span>
        <h1 className='font-semibold md:font-bold text-[1.575rem] md:text-[3rem] leading-[2.25rem] md:leading-[3.43rem] text-slate-900 md:max-w-fit max-w-[279px] mt-[4px] md:mt-[1.5rem] hidden md:block'>
          Introducing SEO 2.0 <br /> for Undetectable Superior Content
        </h1>
        <p className='text-slate-600 font-medium max-w-[690px] mt-[1rem] hidden md:block'>
          Craft content that not only mirrors but exceeds the performance of top Google results. Use SEO 2.0 strategies to secure your dominance in the niche and boost your search rankings.
        </p>
      </div>
      <HomeBannerInput/>
    </Container>
  );
}

export default HomeBanner;
