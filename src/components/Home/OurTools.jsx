import React from 'react'
import Container from '../../layout/Container'
import ToolCard from '../Cards/ToolCard'

function OurTools() {
  return (
    <Container>
      <div className='flex flex-col justify-center items-center gap-8 '>
        <div className='flex flex-col text-center gap-8 px-14'>
          <h2 className='text-4xl font-bold'>Tailored Tools for Every Creator</h2>
          <p className='text-base font-bold text-slate-600 px-16 '>Struggling with content creation, SEO, or making your writing undetectable? Whatever your challenge, AISEO's range of tools—including Bypass AI, Longform Assistant, and more—provide tailored solutions to elevate your strategy.</p>
        </div>
      <div className='grid md:grid-cols-3 gap-6 place-items-center'>
        <ToolCard
        iconUrl="https://aiseo.ai/assets/images/new-landing-ui/toolsInLandingIcons/longFormToolsLandingIcon.svg"
        title="Long Form Assistant"
        description="Streamline extensive article creation with our AI-driven tool that guarantees time savings and superior content quality."
        toolInfo="50%"
        infoDescription="Reduction in Writing Time"
        />
        <ToolCard
        iconUrl="https://aiseo.ai/assets/images/new-landing-ui/toolsInLandingIcons/bypassToolsLandingIcon.svg"
        title="Bypass AI Detection"
        description="Ensure your content remains undetectable with advanced AI stealth technology, enhancing privacy and originality."
        toolInfo="98%"
        infoDescription="Detection Evasion Rate"
        />
        <ToolCard
        iconUrl="https://aiseo.ai/assets/images/new-landing-ui/toolsInLandingIcons/readabilityToolsLandingIcon.svg"
        title="Readability Improver"
        description="Optimize text clarity and engagement instantly, making your content accessible and enjoyable for all readers"
        toolInfo="85%"
        infoDescription="Increase in User Engagement"
        />
        <ToolCard
        iconUrl="https://aiseo.ai/assets/images/new-landing-ui/toolsInLandingIcons/advancedParaphraserToolsLandingIcon.svg"
        title="Advanced Paraphraser"
        description="Transform existing text into fresh content with nuanced, stylistic changes that maintain the original intent."
        toolInfo="90%"
        infoDescription="Reduction in Plagiarism        "
        />
        <ToolCard
        iconUrl="https://aiseo.ai/assets/images/new-landing-ui/toolsInLandingIcons/topicalToolsLandingIcon.svg"
        title="Topical Authority"
        description="Establish and demonstrate your expertise in specific areas with content crafted to enhance your authoritative presence."
        toolInfo="40%"
        infoDescription="Boost in SEO Rankings"
        />
        <ToolCard
        iconUrl="https://aiseo.ai/assets/images/new-landing-ui/toolsInLandingIcons/aiArticleToolsLandingIcon.svg"
        title="AI Article Generator"
        description="Quickly produce high-quality, SEO-optimized articles that are ready to publish and perfectly matched to your audience."
        toolInfo="40k"
        infoDescription="Articles Generated Monthly"
        />
      </div>
      <div>
        <button className='text-base px-4 py-2 bg-blue-800 text-white rounded-xl'>Start Writing with Ai</button>
      </div>
      </div>
    </Container>
  )
}

export default OurTools
