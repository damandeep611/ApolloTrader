import React from 'react'

function FeatureCard({title, description, iconUrl}) {
  return (
    <div className='flex flex-col justify-center gap-6 px-6 py-4 my-4 border border-gray-300 rounded-xl md:h-[338px] max-w-80'>
      <img className='w-10' src={iconUrl} alt="" />
      <h4 className='text-2xl font-semibold'>{title}</h4>
      <p className='text-base font-semibold text-slate-600'>{description}</p>
    </div>
  )
}

export default FeatureCard
