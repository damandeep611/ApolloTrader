import React from 'react'

function HomeBannerInput() {
  return (
    <div className="flex justify-center items-center text-center gap-4">
      <input
        type="text"
        placeholder="Search Any Stock Here"
        className="py-[1rem] md:py-[1.125rem] px-[1.1rem] md:px-[1.125rem] bg-white text-slate-900 text-[14px] md:text-base rounded-md border-[1.5px] border-slate-400/50 focus:outline-slate-700 w-[100%] md:w-[450px] "
      />
      <button className='bg-slate-900 py-[1rem] md:py-[1.125rem] px-[1.65rem] md:px-[1.93rem] text-white hover:bg-slate-800 rounded-md text-[14px] md:text-base md:w-fit w-full flex flex-row gap-3 justify-center items-center"'>
        Fetch Data
      </button>
    </div>
  );
}

export default HomeBannerInput
