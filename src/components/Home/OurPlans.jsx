import React from 'react'
import PriceCard from '../Cards/PriceCard'

function OurPlans() {
  return (
    <section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Designed for business teams like yours</h2>
            <p class="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
        </div>
        <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
           <PriceCard
            heading="Grow"
            description="Empower Your Content: A Solid Start with Essential AI Features"
            priceInfo="$ 99.00/M"
            cardTag="1 Week free Trial"
            priceYearly="$ 299/Year"
            bgColor="bg-white"
            textColor="text-gray-900"
           />
           <PriceCard
            heading="Scale"
            description="Empower Your Content: A Solid Start with Essential AI Features"
            priceInfo="$ 99.00/M"
            cardTag="1 Week free Trial"
            priceYearly="$ 299/Year"
            bgColor="bg-slate-900"
            textColor="text-white"
           />
           <PriceCard
            heading="Team"
            description="Empower Your Content: A Solid Start with Essential AI Features"
            priceInfo="$ 99.00/M"
            cardTag="1 Week free Trial"
            priceYearly="$ 299/Year"
            bgColor="bg-white"
            textColor="text-gray-900"
           />
        </div>
    </div>
  </section>
  )
}

export default OurPlans
