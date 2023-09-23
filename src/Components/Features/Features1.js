import React from 'react'
import './Features.css'
import {BsApple} from 'react-icons/bs'
import {IoLogoGooglePlaystore} from 'react-icons/io5'

const Features1 = () => {
  return (
    <section id='features'>
        {/* <div className='features-container paddings'>
            <div className='lg:flex justify-center items-center md:block md:m-auto sm:m-auto'>
                <div className='lg:w-1/3 md:w-1/2 md:mx-auto sm:w-1/2 sm:mx-auto'>
                    <img className='lg:w-1/3 ' src='../assets/image 18.png' alt='feature'/>
                </div>
                <div className='lg:w-1/2 md:w-1/2 md:mx-auto sm:w-1/2 sm:mx-auto'>
                    <h2 className='text-3xl py-10'><span className='font-semibold'>Atom</span>Bank for Your Easy</h2>
                    <p className='font-light text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <div className='py-10 lg:flex md:block sm:block md:p-2 '>
                    <button className='primary-btn flex  justify-center lg:mb-0 md:mb-5 sm:mb-5 items-center gap-2 '>
                        <div>
                        <IoLogoGooglePlaystore className='' size={27}/>
                        </div>
                        <div>
                            <p className='text-xs font-thin'>GET IT ON</p>
                         Google Play
                         </div>
                         </button>
                         
                    <button className='primary-btn w-auto lg:mx-5 lg:mt-0 md:mx-0 sm:mx-0 sm:mt-2 md:mt-2 flex justify-center items-center gap-2'>
                    <div>
                    <BsApple color='white' size={25} />
                        </div>
                        <div>
                        <h6 className='text-xs font-thin text-white-500'>Download on the</h6>
                       <h2 className='text-white-500'> App Store</h2>
                         </div>
                       </button>
                    </div>
                </div>
            </div>
        </div> */}

<div className=' paddings'>
            <div className='features-container flex justify-center items-center gap-16 '>
                <div className='image-content w-1/3'>
                    <img className='w-full ' src='../assets/image 18.png' alt='feature'/>
                </div>
                <div className='text-content w-1/2'>
                    <h2 className='text-3xl py-10'><span className='font-semibold'>Atom</span>Bank for Your Easy</h2>
                    <p className='font-light text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <div className='py-10 flex '>
                    <button className='primary-btn flex justify-center items-center gap-2 '>
                        <div>
                        <IoLogoGooglePlaystore className='download' size={27}/>
                        </div>
                        <div>
                            <p className='text-xs d-text font-thin'>GET IT ON</p>
                         Google Play
                         </div>
                         </button>
                         
                    <button className='primary-btn w-auto mx-5 flex justify-center items-center gap-2'>
                    <div>
                    <BsApple className='download' color='white' size={25} />
                        </div>
                        <div>
                        <h6 className='text-xs d-text font-thin text-white-500'>Download on the</h6>
                       <h2 className='text-white-500'> App Store</h2>
                         </div>
                       </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Features1