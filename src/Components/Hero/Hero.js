import React from 'react'
import './Hero.css'
import {BsArrowRight} from 'react-icons/bs'

const Hero = () => {
  return (
    <section id='hero'>
        <div className='hero-container md:block lg:flex items-center justify-between gap-4 paddings'>
        <div className='w-full'>
           <h1 className='lg:text-6xl md:text-5xl sm:text-4xl font-medium hero-text'>Easy way to <br /> save your Money <br />with <span className='bank-name'><span className='font-semibold'>Atom</span>Bank.</span></h1>
           <p className='py-10 font-light text-sm'>The best place to transact and save money. We make all payment easier and simplier. Receive and send payment funds without cash</p>
            <div className='flex items-center justify-start'>
                 <div>
                    <button className='primary-btn'>Download Now</button>
                </div>
                <div className='flex items-center justify-center mx-10'>
                     <a href='link-here' className='underline'>See How It Works </a>
                     <BsArrowRight className='mx-2' />
                </div>
           </div>
        </div>
        <div className='w-full'>
            <img src='../assets/hero-laptop.png' alt=''/>
        </div>
        </div>
    </section>
  )
}

export default Hero