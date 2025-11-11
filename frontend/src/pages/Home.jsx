import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Welcome from '../components/Welcome'
import Topmovies from '../components/Topmovies'
import Topseries from '../components/Topseries'
import Romantic from '../components/Romantic'
import Action from '../components/Action'
import Drama from '../components/Drama'
import Emotional from '../components/Emotional'
import Topratings from '../components/Topatings'
import Pricing from '../components/Pricing'
import { AppContext } from '../context/Context'

const Home = () => {
  const {login}=useContext(AppContext)
  return (
    <div>
      {/* <Navbar/> */}
      <Welcome/>
      <Topmovies/>
      <Topseries/>
      <Romantic/>
      <Action/>
      <Drama/>
      <Emotional/>
      <Topratings/>
      {!login&&<Pricing/>}
      
      <Footer/>
    </div>
  )
}

export default Home