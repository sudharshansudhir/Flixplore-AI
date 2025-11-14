import { createContext, useState } from "react"

export const AppContext=createContext()

export const AppProvider=({children})=>{
    const [list,setlist]=useState([])
    const [currfilm,setcurrfilm]=useState(null)
    const [login,setlogin]=useState(false)
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
    const [username,setusername]=useState("")
    
  const [Wishlistind,setWishlistind]=useState([])
    return(
        <AppContext.Provider value={{list,email,setemail,username,setusername,setlist,password,setpassword,login,setlogin,Wishlistind,setWishlistind,currfilm,setcurrfilm}}>{children}</AppContext.Provider>

    )
}