import React, { useEffect } from 'react'
import Screen from '../components/Screen'
import { useNavigate } from 'react-router-dom'

const Watch = () => {
  const navigate=useNavigate()
    const isAdmin=localStorage.getItem("isAdmin")
    useEffect(()=>{if(isAdmin){
      navigate("/admin")
    }},[])
  return (
    <><Screen/></>
  )
}

export default Watch