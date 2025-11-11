import React, { useContext, useState } from 'react'
import { AppContext } from '../context/Context'
import allmovies from "../assets/data.json"
import { NavLink } from 'react-router-dom'

const MyList = () => {

    const {list,setcurrfilm}=useContext(AppContext)
    const [movies,setmovies]=useState([list])
    const mymovies=allmovies.allmovies

    const filteredmovies=mymovies.filter((item)=>list.includes(item.id))

  return (
    <div className='pt-24 flex justify-start items-center gap-2 flex-wrap'>
        {filteredmovies.length>0 ? filteredmovies.map((item,index)=>{
           return <div key={index} className='w-[200px] h-[250px] rounded-md m-2 border border-[#ff0000ff]'>
                <img src={item.thumbnail} alt={item.name} className='w-full h-[80%]'/>
                {/* <div className='text-center text-2xl'>{item.name}</div> */}
                <NavLink onClick={()=>setcurrfilm(item.id)}  to="/watch" className='block w-full text-center px-3 py-1 bg-[#ff0000ff] h-[20%]'>Watch Now</NavLink>
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