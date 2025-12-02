import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Allseries from '../components/Allseries'
import Footer from '../components/Footer'
import Welcome from '../components/Welcome'
import { useNavigate } from 'react-router-dom'


const Series = () => {
  const navigate=useNavigate()
  const isAdmin=localStorage.getItem("isAdmin")
  useEffect(()=>{if(isAdmin){
    navigate("/admin")
  }},[])
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