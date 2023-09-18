import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>

    <div className='flex items-center justify-between nav-padding'>

    <div>
        <img className='mt-2' src='../assets/logo.png' alt='hey'/>
    </div>
        
    <div>
      <a className='mx-4' href='#hey'>Services</a>  
      <a className='mx-4' href='#hey'>Features</a>  
      <a className='mx-4' href='#hey'>Pricing</a>  
      <a className='mx-4' href='#hey'>About Us</a>  
    </div>

    <div className='mx-4'>
       <button className='mx-4 login'>Login</button>
       <button className='register'>Register</button>
    </div>
    
    </div>
    </nav>
  )
}

export default Navbar