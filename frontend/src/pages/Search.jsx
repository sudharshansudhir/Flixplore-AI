import React, { use, useEffect, useState } from 'react'
import allmovies from "../assets/data.json"
import SearchResults from '../components/SearchResults'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'

const Search = () => {
  const navigate=useNavigate()
    const isAdmin=localStorage.getItem("isAdmin")
    useEffect(()=>{if(isAdmin){
      navigate("/admin")
    }},[])
  return (
    <>
    <SearchResults/>
    <Footer/>
    </>
  )
}

export default Search