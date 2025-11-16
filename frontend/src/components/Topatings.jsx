import React, { useContext, useEffect, useRef, useState } from 'react'
// import {allmovies} from "../assets/data.json"
import { ChevronRight,ChevronLeft } from "lucide-react";
import { AppContext } from '../context/Context';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
const API_BASE = import.meta.env.VITE_URI;

const Topmovies = () => {
  const [Movies,setMovies]=useState()
  const {list,setlist,login,setuserlist,userlist,setcurrfilm,Wishlistind,setWishlistind} = useContext(AppContext)
  // const filteredmovies=Movies.filter((item)=>(item.ratings>8))

  const [aboutindex,setaboutindex]=useState(null)

  const navigate=useNavigate()

  const scrollRef=useRef(null)
  // console.log(Movies)
    const handleNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 500, behavior: "smooth" });
    }
  };
    const handlePrev = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -500, behavior: "smooth" });
    }
  };

  useEffect(()=>{
    async function fetchdata(){
      const data=await axios.get(`${API_BASE}/`)
      const highrating=data.data
      const filteredratings=highrating.filter((item)=>{return item.ratings>8})
      setMovies(filteredratings)
      console.log(highrating)
    }
    fetchdata()
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
          console.log("Failed to connect",e)
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
// console.log(list)

  return (
    <div className='relative my-8 mx-4'>
      <div className='text-2xl my-4'>Top Ratings</div>
      <div style={{scrollbarWidth: "none", msOverflowStyle: "none",}} ref={scrollRef} className="flex space-x-4 overflow-x-auto scrollbar-hide scroll-smooth">
    <button onClick={handlePrev} className="absolute left-4 z-30  top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 backdrop-blur-md"
          >
            <ChevronLeft size={28} />
          </button>
      {Movies && Movies.map((item,index)=>{
          return  <div key={index} className="relative w-[200px] h-[230px] shrink-0 hover:scale-105 group">
  <img src={item.thumbnail} alt={item.name} width={200} className="h-[220px]  rounded-md" />

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

            })
      }
        <button onClick={handleNext} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 backdrop-blur-md"
      >
        <ChevronRight size={28} />
      </button>
      </div>
    </div>
  )
}

export default Topmovies

// #222020ff #ff0000ff

