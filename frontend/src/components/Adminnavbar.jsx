import React from 'react'
import logo from "../assets/logo.png"
import { NavLink, useNavigate } from 'react-router-dom'

const Adminnavbar = () => {
  const navigate=useNavigate()
  async function logouthandle(){
    localStorage.removeItem("token")
    localStorage.removeItem("isAdmin")
    navigate("/signin")
  }
  return (
    <div className='flex bg-[#313131ff] justify-between top-0 fixed w-full z-20 items-center'>
        <img src={logo} alt="logo" className='w-30'  />
        <div className='text-3xl text-[#d01313ff] font-bold'>ADMIN DASHBOARD</div>
        <NavLink to="/signin" onClick={()=>logouthandle()} className="px-3 py-1 border border-[#f83838ff] rounded-md bg-[#000000] hover:bg-[#c10404ff] hover-border-[#000000] text-xl">Logout</NavLink>
    </div>
  )
}

export default Adminnavbar

// #d01313ff