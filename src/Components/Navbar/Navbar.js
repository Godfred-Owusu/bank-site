import React , {useState}from 'react'
import './Navbar.css'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
const Navbar = () => {
  const [active,setActive] = useState('true')
    function isPressed(){
      setActive(prevState => !prevState)
      console.log(active)
    }
  return (
    <nav>

    <div className='flex items-center justify-between nav-padding'>

    <div>
        <img className='mt-2' src='../assets/logo.png' alt='hey'/>
    </div>
        
    <div className='links'>
      <a className='mx-4' href='#services'>Services</a>  
      <a className='mx-4 ' href='#hey'>Features</a>  
      <a className='mx-4' href='#hey'>Pricing</a>  
      <a className='mx-4' href='#hey'>About Us</a>  
    </div>

    <div className='mx-4 '>
       <button className='mx-4 btn login secondary-btn'>Login</button>
       <button className='register btn primary-btn'>Register</button>
       </div>
       {
        active ?  <AiOutlineMenu onClick={isPressed} className='nav-icon'/> :
        <div>
          <AiOutlineClose onClick={isPressed} className='pop-up nav-icon'/>
          <div className='mobile-nav ' onClick={isPressed}>
        
      <a className=' ' href='#services'>Services</a>  
      <a className='' href='#features'>Features</a>  
      <a className='' href='#hey'>Pricing</a>  
      <a className='' href='#hey'>About Us</a>  
    
       <button className='login secondary-btn'>Login</button>
       <button className='register primary-btn'>Register</button>
      
          </div>
        </div>
       }
     
  
    
    </div>
    <div>
      </div>
    {/* <AiOutlineMenu className='md:visible sm:visible lg:hidden'/> */}
    </nav>
  )
}

export default Navbar