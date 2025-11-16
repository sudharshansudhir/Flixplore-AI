import React, { useContext, useEffect, useState } from 'react'
import logo from "../assets/logo.png"
import { BsSearch, BsFillPersonFill  } from "react-icons/bs";
import {NavLink, useNavigate} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import { AppContext } from '../context/Context';

const Navbar = ({setquery}) => {
  const [mobile,setmobile]=useState(false);
  const {login,setlogin}=useContext(AppContext)
  // const [search,setsearch]=useState(false);
  function mobileview(){
    setmobile(!mobile)
  }
  const navigate=useNavigate()

  function navi(e){
    setquery(e.target.value)
    navigate("/search")
  }

 useEffect(()=>{
  const islogin=localStorage.getItem("token")
  if(islogin){
    setlogin(true)
  }
  else{
    setlogin(false)
  }
 },[])

  return (
    <div className='relative'>
        <div className='md:flex hidden fixed z-15 top-0 p-3 bg-[#000000] w-full items-center justify-between'>
              
              <div className='flex text-2xl justify-between items-center w-[30%]'>
                  <img src={logo} alt="flixplore" className='w-20' />
                  <NavLink className={({ isActive }) => isActive ? 'active-link' : 'nav-hover' } to="/">Home</NavLink>
                  <NavLink className={({ isActive }) => isActive ? 'active-link' : 'nav-hover' }  to="/movies">Movies</NavLink>
                  <NavLink className={({ isActive }) => isActive ? 'active-link' : 'nav-hover' }  to="/series">Series</NavLink>
                  <NavLink className={({ isActive }) => isActive ? 'active-link' : 'nav-hover' }  to="/wishlist">MyList</NavLink>
              </div>
            <div className='flex text-2xl justify-around items-center w-[30%]'>
    
              <input onChange={navi} type="text" name="search" id="search" placeholder="Type movie or series" className="py-1 px-3 rounded-md bg-[#222121ff] text-white border border-gray-600 focus:ring-2 focus:ring-red-500"/>
              {login?<NavLink className={({ isActive }) => isActive ? 'nav-hover active-link' : 'nav-hover' } to="/profile"><BsFillPersonFill/></NavLink>:<NavLink className="px-3 py-1 border border-[#f83838ff] rounded-md bg-[#000000] hover:bg-[#c10404ff] hover-border-[#000000]" to="/signin">Login</NavLink>}
            </div>
        </div>

<div className='relative'>
    <div className='md:hidden w-full bg-[#000000] fixed z-20 flex justify-between items-center'>
      <div>
        <img src={logo} alt="flixplore" className='w-10'/>
      </div>
      <input onChange={navi}  type="text" name="search" id="search" placeholder="Type movie name..." className="py-1 md:px-3 px-2 m-1  rounded-md bg-[#222121ff] text-white border border-gray-600 focus:ring-2 focus:ring-red-500"/>

      <div>
          <button onClick={mobileview}><GiHamburgerMenu/></button>
{mobile&&
    <div className='absolute z-20 mt-2 text-lg flex flex-col justify-center items-end w-[35%] bg-[#222121ff] right-0 rounded'>
      <NavLink className={({ isActive }) => isActive ? 'active-link-mob' : 'nav-hover-mob' } to="/">Home</NavLink>
      <NavLink className={({ isActive }) => isActive ? 'active-link-mob' : 'nav-hover-mob' }  to="/movies">Movies</NavLink>
      <NavLink className={({ isActive }) => isActive ? 'active-link-mob' : 'nav-hover-mob' }  to="/series">Series</NavLink>
      <NavLink className={({ isActive }) => isActive ? 'active-link-mob' : 'nav-hover-mob' }  to="/wishlist">MyList</NavLink>
      {login?<NavLink className={({ isActive }) => isActive ? 'nav-hover active-link' : 'nav-hover' } to="/profile"><BsFillPersonFill/></NavLink>:<NavLink className="px-3 py-1 border border-[#f83838ff] rounded-md bg-[#000000] hover:bg-[#c10404ff] hover-border-[#000000]" to="/signin">Login</NavLink>}
    </div>
}

      </div>
    </div>
    </div>
    </div>

      
  )
}

export default Navbar

// #222121ff