import React from 'react'
import { offer } from '../assets/images'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'

const SpecialOffer = () => {
  return (
    <section className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>
      <img src={offer} alt="offer" width={773} height={687} className='object-contain w-full' />
      </div>
      <div>
      <p className="text-xl font-montserrat text-coral-red">
          Our summer Collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            the new arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3 ">nike</span>shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm ">
          discoer
        </p>
        <div className='flex flex-wrap gap-4'>
        <Button label="shop now" iconURL={arrowRight} />
        <Button label="learn more" backgroundColor='bg-white' textColor='text-slate-gray' iconURL={arrowRight} /></div>
      </div>

    </section>
  )
}

export default SpecialOffer