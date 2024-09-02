import React from 'react'
import { reviews } from '../constants'
import ReviewCard from '../components/ReviewCard'

const CustomerReview = () => {
  return (
    <section className='max-container'>
      <h3 className='font-palanquin text-center font-bold text-4xl'>what are <span className='text-coral-red'>customer</span>
      <br />say</h3>
      <p className='info-text m-auto mt-4 max-w-lg text-center'>here genine dtories from costomers</p>
      <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
        {reviews.map((review)=>(
          <ReviewCard key={review.customerName} imgURL={review.imgURL} customerName={review.customerName} rating={review.rating} feedback={review.feedback}/>
        ))}
      </div>

    </section>
  )
}

export default CustomerReview