import React from 'react'
import {BsApple} from 'react-icons/bs'
import {IoLogoGooglePlaystore} from 'react-icons/io5'

const Features1 = () => {
  return (
    <section id='features'>
        <div className='features-container paddings'>
            <div className='flex justify-center items-center '>
                <div className='w-1/3'>
                    <img src='../assets/image 18.png' alt='feature'/>
                </div>
                <div className='w-1/2'>
                    <h2 className='text-3xl py-10'><span className='font-semibold'>Atom</span>Bank for Your Easy</h2>
                    <p className='font-light text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <div className='py-10 flex'>
                    <button className='primary-btn flex justify-center items-center gap-2'>
                        <div>
                        <IoLogoGooglePlaystore size={27}/>
                        </div>
                        <div>
                            <p className='text-xs font-thin'>GET IT ON</p>
                         Google Play
                         </div>
                         </button>
                         
                    <button className='primary-btn mx-5 flex justify-center items-center gap-2'>
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
        </div>
    </section>
  )
}

export default Features1