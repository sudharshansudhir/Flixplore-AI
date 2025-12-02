import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Wishlist from './pages/Wishlist'
import Profile from './pages/Profile'
import Movies from './pages/Movies'
import Series from './pages/Series'
import Search from './pages/Search'
import Navbar from './components/Navbar'
import Watch from './pages/Watch'
import Login from './pages/Login'
import Register from './pages/Register'
import Bot from './components/Bot'
import Admin from './pages/Admin'
import AdminEdit from './pages/AdminEdit'
import Adminnavbar from './components/Adminnavbar'

const App = () => {
  const location=useLocation()

  const isadmin=location.pathname.startsWith("/admin")

  return (
    <div>
      {!isadmin &&  <Navbar/>}
      {isadmin && <Adminnavbar/>}
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/wishlist' Component={Wishlist}/>
        <Route path='/profile' Component={Profile}/>
        <Route path='/movies' Component={Movies}/>
        <Route path='/watch/:name' Component={Watch}/>
        <Route path='/admin/edit/:id' Component={AdminEdit}/>
        <Route path='/series' Component={Series}/>
        <Route path='/signup' Component={Register}/>
        <Route path='/signin' Component={Login}/>
        <Route path='/search' Component={Search}/>
        <Route path="/admin" Component={Admin}/>
      </Routes>
      {!isadmin && <Bot/>}
    </div>
  )
}

export default App