import React, { useContext, useState } from 'react'
import { AppContext } from '../context/Context';
import { data, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
const API_BASE = import.meta.env.VITE_URI;

const ProfileCard = () => {
  const [editMode, setEditMode] = useState(false);
  const {setlogin } = useContext(AppContext);
  const [userdata,setuserdata]=useState([])
  const [plan, setPlan] = useState("Premium");
  const [validity, setValidity] = useState("31 Dec 2025");
  const navigate=useNavigate()
  const [username,setusername]=useState("")
  const[email,setemail]=useState("")
  // const [editId,seteditId]=useState()

  const handleSave = () => setEditMode(false);
function validitydate(datenow){
  const date = new Date(datenow);
  date.setMonth(date.getMonth() + 1);
  return `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`;
}

  useEffect(()=>{
    async function fetchUser(){
      try{
        const user=await axios.get(`${API_BASE}/api/profile`,{
              headers:{
                Authorization:localStorage.getItem("token")
              }
        })
        setuserdata([user.data.data])
      }
      catch(e){
        if(e.response?.status==401){
        localStorage.removeItem("token");
      setuserdata([])
      // window.location.href = "/signin";
      navigate("/signin")
      }
    }
    
  }
  fetchUser()
  },[])

  async function deleteprofile(delId){
    try{
      const data=await axios.delete(`${API_BASE}/api/profile/${delId}`,{
        headers:{
          Authorization:localStorage.getItem("token") 
    }})
    alert("Profile Deleted Successfully")
    setuserdata([])
    localStorage.removeItem("token");
    setlogin(false);
    navigate('/signin')
  }
  catch(e){
    console.log(e)
  }
  }
  // console.log(userdata)
  async function edit(editId){
    const payload={}
    try{
      if(username) payload.username=username;
      if(email) payload.email=email;
      const data=await axios.patch(`${API_BASE}/api/profile`,{editno:editId,payload},{
      headers:{
        Authorization:localStorage.getItem("token")
      }
      
    })
    console.log(data)
    setEditMode(false);
    alert("Edited Successfully")
    }
    catch(e){
      alert("Error in Editing" )
      console.log(e)
    }
    
  }

  return (
    <div className='pt-16'>

      {userdata&&userdata.map((item)=>{
        return <><div className="md:mt-14 mt-8 max-w-lg w-full bg-[#1e1e1e] text-white rounded-2xl shadow-lg border border-[#ff0000] p-8 mx-auto">
      <div className="flex flex-col items-center">
        <img src="https://i.pravatar.cc/150?img=3" alt="profile" className="w-28 h-28 rounded-full border-4 border-[#ff0000] mb-4" />
        <h2 className="text-3xl font-semibold mb-2">{item.username || "Guest User"}</h2>
        <p className="text-gray-400 text-sm mb-4">
          {plan} Plan — Valid till {validitydate(item.createdAt)}
        </p>
      </div>

      <div className="space-y-4 mt-6">
        <div>
          <label className="text-gray-300 text-sm block mb-1">Full Name</label>
          {editMode ? (
            <input
              type="text"
              value={item.username}
              onChange={(e) => {item.username=e.target.value;setusername(e.target.value)}}
              className="w-full bg-[#2b2b2b] text-white border border-[#ff0000] rounded-md p-2"
            />
          ) : (
            <p className="bg-[#2b2b2b] rounded-md p-2 text-gray-200">{item.username}</p>
          )}
        </div>

        <div>
          <label className="text-gray-300 text-sm block mb-1">Email</label>
          {editMode ? (
            <input
              type="email"
              value={item.email}
              onChange={(e) => {item.email=e.target.value;setemail(e.target.value)}}
              className="w-full bg-[#2b2b2b] text-white border border-[#ff0000] rounded-md p-2"
            />
          ) : (
            <p className="bg-[#2b2b2b] rounded-md p-2 text-gray-200">{item.email}</p>
          )}
        </div>
      </div>

      <div className="flex justify-end gap-4 mt-6">
        {editMode ? (
          <>
            <button onClick={()=>deleteprofile(item._id)} className="bg-[#ff0000] hover:bg-[#ff3333] text-white px-4 py-2 rounded-md transition">
              Delete Profile
            </button>
            <button onClick={()=>edit(item._id)} className="bg-[#ff0000] hover:bg-[#ff3333] text-white px-4 py-2 rounded-md transition">
              Save
            </button>
            <button onClick={() => setEditMode(false)} className="border border-[#ff0000] text-[#ff0000] px-4 py-2 rounded-md hover:bg-[#2b2b2b] transition">
              Cancel
            </button>
          </>
        ) : (<>
          <button onClick={()=>deleteprofile(item._id)} className="bg-[#ff0000] hover:bg-[#ff3333] text-white px-4 py-2 rounded-md transition">
              Delete Profile
            </button>
          <button onClick={() => setEditMode(true)} className="bg-[#ff0000] hover:bg-[#ff3333] text-white px-4 py-2 rounded-md transition">
            Edit Profile
          </button>
          <button  onClick={() =>{setuserdata([]);  localStorage.removeItem("token");setlogin(false);navigate('/signin')}} className="bg-[#ff0000] hover:bg-[#ff3333] text-white px-4 py-2 rounded-md transition">
            Logout
          </button></>
        )}
      </div>
    </div>
      </>})}
    
    </div>
  );
};

export default ProfileCard;
