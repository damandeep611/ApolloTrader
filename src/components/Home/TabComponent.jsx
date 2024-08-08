import React, { useState } from 'react'

function TabComponent ({faqData}) {
  
    const [activeTab, setActiveTab] = useState(0);
    const [activeAccordion, setActiveAccordion] = useState(null);
  
    const handleTabClick = (index) => {
      setActiveTab(index);
      setActiveAccordion(null);
    };
  
    const toggleAccordion = (index) => {
      setActiveAccordion(activeAccordion === index ? null : index);
    };
  return(
    <div className="flex max-w-6xl mx-auto p-8">
    <div className="w-1/2 pr-4">
     <div className='text-base font-bold max-w-48 whitespace-nowrap'>
     {faqData.map((tab, index) => (
        <div
          key={index}
          className={`p-4 mb-2 rounded cursor-pointer transition-colors ${
            activeTab === index
              ? 'bg-blue-500 text-white'
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
          onClick={() => handleTabClick(index)}
        >
          {tab.title}
        </div>
      ))}
     </div>
    </div>
    <div className="w-1/2">
      {faqData[activeTab].faqs.map((faq, index) => (
        <div key={index} className="mb-2">
          <div
            className="p-4 cursor-pointer flex justify-between items-center"
            onClick={() => toggleAccordion(index)}
          >
            <span className='text-lg font-semibold'>{faq.question}</span>
            <svg
              className={`w-4 h-4 transition-transform ${
                activeAccordion === index ? 'transform rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          {activeAccordion === index && (
            <div className="p-4 bg-teal-200">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  </div>
  )
}

export default TabComponent
