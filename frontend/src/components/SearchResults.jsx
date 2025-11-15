import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/Context'
import { NavLink, useNavigate, useLocation } from 'react-router-dom'
import axios from 'axios';

const SearchResults = () => {

  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query") || "";

  const {
    list, setlist,
    login, userlist, setuserlist,
    Wishlistind, setcurrfilm, setWishlistind
  } = useContext(AppContext)

  const navigate = useNavigate()
  const [allmovies, setallmovies] = useState([])

  const Movieslist = allmovies.filter(item =>
    item.name.toLowerCase().includes(query.toLowerCase())
  )

  useEffect(() => {

    fetch("http://localhost:3000/")
      .then(res => res.json())
      .then(data => setallmovies(data))
      .catch(() => console.log("Error fetching movies"))

    async function fetchwishlist() {
      try {
        const wishlist = await axios.get("http://localhost:3000/api/wishlist", {
          headers: { Authorization: localStorage.getItem("token") }
        })

        setuserlist(wishlist.data)
      } catch (e) {
        console.log("Wishlist load error")
      }
    }

    fetchwishlist()

  }, [query])  // IMPORTANT: rerun when query changes

  async function addlist(item) {
    await axios.post("http://localhost:3000/api/wishlist", { wishlist: item }, {
      headers: { Authorization: localStorage.getItem("token") }
    })

    const wishlist = await axios.get("http://localhost:3000/api/wishlist", {
      headers: { Authorization: localStorage.getItem("token") }
    })
    setuserlist(wishlist.data)
  }

  return (
    <div className='pt-12 md:pt-24'>
      <div className="flex flex-wrap mt-4 justify-center gap-6 px-6">
        {Movieslist.length > 0 ? (
          Movieslist.map((item, index) => (
            <div key={index} className="relative w-[300px] h-[350px] shrink-0 hover:scale-105 group">

              <img src={item.thumbnail} className="h-[350px] rounded-md" />

              <div className="absolute inset-0 flex flex-col justify-center items-center bg-[#222020af] 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300">

                <div className="text-2xl text-white">{item.name}</div>
                <div className="text-white">{item.ratings} Ratings</div>

                <div className="p-4 w-full">
                  {login ? (
                    <>

                      {userlist.includes(item.name) ? (
                        <button onClick={() => navigate("/wishlist")}
                          className="bg-[#ff0000] text-white w-full rounded-md px-3 py-1 text-[18px]">
                          Go to Wishlist
                        </button>
                      ) : (
                        <button onClick={() => {
                          addlist(item.name)
                          setlist([...list, item.name])
                          setWishlistind([...Wishlistind, item.name])
                        }}
                          className="bg-[#ff0000] text-white w-full rounded-md px-3 py-1 text-[18px]">
                          Add to Wishlist
                        </button>
                      )}

                      <NavLink
                        to={`/watch/${item.name}`}
                        onClick={() => setcurrfilm(item.name)}
                        className="border mt-4 block w-full text-center rounded-md px-3 py-1 text-white border-[#ff0000]">
                        Watch Now
                      </NavLink>

                    </>
                  ) : (
                    <NavLink to="/signin"
                      className="border block w-full mt-5 text-center rounded-md px-3 py-1 text-white border-[#ff0000]">
                      Login to Watch
                    </NavLink>
                  )}
                </div>

              </div>
            </div>
          ))
        ) : (
          <p className="text-white text-lg mt-20">No movies found 😢</p>
        )}
      </div>
    </div>
  )
}

export default SearchResults
