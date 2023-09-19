import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Services from './Components/Services/Services'
import Features1 from './Components/Features/Features1'
import Features2 from './Components/Features/Features2'
import Features3 from './Components/Features/Features3'
import Newsletter from './Components/Newsletter/Newsletter'


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Features1 />
      <Features2 />
      <Features3 />
      <Newsletter />
    </div>
  )
}

export default App
