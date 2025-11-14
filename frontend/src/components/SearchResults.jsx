import React, { useContext, useEffect, useState } from 'react'
import Navbar from './Navbar'
// import allmovies from "../assets/data.json"
import { AppContext } from '../context/Context'
import { NavLink, useNavigate } from 'react-router-dom'

const SearchResults = ({query}) => {
  
      const {list,setlist,Wishlistind,setcurrfilm,setWishlistind} = useContext(AppContext)
      const navigate=useNavigate()
  const [allmovies,setallmovies]=useState()
 var Movieslist
  if(allmovies){
    Movieslist=allmovies.filter((item)=>item.name.toLowerCase().includes(query.toLowerCase()) )
  }

        
       useEffect(()=>{
  fetch("http://localhost:3000/")
  .then((values)=>values.json())
  .then((value)=>setallmovies(value))
  .catch((e)=>console.log("Error occured during fetching action movies"))
},[]) 

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