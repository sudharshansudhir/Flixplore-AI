import React, { useEffect, useState } from 'react'
const API_BASE = import.meta.env.VITE_URI;
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Adminlist = () => {
    const [users,setusers]=useState([])
    const isAdmin=localStorage.getItem("isAdmin")
    const token=localStorage.getItem("token")
    const [movies,setmovies]=useState([])
    const navigate=useNavigate()
    async function getData(){
            
                const data=await axios.get(`${API_BASE}/api/admin/movies`,{
                headers:{
                    Authorization:localStorage.getItem("token")
                }
            })
            setmovies(data.data.movies)
            setusers(data.data.users)
            
            
        }
    useEffect(()=>{   
        if(!(isAdmin=="true") || !token){
            navigate("/")
        }
        else{     
            getData()
        }
    },[])

    async function deletemovie(id) {
        try{
            const data=await axios.delete(`${API_BASE}/api/admin/movie/${id}`,{
                headers:{
                    Authorization:localStorage.getItem("token")
                }
            })
            alert("DELETED SUCCESSFULLY")
            getData()
        }   
        catch(e){
            console.log(e)
        }
    }

    async function deleteuser(id){
        try{
            const data=await axios.delete(`${API_BASE}/api/admin/user/${id}`,{
                headers:{
                    Authorization:localStorage.getItem("token")
                }
            })
            alert("DELETED SUCCESSFULLY")
            getData()
        }   
        catch(e){
            console.log(e)
        }
    }

    

    




  return (
    <div className='pt-24'>
    <div className='text-3xl'>Welcome Admin,</div>
    <div className='flex mt-16 justify-center items-center'>
    <div className='text-2xl flex justify-center items-center w-[80%] rounded-md bg-[#350707ff] py-4 px-2'>Movies List</div></div>
    <div className='flex flex-wrap mt-4 justify-center gap-6 px-6'>
        {movies&&movies.map((item,index)=>
        <div key={index} className="relative w-[300px] h-[350px] shrink-0 hover:scale-105 group">
            <img src={item.thumbnail} alt={item.name} width={300} className="h-[350px]  rounded-md" />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-[#222020af] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-2xl text-white">{item.name}</div>
                <div className="text-[16px] text-white">{item.ratings} Ratings from IMDB</div>
            
                <div className="p-4 w-full">
                    <button className="text-[18px] rounded-md bg-[#ff0000ff] px-3 py-1 w-full" onClick={()=>navigate(`/admin/edit/${item._id}`)} >
                    Edit
                    </button>
                    <button onClick={()=>deletemovie(item._id)} className="border block w-full  cursor-pointer hover:border-[#000000] hover:border-2 border-[#ff0000] my-4 text-center text-[18px] rounded-md px-3 py-1  text-white">
                    Delete from the Database
                    </button>             
                </div>

            </div>
          </div>
        
        )}
       
    </div>
        <div className='flex mt-16 mb-8 justify-center items-center'>
    <div className='text-2xl flex justify-center items-center w-[80%] rounded-md bg-[#350707ff] py-4 px-2'>Users List</div></div>
    <div className='flex flex-col justify-center rounded-md   items-center'>
        {users&&users.map((item,index)=>{
            return <div className={`flex items-center ${index%2==0 ? "bg-[#aa0000ff] " : "bg-[#ff6a6aff]"} w-[80%] rounded-md px-2 py-4 justify-between`}>
                <div className='text-xl'>
                    {item.username}
                </div>
                <div>
                    <button onClick={()=>deleteuser(item._id)} className='rounded-md  hover:bg-[#391e1eff] hover:cursor-pointer bg-[#350707ff] p-2'>Remove</button>
                </div>
            </div>
        })}
    </div>
    </div>

  )
}

export default Adminlist

//3- #270c0cff 