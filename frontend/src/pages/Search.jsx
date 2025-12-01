import React, { use, useState } from 'react'
import allmovies from "../assets/data.json"
import SearchResults from '../components/SearchResults'
import Footer from '../components/Footer'

const Search = () => {
  return (
    <>
    <SearchResults/>
    <Footer/>
    </>
  )
}

export default Search