import React,{useState} from 'react'
import './Faqs.css'
function Faqs() {
    const [expand,setExpand]=useState([false,false,false,false,false])
    const Faqs=[
        {question:'How do I book a carpool ride?',answer:'You can book a carpool ride on our company website. Simply search for your destination, choose the date you want to travel and pick the carpool that suits you best! Some rides can be booked instantly, while other rides require manual approval from the driver. Either way, booking a carpool ride is fast, simple and easy.'},
        {question:'What are the benefits of travelling by carpool?',answer:'There are multiple advantages to carpooling, over other means of transport. Travelling by carpool is usually more affordable, especially for longer distances. Carpooling is also more eco-friendly, as sharing a car means there will be fewer cars on the road, and therefore fewer emissions. Taking a carpool ride is also a safe way to travel in the current times. Because there are only a few people in a car, you have fewer points of contact and there’s less risk than other travel options.'},
        {question:'How much does a carpool ride cost?',answer:'The costs of a carpool ride can vary greatly, and depend on factors like distance, time of departure, the demand of that ride and more. It is also up to the driver to decide how much to charge per seat, so it’s hard to put an exact price tag on a ride. Check out some of our top carpool destinations to get an idea of price, or start searching for your next carpool ride on  ourcompany.com.'},
        {question:'What are the chances of finding a perfect match for my ride?',answer:'We use our algorithm to find you matches. The more users there are the higher the chances of getting a match. So make sure you tell your friends about this application, and get them to signup! We also have a “referral” promotion scheme.'},
        {question:'I found a match and send a request but did not get a reply?',answer:'You will have to wait for the Car Owner who made the sRide offer to accept your message. You can also call/email to the co-rider.'},
        {question:'I searched but no rides were available? What should I do',answer:'You will have to wait for the Car Owner who made the sRide offer to accept your message. You can also call/email to the co-rider.'},
    ]
    return (
        <>
   <div className='heading flex items-center justify-center my-10'>
    <h1 className='font-bold text-2xl'>Frequently Asked Questions</h1>
    </div>
   <div className='heading flex flex-col items-center justify-center my-10 '>

    {Faqs.map((faqs,i)=>(

        <div className='shadow rounded border border-gray-100 border-t-0 w-4/6' key={i}>
        <div className='p-4 text-xl relative font-medium'>
            <div className='w-5/6'>
            {faqs.question}                
        </div>
        <button aria-label='question-expander'
        className='text-xl absolute top-0 right-0 p-4 focus:outline-none'
        onClick={()=>setExpand({...expand,[i]:!expand[i]})}>
            {expand[i]?<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
</svg>:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>
}
        </button>
        </div>
        <div className={`${expand[i]?'show':'hide'} p-4 ` }>
        {faqs.answer}
    </div>
    </div>
            ))}
        </div>
    </>

  )
}

export default Faqs