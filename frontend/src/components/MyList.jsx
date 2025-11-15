import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/Context'
// import allmovies from "../assets/data.json"
import { NavLink } from 'react-router-dom'
import axios from 'axios'

const MyList = () => {

    const {setcurrfilm}=useContext(AppContext)
    const [Movies,setMovies]=useState()

    useEffect(()=>{
      
      async function fetchdata(){
        const alldata=await axios.get("http://localhost:3000/")
        const data=await axios.get("http://localhost:3000/api/wishlist",{
          headers:{
            Authorization:localStorage.getItem("token")
          }
        })
        const mylist=alldata.data.filter((item)=>{return data.data.includes(item.name)})
        setMovies(mylist)
        console.log(mylist)
      }
      fetchdata()
},[])




  return (
    <div className='pt-24 flex justify-start items-center gap-2 flex-wrap'>
        {(Movies&&Movies.length>0) ? Movies.map((item,index)=>{
           return <div key={index} className='w-[200px] h-[250px] rounded-md m-2 border border-[#ff0000ff]'>
                <img src={item.thumbnail} alt={item.name} className='w-full h-[80%]'/>
                {/* <div className='text-center text-2xl'>{item.name}</div> */}
                <NavLink onClick={()=>setcurrfilm(item.name)}  to={`/watch/${item.name}`} className='block w-full text-center px-3 py-1 bg-[#ff0000ff] h-[20%]'>Watch Now</NavLink>
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