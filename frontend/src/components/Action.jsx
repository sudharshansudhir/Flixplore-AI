import React, { useContext, useRef, useState } from 'react'
// import {action} from "../assets/data.json"
import { ChevronRight,ChevronLeft } from "lucide-react";
import { AppContext } from '../context/Context';
import { NavLink, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Action = () => {
  const [Movies,setMovies]=useState()
  const {list,setlist,setcurrfilm,Wishlistind,setWishlistind} = useContext(AppContext)

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
// console.log(list)

useEffect(()=>{
  fetch("http://localhost:3000/api/action")
  .then((values)=>values.json())
  .then((value)=>setMovies(value))
  .catch((e)=>console.log("Error occured during fetching action movies"))
},[])

  return (
    <div className='relative my-8 mx-4'>
      <div className='text-2xl my-4'>Action Picks</div>
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
          {Wishlistind.includes(item.name) ? (<button onClick={() => navigate("/wishlist")} className="text-[18px] rounded-md bg-[#ff0000ff] px-3 py-1 w-full">
              Go to Wishlist
            </button>
          ) : (<button  onClick={() => { setlist([...list, item.name]);
             setWishlistind([...Wishlistind, item.name]);}} className="text-[18px] rounded-md bg-[#ff0000ff] px-3 py-1 w-full">
              Add to Wishlist
            </button>
          )}
    
          <NavLink to="/watch" onClick={()=>setcurrfilm(item.name)}   className="border block w-full  cursor-pointer hover:border-[#000000] hover:border-2 border-[#ff0000] my-4 text-center text-[18px] rounded-md px-3 py-1  text-white">
            Watch Now
          </NavLink>
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

export default Action

// #222020ff #ff0000ff