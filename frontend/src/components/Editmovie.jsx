import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import axios from 'axios'
const API_BASE = import.meta.env.VITE_URI;
const Editmovie = () => {
    const {id}=useParams()
    const [current,setcurrent]=useState(null)
    const [newdata,setnewdata] =useState({})
    
    const [isseries,setisseries]=useState(false)
    async function fetchAll(){
        const movies=await axios.get(`${API_BASE}/`)
        console.log(movies.data)
        console.log(id)
        const filtered=await movies.data.find((item)=>item._id==id)
        setcurrent(filtered)  
        setnewdata(filtered)      
        console.log(filtered)

    }
    useEffect(()=>{
        fetchAll()
    },[])

    useEffect(() => {
        console.log(current)

  if(newdata?.episodes_count){
    setisseries(true)
  }
}, [newdata]);

async function handlesave() {
    const data= await axios.patch(`${API_BASE}/`,{current})
    if(data){
        alert("Saved Successfully")
        fetchAll()
    }
}

function setprev(){
    setcurrent(newdata)
    
}

  return (

    <div className='flex justify-center w-full items-center'>
        {current&&
        <div className="py-20 w-full flex justify-center">
            <form className="md:p-10 p-4 space-y-5 w-full">
                <div>
                    <p className="text-base font-medium">Movie Thumbnail</p>
                    <div className="flex flex-wrap items-center gap-3 mt-2">
                        
                            <label key={1} htmlFor={`image${1}`}>
                                <input accept="image/*" type="file" id={`image${1}`} hidden />
                                <img className="cursor-pointer" src={current.thumbnail} onChange={(e)=>setcurrent({...current,thumbnail:e.target.value})} alt="uploadArea" width={400} height={400} />
                            </label>
                        
                    </div>
                </div>
                <div className="flex flex-col gap-1 max-w-md">
                    <label className="text-base font-medium" htmlFor="product-name">Movie Name</label>
                    <input id="product-name" value={current.name} onChange={(e)=>setcurrent({...current,name:e.target.value})} type="text"  placeholder="eg.Amaran" className="outline-none md:py-2.5 py-2 px-3 rounded border border-red-900" required />
                </div>
                <div className="flex flex-col gap-1 max-w-md">
                    <label className="text-base font-medium" htmlFor="product-year">Year</label>
                    <input id="product-year" value={current.year} onChange={(e)=>setcurrent({...current,year:e.target.value})} type="text"  placeholder="eg.2024" className="outline-none md:py-2.5 py-2 px-3 rounded border border-red-900" required />
                </div>
                <div className="flex flex-col gap-1 max-w-md">
                    <label className="text-base font-medium" htmlFor="product-genre">Genre</label>
                    <input id="product-genre" value={current.genre.join(",")} onChange={(e)=>setcurrent({...current,genre:e.target.value.split(",")})} type="text" placeholder="eg.Action,Romantic,Emotional" className="outline-none md:py-2.5 py-2 px-3 rounded border border-red-900" required />
                </div>
                <div className="flex flex-col gap-1 max-w-md">
                    <label className="text-base font-medium" htmlFor="product-description">Story Line</label>
                    <textarea id="product-description" value={current.story_line} onChange={(e)=>setcurrent({...current,story_line:e.target.value})} rows={4} className="outline-none md:py-2.5 py-2 px-3 rounded border border-red-900 resize-none"  placeholder="eg.The Story based on Indian Army Major Mukund Varadarajan life."></textarea>
                </div>
                <div className="flex flex-col gap-1 max-w-md">
                    <label className="text-base font-medium" htmlFor="product-runtime">Runtime</label>
                    <input id="product-runtime" value={current.runtime} onChange={(e)=>setcurrent({...current,runtime:e.target.value})} type="text"  placeholder="eg.148min" className="outline-none md:py-2.5 py-2 px-3 rounded border border-red-900" required />
                </div>
                <div className="flex flex-col gap-1 max-w-md">
                    <label className="text-base font-medium" htmlFor="product-cast">Cast</label>
                    <input id="product-cast" type="text" value={current.cast.join(",")} onChange={(e)=>setcurrent({...current,cast:e.target.value.split(",")})} placeholder="eg.Sivakarthikeyan,Saipallavi" className="outline-none md:py-2.5 py-2 px-3 rounded border border-red-900" required />
                </div>
                <div className="flex flex-col gap-1 max-w-md">
                    <label className="text-base font-medium" htmlFor="product-crew">Crew</label>
                    <input id="product-crew" type="text" value={current.crew.join(',')} onChange={(e)=>setcurrent({...current,crew:e.target.value.split(",")})} placeholder="eg.Rajkumar Periyasamy,Kamal Haasan,Gv Prakash Kumar" className="outline-none md:py-2.5 py-2 px-3 rounded border border-red-900" required />
                </div>
                <div className="flex flex-col gap-1 max-w-md">
                    <label className="text-base font-medium" htmlFor="product-language">Languages</label>
                    <input id="product-language" type="text" value={current.languages_available.join(",")} onChange={(e)=>setcurrent({...current,languages_available:e.target.value.split(",")})} placeholder="eg.Tamil,Telugu,Malayalam,Hindi,Kannada" className="outline-none md:py-2.5 py-2 px-3 rounded border border-red-900" required />
                </div>

                <div className='flex items-center gap-4'>
                    <span className="text-base font-medium">Movies</span>
                    <label className="relative inline-flex items-center cursor-pointer gap-3">
                        <input type="checkbox" checked={isseries} onChange={()=>setisseries(!isseries)} className="sr-only peer" />
                        
                        <div className="w-12 h-7 bg-slate-300 rounded-full peer peer-checked:bg-red-600 transition-colors duration-200"></div>
                        <span className="dot absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-5"></span>
             
                    </label>
                    <span className="text-base font-medium">Series</span>
                </div>
                {isseries&&<>
                <div className="flex flex-col gap-1 max-w-md">
                    <label className="text-base font-medium" htmlFor="product-sno">Season No</label>
                    <input id="product-sno" type="text" value={current.seasons_count} onChange={(e)=>setcurrent({...current,seasons_count:e.target.value})} placeholder="eg.Season 3" className="outline-none md:py-2.5 py-2 px-3 rounded border border-red-900" required />
                </div>
                <div className="flex flex-col gap-1 max-w-md">
                    <label className="text-base font-medium" htmlFor="product-eno">Episode No</label>
                    <input id="product-eno" type="text" value={current.episodes_count} placeholder="eg.Episode 7" onChange={(e)=>setcurrent({...current,episodes_count:e.target.value})} className="outline-none md:py-2.5 py-2 px-3 rounded border border-red-900" required />
                </div>
                </>
                }
                
                
                <NavLink className="px-8 py-2.5 bg-red-500 text-white font-medium mx-4 hover:bg-red-700 rounded" onClick={()=>{handlesave()}}>Save</NavLink>
                <NavLink className="px-8 py-2.5 bg-red-500 text-white font-medium hover:bg-red-700 rounded" onClick={()=>{setprev()}}>Cancel</NavLink>
            </form>
        </div>
        }
        
    </div>
  )
}

export default Editmovie


// #2a2a2aff