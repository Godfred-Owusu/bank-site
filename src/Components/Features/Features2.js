import React from 'react'
import './Features.css'
import {BsArrowRight} from 'react-icons/bs'

const Features2 = () => {
  return (
    <section id='features'>
        {/* <div className='features-container paddings'>
            <div className='lg:flex-row md:flex-col-reversed sm:flex-col-reverse justify-center items-center gap-10 lg:m-0 md:m-auto sm:m-auto'>
                <div className='text-content text-start lg:w-1/2 md:w-1/2 md:mx-auto sm:w-1/2 sm:mx-auto '>
                    <h2 className='text-3xl py-10'><span className='font-semibold'>Atom</span>Bank for Your Easy</h2>
                    <p className='font-light text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <div className='flex items-center justify-start py-10'>
                     <a href='link-here' className='underline'>See How It Works </a>
                     <BsArrowRight className='mx-2' />
                     </div>
                </div>
                <div className='w-1/3 lg:w-1/3 md:w-1/3 md:mx-auto sm:w-1/3 sm:mx-auto'>
                    <img src='../assets/image 19.png' alt='feature'/>
                </div>
            </div>
        </div> */}

<div className=' paddings'>
            <div className='features-container flex-row  justify-center items-center gap-10 '>
                <div className='text-content text-start w-1/2'>
                    <h2 className='text-3xl py-10'><span className='font-semibold'>Atom</span>Bank for Your Easy</h2>
                    <p className='font-light text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <div className='flex items-center justify-start py-10'>
                     <a href='link-here' className='underline'>See How It Works </a>
                     <BsArrowRight className='mx-2' />
                     </div>
                </div>
                <div className='w-1/3'>
                    <img className='lg:w-1/3 ' src='../assets/image 19.png' alt='feature'/>
                </div>
            </div>
        </div>
    </section>

//     <section id='features'>
//     <div className='features-container paddings'>
//         <div className='flex justify-center items-center gap-10'>
//             <div className='w-1/2'>
//                 {/* <h2 className='text-3xl py-10'><span className='font-semibold'>Atom</span>Bank for Your Easy</h2> */}

//                 <h2 className='text-3xl py-10'>{props.title}</h2>
//                 <p className='font-light text-sm'>{props.text}</p>
//                 <div className='flex items-center justify-start py-10'>
//                  <a href='link-here' className='underline'>Learn More </a>
//                  <BsArrowRight className='mx-2' />
//                  </div>
//             </div>
//             <div className='w-1/3'>
//                 <img src={props.image} alt='feature'/>
//             </div>
//         </div>
//     </div>
// </section>
  )
}
export default Features2