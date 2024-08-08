import React from 'react'
import ListItems from './ListItems'

function PriceCard({heading, description, priceInfo, cardTag, priceYearly, bgColor, textColor}) {
  return (
    <div>
      {/* pricing card */}
      <div class={`flex flex-col p-6 mx-auto max-w-lg text-center  rounded-lg border-2  border-gray-300 shadow dark:border-gray-600 xl:p-8 ${bgColor} ${textColor}`}>
                <h3 class="mb-4 text-5xl font-bold">{heading}</h3>
                <p class="font-semibold">{description}</p>
                <div class="flex flex-col justify-center items-baseline my-8">
                   <div className='flex items-center justify-between gap-2'>
                   <span class="mr-2 text-2xl font-extrabold">{priceInfo}</span>
                   <span className='text-base font-bold bg-green-500 px-4 whitespace-nowrap rounded-lg'>{cardTag}</span>
                   </div>
                    <span class="text-base font-bold">{priceYearly}</span>
                </div>
                {/* <!-- List --> */}
                <ul role="list" class="mb-8 space-y-4 text-left border-t border-gray-200 py-5">
                    <ListItems
                    listText="Individual configuration"
                    />
                    <ListItems
                    listText="Humanize Ai content"
                    />
                    <ListItems
                    listText="Humanize Ai content"
                    />
                    <ListItems
                    listText="Humanize Ai content"
                    />
                    <ListItems
                    listText="Humanize Ai content"
                    />
                    <ListItems
                    listText="Humanize Ai content"
                    />
                    <ListItems
                    listText="Humanize Ai content"
                    />
                </ul>
                <a href="#" class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Get started</a>
            </div>
    </div>
  )
}

export default PriceCard
