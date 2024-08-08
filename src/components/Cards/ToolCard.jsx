import React from 'react'

function ToolCard({iconUrl, title, description, toolInfo, infoDescription}) {
  return (
    <div className='flex flex-col justify-center gap-6 px-6 max-w-80 py-4 border border-slate-400 rounded-xl'>
      <img className='w-10' src={iconUrl} alt="" />
      <h4 className='text-2xl font-semibold'>{title}</h4>
      <p>{description}</p>
    <div className='flex flex-col gap-6 border-t-2 py-4'>
    <span className='text-3xl font-bold'>{toolInfo}</span>
    <span>{infoDescription}</span>
    </div>
      
    </div>
  )
}

export default ToolCard
