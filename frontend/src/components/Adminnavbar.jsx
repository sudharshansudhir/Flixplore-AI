import React from 'react'
import logo from "../assets/logo.png"

const Adminnavbar = () => {
  return (
    <div className='flex bg-[#313131ff] justify-between top-0 fixed w-full z-20 items-center'>
        <img src={logo} alt="logo" className='w-30'  />
        <div className='text-3xl text-[#960404ff] font-bold'>ADMIN DASHBOARD</div>
    </div>
  )
}

export default Adminnavbar

// #313131ff