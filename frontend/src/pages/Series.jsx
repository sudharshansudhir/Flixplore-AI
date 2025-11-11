import React from 'react'
import Navbar from '../components/Navbar'
import Allseries from '../components/Allseries'
import Footer from '../components/Footer'
import Welcome from '../components/Welcome'


const Series = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <Welcome/>
      <Allseries/>
      <Footer/>
    </div>
  )
}

export default Series