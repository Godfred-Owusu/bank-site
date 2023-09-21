import React from 'react'
import './Footer.css'
import {PiFacebookLogoBold} from 'react-icons/pi'
import {BsInstagram} from 'react-icons/bs'
const Footer = () => {
    const date = new Date().getFullYear()
  return (
    <section>
        <div className='footer-container paddings'>
            <div className='lg:flex lg:w-full md:flex-col md:w-auto sm:flex-col sm:w-auto justify-start items-start gap-10 pb-10'>
                <div className='text-white-500 flex justify-center items-center w-3/12'>
                    <img src='../assets/FooterIcon.png' alt='logo'/> <p><span className='font-semibold'>Atom</span>Bank</p>
                </div>
                <div className='lg:w-3/12 md:w-auto sm:w-auto'>
                    <h2 className='font-bold pb-5'>Lokasi</h2>
                    <p className='text-sm font-light'>Lorem ipsum dolor sit amet</p>
                    <p className='text-sm font-light'>Lorem ipsum dolor sit amet</p>
                    </div>
                <div className='lg:w-3/12 md:w-auto sm:w-auto'>
                    <h2 className='font-bold pb-5'>Kontak</h2>
                   <p className='text-sm font-light'>Lorem ipsum dolor sit amet</p>
                  
                </div>
                <div className='lg:w-3/12 md:w-auto sm:w-auto'>
                    <div className='flex justify-center items-center pb-3'>
                    <BsInstagram size={25} /> 
                    <p className='m-2 text-sm font-light'>@atombank</p>
                    </div>
                    <div className='flex justify-center items-center'>
                    <PiFacebookLogoBold size={25} />
                    <p className='mx-2 text-sm font-light'>@atombank</p>
                    </div>
                </div>
            </div>
                <hr />
                <p className='text-center py-5 text-sm font-light'>GodfredMirekuOwusu@{date}</p>
        </div>
    </section>
  )
}

export default Footer