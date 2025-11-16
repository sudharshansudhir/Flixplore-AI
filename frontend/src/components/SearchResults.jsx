import React, { useContext, useEffect, useState } from 'react'
import Navbar from './Navbar'
// import allmovies from "../assets/data.json"
import { AppContext } from '../context/Context'

import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios';
const API_BASE = import.meta.env.VITE_URI;

const SearchResults = ({query}) => {
  
      const {list,setlist,login,userlist,setuserlist,Wishlistind,setcurrfilm,setWishlistind} = useContext(AppContext)
      const navigate=useNavigate()
  const [allmovies,setallmovies]=useState()
 var Movieslist
  if(allmovies){
    Movieslist=allmovies.filter((item)=>item.name.toLowerCase().includes(query.toLowerCase()) )
  }

        
       useEffect(()=>{
  fetch(`${API_BASE}/`)
  .then((values)=>values.json())
  .then((value)=>setallmovies(value))
  .catch((e)=>console.log("Error occured during fetching action movies"))
 async function fetchwishlist(){
      try{
        const wishlist=await axios.get(`${API_BASE}/api/wishlist`,{
        headers:{
          Authorization:localStorage.getItem("token")
        }
      })
      setuserlist(wishlist.data)
      console.log(wishlist.data)
      }
      catch(e){
        if(e.response?.status==401){
          console.log("Failed to connect")
        }
      }

    }

    fetchwishlist()

},[]) 

async function addlist(item){
    console.log("...")
    const data=await axios.post(`${API_BASE}/api/wishlist`,{wishlist:item},{
      headers:{
        Authorization:localStorage.getItem("token")
      }
    })
    try{
        const wishlist=await axios.get(`${API_BASE}/api/wishlist`,{
        headers:{
          Authorization:localStorage.getItem("token")
        }
      })
      setuserlist(wishlist.data)
      console.log(wishlist.data)
      }
      catch(e){
        if(e.response?.status==401){
          console.log("Failed to connect")
        }
      }
    console.log(data)
    
  }

  return (
    <div>
        {/* <Navbar/> */}
        <div className='pt-12 md:pt-24'>
            <div className="flex flex-wrap mt-4 justify-center gap-6 px-6">
        {(Movieslist &&Movieslist.length > 0) ? (
          Movieslist.map((item, index) => (
            <div key={index} className="relative w-[300px] h-[350px] shrink-0 hover:scale-105 group">
  <img src={item.thumbnail} alt={item.name} width={300} className="h-[350px]  rounded-md" />
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-[#222020af] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <div className="text-2xl text-white">{item.name}</div>
    <div className="text-[16px] text-white">{item.ratings} Ratings from IMDB</div>

    <div className="p-4 w-full">
          {login?<div>
        {userlist.includes(item.name) ? (<button onClick={() => navigate("/wishlist")} className="text-[18px] rounded-md bg-[#ff0000ff] px-3 py-1 w-full">
          Go to Wishlist
        </button>
      ) : (<button  onClick={() => {addlist(item.name);setlist([...list, item.name]);
         setWishlistind([...Wishlistind, item.name]);}} className="text-[18px] rounded-md bg-[#ff0000ff] px-3 py-1 w-full">
          Add to Wishlist
        </button>
      )}
      

      <NavLink to={`/watch/${item.name}`} onClick={()=>setcurrfilm(item.name)}   className="border block w-full  cursor-pointer hover:border-[#000000] hover:border-2 border-[#ff0000] my-4 text-center text-[18px] rounded-md px-3 py-1  text-white">
              Watch Now
            </NavLink></div>:<div>
              <NavLink to="/signin"  className="border block w-full  cursor-pointer hover:border-[#000000] hover:border-2 border-[#ff0000] my-4 text-center text-[18px] rounded-md px-3 py-1  text-white">
              Login to Watch
            </NavLink></div>}
        </div>
  </div>
            </div>
          ))
        ) : (
          <p className="text-white text-lg mt-20">No movies found 😢</p>
        )}
      </div>
        </div>
    </div>
  )
}

export default SearchResults