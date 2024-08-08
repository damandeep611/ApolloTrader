import React from 'react'

function CompanyCard({iconUrl, Review, logo}) {
  return (
    <div className='flex flex-col justify-center gap-4 border border-gray-400 px-20 py-4 rounded-lg'>
      <img className='h-8' src={iconUrl} alt="" />
      <span className='text-lg font-bold'>{Review}</span>
      <img className='h-5' src={logo} alt="" />
    </div>
  )
}

export default CompanyCard
