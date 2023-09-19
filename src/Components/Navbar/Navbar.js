import React from 'react'
import './Navbar.css'
import {AiOutlineMenu} from 'react-icons/ai'
const Navbar = () => {
  return (
    <nav>

    <div className='flex items-center justify-between nav-padding'>

    <div>
        <img className='mt-2' src='../assets/logo.png' alt='hey'/>
    </div>
        
    <div className='md:hidden sm:hidden lg:block'>
      <a className='mx-4' href='#services'>Services</a>  
      <a className='mx-4' href='#hey'>Features</a>  
      <a className='mx-4' href='#hey'>Pricing</a>  
      <a className='mx-4' href='#hey'>About Us</a>  
    </div>

    <div className='mx-4 md:hidden sm:hidden lg:block'>
       <button className='mx-4 login secondary-btn'>Login</button>
       <button className='register primary-btn'>Register</button>
    </div>
  
    
    </div>
    <div><AiOutlineMenu className='md:visible sm:visible lg:hidden'/></div>
    {/* <AiOutlineMenu className='md:visible sm:visible lg:hidden'/> */}
    </nav>
  )
}

export default Navbar