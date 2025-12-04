import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/Context'
// import allmovies from "../assets/data.json"
import { NavLink } from 'react-router-dom'
import axios from 'axios'
const API_BASE = import.meta.env.VITE_URI;

const MyList = () => {

    const {setcurrfilm}=useContext(AppContext)
    const [Movies,setMovies]=useState()
    async function fetchdata(){
        try{
              const alldata=await axios.get(`${API_BASE}/`)
            const data=await axios.get(`${API_BASE}/api/wishlist`,{
              headers:{
                Authorization:localStorage.getItem("token")
              }
            })
            const mylist=alldata.data.filter((item)=>{return data.data.includes(item.name)})
            setMovies(mylist)
        }
        catch(e){
              if(e.response?.status==401){
            localStorage.removeItem("token");
          setuserdata([])
          Navigate("/signin")
        }
      }
    }

    useEffect(()=>{
           
      fetchdata()
},[])

async function removefromlist(id){
  try{
    console.log(id)
    const data= await axios.delete(`${API_BASE}/api/wishlist/${id}`,{headers:{
      Authorization:localStorage.getItem("token")
    } 
  })

  alert("deleted")
  fetchdata()
  
  }
  catch(e){
    console.log(e)
  }
  
}




  return (
    <div className='pt-24 flex justify-start items-center gap-2 flex-wrap'>
        {(Movies&&Movies.length>0) ? Movies.map((item,index)=>{
           return <div key={index} className='w-[200px] h-[250px] rounded-md m-2 border border-[#ff0000ff]'>
                <img src={
    typeof item.thumbnail === "string"
      ? (item.thumbnail.startsWith("http")
          ? item.thumbnail
          : `${API_BASE}/uploads/${item.thumbnail}`
        )
      : URL.createObjectURL(current.thumbnail) // if File object
  } alt={item.name} className='w-full h-[70%]'/>
                <NavLink onClick={()=>setcurrfilm(item.name)}  to={`/watch/${item.name}`} className='block w-full text-center px-3 py-1 hover:border-1 hover:border-black hover:bg-[#b20f0fff] bg-[#ff0000ff] h-[15%]'>Watch Now</NavLink>
                <button onClick={()=>removefromlist(item.name)} className='block w-full hover:border-black hover:bg-[#272626ff] text-center px-3 py-1 bg-[#0e0e0eff] border-1 border-[#ff0000ff] rounded-md h-[15%]'>Remove from wishlist</button>
                
           </div>
            
        }):<div className='pt-10 h-[55vh] text-center w-full text-2xl'>No Movies Found 😢</div>}

    </div>
  )
}

export default MyList

// #272626ff #b20f0fff