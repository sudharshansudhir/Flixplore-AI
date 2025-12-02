// import React, { useContext } from 'react'
import Footer from '../components/Footer'
import Welcome from '../components/Welcome'
import Topmovies from '../components/Topmovies'
import Topseries from '../components/Topseries'
import Romantic from '../components/Romantic'
import Action from '../components/Action'
import Drama from '../components/Drama'
import Emotional from '../components/Emotional'
import Topratings from '../components/Topatings'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
// import Pricing from '../components/Pricing'
// import { AppContext } from '../context/Context'

const Home = () => {
  // const {login}=useContext(AppContext)
  const navigate=useNavigate()
  const isAdmin=localStorage.getItem("isAdmin")
  useEffect(()=>{if(isAdmin){
    navigate("/admin")
  }},[])
  return (
    <div>
      <Welcome/>
      <Topmovies/>
      <Topseries/>
      <Romantic/>
      <Action/>
      <Drama/>
      <Emotional/>
      <Topratings/>
      {/* {login&&<Pricing/>} */}
      <Footer/>
    </div>
  )
}

export default Home