import React from 'react'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'

const Subscribe = () => {
  return (
    <section className='max-container flex justify-between items-center max-lg:flex-col gap-10' id='contact-us'>
      <h3 className='text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold'>sign up for <span className='text-coral-red'>updates nd newsletter</span></h3>
      <div className='max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full'><input type="text" placeholder='subscribenike.com' className='input'/><div className='flex max-sm:justify-end items-center max-sm:w-full'><Button label="Sign up" iconURL={arrowRight}/></div>
      </div>

      
    </section>
  )
}

export default Subscribe