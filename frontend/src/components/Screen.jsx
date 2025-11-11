import React, { useContext, useState } from 'react'
import {allmovies} from "../assets/data.json"
import { AppContext } from '../context/Context'

const Screen = () => {
 const [movies,setMovies]=useState(allmovies)
 const {currfilm}=useContext(AppContext)
 console.log(currfilm)
 const founded=movies.find((item)=>item.id===currfilm)
 console.log(founded)
  return (
    <div className='w-full pt-24'>
     <img src={founded.thumbnail} alt={founded.name} className='w-full h-[80vh] '/>
    </div>
  )
}

export default Screen