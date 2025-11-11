import { createContext, useState } from "react"

export const AppContext=createContext()

export const AppProvider=({children})=>{
    const [list,setlist]=useState([])
    const [currfilm,setcurrfilm]=useState(null)
    const [login,setlogin]=useState(false)
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
    const [name,setname]=useState("")
    
  const [Wishlistind,setWishlistind]=useState([])
    return(
        <AppContext.Provider value={{list,email,setemail,name,setname,setlist,password,setpassword,login,setlogin,Wishlistind,setWishlistind,currfilm,setcurrfilm}}>{children}</AppContext.Provider>

    )
}