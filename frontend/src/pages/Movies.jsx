import { useNavigate } from 'react-router-dom'
import Allmovies from '../components/Allmovies'
import Footer from '../components/Footer'
import Welcome from '../components/Welcome'
import { useEffect } from 'react'
const Movies = () => {
const navigate=useNavigate()
  const isAdmin=localStorage.getItem("isAdmin")
  useEffect(()=>{if(isAdmin){
    navigate("/admin")
  }},[])
  return (
    <div>
      {/* <Navbar/> */}
      <Welcome/>
      <Allmovies/>
      <Footer/>

    </div>
  )
}

export default Movies