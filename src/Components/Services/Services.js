import React from 'react'
import './Services.css'

const Services = () => {
  return (
   <section id='services'>
    <div className='paddings'>
        <div className='service-container p-12 w-100 flex items-center justify-center gap-20'>
            <div className='flex justify-center w-100 items-center gap-7'>
                <div className='image-container rounded-2xl'>
                <img className='p-7 image' src='../assets/security.png' alt='' width={250}/>
                </div>
                <div>
                <h2 className='font-semibold service-header text-xl'>Fast and secure cashless payment</h2>
                <p className='text-gray-500'>Pay with AtomBank App, online and in stores, and get added to speed security</p>
                </div>
            </div>
            <div className='flex justify-center w-100 items-center gap-7'>
                <div className='image-container rounded-2xl'>
            <img className='p-7 image second-image' src='../assets/account_box.png' alt='' width={250}/>
                </div>
                <div>
            <h2 className='font-semibold service-header text-xl'>Control over your account</h2>
            <p className='text-gray-500'>Your bank account lets you easily lock your card inthe app and help reorder it with a tap of a button</p>
            </div>
            </div>
        </div>
    </div>
   </section>
  )
}

export default Services