import React, { useState,useContext } from "react";
// import { allmovies } from "../assets/data.json";
import { AppContext } from "../context/Context";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect } from "react";
// import { set } from "mongoose";

const Allseries = () => {
  // store full list
  const [Movies,setMovies] = useState();
  // store filtered list (what user sees)
  var [Filtered, setFiltered] = useState();
      const {list,setlist,setcurrfilm,Wishlistind,setWishlistind} = useContext(AppContext)
      if(Filtered){        
  Filtered=Filtered.filter((item)=>(item.episodes_count))
      }
  const [selectedGenre, setSelectedGenre] = useState("");
  const [searchText, setSearchText] = useState("");

  // handle genre selection
  const handleGenreChange = (e) => {
    const genre = e.target.value;
    setSelectedGenre(genre);
    applyFilters(genre, searchText);
  };
const navigate=useNavigate()
  // handle search input
  const handleSearchChange = (e) => {
    const text = e.target.value.toLowerCase();
    setSearchText(text);
    applyFilters(selectedGenre, text);
  };

  // main filter logic (runs both filters together)
  const applyFilters = (genre, text) => {
    let filtered = Movies;

    if (genre && genre !== "All") {
      filtered = filtered.filter((movie) =>
        movie.genre.some((g) => g.toLowerCase() === genre.toLowerCase())
      );
    }

    if (text) {
      filtered = filtered.filter((movie) =>
        movie.name.toLowerCase().includes(text)
      );
    }

    setFiltered(filtered);
  };

  useEffect(()=>{
    fetch("http://localhost:3000/")
    .then((values)=>values.json())
    .then((value)=>{setMovies(value);setFiltered(value)})
    .catch((e)=>console.log("Error occured during fetching action movies"))
  },[])

  return (
    <div className="relative">
      {/* Top Filter Bar */}
      <div className="md:flex sticky md:top-20 top-7 px-4 md:px-8 bg-[#222121ff] w-full justify-between items-center py-2 z-20 md:py-4">
        <div className="flex justify-center md:justify-between items-center gap-2">
          <div className= "w-[50%] md:w-60 md:w-full text-lg md:text-2xl text-[#222121ff] my-2 py-1 px-2 md:my-4 md:py-2 md:px-4 bg-[#f60808ff] rounded-lg font-bold">
            All Series
          </div>

          {/* Genre Dropdown */}
          <select
            id="category"
            name="category"
            value={selectedGenre}
            onChange={handleGenreChange}
            className="md:py-2 md:px-4 py-1 px-2 rounded-md md:w-60 w-[50%] bg-[#222121ff] md:mb-0  text-white border border-gray-700 focus:ring-2 focus:ring-red-500"
          >
            <option value="All">All Genre</option>
            <option value="Action">Action</option>
            <option value="Romance">Romance</option>
            <option value="Drama">Drama</option>
            <option value="Emotional">Emotional</option>
          </select>
        </div>

        {/* Search Input */}
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Type movie name..."
          value={searchText}
          onChange={handleSearchChange}
          className="md:w-80 w-60 py-2 px-4 rounded-md bg-[#222121ff] text-white border border-gray-600 focus:ring-2 focus:ring-red-500"
        />
      </div>

      {/* Movie Grid */}
      <div className="flex flex-wrap mt-4 justify-center gap-6 px-6">
        {Filtered&&Filtered.length > 0 ? (
          Filtered.map((item, index) => (
            <div key={index} className="relative w-[300px] h-[350px] shrink-0 hover:scale-105 group">
  <img src={item.thumbnail} alt={item.name} width={300} className="h-[350px]  rounded-md" />
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-[#222020af] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <div className="text-2xl text-white">{item.name}</div>
    <div className="text-[16px] text-white">{item.ratings} Ratings from IMDB</div>

    <div className="p-4 w-full">
      {Wishlistind.includes(item._id) ? (<button onClick={() => navigate("/wishlist")} className="text-[18px] rounded-md bg-[#ff0000ff] px-3 py-1 w-full">
          Go to Wishlist
        </button>
      ) : (<button  onClick={() => { setlist([...list, item._id]);
         setWishlistind([...Wishlistind, item._id]);}} className="text-[18px] rounded-md bg-[#ff0000ff] px-3 py-1 w-full">
          Add to Wishlist
        </button>
      )}

      <NavLink to="/watch" onClick={()=>setcurrfilm(item._id)}   className="border block w-full  cursor-pointer hover:border-[#000000] hover:border-2 border-[#ff0000] my-4 text-center text-[18px] rounded-md px-3 py-1  text-white">
        Watch Now
      </NavLink>
    </div>
  </div>
            </div>
          ))
        ) : (
          <p className="text-white text-lg mt-20">No series found 😢</p>
        )}
      </div>
    </div>
  );
};

export default Allseries;
