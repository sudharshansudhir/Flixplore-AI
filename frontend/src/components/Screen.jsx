import React, { useContext, useEffect, useState } from 'react'
// import {allmovies} from "../assets/data.json"
import { AppContext } from '../context/Context'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Screen = () => {
  const {name}=useParams()
  const [founded,setfounded]=useState({})
  useEffect(()=>{
    async function fetchdata(){
      const data=await axios.get("http://localhost:3000/")
      console.log(data)
      const movies=data.data
      console.log(movies)
      console.log(name)
      const found=movies.find(item=>String(item.name)==String(name))
      console.log("found is" ,found)
      setfounded(found)
      console.log("founded is ", founded)
    }
    fetchdata()
  },[name])
  return (
//     <div className='w-full pt-24'>
//       <video
//   src={founded.source}
//   className="w-full h-[80vh] object-cover"
//   controls
//   autoPlay
//   loop
// />
// {/* <></> */}
     <img src={founded.thumbnail} alt={founded.name} className='w-full h-[80vh] '/>
    // </div>
  )
}

export default Screen