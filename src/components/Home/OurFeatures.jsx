import React from 'react'
import Container from '../../layout/Container'
import FeatureCard from '../Cards/FeatureCard'

function OurFeatures() {
  return (
    <Container>
      <div>
        <h2 className="text-4xl font-semibold py-4">
          Key Features of Apollo 2.0
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-3">
        <FeatureCard
          title="Advanced Backtesting Engine"
          description="Simulate trading strategies across historical data sets. Analyze performance metrics, optimize parameters, and identify profitable opportunities."
          iconUrl="https://your-website.com/icons/backtesting-engine.svg" // Replace with your image URL
        />
        <FeatureCard
          title="Real-Time & Historical Data Feeds"
          description="Access comprehensive market data, including historical prices, technical indicators, and fundamental data, to inform your backtesting strategies."
          iconUrl="https://your-website.com/icons/data-feeds.svg" // Replace with your image URL
        />
        <FeatureCard
          title="Portfolio Optimization Tools"
          description="Build well-diversified portfolios and maximize returns while minimizing risk. Our tools help you create balanced investment strategies based on backtesting results."
          iconUrl="https://your-website.com/icons/portfolio.svg" // Replace with your image URL
        />
        <FeatureCard
          title="Risk Management Features"
          description="Set stop-loss and take-profit orders, calculate volatility, and monitor portfolio performance. Backtest with risk management strategies to mitigate potential losses."
          iconUrl="https://your-website.com/icons/shield.svg" // Replace with your image URL
        />
        <FeatureCard
          title="Customizable Backtesting Parameters"
          description="Tailor your backtesting simulations to specific scenarios. Adjust trading conditions, fees, and market variables to gain deeper insights into strategy effectiveness."
          iconUrl="https://your-website.com/icons/settings.svg" // Replace with your image URL
        />
      </div>
    </Container>
  );
}

export default OurFeatures
