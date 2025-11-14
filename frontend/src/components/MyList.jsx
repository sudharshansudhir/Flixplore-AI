import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/Context'
// import allmovies from "../assets/data.json"
import { NavLink } from 'react-router-dom'

const MyList = () => {

    const {Wishlistind,list,setcurrfilm}=useContext(AppContext)
    const [Movies,setMovies]=useState()
    var filteredmovies;
if(Movies){
      filteredmovies=Movies.filter((item)=>list.includes(item.name))
      console.log(filteredmovies,Movies,list,Wishlistind)
      console.log("All movies:",Movies)
      console.log("Filtered movies:",filteredmovies)
      console.log("Wishlist indices:",Wishlistind)
      console.log("List:",list)
    }

    useEffect(()=>{
  fetch("http://localhost:3000/")
  .then((values)=>values.json())
  .then((value)=>setMovies(value))
  .catch((e)=>console.log("Error occured during fetching action movies"))
},[])




  return (
    <div className='pt-24 flex justify-start items-center gap-2 flex-wrap'>
        {(filteredmovies&&filteredmovies.length>0) ? filteredmovies.map((item,index)=>{
           return <div key={index} className='w-[200px] h-[250px] rounded-md m-2 border border-[#ff0000ff]'>
                <img src={item.thumbnail} alt={item.name} className='w-full h-[80%]'/>
                {/* <div className='text-center text-2xl'>{item.name}</div> */}
                <NavLink onClick={()=>setcurrfilm(item._id)}  to="/watch" className='block w-full text-center px-3 py-1 bg-[#ff0000ff] h-[20%]'>Watch Now</NavLink>
                {/* <NavLink    className="border   cursor-pointer hover:border-[#000000] hover:border-2 border-[#ff0000] my-4 text-center text-[18px] rounded-md px-3 py-1  text-white">
                        Watch Now
                      </NavLink> */}
           </div>
            
        }):<div className='pt-10 h-[55vh] text-center w-full text-2xl'>No Movies Found 😢</div>}

    </div>
  )
}

export default MyList

// #ff0000ff