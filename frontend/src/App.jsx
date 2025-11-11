import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Explore from './pages/Explore'
import Wishlist from './pages/Wishlist'
import Profile from './pages/Profile'
import Movies from './pages/Movies'
import Series from './pages/Series'
import Search from './pages/Search'
import Navbar from './components/Navbar'
import Watch from './pages/Watch'
import { Login } from './pages/Login'

const App = () => {

  const [query,setquery]=useState("")
  return (
    <div>
      <Navbar setquery={setquery}/>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/explore' Component={Explore}/>
        <Route path='/wishlist' Component={Wishlist}/>
        <Route path='/profile' Component={Profile}/>
        <Route path='/movies' Component={Movies}/>
        <Route path='/watch' Component={Watch}/>
        <Route path='/series' Component={Series}/>
        <Route path='/login' Component={Login}/>
        <Route path='/search' element={<Search query={query}/>}/>
      </Routes>
    </div>
  )
}

export default App