import React from 'react'

function ReviewCard({iconUrl, name, work, description, review, }) {
  return (
    <div className='flex flex-col justify-center gap-4 bg-slate-700 md:w-[350px] text-white px-6 py-4 rounded-xl'>
      {/* revie card image and name */}
      <div className='flex gap-4'>
      <img className='' src={iconUrl} alt="" />
      <div className='flex flex-col justify-center '>
        <h4 className='text-lg font-bold'>{name}</h4>
        <h5 className='text-base font-semibold'>{work}</h5>
      </div>
      </div>
      {/* review card description */}
    <div>
    <p className='text-base font-semibold'>{description}</p>
    </div>
    {/* review star */}
    <div>
      <span>{review}</span>
    </div>
    </div>
  )
}

export default ReviewCard
