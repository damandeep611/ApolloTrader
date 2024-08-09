import React from 'react'
import Container from '../../layout/Container'
import ToolCard from '../Cards/ToolCard'

function OurTools() {
  return (
    <Container>
      <div className="flex flex-col justify-center items-center gap-8 ">
        <div className="flex flex-col text-center gap-8 px-14">
          <h2 className="text-4xl font-bold">
            Tailored Tools for Every Creator
          </h2>
          <p className="text-base font-bold text-slate-600 px-16 ">
            Struggling with content creation, SEO, or making your writing
            undetectable? Whatever your challenge, AISEO's range of
            tools—including Bypass AI, Longform Assistant, and more—provide
            tailored solutions to elevate your strategy.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 place-items-center">
          <ToolCard
            iconUrl="https://your-website.com/icons/historical-data.svg" // Replace with your image URL
            title="Historical Price Data"
            description="Access extensive historical price data for various assets and markets. Analyze past trends and identify potential future patterns for your backtesting strategies."
            toolInfo="10+"
            infoDescription="Years of Data Available"
          />
          <ToolCard
            iconUrl="https://your-website.com/icons/technical-indicators.svg" // Replace with your image URL
            title="Technical Indicators Library"
            description="Utilize a wide range of technical indicators to analyze market data and identify potential trading signals for your backtesting simulations."
            toolInfo="50+"
            infoDescription="Available Indicators"
          />
          <ToolCard
            iconUrl="https://your-website.com/icons/portfolio-optimization.svg" // Replace with your image URL
            title="Portfolio Backtesting"
            description="Test and optimize your investment strategies across entire portfolios. Analyze performance metrics and identify the most effective asset allocation for your backtesting scenarios."
            toolInfo="Unlimited"
            infoDescription="Portfolio Configurations"
          />
          <ToolCard
            iconUrl="https://your-website.com/icons/risk-management.svg" // Replace with your image URL
            title="Risk Management Tools"
            description="Incorporate risk management strategies into your backtesting. Set stop-loss and take-profit orders, calculate portfolio volatility, and analyze potential risks associated with different trading approaches."
            toolInfo="Multiple"
            infoDescription="Risk Management Features"
          />
          <ToolCard
            iconUrl="https://your-website.com/icons/customization.svg" // Replace with your image URL
            title="Customizable Parameters"
            description="Fine-tune your backtesting simulations to specific trading conditions. Adjust fees, commissions, and market variables to accurately reflect real-world scenarios and gain deeper insights into strategy effectiveness."
            toolInfo="Extensive"
            infoDescription="Customization Options"
          />
          <ToolCard
            iconUrl="https://your-website.com/icons/data-visualization.svg" // Replace with your image URL
            title="Data Visualization Tools"
            description="Visualize your backtesting results with interactive charts and graphs. Gain a clear understanding of performance metrics and identify patterns and trends more effectively."
            toolInfo="Multiple"
            infoDescription="Chart Types & Data Views"
          />
        </div>
        <div>
          <button className="text-base px-4 py-2 bg-blue-800 text-white rounded-xl">
            Start Writing with Ai
          </button>
        </div>
      </div>
    </Container>
  );
}

export default OurTools
