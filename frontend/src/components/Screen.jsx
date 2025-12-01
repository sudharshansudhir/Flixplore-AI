import React, { useContext, useEffect, useState } from 'react'
// import {allmovies} from "../assets/data.json"
import { useParams } from 'react-router-dom'
import axios from 'axios'
const API_BASE = import.meta.env.VITE_URI;

const Screen = () => {
  const {name}=useParams()
  const [founded,setfounded]=useState({})
  useEffect(()=>{
    async function fetchdata(){
      const data=await axios.get(`${API_BASE}/`)
      const movies=data.data
      const found=movies.find(item=>String(item.name)==String(name))
      setfounded(found)
    }
    fetchdata()
  },[name])
  return (
   <div>{
      founded ? <img src={founded.thumbnail} alt={founded.name} className='w-full h-[90vh] '/>:<div className='w-full h-[80vh] flex justify-center items-center text-3xl'>No Results found</div>
    }
    </div> 

     
    // </div>
  )
}

export default Screen