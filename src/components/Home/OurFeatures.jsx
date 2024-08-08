import React from 'react'
import Container from '../../layout/Container'
import FeatureCard from '../Cards/FeatureCard'

function OurFeatures() {
  return (
    <Container>
      <div>
      <h2 className='text-4xl font-semibold py-4'>Key Features of SEO 2.0</h2>
    </div>
    <div className='grid md:grid-cols-3 gap-3'>
      <FeatureCard
      title="Ai Driven Automation"
      description="Simplify complex SEO tasks through automation, allowing you to focus on strategic decision-making and creative content production."
      iconUrl="https://aiseo.ai/assets/images/new-landing-ui/seoV2Icons/aiDrivenAutomation.svg"

      />
       <FeatureCard
      title="Undetectable Content
      "
      description="Generate content that is not only rich in quality but also flies under the radar of AI detection tools, maintaining your site's integrity and uniqueness.

      "
      iconUrl="https://aiseo.ai/assets/images/new-landing-ui/seoV2Icons/undetectableContent.svg"

      />
       <FeatureCard
      title="Enhanced Data Analytics
      "
      description="Utilize predictive analytics and real-time data to refine your SEO strategies, ensuring they are data-driven and result-oriented.

      "
      iconUrl="https://aiseo.ai/assets/images/new-landing-ui/seoV2Icons/enhancedDataAnalysis.svg"

      />
       <FeatureCard
      title="Multichannel Optimization
      "
      description="Spread your SEO efforts across various platforms with tailored content that boosts visibility and engagement across the digital landscape.

      "
      iconUrl="https://aiseo.ai/assets/images/new-landing-ui/seoV2Icons/multichannelOptimization.svg"

      />

       <FeatureCard
      title="Customizable AI Tools
      "
      description="Adjust AI functionalities to meet specific SEO goals, from keyword optimization to link building, for a fully personalized SEO experience.

      "
      iconUrl="https://aiseo.ai/assets/images/new-landing-ui/seoV2Icons/customizableAiTools.svg"

      />
      
    </div>
    </Container>
  )
}

export default OurFeatures
