import React, { useContext, useEffect, useState } from 'react'
// import {allmovies} from "../assets/data.json"
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
const API_BASE = import.meta.env.VITE_URI;

const Screen = () => {
  const {name}=useParams()
  const [founded,setfounded]=useState({})
  const navigate=useNavigate()
  const token=localStorage.getItem("token")
  useEffect(()=>{if(!token){
    navigate("/signin")
  }},[])
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
   <div>
  {founded ? (
    founded.videosrc ? (
      // 🎥 Show VIDEO if available
      <video
        className="w-full h-[90vh]"
        autoPlay
        muted
        loop
        controls
      >
        <source
          src={
            typeof founded.videosrc === "string"
              ? (founded.videosrc.startsWith("http")
                  ? founded.videosrc
                  : `${API_BASE}/uploads/${founded.videosrc}`
                )
              : founded.videosrc instanceof File
                ? URL.createObjectURL(founded.videosrc)
                : null
          }
        />
      </video>
    ) : (
      // 🖼️ Show IMAGE if no video
      <img
        src={
          typeof founded.thumbnail === "string"
            ? (founded.thumbnail.startsWith("http")
                ? founded.thumbnail
                : `${API_BASE}/uploads/${founded.thumbnail}`
              )
            : null
        }
        alt={founded.name}
        className="w-full h-[90vh]"
      />
    )
  ) : (
    // ❌ No results
    <div className="w-full h-[80vh] flex justify-center items-center text-3xl">
      No Results found
    </div>
  )}
</div>
 

     
    // </div>
  )
}

export default Screen