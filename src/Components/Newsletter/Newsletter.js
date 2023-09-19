import React from 'react'
import './Newsletter.css'
const Newsletter = () => {
  return (
   <section id='newsletter'>
        <div className='wrapper pt-12'>
        <div className='news-container paddings'>
            <div className='text-center pb-10'>
                <h2 className='text-3xl '>Subscribe Newsletter</h2>
                <p className='mb-6 mt-3 text'>Financial Transaction remotely using mobile</p>
                <div className='mb-5'>
                <input className='p-2 rounded-xl pl-5 mx-7 my-4' placeholder='Enter your name'/> 
                <button className='primary-btn'>Get Started</button>
                </div>
            </div>
        </div>
        </div>
   </section>
  )
}

export default Newsletter