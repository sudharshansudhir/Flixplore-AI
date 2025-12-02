import React, { useContext, useState } from 'react'
import logo from "../assets/logo.png"
import { AppContext } from '../context/Context'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'
const adminid=import.meta.env.VITE_admin_name
const adminpassword=import.meta.env.VITE_admin_password
// #2626266b
const API_BASE = import.meta.env.VITE_URI;
const Logincard = () => {
    const {setlogin,username,setusername,password,setpassword}=useContext(AppContext)

    const navigate=useNavigate()

    async function checkrule(e){
        e.preventDefault();
        if( !username || !password){
            alert("The field Should not be empty")
        }
        else{
            if(username==adminid && password==adminpassword){
               try{
            const response=await axios.post(`${API_BASE}/api/admin/login`,{adminID:username,password})
            // console.log(response)
            // console.log(response.data)
            // console.log(response.data)
            // console.log(response.data.token)
            localStorage.setItem("token",response.data.token)
            alert("ADMIN LOGIN SUCCESSFUL")
            setlogin(true)
            localStorage.setItem("isAdmin","true")
            // console.log("response is :",response)
            navigate("/admin")
            }
            catch(e){
                // alert(e.response.data.message)
                console.log("error",e)
            } 
            }

            else{
                try{
            const response=await axios.post(`${API_BASE}/api/login`,{username,password})
            
            localStorage.setItem("token",response.data.token)
                alert("Login SUCCESSFUL")
            setlogin(true)
            // console.log("response is :",response)
            navigate("/")
            }
            catch(e){
                alert(e.response.data.message)
            }
            }
            
            
        }
    }

  return (
    <div className='flex pt-26 px-8 mb-8 justify-center items-center'>
    <div className="flex justify-center border border-[#c10404ff] rounded-md bg-[#2626266b] p-4 gap-2 items-center">
            <div className="w-full h-full  hidden md:inline-block">
                <img className="py-26" src={logo} alt="leftSideImage" />
            </div>
        
            <div className="w-full flex flex-col items-center justify-center">
        
                <form className=" md:w-96 w-80 flex flex-col items-center justify-center">
                    <h2 className="text-4xl text-[#f83838ff] font-medium">Sign In</h2>
                    <p className="text-sm text-[#f83838ff] mt-3">Welcome back! Please sign in to continue</p>
        
                    <div className="flex mt-8 items-center w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2">
                        <svg width="18" height="18" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.125 13.125a4.375 4.375 0 0 1 8.75 0M10 4.375a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" stroke="#6B7280" stroke-opacity=".6" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
                        <input type="text" onChange={(e)=>setusername(e.target.value)}  placeholder="Enter your Name" className="bg-transparent text-white placeholder-gray-500/80 outline-none text-sm w-full h-full" required />                 
                    </div>
                    
                    <div className="flex items-center mt-6 w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2">
                        <svg width="13" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 8.5c0-.938-.729-1.7-1.625-1.7h-.812V4.25C10.563 1.907 8.74 0 6.5 0S2.438 1.907 2.438 4.25V6.8h-.813C.729 6.8 0 7.562 0 8.5v6.8c0 .938.729 1.7 1.625 1.7h9.75c.896 0 1.625-.762 1.625-1.7zM4.063 4.25c0-1.406 1.093-2.55 2.437-2.55s2.438 1.144 2.438 2.55V6.8H4.061z" fill="#6B7280"/>
                        </svg>
                        <input type="password" onChange={(e)=>setpassword(e.target.value)}  required placeholder="Password" className="bg-transparent text-white placeholder-gray-500/80 outline-none text-sm w-full h-full"  />
                    </div>
        
        
                    <button onClick={(e)=>checkrule(e)} className="mt-8 w-full py-3 text-center rounded-full text-white bg-[#c10404ff] hover:opacity-90 transition-opacity">
                        Login
                    </button>
                    <p className="text-[#f83838ff] text-sm mt-4">Don’t have an account? <a className="text-white hover:underline" href="#" onClick={()=>navigate("/signup")}>Sign up</a></p>
                </form>
            </div>
    </div>

    </div>
  )
}

export default Logincard