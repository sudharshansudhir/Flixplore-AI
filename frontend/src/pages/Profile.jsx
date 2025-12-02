import React, { useEffect } from 'react'
import ProfileCard from '../components/ProfileCard'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  const navigate=useNavigate()
  const isAdmin=localStorage.getItem("isAdmin")
  const token=localStorage.getItem("token")
  useEffect(()=>{
  console.log(token)
    if(isAdmin){
    navigate("/admin")
  }
  if(!token){
    navigate("/signin")
  }
},[])
  return (
    <div><ProfileCard/>
    <Footer/></div>
  )
}

export default Profile