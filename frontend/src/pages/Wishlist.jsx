import React, { useEffect } from 'react'
import MyList from '../components/MyList'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'

const Wishlist = () => {
  const navigate=useNavigate()
  const token=localStorage.getItem("token")

  useEffect(()=>{
    if(!token){
      navigate("/signin")
    }
  },[])
  return (
    <div>
      <MyList  />
      <Footer/>
    </div>
  )
}

export default Wishlist