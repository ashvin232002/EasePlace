import React from 'react'
import './GlassMorphism.css'
function GlassMorphism() {
    const content=[
        {heading:'Your pick of rides at low prices',paragraph:'No matter where you’re going, by bus or carpool, find the perfect ride from our wide range of destinations and routes at low prices.'},
        {heading:'Trust who you travel with',paragraph:'We take the time to get to know each of our members and bus partners. We check reviews, profiles and IDs, so you know who you’re travelling with and can book your ride at ease on our secure platform.'},
        {heading:'Scroll, click, tap and go!',paragraph:'Booking a ride has never been easier! Thanks to our simple app powered by great technology, you can book a ride close to you in just minutes.'},
]
  return (
    <div className='main_container'>
   <div className='container_1'>
    {content.map((content,i)=>(
      <div className='card' key={i}>
    <div className='box'>
    <div className='content'>
      <h2>{i+1}</h2>
      <h3 className='my-5'>{content.heading}</h3>
      <p>{content.paragraph}</p>
    </div>
    </div>
    </div>
    ))}
    </div>
   </div>
  )
}

export default GlassMorphism