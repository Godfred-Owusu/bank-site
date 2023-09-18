import React from 'react'

const Hero = () => {
  return (
    <section id='hero'>
        <div className='hero-container flex items-center justify-between paddings'>
        <div className='w-full'>
           <h1 className='text-5xl'>Easy way to <br /> save your Money <br />with <span>Atom</span>Bank</h1>
        </div>
        <div className='w-full'>
            <img src='../assets/hero-laptop.png' alt=''/>
        </div>
        </div>
    </section>
  )
}

export default Hero