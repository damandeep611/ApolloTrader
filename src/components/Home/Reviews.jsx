import React from 'react'
import ReviewCard from '../Cards/ReviewCard'
import Container from '../../layout/Container'

function Reviews() {
  return (
    <div className="bg-cover bg-center bg-no-repeat mx-4 rounded-2xl" style={{ backgroundImage: "url('/gridbgDarkImage.png')", borderRadius: "1rem" }}>
      <div className="bg-black bg-opacity-50 py-20 rounded-2xl">
        <Container>
          <ReviewCard
          iconUrl="https://aiseo.ai/img/gaurave_j.png"
          name="Gaurav J"
          work="Freelance Content Writer"
          description="AISEO.ai revolutionized my content creation, offering everything from blog writing to humanizing AI content. It's a time-saver that ensures quality and authenticity. The humanizing feature truly stands out, making it indispensable for anyone in AI-driven content generation."
          review="5 Star"
          />
        </Container>
      </div>
    </div>
  )
}

export default Reviews
